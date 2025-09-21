---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Schnittwinkel von Geraden**: Der Schnittwinkel $\alpha$ zwischen zwei Geraden mit Richtungsvektoren $\vec{v_1}$ und $\vec{v_2}$ ist:
$$ \alpha = \arccos\left(\frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|}\right) $$

:::

:::snippet{#merken}

**Betragszeichen**: Der Betrag sorgt dafür, dass der Schnittwinkel immer zwischen 0° und 90° liegt.

:::

:::snippet{#merken}

**Spezialfälle**:
- **Parallel**: $\vec{v_1} = k \cdot \vec{v_2}$ → Schnittwinkel = 0°
- **Orthogonal**: $\vec{v_1} \cdot \vec{v_2} = 0$ → Schnittwinkel = 90°

:::

:::snippet{#merken}

**Lagebeziehungen**: Auch windschiefe Geraden haben einen definierten Schnittwinkel (Winkel ihrer Richtungsvektoren).

:::

# Prüfe dich

## Aufgabe 1: Grundberechnung

:::snippet{#aufgabe}

Berechne den Schnittwinkel der Geraden:
$$ g_1: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} $$
$$ g_2: \vec{x} = \begin{pmatrix}0\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}2\\0\\-2\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="b4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}1\\1\\1\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}2\\0\\-2\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 2 + 1 \cdot 0 + 1 \cdot (-2) = 0 $$

Da das Skalarprodukt null ist, sind die Geraden orthogonal.

**Schnittwinkel**: $$ \alpha = 90° $$

:::

## Aufgabe 2: Parallelität erkennen

:::snippet{#aufgabe}

Sind die Geraden parallel? Begründe deine Antwort.
$$ h_1: \vec{x} = \begin{pmatrix}2\\1\\3\end{pmatrix} + t \cdot \begin{pmatrix}3\\-6\\9\end{pmatrix} $$
$$ h_2: \vec{x} = \begin{pmatrix}1\\4\\0\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\-3\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="c4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}3\\-6\\9\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}-1\\2\\-3\end{pmatrix} $$

Prüfung auf lineare Abhängigkeit:
$$ \vec{v_1} = k \cdot \vec{v_2} $$?

$$ \begin{pmatrix}3\\-6\\9\end{pmatrix} = k \cdot \begin{pmatrix}-1\\2\\-3\end{pmatrix} $$

Aus jeder Komponente: $k = -3$

Da $k$ für alle Komponenten gleich ist, sind die Richtungsvektoren linear abhängig.

**Ja, die Geraden sind parallel** mit Schnittwinkel 0°.

:::

## Aufgabe 3: Schnittwinkel 45°

:::snippet{#aufgabe}

Prüfe, ob der Schnittwinkel der Geraden 45° beträgt:
$$ g: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\0\\0\end{pmatrix} $$
$$ h: \vec{x} = \begin{pmatrix}1\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="d4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}1\\0\\0\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}1\\1\\0\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 1 + 0 \cdot 1 + 0 \cdot 0 = 1 $$

Beträge: $$ |\vec{v_1}| = 1 $$, $$ |\vec{v_2}| = \sqrt{2} $$

Cosinus: $$ \cos(\alpha) = \frac{1}{1 \cdot \sqrt{2}} = \frac{\sqrt{2}}{2} $$

Winkel: $$ \alpha = \arccos\left(\frac{\sqrt{2}}{2}\right) = 45° $$

**Ja, der Schnittwinkel beträgt 45°.**

:::

## Aufgabe 4: Parameter bestimmen

:::snippet{#aufgabe}

Bestimme $k$ so, dass die Geraden einen Schnittwinkel von 60° haben:
$$ g_1: \vec{x} = \vec{a} + t \cdot \begin{pmatrix}2\\0\\0\end{pmatrix} $$
$$ g_2: \vec{x} = \vec{b} + s \cdot \begin{pmatrix}1\\k\\0\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="e4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Für Schnittwinkel 60°: $$ \cos(60°) = \frac{1}{2} $$

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}2\\0\\0\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}1\\k\\0\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 2 \cdot 1 = 2 $$

Beträge: $$ |\vec{v_1}| = 2 $$, $$ |\vec{v_2}| = \sqrt{1 + k^2} $$

Formel: $$ \frac{|2|}{2 \cdot \sqrt{1 + k^2}} = \frac{1}{2} $$

$$ \frac{1}{\sqrt{1 + k^2}} = \frac{1}{2} $$

$$ \sqrt{1 + k^2} = 2 $$

$$ 1 + k^2 = 4 $$

$$ k^2 = 3 $$

$$ k = \pm\sqrt{3} $$

:::

## Aufgabe 5: Anwendung Architektur

:::snippet{#aufgabe}

Zwei Träger eines Gebäudes verlaufen entlang der Richtungen:
- Träger A: $$ \vec{r_A} = \begin{pmatrix}6\\8\\0\end{pmatrix} $$
- Träger B: $$ \vec{r_B} = \begin{pmatrix}8\\-6\\0\end{pmatrix} $$

Unter welchem Winkel treffen sich die Träger?

:::

:::collapsible{title="Musterlösung" id="f4eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Skalarprodukt: $$ \vec{r_A} \cdot \vec{r_B} = 6 \cdot 8 + 8 \cdot (-6) + 0 \cdot 0 = 48 - 48 = 0 $$

Da das Skalarprodukt null ist, stehen die Träger **senkrecht aufeinander**.

**Schnittwinkel**: $$ \alpha = 90° $$

:::

## Aufgabe 6: Komplexere Berechnung

:::snippet{#aufgabe}

Berechne den Schnittwinkel der Geraden:
$$ g: \vec{x} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\2\end{pmatrix} $$
$$ h: \vec{x} = \begin{pmatrix}0\\1\\3\end{pmatrix} + s \cdot \begin{pmatrix}1\\-2\\1\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="04eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}2\\1\\2\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}1\\-2\\1\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 2 \cdot 1 + 1 \cdot (-2) + 2 \cdot 1 = 2 - 2 + 2 = 2 $$

Beträge: 
- $$ |\vec{v_1}| = \sqrt{4 + 1 + 4} = 3 $$
- $$ |\vec{v_2}| = \sqrt{1 + 4 + 1} = \sqrt{6} $$

Cosinus: $$ \cos(\alpha) = \frac{|2|}{3 \cdot \sqrt{6}} = \frac{2}{3\sqrt{6}} $$

Schnittwinkel: $$ \alpha = \arccos\left(\frac{2}{3\sqrt{6}}\right) \approx 73{,}2° $$

:::

## Aufgabe 7: Windschiefe Geraden

:::snippet{#aufgabe}

Zeige, dass die Geraden windschief sind und berechne ihren Schnittwinkel:
$$ g_1: \vec{x} = \begin{pmatrix}1\\0\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} $$
$$ g_2: \vec{x} = \begin{pmatrix}0\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\1\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="14eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**1. Nachweis, dass sie windschief sind:**

Prüfung auf Parallelität: Richtungsvektoren $$ \begin{pmatrix}1\\1\\0\end{pmatrix} $$ und $$ \begin{pmatrix}0\\1\\1\end{pmatrix} $$ sind nicht linear abhängig → nicht parallel.

Schnittpunkt suchen: $$ \begin{pmatrix}1+t\\t\\0\end{pmatrix} = \begin{pmatrix}0\\s\\1+s\end{pmatrix} $$

Gleichungssystem:
\begin{align*}
1 + t &= 0 \quad \Rightarrow \quad t = -1 \\
t &= s \quad \Rightarrow \quad s = -1 \\
0 &= 1 + s \quad \Rightarrow \quad s = -1
\end{align*}

Die dritte Gleichung ist erfüllt, aber die erste ergibt $0 = 1$ (Widerspruch).

→ **Geraden sind windschief**.

**2. Schnittwinkel:**

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 0 + 1 \cdot 1 + 0 \cdot 1 = 1 $$

Beträge: $$ |\vec{v_1}| = |\vec{v_2}| = \sqrt{2} $$

Cosinus: $$ \cos(\alpha) = \frac{1}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2} $$

Schnittwinkel: $$ \alpha = 60° $$

:::