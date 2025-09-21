---
name: 💡 Einführung
lang: de
index: 0
---

# Schnittwinkel von Geraden

## Vom Winkel zwischen Vektoren zum Schnittwinkel

Nachdem du gelernt hast, wie man den Winkel zwischen zwei Vektoren berechnet, können wir dies nun auf Geraden anwenden. Der Schnittwinkel zwischen zwei Geraden ist der Winkel zwischen ihren Richtungsvektoren.

:::jsxgraph{height="500" width="600" boundingbox="[-8,8,8,-8]" axis=false grid=false}

```js
// 3D Visualisierung für Schnittwinkel von Geraden
var view = board.create('view3d',
    [[-6, -3], [8, 8],
    [[-5, 5], [-5, 5], [-5, 5]]],
    {});

// Koordinatenachsen
var xAxis = view.create('line3d', [[0,0,0], [3,0,0]], {strokeColor: 'red', strokeWidth: 2});
var yAxis = view.create('line3d', [[0,0,0], [0,3,0]], {strokeColor: 'green', strokeWidth: 2});
var zAxis = view.create('line3d', [[0,0,0], [0,0,3]], {strokeColor: 'blue', strokeWidth: 2});

// Gerade 1: g1: x = (1,2,0) + t*(1,0,1)
var line1 = view.create('line3d', [[-1,2,-2], [3,2,2]], {strokeColor: 'blue', strokeWidth: 3});
var direction1 = view.create('line3d', [[1,2,0], [2,2,1]], {strokeColor: 'blue', strokeWidth: 4, lastArrow: true});

// Gerade 2: g2: x = (0,2,1) + s*(1,1,0)  
var line2 = view.create('line3d', [[-2,0,1], [2,4,1]], {strokeColor: 'red', strokeWidth: 3});
var direction2 = view.create('line3d', [[0,2,1], [1,3,1]], {strokeColor: 'red', strokeWidth: 4, lastArrow: true});

// Schnittpunkt
var intersection = view.create('point3d', [1,2,0], {name: 'S', size: 8, strokeColor: 'purple'});

// Winkel-Visualisierung (vereinfacht)
var angleArc = view.create('line3d', [[2,2,1], [1,3,1]], {strokeColor: 'orange', strokeWidth: 2, dash: 2});

// Beschriftungen
view.create('text3d', [[1.5,2,0.5], 'v⃗₁'], {fontSize: 14, strokeColor: 'blue'});
view.create('text3d', [[0.5,2.5,1], 'v⃗₂'], {fontSize: 14, strokeColor: 'red'});
view.create('text3d', [[1.5,2.5,0.5], 'α'], {fontSize: 14, strokeColor: 'orange'});
view.create('text3d', [[2.5,2,1], 'g₁'], {fontSize: 12, strokeColor: 'blue'});
view.create('text3d', [[1.5,3.5,1], 'g₂'], {fontSize: 12, strokeColor: 'red'});
```

:::

## Was ist ein Schnittwinkel?

:::snippet{#definition}

Der **Schnittwinkel** zwischen zwei Geraden ist der kleinere der beiden Winkel, die die Geraden beim Schneiden bilden. Dieser Winkel liegt immer zwischen 0° und 90°.

:::

## Forschungsauftrag

Betrachte die beiden Geraden:
$$ g_1: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} $$
$$ g_2: \vec{x} = \begin{pmatrix}0\\2\\1\end{pmatrix} + s \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} $$

1. Welche Richtungsvektoren haben die Geraden?

:::collapsible{title="Lösung" id="a4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{v_1} = \begin{pmatrix}1\\0\\1\end{pmatrix} $$ und $$ \vec{v_2} = \begin{pmatrix}1\\1\\0\end{pmatrix} $$

:::

2. Berechne den Winkel zwischen den Richtungsvektoren.

:::collapsible{title="Lösung" id="b4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 1 + 0 \cdot 1 + 1 \cdot 0 = 1 $$

Beträge: $$ |\vec{v_1}| = \sqrt{2} $$, $$ |\vec{v_2}| = \sqrt{2} $$

Cosinus: $$ \cos(\alpha) = \frac{1}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2} $$

Winkel: $$ \alpha = \arccos\left(\frac{1}{2}\right) = 60° $$

:::

3. Ist dieser Winkel bereits der Schnittwinkel?

:::collapsible{title="Lösung" id="c4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Ja, da 60° < 90° ist, ist dies bereits der Schnittwinkel. Wäre der berechnete Winkel größer als 90°, müsste man 180° - α rechnen.

:::

## Definition Schnittwinkel

:::snippet{#definition}

Der **Schnittwinkel** $\alpha$ zwischen zwei Geraden $g_1$ und $g_2$ mit den Richtungsvektoren $\vec{v_1}$ und $\vec{v_2}$ ist:

$$ \alpha = \arccos\left(\frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|}\right) $$

Der Betrag im Zähler sorgt dafür, dass der Winkel immer zwischen 0° und 90° liegt.

:::

## Besondere Fälle

### Parallele Geraden

:::snippet{#merken}

Zwei Geraden sind **parallel**, wenn ihre Richtungsvektoren linear abhängig sind:
$$ \vec{v_1} = k \cdot \vec{v_2} $$ für ein $k \neq 0$

Der Schnittwinkel paralleler Geraden ist 0°.

:::

### Orthogonale Geraden

:::snippet{#merken}

Zwei Geraden sind **orthogonal** (stehen senkrecht), wenn ihre Richtungsvektoren orthogonal sind:
$$ \vec{v_1} \cdot \vec{v_2} = 0 $$

Der Schnittwinkel orthogonaler Geraden ist 90°.

:::

## Unterschied: Winkel vs. Schnittwinkel

:::snippet{#beispiel}

Gegeben seien die Richtungsvektoren $$ \vec{u} = \begin{pmatrix}1\\1\\0\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}-1\\1\\0\end{pmatrix} $$.

**Winkel zwischen den Vektoren**:
$$ \cos(\beta) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} = \frac{-1 + 1 + 0}{\sqrt{2} \cdot \sqrt{2}} = 0 $$
$$ \beta = 90° $$

**Schnittwinkel der Geraden**:
$$ \cos(\alpha) = \frac{|\vec{u} \cdot \vec{v}|}{|\vec{u}| \cdot |\vec{v}|} = \frac{|0|}{\sqrt{2} \cdot \sqrt{2}} = 0 $$
$$ \alpha = 90° $$

In diesem Fall sind beide Winkel gleich.

:::

## Anwendung: Straßenkreuzung

:::snippet{#beispiel}

Eine Straße verläuft in Richtung $$ \vec{r_1} = \begin{pmatrix}3\\1\\0\end{pmatrix} $$, eine andere in Richtung $$ \vec{r_2} = \begin{pmatrix}1\\2\\0\end{pmatrix} $$. 

Unter welchem Winkel kreuzen sich die Straßen?

**Lösung**:
$$ \cos(\alpha) = \frac{|\vec{r_1} \cdot \vec{r_2}|}{|\vec{r_1}| \cdot |\vec{r_2}|} = \frac{|3 \cdot 1 + 1 \cdot 2 + 0 \cdot 0|}{\sqrt{10} \cdot \sqrt{5}} = \frac{5}{\sqrt{50}} = \frac{\sqrt{2}}{2} $$

$$ \alpha = \arccos\left(\frac{\sqrt{2}}{2}\right) = 45° $$

Die Straßen kreuzen sich unter einem Winkel von 45°.

:::