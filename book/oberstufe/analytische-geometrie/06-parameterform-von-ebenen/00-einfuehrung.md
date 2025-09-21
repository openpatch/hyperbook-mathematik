---
name: 💡 Einführung
lang: de
index: 0
---

# Parameterform von Ebenen

## Von der Gerade zur Ebene

Du kennst bereits die Parameterform einer Geraden. Nun erweitern wir dieses Konzept auf Ebenen im dreidimensionalen Raum.

:::jsxgraph{height="500" width="600" boundingbox="[-8,8,8,-8]" axis=false grid=false}

```js
// 3D Visualisierung für Ebenen
var view = board.create('view3d',
    [[-6, -3], [8, 8],
    [[-5, 5], [-5, 5], [-5, 5]]],
    {});

// Koordinatenachsen
var xAxis = view.create('line3d', [[0,0,0], [3,0,0]], {strokeColor: 'red', strokeWidth: 2});
var yAxis = view.create('line3d', [[0,0,0], [0,3,0]], {strokeColor: 'green', strokeWidth: 2});
var zAxis = view.create('line3d', [[0,0,0], [0,0,3]], {strokeColor: 'blue', strokeWidth: 2});

// Ebene durch drei Punkte: A(1,0,2), B(3,1,1), C(0,2,3)
var pointA = view.create('point3d', [1,0,2], {name: 'A', size: 6, strokeColor: 'red'});
var pointB = view.create('point3d', [3,1,1], {name: 'B', size: 6, strokeColor: 'red'});
var pointC = view.create('point3d', [0,2,3], {name: 'C', size: 6, strokeColor: 'red'});

// Spannvektoren
var vectorAB = view.create('line3d', [[1,0,2], [3,1,1]], {strokeColor: 'purple', strokeWidth: 3, lastArrow: true});
var vectorAC = view.create('line3d', [[1,0,2], [0,2,3]], {strokeColor: 'orange', strokeWidth: 3, lastArrow: true});

// Ebene als parametrische Fläche
var plane = view.create('parametricsurface3d', [
    function(u, v) { return 1 + u * 2 + v * (-1); },
    function(u, v) { return 0 + u * 1 + v * 2; },
    function(u, v) { return 2 + u * (-1) + v * 1; },
    [-0.5, 1.5], [-0.5, 1.5]
], {
    strokeColor: 'lightblue',
    strokeOpacity: 0.6,
    fillColor: 'lightblue',
    fillOpacity: 0.3
});

// Beschriftungen
view.create('text3d', [[2.5,0.5,0.5], 'AB⃗'], {fontSize: 14, strokeColor: 'purple'});
view.create('text3d', [[0.5,1,2.5], 'AC⃗'], {fontSize: 14, strokeColor: 'orange'});
view.create('text3d', [[2,2,1], 'Ebene E'], {fontSize: 14, strokeColor: 'blue'});
```

:::

## Unterschied: Gerade vs. Ebene

