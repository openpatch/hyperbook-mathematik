---
name: Das Distributivgesetz
index: 1
lang: de
permaid: mittelstufe-terme-klammern-distributivgesetz
---

# Das Distributivgesetz

:::alert{info}

**Darum geht's:** Du löst eine Klammer auf, vor der ein Faktor steht. Dabei siehst du an Menüs und an Rechtecken, warum der Faktor mit **jedem** Glied in der Klammer multipliziert wird.

:::

## Wer rechnet richtig?

Vier Personen bestellen am Kiosk jeweils ein Menü aus einem Snack für $x$ € und einem Getränk für $2$ €.

- **Mara:** „Zusammen kostet das $4 \cdot (x + 2)$ €.“
- **Ben:** „Das sind $4x + 2$ €.“

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 250" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Oben: vier Menüs mit je einem Snack x und einem Getränk 2. Unten: dieselben Teile nach Sorten sortiert: vier Snacks und vier Getränke.">
<g font-size="16" text-anchor="middle" fill="currentColor">
<g>
<rect x="20" y="20" width="130" height="70" rx="10" fill="none" stroke="currentColor" stroke-dasharray="5 4"/>
<rect x="32" y="35" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="57" y="61">x</text>
<rect x="90" y="35" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="115" y="61">2</text>
</g>
<g>
<rect x="175" y="20" width="130" height="70" rx="10" fill="none" stroke="currentColor" stroke-dasharray="5 4"/>
<rect x="187" y="35" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="212" y="61">x</text>
<rect x="245" y="35" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="270" y="61">2</text>
</g>
<g>
<rect x="330" y="20" width="130" height="70" rx="10" fill="none" stroke="currentColor" stroke-dasharray="5 4"/>
<rect x="342" y="35" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="367" y="61">x</text>
<rect x="400" y="35" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="425" y="61">2</text>
</g>
<g>
<rect x="485" y="20" width="130" height="70" rx="10" fill="none" stroke="currentColor" stroke-dasharray="5 4"/>
<rect x="497" y="35" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="522" y="61">x</text>
<rect x="555" y="35" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="580" y="61">2</text>
</g>
<text x="320" y="112">4 Menüs: 4 · (x + 2)</text>
<g>
<rect x="20" y="140" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="45" y="166">x</text>
<rect x="78" y="140" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="103" y="166">x</text>
<rect x="136" y="140" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="161" y="166">x</text>
<rect x="194" y="140" width="50" height="40" rx="6" fill="#397b96" fill-opacity="0.5"/><text x="219" y="166">x</text>
<rect x="340" y="140" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="365" y="166">2</text>
<rect x="398" y="140" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="423" y="166">2</text>
<rect x="456" y="140" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="481" y="166">2</text>
<rect x="514" y="140" width="50" height="40" rx="6" fill="#9A6B2F" fill-opacity="0.5"/><text x="539" y="166">2</text>
</g>
<text x="292" y="166" font-size="22">+</text>
<text x="132" y="205">4 Snacks: 4x</text>
<text x="452" y="205">4 Getränke: 4 · 2 = 8</text>
<text x="320" y="238" font-weight="bold">4 · (x + 2) = 4x + 8</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Ben hat nur ein Getränk bezahlt. Jedes der vier Menüs enthält aber ein Getränk.</figcaption>
</figure>

:::multievent

Ein Snack kostet $x = 3$ €. Vier Menüs kosten dann wirklich {z{20}} €.

Maras Term liefert {z{20}} €, Bens Term liefert {z{14}} €.

Recht hat {A{!Mara|Ben|keiner von beiden}}. Ohne Klammer heißt der Term $4x +$ {z{8}}.

:::

## Ein Rechteck, zwei Rechenwege

Ein Rechteck ist $a$ hoch und $b + c$ breit. Du kannst seine Fläche **im Ganzen** oder **in zwei Teilen** berechnen. Stelle $a$, $b$ und $c$ ein.

:::jsxgraph{height="420" width="720" boundingbox="[-1.2,9,17,-1.3]" axis=false grid=false}

