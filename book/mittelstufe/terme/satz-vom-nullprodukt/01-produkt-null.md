---
name: Wann ist ein Produkt null?
index: 1
lang: de
permaid: mittelstufe-terme-nullprodukt-produkt-null
---

# Wann ist ein Produkt null?

:::alert{info}

**Darum geht's:** Du entdeckst, dass ein Produkt genau dann null ist, wenn einer der Faktoren null ist. Damit löst du Gleichungen der Form $(x - a)(x - b) = 0$ ohne auszumultiplizieren.

:::

## Welche Kärtchen passen?

Unter den Kärtchen sind die Lösungen der Gleichungen versteckt. Findest du sie, **ohne** auszumultiplizieren?

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 600 80" width="600" style="max-width:100%;height:auto;" role="img" aria-label="Neun Kärtchen mit den Zahlen minus 1, 3, 1, 2, 7, minus 7, minus 3, 15 und 6">
<g font-size="20" text-anchor="middle" fill="currentColor">
<rect x="10" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="38" y="47">−1</text>
<rect x="75" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="103" y="47">3</text>
<rect x="140" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="168" y="47">1</text>
<rect x="205" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="233" y="47">2</text>
<rect x="270" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="298" y="47">7</text>
<rect x="335" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="363" y="47">−7</text>
<rect x="400" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="428" y="47">−3</text>
<rect x="465" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="493" y="47">15</text>
<rect x="530" y="15" width="56" height="50" rx="6" fill="#397b96" fill-opacity="0.2" stroke="currentColor"/><text x="558" y="47">6</text>
</g>
</svg>
</figure>

:::multievent

| Gleichung | kleinere Lösung | größere Lösung |
| --- | :---: | :---: |
| $(x + 1)(x - 3) = 0$ | {z{-1}} | {z{3}} |
| $(x - 2)(x - 7) = 0$ | {z{2}} | {z{7}} |
| $(2x + 6)(x - 15) = 0$ | {z{-3}} | {z{15}} |

{b{Setze die Zahl ein: Bei x = 3 wird die zweite Klammer x − 3 = 0. Dann ist das ganze Produkt null, egal wie groß die erste Klammer ist. Bei 2x + 6 = 0 ist x = −3.}}

:::

## Die Faktoren beobachten

Stelle $x$ ein. Die Balken zeigen die Werte der beiden Faktoren $x - 4$ und $x + 1$ und ihr Produkt.

:::jsxgraph{height="440" width="720" boundingbox="[-1,10.4,17,-1.4]" axis=false grid=false}

```js
var num = function (v) { return String(Math.round(v * 100) / 100).replace('.', ','); };
var X = board.create('slider', [[1, 9.8], [9, 9.8], [-4, 2, 7]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var x = function () { return Math.round(X.Value() * 2) / 2; };
board.create('text', [9.5, 9.8, function () { return 'x = ' + num(x()); }], { fontSize: 18, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });

var f1 = function () { return x() - 4; };
var f2 = function () { return x() + 1; };
var pr = function () { return f1() * f2(); };
var base = 8, sc = 0.25;
board.create('segment', [[base, 1.2], [base, 8.6]], { strokeColor: '#666', fixed: true });
board.create('text', [base, 0.8, '0'], { anchorX: 'middle', fontSize: 13, fixed: true });
var bar = function (y, f, col, label) {
  board.create('text', [0, y, label], { fontSize: 18, anchorY: 'middle', fixed: true });
  board.create('text', [4.3, y, function () { return '= ' + num(f()); }], {
    fontSize: 18, anchorY: 'middle', fixed: true,
    strokeColor: function () { return f() === 0 ? '#2e7d32' : '#333'; }
  });
  board.create('polygon', [
    [base, y - 0.4], [function () { return base + Math.max(-7.5, Math.min(8.5, f() * sc)); }, y - 0.4],
    [function () { return base + Math.max(-7.5, Math.min(8.5, f() * sc)); }, y + 0.4], [base, y + 0.4]
  ], { fillColor: col, fillOpacity: 0.6, fixed: true, hasInnerPoints: false, vertices: { visible: false }, borders: { strokeWidth: 0 } });
};
bar(7.6, f1, '#397b96', 'x − 4');
bar(6.2, f2, '#9A6B2F', 'x + 1');
bar(4.4, pr, '#bb0a21', '(x − 4)(x + 1)');
board.create('text', [0, 2.6, function () {
  if (pr() === 0) { return 'Ein Faktor ist 0, also ist das Produkt 0.'; }
  return 'Kein Faktor ist 0, also ist das Produkt nicht 0.';
}], { fontSize: 16, fixed: true, strokeColor: function () { return pr() === 0 ? '#2e7d32' : '#bb0a21'; } });
```

