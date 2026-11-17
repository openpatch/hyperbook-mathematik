---
name: Potenzen von Produkten
index: 2
lang: de
permaid: mittelstufe-terme-multiplizieren-potenzen
---

# Potenzen von Produkten

:::alert{info}

**Darum geht's:** Du siehst an Quadraten und Würfeln, warum beim Potenzieren eines Produkts **jeder** Faktor potenziert wird, und unterscheidest das sicher vom Multiplizieren mit einer Zahl.

:::

## Ein Quadrat mit der Seite $k \cdot a$

Ein Quadrat hat die Seitenlänge $k \cdot a$. Es zerfällt in kleine Quadrate mit der Fläche $a^2$. Stelle $k$ ein und zähle.

:::jsxgraph{height="400" width="720" boundingbox="[-1,7.6,17,-1]" axis=false grid=false}

```js
var K = board.create('slider', [[0.5, 7], [4.5, 7], [1, 3, 5]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var k = function () { return Math.round(K.Value()); };
board.create('text', [4.9, 7, function () { return 'k = ' + k(); }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });
var s = 1.2;
var cell = function (i, j) {
  var vis = function () { return i < k() && j < k(); };
  board.create('polygon', [[i * s, j * s], [(i + 1) * s, j * s], [(i + 1) * s, (j + 1) * s], [i * s, (j + 1) * s]], {
    fillColor: (i + j) % 2 === 0 ? '#397b96' : '#6aa3bb', fillOpacity: 0.5, fixed: true,
    hasInnerPoints: false, vertices: { visible: false },
    borders: { strokeColor: '#333', strokeWidth: 1, visible: vis }, visible: vis
  });
  board.create('text', [(i + 0.5) * s, (j + 0.5) * s, 'a²'], { anchorX: 'middle', anchorY: 'middle', fontSize: 13, fixed: true, visible: vis });
};
for (var i = 0; i < 5; i++) { for (var j = 0; j < 5; j++) { cell(i, j); } }
board.create('text', [function () { return k() * s / 2; }, -0.5, function () { return k() + 'a'; }], { anchorX: 'middle', fontSize: 16, fixed: true });
board.create('text', [-0.3, function () { return k() * s / 2; }, function () { return k() + 'a'; }], { anchorX: 'right', anchorY: 'middle', fontSize: 16, fixed: true });

board.create('text', [8, 5, function () { return '(' + k() + 'a)² = ' + k() + 'a · ' + k() + 'a'; }], { fontSize: 20, fixed: true });
board.create('text', [8, 4, function () { return '= ' + k() + ' · ' + k() + ' · a · a'; }], { fontSize: 20, fixed: true });
board.create('text', [8, 3, function () { return '= ' + (k() * k()) + 'a²'; }], { fontSize: 20, fixed: true, strokeColor: '#397b96' });
board.create('text', [8, 1.5, function () { return k() === 1 ? '' : 'Nicht ' + k() + 'a² (das wären nur ' + k() + ' Kästchen).'; }], { fontSize: 15, fixed: true, strokeColor: '#bb0a21' });
```

:::

:::multievent

$(3a)^2 =$ {z{9}} $a^2$ $\qquad$ $(5a)^2 =$ {z{25}} $a^2$ $\qquad$ $(2a)^2 =$ {z{4}} $a^2$

:::

## Ein Würfel mit der Kante $2a$

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 600 250" width="600" style="max-width:100%;height:auto;" role="img" aria-label="Würfel mit der Kantenlänge 2a, zerlegt in acht kleine Würfel mit der Kante a. Daneben drei Streifen der Länge 2a.">
<g stroke="currentColor" stroke-width="1.5">
<path d="M 40 100 L 160 100 L 160 220 L 40 220 Z" fill="#397b96" fill-opacity="0.45"/>
<path d="M 40 100 L 90 60 L 210 60 L 160 100 Z" fill="#397b96" fill-opacity="0.25"/>
<path d="M 160 100 L 210 60 L 210 180 L 160 220 Z" fill="#397b96" fill-opacity="0.65"/>
</g>
<g stroke="currentColor" stroke-width="1" opacity="0.8">
<line x1="100" y1="100" x2="100" y2="220"/><line x1="40" y1="160" x2="160" y2="160"/>
<line x1="100" y1="100" x2="150" y2="60"/><line x1="65" y1="80" x2="185" y2="80"/>
<line x1="185" y1="80" x2="185" y2="200"/><line x1="160" y1="160" x2="210" y2="120"/>
</g>
<g font-size="15" fill="currentColor" text-anchor="middle"><text x="100" y="240">2a</text></g>
<g font-size="17" fill="currentColor">
<text x="20" y="30">(2a)³ = 2a · 2a · 2a = 8a³</text>
</g>
<g stroke="currentColor" stroke-width="1">
<rect x="330" y="110" width="120" height="18" fill="#9A6B2F" fill-opacity="0.5"/>
<rect x="330" y="134" width="120" height="18" fill="#9A6B2F" fill-opacity="0.5"/>
<rect x="330" y="158" width="120" height="18" fill="#9A6B2F" fill-opacity="0.5"/>
</g>
<g font-size="15" fill="currentColor" text-anchor="middle"><text x="390" y="198">2a</text></g>
<g font-size="17" fill="currentColor"><text x="330" y="30">3 · (2a) = 2a + 2a + 2a = 6a</text></g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Links: Beim Potenzieren wird jeder Faktor mehrfach verwendet. Rechts: Beim Multiplizieren mit 3 ändert sich nur die Zahl.</figcaption>
</figure>

