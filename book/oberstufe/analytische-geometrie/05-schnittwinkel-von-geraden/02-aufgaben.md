---
name: ✏️ Aufgaben
lang: de
index: 2
---

# Aufgaben

## Schnittwinkel berechnen

:::snippet{#aufgabe}
Berechne den Schnittwinkel der gegebenen Geraden.
:::

1. $$ g_1: \vec{x} = \begin{pmatrix}0\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} $$
   $$ g_2: \vec{x} = \begin{pmatrix}0\\1\\2\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="14eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}1\\1\\0\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}0\\1\\1\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 = 1 $$

Beträge: $$ |\vec{v_1}| = \sqrt{2} $$, $$ |\vec{v_2}| = \sqrt{2} $$

Cosinus: $$ \cos(\alpha) = \frac{|1|}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2} $$

Schnittwinkel: $$ \alpha = \arccos\left(\frac{1}{2}\right) = 60° $$

:::

2. $$ h_1: \vec{x} = \begin{pmatrix}2\\1\\3\end{pmatrix} + t \cdot \begin{pmatrix}1\\-1\\2\end{pmatrix} $$
   $$ h_2: \vec{x} = \begin{pmatrix}1\\3\\1\end{pmatrix} + s \cdot \begin{pmatrix}2\\2\\-1\end{pmatrix} $$

:::collapsible{title="Lösung" id="24eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}1\\-1\\2\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}2\\2\\-1\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 2 + (-1) \cdot 2 + 2 \cdot (-1) = 2 - 2 - 2 = -2 $$

Beträge: $$ |\vec{v_1}| = \sqrt{1 + 1 + 4} = \sqrt{6} $$, $$ |\vec{v_2}| = \sqrt{4 + 4 + 1} = 3 $$

Cosinus: $$ \cos(\alpha) = \frac{|-2|}{\sqrt{6} \cdot 3} = \frac{2}{3\sqrt{6}} $$

Schnittwinkel: $$ \alpha = \arccos\left(\frac{2}{3\sqrt{6}}\right) \approx 73{,}2° $$

:::

## Lagebeziehungen bestimmen

:::snippet{#aufgabe}
Bestimme die Lagebeziehung der Geraden und berechne ggf. den Schnittwinkel.
:::

1. $$ g_1: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$
   $$ g_2: \vec{x} = \begin{pmatrix}3\\0\\6\end{pmatrix} + s \cdot \begin{pmatrix}4\\-2\\6\end{pmatrix} $$

:::collapsible{title="Lösung" id="34eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren vergleichen:
$$ \vec{v_2} = \begin{pmatrix}4\\-2\\6\end{pmatrix} = 2 \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} = 2 \cdot \vec{v_1} $$

Die Richtungsvektoren sind linear abhängig → **Geraden sind parallel**.

Schnittwinkel: $$ \alpha = 0° $$

:::

2. $$ g_3: \vec{x} = \begin{pmatrix}0\\1\\2\end{pmatrix} + t \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} $$
   $$ g_4: \vec{x} = \begin{pmatrix}1\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix} $$

