---
name: Das Grundstück
index: 1
lang: de
permaid: mittelstufe-terme-zwei-klammern-grundstueck
---

# Das Grundstück wird größer

:::alert{info}

**Darum geht's:** Du berechnest die Fläche eines vergrößerten Rechtecks auf zwei Wegen. Daraus entdeckst du, wie man zwei Klammern multipliziert.

:::

## Die Situation

Familie John möchte auf einem Grundstück bauen, das $24$ m breit und $16$ m tief ist. Das Haus passt nicht darauf. Deshalb kauft die Familie im Norden einen $3$ m breiten und im Osten einen $2$ m breiten Streifen dazu. Das Grundstück bleibt rechteckig.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 420 300" width="420" style="max-width:100%;height:auto;" role="img" aria-label="Grundstück 24 mal 16 Meter. Im Norden kommt ein 3 Meter breiter Streifen dazu, im Osten ein 2 Meter breiter Streifen. Oben rechts entsteht eine Ecke 2 mal 3 Meter.">
<g stroke="currentColor" stroke-width="1.5">
<rect x="50" y="80" width="288" height="192" fill="#397b96" fill-opacity="0.45"/>
<rect x="50" y="44" width="288" height="36" fill="#9A6B2F" fill-opacity="0.45"/>
<rect x="338" y="80" width="24" height="192" fill="#9A6B2F" fill-opacity="0.45"/>
<rect x="338" y="44" width="24" height="36" fill="#bb0a21" fill-opacity="0.6"/>
</g>
<g font-size="16" fill="currentColor" text-anchor="middle">
<text x="194" y="182">alt: 24 m · 16 m</text>
<text x="194" y="68" font-size="14">Norden</text>
<text x="194" y="292">24 m</text>
<text x="30" y="180">16 m</text>
<text x="30" y="68" font-size="13">3 m</text>
<text x="350" y="292" font-size="13">2 m</text>
<text x="350" y="30" font-size="13">Ecke</text>
<text x="390" y="180" font-size="14">Osten</text>
</g>
</svg>
</figure>

:::multievent

Fläche vorher: $24 \cdot 16 =$ {z{384}} m²

**Weg 1 – im Ganzen:** Das neue Grundstück ist {z{26}} m breit und {z{19}} m tief. Fläche: {z{494}} m²

**Weg 2 – in Teilen:** Alte Fläche $384$ m² $+$ Nordstreifen $24 \cdot 3 =$ {z{72}} m² $+$ Oststreifen $16 \cdot 2 =$ {z{32}} m² $+$ Ecke $2 \cdot 3 =$ {z{6}} m² $=$ {z{494}} m²

Wer die Ecke vergisst, erhält {z{488}} m².

:::

## Allgemein: vier Teilflächen

Ein Rechteck ist $a + b$ breit und $c + d$ hoch. Stelle die vier Längen ein. Das große Rechteck besteht immer aus **vier** Teilflächen.

:::jsxgraph{height="460" width="720" boundingbox="[-1.2,11,18,-1.4]" axis=false grid=false}

