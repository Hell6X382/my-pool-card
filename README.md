# Pool Metrics Card

## Description
A Home Assistant Lovelace card to display pool chemistry metrics: Chlore, PH, and TAC. This card provides a quick overview of the essential water balance parameters for your swimming pool.

## Features
- Displays Chlore (Chlorine) level.
- Displays PH (Potential Hydrogen) level.
- Displays TAC (Total Alkalinity) level.
- Customizable title for the card.
- Easy integration with Home Assistant sensor entities.

## Installation

### HACS (Home Assistant Community Store) - Recommended
1.  **Add as a Custom Repository**:
    *   Open HACS in your Home Assistant.
    *   Go to `Frontend`.
    *   Click the 3-dots menu in the top right and select "Custom repositories".
    *   In the "Repository" field, enter the URL to this GitHub repository.
    *   For "Category", select "Lovelace".
    *   Click "ADD".
2.  **Install**:
    *   The "Pool Metrics Card" should now appear in the HACS Frontend section.
    *   Click on it and then click "INSTALL".
    *   Follow the on-screen instructions to add it to your Lovelace dashboards.

*(Note: This card is not yet available in the HACS default store. You must add it as a custom repository for now.)*

### Manual Installation
1.  **Download the card file**:
    *   Download `pool-metrics-card.js` from the [latest release](https://github.com/USER/REPO/releases/latest) (replace USER/REPO with the actual repository path).
2.  **Place it in your `www` directory**:
    *   Create a folder named `pool-metrics-card` inside your Home Assistant `www` directory (usually `config/www/`). If the `www` or `community` directory doesn't exist, create it.
    *   Place the `pool-metrics-card.js` file into this new folder (e.g., `config/www/community/pool-metrics-card/pool-metrics-card.js`).
3.  **Add the resource to Lovelace**:
    *   **Via UI**:
        *   Navigate to Configuration -> Lovelace Dashboards -> Resources.
        *   Click "+ ADD RESOURCE".
        *   URL: `/local/community/pool-metrics-card/pool-metrics-card.js` (or `/hacsfiles/pool-metrics-card/pool-metrics-card.js` if installed via HACS and HACS handles resource serving).
        *   Resource type: `JavaScript Module`.
        *   Click "CREATE".
    *   **Via YAML**:
        *   If you manage your Lovelace resources in YAML, add the following to your `ui-lovelace.yaml` or the relevant dashboard YAML file under `resources:`:
          ```yaml
          resources:
            - url: /local/community/pool-metrics-card/pool-metrics-card.js
              type: module
          ```
        *   If you installed via HACS, the URL might be automatically managed or look like `/hacsfiles/pool-metrics-card/pool-metrics-card.js`. Check HACS documentation.

## Configuration
Add the card to your Lovelace dashboard via the UI or by editing the YAML.

### Options
| Name            | Type   | Required | Description                                            | Default |
|-----------------|--------|----------|--------------------------------------------------------|---------|
| `type`          | string | Yes      | `custom:pool-metrics-card`                             |         |
| `entities`      | object | Yes      | Object containing sensor entity IDs.                   |         |
| `entities.chlore`| string | Yes      | Entity ID for your Chlore sensor.                      |         |
| `entities.ph`   | string | Yes      | Entity ID for your PH sensor.                          |         |
| `entities.tac`  | string | Yes      | Entity ID for your TAC sensor.                         |         |
| `title`         | string | No       | Custom title for the card.                             | "Pool Metrics" |


### YAML Example
```yaml
type: custom:pool-metrics-card
title: My Pool Chemistry
entities:
  chlore: sensor.pool_chlore_level # Replace with your actual Chlore sensor entity
  ph: sensor.pool_ph_level         # Replace with your actual PH sensor entity
  tac: sensor.pool_tac_level         # Replace with your actual TAC sensor entity
```

Remember to replace `sensor.pool_chlore_level`, `sensor.pool_ph_level`, and `sensor.pool_tac_level` with the actual entity IDs of your sensors in Home Assistant.

## Screenshot
*(Note: A screenshot of the card in action will be added here soon.)*
