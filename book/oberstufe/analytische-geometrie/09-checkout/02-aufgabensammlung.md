---
name: ✅ Aufgabensammlung
index: 2
lang: de
---

# ✅ Aufgabensammlung

::::::collapsible{title="Ich kann Beträge von Vektoren berechnen" id="vec-magnitude-001"}

Berechne die Beträge der folgenden Vektoren:

$$
\begin{align*}
\vec{a} &= \begin{pmatrix}3\\4\\0\end{pmatrix} \\
\vec{b} &= \begin{pmatrix}1\\-2\\2\end{pmatrix} \\
\vec{c} &= \begin{pmatrix}-2\\-3\\6\end{pmatrix}
\end{align*}
$$

:::collapsible{title="Musterlösung" id="vec-magnitude-sol-001"}

Formel für den Betrag: $$ |\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2} $$

$$
\begin{align*}
|\vec{a}| &= \sqrt{3^2 + 4^2 + 0^2} = \sqrt{9 + 16 + 0} = \sqrt{25} = 5 \\
|\vec{b}| &= \sqrt{1^2 + (-2)^2 + 2^2} = \sqrt{1 + 4 + 4} = \sqrt{9} = 3 \\
|\vec{c}| &= \sqrt{(-2)^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7
\end{align*}
$$

:::

::::::

::::::collapsible{title="Ich kann Einheitsvektoren bestimmen" id="unit-vectors-001"}

Bestimme die Einheitsvektoren zu den gegebenen Vektoren:

$$
\begin{align*}
\vec{u} &= \begin{pmatrix}6\\0\\8\end{pmatrix} \\
\vec{v} &= \begin{pmatrix}2\\-1\\2\end{pmatrix}
\end{align*}
$$

:::collapsible{title="Musterlösung" id="unit-vectors-sol-001"}

Einheitsvektor: $$ \vec{e} = \frac{\vec{v}}{|\vec{v}|} $$

Für $\vec{u}$:

$$ |\vec{u}| = \sqrt{6^2 + 0^2 + 8^2} = \sqrt{36 + 64} = 10 $$

$$ \vec{e_u} = \frac{1}{10} \begin{pmatrix}6\\0\\8\end{pmatrix} = \begin{pmatrix}0{,}6\\0\\0{,}8\end{pmatrix} $$

Für $\vec{v}$:

$$ |\vec{v}| = \sqrt{2^2 + (-1)^2 + 2^2} = \sqrt{4 + 1 + 4} = 3 $$

$$ \vec{e_v} = \frac{1}{3} \begin{pmatrix}2\\-1\\2\end{pmatrix} = \begin{pmatrix}\frac{2}{3}\\-\frac{1}{3}\\\frac{2}{3}\end{pmatrix} $$

:::

::::::

::::::collapsible{title="Ich kann das Skalarprodukt berechnen" id="scalar-product-001"}

Berechne die Skalarprodukte:

a) $$ \vec{a} = \begin{pmatrix}2\\3\\-1\end{pmatrix} $$, $$ \vec{b} = \begin{pmatrix}1\\-2\\4\end{pmatrix} $$

b) $$ \vec{c} = \begin{pmatrix}5\\0\\-3\end{pmatrix} $$, $$ \vec{d} = \begin{pmatrix}2\\7\\1\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="scalar-product-sol-001"}

Formel: $$ \vec{u} \cdot \vec{v} = u_1v_1 + u_2v_2 + u_3v_3 $$

a) $$ \vec{a} \cdot \vec{b} = 2 \cdot 1 + 3 \cdot (-2) + (-1) \cdot 4 = 2 - 6 - 4 = -8 $$

b) $$ \vec{c} \cdot \vec{d} = 5 \cdot 2 + 0 \cdot 7 + (-3) \cdot 1 = 10 + 0 - 3 = 7 $$

:::

::::::

::::::collapsible{title="Ich kann Orthogonalität prüfen" id="orthogonality-001"}

Prüfe, ob die folgenden Vektorpaare orthogonal sind:

