---
name: ✏️ Aufgaben
lang: de
index: 2
---

# Aufgaben

## Winkel zwischen Vektoren berechnen

:::snippet{#aufgabe}
Berechne den Winkel zwischen den gegebenen Vektoren.
:::

1. $$ \vec{a} = \begin{pmatrix}1\\0\\0\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}0\\1\\0\end{pmatrix} $$

:::collapsible{title="Lösung" id="13eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{a} \cdot \vec{b} = 1 \cdot 0 + 0 \cdot 1 + 0 \cdot 0 = 0 $$

Beträge: $$ |\vec{a}| = 1 $$, $$ |\vec{b}| = 1 $$

Cosinus: $$ \cos(\alpha) = \frac{0}{1 \cdot 1} = 0 $$

Winkel: $$ \alpha = \arccos(0) = 90° $$

:::

2. $$ \vec{u} = \begin{pmatrix}3\\4\\0\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}1\\1\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="23eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{u} \cdot \vec{v} = 3 \cdot 1 + 4 \cdot 1 + 0 \cdot 1 = 7 $$

Beträge: 
- $$ |\vec{u}| = \sqrt{3^2 + 4^2 + 0^2} = 5 $$
- $$ |\vec{v}| = \sqrt{1^2 + 1^2 + 1^2} = \sqrt{3} $$

Cosinus: $$ \cos(\alpha) = \frac{7}{5\sqrt{3}} $$

Winkel: $$ \alpha = \arccos\left(\frac{7}{5\sqrt{3}}\right) \approx 36{,}2° $$

:::

3. $$ \vec{p} = \begin{pmatrix}2\\-1\\2\end{pmatrix} $$ und $$ \vec{q} = \begin{pmatrix}1\\4\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="33eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{p} \cdot \vec{q} = 2 \cdot 1 + (-1) \cdot 4 + 2 \cdot 1 = 2 - 4 + 2 = 0 $$

Da das Skalarprodukt null ist, sind die Vektoren orthogonal.

Winkel: $$ \alpha = 90° $$

:::

## Orthogonalität prüfen

