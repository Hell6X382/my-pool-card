class PoolMetricsCard extends HTMLElement {
  setConfig(config) {
    if (!config.entities || !config.entities.chlore || !config.entities.ph || !config.entities.tac) {
      throw new Error("Please define chlore, ph, and tac entities in the card configuration");
    }
    this._config = config;
  }

  set hass(hass) {
    this._hass = hass;
    // Only render if the shadowRoot is already created.
    // This prevents trying to render before the element is fully initialized.
    if (this.shadowRoot) {
      this._updateContent();
    }
  }

  getCardSize() {
    return 3;
  }

  // Moved the rendering logic to a separate method for clarity
  // and to ensure it's called after initial setup.
  connectedCallback() {
    if (!this.shadowRoot) {
      this.attachShadow({ mode: 'open' });
      this._renderStructure();
    }
    // Initial content update when card is added to DOM
    if (this._hass) {
      this._updateContent();
    }
  }

  _renderStructure() {
    this.shadowRoot.innerHTML = `
      <style>
        .card-content div {
          padding: 8px;
          font-size: 16px;
        }
      </style>
      <ha-card header="Pool Metrics">
        <div class="card-content">
          <div>Chlore: <span id="chlore">--</span></div>
          <div>PH: <span id="ph">--</span></div>
          <div>TAC: <span id="tac">--</span></div>
        </div>
      </ha-card>
    `;
  }

  _updateContent() {
    if (!this._hass || !this.shadowRoot || !this._config || !this._config.entities) {
      return;
    }

    const chloreEntity = this._config.entities.chlore;
    const phEntity = this._config.entities.ph;
    const tacEntity = this._config.entities.tac;

    const chloreState = this._hass.states[chloreEntity] ? this._hass.states[chloreEntity].state : 'N/A';
    const phState = this._hass.states[phEntity] ? this._hass.states[phEntity].state : 'N/A';
    const tacState = this._hass.states[tacEntity] ? this._hass.states[tacEntity].state : 'N/A';

    this.shadowRoot.getElementById('chlore').textContent = chloreState;
    this.shadowRoot.getElementById('ph').textContent = phState;
    this.shadowRoot.getElementById('tac').textContent = tacState;
  }
}

customElements.define('pool-metrics-card', PoolMetricsCard);
// Removed the old render method as its logic is now split into
// _renderStructure and _updateContent