:::

:::multievent

Das Produkt ist null für $x =$ {z{-1}} und für $x =$ {z{4}}.

Bei $x = 4$ ist der Faktor {A{!x − 4|x + 1}} gleich null.

Gibt es ein $x$, bei dem das Produkt null ist, aber kein Faktor null ist? {A{ja|!nein}}

:::

:::snippet{#merken}

**Satz vom Nullprodukt**

Ein Produkt ist null, wenn **mindestens einer** der Faktoren null ist – sonst nicht.

Für die Gleichung $(x - 4)(x + 1) = 0$ heißt das:

$$
\begin{aligned}
x - 4 = 0 \quad &\text{oder} \quad x + 1 = 0 \\
x = 4 \quad &\text{oder} \quad x = -1
\end{aligned}
$$

$$L = \{-1;\, 4\}$$

:::

:::alert{info}

**Das mathematische „oder“** ist kein „entweder … oder“. Es können auch **beide** Faktoren gleichzeitig null sein:

$(x - 3)(6 - 2x) = 0$: $\; x - 3 = 0$ oder $6 - 2x = 0$, also $x = 3$ oder $x = 3$. Damit ist $L = \{3\}$.

:::

## Warum nicht ausmultiplizieren?

Ilkan soll $(x - 5)(x + 3) = 0$ lösen. Er multipliziert aus:

$$x^2 - 5x + 3x - 15 = 0 \quad \Rightarrow \quad x^2 - 2x = 15$$

Jetzt kommt er nicht weiter: Er kann $x^2$ und $-2x$ nicht zusammenfassen und $x$ deshalb nicht allein auf eine Seite bringen.

:::multievent

Mit dem Satz vom Nullprodukt: $x =$ {z{5}} oder $x =$ {z{-3}}.

Probe mit der positiven Lösung: $(5 - 5) \cdot (5 + 3) = 0 \cdot 8 =$ {z{0}}

:::

## Lösungen bestimmen

:::snippet{#aufgabe}

**1** Bestimme die Lösungsmenge. Trage die Lösungen der Größe nach ein.

:::

:::multievent

| Gleichung | $x_1$ | $x_2$ |
| --- | :---: | :---: |
| $(x - 4)(x - 9) = 0$ | {z{4}} | {z{9}} |
| $(x + 1)(x - 8) = 0$ | {z{-1}} | {z{8}} |
| $x(x - 10) = 0$ | {z{0}} | {z{10}} |
| $(x + 4)(2 - x) = 0$ | {z{-4}} | {z{2}} |
| $(x - 6)(x + 2) = 0$ | {z{-2}} | {z{6}} |
| $3x(x - 5) = 0$ | {z{0}} | {z{5}} |
| $(2x - 3)(x + 4) = 0$ | {z{-4}} | {z{1,5}} |

{b{Setze jeden Faktor einzeln null. Bei x(x − 10) ist der erste Faktor x selbst: x = 0. Bei 2x − 3 = 0 ist 2x = 3, also x = 1,5.}}

:::

:::snippet{#aufgabe}

**2** Rückwärts: Baue eine Gleichung mit der gegebenen Lösungsmenge.

:::

:::multievent

$L = \{2;\, 5\}$: $\quad (x -$ {z{2}} $)(x -$ {z{5}} $) = 0$

$L = \{-1;\, 4\}$: $\quad (x +$ {z{1}} $)(x -$ {z{4}} $) = 0$

$L = \{0;\, 7\}$: $\quad x \cdot (x -$ {z{7}} $) = 0$

:::