:::snippet{#aufgabe}
Prüfe, ob die gegebenen Vektoren orthogonal sind.
:::

1. $$ \vec{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$ und $$ \vec{s} = \begin{pmatrix}2\\0\\2\end{pmatrix} $$

:::collapsible{title="Lösung" id="43eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{r} \cdot \vec{s} = 1 \cdot 2 + 2 \cdot 0 + (-1) \cdot 2 = 2 + 0 - 2 = 0 $$

**Ja, die Vektoren sind orthogonal.**

:::

2. $$ \vec{m} = \begin{pmatrix}3\\1\\-2\end{pmatrix} $$ und $$ \vec{n} = \begin{pmatrix}1\\-1\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="53eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{m} \cdot \vec{n} = 3 \cdot 1 + 1 \cdot (-1) + (-2) \cdot 1 = 3 - 1 - 2 = 0 $$

**Ja, die Vektoren sind orthogonal.**

:::

3. $$ \vec{x} = \begin{pmatrix}2\\3\\1\end{pmatrix} $$ und $$ \vec{y} = \begin{pmatrix}1\\0\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="63eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{x} \cdot \vec{y} = 2 \cdot 1 + 3 \cdot 0 + 1 \cdot 1 = 2 + 0 + 1 = 3 \neq 0 $$

**Nein, die Vektoren sind nicht orthogonal.**

:::

## Parallelität prüfen

:::snippet{#aufgabe}
Prüfe, ob die gegebenen Vektoren parallel sind und bestimme ggf. den Proportionalitätsfaktor.
:::

1. $$ \vec{a} = \begin{pmatrix}4\\-2\\6\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}2\\-1\\3\end{pmatrix} $$

:::collapsible{title="Lösung" id="73eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Prüfung: $$ \vec{a} = k \cdot \vec{b} $$?

$$ \begin{pmatrix}4\\-2\\6\end{pmatrix} = k \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$

Aus jeder Komponente: $k = 2$

Da $k$ für alle Komponenten gleich ist, sind die Vektoren **parallel** mit $\vec{a} = 2\vec{b}$.

Winkel: $\alpha = 0°$ (gleiche Richtung)

:::

2. $$ \vec{u} = \begin{pmatrix}3\\6\\-9\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}-1\\-2\\3\end{pmatrix} $$

:::collapsible{title="Lösung" id="83eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Prüfung: $$ \vec{u} = k \cdot \vec{v} $$?

$$ \begin{pmatrix}3\\6\\-9\end{pmatrix} = k \cdot \begin{pmatrix}-1\\-2\\3\end{pmatrix} $$

Aus der ersten Komponente: $3 = k \cdot (-1) \Rightarrow k = -3$
Aus der zweiten Komponente: $6 = k \cdot (-2) \Rightarrow k = -3$
Aus der dritten Komponente: $-9 = k \cdot 3 \Rightarrow k = -3$

Da $k = -3$ für alle Komponenten, sind die Vektoren **antiparallel** mit $\vec{u} = -3\vec{v}$.

Winkel: $\alpha = 180°$ (entgegengesetzte Richtung)

:::

## Winkel in besonderen Dreiecken

:::snippet{#aufgabe}
Verwende Vektoren, um Winkel in geometrischen Figuren zu berechnen.
:::

### Aufgabe: Dreieck ABC

Gegeben ist das Dreieck mit den Eckpunkten $$ A(1|2|3) $$, $$ B(4|1|2) $$ und $$ C(2|5|1) $$.

Berechne den Winkel bei Punkt A.

:::collapsible{title="Lösung" id="93eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Für den Winkel bei A benötigen wir die Vektoren von A zu den anderen Eckpunkten:

$$ \vec{AB} = \begin{pmatrix}4-1\\1-2\\2-3\end{pmatrix} = \begin{pmatrix}3\\-1\\-1\end{pmatrix} $$

$$ \vec{AC} = \begin{pmatrix}2-1\\5-2\\1-3\end{pmatrix} = \begin{pmatrix}1\\3\\-2\end{pmatrix} $$

Skalarprodukt: $$ \vec{AB} \cdot \vec{AC} = 3 \cdot 1 + (-1) \cdot 3 + (-1) \cdot (-2) = 3 - 3 + 2 = 2 $$

Beträge:
- $$ |\vec{AB}| = \sqrt{3^2 + (-1)^2 + (-1)^2} = \sqrt{11} $$
- $$ |\vec{AC}| = \sqrt{1^2 + 3^2 + (-2)^2} = \sqrt{14} $$

Cosinus: $$ \cos(\alpha) = \frac{2}{\sqrt{11} \cdot \sqrt{14}} = \frac{2}{\sqrt{154}} $$

Winkel: $$ \alpha = \arccos\left(\frac{2}{\sqrt{154}}\right) \approx 80{,}8° $$

:::

## Anwendungsaufgaben

:::snippet{#aufgabe}
Löse die folgenden Sachaufgaben.
:::

### Kraftvektoren

Zwei Kräfte $$ \vec{F_1} = \begin{pmatrix}30\\40\\0\end{pmatrix} $$ N und $$ \vec{F_2} = \begin{pmatrix}20\\0\\30\end{pmatrix} $$ N wirken auf einen Körper.

1. Unter welchem Winkel stehen die Kräfte zueinander?
2. Wie groß ist die resultierende Kraft $$ \vec{F_R} = \vec{F_1} + \vec{F_2} $$?

:::collapsible{title="Lösung" id="a3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. **Winkelberechnung**:
   
   Skalarprodukt: $$ \vec{F_1} \cdot \vec{F_2} = 30 \cdot 20 + 40 \cdot 0 + 0 \cdot 30 = 600 $$
   
   Beträge:
   - $$ |\vec{F_1}| = \sqrt{30^2 + 40^2} = 50 \text{ N} $$
   - $$ |\vec{F_2}| = \sqrt{20^2 + 30^2} = \sqrt{1300} = 10\sqrt{13} \text{ N} $$
   
   Cosinus: $$ \cos(\alpha) = \frac{600}{50 \cdot 10\sqrt{13}} = \frac{6}{5\sqrt{13}} $$
   
   Winkel: $$ \alpha \approx 56{,}3° $$

2. **Resultierende Kraft**:
   
   $$ \vec{F_R} = \begin{pmatrix}30\\40\\0\end{pmatrix} + \begin{pmatrix}20\\0\\30\end{pmatrix} = \begin{pmatrix}50\\40\\30\end{pmatrix} $$
   
   Betrag: $$ |\vec{F_R}| = \sqrt{50^2 + 40^2 + 30^2} = \sqrt{4100} \approx 64{,}0 \text{ N} $$

:::

### Navigationsproblem

Ein Schiff fährt mit Geschwindigkeitsvektor $$ \vec{v_S} = \begin{pmatrix}15\\20\\0\end{pmatrix} $$ km/h. Gleichzeitig wirkt eine Strömung mit $$ \vec{v_St} = \begin{pmatrix}5\\-3\\0\end{pmatrix} $$ km/h.

Unter welchem Winkel weicht das Schiff von seinem ursprünglichen Kurs ab?

:::collapsible{title="Lösung" id="b3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Die tatsächliche Geschwindigkeit ist:
$$ \vec{v_{ges}} = \vec{v_S} + \vec{v_{St}} = \begin{pmatrix}20\\17\\0\end{pmatrix} $$

Winkel zwischen ursprünglichem Kurs $\vec{v_S}$ und tatsächlichem Kurs $\vec{v_{ges}}$:

Skalarprodukt: $$ \vec{v_S} \cdot \vec{v_{ges}} = 15 \cdot 20 + 20 \cdot 17 = 300 + 340 = 640 $$

Beträge:
- $$ |\vec{v_S}| = \sqrt{15^2 + 20^2} = 25 $$
- $$ |\vec{v_{ges}}| = \sqrt{20^2 + 17^2} = \sqrt{689} $$

Cosinus: $$ \cos(\alpha) = \frac{640}{25\sqrt{689}} $$

Winkel: $$ \alpha \approx 13{,}2° $$

Das Schiff weicht um etwa **13,2°** von seinem ursprünglichen Kurs ab.

:::