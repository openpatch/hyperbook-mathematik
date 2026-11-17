---
name: Der gemeinsame Faktor
index: 1
lang: de
permaid: mittelstufe-terme-ausklammern-gemeinsamer-faktor
---

# Der gemeinsame Faktor

:::alert{info}

**Darum geht's:** Du wendest das Distributivgesetz von rechts nach links an. Mit zwei gleich hohen Rechtecken findest du den gemeinsamen Faktor und schreibst eine Summe als Produkt.

:::

## Wie hieß die Aufgabe?

Susanne hat Klammern aufgelöst. Leider hat sie nur ihre Ergebnisse aufgeschrieben. Finde eine passende Aufgabe mit Klammer.

:::multievent

| Ergebnis | Aufgabe |
| --- | --- |
| $8a + 12b$ | {A{8(a + 12b)|!4(2a + 3b)|12(8a + b)}} |
| $4x + ax$ | {A{4(x + a)|!x(4 + a)|4a(x + x)}} |
| $7u - 7$ | {A{7u(1 − 7)|!7(u − 1)|7(u − 7)}} |
| $3p^2q + 6pq$ | {A{3p(pq + 6q)|!3pq(p + 2)|3pq(p + 6)}} |

{b{Prüfe jede Möglichkeit, indem du die Klammer auflöst. Zum Beispiel: 3pq(p + 2) = 3p²q + 6pq.}}

:::

