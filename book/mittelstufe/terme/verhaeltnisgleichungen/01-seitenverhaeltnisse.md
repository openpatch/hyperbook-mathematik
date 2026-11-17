---
name: Seitenverhältnisse
index: 1
lang: de
permaid: mittelstufe-terme-verhaeltnis-seitenverhaeltnisse
---

# Seitenverhältnisse

:::alert{info}

**Darum geht's:** Du siehst, was ein Seitenverhältnis wie $16 : 9$ bedeutet, stellst dazu eine Gleichung auf und berechnest fehlende Seitenlängen.

:::

## Fotoformate

Ein Fotoanbieter druckt jedes Bild in den Formaten $4 : 3$, $3 : 2$ und $16 : 9$. Das Verhältnis gibt an: **lange Seite : kurze Seite**. Wähle ein Format und die Länge der kurzen Seite.

:::jsxgraph{height="420" width="720" boundingbox="[-0.8,9.6,17,-1.2]" axis=false grid=false}

```js
var num = function (v) { return String(Math.round(v * 100) / 100).replace('.', ','); };
var formats = [[4, 3], [3, 2], [16, 9]];
var F = board.create('slider', [[0.5, 9], [3.5, 9], [0, 0, 2]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#9A6B2F', fillColor: '#9A6B2F', highline: { strokeColor: '#9A6B2F' }
});
var K = board.create('slider', [[8.5, 9], [12.5, 9], [3, 9, 9]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var f = function () { return formats[Math.round(F.Value())]; };
var k = function () { return Math.round(K.Value()); };
var l = function () { return k() * f()[0] / f()[1]; };
board.create('text', [4, 9, function () { return 'Format ' + f()[0] + ' : ' + f()[1]; }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#9A6B2F' });
board.create('text', [13, 9, function () { return 'kurz: ' + k() + ' cm'; }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });

var s = 0.55;
var P = function (fx, fy) { return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false }); };
board.create('polygon', [P(0, 0), P(function () { return l() * s; }, 0), P(function () { return l() * s; }, function () { return k() * s; }), P(0, function () { return k() * s; })], {
  fillColor: '#397b96', fillOpacity: 0.3, fixed: true, hasInnerPoints: false,
  vertices: { visible: false }, borders: { strokeColor: '#333', strokeWidth: 2, fixed: true }
});
// Raster: Einheiten des Verhältnisses
for (var i = 1; i < 16; i++) {
  (function (i) {
    board.create('segment', [P(function () { return i * l() * s / f()[0]; }, 0), P(function () { return i * l() * s / f()[0]; }, function () { return k() * s; })], {
      strokeColor: '#397b96', strokeWidth: 1, dash: 2, fixed: true,
      visible: function () { return i < f()[0]; }
    });
  })(i);
}
board.create('text', [function () { return l() * s / 2; }, -0.6, function () { return num(l()) + ' cm'; }], { anchorX: 'middle', fontSize: 15, fixed: true });
board.create('text', [function () { return l() * s + 0.2; }, function () { return k() * s / 2; }, function () { return k() + ' cm'; }], { anchorY: 'middle', fontSize: 15, fixed: true });

board.create('text', [10.6, 6.6, function () { return 'lang : kurz = ' + f()[0] + ' : ' + f()[1]; }], { fontSize: 17, fixed: true });
board.create('text', [10.6, 5.5, function () { return 'x : ' + k() + ' = ' + f()[0] + ' : ' + f()[1]; }], { fontSize: 17, fixed: true });
board.create('text', [10.6, 4.4, function () { return 'x = ' + k() + ' · ' + f()[0] + ' : ' + f()[1]; }], { fontSize: 17, fixed: true });
board.create('text', [10.6, 3.3, function () { return 'x = ' + num(l()) + ' cm'; }], { fontSize: 17, fixed: true, strokeColor: '#397b96' });
board.create('text', [10.6, 1.6, function () { return 'Die lange Seite hat ' + f()[0] + ' Teile,'; }], { fontSize: 14, fixed: true });
board.create('text', [10.6, 0.9, function () { return 'die kurze ' + f()[1] + ' gleich große Teile.'; }], { fontSize: 14, fixed: true });
```

