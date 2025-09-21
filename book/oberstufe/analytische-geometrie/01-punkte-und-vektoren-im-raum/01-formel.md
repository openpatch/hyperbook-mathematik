---
name: 🔖 Formel
lang: de
index: 1
---

# Formeln für Punkte und Vektoren im Raum

## Darstellung von Punkten

:::snippet{#definition}

Ein **Punkt** im dreidimensionalen Raum wird durch drei Koordinaten dargestellt:

$$ P(x|y|z) $$

wobei:
- $x$ die Position auf der x-Achse
- $y$ die Position auf der y-Achse  
- $z$ die Position auf der z-Achse angibt

:::

## Darstellung von Vektoren

:::snippet{#definition}

Ein **Vektor** im dreidimensionalen Raum wird als Spaltenvektor dargestellt:

$$ \vec{v} = \begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix} $$

:::

## Berechnung von Verbindungsvektoren

:::snippet{#satz}

Der **Verbindungsvektor** von Punkt A zu Punkt B wird berechnet durch:

$$ \vec{AB} = B - A = \begin{pmatrix}x_B - x_A\\y_B - y_A\\z_B - z_A\end{pmatrix} $$

:::

### Beispiel

:::snippet{#beispiel}

Gegeben: $$ A(1|2|3) $$ und $$ B(4|1|7) $$

$$ \vec{AB} = \begin{pmatrix}4\\1\\7\end{pmatrix} - \begin{pmatrix}1\\2\\3\end{pmatrix} = \begin{pmatrix}3\\-1\\4\end{pmatrix} $$

:::

## Betrag eines Vektors

:::snippet{#satz}

Der **Betrag** (die Länge) eines Vektors $$ \vec{v} = \begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix} $$ wird berechnet durch:

$$ |\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2} $$

:::

### Beispiel

:::snippet{#beispiel}

Für $$ \vec{v} = \begin{pmatrix}2\\-3\\6\end{pmatrix} $$:

$$ |\vec{v}| = \sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7 $$

:::

## Einheitsvektor

:::snippet{#satz}

Ein **Einheitsvektor** $$ \vec{e} $$ zu einem gegebenen Vektor $$ \vec{v} $$ wird berechnet durch:

$$ \vec{e} = \frac{\vec{v}}{|\vec{v}|} = \frac{1}{|\vec{v}|} \cdot \vec{v} $$

Ein Einheitsvektor hat immer die Länge 1: $$ |\vec{e}| = 1 $$

:::

### Beispiel

:::snippet{#beispiel}

Für $$ \vec{v} = \begin{pmatrix}3\\0\\4\end{pmatrix} $$:

1. Betrag berechnen: $$ |\vec{v}| = \sqrt{3^2 + 0^2 + 4^2} = \sqrt{9 + 16} = 5 $$

2. Einheitsvektor: $$ \vec{e} = \frac{1}{5} \begin{pmatrix}3\\0\\4\end{pmatrix} = \begin{pmatrix}0{,}6\\0\\0{,}8\end{pmatrix} $$

:::

## Abstand zwischen zwei Punkten

:::snippet{#satz}

Der **Abstand** zwischen zwei Punkten $$ A(x_A|y_A|z_A) $$ und $$ B(x_B|y_B|z_B) $$ wird berechnet durch:

$$ d(A,B) = |\vec{AB}| = \sqrt{(x_B-x_A)^2 + (y_B-y_A)^2 + (z_B-z_A)^2} $$

:::

### Beispiel

:::snippet{#beispiel}

Abstand zwischen $$ P(1|2|3) $$ und $$ Q(4|6|3) $$:

$$ d(P,Q) = \sqrt{(4-1)^2 + (6-2)^2 + (3-3)^2} = \sqrt{9 + 16 + 0} = \sqrt{25} = 5 $$

:::