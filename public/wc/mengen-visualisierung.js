class MengenVisualisierung extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    
    // Standardwerte für die Mengen
    this.mengeA = this.getAttribute('menge-a') ? 
      this.getAttribute('menge-a').split(',').map(s => s.trim()) : 
      ['1', '2', '3', '4', '5'];
    this.mengeB = this.getAttribute('menge-b') ? 
      this.getAttribute('menge-b').split(',').map(s => s.trim()) : 
      ['3', '4', '5', '6', '7'];
    
    // Grundmenge (optional)
    if (this.getAttribute('grundmenge')) {
      this.grundmenge = this.getAttribute('grundmenge').split(',').map(s => s.trim());
      // Stelle sicher, dass die Grundmenge beide Mengen enthält
      const allElements = [...new Set([...this.mengeA, ...this.mengeB])];
      allElements.forEach(elem => {
        if (!this.grundmenge.includes(elem)) {
          this.grundmenge.push(elem);
        }
      });
    } else {
      this.grundmenge = null;
    }
    
    this.labelA = this.getAttribute('label-a') || 'A';
    this.labelB = this.getAttribute('label-b') || 'B';
    this.labelGrundmenge = this.getAttribute('label-grundmenge') || 'G';
    this.currentOperation = 'union';
  }

  connectedCallback() {
    this.render();
    this.attachEventListeners();
  }

  getSchnittmenge() {
    return this.mengeA.filter(elem => this.mengeB.includes(elem));
  }

  getVereinigung() {
    return [...new Set([...this.mengeA, ...this.mengeB])];
  }

  getDifferenzAB() {
    return this.mengeA.filter(elem => !this.mengeB.includes(elem));
  }

  getDifferenzBA() {
    return this.mengeB.filter(elem => !this.mengeA.includes(elem));
  }

  getKomplementA() {
    const basis = this.grundmenge || this.getVereinigung();
    return basis.filter(elem => !this.mengeA.includes(elem));
  }

  getKomplementB() {
    const basis = this.grundmenge || this.getVereinigung();
    return basis.filter(elem => !this.mengeB.includes(elem));
  }

  getElementeNurInGrundmenge() {
    if (!this.grundmenge) return [];
    const vereinigung = this.getVereinigung();
    return this.grundmenge.filter(elem => !vereinigung.includes(elem));
  }

  isInHighlightedArea(element) {
    const inA = this.mengeA.includes(element);
    const inB = this.mengeB.includes(element);

    switch (this.currentOperation) {
      case 'union':
        return inA || inB;
      case 'intersection':
        return inA && inB;
      case 'differenceAB':
        return inA && !inB;
      case 'differenceBA':
        return !inA && inB;
      case 'complementA':
        return !inA;
      case 'complementB':
        return !inB;
      default:
        return false;
    }
  }

  render() {
    const schnittmenge = this.getSchnittmenge();
    const nurA = this.getDifferenzAB();
    const nurB = this.getDifferenzBA();
    const nurGrundmenge = this.getElementeNurInGrundmenge();
    
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          margin: 0rem auto;
        }

        .container {
          background: white;
          border-radius: 8px;
        }

        .controls {
          margin-bottom: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .controls button {
          padding: 0.75rem 1.5rem;
          border: 2px solid #007864;
          background: white;
          color: #007864;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.2s;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .controls button .math-notation {
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .controls button:hover {
          background: #f0f9f7;
        }

        .controls button:active {
          transform: scale(0.98);
        }

        .controls button.active {
          background: #007864;
          color: white;
        }

        .venn-container {
          position: relative;
          width: 100%;
          height: 400px;
          margin: 2rem 0;
          touch-action: none;
        }

        svg {
          width: 100%;
          height: 100%;
        }

        .grundmenge-rect {
          fill: none;
          stroke: #3c3c3c;
          stroke-width: 3;
          stroke-dasharray: 5, 5;
          rx: 10;
        }

        .circle {
          fill-opacity: 0.3;
          stroke-width: 2;
          transition: all 0.3s;
        }

        .circle-a {
          fill: #4A90E2;
          stroke: #4A90E2;
        }

        .circle-b {
          fill: #E94B3C;
          stroke: #E94B3C;
        }

        .circle.highlighted {
          fill-opacity: 0.6;
          stroke-width: 3;
        }

        .circle.dimmed {
          fill-opacity: 0.1;
        }

        .intersection-area {
          fill: #9B59B6;
          fill-opacity: 0.6;
          stroke: #9B59B6;
          stroke-width: 3;
          display: none;
        }

        .intersection-area.visible {
          display: block;
        }

        .difference-a-area {
          fill: #4A90E2;
          fill-opacity: 0.6;
          stroke: #4A90E2;
          stroke-width: 3;
          display: none;
        }

        .difference-a-area.visible {
          display: block;
        }

        .difference-b-area {
          fill: #E94B3C;
          fill-opacity: 0.6;
          stroke: #E94B3C;
          stroke-width: 3;
          display: none;
        }

        .difference-b-area.visible {
          display: block;
        }

        .complement-a-area {
          fill: #E94B3C;
          fill-opacity: 0.6;
          stroke: #E94B3C;
          stroke-width: 3;
          display: none;
        }

        .complement-a-area.visible {
          display: block;
        }

        .complement-b-area {
          fill: #4A90E2;
          fill-opacity: 0.6;
          stroke: #4A90E2;
          stroke-width: 3;
          display: none;
        }

        .complement-b-area.visible {
          display: block;
        }

        .label {
          font-size: 24px;
          font-weight: bold;
          fill: #242428;
        }

        .grundmenge-label {
          font-size: 20px;
          font-weight: bold;
          fill: #3c3c3c;
        }

        .element {
          font-size: 18px;
          fill: #242428;
          text-anchor: middle;
          user-select: none;
          font-weight: 600;
          paint-order: stroke fill;
          stroke: white;
          stroke-width: 3px;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .info-box {
          background: #f5f5f5;
          border-left: 4px solid #007864;
          padding: 1rem 1.5rem;
          margin-top: 2rem;
          border-radius: 4px;
        }

        .info-box h3 {
          margin: 0 0 0.5rem 0;
          color: #007864;
          font-size: 1.1rem;
        }

        .info-box p {
          margin: 0.5rem 0;
          color: #3c3c3c;
          line-height: 1.5;
        }

        .result {
          font-weight: bold;
          color: #007864;
        }

        @media (max-width: 600px) {
          .container {
            padding: 1rem;
          }

          .controls {
            flex-direction: column;
          }

          .controls button {
            min-width: 100%;
          }

          .venn-container {
            height: 300px;
          }

          .label {
            font-size: 20px;
          }

          .element {
            font-size: 14px;
          }
        }
      </style>

      <div class="container">
        <div class="controls">
          <button data-operation="union">
            <span>Vereinigung</span>
            <span class="math-notation">${this.labelA} ∪ ${this.labelB}</span>
          </button>
          <button data-operation="intersection">
            <span>Schnittmenge</span>
            <span class="math-notation">${this.labelA} ∩ ${this.labelB}</span>
          </button>
          <button data-operation="differenceAB">
            <span>Differenz</span>
            <span class="math-notation">${this.labelA} \\ ${this.labelB}</span>
          </button>
          <button data-operation="differenceBA">
            <span>Differenz</span>
            <span class="math-notation">${this.labelB} \\ ${this.labelA}</span>
          </button>
          <button data-operation="complementA">
            <span>Komplement ${this.labelA}</span>
          </button>
          <button data-operation="complementB">
            <span>Komplement ${this.labelB}</span>
          </button>
        </div>

        <div class="venn-container">
          <svg viewBox="0 0 600 400" preserveAspectRatio="xMidYMid meet">
            <defs>
              <!-- Clip-Path für die Schnittmenge -->
              <clipPath id="clip-intersection">
                <circle cx="220" cy="200" r="120" />
              </clipPath>
              
              <!-- Mask für Differenz A \ B (A ohne B) -->
              <mask id="mask-a-without-b">
                <circle cx="220" cy="200" r="120" fill="white" />
                <circle cx="380" cy="200" r="120" fill="black" />
              </mask>
              
              <!-- Mask für Differenz B \ A (B ohne A) -->
              <mask id="mask-b-without-a">
                <circle cx="380" cy="200" r="120" fill="white" />
                <circle cx="220" cy="200" r="120" fill="black" />
              </mask>
            </defs>

            ${this.grundmenge ? `
              <!-- Grundmenge als Rechteck -->
              <rect class="grundmenge-rect" x="50" y="50" width="500" height="300" />
              <text class="grundmenge-label" x="60" y="75">${this.labelGrundmenge}</text>
            ` : ''}

            <!-- Kreis A -->
            <circle class="circle circle-a" cx="220" cy="200" r="120" />
            
            <!-- Kreis B -->
            <circle class="circle circle-b" cx="380" cy="200" r="120" />

            <!-- Schnittmenge (nur sichtbar bei intersection) -->
            <circle class="intersection-area" cx="380" cy="200" r="120" clip-path="url(#clip-intersection)" />

            <!-- Differenz A \ B (A ohne B) -->
            <circle class="difference-a-area" cx="220" cy="200" r="120" mask="url(#mask-a-without-b)" />

            <!-- Differenz B \ A (B ohne A) -->
            <circle class="difference-b-area" cx="380" cy="200" r="120" mask="url(#mask-b-without-a)" />

            <!-- Komplement von A (alles außer A, also nur B ohne Schnittmenge) -->
            <circle class="complement-a-area" cx="380" cy="200" r="120" mask="url(#mask-b-without-a)" />

            <!-- Komplement von B (alles außer B, also nur A ohne Schnittmenge) -->
            <circle class="complement-b-area" cx="220" cy="200" r="120" mask="url(#mask-a-without-b)" />

            <!-- Labels -->
            <text class="label" x="150" y="100">${this.labelA}</text>
            <text class="label" x="430" y="100">${this.labelB}</text>

            <!-- Elemente nur in A -->
            ${this.renderElements(nurA, 150, 200, 'left')}

            <!-- Elemente in Schnittmenge -->
            ${this.renderElements(schnittmenge, 300, 200, 'center')}

            <!-- Elemente nur in B -->
            ${this.renderElements(nurB, 450, 200, 'right')}

            <!-- Elemente nur in Grundmenge (außerhalb von A und B) -->
            ${this.grundmenge ? this.renderGrundmengeElements(nurGrundmenge) : ''}
          </svg>
        </div>

        <div class="info-box">
          <h3>${this.getOperationTitle()}</h3>
          <p>${this.getOperationDescription()}</p>
          <p class="result">Ergebnis: {${this.getOperationResult().join(', ')}}</p>
        </div>
      </div>
    `;
  }

  renderElements(elements, centerX, centerY, position) {
    if (elements.length === 0) return '';

    // Kleinerer Radius, damit Elemente innerhalb der Kreise bleiben
    const radius = 40;
    const angleStep = (2 * Math.PI) / Math.max(elements.length, 3);
    
    return elements.map((elem, index) => {
      const angle = angleStep * index - Math.PI / 2;
      let x, y;

      if (elements.length === 1) {
        x = centerX;
        y = centerY;
      } else if (elements.length === 2) {
        // Bei 2 Elementen: vertikal anordnen
        x = centerX;
        y = centerY + (index === 0 ? -25 : 25);
      } else {
        x = centerX + radius * Math.cos(angle);
        y = centerY + radius * Math.sin(angle);
      }

      const isHighlighted = this.isInHighlightedArea(elem);
      const opacity = isHighlighted ? '1' : '0.4';
      const fontSize = isHighlighted ? '20' : '18';

      return `
        <text class="element" x="${x}" y="${y}" 
              style="opacity: ${opacity}; font-size: ${fontSize}px;">
          ${elem}
        </text>
      `;
    }).join('');
  }

  renderGrundmengeElements(elements) {
    if (elements.length === 0) return '';

    // Positioniere Elemente außerhalb der Kreise, aber innerhalb des Rechtecks
    const positions = [
      { x: 90, y: 120 },   // oben links
      { x: 510, y: 120 },  // oben rechts
      { x: 90, y: 330 },   // unten links
      { x: 510, y: 330 },  // unten rechts
      { x: 300, y: 80 },   // oben mittig
      { x: 90, y: 200 },   // links mittig
      { x: 510, y: 200 },  // rechts mittig
      { x: 300, y: 340 },  // unten mittig
    ];

    return elements.map((elem, index) => {
      const pos = positions[index % positions.length];
      const isHighlighted = this.isInHighlightedArea(elem);
      const opacity = isHighlighted ? '1' : '0.4';
      const fontSize = isHighlighted ? '20' : '18';

      return `
        <text class="element" x="${pos.x}" y="${pos.y}" 
              style="opacity: ${opacity}; font-size: ${fontSize}px;">
          ${elem}
        </text>
      `;
    }).join('');
  }

  getOperationTitle() {
    switch (this.currentOperation) {
      case 'union':
        return `Vereinigung ${this.labelA} ∪ ${this.labelB}`;
      case 'intersection':
        return `Schnittmenge ${this.labelA} ∩ ${this.labelB}`;
      case 'differenceAB':
        return `Differenz ${this.labelA} \\ ${this.labelB}`;
      case 'differenceBA':
        return `Differenz ${this.labelB} \\ ${this.labelA}`;
      case 'complementA':
        return `Komplement von ${this.labelA}`;
      case 'complementB':
        return `Komplement von ${this.labelB}`;
      default:
        return '';
    }
  }

  getOperationDescription() {
    const basis = this.grundmenge ? this.labelGrundmenge : 'die Vereinigung';
    switch (this.currentOperation) {
      case 'union':
        return `Alle Elemente, die in mindestens einer der beiden Mengen vorkommen.`;
      case 'intersection':
        return `Alle Elemente, die sowohl in ${this.labelA} als auch in ${this.labelB} vorkommen.`;
      case 'differenceAB':
        return `Alle Elemente, die in ${this.labelA}, aber nicht in ${this.labelB} enthalten sind.`;
      case 'differenceBA':
        return `Alle Elemente, die in ${this.labelB}, aber nicht in ${this.labelA} enthalten sind.`;
      case 'complementA':
        return `Alle Elemente (bezogen auf ${basis}), die nicht in ${this.labelA} enthalten sind.`;
      case 'complementB':
        return `Alle Elemente (bezogen auf ${basis}), die nicht in ${this.labelB} enthalten sind.`;
      default:
        return '';
    }
  }

  getOperationResult() {
    switch (this.currentOperation) {
      case 'union':
        return this.getVereinigung();
      case 'intersection':
        return this.getSchnittmenge();
      case 'differenceAB':
        return this.getDifferenzAB();
      case 'differenceBA':
        return this.getDifferenzBA();
      case 'complementA':
        return this.getKomplementA();
      case 'complementB':
        return this.getKomplementB();
      default:
        return [];
    }
  }

  updateHighlighting() {
    const circleA = this.shadowRoot.querySelector('.circle-a');
    const circleB = this.shadowRoot.querySelector('.circle-b');
    const intersectionArea = this.shadowRoot.querySelector('.intersection-area');
    const differenceAArea = this.shadowRoot.querySelector('.difference-a-area');
    const differenceBArea = this.shadowRoot.querySelector('.difference-b-area');
    const complementAArea = this.shadowRoot.querySelector('.complement-a-area');
    const complementBArea = this.shadowRoot.querySelector('.complement-b-area');

    // Reset
    circleA.classList.remove('highlighted', 'dimmed');
    circleB.classList.remove('highlighted', 'dimmed');
    intersectionArea.classList.remove('visible');
    differenceAArea.classList.remove('visible');
    differenceBArea.classList.remove('visible');
    complementAArea.classList.remove('visible');
    complementBArea.classList.remove('visible');

    switch (this.currentOperation) {
      case 'union':
        circleA.classList.add('highlighted');
        circleB.classList.add('highlighted');
        break;
      case 'intersection':
        // Nur die Schnittfläche wird sichtbar
        circleA.classList.add('dimmed');
        circleB.classList.add('dimmed');
        intersectionArea.classList.add('visible');
        break;
      case 'differenceAB':
        // Nur A ohne B
        circleA.classList.add('dimmed');
        circleB.classList.add('dimmed');
        differenceAArea.classList.add('visible');
        break;
      case 'differenceBA':
        // Nur B ohne A
        circleA.classList.add('dimmed');
        circleB.classList.add('dimmed');
        differenceBArea.classList.add('visible');
        break;
      case 'complementA':
        // Alles außer A (nur B ohne Schnittmenge)
        circleA.classList.add('dimmed');
        circleB.classList.add('dimmed');
        complementAArea.classList.add('visible');
        break;
      case 'complementB':
        // Alles außer B (nur A ohne Schnittmenge)
        circleA.classList.add('dimmed');
        circleB.classList.add('dimmed');
        complementBArea.classList.add('visible');
        break;
    }
  }

  attachEventListeners() {
    const buttons = this.shadowRoot.querySelectorAll('.controls button');
    
    // Setze den aktiven Button basierend auf currentOperation
    buttons.forEach(btn => {
      if (btn.dataset.operation === this.currentOperation) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
    
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        this.currentOperation = button.dataset.operation;
        this.render();
        this.attachEventListeners();
        this.updateHighlighting();
      });
    });
  }
}

customElements.define('mengen-visualisierung', MengenVisualisierung);
