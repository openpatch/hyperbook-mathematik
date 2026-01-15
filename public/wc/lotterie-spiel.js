class LotterieSpiel extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Spielkonfiguration
    this.gluecksrad = {
      rot: 0.8,
      blau: 0.2
    };
    
    this.urnen = {
      rot: [
        { wert: 0, wahrscheinlichkeit: 0.3 },
        { wert: 1, wahrscheinlichkeit: 0.2 },
        { wert: 2, wahrscheinlichkeit: 0.5 }
      ],
      blau: [
        { wert: 0, wahrscheinlichkeit: 0.1 },
        { wert: 4, wahrscheinlichkeit: 0.4 },
        { wert: 8, wahrscheinlichkeit: 0.5 }
      ]
    };
    
    this.einsatz = 0.5;
    
    // Spielzustand
    this.gesamtEinsatz = 0;
    this.gesamtGewinn = 0;
    this.anzahlSpiele = 0;
    this.spielLaeuft = false;
    this.aktuellesFarbe = null;
    this.aktuellerWert = null;
  }
  
  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }
  
  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: system-ui, -apple-system, sans-serif;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .container {
          border: 2px solid #007864;
          border-radius: 8px;
          padding: 20px;
          background: white;
        }
        
        .title {
          color: #007864;
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 20px;
          text-align: center;
        }
        
        .spielfeld {
          display: flex;
          flex-direction: row;
          gap: 30px;
          margin-bottom: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .gluecksrad-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        
        .gluecksrad-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
        }
        
        .gluecksrad-pin {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 15px solid #3c3c3c;
          z-index: 10;
        }
        
        .gluecksrad {
          width: 200px;
          height: 200px;
          border-radius: 50%;
          border: 4px solid #3c3c3c;
          background: conic-gradient(
            #dc143c 0deg 288deg,
            #4169e1 288deg 360deg
          );
          position: relative;
          transition: transform 2s cubic-bezier(0.25, 0.1, 0.25, 1);
          cursor: pointer;
        }
        
        .gluecksrad.spinning {
          cursor: not-allowed;
        }
        
        .gluecksrad-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          background: white;
          border: 3px solid #3c3c3c;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        
        .urne-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
        }
        
        .urne-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          border: 4px solid #3c3c3c;
          border-radius: 20px;
          background: #f5f5f5;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .urne-wrapper.rot {
          background: linear-gradient(135deg, #ffebee 0%, #ffcdd2 100%);
        }
        
        .urne-wrapper.blau {
          background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
        }
        
        .urne {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          justify-content: center;
        }
        
        .kugel {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          border: 4px solid #3c3c3c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 2rem;
          transition: transform 0.3s;
        }
        
        .kugel.rot {
          background: radial-gradient(circle at 30% 30%, #ff6b6b, #dc143c);
          color: white;
          box-shadow: 0 4px 8px rgba(220, 20, 60, 0.4);
        }
        
        .kugel.blau {
          background: radial-gradient(circle at 30% 30%, #74b9ff, #4169e1);
          color: white;
          box-shadow: 0 4px 8px rgba(65, 105, 225, 0.4);
        }
        
        .kugel.gezogen {
          animation: kugelErscheinen 0.5s ease-out;
        }
        
        @keyframes kugelErscheinen {
          0% {
            transform: scale(0);
            opacity: 0;
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .button {
          background: #007864;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.2s;
          min-width: 150px;
        }
        
        .button:hover:not(:disabled) {
          background: #005a4a;
        }
        
        .button:disabled {
          background: #a4a4a4;
          cursor: not-allowed;
        }
        
        .ergebnis {
          text-align: center;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
          font-size: 1.2rem;
          font-weight: bold;
          min-height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .ergebnis.gewinn {
          background: #d4edda;
          color: #155724;
          border: 2px solid #28a745;
        }
        
        .ergebnis.verlust {
          background: #f8d7da;
          color: #721c24;
          border: 2px solid #dc3545;
        }
        
        .statistik {
          background: #f5f5f5;
          padding: 15px;
          border-radius: 6px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
        }
        
        .statistik-item {
          text-align: center;
        }
        
        .statistik-label {
          font-size: 0.9rem;
          color: #3c3c3c;
          margin-bottom: 5px;
        }
        
        .statistik-wert {
          font-size: 1.5rem;
          font-weight: bold;
          color: #007864;
        }
        
        .anleitung {
          background: #d6d6d6;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 20px;
          color: #3c3c3c;
        }
        
        .anleitung ol {
          margin: 10px 0;
          padding-left: 20px;
        }
        
        .anleitung li {
          margin: 5px 0;
        }
        
        @media (max-width: 600px) {
          .gluecksrad-wrapper {
            width: 150px;
            height: 150px;
          }
          
          .gluecksrad {
            width: 150px;
            height: 150px;
          }
          
          .kugel {
            width: 40px;
            height: 40px;
          }
        }
      </style>
      
      <div class="container">
        <div class="title">🎰 Lotterie-Spiel</div>
        
        <div class="anleitung">
          <strong>Spielregeln:</strong>
          <ol>
            <li>Einsatz: 50 Cent pro Spiel</li>
            <li>Drehe das Glücksrad für eine Farbe</li>
            <li>Ziehe eine Kugel der entsprechenden Farbe</li>
            <li>Rote Kugel = Wert zahlen (Verlust)</li>
            <li>Blaue Kugel = Wert erhalten (Gewinn)</li>
          </ol>
        </div>
        
        <div class="spielfeld">
          <div class="gluecksrad-container">
            <div class="gluecksrad-wrapper">
              <div class="gluecksrad-pin"></div>
              <div class="gluecksrad" id="gluecksrad">
                <div class="gluecksrad-center">?</div>
              </div>
            </div>
            <button class="button" id="drehen-btn">Rad drehen</button>
          </div>
          
          <div class="urne-container">
            <div class="urne-wrapper" id="urne-wrapper">
              <div class="urne" id="urne"></div>
            </div>
            <button class="button" id="ziehen-btn" disabled>Kugel ziehen</button>
          </div>
        </div>
        
        <div class="ergebnis" id="ergebnis"></div>
        
        <div class="statistik">
          <div class="statistik-item">
            <div class="statistik-label">Spiele</div>
            <div class="statistik-wert" id="anzahl-spiele">0</div>
          </div>
          <div class="statistik-item">
            <div class="statistik-label">Einsatz</div>
            <div class="statistik-wert" id="gesamt-einsatz">0,00 €</div>
          </div>
          <div class="statistik-item">
            <div class="statistik-label">Bilanz</div>
            <div class="statistik-wert" id="gesamt-gewinn">0,00 €</div>
          </div>
        </div>
        
        <div style="text-align: center; margin-top: 20px;">
          <button class="button" id="reset-btn">Statistik zurücksetzen</button>
        </div>
      </div>
    `;
  }
  
  setupEventListeners() {
    const drehenBtn = this.shadowRoot.getElementById('drehen-btn');
    const ziehenBtn = this.shadowRoot.getElementById('ziehen-btn');
    const resetBtn = this.shadowRoot.getElementById('reset-btn');
    
    drehenBtn.addEventListener('click', () => this.dreheGluecksrad());
    ziehenBtn.addEventListener('click', () => this.zieheKugel());
    resetBtn.addEventListener('click', () => this.reset());
  }
  
  dreheGluecksrad() {
    if (this.spielLaeuft) return;
    
    this.spielLaeuft = true;
    this.gesamtEinsatz += this.einsatz;
    
    const gluecksrad = this.shadowRoot.getElementById('gluecksrad');
    const drehenBtn = this.shadowRoot.getElementById('drehen-btn');
    const ergebnis = this.shadowRoot.getElementById('ergebnis');
    
    drehenBtn.disabled = true;
    gluecksrad.classList.add('spinning');
    ergebnis.textContent = '';
    ergebnis.className = 'ergebnis';
    
    // Bestimme Farbe
    const zufall = Math.random();
    this.aktuellesFarbe = zufall < this.gluecksrad.rot ? 'rot' : 'blau';
    
    // Berechne Rotation
    // Gradient: Rot 0°-288°, Blau 288°-360°
    // Der Pin zeigt fest nach oben. Nach rotate(R) zeigt der Pin auf Gradient-Position (360 - R) % 360
    // Für Rot: (360 - R) % 360 sollte in [0, 288] liegen → R sollte in [72, 360] liegen
    // Für Blau: (360 - R) % 360 sollte in [288, 360] liegen → R sollte in [0, 72] liegen
    const basisRotation = 1080; // 3 volle Umdrehungen
    let zielWinkel;
    if (this.aktuellesFarbe === 'rot') {
      // Rot-Bereich: 72° bis 360°
      zielWinkel = 72 + Math.random() * 288;
    } else {
      // Blau-Bereich: 0° bis 72°
      zielWinkel = Math.random() * 72;
    }
    const gesamtRotation = basisRotation + zielWinkel;
    
    gluecksrad.style.transform = `rotate(${gesamtRotation}deg)`;
    
    setTimeout(() => {
      gluecksrad.classList.remove('spinning');
      this.aktiviereKugelZiehen();
    }, 2000);
  }
  
  aktiviereKugelZiehen() {
    const ziehenBtn = this.shadowRoot.getElementById('ziehen-btn');
    const urneWrapper = this.shadowRoot.getElementById('urne-wrapper');
    const urneDiv = this.shadowRoot.getElementById('urne');
    
    ziehenBtn.disabled = false;
    urneWrapper.className = `urne-wrapper ${this.aktuellesFarbe}`;
    urneDiv.innerHTML = '';
  }
  
  zieheKugel() {
    const ziehenBtn = this.shadowRoot.getElementById('ziehen-btn');
    const urneDiv = this.shadowRoot.getElementById('urne');
    
    ziehenBtn.disabled = true;
    
    // Wähle zufälligen Wert basierend auf Wahrscheinlichkeiten
    const kugeln = this.urnen[this.aktuellesFarbe];
    const zufall = Math.random();
    let kumulative = 0;
    let wert = kugeln[0].wert;
    
    for (const kugel of kugeln) {
      kumulative += kugel.wahrscheinlichkeit;
      if (zufall < kumulative) {
        wert = kugel.wert;
        break;
      }
    }
    
    this.aktuellerWert = wert;
    
    // Zeige die gezogene Kugel an
    const kugelElement = document.createElement('div');
    kugelElement.className = `kugel ${this.aktuellesFarbe} gezogen`;
    kugelElement.textContent = wert;
    urneDiv.appendChild(kugelElement);
    
    // Berechne Gewinn
    let gewinn;
    if (this.aktuellesFarbe === 'rot') {
      gewinn = -wert - this.einsatz;
    } else {
      gewinn = wert - this.einsatz;
    }
    
    this.gesamtGewinn += gewinn;
    this.anzahlSpiele++;
    
    // Zeige Ergebnis
    const ergebnis = this.shadowRoot.getElementById('ergebnis');
    ergebnis.textContent = gewinn >= 0 ? 
      `Gewinn: ${wert.toFixed(2)} €` : 
      `Verlust: ${wert.toFixed(2)} €`;
    ergebnis.className = gewinn >= 0 ? 'ergebnis gewinn' : 'ergebnis verlust';
    
    // Aktualisiere Statistik
    this.aktualisiereStatistik();
    
    // Bereite nächstes Spiel vor
    setTimeout(() => {
      this.naechstesSpiel();
    }, 2000);
  }
  
  naechstesSpiel() {
    const gluecksrad = this.shadowRoot.getElementById('gluecksrad');
    const drehenBtn = this.shadowRoot.getElementById('drehen-btn');
    const ziehenBtn = this.shadowRoot.getElementById('ziehen-btn');
    const urneWrapper = this.shadowRoot.getElementById('urne-wrapper');
    const urneDiv = this.shadowRoot.getElementById('urne');
    
    gluecksrad.style.transform = 'rotate(0deg)';
    drehenBtn.disabled = false;
    ziehenBtn.disabled = true;
    urneWrapper.className = 'urne-wrapper';
    urneDiv.innerHTML = '';
    
    this.spielLaeuft = false;
    this.aktuellesFarbe = null;
    this.aktuellerWert = null;
  }
  
  aktualisiereStatistik() {
    const anzahlSpiele = this.shadowRoot.getElementById('anzahl-spiele');
    const gesamtEinsatz = this.shadowRoot.getElementById('gesamt-einsatz');
    const gesamtGewinn = this.shadowRoot.getElementById('gesamt-gewinn');
    
    anzahlSpiele.textContent = this.anzahlSpiele;
    gesamtEinsatz.textContent = this.gesamtEinsatz.toFixed(2) + ' €';
    gesamtGewinn.textContent = this.gesamtGewinn.toFixed(2) + ' €';
  }
  
  reset() {
    this.gesamtEinsatz = 0;
    this.gesamtGewinn = 0;
    this.anzahlSpiele = 0;
    
    this.aktualisiereStatistik();
    
    const ergebnis = this.shadowRoot.getElementById('ergebnis');
    ergebnis.textContent = '';
    ergebnis.className = 'ergebnis';
    
    if (this.spielLaeuft) {
      this.naechstesSpiel();
    }
  }
}

customElements.define('lotterie-spiel', LotterieSpiel);