a) $$ \vec{p} = \begin{pmatrix}3\\-2\\1\end{pmatrix} $$, $$ \vec{q} = \begin{pmatrix}2\\3\\0\end{pmatrix} $$

b) $$ \vec{r} = \begin{pmatrix}1\\-1\\1\end{pmatrix} $$, $$ \vec{s} = \begin{pmatrix}1\\2\\1\end{pmatrix} $$

c) $$ \vec{v} = \begin{pmatrix}1\\-2\\3\end{pmatrix} $$, $$ \vec{w} = \begin{pmatrix}4\\5\\6\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="orthogonality-sol-001"}

Zwei Vektoren sind orthogonal, wenn ihr Skalarprodukt null ist.

a) $$ \vec{p} \cdot \vec{q} = 3 \cdot 2 + (-2) \cdot 3 + 1 \cdot 0 = 6 - 6 + 0 = 0 $$
→ Die Vektoren sind **orthogonal**.

b) $$ \vec{r} \cdot \vec{s} = 1 \cdot 1 + (-1) \cdot 2 + 1 \cdot 1 = 1 - 2 + 1 = 0 $$
→ Die Vektoren sind **orthogonal**.

c) $$ \vec{v} \cdot \vec{w} = 1 \cdot 4 + (-2) \cdot 5 + 3 \cdot 6 = 4 - 10 + 18 = 12 $$
→ Die Vektoren sind **nicht** orthogonal.

:::

::::::

::::::collapsible{title="Ich kann einen orthogonalen Vektor angeben" id="orthogonality-002"}

Gib einen Vektor an, der orthogonal zu den folgenden Vektoren ist:

a) $$ \vec{a} = \begin{pmatrix}1\\2\\3\end{pmatrix} $$

b) $$ \vec{b} = \begin{pmatrix}4\\0\\-1\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="orthogonality-sol-002"}

a) $$ \vec{n} = \begin{pmatrix}2\\-1\\0\end{pmatrix} $$ (Beispiel)

Da $$ \vec{a} \cdot \vec{n} = 1 \cdot 2 + 2 \cdot (-1) + 3 \cdot 0 = 2 - 2 + 0 = 0 $$

b) $$ \vec{m} = \begin{pmatrix}1\\0\\4\end{pmatrix} $$ (Beispiel)

Da $$ \vec{b} \cdot \vec{m} = 4 \cdot 1 + 0 \cdot 0 + (-1) \cdot 4 = 4 + 0 - 4 = 0 $$

:::

::::::

::::::collapsible{title="Ich kann Winkel zwischen Vektoren berechnen" id="vector-angles-001"}

Berechne den Winkel zwischen den Vektoren:

a) $$ \vec{a} = \begin{pmatrix}1\\0\\0\end{pmatrix} $$, $$ \vec{b} = \begin{pmatrix}1\\1\\0\end{pmatrix} $$

b) $$ \vec{c} = \begin{pmatrix}2\\2\\1\end{pmatrix} $$, $$ \vec{d} = \begin{pmatrix}1\\-1\\2\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="vector-angles-sol-001"}

Formel: $$ \cos(\alpha) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} $$

a) Für $\vec{a}$ und $\vec{b}$:

$$
\begin{align*}
\vec{a} \cdot \vec{b} &= 1 \cdot 1 + 0 \cdot 1 + 0 \cdot 0 = 1 \\
|\vec{a}| &= 1, \quad |\vec{b}| = \sqrt{1 + 1} = \sqrt{2} \\
\cos(\alpha) &= \frac{1}{1 \cdot \sqrt{2}} = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2}
\end{align*}
$$

Daher ist $\alpha = 45°$.

b) Für $\vec{c}$ und $\vec{d}$:

$$
\begin{align*}
\vec{c} \cdot \vec{d} &= 2 \cdot 1 + 2 \cdot (-1) + 1 \cdot 2 = 2 - 2 + 2 = 2 \\
|\vec{c}| &= \sqrt{4 + 4 + 1} = 3, \quad |\vec{d}| = \sqrt{1 + 1 + 4} = \sqrt{6} \\
\cos(\alpha) &= \frac{2}{3\sqrt{6}} = \frac{2\sqrt{6}}{18} = \frac{\sqrt{6}}{9}
\end{align*}
$$

