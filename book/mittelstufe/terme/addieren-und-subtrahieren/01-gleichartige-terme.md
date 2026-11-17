---
name: Gleichartige Terme
index: 1
lang: de
permaid: mittelstufe-terme-addieren-gleichartige-terme
---

# Gleichartige Terme zusammenfassen

:::alert{info}

**Darum geht's:** Du stellst Terme als Flächen dar und erkennst daran, welche Glieder du zusammenfassen darf und welche nicht.

:::

## Wer hat recht?

Vier Personen haben den Term $x + x^2$ vereinfacht:

| Sarah | Dennis | Marie | Florian |
| :---: | :---: | :---: | :---: |
| $x + x^2 = x^3$ | $x + x^2 = 2x^3$ | $x + x^2 = 2x$ | $x + x^2 = 2x^2$ |

Stelle die Länge $x$ mit dem Regler ein. Links siehst du $x$ als Streifen mit der Breite $1$ und $x^2$ als Quadrat. Rechts werden die Werte der Terme verglichen.

:::jsxgraph{height="400" width="720" boundingbox="[-0.5,7.2,17,-1]" axis=false grid=false}

```js
var num = function (v) {
  return String(Math.round(v * 1000) / 1000).replace('.', ',');
};
var X = board.create('slider', [[0.5, 6.6], [5, 6.6], [0.5, 2, 4]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var xv = function () { return Math.round(X.Value() * 2) / 2; };
board.create('text', [5.4, 6.6, function () { return 'x = ' + num(xv()); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96'
});

var P = function (fx, fy) {
  return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false });
};
var rect = function (x0, y0, x1, y1, color) {
  return board.create('polygon', [P(x0, y0), P(x1, y0), P(x1, y1), P(x0, y1)], {
    fillColor: color, fillOpacity: 0.55, fixed: true, hasInnerPoints: false,
    vertices: { visible: false }, borders: { strokeColor: '#333', strokeWidth: 1.5, fixed: true }
  });
};
// Streifen x (Breite 1, Länge x)
rect(0, 0, 1, xv, '#9A6B2F');
// Quadrat x²
rect(1.6, 0, function () { return 1.6 + xv(); }, xv, '#397b96');
board.create('text', [0.5, function () { return xv() / 2; }, 'x'], { anchorX: 'middle', anchorY: 'middle', fontSize: 17, fixed: true });
board.create('text', [function () { return 1.6 + xv() / 2; }, function () { return xv() / 2; }, 'x²'], { anchorX: 'middle', anchorY: 'middle', fontSize: 17, fixed: true });
board.create('text', [0.5, -0.5, '1'], { anchorX: 'middle', fontSize: 14, fixed: true });
board.create('text', [function () { return 1.6 + xv() / 2; }, -0.5, 'x'], { anchorX: 'middle', fontSize: 14, fixed: true });

var x = xv;
var lhs = function () { return x() + x() * x(); };
var rows = [
  ['x + x²', lhs, '#333'],
  ['Sarah: x³', function () { return Math.pow(x(), 3); }],
  ['Dennis: 2x³', function () { return 2 * Math.pow(x(), 3); }],
  ['Marie: 2x', function () { return 2 * x(); }],
  ['Florian: 2x²', function () { return 2 * x() * x(); }]
];
rows.forEach(function (r, i) {
  board.create('text', [8.2, 5 - i * 1.05, r[0]], { fontSize: 18, anchorY: 'middle', fixed: true });
  board.create('text', [12.2, 5 - i * 1.05, function () { return '= ' + num(r[1]()); }], {
    fontSize: 18, anchorY: 'middle', fixed: true,
    strokeColor: function () {
      if (i === 0) { return '#397b96'; }
      return Math.abs(r[1]() - lhs()) < 1e-9 ? '#2e7d32' : '#bb0a21';
    }
  });
});
board.create('text', [8.2, -0.3, 'grün: gleicher Wert wie x + x²   rot: anderer Wert'], { fontSize: 13, fixed: true });
```

:::

:::multievent

Stelle $x = 2$ ein. Dann ist $x + x^2 =$ {z{6}}.

Bei $x = 1$ haben drei Personen scheinbar recht: {A{Sarah, Dennis und Marie|!Dennis, Marie und Florian|Sarah, Marie und Florian}}.

Haben die drei damit recht? {A{ja|!nein, bei anderen Zahlen stimmt es nicht}}

{b{Ein Streifen und ein Quadrat sind verschiedene Formen. Man kann sie nicht zu einem Stück einer Sorte zusammenlegen. Darum bleibt x + x² so stehen. Dass Dennis, Marie und Florian bei x = 1 denselben Wert erhalten, ist Zufall. Schon bei x = 2 stimmt keiner der vier Terme.}}

:::

## Gleiche Sorten zusammenlegen

