// Preserve the English API text as the source so switching languages never changes data.
const myText = {
  'NASA DATA INSPIRED':'NASA ဒေတာအခြေပြု',
  'Field Shift pixel farm logo':'Field Shift pixel လယ်မြေလိုဂို',
  'LIVE • MM':'တိုက်ရိုက် • မြန်မာ',
  'NASA EARTH OBSERVATIONS & PIXEL AGRO-DECISION SYSTEM':'NASA မြေကြီးလေ့လာမှုနှင့် စိုက်ပျိုးရေးဆုံးဖြတ်ချက် အထောက်အကူပြုစနစ်',
  'AGRO-ZONE':'စိုက်ပျိုးရေးဒေသ',
  'Language':'ဘာသာစကား',
  'Choose a NASA observation focus':'NASA လေ့လာချက်အမျိုးအစား ရွေးပါ',
  'Choose a planning plot':'အစီအစဉ်အတွက် လယ်ကွက် ရွေးပါ',
  'NASA GIBS satellite tile for selected region':'ရွေးထားသောဒေသ၏ NASA GIBS ဂြိုဟ်တုမြေပုံ',
  '◉ EYE MODE':'◉ ဖတ်ရှုရလွယ်မုဒ်',
  '◉ STANDARD':'◉ ပုံမှန်မုဒ်',
  'CONNECTING TO NASA DATA…':'NASA ဒေတာ ချိတ်ဆက်နေသည်…',
  'OBSERVATION TIME —':'လေ့လာချက်အချိန် —',
  'RELOAD PAGE TO RETRY':'စာမျက်နှာကို ပြန်ဖွင့်ပြီး ထပ်စမ်းပါ',
  'FARM VIEW / 01':'လယ်မြေမြင်ကွင်း / ၀၁',
  'SIMULATED FARM SECTOR GRID':'နမူနာ လယ်ကွက်ဇယား',
  'PLOT A-1 SELECTED':'ကွက် A-1 ကို ရွေးထားသည်',
  'SELECT A TILE TO STAGE A PLAN. NASA READINGS ARE REGIONAL POINT SAMPLES, NOT INDIVIDUAL PLOT SENSORS.':'အစီအစဉ်အတွက် ကွက်တစ်ကွက် ရွေးပါ။ NASA ဖတ်ချက်များသည် ဒေသတွင်း နမူနာနေရာတစ်ခုအတွက်သာ ဖြစ်ပြီး လယ်ကွက်တစ်ခုချင်းစီ၏ အာရုံခံဒေတာ မဟုတ်ပါ။',
  'NASA GIBS TILE':'NASA GIBS မြေပုံ',
  'WAITING FOR DATA':'ဒေတာ စောင့်နေသည်',
  'OBSERVATION DATE —':'လေ့လာချက်ရက်စွဲ —',
  'TILE DATE UNAVAILABLE':'မြေပုံရက်စွဲ မရနိုင်ပါ',
  'DECISION ENGINE / 02':'ဆုံးဖြတ်ချက်အထောက်အကူ / ၀၂',
  'CROP SUITABILITY':'သီးနှံသင့်လျော်မှု',
  'CURRENT CROP':'လက်ရှိသီးနှံ',
  'SOIL TYPE':'မြေအမျိုးအစား',
  'TARGET SEASON':'စိုက်ပျိုးရာသီ',
  '▶ EVALUATE WITH NASA DATA':'▶ NASA ဒေတာဖြင့် စစ်ဆေးပါ',
  '▶ EVALUATING…':'▶ စစ်ဆေးနေသည်…',
  'RUN THE DECISION ENGINE TO SEE LIVE BACKEND OPTIONS.':'သီးနှံအကြံပြုချက်များကို ကြည့်ရန် စစ်ဆေးခလုတ်ကို နှိပ်ပါ။',
  'NASA FEED / 03':'NASA ဒေတာ / ၀၃',
  'CLIMATE SIGNAL EXPLORER':'ရာသီဥတု အချက်ပြချက်များ',
  'Choose a lens to inspect observed NASA conditions for this region.':'ဤဒေသအတွက် NASA လေ့လာချက်ကို ခေါင်းစဉ်အလိုက် ကြည့်ပါ။',
  '● OBSERVED DATA':'● လေ့လာချက်ဒေတာ',
  'OVERVIEW':'အကျဉ်းချုပ်',
  'SOIL WATER':'မြေစိုထိုင်းမှု',
  'RAINFALL':'မိုးရေချိန်',
  'HEAT':'အပူချိန်',
  'LOADING NASA OBSERVATIONS…':'NASA လေ့လာချက်များ ရယူနေသည်…',
  'Observed readings will appear here. This tool does not predict future climate.':'လေ့လာချက်များကို ဤနေရာတွင် ပြပါမည်။ အနာဂတ်ရာသီဥတုကို ခန့်မှန်းခြင်း မဟုတ်ပါ။',
  'SOURCE —':'ဒေတာရင်းမြစ် —',
  'SOIL WETNESS':'မြေမျက်နှာပြင် စိုထိုင်းမှု',
  'LAND TEMP':'မြေမျက်နှာပြင် အပူချိန်',
  'VEGETATION NDVI':'အပင်ကျန်းမာရေး NDVI',
  'RAINFALL / DAY':'နေ့စဉ် ပျမ်းမျှမိုးရေချိန်',
  'REGIONAL WATCH / LIVE NASA DATA':'ဒေသနှိုင်းယှဉ်မှု / NASA ဒေတာ',
  'COMPARE TWO MYANMAR REGIONS':'မြန်မာဒေသ နှစ်ခုကို နှိုင်းယှဉ်ပါ',
  'Check observed differences before planning. Each reading samples one point inside its region.':'စိုက်ပျိုးရေးအစီအစဉ်မချမီ လေ့လာချက်များကို နှိုင်းယှဉ်ပါ။ ဒေသတစ်ခုစီတွင် နမူနာနေရာတစ်ခုသာ ပါသည်။',
  'SECOND REGION':'နှိုင်းယှဉ်မည့် ဒုတိယဒေသ',
  '▥ COMPARE NASA DATA':'▥ NASA ဒေတာ နှိုင်းယှဉ်ပါ',
  'CHOOSE A SECOND REGION TO LOAD LIVE READINGS.':'ဒုတိယဒေသကို ရွေးပြီး ဒေတာကို ကြည့်ပါ။',
  'LOAD THE FIRST REGION BEFORE COMPARING.':'ပထမဒေသ ဒေတာရမှ နှိုင်းယှဉ်နိုင်ပါမည်။',
  'CHOOSE A DIFFERENT REGION.':'မတူညီသော ဒေသကို ရွေးပါ။',
  'LOADING SECOND NASA REGION…':'ဒုတိယဒေသ NASA ဒေတာ ရယူနေသည်…',
  'ADVISORY / 04':'အကြံပြုချက် / ၀၄',
  'NASA-INFORMED CROP ROTATIONS':'NASA ဒေတာအခြေပြု သီးနှံအလှည့်ကျ စိုက်ပျိုးမှု',
  'RUN EVALUATION FOR OPTIONS':'ရွေးချယ်စရာများအတွက် စစ်ဆေးပါ',
  'CROP OPTIONS APPEAR AFTER YOU RUN THE DECISION ENGINE.':'စစ်ဆေးပြီးမှ သီးနှံရွေးချယ်စရာများ ပေါ်လာပါမည်။',
  'UPDATED FROM LIVE BACKEND':'Backend ဒေတာဖြင့် အသစ်ပြင်ထားသည်',
  'NO ROTATION OPTIONS AVAILABLE.':'သီးနှံအလှည့်ကျ ရွေးချယ်စရာ မရနိုင်ပါ။',
  'SELECT PLAN':'အစီအစဉ် ရွေးပါ',
  'DECISION SUPPORT / 05':'ဆုံးဖြတ်ချက်အထောက်အကူ / ၀၅',
  'CURRENT PLAN VS. NASA OBSERVATIONS':'လက်ရှိအစီအစဉ်နှင့် NASA လေ့လာချက်',
  'Compare your crop choice with observed conditions and a backend rotation option.':'ရွေးထားသည့်သီးနှံ၊ လေ့လာထားသော အခြေအနေနှင့် အလှည့်ကျစိုက်ပျိုးမှုကို နှိုင်းယှဉ်ပါ။',
  'DECISION METRIC':'ဆုံးဖြတ်ချက်အချက်အလက်',
  'CURRENT PLAN':'လက်ရှိအစီအစဉ်',
  'NASA-ASSISTED VIEW':'NASA ဒေတာအခြေပြု အမြင်',
  'CROP CHOICE':'သီးနှံရွေးချယ်မှု',
  'RUN EVALUATION':'စစ်ဆေးရန် လိုသည်',
  'FIELD CHECK NEEDED':'လယ်မြေတွင် စစ်ဆေးရန် လိုသည်',
  'NASA READING UNAVAILABLE':'NASA ဖတ်ချက် မရနိုင်ပါ',
  'LAND HEAT':'မြေမျက်နှာပြင် အပူ',
  'LOCAL CONDITIONS VARY':'နေရာအလိုက် ကွာခြားနိုင်သည်',
  'HISTORICAL PATTERN UNKNOWN':'ယခင်ပုံစံ မသိရသေးပါ',
  'FIELD ACTION / 06':'လယ်မြေလုပ်ဆောင်ချက် / ၀၆',
  'SMART IRRIGATION CHECK':'ရေသွင်းရန် စစ်ဆေးချက်',
  'Run the decision engine to check soil and rainfall observations.':'မြေစိုထိုင်းမှုနှင့် မိုးရေချိန်ကို စစ်ဆေးရန် ခလုတ်နှိပ်ပါ။',
  'ACTION':'လုပ်ဆောင်ရန်',
  'AWAITING ADVISORY':'အကြံပြုချက် စောင့်နေသည်',
  'FIELD ACTION / 07':'လယ်မြေလုပ်ဆောင်ချက် / ၀၇',
  'PEST & HEAT STRESS SCREEN':'ပိုးမွှားနှင့် အပူဒဏ် စစ်ဆေးချက်',
  'A screening score and land temperature will appear after evaluation.':'စစ်ဆေးပြီးနောက် အန္တရာယ်ညွှန်းကိန်းနှင့် မြေအပူချိန် ပြပါမည်။',
  'SCREENING SCORE':'စစ်ဆေးမှုရမှတ်',
  '▣ DATA SOURCES & LIMITATIONS':'▣ ဒေတာရင်းမြစ်နှင့် ကန့်သတ်ချက်များ',
  'OPEN DETAILS':'အသေးစိတ် ဖွင့်ပါ',
  'WAITING FOR REGION SAMPLE LOCATION.':'ဒေသနမူနာနေရာ စောင့်နေသည်။',
  'CMR catalog matches are not exact pixel provenance.':'CMR ရှာဖွေမှုရလဒ်သည် pixel တန်ဖိုး၏ တိုက်ရိုက်ရင်းမြစ် မဟုတ်ပါ။',
  'FIELD SHIFT IS A HACKATHON PREVIEW. NASA VALUES ARE REGIONAL POINT SAMPLES. ROTATION, IRRIGATION AND PEST OUTPUTS ARE SCREENING RULES, NOT FORECASTS OR VERIFIED FIELD MEASUREMENTS.':'FIELD SHIFT သည် hackathon နမူနာဖြစ်သည်။ NASA တန်ဖိုးများသည် ဒေသတွင်း နမူနာနေရာမှ ဖြစ်သည်။ သီးနှံ၊ ရေသွင်းမှုနှင့် ပိုးမွှားအကြံပြုချက်များသည် စစ်ဆေးရေးစည်းမျဉ်းများသာဖြစ်ပြီး ခန့်မှန်းချက် သို့မဟုတ် လယ်မြေတိုင်းတာချက် မဟုတ်ပါ။',
  'OBSERVED REGIONAL CONDITIONS':'ဒေသအခြေအနေ လေ့လာချက်',
  'SURFACE WETNESS INDICATOR':'မြေမျက်နှာပြင် စိုထိုင်းမှုညွှန်းကိန်း',
  'OBSERVED RAINFALL SIGNAL':'မိုးရေချိန် လေ့လာချက်',
  'LAND SURFACE HEAT CHECK':'မြေမျက်နှာပြင် အပူ စစ်ဆေးချက်',
  'Soil reading unavailable for this region.':'ဤဒေသအတွက် မြေစိုထိုင်းမှုဒေတာ မရနိုင်ပါ။',
  'Rainfall reading unavailable for this period.':'ဤကာလအတွက် မိုးရေချိန်ဒေတာ မရနိုင်ပါ။',
  'MODIS land surface temperature unavailable.':'MODIS မြေမျက်နှာပြင် အပူချိန်ဒေတာ မရနိုင်ပါ။',
  'NASA DATA UNAVAILABLE':'NASA ဒေတာ မရနိုင်ပါ',
  'DATE UNAVAILABLE':'ရက်စွဲ မရနိုင်ပါ',
  'NOT COMPARABLE':'နှိုင်းယှဉ်၍ မရပါ',
  'DIFFERENT SOIL MEASURES':'မြေတိုင်းတာမှု မတူပါ',
  'REQUESTING BACKEND ADVISORY…':'Backend အကြံပြုချက် ရယူနေသည်…',
  'No irrigation reading available.':'ရေသွင်းမှုအတွက် ဒေတာ မရနိုင်ပါ။',
  'No screening data available.':'စစ်ဆေးရေးဒေတာ မရနိုင်ပါ။',
  'Check local field suitability.':'ဒေသ၏ လယ်မြေအခြေအနေကို စစ်ဆေးပါ။',
  'Land surface temperature:':'မြေမျက်နှာပြင် အပူချိန်:',
  'LOW CONFIDENCE':'ယုံကြည်မှု နည်း',
  'UNAVAILABLE':'မရနိုင်ပါ',
  'PARTIAL':'တစ်စိတ်တစ်ပိုင်း',
  'SUCCESS':'အောင်မြင်',
  'CACHED':'သိမ်းထားသောဒေတာ',
  'MONSOON':'မိုးရာသီ',
  'DRY':'ခြောက်သွေ့ရာသီ',
  'COOL':'အေးမြရာသီ',
  'RICE / PADDY':'စပါး',
  'RICE':'စပါး',
  'SESAME':'နှမ်း',
  'MAIZE':'ပြောင်း',
  'GROUNDNUT':'မြေပဲ',
  'MUNG BEAN':'ပဲတီစိမ်း',
  'PIGEON PEA':'ပဲစင်းငုံ',
  'CHICKPEA':'ကုလားပဲ',
  'BLACK GRAM':'မတ်ပဲ',
  'SANDY LOAM':'သဲနုန်းမြေ',
  'LOAM':'နုန်းမြေ',
  'CLAY':'ရွှံ့မြေ',
  'SILT':'နုန်းအနည်မြေ',
  'UNKNOWN':'မသိရ',
  'SURFACE WETNESS FRACTION':'မြေမျက်နှာပြင် စိုထိုင်းမှုအချိုး',
  'MODIS LAND SURFACE':'MODIS မြေမျက်နှာပြင်',
  'AYEYARWADY DELTA':'ဧရာဝတီ မြစ်ဝကျွန်းပေါ်',
  'CENTRAL DRY ZONE':'အလယ်ပိုင်း မိုးနည်းရေရှားဒေသ',
  'SHAN HIGHLANDS':'ရှမ်းကုန်းမြင့်ဒေသ',
  'COASTAL RAKHINE':'ရခိုင်ကမ်းရိုးတန်း',
  'Inspect field moisture before planning irrigation':'ရေသွင်းရန် မစီစဉ်မီ လယ်မြေစိုထိုင်းမှုကို စစ်ဆေးပါ',
  'Check the root zone; irrigation may be needed':'အမြစ်ဇုန်ကို စစ်ဆေးပါ၊ ရေသွင်းရန် လိုနိုင်သည်',
  'Delay irrigation until a field check confirms need':'လယ်မြေစစ်ဆေးပြီး လိုအပ်မှ ရေသွင်းပါ',
  'Monitor soil conditions before scheduling irrigation':'ရေသွင်းချိန် မသတ်မှတ်မီ မြေအခြေအနေကို စောင့်ကြည့်ပါ',
  'Current soil or rainfall data is unavailable.':'လက်ရှိ မြေ သို့မဟုတ် မိုးရေချိန်ဒေတာ မရနိုင်ပါ။',
  'Low sampled surface wetness and recent low rainfall were observed.':'နမူနာနေရာတွင် မြေစိုထိုင်းမှုနှင့် မကြာသေးမီ မိုးရေချိန် နည်းသည်။',
  'Sampled surface wetness is high.':'နမူနာနေရာတွင် မြေမျက်နှာပြင် စိုထိုင်းမှု မြင့်သည်။',
  'Observed conditions do not support a precise watering window.':'လေ့လာချက်များဖြင့် ရေသွင်းချိန် တိတိကျကျ မသတ်မှတ်နိုင်ပါ။',
  'No observation data is available.':'လေ့လာချက်ဒေတာ မရနိုင်ပါ။',
  'Weather and vegetation screening score only; no pest sightings or species model were used.':'ရာသီဥတုနှင့် အပင်အခြေအနေကိုသာ အခြေခံထားသော စစ်ဆေးရေးရမှတ်ဖြစ်သည်။ ပိုးမွှားကို တိုက်ရိုက်မတွေ့ရှိထားပါ။',
  'Exploratory rules only. Satellite composites are historical; no weather forecast, pest observation, soil test, or crop-specific local agronomy is included. Confirm decisions with a local expert.':'ဤအကြံပြုချက်များသည် စူးစမ်းရေးစည်းမျဉ်းများသာ ဖြစ်သည်။ ဂြိုဟ်တုဒေတာမှာ ယခင်လေ့လာချက်ဖြစ်ပြီး ရာသီဥတုခန့်မှန်းချက်၊ ပိုးမွှားလေ့လာချက်၊ မြေစမ်းသပ်ချက်နှင့် ဒေသသီးနှံဆိုင်ရာ အချက်အလက် မပါဝင်ပါ။ ဒေသခံပညာရှင်နှင့် အတည်ပြုပါ။'
};

