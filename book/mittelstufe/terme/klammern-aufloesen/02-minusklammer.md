---
name: Minuszeichen vor der Klammer
index: 2
lang: de
permaid: mittelstufe-terme-klammern-minusklammer
---

# Minuszeichen vor der Klammer

:::alert{info}

**Darum geht's:** Du löst Klammern auf, vor denen ein Minuszeichen steht. Du erkennst, warum sich dabei jedes Vorzeichen in der Klammer umdreht, und prüfst deine Ergebnisse durch Einsetzen.

:::

## Was bleibt vom Guthaben?

Herr Oms hat ein Guthaben von $200$ € und kauft davon ein Sweatshirt für $x$ €. Weil er früh bestellt, bekommt er einen Rabatt von $h$ €.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 260" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Balken für das Guthaben 200 Euro. Der Preis x wird abgezogen, der Rabatt h kommt wieder dazu. Der Rest ist 200 minus x plus h.">
<g font-size="15" fill="currentColor">
<rect x="20" y="20" width="600" height="40" fill="#397b96" fill-opacity="0.35" stroke="currentColor"/>
<text x="320" y="46" text-anchor="middle">Guthaben 200 €</text>
<rect x="320" y="70" width="300" height="40" fill="#bb0a21" fill-opacity="0.35" stroke="currentColor"/>
<text x="470" y="96" text-anchor="middle">Preis x</text>
<rect x="320" y="120" width="90" height="40" fill="#2e7d32" fill-opacity="0.35" stroke="currentColor"/>
<text x="365" y="146" text-anchor="middle">Rabatt h</text>
<text x="520" y="146" text-anchor="middle">bezahlt: x − h</text>
<rect x="20" y="170" width="390" height="40" fill="#9A6B2F" fill-opacity="0.35" stroke="currentColor"/>
<text x="215" y="196" text-anchor="middle">Rest</text>
<text x="215" y="240" text-anchor="middle">Rest: 200 − (x − h) = 200 − x + h</text>
</g>
<line x1="410" y1="120" x2="410" y2="210" stroke="currentColor" stroke-dasharray="4 3"/>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Er zahlt nur x − h. Zieht man x ganz ab, muss der Rabatt h wieder dazukommen.</figcaption>
</figure>

:::multievent

Mit $x = 60$ und $h = 15$: Er bezahlt $x - h =$ {z{45}} €. Es bleiben {z{155}} €.

$200 - (x - h) =$ {z{155}} und $200 - x + h =$ {z{155}}. Aber $200 - x - h =$ {z{125}}.

Wird die Klammer $(x - h)$ abgezogen, so wird $h$ {A{auch abgezogen|!addiert}}.

:::

## Minus heißt mal $(-1)$

Ein Minuszeichen direkt vor einer Klammer bedeutet: Bilde die **Gegenzahl** der Klammer. Das ist dasselbe wie Multiplizieren mit $-1$. Nach dem Distributivgesetz wird **jedes Glied** mit $-1$ multipliziert:

$$-(3x - 2y) = (-1) \cdot 3x + (-1) \cdot (-2y) = -3x + 2y$$

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 520 130" width="520" style="max-width:100%;height:auto;" role="img" aria-label="Jedes Vorzeichen in der Klammer wird umgedreht: aus plus 3x wird minus 3x, aus minus 2y wird plus 2y.">
<g font-size="24" text-anchor="middle" fill="currentColor">
<text x="40" y="40">−(</text>
<rect x="70" y="12" width="70" height="40" rx="8" fill="#397b96" fill-opacity="0.3"/><text x="105" y="40">+3x</text>
<rect x="160" y="12" width="70" height="40" rx="8" fill="#9A6B2F" fill-opacity="0.3"/><text x="195" y="40">−2y</text>
<text x="250" y="40">)</text>
<rect x="70" y="80" width="70" height="40" rx="8" fill="#397b96" fill-opacity="0.3"/><text x="105" y="108">−3x</text>
<rect x="160" y="80" width="70" height="40" rx="8" fill="#9A6B2F" fill-opacity="0.3"/><text x="195" y="108">+2y</text>
</g>
<g stroke="currentColor" stroke-width="1.5"><line x1="105" y1="54" x2="105" y2="78"/><line x1="195" y1="54" x2="195" y2="78"/></g>
<g font-size="16" fill="currentColor"><text x="280" y="70">jedes Vorzeichen</text><text x="280" y="92">wird umgedreht</text></g>
</svg>
</figure>

