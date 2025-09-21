---
name: 💡 Einführung
lang: de
index: 0
---

# Ebenen und Geraden

## Lagebeziehungen zwischen Ebenen und Geraden

Nachdem du Ebenen und Geraden einzeln kennengelernt hast, untersuchst du nun, wie sie zueinander im Raum liegen können.

:::jsxgraph{height="500" width="600" boundingbox="[-8,8,8,-8]" axis=false grid=false}

```js
// 3D Visualisierung für Gerade-Ebene Beziehungen
var view = board.create('view3d',
    [[-6, -3], [8, 8],
    [[-5, 5], [-5, 5], [-5, 5]]],
    {});

// Koordinatenachsen
var xAxis = view.create('line3d', [[0,0,0], [3,0,0]], {strokeColor: 'red', strokeWidth: 2});
var yAxis = view.create('line3d', [[0,0,0], [0,3,0]], {strokeColor: 'green', strokeWidth: 2});
var zAxis = view.create('line3d', [[0,0,0], [0,0,3]], {strokeColor: 'blue', strokeWidth: 2});

// Ebene
var plane = view.create('parametricsurface3d', [
    function(u, v) { return u; },
    function(u, v) { return v; },
    function(u, v) { return 2; },
    [-3, 3], [-3, 3]
], {
    strokeColor: 'lightblue',
    strokeOpacity: 0.6,
    fillColor: 'lightblue',
    fillOpacity: 0.3
});

// Gerade 1: schneidet die Ebene
var line1 = view.create('line3d', [[-2,-2,0], [2,2,4]], {strokeColor: 'red', strokeWidth: 3});
var intersection = view.create('point3d', [0,0,2], {name: 'S', size: 6, strokeColor: 'red'});

// Gerade 2: parallel zur Ebene
var line2 = view.create('line3d', [[-3,-1,3], [3,1,3]], {strokeColor: 'green', strokeWidth: 3});

// Gerade 3: liegt in der Ebene
var line3 = view.create('line3d', [[-2,-2,2], [2,2,2]], {strokeColor: 'purple', strokeWidth: 3});

// Beschriftungen
view.create('text3d', [[1,1,3], 'schneidend'], {fontSize: 12, strokeColor: 'red'});
view.create('text3d', [[1.5,0.5,3.5], 'parallel'], {fontSize: 12, strokeColor: 'green'});
view.create('text3d', [[1,1,1.5], 'in Ebene'], {fontSize: 12, strokeColor: 'purple'});
view.create('text3d', [[0,0,2.5], 'Ebene E'], {fontSize: 14, strokeColor: 'blue'});
```

:::

## Mögliche Lagebeziehungen

:::snippet{#definition}

Eine Gerade kann zu einer Ebene folgende Lagebeziehungen haben:

1. **Gerade liegt in der Ebene** (unendlich viele Schnittpunkte)
2. **Gerade schneidet die Ebene** (genau ein Schnittpunkt)  
3. **Gerade ist parallel zur Ebene** (kein Schnittpunkt)

:::

## Schnittpunkt berechnen

:::snippet{#satz}

**Algorithmus** für Gerade $g: \vec{x} = \vec{a} + t \cdot \vec{v}$ und Ebene $E: ax + by + cz = d$:

1. Geradengleichung in Ebenengleichung einsetzen
2. Nach Parameter $t$ auflösen
3. $t$ in Geradengleichung einsetzen → Schnittpunkt

:::

### Beispiel

:::snippet{#beispiel}

Gerade: $g: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\-1\\2\end{pmatrix}$

Ebene: $E: x + y + z = 6$

**Einsetzen**: $(1+t) + (2-t) + (0+2t) = 6$
**Vereinfachen**: $3 + 2t = 6 \Rightarrow t = 1{,}5$
**Schnittpunkt**: $S = \begin{pmatrix}2{,}5\\0{,}5\\3\end{pmatrix}$

:::

## Parallelität prüfen

:::snippet{#satz}

Eine Gerade ist **parallel** zur Ebene, wenn der Richtungsvektor der Geraden senkrecht zum Normalenvektor der Ebene steht:

$\vec{v} \cdot \vec{n} = 0$

:::

## Winkel zwischen Gerade und Ebene

:::snippet{#definition}

Der **Winkel** zwischen einer Geraden und einer Ebene ist der Winkel zwischen der Geraden und ihrer Projektion auf die Ebene.

$\sin(\alpha) = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{v}| \cdot |\vec{n}|}$

:::