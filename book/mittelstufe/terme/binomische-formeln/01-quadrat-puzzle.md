---
name: Das Quadrat-Puzzle
index: 1
lang: de
---

# Das Quadrat-Puzzle: Was ist $(a + b)^2$?

:::alert{info}

**Darum geht's:** Du findest mit einem Quadrat aus vier Teilen heraus, was $(a + b)^2$ ergibt – und warum $a^2 + b^2$ nicht reicht.

:::

## Schritt 1: Das Beet wird größer

Ein quadratisches Beet hat eine Seitenlänge von $3$ m. Es wird an zwei Seiten um je $2$ m verlängert. Es bleibt also ein Quadrat.

:::multievent

Die neue Seitenlänge ist {z{5}} m. Die neue Fläche ist $(3 + 2)^2 =$ {z{25}} m².

Tim rechnet: $3^2 + 2^2 = 9 + 4 = 13$. Hat Tim recht? {A{ja|!nein}}

Tim fehlen {z{12}} m².

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 300 300" width="300" style="max-width:100%;height:auto;" role="img" aria-label="Quadrat mit Seite 3 plus 2, aufgeteilt in ein Quadrat 3 mal 3, zwei Rechtecke 3 mal 2 und ein Quadrat 2 mal 2">
<rect x="40" y="20" width="150" height="150" fill="#397b96" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<rect x="190" y="20" width="100" height="150" fill="#9A6B2F" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<rect x="40" y="170" width="150" height="100" fill="#9A6B2F" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<rect x="190" y="170" width="100" height="100" fill="#bb0a21" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<g font-size="20" text-anchor="middle" fill="currentColor">
<text x="115" y="102">9 m²</text>
<text x="240" y="102">6 m²</text>
<text x="115" y="227">6 m²</text>
<text x="240" y="227">4 m²</text>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="115" y="292">3 m</text><text x="240" y="292">2 m</text>
<text x="20" y="100">3 m</text><text x="20" y="225">2 m</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Tim hat nur die beiden Quadrate gezählt. Die zwei braunen Rechtecke hat er vergessen.</figcaption>
</figure>

## Schritt 2: Ausprobieren

Stelle die Längen $a$ und $b$ mit den Schiebereglern ein. Das große Quadrat hat die Seitenlänge $a + b$. Es besteht immer aus **vier Teilen**.

:::jsxgraph{height="450" width="720" boundingbox="[-1.5,11,18.5,-1.5]" axis=false grid=false}