Daher ist $\alpha \approx 74{,}21°$.

:::

::::::

::::::collapsible{title="Ich kann Geraden in Parameterform aufstellen" id="parametric-lines-001"}

Stelle die Geradengleichungen in Parameterform auf:

a) Gerade durch $A(1|2|3)$ und $B(4|0|-1)$

b) Gerade durch $P(-1|1|2)$ mit Richtungsvektor $\vec{v} = \begin{pmatrix}2\\-3\\1\end{pmatrix}$

:::collapsible{title="Musterlösung" id="parametric-lines-sol-001"}

Allgemeine Form: $$ g: \vec{x} = \vec{a} + t \cdot \vec{v} $$

a) Richtungsvektor: $$ \vec{AB} = \begin{pmatrix}4\\0\\-1\end{pmatrix} - \begin{pmatrix}1\\2\\3\end{pmatrix} = \begin{pmatrix}3\\-2\\-4\end{pmatrix} $$

Geradengleichung: $$ g: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}3\\-2\\-4\end{pmatrix} $$

b) Geradengleichung: $$ g: \vec{x} = \begin{pmatrix}-1\\1\\2\end{pmatrix} + t \cdot \begin{pmatrix}2\\-3\\1\end{pmatrix} $$

:::

::::::

::::::collapsible{title="Ich kann Punktproben bei Geraden durchführen" id="point-on-line-001"}

Prüfe, ob die Punkte auf den gegebenen Geraden liegen:

a) $P(7|1|5)$ auf $g: \vec{x} = \begin{pmatrix}1\\3\\1\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\2\end{pmatrix}$

b) $Q(0|4|2)$ auf $h: \vec{x} = \begin{pmatrix}2\\2\\0\end{pmatrix} + s \cdot \begin{pmatrix}-1\\1\\1\end{pmatrix}$

:::collapsible{title="Musterlösung" id="point-on-line-sol-001"}

a) Ansatz: $$ \begin{pmatrix}7\\1\\5\end{pmatrix} = \begin{pmatrix}1\\3\\1\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\2\end{pmatrix} $$

Komponentenweise:

$$
\begin{align*}
x: \quad 7 &= 1 + 2t \quad \Rightarrow \quad t = 3 \\
y: \quad 1 &= 3 - t \quad \Rightarrow \quad t = 2 \\
z: \quad 5 &= 1 + 2t \quad \Rightarrow \quad t = 2
\end{align*}
$$

Widerspruch: $t = 3$ vs. $t = 2$. Punkt $P$ liegt **nicht** auf der Geraden.

b) Ansatz: $$ \begin{pmatrix}0\\4\\2\end{pmatrix} = \begin{pmatrix}2\\2\\0\end{pmatrix} + s \cdot \begin{pmatrix}-1\\1\\1\end{pmatrix} $$

Komponentenweise:

$$
\begin{align*}
x: \quad 0 &= 2 - s \quad \Rightarrow \quad s = 2 \\
y: \quad 4 &= 2 + s \quad \Rightarrow \quad s = 2 \\
z: \quad 2 &= 0 + s \quad \Rightarrow \quad s = 2
\end{align*}
$$

Alle Gleichungen ergeben $s = 2$. Punkt $Q$ liegt **auf** der Geraden.

:::

::::::

::::::collapsible{title="Ich kann Lagebeziehungen von Geraden bestimmen" id="line-relationships-001"}

Bestimme die Lagebeziehung der Geraden:

$$ g_1: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} $$

$$ g_2: \vec{x} = \begin{pmatrix}3\\2\\0\end{pmatrix} + s \cdot \begin{pmatrix}4\\2\\-2\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="line-relationships-sol-001"}

Richtungsvektoren vergleichen:
$$ \vec{v_1} = \begin{pmatrix}2\\1\\-1\end{pmatrix}, \quad \vec{v_2} = \begin{pmatrix}4\\2\\-2\end{pmatrix} $$

$$ \vec{v_2} = 2 \cdot \vec{v_1} $$ → Richtungsvektoren sind kollinear.

