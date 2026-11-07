const API = '/api/v1';
const $ = id => document.getElementById(id);
const regionNames = {ayeyarwady:'Ayeyarwady Delta',central_dry_zone:'Central Dry Zone',shan_highlands:'Shan Highlands',coastal_rakhine:'Coastal Rakhine'};
let telemetry = null;
let advisory = null;
let selectedPlan = 0;
let selectedPlot = 'A-1';
let focus = 'overview';
let telemetryRequest;
let comparisonRequest;

function pretty(value) { return value ? String(value).replaceAll('_',' ').toUpperCase() : 'UNAVAILABLE'; }
function number(value, digits, unit = '') { return typeof value === 'number' && Number.isFinite(value) ? value.toFixed(digits) + unit : '—'; }
function sourceLine(metric, dateField = 'observation_date') {
  if (!metric || metric[dateField] == null) return 'NASA DATA UNAVAILABLE';
  return (metric.source || 'NASA') + ' • ' + metric[dateField] + (metric.stale_cache ? ' • CACHED' : '');
}
async function getJson(path, options = {}) {
  const response = await fetch(API + path, options);
  if (!response.ok) {
    let message = 'HTTP ' + response.status;
    try { message = (await response.json()).message || message; } catch {}
    throw new Error(message);
  }
  return response.json();
}
function tileXY(latitude, longitude, zoom) {
  const lat = Math.max(-85.0511, Math.min(85.0511, latitude)) * Math.PI / 180;
  return {x:Math.floor((longitude + 180) / 360 * 2 ** zoom),y:Math.floor((1 - Math.asinh(Math.tan(lat)) / Math.PI) / 2 * 2 ** zoom)};
}
function buildPlots() {
  const grid = $('plot-grid');
  const icons = ['🌾','💧','🌱','🌾','🌱','💧'];
  for (const row of ['A','B','C']) for (let column = 1; column <= 6; column++) {
    const name = row + '-' + column;
    const tile = document.createElement('button');
    tile.type = 'button';
    tile.className = 'plot-tile';
    tile.setAttribute('aria-pressed', String(name === selectedPlot));
    tile.setAttribute('aria-label', 'Planning plot ' + name);
    const label = document.createElement('small');
    label.textContent = name;
    const icon = document.createElement('span');
    icon.textContent = icons[column - 1];
    tile.append(label, icon);
    tile.addEventListener('click', () => {
      selectedPlot = name;
      $('selected-plot').textContent = 'PLOT ' + name + ' SELECTED';
      for (const item of grid.children) item.setAttribute('aria-pressed', String(item === tile));
    });
    grid.append(tile);
  }
}
function renderFocus() {
  const t = telemetry?.telemetry || {};
  const soil = t.soil_moisture;
  const rain = t.rainfall;
  const heat = t.land_surface_temp;
  const entries = {
    overview: {
      title: telemetry ? 'OBSERVED REGIONAL CONDITIONS' : 'LOADING NASA OBSERVATIONS…',
      description: telemetry ? 'Representative point readings for ' + telemetry.region + '. Select a signal to inspect the source and date.' : 'Observed readings will appear here. This tool does not predict future climate.',
      source: telemetry ? 'NASA POWER + ORNL DAAC / ' + telemetry.status.toUpperCase() : 'SOURCE —',
      value: telemetry ? telemetry.status.toUpperCase() : '—'
    },
    soil: {
      title: 'SURFACE WETNESS INDICATOR',
      description: soil?.value_percentage == null ? 'Soil reading unavailable for this region.' : 'Observed ' + pretty(soil.status) + '. ' + (soil.measurement_type === 'surface_wetness_fraction' ? 'This is MERRA-2 wetness, not SMAP volumetric soil moisture.' : 'SMAP surface moisture sample.'),
      source: sourceLine(soil),
      value: number(soil?.value_percentage,1,'%')
    },
    rain: {
      title: 'OBSERVED RAINFALL SIGNAL',
      description: rain?.precipitation_mm_day == null ? 'Rainfall reading unavailable for this period.' : 'Mean rainfall over the available days in the current period. Historical anomaly: ' + number(rain.monthly_anomaly_percentage,1,'%') + '. This is not a forecast.',
      source: sourceLine(rain,'observation_end'),
      value: number(rain?.precipitation_mm_day,2,' MM/D')
    },
    heat: {
      title: 'LAND SURFACE HEAT CHECK',
      description: heat?.celsius == null ? 'MODIS land surface temperature unavailable.' : 'Observed ' + pretty(heat.status) + ' from an 8-day MODIS composite. This is land surface temperature, not air temperature.',
      source: sourceLine(heat),
      value: number(heat?.celsius,1,'°C')
    }
  };
  const item = entries[focus];
  $('focus-title').textContent = item.title;
  $('focus-description').textContent = item.description;
  $('focus-source').textContent = item.source;
  $('focus-value').textContent = item.value;
}
function updateMatrix() {
  const t = telemetry?.telemetry || {};
  $('matrix-crop').textContent = pretty($('crop-select').value);
  $('matrix-option').textContent = advisory?.rotation_options?.[selectedPlan] ? pretty(advisory.rotation_options[selectedPlan].next_crop) + ' → ' + pretty(advisory.rotation_options[selectedPlan].follow_up_crop) : 'RUN EVALUATION';
  const soil = t.soil_moisture;
  const heat = t.land_surface_temp;
  const rain = t.rainfall;
  $('matrix-soil').textContent = soil?.value_percentage == null ? 'NASA READING UNAVAILABLE' : number(soil.value_percentage,1,'%') + ' ' + pretty(soil.measurement_type) + ' • ' + (soil.observation_date || '');
  $('matrix-heat').textContent = heat?.celsius == null ? 'NASA READING UNAVAILABLE' : number(heat.celsius,1,'°C') + ' MODIS LAND SURFACE • ' + (heat.observation_date || '');
  $('matrix-rain').textContent = rain?.precipitation_mm_day == null ? 'NASA READING UNAVAILABLE' : number(rain.precipitation_mm_day,2,' MM/DAY') + ' • ANOMALY ' + number(rain.monthly_anomaly_percentage,1,'%');
}
function renderProvenance(data) {
  const point = data.sample_location;
  $('sample-info').textContent = point
    ? 'SAMPLE POINT: ' + point.latitude.toFixed(2) + '° N, ' + point.longitude.toFixed(2) + '° E • REGION BBOX: ' + data.coordinates_bbox
    : 'SAMPLE LOCATION UNAVAILABLE';
  const metrics = [
    ['SOIL WATER', data.telemetry?.soil_moisture, 'observation_date'],
    ['LAND SURFACE TEMP', data.telemetry?.land_surface_temp, 'observation_date'],
    ['VEGETATION NDVI', data.telemetry?.vegetation_health_ndvi, 'observation_date'],
    ['RAINFALL', data.telemetry?.rainfall, 'observation_end']
  ];
  const sources = $('source-list');
  sources.replaceChildren(...metrics.map(([name, metric, dateField]) => {
    const item = document.createElement('li');
    item.textContent = name + ': ' + sourceLine(metric, dateField);
    return item;
  }));
  const matches = Object.keys(data.cmr_granules || {}).length;
  $('catalog-note').textContent = 'CMR CATALOG: ' + matches + ' matching product entries. These are inventory matches, not exact pixel provenance.';
  const limitations = $('limitations-list');
  limitations.replaceChildren(...(data.limitations || []).map(text => {
    const item = document.createElement('li');
    item.textContent = text;
    return item;
  }));
}
function resetComparison() {
  comparisonRequest?.abort();
  $('watch-results').replaceChildren();
  $('watch-status').textContent = 'CHOOSE A SECOND REGION TO LOAD LIVE READINGS.';
  const current = $('region-select').value;
  if ($('compare-select').value === current) {
    $('compare-select').value = Object.keys(regionNames).find(id => id !== current);
  }
}
function renderComparison(other) {
  const first = telemetry;
  const rows = [
    ['SOIL WETNESS', 'soil_moisture', 'value_percentage', 1, '%', 'observation_date'],
    ['LAND TEMP', 'land_surface_temp', 'celsius', 1, '°C', 'observation_date'],
    ['VEGETATION NDVI', 'vegetation_health_ndvi', 'index_value', 2, '', 'observation_date'],
    ['RAINFALL / DAY', 'rainfall', 'precipitation_mm_day', 2, ' MM', 'observation_end']
  ];
  const table = document.createElement('table');
  table.className = 'watch-table';
  const head = document.createElement('thead');
  const header = document.createElement('tr');
  for (const text of ['NASA METRIC', first.region.toUpperCase(), other.region.toUpperCase(), 'DIFFERENCE']) {
    const th = document.createElement('th');
    th.textContent = text;
    header.append(th);
  }
  head.append(header);
  const body = document.createElement('tbody');
  for (const [label, key, field, digits, unit, dateField] of rows) {
    const a = first.telemetry?.[key];
    const b = other.telemetry?.[key];
    const row = document.createElement('tr');
    const name = document.createElement('td');
    name.textContent = label;
    row.append(name);
    for (const metric of [a, b]) {
      const cell = document.createElement('td');
      cell.textContent = number(metric?.[field], digits, unit);
      const note = document.createElement('small');
      note.textContent = metric?.[dateField] || 'DATE UNAVAILABLE';
      cell.append(note);
      row.append(cell);
    }
    const deltaCell = document.createElement('td');
    if (key === 'soil_moisture' && a?.measurement_type !== b?.measurement_type) {
      deltaCell.textContent = 'NOT COMPARABLE';
      const note = document.createElement('small');
      note.textContent = 'DIFFERENT SOIL MEASURES';
      deltaCell.append(note);
    } else if (typeof a?.[field] === 'number' && typeof b?.[field] === 'number') {
      const delta = Number(b[field].toFixed(digits)) - Number(a[field].toFixed(digits));
      deltaCell.textContent = (delta > 0 ? '+' : '') + delta.toFixed(digits) + unit;
    } else deltaCell.textContent = '—';
    row.append(deltaCell);
    body.append(row);
  }
  table.append(head,body);
  $('watch-results').replaceChildren(table);
  $('watch-status').textContent = 'SECOND REGION MINUS FIRST • ' + other.status.toUpperCase() + ' TELEMETRY. COMPARE SOURCES AND DATES BEFORE ACTING.';
}
async function compareRegions() {
  if (!telemetry) {
    $('watch-status').textContent = 'LOAD THE FIRST REGION BEFORE COMPARING.';
    return;
  }
  const region = $('compare-select').value;
  if (region === telemetry.region_id) {
    $('watch-status').textContent = 'CHOOSE A DIFFERENT REGION.';
    return;
  }
  comparisonRequest?.abort();
  const controller = new AbortController();
  comparisonRequest = controller;
  $('watch-button').disabled = true;
  $('watch-status').textContent = 'LOADING SECOND NASA REGION…';
  try {
    const other = await getJson('/telemetry/region/' + encodeURIComponent(region), {signal:controller.signal});
    renderComparison(other);
  } catch (error) {
    if (error.name !== 'AbortError') $('watch-status').textContent = 'REGION COMPARISON UNAVAILABLE • ' + error.message;
  } finally {
    if (comparisonRequest === controller) $('watch-button').disabled = false;
  }
}
function renderTelemetry(data) {
  telemetry = data;
  const t = data.telemetry || {};
  const soil = t.soil_moisture;
  const heat = t.land_surface_temp;
  const ndvi = t.vegetation_health_ndvi;
  const rain = t.rainfall;
  $('soil-value').textContent = number(soil?.value_percentage,1,'%');
  $('temp-value').textContent = number(heat?.celsius,1,'°C');
  $('ndvi-value').textContent = number(ndvi?.index_value,2);
  $('rain-value').textContent = number(rain?.precipitation_mm_day,2,' MM');
  $('soil-meta').textContent = sourceLine(soil);
  $('temp-meta').textContent = sourceLine(heat);
  $('ndvi-meta').textContent = sourceLine(ndvi);
  $('rain-meta').textContent = sourceLine(rain,'observation_end');
  $('connection-status').textContent = 'NASA DATA ' + data.status.toUpperCase() + ' • ' + data.region.toUpperCase();
  $('updated-at').textContent = 'API RESPONSE ' + new Date(data.timestamp).toLocaleString();
  $('api-limits').textContent = (data.limitations || []).find(item => item.includes('SMAP')) || '';
  $('tile-region').textContent = data.region.toUpperCase();
  const point = data.sample_location;
  const date = ndvi?.observation_date || heat?.observation_date;
  if (point && date) {
    const {x,y} = tileXY(point.latitude,point.longitude,6);
    $('tile-image').src = API + '/tiles/true_color_terra/' + date + '/6/' + x + '/' + y + '.jpg';
    $('tile-date').textContent = date + ' • ' + point.latitude.toFixed(2) + 'N ' + point.longitude.toFixed(2) + 'E';
  } else {
    $('tile-image').removeAttribute('src');
    $('tile-date').textContent = 'TILE DATE UNAVAILABLE';
  }
  renderFocus();
  updateMatrix();
  renderProvenance(data);
}
function clearAdvisory() {
  advisory = null;
  selectedPlan = 0;
  $('decision-results').replaceChildren();
  $('crop-cards').innerHTML = '<p class="empty-state">CROP OPTIONS APPEAR AFTER YOU RUN THE DECISION ENGINE.</p>';
  $('crop-context').textContent = 'RUN EVALUATION FOR OPTIONS';
  $('advisory-status').textContent = 'RUN THE DECISION ENGINE TO SEE LIVE BACKEND OPTIONS.';
  $('irrigation-detail').textContent = 'Run the decision engine to check soil and rainfall observations.';
  $('irrigation-action').textContent = 'AWAITING ADVISORY';
  $('pest-detail').textContent = 'A screening score and land temperature will appear after evaluation.';
  $('pest-score').textContent = '—';
  updateMatrix();
}
async function loadTelemetry() {
  telemetryRequest?.abort();
  const controller = new AbortController();
  telemetryRequest = controller;
  telemetry = null;
  resetComparison();
  clearAdvisory();
  $('region-select').disabled = true;
  $('refresh-button').disabled = true;
  $('connection-status').textContent = 'CONNECTING TO NASA DATA…';
  renderFocus();
  try {
    const data = await getJson('/telemetry/region/' + encodeURIComponent($('region-select').value),{signal:controller.signal});
    renderTelemetry(data);
  } catch (error) {
    if (error.name !== 'AbortError') {
      $('connection-status').textContent = 'NASA DATA UNAVAILABLE • ' + error.message;
      $('updated-at').textContent = 'RETRY WITH REFRESH';
    }
  } finally {
    if (telemetryRequest === controller) {
      $('region-select').disabled = false;
      $('refresh-button').disabled = false;
    }
  }
}
function selectPlan(index) {
  selectedPlan = index;
  document.querySelectorAll('.crop-card').forEach((card,i) => card.classList.toggle('selected',i === index));
  document.querySelectorAll('.decision-option').forEach((card,i) => card.classList.toggle('selected',i === index));
  updateMatrix();
}
function renderAdvisory(data) {
  advisory = data;
  const options = data.rotation_options || [];
  $('advisory-status').textContent = 'BACKEND RULES • ' + data.telemetry_status.toUpperCase() + ' TELEMETRY • ' + options.length + ' ROTATION OPTIONS';
  $('crop-context').textContent = 'UPDATED FROM LIVE BACKEND';
  const decision = $('decision-results');
  const cards = $('crop-cards');
  decision.replaceChildren();
  cards.replaceChildren();
  options.forEach((option,index) => {
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'decision-option';
    const name = document.createElement('strong');
    name.textContent = pretty(option.next_crop) + ' → ' + pretty(option.follow_up_crop);
    const score = document.createElement('span');
    score.textContent = option.suitability_score + '/100';
    const reason = document.createElement('p');
    reason.textContent = option.rationale || '';
    const bar = document.createElement('div');
    bar.className = 'bar';
    const fill = document.createElement('i');
    fill.style.width = Math.max(0,Math.min(100,option.suitability_score)) + '%';
    bar.append(fill);
    row.append(name,score,reason,bar);
    row.addEventListener('click',() => selectPlan(index));
    decision.append(row);
    const card = document.createElement('article');
    card.className = 'crop-card';
    const top = document.createElement('div');
    top.className = 'crop-top';
    const icon = document.createElement('span');
    icon.className = 'crop-icon';
    icon.textContent = ['🌾','🌱','🌿'][index % 3];
    const badge = document.createElement('span');
    badge.className = 'score-badge';
    badge.textContent = option.suitability_score + '/100';
    top.append(icon,badge);
    const title = document.createElement('h3');
    title.textContent = pretty(option.next_crop);
    const description = document.createElement('p');
    description.textContent = option.rationale || 'Check local field suitability.';
    const button = document.createElement('button');
    button.className = 'pixel-button blue';
    button.type = 'button';
    button.textContent = 'SELECT PLAN';
    button.addEventListener('click',() => selectPlan(index));
    card.append(top,title,description,button);
    cards.append(card);
  });
  if (!options.length) {
    cards.innerHTML = '<p class="empty-state">NO ROTATION OPTIONS AVAILABLE.</p>';
  }
  $('irrigation-detail').textContent = (data.irrigation?.explanation || 'No irrigation reading available.') + ' ' + (data.disclaimer || '');
  $('irrigation-action').textContent = (data.irrigation?.recommendation || 'UNAVAILABLE').toUpperCase();
  $('pest-detail').textContent = (data.pest_risk?.explanation || 'No screening data available.') + ' Land surface temperature: ' + number(telemetry?.telemetry?.land_surface_temp?.celsius,1,'°C') + '.';
  $('pest-score').textContent = typeof data.pest_risk?.score_percentage === 'number' ? data.pest_risk.score_percentage + '/100 • LOW CONFIDENCE' : 'UNAVAILABLE';
  selectPlan(0);
}
async function evaluate() {
  const button = $('evaluate-button');
  button.disabled = true;
  button.textContent = '▶ EVALUATING…';
  $('advisory-status').textContent = 'REQUESTING BACKEND ADVISORY…';
  try {
    const data = await getJson('/advisory/evaluate',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({region_id:$('region-select').value,soil_type:$('soil-select').value,current_crop:$('crop-select').value,target_season:$('season-select').value})
    });
    renderAdvisory(data);
  } catch (error) {
    $('advisory-status').textContent = 'ADVISORY UNAVAILABLE • ' + error.message;
  } finally {
    button.disabled = false;
    button.textContent = '▶ EVALUATE WITH NASA DATA';
  }
}
function setEyeMode(enabled) {
  document.body.classList.toggle('eye-mode',enabled);
  $('eye-button').setAttribute('aria-pressed',String(enabled));
  $('eye-button').textContent = enabled ? '◉ STANDARD' : '◉ EYE MODE';
  try { localStorage.setItem('field-shift-eye-mode',enabled ? 'yes' : 'no'); } catch {}
}
buildPlots();
document.querySelectorAll('[data-focus]').forEach(button => button.addEventListener('click',() => {
  focus = button.dataset.focus;
  document.querySelectorAll('[data-focus]').forEach(item => {const active = item === button; item.classList.toggle('active',active); item.setAttribute('aria-pressed',String(active));});
  renderFocus();
}));
$('region-select').addEventListener('change',loadTelemetry);
$('refresh-button').addEventListener('click',loadTelemetry);
$('evaluate-button').addEventListener('click',evaluate);
$('watch-button').addEventListener('click',compareRegions);
$('eye-button').addEventListener('click',() => setEyeMode(!document.body.classList.contains('eye-mode')));
for (const id of ['crop-select','soil-select','season-select']) $(id).addEventListener('change',clearAdvisory);
try { setEyeMode(localStorage.getItem('field-shift-eye-mode') === 'yes'); } catch { setEyeMode(false); }
loadTelemetry();