:::

:::multievent

Die kurze Seite ist $9$ cm lang. Wie lang ist die lange Seite?

| Format | Gleichung | lange Seite |
| --- | --- | --- |
| $4 : 3$ | $x : 9 = 4 : 3$ | {z{12}} cm |
| $3 : 2$ | $x : 9 = 3 : 2$ | {z{13,5}} cm |
| $16 : 9$ | $x : 9 = 16 : 9$ | {z{16}} cm |

{b{Bei 3 : 2 ist die kurze Seite in 2 gleiche Teile geteilt. Ein Teil ist 9 : 2 = 4,5 cm. Die lange Seite hat 3 solche Teile: 3 · 4,5 = 13,5 cm.}}

:::

## Verhältnisse als Brüche

Ein Verhältnis $a : b$ kann man als Bruch $\frac{a}{b}$ schreiben. Dann wird aus der Verhältnisgleichung eine Gleichung mit Brüchen:

$$x : 9 = 3 : 2 \quad \Longleftrightarrow \quad \frac{x}{9} = \frac{3}{2}$$

Multipliziert man beide Seiten mit $9$, steht $x$ allein: $x = \frac{3}{2} \cdot 9 = 13{,}5$.

## Das Firmenlogo

Das Logo einer Firma ist ein Rechteck. Breite und Höhe stehen im Verhältnis $3 : 2$.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 520 200" width="520" style="max-width:100%;height:auto;" role="img" aria-label="Zwei Logos im Verhältnis 3 zu 2. Das kleine auf dem Briefkopf ist 0,9 cm hoch. Das große auf dem Umschlag ist 4,2 cm breit.">
<g stroke="currentColor" stroke-width="1.5">
<rect x="40" y="110" width="81" height="54" fill="#9A6B2F" fill-opacity="0.45"/>
<rect x="240" y="30" width="252" height="168" fill="#9A6B2F" fill-opacity="0.45"/>
</g>
<g stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.6">
<line x1="67" y1="110" x2="67" y2="164"/><line x1="94" y1="110" x2="94" y2="164"/><line x1="40" y1="137" x2="121" y2="137"/>
<line x1="324" y1="30" x2="324" y2="198"/><line x1="408" y1="30" x2="408" y2="198"/><line x1="240" y1="114" x2="492" y2="114"/>
</g>
<g font-size="15" fill="currentColor" text-anchor="middle">
<text x="80" y="96">Briefkopf</text>
<text x="80" y="184">b = ?</text>
<text x="20" y="142">0,9</text>
<text x="366" y="20">Umschlag: b = 4,2</text>
<text x="222" y="118">h = ?</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Beide Logos bestehen aus 3 · 2 gleich großen Quadraten. Nur die Größe der Quadrate ist verschieden.</figcaption>
</figure>

:::snippet{#aufgabe}

**1** Auf dem Briefkopf ist das Logo $0{,}9$ cm hoch. Wie breit ist es?

:::

:::multievent

Gleichung: $\frac{b}{0{,}9} = \frac{3}{2}$. Multipliziere mit {z{0,9}}.

$b = \frac{3}{2} \cdot 0{,}9 =$ {z{1,35}} cm

:::

:::snippet{#aufgabe}

**2** Auf dem Briefumschlag ist das Logo $4{,}2$ cm breit. Wie hoch ist es?

:::

:::multievent

Gleichung: $\frac{4{,}2}{h} = \frac{3}{2}$. Hier steht die Variable im **Nenner**.

Multipliziere beide Seiten mit $2h$: $4{,}2 \cdot 2 = 3h$, also $8{,}4 = 3h$ und $h =$ {z{2,8}} cm.

{b{Probe: 4,2 : 2,8 = 1,5 und 3 : 2 = 1,5. Das Verhältnis stimmt.}}

:::

:::alert{warn}

**Steht die Variable im Nenner**, reicht es nicht, mit der Zahl im anderen Nenner zu multiplizieren. Multipliziere auch mit der Variablen, damit sie aus dem Nenner verschwindet.

:::