Object.assign(myText, {
  'Values sample one representative point inside the region, not a full bounding-box average.':'တန်ဖိုးများသည် ဒေသအတွင်း နမူနာနေရာတစ်ခုမှ ဖြစ်ပြီး ဒေသတစ်ခုလုံး၏ ပျမ်းမျှ မဟုတ်ပါ။',
  'CMR granules are inventory matches, not the exact pixel provenance for POWER or ORNL values.':'CMR မှတ်တမ်းများသည် စာရင်းကိုက်ညီမှုသာ ဖြစ်ပြီး POWER သို့မဟုတ် ORNL pixel တန်ဖိုး၏ တိုက်ရိုက်ရင်းမြစ် မဟုတ်ပါ။',
  'MODIS LST and NDVI are 8-day and 16-day composites, not forecasts.':'MODIS အပူချိန်နှင့် NDVI သည် ၈ ရက်၊ ၁၆ ရက် ပေါင်းစပ်လေ့လာချက်များဖြစ်ပြီး ခန့်မှန်းချက် မဟုတ်ပါ။',
  'Status labels are screening heuristics and need local agronomic validation.':'အခြေအနေညွှန်းစာတန်းများသည် ကနဦးစစ်ဆေးချက်များသာဖြစ်ပြီး ဒေသခံစိုက်ပျိုးရေးပညာရှင်၏ အတည်ပြုချက် လိုပါသည်။',
  'SMAP volumetric moisture was unavailable; soil percentage is MERRA-2 surface wetness fraction.':'SMAP မြေတွင်းရေပါဝင်မှုဒေတာ မရနိုင်သဖြင့် မြေစိုထိုင်းမှုရာခိုင်နှုန်းသည် MERRA-2 မြေမျက်နှာပြင် စိုထိုင်းမှုအချိုး ဖြစ်သည်။',
  'NASA POWER + ORNL DAAC / SUCCESS':'NASA POWER + ORNL DAAC / အောင်မြင်',
  'NASA POWER + ORNL DAAC / PARTIAL':'NASA POWER + ORNL DAAC / တစ်စိတ်တစ်ပိုင်း',
  'NASA POWER + ORNL DAAC / UNAVAILABLE':'NASA POWER + ORNL DAAC / မရနိုင်ပါ'
});
const inlinePhrases = [
  'Exploratory rules only. Satellite composites are historical; no weather forecast, pest observation, soil test, or crop-specific local agronomy is included. Confirm decisions with a local expert.',
  'Weather and vegetation screening score only; no pest sightings or species model were used.',
  'No observation data is available.',
  'Current soil or rainfall data is unavailable.',
  'Low sampled surface wetness and recent low rainfall were observed.',
  'Sampled surface wetness is high.',
  'Observed conditions do not support a precise watering window.',
  'Land surface temperature:'
];
for (const phrase of ['Inspect field moisture before planning irrigation','Check the root zone; irrigation may be needed','Delay irrigation until a field check confirms need','Monitor soil conditions before scheduling irrigation']) {
  myText[phrase.toUpperCase()] = myText[phrase];
}