```js
var num = function (v) { return String(Math.round(v * 100) / 100).replace('.', ','); };
var mk = function (y, min, start, max, col) {
  return board.create('slider', [[11, y], [15.5, y], [min, start, max]], {
    name: '', withLabel: false, snapWidth: 0.5,
    strokeColor: col, fillColor: col, highline: { strokeColor: col }
  });
};
var A = mk(8.2, 1, 3, 5, '#333');
var B = mk(7.2, 0.5, 4, 4.5, '#397b96');
var C = mk(6.2, 0.5, 2, 3, '#9A6B2F');
var r = function (s) { return function () { return Math.round(s.Value() * 2) / 2; }; };
var a = r(A), b = r(B), c = r(C);
board.create('text', [9.3, 8.2, function () { return 'a = ' + num(a()); }], { fontSize: 16, anchorY: 'middle', fixed: true });
board.create('text', [9.3, 7.2, function () { return 'b = ' + num(b()); }], { fontSize: 16, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });
board.create('text', [9.3, 6.2, function () { return 'c = ' + num(c()); }], { fontSize: 16, anchorY: 'middle', fixed: true, strokeColor: '#9A6B2F' });

var P = function (fx, fy) { return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false }); };
var bc = function () { return b() + c(); };
var rect = function (x0, x1, col) {
  return board.create('polygon', [P(x0, 0), P(x1, 0), P(x1, a), P(x0, a)], {
    fillColor: col, fillOpacity: 0.5, fixed: true, hasInnerPoints: false,
    vertices: { visible: false }, borders: { strokeColor: '#333', strokeWidth: 1.5, fixed: true }
  });
};
rect(0, b, '#397b96');
rect(b, bc, '#9A6B2F');
var t = function (fx, fy, s, opt) {
  return board.create('text', [fx, fy, s], Object.assign({ anchorX: 'middle', anchorY: 'middle', fontSize: 16, fixed: true }, opt || {}));
};
t(function () { return b() / 2; }, function () { return a() / 2; }, 'a·b');
t(function () { return b() + c() / 2; }, function () { return a() / 2; }, 'a·c');
t(function () { return b() / 2; }, -0.6, 'b', { strokeColor: '#397b96' });
t(function () { return b() + c() / 2; }, -0.6, 'c', { strokeColor: '#9A6B2F' });
t(-0.6, function () { return a() / 2; }, 'a');

board.create('text', [9.3, 4.4, function () {
  return 'im Ganzen:  a · (b + c) = ' + num(a()) + ' · ' + num(bc()) + ' = ' + num(a() * bc());
}], { fontSize: 16, fixed: true });
board.create('text', [9.3, 3.2, function () {
  return 'in Teilen:  a·b + a·c = ' + num(a() * b()) + ' + ' + num(a() * c()) + ' = ' + num(a() * b() + a() * c());
}], { fontSize: 16, fixed: true });
board.create('text', [9.3, 1.6, 'Beide Wege liefern dieselbe Fläche.'], { fontSize: 15, fixed: true, strokeColor: '#2e7d32' });
```

:::

:::multievent

Ein Rechteck ist $3$ hoch und $x + 2$ breit.

Fläche im Ganzen: $3 \cdot (x + 2)$. Fläche in Teilen: {z{3}} $x +$ {z{6}}.

:::