Gleiche Teile kann man zusammenlegen und zählen. Verschiedene Teile bleiben getrennt.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 230" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Oben: drei x-Streifen plus zwei x-Streifen ergeben fünf x-Streifen. Unten: drei a-Streifen und zwei kürzere b-Streifen lassen sich nicht zu einer Sorte zusammenfassen.">
<g stroke="currentColor" stroke-width="1.2">
<rect x="20" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="45" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="70" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="135" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="160" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="240" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="265" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="290" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="315" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="340" y="20" width="20" height="80" fill="#9A6B2F" fill-opacity="0.6"/>
<rect x="20" y="130" width="20" height="80" fill="#397b96" fill-opacity="0.6"/>
<rect x="45" y="130" width="20" height="80" fill="#397b96" fill-opacity="0.6"/>
<rect x="70" y="130" width="20" height="80" fill="#397b96" fill-opacity="0.6"/>
<rect x="135" y="160" width="20" height="50" fill="#bb0a21" fill-opacity="0.6"/>
<rect x="160" y="160" width="20" height="50" fill="#bb0a21" fill-opacity="0.6"/>
</g>
<g font-size="22" fill="currentColor" text-anchor="middle">
<text x="113" y="68">+</text>
<text x="210" y="68">=</text>
<text x="113" y="178">+</text>
<text x="210" y="178">=</text>
</g>
<g font-size="18" fill="currentColor">
<text x="390" y="56">3x + 2x = 5x</text>
<text x="390" y="80" font-size="14" opacity="0.8">gleiche Sorte: zusammenzählen</text>
<text x="240" y="178">3a + 2b</text>
<text x="390" y="166">3a + 2b bleibt stehen</text>
<text x="390" y="190" font-size="14" opacity="0.8">verschiedene Sorten: nicht 5ab</text>
</g>
</svg>
</figure>

:::snippet{#merken}

**Gleichartige Glieder zusammenfassen**

Glieder, die sich **nur im Zahlfaktor** unterscheiden, heißen gleichartig. Sie haben dieselben Variablen mit denselben Exponenten. Man fasst sie zusammen, indem man die Zahlfaktoren addiert oder subtrahiert. Die Variablen bleiben unverändert.

$$7a + 2a + 4b = 9a + 4b \qquad 8x^2 - x^2 + 3x = 7x^2 + 3x$$

$$-5xy^2 + 3xy^2 = (-5 + 3) \cdot xy^2 = -2xy^2$$

:::

:::alert{info}

**Steht vor einer Variablen keine Zahl**, ist der Zahlfaktor $1$: $\; x^2 = 1 \cdot x^2$ und $-y = -1 \cdot y$.

:::

## Gleichartig oder nicht?

:::snippet{#aufgabe}

**1** Lassen sich die Glieder zusammenfassen? Wenn ja, gib das Ergebnis an.

:::

:::multievent

| Term | zusammenfassen? | Ergebnis |
| --- | --- | --- |
| $12d - d$ | {A{!ja|nein}} | {z{11}} $d$ |
| $2xy + 2x$ | {A{ja|!nein}} | – |
| $2xy - 2yx$ | {A{!ja|nein}} | {z{0}} |
| $z^2 + 9z$ | {A{ja|!nein}} | – |
| $4ab^2 + 3ab^2$ | {A{!ja|nein}} | {z{7}} $ab^2$ |
| $4ab^2 + 3a^2b$ | {A{ja|!nein}} | – |

{b{xy und yx sind gleichartig, denn beim Multiplizieren darf man die Faktoren vertauschen. ab² und a²b sind nicht gleichartig, weil die Exponenten an anderen Variablen stehen.}}

:::

## Zahlfaktoren addieren

:::snippet{#aufgabe}

**2** Fasse zusammen.

:::

::::::tabs

::::tab{title="Ganze Zahlen"}

:::multievent

| | |
| --- | --- |
| $4x + 2x =$ {z{6}} $x$ | $9m - 5m =$ {z{4}} $m$ |
| $7y + y =$ {z{8}} $y$ | $14y - 14y =$ {z{0}} |
| $5x + 3x + 4x =$ {z{12}} $x$ | $12r - 3r - 8r =$ {z{1}} $r$ |
| $-x + 3x - x =$ {z{1}} $x$ | $17s + 5s - 29s =$ {z{-7}} $s$ |

:::

::::

::::tab{title="Dezimalzahlen"}

:::multievent

| | |
| --- | --- |
| $1{,}2r - 1{,}4r =$ {z{-0,2}} $r$ | $-3{,}45w + 2{,}13w =$ {z{-1,32}} $w$ |
| $0{,}7q^3 - 0{,}25q^3 =$ {z{0,45}} $q^3$ | $2{,}2a + 0{,}2a =$ {z{2,4}} $a$ |

:::

::::

::::tab{title="Brüche"}

:::multievent

Gib die Zahlfaktoren als Bruch oder als Dezimalzahl an.

| | |
| --- | --- |
| $\frac{2}{3}x^2 - \frac{1}{6}x^2 =$ {z{0,5}} $x^2$ | $\frac{3}{4}r^2 - \frac{1}{8}r^2 - \frac{1}{2}r^2 =$ {z{0,125}} $r^2$ |
| $-y - \frac{1}{4}y + \frac{1}{2}y =$ {z{-0,75}} $y$ | $\frac{3}{4}pr - \frac{1}{2}pr =$ {z{0,25}} $pr$ |

{b{Bringe die Brüche auf einen gemeinsamen Nenner: 2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2. Bei −1 − 1/4 + 1/2 = −4/4 − 1/4 + 2/4 = −3/4 = −0,75.}}

:::

::::

::::::