```js
var num = function (x) {
  var r = Math.round(x * 100) / 100;
  return String(r).replace('.', ',');
};
var av = function () { return Math.round(A.Value() * 2) / 2; };
var bv = function () { return Math.round(B.Value() * 2) / 2; };

var A = board.create('slider', [[11, 9.8], [17, 9.8], [1, 3, 5]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var B = board.create('slider', [[11, 8.3], [17, 8.3], [0.5, 2, 4]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#bb0a21', fillColor: '#bb0a21', highline: { strokeColor: '#bb0a21' }
});
board.create('text', [9.6, 9.8, function () { return 'a = ' + num(av()); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96'
});
board.create('text', [9.6, 8.3, function () { return 'b = ' + num(bv()); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#bb0a21'
});

var P = function (fx, fy) {
  return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false });
};
var a = function () { return av(); };
var ab = function () { return av() + bv(); };
var rect = function (x0, y0, x1, y1, color) {
  return board.create('polygon', [P(x0, y0), P(x1, y0), P(x1, y1), P(x0, y1)], {
    fillColor: color, fillOpacity: 0.55, fixed: true, hasInnerPoints: false,
    vertices: { visible: false },
    borders: { strokeColor: '#333', strokeWidth: 1.5, fixed: true }
  });
};

// Quadrat (a + b)² in vier Teilen
rect(0, 0, a, a, '#397b96');
rect(a, 0, ab, a, '#9A6B2F');
rect(0, a, a, ab, '#9A6B2F');
rect(a, a, ab, ab, '#bb0a21');

var label = function (fx, fy, txt) {
  board.create('text', [fx, fy, txt], { anchorX: 'middle', anchorY: 'middle', fontSize: 16, fixed: true });
};
label(function () { return av() / 2; }, function () { return av() / 2; }, 'a²');
label(function () { return av() + bv() / 2; }, function () { return av() / 2; }, 'a·b');
label(function () { return av() / 2; }, function () { return av() + bv() / 2; }, 'a·b');
label(function () { return av() + bv() / 2; }, function () { return av() + bv() / 2; }, 'b²');
label(function () { return av() / 2; }, -0.6, 'a');
label(function () { return av() + bv() / 2; }, -0.6, 'b');
label(-0.6, function () { return av() / 2; }, 'a');
label(-0.6, function () { return av() + bv() / 2; }, 'b');

var A2 = function () { return av() * av(); };
var AB = function () { return av() * bv(); };
var B2 = function () { return bv() * bv(); };

board.create('text', [9.6, 6, function () {
  return '(a + b)² = ' + num(ab()) + '² = ' + num(ab() * ab());
}], { fontSize: 19, fixed: true });
board.create('text', [9.6, 4.6, function () {
  return 'a² + a·b + a·b + b²';
}], { fontSize: 19, fixed: true });
board.create('text', [9.6, 3.6, function () {
  return '= ' + num(A2()) + ' + ' + num(AB()) + ' + ' + num(AB()) + ' + ' + num(B2()) + ' = ' + num(A2() + 2 * AB() + B2());
}], { fontSize: 19, fixed: true });
board.create('text', [9.6, 1.6, function () {
  return 'Nur a² + b² = ' + num(A2() + B2());
}], { fontSize: 17, fixed: true, strokeColor: '#bb0a21' });
board.create('text', [9.6, 0.7, function () {
  return 'Da fehlen 2·a·b = ' + num(2 * AB()) + '.';
}], { fontSize: 17, fixed: true, strokeColor: '#bb0a21' });
```

:::

:::multievent

Stelle $a = 4$ und $b = 1$ ein. Dann ist $a^2 =$ {z{16}}, $a \cdot b =$ {z{4}} und $b^2 =$ {z{1}}.

Zusammen: $(4 + 1)^2 =$ {z{25}}

Das Rechteck $a \cdot b$ kommt im Quadrat {z{2}}-mal vor.

:::

## Schritt 3: Die Formel

Die Fläche des großen Quadrats kannst du auf zwei Arten aufschreiben:

- als **ein** Quadrat mit der Seite $a + b$: $\quad (a + b)^2$
- als Summe der **vier** Teile: $\quad a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$

Beides ist dieselbe Fläche. Also gilt:

:::snippet{#merken}

**Erste binomische Formel**

$$(a + b)^2 = a^2 + 2ab + b^2$$

Das Glied $2ab$ in der Mitte heißt **Mittelglied**. Es steht für die zwei Rechtecke.

:::

:::alert{warn}

**Achtung, häufiger Fehler!**

$(a + b)^2$ ist **nicht** $a^2 + b^2$. Das Mittelglied $2ab$ darf nie fehlen.

:::

:::multievent

Stimmt das?

- $(x + 5)^2 = x^2 + 25$ $\quad$ {A{stimmt|!stimmt nicht}}
- $(x + 5)^2 = x^2 + 10x + 25$ $\quad$ {A{!stimmt|stimmt nicht}}
- $(x + 1)^2 = x^2 + x + 1$ $\quad$ {A{stimmt|!stimmt nicht}}

{b{Das Mittelglied ist 2 · x · 1 = 2x. Richtig ist (x + 1)² = x² + 2x + 1.}}

:::

::::collapsible{title="Woher kommt der Name?" id="bf-name"}

Ein **Binom** ist eine Summe oder Differenz aus zwei Gliedern, zum Beispiel $a + b$ oder $x - 3$. „Bi" heißt „zwei" – wie beim **Bi**zeps (zwei Köpfe) oder beim **Bi**ke (zwei Räder).

Die binomischen Formeln sagen dir, was herauskommt, wenn man solche Binome miteinander malnimmt.

::::

Weiter geht es mit der Seite [Die drei Formeln](/mittelstufe/terme/binomische-formeln/02-die-drei-formeln).
