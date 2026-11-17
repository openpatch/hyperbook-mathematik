---
name: Produkte vereinfachen
index: 1
lang: de
permaid: mittelstufe-terme-multiplizieren-produkte
---

# Produkte vereinfachen

:::alert{info}

**Darum geht's:** Du siehst an einem Rechteck aus Kacheln, warum $3x \cdot 5y = 15xy$ ist. Daraus leitest du ab, wie man ein Produkt mit einer Zahl multipliziert oder durch eine Zahl dividiert.

:::

## Ein Rechteck aus Kacheln

Jede Kachel ist $x$ breit und $y$ hoch. Ihr Flächeninhalt ist also $x \cdot y$. Ein großes Rechteck ist $m$ Kacheln breit und $n$ Kacheln hoch. Seine Seiten sind also $m \cdot x$ und $n \cdot y$ lang.

:::jsxgraph{height="430" width="720" boundingbox="[-1,9.2,17,-1.3]" axis=false grid=false}

```js
var M = board.create('slider', [[0.5, 8.6], [4.5, 8.6], [1, 3, 6]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var N = board.create('slider', [[8.5, 8.6], [12.5, 8.6], [1, 5, 6]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#9A6B2F', fillColor: '#9A6B2F', highline: { strokeColor: '#9A6B2F' }
});
var m = function () { return Math.round(M.Value()); };
var n = function () { return Math.round(N.Value()); };
board.create('text', [4.9, 8.6, function () { return 'Breite: ' + m() + 'x'; }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });
board.create('text', [12.9, 8.6, function () { return 'Höhe: ' + n() + 'y'; }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#9A6B2F' });

var W = 1.3, H = 1.1; // Kachelgröße (x und y)
var tile = function (i, j) {
  var vis = function () { return i < m() && j < n(); };
  board.create('polygon', [[i * W, j * H], [(i + 1) * W, j * H], [(i + 1) * W, (j + 1) * H], [i * W, (j + 1) * H]], {
    fillColor: (i + j) % 2 === 0 ? '#397b96' : '#6aa3bb', fillOpacity: 0.45, fixed: true,
    hasInnerPoints: false, vertices: { visible: false },
    borders: { strokeColor: '#333', strokeWidth: 1, visible: vis },
    visible: vis
  });
  board.create('text', [(i + 0.5) * W, (j + 0.5) * H, 'xy'], {
    anchorX: 'middle', anchorY: 'middle', fontSize: 13, fixed: true, visible: vis
  });
};
for (var i = 0; i < 6; i++) { for (var j = 0; j < 6; j++) { tile(i, j); } }
board.create('text', [function () { return m() * W / 2; }, -0.6, function () { return m() + 'x'; }], { anchorX: 'middle', fontSize: 16, fixed: true, strokeColor: '#397b96' });
board.create('text', [-0.4, function () { return n() * H / 2; }, function () { return n() + 'y'; }], { anchorX: 'right', anchorY: 'middle', fontSize: 16, fixed: true, strokeColor: '#9A6B2F' });

board.create('text', [9, 6.2, 'Fläche als Produkt der Seiten:'], { fontSize: 16, fixed: true });
board.create('text', [9, 5.3, function () { return m() + 'x · ' + n() + 'y'; }], { fontSize: 20, fixed: true });
board.create('text', [9, 4.0, 'Anzahl Kacheln mal Kachelfläche:'], { fontSize: 16, fixed: true });
board.create('text', [9, 3.1, function () { return m() + ' · ' + n() + ' · xy = ' + (m() * n()) + 'xy'; }], { fontSize: 20, fixed: true });
```

:::

:::multievent

Stelle $3x$ und $5y$ ein. Das Rechteck besteht aus {z{15}} Kacheln. Also ist $3x \cdot 5y =$ {z{15}} $xy$.

Ein Rechteck ist $2x$ breit und $4y$ hoch: $2x \cdot 4y =$ {z{8}} $xy$.

Ein Quadrat hat die Seitenlänge $3a$. Sein Flächeninhalt ist $3a \cdot 3a =$ {z{9}} $a^2$.

Ein gleichseitiges Dreieck hat die Seitenlänge $4x$. Sein Umfang ist $3 \cdot 4x =$ {z{12}} $x$.

:::

## Faktoren vertauschen

Bei $3x \cdot 5y$ stehen vier Faktoren: $3 \cdot x \cdot 5 \cdot y$. Beim Multiplizieren darf man die Faktoren vertauschen und beliebig zusammenfassen:

$$3x \cdot 5y = 3 \cdot x \cdot 5 \cdot y = \underbrace{3 \cdot 5}_{\text{Zahlen}} \cdot \underbrace{x \cdot y}_{\text{Variablen}} = 15xy$$