:::collapsible{title="Lösung" id="44eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}1\\0\\1\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 1 + 0 \cdot 2 + 1 \cdot (-1) = 1 + 0 - 1 = 0 $$

Da das Skalarprodukt null ist → **Geraden sind orthogonal**.

Schnittwinkel: $$ \alpha = 90° $$

:::

## Orthogonale Geraden finden

:::snippet{#aufgabe}
Bestimme eine Gerade, die orthogonal zur gegebenen Gerade verläuft.
:::

Gegeben: $$ g: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\1\end{pmatrix} $$

Finde eine Gerade $h$, die orthogonal zu $g$ ist und durch den Punkt $P(0|0|0)$ verläuft.

:::collapsible{title="Lösung" id="54eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Für Orthogonalität muss der Richtungsvektor $\vec{w}$ von $h$ senkrecht zu $\vec{v} = \begin{pmatrix}2\\1\\1\end{pmatrix}$ stehen.

Bedingung: $$ \vec{v} \cdot \vec{w} = 0 $$

Sei $$ \vec{w} = \begin{pmatrix}a\\b\\c\end{pmatrix} $$. Dann:
$$ 2a + b + c = 0 $$

Eine mögliche Lösung: $a = 1, b = 0, c = -2$ → $$ \vec{w} = \begin{pmatrix}1\\0\\-2\end{pmatrix} $$

Probe: $$ \vec{v} \cdot \vec{w} = 2 \cdot 1 + 1 \cdot 0 + 1 \cdot (-2) = 0 $$ ✓

Orthogonale Gerade: $$ h: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\0\\-2\end{pmatrix} $$

:::

## Anwendungsaufgaben

:::snippet{#aufgabe}
Löse die folgenden Sachaufgaben.
:::

### Straßenkreuzung

Zwei Straßen verlaufen entlang der Geraden:
- Straße A: $$ g_A: \vec{x} = \begin{pmatrix}100\\200\\0\end{pmatrix} + t \cdot \begin{pmatrix}3\\1\\0\end{pmatrix} $$
- Straße B: $$ g_B: \vec{x} = \begin{pmatrix}150\\180\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\4\\0\end{pmatrix} $$

Unter welchem Winkel kreuzen sich die Straßen?

:::collapsible{title="Lösung" id="64eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_A} = \begin{pmatrix}3\\1\\0\end{pmatrix} $$, $$ \vec{v_B} = \begin{pmatrix}1\\4\\0\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_A} \cdot \vec{v_B} = 3 \cdot 1 + 1 \cdot 4 + 0 \cdot 0 = 7 $$

Beträge: $$ |\vec{v_A}| = \sqrt{9 + 1} = \sqrt{10} $$, $$ |\vec{v_B}| = \sqrt{1 + 16} = \sqrt{17} $$

Cosinus: $$ \cos(\alpha) = \frac{7}{\sqrt{10} \cdot \sqrt{17}} = \frac{7}{\sqrt{170}} $$

Schnittwinkel: $$ \alpha = \arccos\left(\frac{7}{\sqrt{170}}\right) \approx 57{,}5° $$

:::

### Dachkonstruktion

Die Sparren eines Daches verlaufen entlang der Richtungen:
- Sparren 1: $$ \vec{r_1} = \begin{pmatrix}4\\0\\-1\end{pmatrix} $$
- Sparren 2: $$ \vec{r_2} = \begin{pmatrix}0\\4\\-1\end{pmatrix} $$

Unter welchem Winkel treffen sich die Sparren am First?

:::collapsible{title="Lösung" id="74eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{r_1} \cdot \vec{r_2} = 4 \cdot 0 + 0 \cdot 4 + (-1) \cdot (-1) = 1 $$

Beträge: $$ |\vec{r_1}| = |\vec{r_2}| = \sqrt{16 + 0 + 1} = \sqrt{17} $$

Cosinus: $$ \cos(\alpha) = \frac{1}{\sqrt{17} \cdot \sqrt{17}} = \frac{1}{17} $$

Schnittwinkel: $$ \alpha = \arccos\left(\frac{1}{17}\right) \approx 86{,}6° $$

:::

## Parameterabhängige Aufgaben

:::snippet{#aufgabe}
Bestimme den Parameter so, dass die gegebene Bedingung erfüllt ist.
:::

### Aufgabe 1: Orthogonale Geraden

Bestimme $k$ so, dass die Geraden orthogonal sind:
$$ g_1: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\k\\2\end{pmatrix} $$
$$ g_2: \vec{x} = \begin{pmatrix}0\\1\\1\end{pmatrix} + s \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} $$

:::collapsible{title="Lösung" id="84eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Für Orthogonalität: $$ \vec{v_1} \cdot \vec{v_2} = 0 $$

$$ \begin{pmatrix}1\\k\\2\end{pmatrix} \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} = 1 \cdot 2 + k \cdot 1 + 2 \cdot (-1) = 2 + k - 2 = k = 0 $$

Also: $$ k = 0 $$

:::

### Aufgabe 2: Schnittwinkel 60°

Bestimme $a$ so, dass der Schnittwinkel 60° beträgt:
$$ h_1: \vec{x} = \vec{p} + t \cdot \begin{pmatrix}1\\0\\0\end{pmatrix} $$
$$ h_2: \vec{x} = \vec{q} + s \cdot \begin{pmatrix}1\\a\\0\end{pmatrix} $$

:::collapsible{title="Lösung" id="94eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}1\\0\\0\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}1\\a\\0\end{pmatrix} $$

Für Schnittwinkel 60°: $$ \cos(60°) = \frac{1}{2} $$

$$ \frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|} = \frac{1}{2} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 $$

Beträge: $$ |\vec{v_1}| = 1 $$, $$ |\vec{v_2}| = \sqrt{1 + a^2} $$

Einsetzen: $$ \frac{1}{1 \cdot \sqrt{1 + a^2}} = \frac{1}{2} $$

$$ \sqrt{1 + a^2} = 2 $$
$$ 1 + a^2 = 4 $$
$$ a^2 = 3 $$
$$ a = \pm\sqrt{3} $$

:::