:::snippet{#merken}

**Minusklammer auflösen**

1. **Minus direkt vor der Klammer:** Die Klammer fällt weg, **jedes** Vorzeichen in der Klammer dreht sich um.
   $\quad -(3x - 2y) = -3x + 2y$
2. **Eine Klammer wird subtrahiert:** Erst den Faktor in die Klammer multiplizieren, dann die Minusklammer auflösen.
   $\quad 7x - 4(2x - 5y) = 7x - (8x - 20y) = 7x - 8x + 20y = -x + 20y$

:::

:::alert{warn}

**Häufiger Fehler:** Nur das erste Glied umdrehen. $\; -(2x - 5) = -2x - 5$ ist **falsch**. Richtig ist $-2x + 5$.

:::

## Prüfen durch Einsetzen

Lena hat $5x - (2x - 4)$ vereinfacht. Drei Ergebnisse stehen zur Auswahl. Stelle $x$ ein und vergleiche die Werte.

:::jsxgraph{height="340" width="720" boundingbox="[-0.5,7.6,17,-0.6]" axis=false grid=false}

```js
var X = board.create('slider', [[1, 7], [6, 7], [-3, 2, 5]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var x = function () { return Math.round(X.Value()); };
board.create('text', [6.5, 7, function () { return 'x = ' + x(); }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });
var ref = function () { return 5 * x() - (2 * x() - 4); };
var rows = [
  ['5x − (2x − 4)', ref],
  ['A:  3x − 4', function () { return 3 * x() - 4; }],
  ['B:  3x + 4', function () { return 3 * x() + 4; }],
  ['C:  7x − 4', function () { return 7 * x() - 4; }]
];
var base = 11, sc = 0.17;
board.create('segment', [[base, 0], [base, 5.6]], { strokeColor: '#666', fixed: true });
rows.forEach(function (r, i) {
  var y = 5 - i * 1.3;
  board.create('text', [0, y, r[0]], { fontSize: 18, anchorY: 'middle', fixed: true });
  board.create('text', [5.0, y, function () { return '= ' + r[1](); }], { fontSize: 18, anchorY: 'middle', fixed: true });
  var col = function () {
    if (i === 0) { return '#397b96'; }
    return r[1]() === ref() ? '#2e7d32' : '#bb0a21';
  };
  board.create('polygon', [
    [base, y - 0.35],
    [function () { return base + r[1]() * sc; }, y - 0.35],
    [function () { return base + r[1]() * sc; }, y + 0.35],
    [base, y + 0.35]
  ], { fillColor: col, fillOpacity: 0.6, fixed: true, hasInnerPoints: false, vertices: { visible: false }, borders: { strokeWidth: 0 } });
});
```

:::

:::multievent

Bei welchem $x$ stimmen **alle drei** Ergebnisse mit dem Ausgangsterm überein? {A{bei x = 0|!bei keinem x|bei x = 2}}

Richtig ist Ergebnis {A{A|!B|C}}. Es stimmt für {A{nur einige x|!jedes x}}.

{b{5x − (2x − 4) = 5x − 2x + 4 = 3x + 4. Ergebnis A hat das Vorzeichen der 4 nicht umgedreht. Ergebnis C hat 2x addiert statt subtrahiert.}}

:::

## Minusklammern auflösen

:::snippet{#aufgabe}

**1** Löse die Minusklammer auf.

:::

:::multievent

| | |
| --- | --- |
| $-(a + b) =$ {z{-1}} $a$ $+$ ( {z{-1}} ) $b$ | $-(4x + y) =$ {z{-4}} $x$ $+$ ( {z{-1}} ) $y$ |
| $-(-u - 7v) =$ {z{1}} $u +$ {z{7}} $v$ | $-(-2x + y) =$ {z{2}} $x$ $+$ ( {z{-1}} ) $y$ |
| $-(3a - 7b) =$ {z{-3}} $a +$ {z{7}} $b$ | $-(4x - 9) =$ {z{-4}} $x +$ {z{9}} |

:::

:::snippet{#aufgabe}

**2** Vereinfache so weit wie möglich.

:::

:::multievent

| | |
| --- | --- |
| $5x - (2x - 4) =$ {z{3}} $x +$ {z{4}} | $12a - (3a + 5) =$ {z{9}} $a -$ {z{5}} |
| $7x - 4(2x - 5y) =$ {z{-1}} $x +$ {z{20}} $y$ | $3a - 5(2b - a) + 3(-5b)$ $=$ {z{8}} $a$ $+$ ( {z{-25}} ) $b$ |
| $(4x + 3) - (x - 2) =$ {z{3}} $x +$ {z{5}} | $-(-(5a - 3)) =$ {z{5}} $a -$ {z{3}} |

{b{3a − 5(2b − a) + 3(−5b) = 3a − 10b + 5a − 15b = 8a − 25b. Bei −(−(5a − 3)) wird zweimal die Gegenzahl gebildet. Das ergibt wieder 5a − 3.}}

:::

:::snippet{#aufgabe}

**3** Welche Zahl gehört in die Lücke?

:::

:::multievent

$-(4x - \square) = -4x + 9 \quad \Rightarrow \quad \square =$ {z{9}}

$5(x + \square) = 5x + 20 \quad \Rightarrow \quad \square =$ {z{4}}

$-2(\square - 3y) = -12x + 6y \quad \Rightarrow \quad \square =$ {z{6}} $x$

:::