:::snippet{#merken}

**Multiplizieren oder Potenzieren?**

| Multiplizieren mit einer Zahl | Potenzieren eines Produkts |
| --- | --- |
| $3 \cdot (2a) = 6a$ | $(2a)^3 = 2^3 \cdot a^3 = 8a^3$ |
| Nur **ein** Faktor ändert sich. | **Jeder** Faktor wird potenziert. |

Außerdem gilt: Multipliziert man Potenzen mit gleicher Basis, werden die Exponenten addiert: $\; b^3 \cdot b^3 = b^6$, also $(b^3)^2 = b^6$.

:::

:::alert{warn}

**Häufiger Fehler:** $(2x)^2 = 2x^2$ ist **falsch**. Richtig ist $(2x)^2 = 2x \cdot 2x = 4x^2$.

:::

## Produkte potenzieren

:::snippet{#aufgabe}

**1** Vereinfache. Trage den Zahlfaktor und die Exponenten ein.

:::

:::multievent

| Term | Ergebnis | Zahlfaktor | Exponenten |
| --- | --- | --- | --- |
| $(2uv)^3$ | $\square\, u^{\square} v^{\square}$ | {z{8}} | $u$: {z{3}}, $v$: {z{3}} |
| $(4cd^2)^3$ | $\square\, c^{\square} d^{\square}$ | {z{64}} | $c$: {z{3}}, $d$: {z{6}} |
| $(3u^2v^3)^2$ | $\square\, u^{\square} v^{\square}$ | {z{9}} | $u$: {z{4}}, $v$: {z{6}} |
| $(-ab)^2$ | $\square\, a^{\square} b^{\square}$ | {z{1}} | $a$: {z{2}}, $b$: {z{2}} |
| $(-2x^2y)^3$ | $\square\, x^{\square} y^{\square}$ | {z{-8}} | $x$: {z{6}}, $y$: {z{3}} |

{b{(4cd²)³ = 4³ · c³ · (d²)³ = 64c³d⁶. Bei (−2x²y)³ wird auch die −2 potenziert: (−2)³ = −8.}}

:::

:::snippet{#aufgabe}

**2** Erst potenzieren, dann multiplizieren.

:::

:::multievent

| Term | Zahlfaktor | Exponenten |
| --- | --- | --- |
| $4 \cdot (3xy)^2$ | {z{36}} | $x$: {z{2}}, $y$: {z{2}} |
| $3a^2 \cdot (2ab^2)^2$ | {z{12}} | $a$: {z{4}}, $b$: {z{4}} |
| $5c^2 \cdot (-3c^2d)^2$ | {z{45}} | $c$: {z{6}}, $d$: {z{2}} |
| $-3pq \cdot (4pq^2)^3$ | {z{-192}} | $p$: {z{4}}, $q$: {z{7}} |

{b{3a² · (2ab²)² = 3a² · 4a²b⁴ = 12a⁴b⁴. Bei −3pq · 64p³q⁶ werden die Exponenten addiert: p¹⁺³ = p⁴ und q¹⁺⁶ = q⁷.}}

:::

## Der Würfel wird doppelt so groß

:::snippet{#aufgabe}

**3** Ein Würfel hat die Kantenlänge $a$. Die Kante wird verdoppelt.

:::

:::multievent

Oberfläche vorher: $6a^2$. Oberfläche nachher: $6 \cdot (2a)^2 =$ {z{24}} $a^2$. Sie wird {z{4}}-mal so groß.

Volumen vorher: $a^3$. Volumen nachher: $(2a)^3 =$ {z{8}} $a^3$. Es wird {z{8}}-mal so groß.

Wird die Kante verdreifacht, wird das Volumen {z{27}}-mal so groß.

{b{Im Bild oben siehst du es: Der große Würfel besteht aus 8 kleinen Würfeln. Bei dreifacher Kante sind es 3 · 3 · 3 = 27 kleine Würfel.}}

:::