const names = ['AYEYARWADY DELTA','CENTRAL DRY ZONE','SHAN HIGHLANDS','COASTAL RAKHINE','PIGEON PEA','MUNG BEAN','GROUNDNUT','CHICKPEA','SESAME','RICE / PADDY','SANDY LOAM','SURFACE WETNESS FRACTION'];
let language = 'en';
const originals = new WeakMap();
const originalAttributes = new WeakMap();
function translateText(value) {
  if (language === 'en') return value;
  const trimmed = value.trim();
  if (!trimmed) return value;
  let out = myText[trimmed];
  if (!out) {
    const rules = [
      [/^PLOT ([A-C]-[1-6]) SELECTED$/, m => `ကွက် ${m[1]} ကို ရွေးထားသည်`],
      [/^Planning plot ([A-C]-[1-6])$/, m => `အစီအစဉ်အတွက် လယ်ကွက် ${m[1]}`],
      [/^NASA DATA (.+) • (.+)$/, m => `NASA ဒေတာ ${translateText(m[1])} • ${translateText(m[2])}`],
      [/^NASA DATA UNAVAILABLE • (.+)$/, m => `NASA ဒေတာ မရနိုင်ပါ • ${m[1]}`],
      [/^API RESPONSE (.+)$/, m => `API ပြန်စာ ${m[1]}`],
      [/^Representative point readings for (.+)\. Select a signal to inspect the source and date\.$/, m => `${translateText(m[1].toUpperCase())} အတွင်း နမူနာနေရာ၏ ဖတ်ချက်များဖြစ်သည်။ ရင်းမြစ်နှင့် ရက်စွဲကို ကြည့်ရန် အချက်ပြချက်ကို ရွေးပါ။`],
      [/^Observed (.+)\. This is MERRA-2 wetness, not SMAP volumetric soil moisture\.$/, m => `လေ့လာချက်: ${translateText(m[1])}။ ဤတန်ဖိုးသည် MERRA-2 မြေစိုထိုင်းမှုဖြစ်ပြီး SMAP ရေပါဝင်မှုတိုင်းတာချက် မဟုတ်ပါ။`],
      [/^Observed (.+)\. SMAP surface moisture sample\.$/, m => `လေ့လာချက်: ${translateText(m[1])}။ SMAP မြေမျက်နှာပြင်စိုထိုင်းမှု နမူနာဖြစ်သည်။`],
      [/^Mean rainfall over the available days in the current period\. Historical anomaly: (.+)\. This is not a forecast\.$/, m => `လက်ရှိကာလ၏ ရရှိနိုင်သောနေ့များအတွက် ပျမ်းမျှမိုးရေချိန်ဖြစ်သည်။ ယခင်ကာလနှင့် ကွာခြားမှု: ${m[1]}။ ခန့်မှန်းချက် မဟုတ်ပါ။`],
      [/^Observed (.+) from an 8-day MODIS composite\. This is land surface temperature, not air temperature\.$/, m => `လေ့လာချက်: ${translateText(m[1])}။ MODIS ၈ ရက်ပေါင်းစပ်ဒေတာမှ မြေမျက်နှာပြင်အပူချိန်ဖြစ်ပြီး လေအပူချိန် မဟုတ်ပါ။`],
      [/^BACKEND RULES • (.+) TELEMETRY • (\d+) ROTATION OPTIONS$/, m => `Backend စည်းမျဉ်း • ${translateText(m[1])} ဒေတာ • သီးနှံရွေးချယ်စရာ ${m[2]} ခု`],
      [/^Example (monsoon|dry|cool) rotation with a pulse phase; check local soil, water and market fit\.$/, m => `${translateText(m[1].toUpperCase())} အတွက် ပဲမျိုးပါသော နမူနာအလှည့်ကျအစီအစဉ်ဖြစ်သည်။ မြေ၊ ရေနှင့် ဈေးကွက်အခြေအနေကို ဒေသတွင်း စစ်ဆေးပါ။`],
      [/^SECOND REGION MINUS FIRST • (.+) TELEMETRY\. COMPARE SOURCES AND DATES BEFORE ACTING\.$/, m => `ဒုတိယဒေသမှ ပထမဒေသကို နုတ်ထားသည် • ${translateText(m[1])} ဒေတာ။ ဆုံးဖြတ်မီ ရင်းမြစ်နှင့် ရက်စွဲကို နှိုင်းယှဉ်ပါ။`],
      [/^CMR CATALOG: (\d+) matching product entries\. These are inventory matches, not exact pixel provenance\.$/, m => `CMR စာရင်းတွင် ကိုက်ညီသော ပစ္စည်း ${m[1]} ခုရှိသည်။ ၎င်းတို့သည် pixel တန်ဖိုး၏ တိုက်ရိုက်ရင်းမြစ် မဟုတ်ပါ။`],
      [/^SAMPLE POINT: (.+) • REGION BBOX: (.+)$/, m => `နမူနာနေရာ: ${m[1]} • ဒေသနယ်နိမိတ်: ${m[2]}`],
      [/^SAMPLE LOCATION UNAVAILABLE$/, () => 'နမူနာနေရာ မရနိုင်ပါ'],
      [/^REGION COMPARISON UNAVAILABLE • (.+)$/, m => `ဒေသနှိုင်းယှဉ်မှု မရနိုင်ပါ • ${m[1]}`],
      [/^ADVISORY UNAVAILABLE • (.+)$/, m => `အကြံပြုချက် မရနိုင်ပါ • ${m[1]}`],
      [/^SOIL WETNESS: (.+)$/, m => `မြေစိုထိုင်းမှု: ${m[1]}`],
      [/^LAND SURFACE TEMP: (.+)$/, m => `မြေမျက်နှာပြင် အပူချိန်: ${m[1]}`],
      [/^VEGETATION NDVI: (.+)$/, m => `အပင်ကျန်းမာရေး NDVI: ${m[1]}`],
      [/^RAINFALL: (.+)$/, m => `မိုးရေချိန်: ${m[1]}`]
    ];
    for (const [pattern, render] of rules) {
      const match = trimmed.match(pattern);
      if (match) { out = render(match); break; }
    }
  }
  if (!out) {
    out = trimmed;
    for (const phrase of inlinePhrases) out = out.replaceAll(phrase,myText[phrase]);
    for (const name of names) out = out.replaceAll(name, myText[name]);
    out = out.replaceAll('LOW CONFIDENCE', myText['LOW CONFIDENCE']);
    out = out.replaceAll('ANOMALY', 'ကွာခြားမှု');
    out = out.replaceAll('NASA READING UNAVAILABLE', myText['NASA READING UNAVAILABLE']);
  }
  return value.replace(trimmed, out);
}
function translateNode(node) {
  const current = node.nodeValue;
  let record = originals.get(node);
  if (!record || current !== record.rendered) record = {source:current,rendered:current};
  const next = translateText(record.source);
  record.rendered = next;
  originals.set(node, record);
  if (current !== next) node.nodeValue = next;
}
function translateAttribute(element, name) {
  const current = element.getAttribute(name);
  if (current == null) return;
  let records = originalAttributes.get(element);
  if (!records) { records = {}; originalAttributes.set(element, records); }
  let record = records[name];
  if (!record || current !== record.rendered) record = {source:current,rendered:current};
  const next = translateText(record.source);
  record.rendered = next;
  records[name] = record;
  if (current !== next) element.setAttribute(name,next);
}
function translatePage() {
  const walker = document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) translateNode(node);
  for (const element of document.querySelectorAll('[aria-label],[alt],[title]')) {
    for (const name of ['aria-label','alt','title']) translateAttribute(element,name);
  }
  document.documentElement.lang = language;
  document.title = language === 'my' ? 'Field Shift Myanmar | NASA ဒေတာ' : 'Field Shift Myanmar | NASA data preview';
  for (const code of ['en','my']) document.getElementById('lang-' + code).setAttribute('aria-pressed',String(language === code));
}
let queued = false;
function scheduleTranslation() {
  if (queued) return;
  queued = true;
  requestAnimationFrame(() => { queued = false; translatePage(); });
}
function setLanguage(code) {
  language = code;
  try { localStorage.setItem('field-shift-language',code); } catch {}
  translatePage();
}
for (const code of ['en','my']) document.getElementById('lang-' + code).addEventListener('click',() => setLanguage(code));
try { language = localStorage.getItem('field-shift-language') === 'my' ? 'my' : 'en'; } catch {}
new MutationObserver(scheduleTranslation).observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','alt','title']});
translatePage();

