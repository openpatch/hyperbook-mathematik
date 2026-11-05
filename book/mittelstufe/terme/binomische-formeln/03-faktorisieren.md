---
name: "Rückwärts: Faktorisieren"
index: 3
lang: de
---

# Rückwärts: Faktorisieren

:::alert{info}

**Darum geht's:** Du liest die binomischen Formeln von rechts nach links. So machst du aus einer Summe ein Produkt. Das brauchst du später beim Lösen von Gleichungen und beim Kürzen.

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 600 130" width="600" style="max-width:100%;height:auto;" role="img" aria-label="Ausmultiplizieren führt vom Produkt zur Summe, Faktorisieren von der Summe zum Produkt">
<rect x="20" y="40" width="170" height="50" rx="10" fill="#397b96" fill-opacity="0.85"/>
<text x="105" y="72" font-size="20" text-anchor="middle" fill="#fff">(x + 5)²</text>
<rect x="410" y="40" width="170" height="50" rx="10" fill="#9A6B2F" fill-opacity="0.85"/>
<text x="495" y="72" font-size="20" text-anchor="middle" fill="#fff">x² + 10x + 25</text>
<path d="M 200 52 L 398 52" stroke="currentColor" stroke-width="2.5" marker-end="url(#bf-pfeil)"/>
<path d="M 400 80 L 202 80" stroke="#bb0a21" stroke-width="2.5" marker-end="url(#bf-pfeil-rot)"/>
<text x="300" y="38" font-size="16" text-anchor="middle" fill="currentColor">ausmultiplizieren</text>
<text x="300" y="108" font-size="16" font-weight="bold" text-anchor="middle" fill="#bb0a21">faktorisieren</text>
<text x="105" y="122" font-size="14" text-anchor="middle" fill="currentColor">Produkt</text>
<text x="495" y="122" font-size="14" text-anchor="middle" fill="currentColor">Summe</text>
<defs>
<marker id="bf-pfeil" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
<marker id="bf-pfeil-rot" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#bb0a21"/></marker>
</defs>
</svg>
</figure>

## So gehst du vor