```js
var num = function (v) { return String(Math.round(v * 100) / 100).replace('.', ','); };
var mk = function (y, min, start, max, col) {
  return board.create('slider', [[12, y], [16.5, y], [min, start, max]], {
    name: '', withLabel: false, snapWidth: 0.5,
    strokeColor: col, fillColor: col, highline: { strokeColor: col }
  });
};
var A = mk(10.2, 1, 5, 6, '#397b96');
var B = mk(9.3, 0.5, 2, 3, '#397b96');
var C = mk(8.4, 1, 4, 5, '#9A6B2F');
var D = mk(7.5, 0.5, 2, 3, '#9A6B2F');
var r = function (s) { return function () { return Math.round(s.Value() * 2) / 2; }; };
var a = r(A), b = r(B), c = r(C), d = r(D);
[['a', a, 10.2], ['b', b, 9.3], ['c', c, 8.4], ['d', d, 7.5]].forEach(function (e) {
  board.create('text', [10.4, e[2], function () { return e[0] + ' = ' + num(e[1]()); }], { fontSize: 15, anchorY: 'middle', fixed: true });
});

var P = function (fx, fy) { return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false }); };
var ab = function () { return a() + b(); };
var cd = function () { return c() + d(); };
var rect = function (x0, y0, x1, y1, col, op) {
  board.create('polygon', [P(x0, y0), P(x1, y0), P(x1, y1), P(x0, y1)], {
    fillColor: col, fillOpacity: op, fixed: true, hasInnerPoints: false,
    vertices: { visible: false }, borders: { strokeColor: '#333', strokeWidth: 1.5, fixed: true }
  });
};
rect(0, 0, a, c, '#397b96', 0.5);
rect(a, 0, ab, c, '#9A6B2F', 0.5);
rect(0, c, a, cd, '#9A6B2F', 0.35);
rect(a, c, ab, cd, '#bb0a21', 0.55);
var t = function (fx, fy, s) {
  board.create('text', [fx, fy, s], { anchorX: 'middle', anchorY: 'middle', fontSize: 16, fixed: true });
};
t(function () { return a() / 2; }, function () { return c() / 2; }, 'a·c');
t(function () { return a() + b() / 2; }, function () { return c() / 2; }, 'b·c');
t(function () { return a() / 2; }, function () { return c() + d() / 2; }, 'a·d');
t(function () { return a() + b() / 2; }, function () { return c() + d() / 2; }, 'b·d');
t(function () { return a() / 2; }, -0.6, 'a');
t(function () { return a() + b() / 2; }, -0.6, 'b');
t(-0.6, function () { return c() / 2; }, 'c');
t(-0.6, function () { return c() + d() / 2; }, 'd');

board.create('text', [10.4, 5.6, function () {
  return '(a + b)(c + d) = ' + num(ab()) + ' · ' + num(cd()) + ' = ' + num(ab() * cd());
}], { fontSize: 16, fixed: true });
board.create('text', [10.4, 4.4, 'ac + bc + ad + bd'], { fontSize: 16, fixed: true });
board.create('text', [10.4, 3.5, function () {
  return '= ' + num(a() * c()) + ' + ' + num(b() * c()) + ' + ' + num(a() * d()) + ' + ' + num(b() * d());
}], { fontSize: 16, fixed: true });
board.create('text', [10.4, 2.6, function () {
  return '= ' + num(a() * c() + b() * c() + a() * d() + b() * d());
}], { fontSize: 16, fixed: true });
board.create('text', [10.4, 1.2, 'Die rote Ecke b·d nicht vergessen!'], { fontSize: 15, fixed: true, strokeColor: '#bb0a21' });
```

:::

:::multievent

Ein Grundstück ist $a$ m breit und $b$ m tief. Es wird im Osten um $2$ m und im Norden um $3$ m vergrößert.

Neue Fläche als Produkt: $(a + 2)(b + 3)$

Neue Fläche als Summe: $ab +$ {z{3}} $a +$ {z{2}} $b +$ {z{6}}

Prüfe mit $a = 24$ und $b = 16$: Es muss {z{494}} herauskommen.

{b{Die vier Teilflächen sind: a · b (alt), a · 3 (Nordstreifen), 2 · b (Oststreifen) und 2 · 3 (Ecke). Mit Zahlen: 384 + 72 + 32 + 6 = 494.}}

:::

:::snippet{#merken}

**Zwei Klammern multiplizieren**

Man multipliziert zwei Summen, indem man **jedes Glied der ersten Klammer mit jedem Glied der zweiten Klammer** multipliziert und die Produkte addiert.

$$(a + b)(c + d) = ac + ad + bc + bd$$

Jedes Produkt entspricht einer Teilfläche des Rechtecks.

:::

## Ganz ohne Zahlen

:::snippet{#aufgabe}

**1** Multipliziere aus. Stell dir dabei das Rechteck mit vier Teilflächen vor.

:::

:::multievent

$(x + 7)(y + 4) = xy +$ {z{4}} $x +$ {z{7}} $y +$ {z{28}}

$(x + 3)(x + 5) = x^2 +$ {z{5}} $x +$ {z{3}} $x +$ {z{15}} $= x^2 +$ {z{8}} $x + 15$

$(2a + 1)(a + 4) =$ {z{2}} $a^2 +$ {z{9}} $a +$ {z{4}}

{b{Bei (x + 3)(x + 5) sind zwei Teilflächen gleichartig: 5x und 3x. Sie werden zu 8x zusammengefasst. Bei (2a + 1)(a + 4): 2a² + 8a + a + 4 = 2a² + 9a + 4.}}

:::
