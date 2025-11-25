class DrawInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isDrawing = false;
    this.currentColor = "#000000";
    this.currentTool = "pen";
    this.lineWidth = 3;
    this.canvasWidth = 800;
    this.canvasHeight = 600;
  }

  connectedCallback() {
    this.canvasWidth = parseInt(this.getAttribute("width")) || 800;
    this.canvasHeight = parseInt(this.getAttribute("height")) || 600;
    this.render();
    this.setupCanvas();
    this.setupEventListeners();
    this.loadState();
  }

  render() {
    this.shadowRoot.innerHTML = `
          <style>
            :host {
              display: block;
              width: 100%;
              max-width: 100%;
            }
            .container {
              display: flex;
              flex-direction: column;
              gap: 12px;
              padding: 16px;
              background: #f5f5f5;
              border-radius: 8px;
              box-sizing: border-box;
            }
            .toolbar {
              display: flex;
              gap: 8px;
              align-items: center;
              flex-wrap: wrap;
            }
            .tool-btn {
              width: 44px;
              height: 44px;
              border: 2px solid #ddd;
              border-radius: 6px;
              cursor: pointer;
              display: flex;
              align-items: center;
              justify-content: center;
              transition: all 0.2s;
              background: white;
              flex-shrink: 0;
            }
            .tool-btn:hover {
              border-color: #999;
              transform: scale(1.05);
            }
            .tool-btn.active {
              border-color: #2196F3;
              background: #E3F2FD;
            }
            .color-btn {
              width: 40px;
              height: 40px;
              border-radius: 50%;
              cursor: pointer;
              border: 3px solid transparent;
              transition: all 0.2s;
              flex-shrink: 0;
            }
            .color-btn:hover {
              transform: scale(1.1);
            }
            .color-btn.active {
              border-color: #2196F3;
              box-shadow: 0 0 0 2px white, 0 0 0 4px #2196F3;
            }
            .canvas-wrapper {
              width: 100%;
              overflow: hidden;
              border-radius: 4px;
            }
            canvas {
              display: block;
              max-width: 100%;
              height: auto;
              border: 2px solid #ddd;
              border-radius: 4px;
              cursor: crosshair;
              background: white;
              touch-action: none;
            }
            svg {
              width: 24px;
              height: 24px;
              fill: #333;
              pointer-events: none;
            }
            .active svg {
              fill: #2196F3;
            }
            .divider {
              width: 1px;
              height: 32px;
              background: #ddd;
              flex-shrink: 0;
            }
            
            @media (max-width: 640px) {
              .container {
                padding: 12px;
                gap: 10px;
              }
              .tool-btn {
                width: 40px;
                height: 40px;
              }
              .color-btn {
                width: 36px;
                height: 36px;
              }
              svg {
                width: 20px;
                height: 20px;
              }
              .toolbar {
                gap: 6px;
              }
            }
            
            @media (max-width: 400px) {
              .container {
                padding: 8px;
              }
              .tool-btn {
                width: 36px;
                height: 36px;
              }
              .color-btn {
                width: 32px;
                height: 32px;
              }
              .toolbar {
                gap: 4px;
              }
            }
          </style>
          <div class="container">
            <div class="toolbar">
              <button class="tool-btn active" data-tool="pen" title="Pen">
                <svg viewBox="0 0 24 24">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                </svg>
              </button>
              <button class="tool-btn" data-tool="eraser" title="Eraser">
                <svg viewBox="0 0 24 24">
                  <path d="M16.24 3.56l4.95 4.94c.78.79.78 2.05 0 2.84L12 20.53a4.008 4.008 0 0 1-5.66 0L2.81 17c-.78-.79-.78-2.05 0-2.84l10.6-10.6c.79-.78 2.05-.78 2.83 0M4.22 15.58l3.54 3.53c.78.79 2.04.79 2.83 0l3.53-3.53-6.37-6.37-3.53 3.54c-.78.78-.78 2.05 0 2.83"/>
                </svg>
              </button>
              <div class="divider"></div>
              <button class="color-btn active" data-color="#000000" style="background: #000000;" title="Black"></button>
              <button class="color-btn" data-color="#FF0000" style="background: #FF0000;" title="Red"></button>
              <button class="color-btn" data-color="#00FF00" style="background: #00FF00;" title="Green"></button>
              <button class="color-btn" data-color="#0000FF" style="background: #0000FF;" title="Blue"></button>
              <button class="color-btn" data-color="#FFFF00" style="background: #FFFF00;" title="Yellow"></button>
              <button class="color-btn" data-color="#FF00FF" style="background: #FF00FF;" title="Magenta"></button>
              <button class="color-btn" data-color="#00FFFF" style="background: #00FFFF;" title="Cyan"></button>
              <button class="color-btn" data-color="#FFA500" style="background: #FFA500;" title="Orange"></button>
            </div>
            <div class="canvas-wrapper">
              <canvas width="${this.canvasWidth}" height="${this.canvasHeight}"></canvas>
            </div>
          </div>
        `;
  }

  setupCanvas() {
    this.canvas = this.shadowRoot.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineCap = "round";
    this.ctx.lineJoin = "round";
  }

  setupEventListeners() {
    // Tool buttons
    this.shadowRoot.querySelectorAll(".tool-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.shadowRoot
          .querySelectorAll(".tool-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentTool = btn.dataset.tool;
      });
    });

    // Color buttons
    this.shadowRoot.querySelectorAll(".color-btn").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        this.shadowRoot
          .querySelectorAll(".color-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.currentColor = btn.dataset.color;
        this.currentTool = "pen";
        this.shadowRoot
          .querySelector('[data-tool="pen"]')
          .classList.add("active");
        this.shadowRoot
          .querySelector('[data-tool="eraser"]')
          .classList.remove("active");
      });
    });

    // Canvas drawing
    this.canvas.addEventListener("mousedown", this.startDrawing.bind(this));
    this.canvas.addEventListener("mousemove", this.draw.bind(this));
    this.canvas.addEventListener("mouseup", this.stopDrawing.bind(this));
    this.canvas.addEventListener("mouseout", this.stopDrawing.bind(this));

    // Touch support
    this.canvas.addEventListener("touchstart", (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener("touchmove", (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY,
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener("touchend", (e) => {
      e.preventDefault();
      const mouseEvent = new MouseEvent("mouseup", {});
      this.canvas.dispatchEvent(mouseEvent);
    });
  }

  getCoordinates(e) {
    const rect = this.canvas.getBoundingClientRect();
    const scaleX = this.canvas.width / rect.width;
    const scaleY = this.canvas.height / rect.height;

    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  }

  startDrawing(e) {
    this.isDrawing = true;
    const coords = this.getCoordinates(e);
    this.lastX = coords.x;
    this.lastY = coords.y;
  }

  draw(e) {
    if (!this.isDrawing) return;

    const coords = this.getCoordinates(e);
    const x = coords.x;
    const y = coords.y;

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(x, y);

    if (this.currentTool === "eraser") {
      this.ctx.globalCompositeOperation = "destination-out";
      this.ctx.lineWidth = 20;
    } else {
      this.ctx.globalCompositeOperation = "source-over";
      this.ctx.strokeStyle = this.currentColor;
      this.ctx.lineWidth = this.lineWidth;
    }

    this.ctx.stroke();

    this.lastX = x;
    this.lastY = y;

    this.dispatchChangeEvent();
    this.saveState();
  }

  stopDrawing() {
    this.isDrawing = false;
  }

  dispatchChangeEvent() {
    const event = new CustomEvent("change", {
      detail: {
        data: this.canvas.toDataURL(),
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  async loadState() {
    const id = this.getAttribute("id");
    if (!id || typeof store === "undefined") {
      this.loadInitialData();
      return;
    }
    try {
      const data = await store.custom.get(id);
      if (data && data.payload) {
        const state = JSON.parse(data.payload);
        if (state.drawing) {
          const img = new Image();
          img.onload = () => {
            this.ctx.drawImage(img, 0, 0);
          };
          img.src = state.drawing;
        }
      } else {
        this.loadInitialData();
      }
    } catch (error) {
      console.error("Failed to load draw-input state:", error);
      this.loadInitialData();
    }
  }

  async saveState() {
    const id = this.getAttribute("id");
    if (!id || typeof store === "undefined") return;
    try {
      await store.custom.put({
        id: id,
        payload: JSON.stringify({
          drawing: this.canvas.toDataURL(),
        }),
      });
    } catch (error) {
      console.error("Failed to save draw-input state:", error);
    }
  }

  loadInitialData() {
    const initialData = this.getAttribute("initial-data");
    if (initialData && initialData.trim() !== "") {
      const img = new Image();
      img.onload = () => {
        this.ctx.drawImage(img, 0, 0);
      };
      img.src = initialData;
    }
  }

  static get observedAttributes() {
    return ["initial-data", "width", "height"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "initial-data" && this.ctx && newValue !== oldValue) {
      this.loadInitialData();
    }
    if (
      (name === "width" || name === "height") &&
      this.canvas &&
      newValue !== oldValue
    ) {
      this.canvasWidth = parseInt(this.getAttribute("width")) || 800;
      this.canvasHeight = parseInt(this.getAttribute("height")) || 600;

      // Save current drawing
      const currentData = this.canvas.toDataURL();

      // Update canvas size
      this.canvas.width = this.canvasWidth;
      this.canvas.height = this.canvasHeight;

      // Restore drawing
      if (currentData) {
        const img = new Image();
        img.onload = () => {
          this.ctx.drawImage(img, 0, 0);
        };
        img.src = currentData;
      }
    }
  }

  // Public methods
  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.dispatchChangeEvent();
    this.saveState();
  }

  getData() {
    return this.canvas.toDataURL();
  }

  setData(dataUrl) {
    const img = new Image();
    img.onload = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(img, 0, 0);
      this.saveState();
    };
    img.src = dataUrl;
  }
}

customElements.define("draw-input", DrawInput);