Die Geraden sind **parallel** oder **identisch**.

Prüfung: Liegt $(1|0|2)$ auf $g_2$?
$$ \begin{pmatrix}1\\0\\2\end{pmatrix} = \begin{pmatrix}3\\2\\0\end{pmatrix} + s \cdot \begin{pmatrix}4\\2\\-2\end{pmatrix} $$

$$
\begin{align*}
x: \quad 1 &= 3 + 4s \quad \Rightarrow \quad s = -\frac{1}{2} \\
y: \quad 0 &= 2 + 2s \quad \Rightarrow \quad s = -1
\end{align*}
$$

Widerspruch → Die Geraden sind **echt parallel**.

:::

::::::

::::::collapsible{title="Ich kann Schnittwinkel von Geraden berechnen" id="line-intersection-angles-001"}

Berechne den Schnittwinkel der Geraden. Gehe davon aus, dass die Gerade sich schneiden:

$$ g: \vec{x} = \begin{pmatrix}0\\1\\2\end{pmatrix} + t \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} $$

$$ h: \vec{x} = \begin{pmatrix}2\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\2\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="line-intersection-angles-sol-001"}

Formel für Schnittwinkel: $$ \cos(\alpha) = \frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|} $$

Mit $\vec{v_1} = \begin{pmatrix}1\\0\\1\end{pmatrix}$ und $\vec{v_2} = \begin{pmatrix}0\\1\\2\end{pmatrix}$:

$$
\begin{align*}
\vec{v_1} \cdot \vec{v_2} &= 1 \cdot 0 + 0 \cdot 1 + 1 \cdot 2 = 2 \\
|\vec{v_1}| &= \sqrt{1 + 0 + 1} = \sqrt{2} \\
|\vec{v_2}| &= \sqrt{0 + 1 + 4} = \sqrt{5} \\
\cos(\alpha) &= \frac{|2|}{\sqrt{2} \cdot \sqrt{5}} = \frac{2}{\sqrt{10}} = \frac{2\sqrt{10}}{10} = \frac{\sqrt{10}}{5}
\end{align*}
$$

Daher ist $\alpha \approx 50{,}8°$.

:::

::::::

::::::collapsible{title="Ich kann Ebenen in Parameterform aufstellen" id="parametric-planes-001"}

Stelle die Ebenengleichung in Parameterform auf durch die Punkte:

$A(1|0|2)$, $B(3|1|0)$, $C(0|2|1)$

:::collapsible{title="Musterlösung" id="parametric-planes-sol-001"}

Stützvektor: $$ \vec{OA} = \begin{pmatrix}1\\0\\2\end{pmatrix} $$

Spannvektoren:

$$
\begin{align*}
\vec{AB} &= \begin{pmatrix}3\\1\\0\end{pmatrix} - \begin{pmatrix}1\\0\\2\end{pmatrix} = \begin{pmatrix}2\\1\\-2\end{pmatrix} \\
\vec{AC} &= \begin{pmatrix}0\\2\\1\end{pmatrix} - \begin{pmatrix}1\\0\\2\end{pmatrix} = \begin{pmatrix}-1\\2\\-1\end{pmatrix}
\end{align*}
$$

Ebenengleichung:
$$ E: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}2\\1\\-2\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\-1\end{pmatrix} $$

:::

::::::

::::::collapsible{title="Ich kann Punktproben bei Ebenen durchführen" id="point-on-plane-001"}

Prüfe, ob der Punkt $P(2|3|1)$ auf der Ebene liegt:

$$ E: \vec{x} = \begin{pmatrix}1\\1\\2\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\2\\-1\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="point-on-plane-sol-001"}

Ansatz: $$ \begin{pmatrix}2\\3\\1\end{pmatrix} = \begin{pmatrix}1\\1\\2\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\2\\-1\end{pmatrix} $$

Gleichungssystem:

$$
\begin{align*}
x: \quad 2 &= 1 + r \quad \Rightarrow \quad r = 1 \\
y: \quad 3 &= 1 + 2s \quad \Rightarrow \quad s = 1 \\
z: \quad 1 &= 2 + r - s = 2 + 1 - 1 = 2
\end{align*}
$$