:::snippet{#merken}

**Multiplizieren und Dividieren von Produkten**

- Man multipliziert ein Produkt mit einer Zahl, indem man **nur einen Faktor** mit der Zahl multipliziert: $\; 5 \cdot (3a) = 15a$
- Ein Minuszeichen vor einem Produkt wirkt wie der Faktor $-1$: $\; -(7x) = (-1) \cdot 7x = -7x$
- Man dividiert ein Produkt durch eine Zahl, indem man **nur einen Faktor** durch die Zahl dividiert: $\; (12x) : 4 = 3x$

Dividieren durch eine Zahl ist dasselbe wie Multiplizieren mit ihrem Kehrwert: $\; 12x : 4 = \frac{1}{4} \cdot 12x = 3x$

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 600 170" width="600" style="max-width:100%;height:auto;" role="img" aria-label="Fünf Streifen der Länge 3a ergeben 15a. Man multipliziert nur die Zahl 3 mit 5, das a bleibt.">
<g stroke="currentColor" stroke-width="1">
<rect x="20" y="20" width="150" height="20" fill="#397b96" fill-opacity="0.5"/>
<rect x="20" y="45" width="150" height="20" fill="#397b96" fill-opacity="0.5"/>
<rect x="20" y="70" width="150" height="20" fill="#397b96" fill-opacity="0.5"/>
<rect x="20" y="95" width="150" height="20" fill="#397b96" fill-opacity="0.5"/>
<rect x="20" y="120" width="150" height="20" fill="#397b96" fill-opacity="0.5"/>
</g>
<g stroke="currentColor" stroke-width="1" stroke-dasharray="3 3" opacity="0.6">
<line x1="70" y1="20" x2="70" y2="140"/><line x1="120" y1="20" x2="120" y2="140"/>
</g>
<g font-size="14" fill="currentColor" text-anchor="middle"><text x="95" y="160">3a</text></g>
<g font-size="20" fill="currentColor">
<text x="200" y="70">5 · (3a) = 15a</text>
<text x="200" y="104" font-size="15" opacity="0.8">fünf Streifen mit je drei Stücken a</text>
<text x="200" y="128" font-size="15" opacity="0.8">und nicht 15 · 5a = 75a</text>
</g>
</svg>
</figure>

## Vereinfache

:::snippet{#aufgabe}

**1** Vereinfache. Achte auf die Vorzeichen.

:::

::::::tabs

::::tab{title="Multiplizieren"}

:::multievent

| | |
| --- | --- |
| $8 \cdot (3x) =$ {z{24}} $x$ | $(5a) \cdot 7 =$ {z{35}} $a$ |
| $\frac{1}{3} \cdot (-9u) =$ {z{-3}} $u$ | $(-0{,}2) \cdot (-5y) =$ {z{1}} $y$ |
| $(-a) \cdot 8 =$ {z{-8}} $a$ | $5 \cdot (-2s) =$ {z{-10}} $s$ |
| $(-2x) \cdot (-y) =$ {z{2}} $xy$ | $(4a) \cdot \left(-\frac{1}{2}\right) =$ {z{-2}} $a$ |

:::

::::

::::tab{title="Dividieren"}

:::multievent

| | |
| --- | --- |
| $8x : 2 =$ {z{4}} $x$ | $(-64r) : (-16) =$ {z{4}} $r$ |
| $3x : 0{,}2 =$ {z{15}} $x$ | $8a : \frac{1}{5} =$ {z{40}} $a$ |
| $(-18ab) : 6 =$ {z{-3}} $ab$ | $\frac{3}{4}x : 3 =$ {z{0,25}} $x$ |

{b{Durch 0,2 dividieren heißt mit 5 multiplizieren, denn 0,2 = 1/5. Ebenso: durch 1/5 dividieren heißt mit 5 multiplizieren.}}

:::

::::

::::tab{title="Mehrere Faktoren"}

:::multievent

| | |
| --- | --- |
| $2a \cdot 3b \cdot 4c =$ {z{24}} $abc$ | $(6a \cdot 2b \cdot 4c) : 8 =$ {z{6}} $abc$ |
| $4x \cdot 7y =$ {z{28}} $xy$ | $9a^2 \cdot b : 3 =$ {z{3}} $a^2b$ |
| $x \cdot x^3 = x^{\,\text{?}}$ mit $\text{?} =$ {z{4}} | $2x \cdot 3x =$ {z{6}} $x^2$ |

{b{x · x³ = x · x · x · x = x⁴. Bei 2x · 3x: 2 · 3 = 6 und x · x = x².}}

:::

::::

::::::

## Erst Produkte, dann Summen

In längeren Termen vereinfachst du zuerst jedes Produkt. Danach fasst du gleichartige Glieder zusammen.

:::snippet{#beispiel}

$$
\begin{aligned}
3 \cdot 7x + 7 - 4x : 2 &= 21x + 7 - 2x \\
&= 19x + 7
\end{aligned}
$$

:::

:::multievent

| | |
| --- | --- |
| $6 \cdot 2a + a \cdot 2 + 3 \cdot 5a =$ {z{29}} $a$ | $(-2) \cdot 7u + 3u - 11 \cdot (-u) =$ {z{0}} |
| $3 \cdot (2x) + 3 \cdot (5y) + 7 \cdot (3x) =$ {z{27}} $x +$ {z{15}} $y$ | $4 \cdot 7x - 2x \cdot 3x + 3 \cdot (-5x) + x \cdot 2x =$ {z{-4}} $x^2 +$ {z{13}} $x$ |

{b{Beim letzten Term: 28x − 6x² − 15x + 2x² = −4x² + 13x.}}

:::
