---
name: ✏️ Aufgaben
lang: de
index: 2
---

# Aufgaben

## Verbindungsvektoren berechnen

:::snippet{#aufgabe}
Berechne die Verbindungsvektoren zwischen den gegebenen Punkten.
:::

1. $$ A(1|2|3) $$ und $$ B(4|1|7) $$

:::collapsible{title="Lösung" id="d0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{AB} = B - A = \begin{pmatrix}4\\1\\7\end{pmatrix} - \begin{pmatrix}1\\2\\3\end{pmatrix} = \begin{pmatrix}3\\-1\\4\end{pmatrix} $$

:::

2. $$ P(0|5|-2) $$ und $$ Q(-3|1|4) $$

:::collapsible{title="Lösung" id="e0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{PQ} = Q - P = \begin{pmatrix}-3\\1\\4\end{pmatrix} - \begin{pmatrix}0\\5\\-2\end{pmatrix} = \begin{pmatrix}-3\\-4\\6\end{pmatrix} $$

:::

3. $$ M(-1|0|2) $$ und $$ N(2|-3|1) $$

:::collapsible{title="Lösung" id="f0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{MN} = N - M = \begin{pmatrix}2\\-3\\1\end{pmatrix} - \begin{pmatrix}-1\\0\\2\end{pmatrix} = \begin{pmatrix}3\\-3\\-1\end{pmatrix} $$

:::

## Beträge von Vektoren

:::snippet{#aufgabe}
Berechne die Länge (den Betrag) der gegebenen Vektoren.
:::

1. $$ \vec{v} = \begin{pmatrix}3\\4\\0\end{pmatrix} $$

:::collapsible{title="Lösung" id="10eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ |\vec{v}| = \sqrt{3^2 + 4^2 + 0^2} = \sqrt{9 + 16 + 0} = \sqrt{25} = 5 $$

:::

2. $$ \vec{w} = \begin{pmatrix}1\\-2\\2\end{pmatrix} $$

:::collapsible{title="Lösung" id="20eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ |\vec{w}| = \sqrt{1^2 + (-2)^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3 $$

:::

3. $$ \vec{u} = \begin{pmatrix}-6\\2\\3\end{pmatrix} $$

:::collapsible{title="Lösung" id="30eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ |\vec{u}| = \sqrt{(-6)^2 + 2^2 + 3^2} = \sqrt{36 + 4 + 9} = \sqrt{49} = 7 $$

:::

## Einheitsvektoren bestimmen

:::snippet{#aufgabe}
Bestimme den Einheitsvektor zu den gegebenen Vektoren.
:::

1. $$ \vec{a} = \begin{pmatrix}4\\0\\3\end{pmatrix} $$

:::collapsible{title="Lösung" id="40eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Zunächst den Betrag berechnen:
$$ |\vec{a}| = \sqrt{4^2 + 0^2 + 3^2} = \sqrt{16 + 0 + 9} = \sqrt{25} = 5 $$

Einheitsvektor:
$$ \vec{e_a} = \frac{1}{5} \begin{pmatrix}4\\0\\3\end{pmatrix} = \begin{pmatrix}0{,}8\\0\\0{,}6\end{pmatrix} $$

:::

2. $$ \vec{b} = \begin{pmatrix}2\\-2\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="50eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Zunächst den Betrag berechnen:
$$ |\vec{b}| = \sqrt{2^2 + (-2)^2 + 1^2} = \sqrt{4 + 4 + 1} = \sqrt{9} = 3 $$

Einheitsvektor:
$$ \vec{e_b} = \frac{1}{3} \begin{pmatrix}2\\-2\\1\end{pmatrix} = \begin{pmatrix}\frac{2}{3}\\-\frac{2}{3}\\\frac{1}{3}\end{pmatrix} $$

:::

## Abstände zwischen Punkten

:::snippet{#aufgabe}
Berechne den Abstand zwischen den gegebenen Punkten.
:::

1. $$ A(1|2|3) $$ und $$ B(4|6|3) $$

:::collapsible{title="Lösung" id="60eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ d(A,B) = \sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \sqrt{9 + 16 + 0} = \sqrt{25} = 5 $$

:::

2. $$ P(0|0|0) $$ und $$ Q(3|4|12) $$

:::collapsible{title="Lösung" id="70eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ d(P,Q) = \sqrt{(3-0)^2 + (4-0)^2 + (12-0)^2} = \sqrt{9 + 16 + 144} = \sqrt{169} = 13 $$

:::

3. $$ R(-1|2|1) $$ und $$ S(2|-2|5) $$

:::collapsible{title="Lösung" id="80eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ d(R,S) = \sqrt{(2-(-1))^2 + (-2-2)^2 + (5-1)^2} = \sqrt{9 + 16 + 16} = \sqrt{41} $$

:::

## Anwendungsaufgaben

:::snippet{#aufgabe}
Löse die folgenden Aufgaben aus dem Sachkontext.
:::

### Aufgabe 1: Navigation im Raum

Ein Flugzeug befindet sich an Position $$ A(10|5|2) $$ (in km) und fliegt zum Punkt $$ B(25|12|5) $$. 

1. Bestimme den Flugvektor.
2. Berechne die Flugdistanz.

:::collapsible{title="Lösung" id="90eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. Flugvektor: $$ \vec{AB} = \begin{pmatrix}25\\12\\5\end{pmatrix} - \begin{pmatrix}10\\5\\2\end{pmatrix} = \begin{pmatrix}15\\7\\3\end{pmatrix} $$

2. Flugdistanz: $$ |\vec{AB}| = \sqrt{15^2 + 7^2 + 3^2} = \sqrt{225 + 49 + 9} = \sqrt{283} \approx 16{,}8 \text{ km} $$

:::

### Aufgabe 2: Würfel im Raum

Ein Würfel hat die Eckpunkte $$ A(0|0|0) $$, $$ B(4|0|0) $$, $$ C(4|4|0) $$ und $$ D(0|4|0) $$ als Grundfläche. Der Würfel hat die Höhe 4.

1. Bestimme die Koordinaten aller acht Eckpunkte.
2. Berechne die Länge der Raumdiagonale.

:::collapsible{title="Lösung" id="a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. Die acht Eckpunkte sind:
   - Grundfläche: $$ A(0|0|0) $$, $$ B(4|0|0) $$, $$ C(4|4|0) $$, $$ D(0|4|0) $$
   - Deckfläche: $$ E(0|0|4) $$, $$ F(4|0|4) $$, $$ G(4|4|4) $$, $$ H(0|4|4) $$

2. Raumdiagonale von A nach G:
   $$ d(A,G) = \sqrt{(4-0)^2 + (4-0)^2 + (4-0)^2} = \sqrt{16 + 16 + 16} = \sqrt{48} = 4\sqrt{3} \approx 6{,}93 $$

:::