---
name: Wertgleichheit und Ordnen
index: 2
lang: de
permaid: mittelstufe-terme-addieren-wertgleichheit
---

# Wertgleichheit und Ordnen

:::alert{info}

**Darum geht's:** Du prüfst, ob zwei Terme wirklich dasselbe bedeuten. Außerdem sortierst du lange Terme um, damit du sie sicher vereinfachen kannst.

:::

## Ist $2x + y$ dasselbe wie $2(x + y)$?

Zwei Terme heißen **wertgleich**, wenn sie bei **jeder** Einsetzung denselben Wert haben. Stelle $x$ und $y$ ein und vergleiche die beiden Balken.

:::jsxgraph{height="330" width="720" boundingbox="[-0.5,7.5,17,-0.8]" axis=false grid=false}

```js
var num = function (v) {
  return String(Math.round(v * 100) / 100).replace('.', ',');
};
var X = board.create('slider', [[0.5, 6.9], [4.5, 6.9], [0.5, 2, 3.5]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var Y = board.create('slider', [[8.5, 6.9], [12.5, 6.9], [0, 1, 3]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#9A6B2F', fillColor: '#9A6B2F', highline: { strokeColor: '#9A6B2F' }
});
var xv = function () { return Math.round(X.Value() * 2) / 2; };
var yv = function () { return Math.round(Y.Value() * 2) / 2; };
board.create('text', [4.9, 6.9, function () { return 'x = ' + num(xv()); }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });
board.create('text', [12.9, 6.9, function () { return 'y = ' + num(yv()); }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#9A6B2F' });

var P = function (fx, fy) {
  return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false });
};
var piece = function (y0, from, to, color, label) {
  board.create('polygon', [P(from, y0), P(to, y0), P(to, y0 + 1.1), P(from, y0 + 1.1)], {
    fillColor: color, fillOpacity: 0.6, fixed: true, hasInnerPoints: false,
    vertices: { visible: false }, borders: { strokeColor: '#333', strokeWidth: 1.2, fixed: true }
  });
  board.create('text', [function () { return (Type(from) + Type(to)) / 2; }, y0 + 0.55,
    function () { return Type(to) - Type(from) > 0.2 ? label : ''; }], {
    anchorX: 'middle', anchorY: 'middle', fontSize: 15, fixed: true
  });
};
var Type = function (f) { return typeof f === 'function' ? f() : f; };
var o = 3;
// 2x + y = x + x + y
board.create('text', [-0.3, 4.65, '2x + y'], { fontSize: 18, anchorY: 'middle', fixed: true });
piece(4.1, o, function () { return o + xv(); }, '#397b96', 'x');
piece(4.1, function () { return o + xv(); }, function () { return o + 2 * xv(); }, '#397b96', 'x');
piece(4.1, function () { return o + 2 * xv(); }, function () { return o + 2 * xv() + yv(); }, '#9A6B2F', 'y');
// 2(x + y) = x + y + x + y
board.create('text', [-0.3, 2.35, '2(x + y)'], { fontSize: 18, anchorY: 'middle', fixed: true });
piece(1.8, o, function () { return o + xv(); }, '#397b96', 'x');
piece(1.8, function () { return o + xv(); }, function () { return o + xv() + yv(); }, '#9A6B2F', 'y');
piece(1.8, function () { return o + xv() + yv(); }, function () { return o + 2 * xv() + yv(); }, '#397b96', 'x');
piece(1.8, function () { return o + 2 * xv() + yv(); }, function () { return o + 2 * xv() + 2 * yv(); }, '#9A6B2F', 'y');

board.create('text', [-0.3, 0.2, function () {
  var a = 2 * xv() + yv(), b = 2 * (xv() + yv());
  return '2x + y = ' + num(a) + '      2(x + y) = ' + num(b) + (a === b ? '      gleich' : '      verschieden');
}], { fontSize: 17, fixed: true });
```

:::

:::multievent

| $x$ | $y$ | $2x + y$ | $2(x + y)$ |
| :---: | :---: | :---: | :---: |
| $2$ | $0$ | {z{4}} | {z{4}} |
| $1$ | $0$ | {z{2}} | {z{2}} |
| $1$ | $3$ | {z{5}} | {z{8}} |

