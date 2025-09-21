---
name: 🔖 Formel
lang: de
index: 1
---

# Formeln für die Koordinatenform von Ebenen

## Koordinatenform

:::snippet{#definition}

Die **Koordinatenform** (Normalenform) einer Ebene lautet:

$$ ax + by + cz = d $$

Der **Normalenvektor** ist $\vec{n} = \begin{pmatrix}a\\b\\c\end{pmatrix}$.

:::

## Kreuzprodukt

:::snippet{#satz}

Das **Kreuzprodukt** zweier Vektoren $\vec{u} = \begin{pmatrix}u_1\\u_2\\u_3\end{pmatrix}$ und $\vec{v} = \begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix}$ ist:

$$ \vec{u} \times \vec{v} = \begin{pmatrix}u_2v_3 - u_3v_2\\u_3v_1 - u_1v_3\\u_1v_2 - u_2v_1\end{pmatrix} $$

:::

## Abstand Punkt-Ebene

:::snippet{#satz}

Der **Abstand** eines Punktes $P(x_0|y_0|z_0)$ zur Ebene $ax + by + cz = d$ ist:

$$ d(P,E) = \frac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2 + b^2 + c^2}} $$

:::

## Hessesche Normalenform

:::snippet{#definition}

Die **Hessesche Normalenform** einer Ebene ist:

$$ \frac{ax + by + cz - d}{\sqrt{a^2 + b^2 + c^2}} = 0 $$

Hier ist der Normalenvektor ein Einheitsvektor.

:::