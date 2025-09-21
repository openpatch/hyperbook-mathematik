---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Winkel zwischen Vektoren**: Der Winkel $\alpha$ zwischen zwei Vektoren $\vec{a}$ und $\vec{b}$ wird berechnet durch:
$$ \alpha = \arccos\left(\frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|}\right) $$

:::

:::snippet{#merken}

**Geometrische Interpretation**: $$ \vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\alpha) $$

:::

:::snippet{#merken}

**Spezialfälle**:
- $\alpha = 0°$: Vektoren parallel (gleiche Richtung)
- $\alpha = 90°$: Vektoren orthogonal ($\vec{a} \cdot \vec{b} = 0$)
- $\alpha = 180°$: Vektoren antiparallel (entgegengesetzte Richtung)

:::

:::snippet{#merken}

**Orthogonalität**: Zwei Vektoren sind orthogonal, wenn $\vec{a} \cdot \vec{b} = 0$

:::

# Prüfe dich

## Aufgabe 1: Grundberechnung

:::snippet{#aufgabe}

Berechne den Winkel zwischen den Vektoren $$ \vec{u} = \begin{pmatrix}1\\2\\2\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}2\\1\\-2\end{pmatrix} $$.

:::

:::collapsible{title="Musterlösung" id="b3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Schritt 1**: Skalarprodukt berechnen
$$ \vec{u} \cdot \vec{v} = 1 \cdot 2 + 2 \cdot 1 + 2 \cdot (-2) = 2 + 2 - 4 = 0 $$

**Schritt 2**: Da das Skalarprodukt null ist, sind die Vektoren orthogonal.

**Antwort**: $$ \alpha = 90° $$

:::

## Aufgabe 2: Parallelität

:::snippet{#aufgabe}

Prüfe, ob die Vektoren $$ \vec{a} = \begin{pmatrix}6\\-9\\3\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}-2\\3\\-1\end{pmatrix} $$ parallel sind.

:::

:::collapsible{title="Musterlösung" id="c3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Prüfung auf lineare Abhängigkeit: $\vec{a} = k \cdot \vec{b}$?

$$ \begin{pmatrix}6\\-9\\3\end{pmatrix} = k \cdot \begin{pmatrix}-2\\3\\-1\end{pmatrix} $$

Aus der ersten Komponente: $6 = k \cdot (-2) \Rightarrow k = -3$
Aus der zweiten Komponente: $-9 = k \cdot 3 \Rightarrow k = -3$
Aus der dritten Komponente: $3 = k \cdot (-1) \Rightarrow k = -3$

Da $k = -3$ für alle Komponenten, sind die Vektoren **antiparallel** mit Winkel $\alpha = 180°$.

:::

## Aufgabe 3: Winkel im Dreieck

:::snippet{#aufgabe}

Gegeben ist das Dreieck mit den Eckpunkten $$ A(0|0|0) $$, $$ B(3|0|0) $$ und $$ C(0|4|0) $$. Berechne den Winkel bei A.

:::

:::collapsible{title="Musterlösung" id="d3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Vektoren von A aus:
$$ \vec{AB} = \begin{pmatrix}3\\0\\0\end{pmatrix} $$
$$ \vec{AC} = \begin{pmatrix}0\\4\\0\end{pmatrix} $$

Skalarprodukt: $$ \vec{AB} \cdot \vec{AC} = 3 \cdot 0 + 0 \cdot 4 + 0 \cdot 0 = 0 $$

Da das Skalarprodukt null ist: $$ \alpha = 90° $$

:::

## Aufgabe 4: Anwendung Kräfte

:::snippet{#aufgabe}

Zwei Kräfte $$ \vec{F_1} = \begin{pmatrix}8\\6\\0\end{pmatrix} $$ N und $$ \vec{F_2} = \begin{pmatrix}6\\-8\\0\end{pmatrix} $$ N wirken auf einen Körper. Unter welchem Winkel stehen sie zueinander?

:::

:::collapsible{title="Musterlösung" id="e3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{F_1} \cdot \vec{F_2} = 8 \cdot 6 + 6 \cdot (-8) + 0 \cdot 0 = 48 - 48 = 0 $$

Da das Skalarprodukt null ist, stehen die Kräfte **senkrecht zueinander**.

Winkel: $$ \alpha = 90° $$

:::

## Aufgabe 5: Bestimmung fehlender Koordinaten

:::snippet{#aufgabe}

Bestimme den Wert von $k$, so dass die Vektoren $$ \vec{p} = \begin{pmatrix}2\\k\\1\end{pmatrix} $$ und $$ \vec{q} = \begin{pmatrix}3\\2\\-6\end{pmatrix} $$ orthogonal sind.

:::

:::collapsible{title="Musterlösung" id="f3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Für Orthogonalität muss gelten: $\vec{p} \cdot \vec{q} = 0$

$$ \vec{p} \cdot \vec{q} = 2 \cdot 3 + k \cdot 2 + 1 \cdot (-6) = 6 + 2k - 6 = 2k = 0 $$

Also: $$ k = 0 $$

:::

## Aufgabe 6: Winkel zwischen Richtungsvektoren

:::snippet{#aufgabe}

Zwei Geraden haben die Richtungsvektoren $$ \vec{r_1} = \begin{pmatrix}1\\1\\1\end{pmatrix} $$ und $$ \vec{r_2} = \begin{pmatrix}2\\-1\\1\end{pmatrix} $$. Unter welchem Winkel schneiden sich die Geraden?

:::

:::collapsible{title="Musterlösung" id="03eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{r_1} \cdot \vec{r_2} = 1 \cdot 2 + 1 \cdot (-1) + 1 \cdot 1 = 2 - 1 + 1 = 2 $$

Beträge:
- $$ |\vec{r_1}| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3} $$
- $$ |\vec{r_2}| = \sqrt{2^2 + (-1)^2 + 1^2} = \sqrt{6} $$

Cosinus: $$ \cos(\alpha) = \frac{2}{\sqrt{3} \cdot \sqrt{6}} = \frac{2}{\sqrt{18}} = \frac{2}{3\sqrt{2}} = \frac{\sqrt{2}}{3} $$

Winkel: $$ \alpha = \arccos\left(\frac{\sqrt{2}}{3}\right) \approx 61{,}9° $$

:::

## Aufgabe 7: Spitzer oder stumpfer Winkel?

:::snippet{#aufgabe}

Ohne den Winkel zu berechnen, entscheide, ob der Winkel zwischen $$ \vec{a} = \begin{pmatrix}1\\2\\3\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}2\\-1\\1\end{pmatrix} $$ spitz, rechtwinklig oder stumpf ist.

:::

:::collapsible{title="Musterlösung" id="13eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt berechnen: $$ \vec{a} \cdot \vec{b} = 1 \cdot 2 + 2 \cdot (-1) + 3 \cdot 1 = 2 - 2 + 3 = 3 $$

Da das Skalarprodukt **positiv** ist, ist $\cos(\alpha) > 0$, also $\alpha < 90°$.

Der Winkel ist **spitz**.

:::