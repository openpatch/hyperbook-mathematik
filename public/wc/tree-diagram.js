(function () {
  class TreeDiagram extends HTMLElement {
    constructor() {
      super();

      this.template = document.createElement("template");
      this.template.innerHTML = `
    <style>
        :host {
            display: block;
            width: 100%;
            height: ${this.getAttribute("height") || "500px"};
            font-family: sans-serif;
        }
        svg {
            width: 100%;
            height: 100%;
        }
        .edge-line {
            stroke: currentColor;
            stroke-width: 1.5px;
            z-index: 1;
        }
        .node-circle {
            stroke: currentColor;
            stroke-width: 2px;
            z-index: 2;
            fill: var(--color-background);
        }
        .root-node {
            fill: currentColor; /* Solid dot for root */
            r: 6px;
            z-index: 3;
        }
        
        /* MathJax Container Styles */
        .math-container {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: currentColor;
            user-select: none;
        }
        
        .node-label .math-container {
            font-size: 16px;
            font-weight: bold;
        }
        
        .edge-label .math-container {
            font-size: 13px;
            padding: 2px;
            shadow: 0 0 2px var(--color-background);
        }
    </style>
    <svg id="treeSvg"></svg>
    `;

      this.attachShadow({ mode: "open" });
      this.shadowRoot.appendChild(this.template.content.cloneNode(true));
      this.svg = this.shadowRoot.getElementById("treeSvg");

      // Config for spacing
      this.config = {
        nodeRadius: 20,
        levelSpacing: 180,
        baseVerticalSpacing: 70, // Minimum vertical gap
        startX: 50,
      };
    }

    connectedCallback() {
      // 1. Read the raw text inside the tag
      const rawInput = this.innerHTML;

      // 2. Parse the text into a JSON tree
      const treeData = this.parseInput(rawInput);

      // 3. Clear the inner HTML so the raw text disappears
      this.innerHTML = "";

      // 4. Render
      this.render(treeData);

      // 5. Handle Resize
      this.resizeObserver = new ResizeObserver(() => this.render(treeData));
      this.resizeObserver.observe(this);
    }

    /**
     * PARSER: Converts indented text strings into a nested object
     */
    parseInput(text) {
      const lines = text.split("\n").filter((line) => line.trim() !== "");

      // The Root of our data tree
      const root = { id: "root", branches: [] };

      // Stack keeps track of the ancestry: [{ node, indentLevel }]
      // We start with the root at indent -1
      const stack = [{ node: root, indent: -1 }];

      lines.forEach((line) => {
        // 1. Count indentation (leading spaces)
        const indent = line.search(/\S/);

        // 2. Extract Data (Split by first colon)
        const trimmed = line.trim();
        const splitIndex = trimmed.indexOf(":");

        let prob = "";
        let label = "";

        if (splitIndex !== -1) {
          prob = trimmed.substring(0, splitIndex).trim();
          label = trimmed.substring(splitIndex + 1).trim();
        } else {
          label = trimmed; // Handle case with no probability
        }

        const newNode = {
          to: label,
          probability: prob,
          branches: [],
        };

        // 3. Determine Parent based on indentation
        // Pop the stack until we find a node with LESS indentation than current line
        while (stack.length > 0 && stack[stack.length - 1].indent >= indent) {
          stack.pop();
        }

        // The top of the stack is now the parent
        const parent = stack[stack.length - 1].node;
        parent.branches.push(newNode);

        // Push new node to stack so it can be a parent to subsequent lines
        stack.push({ node: newNode, indent: indent });
      });

      return root.branches;
    }

    render(data) {
      this.svg.innerHTML = "";
      const svgHeight = this.clientHeight || 500;
      const startY = svgHeight / 2;

      // Draw Root
      this.drawCircle(this.config.startX, startY, "root-node");
      // Draw Tree
      // Calculate initial vertical spread based on number of leaves to ensure no overlap
      const leafCount = this.countLeaves(data);
      const initialHeight = Math.max(
        leafCount * this.config.baseVerticalSpacing,
        200
      );

      this.drawBranches(this.config.startX, startY, data, initialHeight);

      // Trigger MathJax
      this.renderMath();
    }

    countLeaves(nodes) {
      if (!nodes || nodes.length === 0) return 1;
      let count = 0;
      nodes.forEach((n) => (count += this.countLeaves(n.branches)));
      return count;
    }

    drawBranches(parentX, parentY, nodes, availableHeight) {
      if (!nodes || nodes.length === 0) return;

      const nextX = parentX + this.config.levelSpacing;

      // Divide vertical space among children
      const slice = availableHeight / nodes.length;
      let currentY = parentY - availableHeight / 2 + slice / 2;

      nodes.forEach((node) => {
        // Draw Line
        this.drawLine(parentX, parentY, nextX, currentY);

        // Draw Probability (Edge Label)
        this.drawLatexBox(
          parentX,
          parentY,
          nextX,
          currentY,
          node.probability,
          "edge-label"
        );

        // Draw Node
        this.drawNode(nextX, currentY, node.to);

        // Recurse
        this.drawBranches(nextX, currentY, node.branches, slice);

        currentY += slice;
      });
    }

    // --- SVG Helpers ---

    createSvg(type) {
      return document.createElementNS("http://www.w3.org/2000/svg", type);
    }

    drawLine(x1, y1, x2, y2) {
      const line = this.createSvg("line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2 - this.config.nodeRadius);
      line.setAttribute("y2", y2);
      line.classList.add("edge-line");
      this.svg.appendChild(line);
    }

    drawCircle(cx, cy, className) {
      const c = this.createSvg("circle");
      c.setAttribute("cx", cx);
      c.setAttribute("cy", cy);
      c.setAttribute(
        "r",
        className === "root-node" ? 6 : this.config.nodeRadius
      );
      c.classList.add(className);
      this.svg.appendChild(c);
    }

    drawNode(cx, cy, label) {
      this.drawCircle(cx, cy, "node-circle");
      this.drawLatexBox(cx, cy, cx, cy, label, "node-label");
    }

    drawLatexBox(x1, y1, x2, y2, text, type) {
      if (!text) return;

      const isEdge = type === "edge-label";
      const mx = isEdge ? (x1 + x2) / 2 : x1;
      const my = isEdge ? (y1 + y2) / 2 - 15 : y1; // Lift edge labels slightly

      const w = 80;
      const h = 40;
      const fo = this.createSvg("foreignObject");
      fo.setAttribute("x", mx - w / 2);
      fo.setAttribute("y", my - h / 2);
      fo.setAttribute("width", w);
      fo.setAttribute("height", h);
      fo.classList.add(type);

      const div = document.createElement("div");
      div.classList.add("math-container");
      // Add $$ delimiters for MathJax
      div.innerText = `$$${text}$$`;

      fo.appendChild(div);
      this.svg.appendChild(fo);
    }

    renderMath() {
      if (window.MathJax) {
        const mathDivs = Array.from(
          this.shadowRoot.querySelectorAll(".math-container")
        );
        if (mathDivs.length > 0) {
          window.MathJax.typesetPromise(mathDivs).catch((err) =>
            console.log(err)
          );
        }
      }
    }
  }

  customElements.define("tree-diagram", TreeDiagram);
})();