Für $y = 0$ stimmen die Werte überein. Sind die Terme wertgleich? {A{ja|!nein}}

Der Unterschied zwischen den Balken ist immer genau {A{x|!y|2y|x + y}}.

{b{2(x + y) = x + y + x + y = 2x + 2y. Der untere Balken hat ein y-Stück mehr. Nur wenn y = 0 ist, fällt das nicht auf.}}

:::

:::snippet{#merken}

**Wertgleichheit prüfen**

- **Ein einziges Gegenbeispiel** genügt, um zu zeigen: Die Terme sind **nicht** wertgleich.
- Noch so viele Übereinstimmungen beweisen die Wertgleichheit **nicht**. Dafür muss man einen Term mit Rechengesetzen in den anderen umformen.

:::

## Umfang eines Rechtecks

Für den Umfang eines Rechtecks gibt es zwei Formeln: $U = 2a + 2b$ und $U = 2 \cdot (a + b)$.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 560 170" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Links ein Rechteck mit den Seiten a und b. Rechts der Umfang als Strecke: zweimal a plus zweimal b, umsortiert als zweimal a plus b.">
<rect x="20" y="30" width="140" height="80" fill="#397b96" fill-opacity="0.15" stroke="currentColor"/>
<line x1="20" y1="30" x2="160" y2="30" stroke="#397b96" stroke-width="5"/>
<line x1="20" y1="110" x2="160" y2="110" stroke="#397b96" stroke-width="5"/>
<line x1="20" y1="30" x2="20" y2="110" stroke="#9A6B2F" stroke-width="5"/>
<line x1="160" y1="30" x2="160" y2="110" stroke="#9A6B2F" stroke-width="5"/>
<g font-size="16" fill="currentColor" text-anchor="middle"><text x="90" y="134">a</text><text x="176" y="76">b</text></g>
<g stroke-width="8">
<line x1="220" y1="50" x2="300" y2="50" stroke="#397b96"/>
<line x1="300" y1="50" x2="380" y2="50" stroke="#397b96"/>
<line x1="380" y1="50" x2="425" y2="50" stroke="#9A6B2F"/>
<line x1="425" y1="50" x2="470" y2="50" stroke="#9A6B2F"/>
<line x1="220" y1="110" x2="300" y2="110" stroke="#397b96"/>
<line x1="300" y1="110" x2="345" y2="110" stroke="#9A6B2F"/>
<line x1="345" y1="110" x2="425" y2="110" stroke="#397b96"/>
<line x1="425" y1="110" x2="470" y2="110" stroke="#9A6B2F"/>
</g>
<g font-size="16" fill="currentColor">
<text x="480" y="56">2a + 2b</text>
<text x="480" y="116">2(a + b)</text>
</g>
<g stroke="currentColor" stroke-width="1.5"><line x1="300" y1="40" x2="300" y2="60"/><line x1="380" y1="40" x2="380" y2="60"/><line x1="425" y1="40" x2="425" y2="60"/><line x1="300" y1="100" x2="300" y2="120"/><line x1="345" y1="100" x2="345" y2="120"/><line x1="425" y1="100" x2="425" y2="120"/></g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Beide Strecken bestehen aus denselben vier Stücken, nur in anderer Reihenfolge.</figcaption>
</figure>

:::multievent

Für $a = 7$ cm und $b = 5$ cm: $2a + 2b =$ {z{24}} cm und $2(a + b) =$ {z{24}} cm.

Für $a = 1{,}7$ cm und $b = 2{,}8$ cm: $2a + 2b =$ {z{9}} cm und $2(a + b) =$ {z{9}} cm.

Die beiden Formeln sind wertgleich, weil {A{sie bei zwei Beispielen übereinstimmen|!man um jedes Rechteck zweimal eine Seite a und zweimal eine Seite b läuft|beide eine 2 enthalten}}.

:::

## Glieder umsortieren

Ein Plus- oder Minuszeichen gehört immer zu dem Glied **dahinter**. Mit seinem Rechenzeichen darf ein Glied an eine andere Stelle wandern. So kannst du gleichartige Glieder nebeneinander stellen.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 170" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Der Term minus 2,5 minus 7w plus 5w hoch 2 minus 9w wird umsortiert. Jedes Glied wandert mit seinem Vorzeichen.">
<g font-size="20" text-anchor="middle" fill="currentColor">
<rect x="20" y="20" width="90" height="44" rx="8" fill="#888" fill-opacity="0.2"/><text x="65" y="49">−2,5</text>
<rect x="130" y="20" width="90" height="44" rx="8" fill="#397b96" fill-opacity="0.35"/><text x="175" y="49">−7w</text>
<rect x="240" y="20" width="90" height="44" rx="8" fill="#bb0a21" fill-opacity="0.3"/><text x="285" y="49">+5w²</text>
<rect x="350" y="20" width="90" height="44" rx="8" fill="#397b96" fill-opacity="0.35"/><text x="395" y="49">−9w</text>
<rect x="20" y="110" width="90" height="44" rx="8" fill="#bb0a21" fill-opacity="0.3"/><text x="65" y="139">+5w²</text>
<rect x="130" y="110" width="90" height="44" rx="8" fill="#397b96" fill-opacity="0.35"/><text x="175" y="139">−7w</text>
<rect x="240" y="110" width="90" height="44" rx="8" fill="#397b96" fill-opacity="0.35"/><text x="285" y="139">−9w</text>
<rect x="350" y="110" width="90" height="44" rx="8" fill="#888" fill-opacity="0.2"/><text x="395" y="139">−2,5</text>
</g>
<g stroke="currentColor" stroke-width="1.2" fill="none" opacity="0.6">
<path d="M 65 66 L 395 108"/><path d="M 175 66 L 175 108"/><path d="M 285 66 L 65 108"/><path d="M 395 66 L 285 108"/>
</g>
<g font-size="18" fill="currentColor">
<text x="465" y="49">ursprünglich</text>
<text x="465" y="139">= 5w² − 16w − 2,5</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Jedes Kärtchen wandert mit seinem Rechenzeichen. Danach stehen die w-Glieder nebeneinander.</figcaption>
</figure>

:::alert{info}

**Ordnen:** Man schreibt die Glieder meist nach dem **Alphabet** und nach **fallenden Exponenten**, die Zahl ohne Variable steht am Ende: $\;5w^2 - 16w - 2{,}5$.

:::

:::snippet{#aufgabe}

**1** Vereinfache und ordne.

:::

:::multievent

| | |
| --- | --- |
| $5a + 11 + 7a =$ {z{12}} $a +$ {z{11}} | $4x^2 + 13x - 2x^2 =$ {z{2}} $x^2 +$ {z{13}} $x$ |
| $4xy + xy - 9xy =$ {z{-4}} $xy$ | $z - z - 10z + z^2 = z^2$ {z{-10}} $z$ |
| $2{,}2a - 3ab + 0{,}2a =$ {z{2,4}} $a$ {z{-3}} $ab$ | $3 + 2x - 5 + x^2 - 4x = x^2$ {z{-2}} $x$ {z{-2}} |

{b{Unterstreiche gleichartige Glieder mit derselben Farbe. Achte darauf, das Vorzeichen vor dem Glied mitzunehmen.}}

:::

## Erst vereinfachen, dann einsetzen

:::snippet{#aufgabe}

**2** Berechne den Wert von $3x - \frac{3}{4}x^2 + 5x - \frac{1}{2}x^2 + \frac{3}{4} + 2x^2$ für $x = \frac{1}{2}$.

:::

:::multievent

Vereinfacht ergibt sich: {z{0,75}} $x^2 +$ {z{8}} $x + \frac{3}{4}$

Für $x = \frac{1}{2}$ hat der Term den Wert {z{4,9375}}.

{b{x²-Glieder: −3/4 − 1/2 + 2 = 3/4. x-Glieder: 3 + 5 = 8. Also 3/4 x² + 8x + 3/4. Mit x = 1/2: 3/4 · 1/4 + 4 + 3/4 = 3/16 + 4 + 12/16 = 4 + 15/16 = 4,9375.}}

:::
