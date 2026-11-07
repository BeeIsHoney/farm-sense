# Field Shift Myanmar frontend

Pixel-style decision support preview for the NASA Space Apps Challenge. It shows regional NASA Earth observation readings from the Field Shift Spring Boot backend and its rule-based crop rotation advisory.

## Netlify deployment

Import this repository into Netlify. The repository root is the publish directory and no build command is required. `netlify.toml` proxies `/api/v1/*` to the Railway backend, so the browser calls the frontend's own origin.

## Local preview

Serve this directory with a static web server. To exercise the API locally, use a local proxy for `/api/v1/*` or deploy to Netlify. The frontend has no build step or package dependencies.

## Data notes

The farm grid is a planning interface, not plot-level NASA sensor data. Telemetry is based on representative regional point samples. Crop, irrigation and pest outputs are screening rules from the backend, not forecasts or verified field measurements. Observation sources and dates appear in the Data Sources panel.

