---
name: 🔖 Formel
lang: de
index: 1
---

# Formeln für die Parameterform von Ebenen

## Hauptformel

:::snippet{#definition}

Die **Parameterform** einer Ebene lautet:

$$ E: \vec{x} = \vec{a} + r \cdot \vec{u} + s \cdot \vec{v} $$

mit:
- $\vec{x}$: Ortsvektor eines beliebigen Punktes auf der Ebene
- $\vec{a}$: Stützvektor (Ortsvektor eines festen Punktes auf der Ebene)
- $\vec{u}, \vec{v}$: Spannvektoren (nicht parallel!)
- $r, s \in \mathbb{R}$: Parameter

:::

## Ebene durch drei Punkte

:::snippet{#satz}

Eine Ebene durch die Punkte $$ A(x_1|y_1|z_1) $$, $$ B(x_2|y_2|z_2) $$ und $$ C(x_3|y_3|z_3) $$ hat die Gleichung:

$$ E: \vec{x} = \vec{OA} + r \cdot \vec{AB} + s \cdot \vec{AC} $$

mit den Spannvektoren:
- $$ \vec{AB} = \begin{pmatrix}x_2 - x_1\\y_2 - y_1\\z_2 - z_1\end{pmatrix} $$
- $$ \vec{AC} = \begin{pmatrix}x_3 - x_1\\y_3 - y_1\\z_3 - z_1\end{pmatrix} $$

**Bedingung**: A, B, C dürfen nicht kollinear sein.

:::

### Beispiel

:::snippet{#beispiel}

Ebene durch $$ A(1|0|2) $$, $$ B(3|1|1) $$ und $$ C(0|2|3) $$:

**Spannvektoren**:
- $$ \vec{AB} = \begin{pmatrix}2\\1\\-1\end{pmatrix} $$
- $$ \vec{AC} = \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

:::

## Punktprobe

:::snippet{#satz}

Ein Punkt $$ P(x_P|y_P|z_P) $$ liegt auf der Ebene $$ E: \vec{x} = \vec{a} + r \cdot \vec{u} + s \cdot \vec{v} $$, wenn die Gleichung:

$$ \begin{pmatrix}x_P\\y_P\\z_P\end{pmatrix} = \vec{a} + r \cdot \vec{u} + s \cdot \vec{v} $$

eine Lösung für $r$ und $s$ besitzt.

:::

### Beispiel

:::snippet{#beispiel}

Liegt $$ P(4|3|0) $$ auf $$ E: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\1\end{pmatrix} $$?

Ansatz: $$ \begin{pmatrix}4\\3\\0\end{pmatrix} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

Gleichungssystem:
\begin{align*}
x: \quad 4 &= 1 + 2r - s \quad \Rightarrow \quad 2r - s = 3 \\
y: \quad 3 &= 0 + r + 2s \quad \Rightarrow \quad r + 2s = 3 \\
z: \quad 0 &= 2 - r + s \quad \Rightarrow \quad -r + s = -2
\end{align*}

Lösung: $r = 1, s = 1$ → Ja, P liegt auf der Ebene.

:::

## Lineare Unabhängigkeit der Spannvektoren

:::snippet{#definition}

Die Spannvektoren $\vec{u}$ und $\vec{v}$ müssen **linear unabhängig** sein:

$$ \vec{u} \neq k \cdot \vec{v} $$ für alle $k \in \mathbb{R}$

Falls sie linear abhängig sind, beschreibt die Gleichung nur eine Gerade.

:::

### Prüfung der linearen Unabhängigkeit

:::snippet{#beispiel}

Prüfe: $$ \vec{u} = \begin{pmatrix}2\\1\\3\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}4\\2\\6\end{pmatrix} $$

$$ \vec{v} = 2 \cdot \vec{u} $$ → Die Vektoren sind linear abhängig!

Diese "Ebenengleichung" beschreibt nur eine Gerade.

:::

## Normalenvektor (Vorausblick)

:::snippet{#definition}

Ein **Normalenvektor** $\vec{n}$ steht senkrecht auf der Ebene und kann aus den Spannvektoren berechnet werden:

$$ \vec{n} = \vec{u} \times \vec{v} $$ (Kreuzprodukt)

:::

### Beispiel

:::snippet{#beispiel}

Für $$ \vec{u} = \begin{pmatrix}1\\0\\1\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}0\\1\\1\end{pmatrix} $$:

$$ \vec{n} = \vec{u} \times \vec{v} = \begin{pmatrix}-1\\-1\\1\end{pmatrix} $$

:::

## Verschiedene Darstellungen derselben Ebene

:::snippet{#merken}

Eine Ebene kann unendlich viele verschiedene Parameterdarstellungen haben:
- Verschiedene Stützvektoren (verschiedene Punkte auf der Ebene)
- Verschiedene Spannvektoren (Vielfache, Linearkombinationen)

:::

### Beispiel

:::snippet{#beispiel}

Diese Darstellungen beschreiben dieselbe Ebene:

$$ E_1: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\0\end{pmatrix} $$

$$ E_2: \vec{x} = \begin{pmatrix}1\\1\\0\end{pmatrix} + u \cdot \begin{pmatrix}2\\0\\0\end{pmatrix} + v \cdot \begin{pmatrix}0\\3\\0\end{pmatrix} $$

Beide beschreiben die xy-Ebene ($z = 0$).

:::