Widerspruch in der z-Komponente: $1 \neq 2$.

Der Punkt $P$ liegt **nicht** auf der Ebene.

:::

::::::

::::::collapsible{title="Ich kann Ebenen in Koordinatenform umwandeln" id="coordinate-form-planes-001"}

Wandle die Ebene in Koordinatenform um:

$$ E: \vec{x} = \begin{pmatrix}2\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\2\end{pmatrix} $$

:::collapsible{title="Musterlösung" id="coordinate-form-planes-sol-001"}

Normalenvektor durch Kreuzprodukt der Spannvektoren:

$$ \vec{n} = \begin{pmatrix}1\\1\\0\end{pmatrix} \times \begin{pmatrix}0\\1\\2\end{pmatrix} = \begin{pmatrix}1 \cdot 2 - 0 \cdot 1\\0 \cdot 0 - 1 \cdot 2\\1 \cdot 1 - 1 \cdot 0\end{pmatrix} = \begin{pmatrix}2\\-2\\1\end{pmatrix} $$

Koordinatenform: $$ 2x - 2y + z = d $$

Bestimmung von $d$ mit Stützpunkt $(2|0|1)$:
$$ d = 2 \cdot 2 - 2 \cdot 0 + 1 \cdot 1 = 4 + 1 = 5 $$

**Koordinatenform:** $$ 2x - 2y + z = 5 $$

:::

::::::

::::::collapsible{title="Ich kann Abstände von Punkten zu Ebenen berechnen" id="point-plane-distance-001"}

Berechne den Abstand des Punktes $P(1|2|3)$ zur Ebene $E: 2x + y - 2z = 6$.

:::collapsible{title="Musterlösung" id="point-plane-distance-sol-001"}

Formel für Punkt-Ebene-Abstand:
$$ d = \frac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2 + b^2 + c^2}} $$

Mit $P(1|2|3)$ und $E: 2x + y - 2z - 6 = 0$:

$$ d = \frac{|2 \cdot 1 + 1 \cdot 2 + (-2) \cdot 3 - 6|}{\sqrt{2^2 + 1^2 + (-2)^2}} $$

$$ d = \frac{|2 + 2 - 6 - 6|}{\sqrt{4 + 1 + 4}} = \frac{|-8|}{3} = \frac{8}{3} $$

Der Abstand beträgt $\frac{8}{3}$ Längeneinheiten.

:::

::::::

::::::collapsible{title="Ich kann Lagebeziehungen von Geraden und Ebenen bestimmen" id="line-plane-relationships-001"}

Bestimme die Lagebeziehung der Gerade und Ebene:

$$ g: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} $$

$$ E: x + 2y - z = 3 $$

:::collapsible{title="Musterlösung" id="line-plane-relationships-sol-001"}

Normalenvektor der Ebene: $$ \vec{n} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$
Richtungsvektor der Gerade: $$ \vec{v} = \begin{pmatrix}2\\1\\-1\end{pmatrix} $$

Prüfung auf Parallelität: $$ \vec{n} \cdot \vec{v} = 1 \cdot 2 + 2 \cdot 1 + (-1) \cdot (-1) = 2 + 2 + 1 = 5 \neq 0 $$

Da das Skalarprodukt ungleich null ist, sind Gerade und Ebene **nicht parallel**.

Schnittpunkt bestimmen:
Setze Gerade in Ebene ein: $$ (1 + 2t) + 2(0 + t) - (2 - t) = 3 $$

$$ 1 + 2t + 2t - 2 + t = 3 $$
$$ 5t - 1 = 3 $$
$$ t = \frac{4}{5} $$

Schnittpunkt: $$ S = \begin{pmatrix}1\\0\\2\end{pmatrix} + \frac{4}{5} \begin{pmatrix}2\\1\\-1\end{pmatrix} = \begin{pmatrix}\frac{13}{5}\\\frac{4}{5}\\\frac{6}{5}\end{pmatrix} $$

Die Gerade **schneidet** die Ebene im Punkt $S$.

:::

::::::