:::snippet{#merken}

**Faktorisieren mit binomischen Formeln**

1. **Quadrate suchen:** Welche Glieder sind Quadrate? Dann findest du $a$ und $b$.
2. **Mittelglied prüfen:** Gibt es ein Mittelglied, muss es $2ab$ sein.
3. **Formel wählen:**
   - $+2ab$ → $(a + b)^2$
   - $-2ab$ → $(a - b)^2$
   - kein Mittelglied, aber ein Minus zwischen den Quadraten → $(a + b)(a - b)$

:::

:::snippet{#beispiel}

| Summe | Quadrate | Mittelglied | Produkt |
| --- | --- | --- | --- |
| $x^2 + 14x + 49$ | $x^2$ und $49 = 7^2$ | $2 \cdot x \cdot 7 = 14x$ ✓ | $(x + 7)^2$ |
| $9x^2 - 12x + 4$ | $(3x)^2$ und $2^2$ | $2 \cdot 3x \cdot 2 = 12x$ ✓ | $(3x - 2)^2$ |
| $25 - x^2$ | $5^2$ und $x^2$ | keins, aber Minus | $(5 + x)(5 - x)$ |

:::

## Welche Formel passt?

:::snippet{#aufgabe}

**1** Entscheide, welche Formel passt. Manchmal passt keine.

:::

:::multievent

| Summe | Formel |
| --- | --- |
| $x^2 + 8x + 16$ | {A{!1. Formel|2. Formel|3. Formel|keine}} |
| $x^2 - 14x + 49$ | {A{1. Formel|!2. Formel|3. Formel|keine}} |
| $x^2 - 36$ | {A{1. Formel|2. Formel|!3. Formel|keine}} |
| $x^2 + 5x + 9$ | {A{1. Formel|2. Formel|3. Formel|!keine}} |
| $x^2 + 16$ | {A{1. Formel|2. Formel|3. Formel|!keine}} |

{b{x² + 5x + 9: 9 = 3², aber 2 · x · 3 = 6x und nicht 5x. — x² + 16: Eine Summe von zwei Quadraten ohne Mittelglied passt zu keiner Formel.}}

:::

## Faktorisieren üben

:::snippet{#aufgabe}

**2** Schreibe als Produkt.

:::

:::multievent

| | |
| --- | --- |
| $x^2 + 6x + 9 = (x +$ {z{3}} $)^2$ | $x^2 - 10x + 25 = (x -$ {z{5}} $)^2$ |
| $x^2 - 64 = (x +$ {z{8}} $)(x -$ {z{8}} $)$ | $x^2 + 2x + 1 = (x +$ {z{1}} $)^2$ |
| $9x^2 + 6x + 1 = ($ {z{3}} $x + 1)^2$ | $4x^2 - 9 = ($ {z{2}} $x + 3)($ {z{2}} $x - 3)$ |
| $25a^2 - 20a + 4 = ($ {z{5}} $a -$ {z{2}} $)^2$ | $1 - 100y^2 = (1 +$ {z{10}} $y)(1 -$ {z{10}} $y)$ |

:::

## Das fehlende Stück ergänzen

Manchmal fehlt ein Glied, damit eine binomische Formel entsteht. Im Bild siehst du, warum: Aus $x^2$ und den zwei Streifen wird erst mit der **Ecke** ein ganzes Quadrat.

Stelle mit dem Schieberegler die Zahl $p$ vor dem $x$ ein.

:::jsxgraph{height="400" width="720" boundingbox="[-1.2,9.5,17.5,-1.2]" axis=false grid=false}

```js
var num = function (x) {
  var r = Math.round(x * 100) / 100;
  return String(r).replace('.', ',');
};
var pv = function () { return Math.round(S.Value()); };
var X = 5;  // Seitenlänge x (nur zur Darstellung)
var h = function () { return pv() / 2; };

var S = board.create('slider', [[11, 8.5], [16.5, 8.5], [2, 6, 8]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#9A6B2F', fillColor: '#9A6B2F', highline: { strokeColor: '#9A6B2F' }
});
board.create('text', [9.3, 8.5, function () { return 'p = ' + pv(); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#9A6B2F'
});

var P = function (fx, fy) {
  return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false });
};
var rect = function (x0, y0, x1, y1, opts) {
  return board.create('polygon', [P(x0, y0), P(x1, y0), P(x1, y1), P(x0, y1)], Object.assign({
    fixed: true, hasInnerPoints: false, vertices: { visible: false },
    borders: { strokeColor: '#333', strokeWidth: 1.5, fixed: true }
  }, opts));
};
var xr = function () { return X + h(); };

rect(0, 0, X, X, { fillColor: '#397b96', fillOpacity: 0.55 });
rect(X, 0, xr, X, { fillColor: '#9A6B2F', fillOpacity: 0.55 });
rect(0, X, X, xr, { fillColor: '#9A6B2F', fillOpacity: 0.55 });
rect(X, X, xr, xr, {
  fillColor: '#bb0a21', fillOpacity: 0.15,
  borders: { strokeColor: '#bb0a21', strokeWidth: 2, dash: 2, fixed: true }
});

var label = function (fx, fy, txt, col) {
  board.create('text', [fx, fy, txt], {
    anchorX: 'middle', anchorY: 'middle', fontSize: 16, fixed: true, strokeColor: col || '#333'
  });
};
label(X / 2, X / 2, 'x²');
label(function () { return X + h() / 2; }, X / 2, function () { return num(h()) + 'x'; });
label(X / 2, function () { return X + h() / 2; }, function () { return num(h()) + 'x'; });
label(function () { return X + h() / 2; }, function () { return X + h() / 2; }, '?', '#bb0a21');
label(X / 2, -0.6, 'x');
label(function () { return X + h() / 2; }, -0.6, function () { return num(h()); });

board.create('text', [9.3, 6, function () {
  return 'Jeder Streifen: p : 2 = ' + num(h());
}], { fontSize: 17, fixed: true });
board.create('text', [9.3, 4.6, function () {
  return 'Die Ecke: ' + num(h()) + '² = ' + num(h() * h());
}], { fontSize: 17, fixed: true, strokeColor: '#bb0a21' });
board.create('text', [9.3, 2.6, function () {
  return 'x² + ' + pv() + 'x + ' + num(h() * h()) + ' = (x + ' + num(h()) + ')²';
}], { fontSize: 20, fixed: true });
```

:::

:::snippet{#aufgabe}

**3** Ergänze die Lücke so, dass eine binomische Formel entsteht.

:::

:::multievent

| | |
| --- | --- |
| $x^2 +$ {z{10}} $x + 25 = (x + 5)^2$ | $x^2 -$ {z{6}} $x + 9 = (x - 3)^2$ |
| $x^2 + 12x +$ {z{36}} $= (x + 6)^2$ | $x^2 - 4x +$ {z{4}} $= (x - 2)^2$ |
| $x^2 + 3x +$ {z{2,25}} $= (x + 1{,}5)^2$ | $4x^2 +$ {z{28}} $x + 49 = (2x + 7)^2$ |

{b{Das letzte Glied ist (p : 2)². Das Mittelglied ist 2 · a · b.}}

:::

:::alert{success}

Dieses Ergänzen heißt **quadratische Ergänzung**. Damit kannst du später quadratische Gleichungen lösen.

:::

## Teste dich

::bitflow{id="binomische-formeln-faktorisieren" src="faktorisieren.bitflow" height="auto" maxHeight="85vh"}

Weiter geht es mit der Seite [Rechentricks](/mittelstufe/terme/binomische-formeln/04-rechentricks).
