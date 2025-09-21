---
name: 🔖 Formel
lang: de
index: 1
---

# Formeln für Geraden im Raum

## Parameterform einer Geraden

:::snippet{#definition}

Die **Parameterform** einer Geraden im Raum lautet:

$$ g: \vec{x} = \vec{a} + t \cdot \vec{v} $$

mit:
- $\vec{x}$: Ortsvektor eines beliebigen Punktes auf der Geraden
- $\vec{a}$: Ortsvektor eines festen Punktes auf der Geraden (Stützvektor)
- $\vec{v}$: Richtungsvektor der Geraden
- $t \in \mathbb{R}$: Parameter

:::

## Gerade durch zwei Punkte

:::snippet{#satz}

Eine Gerade durch die Punkte $$ A(x_1|y_1|z_1) $$ und $$ B(x_2|y_2|z_2) $$ hat die Gleichung:

$$ g: \vec{x} = \vec{OA} + t \cdot \vec{AB} $$

mit dem Richtungsvektor:
$$ \vec{AB} = \begin{pmatrix}x_2 - x_1\\y_2 - y_1\\z_2 - z_1\end{pmatrix} $$

:::

### Beispiel

:::snippet{#beispiel}

Gerade durch $$ A(1|2|3) $$ und $$ B(4|1|5) $$:

$$ \vec{AB} = \begin{pmatrix}4-1\\1-2\\5-3\end{pmatrix} = \begin{pmatrix}3\\-1\\2\end{pmatrix} $$

$$ g: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}3\\-1\\2\end{pmatrix} $$

:::

## Punktprobe

:::snippet{#satz}

Ein Punkt $$ P(x_P|y_P|z_P) $$ liegt auf der Geraden $$ g: \vec{x} = \vec{a} + t \cdot \vec{v} $$, wenn die Gleichung:

$$ \begin{pmatrix}x_P\\y_P\\z_P\end{pmatrix} = \vec{a} + t \cdot \vec{v} $$

eine Lösung für $t$ besitzt.

:::

### Beispiel

:::snippet{#beispiel}

Liegt $$ P(7|0|7) $$ auf $$ g: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}3\\-1\\2\end{pmatrix} $$?

Ansatz: $$ \begin{pmatrix}7\\0\\7\end{pmatrix} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}3\\-1\\2\end{pmatrix} $$

Komponentenweise:
- x: $7 = 1 + 3t \Rightarrow t = 2$
- y: $0 = 2 - t \Rightarrow t = 2$
- z: $7 = 3 + 2t \Rightarrow t = 2$

Ja, P liegt auf der Geraden mit $t = 2$.

:::

## Lagebeziehungen von Geraden

:::snippet{#definition}

Zwei Geraden im Raum können folgende Lagebeziehungen haben:

1. **Identisch**: $g_1 = g_2$ (dieselbe Gerade)
2. **Parallel**: $g_1 \parallel g_2$ (gleiche Richtung, kein Schnittpunkt)
3. **Schneidend**: $g_1 \cap g_2 = \{S\}$ (genau ein Schnittpunkt)
4. **Windschief**: kein Schnittpunkt und nicht parallel

:::

## Parallelität prüfen

:::snippet{#satz}

Zwei Geraden sind **parallel**, wenn ihre Richtungsvektoren linear abhängig sind:

$$ \vec{v_1} = k \cdot \vec{v_2} $$ für ein $k \neq 0$

:::

### Beispiel

:::snippet{#beispiel}

$$ g_1: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$

$$ g_2: \vec{x} = \begin{pmatrix}0\\1\\2\end{pmatrix} + s \cdot \begin{pmatrix}4\\-2\\6\end{pmatrix} $$

$$ \vec{v_2} = \begin{pmatrix}4\\-2\\6\end{pmatrix} = 2 \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} = 2 \cdot \vec{v_1} $$

Die Geraden sind parallel.

:::

## Schnittpunkt berechnen

:::snippet{#satz}

Der Schnittpunkt zweier Geraden wird gefunden durch Gleichsetzen:

$$ \vec{a_1} + t \cdot \vec{v_1} = \vec{a_2} + s \cdot \vec{v_2} $$

Dies führt zu einem linearen Gleichungssystem für $t$ und $s$.

:::

### Beispiel

:::snippet{#beispiel}

$$ g_1: \vec{x} = \begin{pmatrix}1\\2\\1\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\2\end{pmatrix} $$

$$ g_2: \vec{x} = \begin{pmatrix}2\\1\\3\end{pmatrix} + s \cdot \begin{pmatrix}2\\1\\1\end{pmatrix} $$

Gleichsetzen:
$$ \begin{pmatrix}1+t\\2+t\\1+2t\end{pmatrix} = \begin{pmatrix}2+2s\\1+s\\3+s\end{pmatrix} $$

System lösen: $t = 1, s = 0$

Schnittpunkt: $$ S = \begin{pmatrix}2\\3\\3\end{pmatrix} $$

:::

## Abstand Punkt-Gerade

:::snippet{#satz}

Der Abstand eines Punktes $P$ zu einer Geraden $g: \vec{x} = \vec{a} + t \cdot \vec{v}$ wird berechnet durch:

$$ d(P,g) = \frac{|\vec{AP} \times \vec{v}|}{|\vec{v}|} $$

wobei $A$ ein beliebiger Punkt auf der Geraden ist und $\times$ das Kreuzprodukt bezeichnet.

:::