:::snippet{#definition}

**Gerade**: $$ g: \vec{x} = \vec{a} + t \cdot \vec{v} $$ (1 Parameter, 1 Richtung)

**Ebene**: $$ E: \vec{x} = \vec{a} + r \cdot \vec{u} + s \cdot \vec{v} $$ (2 Parameter, 2 Richtungen)

:::

## Forschungsauftrag

Die dargestellte Ebene kann durch drei Punkte A, B und C definiert werden.

1. Notiere dir welche Bestandteile in der Visualisierung zu erkennen sind.  

::embed{src="https://www.geogebra.org/classic/phxgpest?embed" height="700px"}

2. Verändere die Parameter r und s. Beschreibe was passiert. Lasse dir auch die Spur anzeigen.

:::collapsible{title="Lösung" id="a5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Bestandteile der Visualisierung**:
- Punkt A (Stützpunkt)
- Vektoren u und v (Spannvektoren)  
- Parameter r und s
- Punkt P in der Ebene

**Bei Parameteränderung**:
- Veränderung von r: Der Vektor u wird gestreckt/gestaucht
- Veränderung von s: Der Vektor v wird gestreckt/gestaucht
- Dadurch verschiebt sich der Punkt P in der Ebene

:::

3. Was passiert, wenn beide Parameter gleichzeitig verändert werden?

:::collapsible{title="Lösung" id="b5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Der Punkt P kann jeden beliebigen Punkt der Ebene erreichen. Die Kombination beider Parameter ermöglicht es, alle Punkte der Ebene zu beschreiben.

:::

## Definition einer Ebene

:::snippet{#definition}

Eine **Ebene** wird durch die Parameterform beschrieben:

$$ E: \vec{x} = \vec{a} + r \cdot \vec{u} + s \cdot \vec{v} $$

wobei:
- $\vec{a}$ der **Stützvektor** ist (ein bekannter Punkt auf der Ebene)
- $\vec{u}$ und $\vec{v}$ die **Spannvektoren** sind (nicht parallel!)
- $r, s \in \mathbb{R}$ die **Parameter** sind

:::

## Warum zwei Parameter?

:::snippet{#merken}

Eine Ebene ist **zweidimensional**, deshalb benötigen wir zwei Parameter:
- Ein Parameter würde nur eine Gerade beschreiben
- Zwei Parameter spannen eine Fläche (Ebene) auf
- Die Spannvektoren dürfen nicht parallel sein!

:::

## Ebene durch drei Punkte

:::snippet{#satz}

Eine Ebene durch die Punkte $A$, $B$ und $C$ hat die Parameterform:

$$ E: \vec{x} = \vec{OA} + r \cdot \vec{AB} + s \cdot \vec{AC} $$

**Bedingung**: Die Punkte A, B und C dürfen nicht auf einer Geraden liegen (nicht kollinear).

:::

### Beispiel

:::snippet{#beispiel}

Gegeben: $$ A(1|2|0) $$, $$ B(3|1|2) $$, $$ C(0|4|1) $$

**Stützvektor**: $$ \vec{a} = \vec{OA} = \begin{pmatrix}1\\2\\0\end{pmatrix} $$

**Spannvektoren**: 
- $$ \vec{u} = \vec{AB} = \begin{pmatrix}2\\-1\\2\end{pmatrix} $$
- $$ \vec{v} = \vec{AC} = \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + r \cdot \begin{pmatrix}2\\-1\\2\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

:::

## Prüfung auf Parallelität der Spannvektoren

:::snippet{#merken}

**Wichtig**: Die Spannvektoren $\vec{u}$ und $\vec{v}$ dürfen nicht parallel sein!

Prüfung: $\vec{u} = k \cdot \vec{v}$ für ein $k \neq 0$?

Falls ja → Die "Ebene" ist nur eine Gerade!

:::

3. Gib drei weitere Punkte an, die auf der Ebene liegen.

:::collapsible{title="Lösung" id="217347"}

Zum Beispiel: $P_1(14|16|16)$, $P_2(3,5|5,5|11)$ und $P_3(7|9|16,5)$

:::

4. Gib ein passendes r und s an, sodass der Punkt $S(3|5|20)$ erreicht wird.

:::collapsible{title="Lösung" id="035775"}

$r=-1$ und $s=2$

:::

5. Lasse dir die Gleichung der Ebene anzeigen und beschreibe die Funktion der Bestandteile.

:::collapsible{title="Gleichung der Ebene" id="159897"}

$$

E: \vec{x} = \vec{a} + r \cdot \vec{u} + s \cdot \vec{v} \begin{pmatrix}8\\10\\10\end{pmatrix} + r \cdot \begin{pmatrix}5\\5\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\0\\5\end{pmatrix}, \ r,s \in \mathbb{R}

$$

:::

:::collapsible{title="Tipp" id="466951"}

Denke an die Bestandteile der Parameterform einer Geraden. Kannst du bei der Ebene ähnliches entdecken.

:::

:::collapsible{title="Lösung" id="075723"}

Es gibt einen Stützvektor $\vec{a}$ und zwei Vektoren $\vec{u}$ und $\vec{v}$, die mit Parametern verlängert werden können. Ähnlich zu dem Richtungsvektor bei der Parameterform einer Geraden. Der Vektor $\vec{x}$ steht stellvertretend für alle Ortvektoren zu Punkten, die in der Ebene liegen.

:::

## Parameterform der Ebene

Gehe zur nächsten Seite (Formel) und schaue dir an wie die Parameterform einer Ebene aufgestellt werden kann.