:::snippet{#merken}

**Distributivgesetz**

Eine Summe oder Differenz wird mit einem Faktor multipliziert, indem man **jedes Glied** in der Klammer mit dem Faktor multipliziert.

$$a \cdot (b + c) = a \cdot b + a \cdot c \qquad a \cdot (b - c) = a \cdot b - a \cdot c$$

Ist der Faktor negativ, gelten zusätzlich die Vorzeichenregeln.

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 420 110" width="420" style="max-width:100%;height:auto;" role="img" aria-label="Zwei Bögen führen vom Faktor 7 zu jedem Glied in der Klammer: 7 mal 4x und 7 mal 3y.">
<g font-size="26" fill="currentColor" text-anchor="middle"><text x="48" y="90">7</text><text x="72" y="90">·</text><text x="92" y="90">(</text><text x="115" y="90">4x</text><text x="148" y="90">+</text><text x="180" y="90">3y</text><text x="206" y="90">)</text></g>
<path d="M 48 64 Q 82 18 115 64" fill="none" stroke="#397b96" stroke-width="2.5"/>
<path d="M 48 64 Q 114 -4 180 64" fill="none" stroke="#9A6B2F" stroke-width="2.5"/>
<g font-size="22" fill="currentColor"><text x="250" y="90">= 28x + 21y</text></g>
</svg>
</figure>

## Klammern auflösen

:::snippet{#aufgabe}

**1** Löse die Klammer auf. Zeichne in Gedanken die zwei Bögen.

:::

::::::tabs

::::tab{title="Start"}

:::multievent

| | |
| --- | --- |
| $5(x + y) =$ {z{5}} $x +$ {z{5}} $y$ | $9(x - y) =$ {z{9}} $x -$ {z{9}} $y$ |
| $4(r - 2) =$ {z{4}} $r -$ {z{8}} | $0{,}7(3 + x) =$ {z{2,1}} $+$ {z{0,7}} $x$ |
| $a(3 + b) =$ {z{3}} $a + ab$ | $(x + y) \cdot z = xz + yz$: {A{!richtig|falsch}} |

:::

::::

::::tab{title="Mit Vorzeichen"}

:::multievent

| | |
| --- | --- |
| $-8(y + 7) =$ {z{-8}} $y$ $+$ ( {z{-56}} ) | $-3(x - 1) =$ {z{-3}} $x +$ {z{3}} |
| $-2(3x - 5y) =$ {z{-6}} $x +$ {z{10}} $y$ | $-5s(3t + 20u) =$ {z{-15}} $st$ $+$ ( {z{-100}} ) $su$ |

{b{Bei −2(3x − 5y) wird jedes Glied mit −2 multipliziert: (−2) · 3x = −6x und (−2) · (−5y) = +10y.}}

:::

::::

::::tab{title="Variable als Faktor"}

:::multievent

| | |
| --- | --- |
| $5a(7b + c) =$ {z{35}} $ab +$ {z{5}} $ac$ | $4z(6x - 7y) =$ {z{24}} $xz -$ {z{28}} $yz$ |
| $3a(4a + 7b) =$ {z{12}} $a^2 +$ {z{21}} $ab$ | $-3a(4a + b) =$ {z{-12}} $a^2$ $+$ ( {z{-3}} ) $ab$ |

:::

::::

::::::

## Fehlerlabor

Canan rechnet so:

$$
\begin{aligned}
3a(4a + 7b) &= 3 \cdot 4a + 3 \cdot 7b + a \cdot 4a + a \cdot 7b \\
&= 12a + 21b + 4a^2 + 7ab
\end{aligned}
$$

:::multievent

Canans Fehler: {A{Sie hat die Vorzeichen vertauscht.|!Sie hat den Faktor 3a in 3 und a zerlegt und beide einzeln mit jedem Glied multipliziert.|Sie hat vergessen, mit 7b zu multiplizieren.}}

Probe mit $a = 1$ und $b = 1$: $3a(4a + 7b) =$ {z{33}}, Canans Ergebnis ergibt {z{44}}.

Richtig ist: $3a(4a + 7b) =$ {z{12}} $a^2 +$ {z{21}} $ab$

{b{Der Faktor vor der Klammer ist das ganze Produkt 3a. Kreise ihn ein und verbinde ihn mit jedem Glied: 3a · 4a = 12a² und 3a · 7b = 21ab.}}

:::

## Eine Summe dividieren

Max behauptet: $(6a + 9b) : 3 = 2a + 3b$.

Durch $3$ dividieren ist dasselbe wie mit $\frac{1}{3}$ multiplizieren. Also gilt auch hier das Distributivgesetz:

$$(6a + 9b) : 3 = \tfrac{1}{3} \cdot (6a + 9b) = 2a + 3b$$

:::multievent

$(8x - 12y) : (-2) =$ {z{-4}} $x +$ {z{6}} $y$

$(15p + 10q) : 5 =$ {z{3}} $p +$ {z{2}} $q$

:::
