---
name: ✏️ e-Funktionen vergleichen
index: 4
lang: de
---

# ✏️ e-Funktionen vergleichen

## Aufgabe 1

:::collapsible{title="Videoerklärung" id="683733"}

::youtube{#X2pTYWeXZ1k}

:::

Ordne den Funktionensgleichungen den passenden Graphen zu.

:::multievent

1) {A{!f|g|h|i}}$(x) = e^{2 \cdot x}$

2) {A{f|!g|h|i}}$(x) = e^{x + 1}$

3) {A{f|g|h|!i}}$(x) = -e^{x} + 1$

4) {A{f|g|!h|i}}$(x) = e^{x} + 1$


:::

:::jsxgraph{height="600" width="600" boundingbox="[-2,15,4,-10]"}
```js
function f(x) {
    return Math.exp(2 * x);
}

board.create('functiongraph', [f], {
    name: 'f',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#ff0000',
    strokeWidth: 2
});

function g(x) {
    return Math.exp(x + 1);
}

board.create('functiongraph', [g], {
    name: 'g',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#00aaaa',
    strokeWidth: 2
});

function h(x) {
    return Math.exp(x) + 1;
}

board.create('functiongraph', [h], {
    name: 'h',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#00ff00',
    strokeWidth: 2
});

function i(x) {
    return -Math.exp(x) + 1;
}

board.create('functiongraph', [i], {
    name: 'i',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#0000ff',
    strokeWidth: 2
});
```
:::