:::snippet{#merken}

**Auflösen und Ausklammern**

$$\underbrace{a \cdot (b + c)}_{\text{Produkt}} \;\; \overset{\text{auflösen}}{\underset{\text{ausklammern}}{\rightleftarrows}} \;\; \underbrace{a \cdot b + a \cdot c}_{\text{Summe}}$$

Beim **Ausklammern** sucht man einen Faktor, der in **allen** Gliedern steckt, und schreibt ihn vor die Klammer. Weil dabei ein Produkt entsteht, sagt man auch **Faktorisieren**.

:::

## Zwei Rechtecke, eine Höhe

Zwei Rechtecke mit den Flächen $20x$ und $12xy$ sollen gleich hoch sein und zu einem großen Rechteck zusammengelegt werden. Wähle mit dem Regler eine gemeinsame Höhe. Die Breiten ergeben sich daraus.

:::jsxgraph{height="440" width="720" boundingbox="[-2.2,9.6,17,-2.2]" axis=false grid=false}

```js
var opts = [
  { h: '1', b1: '20x', b2: '12xy', H: 1.2, W1: 7.5, W2: 6.2, rest: true },
  { h: '2', b1: '10x', b2: '6xy', H: 2.0, W1: 5.6, W2: 4.6, rest: true },
  { h: 'x', b1: '20', b2: '12y', H: 2.8, W1: 5.2, W2: 4.2, rest: true },
  { h: '4', b1: '5x', b2: '3xy', H: 3.6, W1: 4.4, W2: 3.6, rest: true },
  { h: '2x', b1: '10', b2: '6y', H: 4.4, W1: 4.0, W2: 3.2, rest: true },
  { h: '4x', b1: '5', b2: '3y', H: 5.6, W1: 3.4, W2: 2.6, rest: false }
];
var S = board.create('slider', [[0, 9], [5, 9], [0, 0, 5]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var o = function () { return opts[Math.round(S.Value())]; };
board.create('text', [5.5, 9, function () { return 'Höhe: ' + o().h; }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });

var P = function (fx, fy) { return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false }); };
var x0 = 0;
var H = function () { return o().H; };
var X1 = function () { return x0 + o().W1; };
var X2 = function () { return X1() + o().W2; };
var poly = function (a, b, col) {
  board.create('polygon', [P(a, 0), P(b, 0), P(b, H), P(a, H)], {
    fillColor: col, fillOpacity: 0.5, fixed: true, hasInnerPoints: false,
    vertices: { visible: false }, borders: { strokeColor: '#333', strokeWidth: 1.5, fixed: true }
  });
};
poly(x0, X1, '#397b96');
poly(X1, X2, '#9A6B2F');
var t = function (fx, fy, s, opt) {
  board.create('text', [fx, fy, s], Object.assign({ anchorX: 'middle', anchorY: 'middle', fontSize: 16, fixed: true }, opt || {}));
};
t(function () { return (x0 + X1()) / 2; }, function () { return H() / 2; }, '20x');
t(function () { return (X1() + X2()) / 2; }, function () { return H() / 2; }, '12xy');
t(function () { return (x0 + X1()) / 2; }, -0.6, function () { return o().b1; }, { strokeColor: '#397b96' });
t(function () { return (X1() + X2()) / 2; }, -0.6, function () { return o().b2; }, { strokeColor: '#9A6B2F' });
t(-0.9, function () { return H() / 2; }, function () { return o().h; });

board.create('text', [0, -1.6, function () {
  return '20x + 12xy = ' + o().h + ' · (' + o().b1 + ' + ' + o().b2 + ')';
}], { fontSize: 19, fixed: true });
board.create('text', [0, 7.9, function () {
  return o().rest ? 'In der Klammer steckt noch ein gemeinsamer Faktor.' : 'Fertig: In der Klammer ist kein gemeinsamer Faktor mehr.';
}], { fontSize: 15, fixed: true, strokeColor: function () { return o().rest ? '#bb0a21' : '#2e7d32'; } });
```

:::

:::multievent

Jede Einstellung liefert eine richtige Umformung. Die „beste“ Höhe ist {z{4}} $x$, denn dann {A{ist das Rechteck am breitesten|!haben die Breiten in der Klammer keinen gemeinsamen Faktor mehr|ist die Höhe eine ganze Zahl}}.

$20x + 12xy =$ {z{4}} $x \cdot ($ {z{5}} $+$ {z{3}} $y)$

:::

:::snippet{#beispiel}

**Schrittweise oder in einem Schritt**

$$
\begin{aligned}
20x + 12xy &= 4x \cdot 5 + 4x \cdot 3y \\
&= 4x(5 + 3y)
\end{aligned}
$$

Auch $2(10x + 6xy)$ und $x(20 + 12y)$ sind richtig, aber noch **nicht fertig**: In der Klammer steckt noch ein gemeinsamer Faktor.

:::

## So gehst du vor

:::snippet{#merken}

**Ausklammern in vier Schritten**

1. **Zerlegen:** Schreibe jedes Glied als Produkt. $\quad 12ab^2 + 18a^2b = 6ab \cdot 2b + 6ab \cdot 3a$
2. **Markieren:** Welche Faktoren stecken in **allen** Gliedern? Bei den Zahlen ist es der größte gemeinsame Teiler, bei den Variablen die kleinste Potenz. $\quad 6, \; a, \; b$
3. **Ausklammern:** Der gemeinsame Faktor kommt vor die Klammer. In die Klammer kommt, was von jedem Glied übrig bleibt. $\quad 6ab(2b + 3a)$
4. **Probe:** Klammer wieder auflösen und vergleichen.

:::

:::alert{warn}

**Die vergessene 1:** Wird ein ganzes Glied ausgeklammert, bleibt eine $1$ stehen.

$6ab + 3a = 3a \cdot 2b + 3a \cdot 1 = 3a(2b + 1)$ $\quad$ und nicht $3a(2b)$.

:::

## Zahlen ausklammern

:::snippet{#aufgabe}

**1** Klammere die größte gemeinsame Zahl aus.

:::

:::multievent

| | |
| --- | --- |
| $5a + 5b =$ {z{5}} $(a + b)$ | $13r + 26s =$ {z{13}} $(r +$ {z{2}} $s)$ |
| $11x - 11y =$ {z{11}} $(x - y)$ | $14x + 7yz = 7($ {z{2}} $x + yz)$ |
| $9 - 9x = 9($ {z{1}} $- x)$ | $25a - 15b =$ {z{5}} $($ {z{5}} $a - 3b)$ |
| $12x + 18 =$ {z{6}} $($ {z{2}} $x + 3)$ | $6rs + 2t^2 = 2($ {z{3}} $rs + t^2)$ |

{b{Bei 9 − 9x bleibt eine 1 stehen, weil 9 = 9 · 1. Probe: 9(1 − x) = 9 − 9x.}}

:::

## Variablen ausklammern

:::snippet{#aufgabe}

**2** Klammere eine Variable aus.

:::

:::multievent

| Term | ausgeklammert |
| --- | --- |
| $4b + ab$ | {A{!b(4 + a)|a(4b + b)|4b(1 + a)}} |
| $xy - xz$ | {A{y(x − z)|!x(y − z)|xy(1 − z)}} |
| $t + t^2$ | {A{t(t + t)|t²(1 + t)|!t(1 + t)}} |
| $r^2 - r$ | {A{!r(r − 1)|r(r − 0)|r²(1 − r)}} |
| $x^2 - 2xy$ | {A{x²(1 − 2y)|!x(x − 2y)|2x(x − y)}} |

:::

## Zahl und Variable

:::snippet{#aufgabe}

**3** Klammere so viel wie möglich aus.

:::

:::multievent

| | |
| --- | --- |
| $3x + 2xy = x($ {z{3}} $+$ {z{2}} $y)$ | $7ab^2 + 2ac = a($ {z{7}} $b^2 + 2c)$ |
| $24x + 12y =$ {z{12}} $($ {z{2}} $x + y)$ | $2xy + 6xz =$ {z{2}} $x(y +$ {z{3}} $z)$ |
| $77ab - 7bc =$ {z{7}} $b($ {z{11}} $a - c)$ | $8ab - 16c^2 =$ {z{8}} $(ab -$ {z{2}} $c^2)$ |

:::
