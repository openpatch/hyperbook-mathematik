---
name: ✏️ e-Funktionen ableiten
index: 2
lang: de
---

# ✏️ e-Funktionen ableiten

## Aufgabe 1

Berechne die Ableitung $f'(x)$ der Funktion $f$.

a) $f(x) = 3 \cdot e^{2 \cdot x + 1}$

b) $f(x) = -e^{-x} - x$

c) $f(x) = e^x - e^2$

## Aufgabe 2

Gegeben ist die Funktion $f(x) = 4 \cdot e^{3 \cdot x - 8} - 5$.

a) Beschreibe den Verlauf der Graphen der Funktion $f$ und der Funtkion $g=f'$ im Bereich $-5 < x < 5$.

:::jsxgraph{height="500" width="600" boundingbox="[-5,20,5,-10]"}

```js
function f(x) {
    return 4 * Math.exp(3 * x - 8) - 5;
}
board.create('functiongraph', [f], {
    name: 'f',
    withLabel: true,
    label: {
        fontSize: 18,
    },
    strokeColor: '#ff0000',
    strokeWidth: 2
});
let g = JXG.Math.Numerics.D(f);
board.create('functiongraph', [g], {
    name: 'g',
    withLabel: true,
    label: {
        fontSize: 18,
    },
    strokeColor: '#00aaaa',
    strokeWidth: 2
});
```