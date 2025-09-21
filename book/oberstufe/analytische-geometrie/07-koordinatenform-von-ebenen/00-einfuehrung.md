---
name: 💡 Einführung
lang: de
index: 0
---

# Koordinatenform von Ebenen

## Von der Parameterform zur Koordinatenform

Du kennst bereits die Parameterform einer Ebene. Nun lernst du eine alternative Darstellung kennen: die Koordinatenform (auch Normalenform genannt).

## Was ist die Koordinatenform?

:::snippet{#definition}

Die **Koordinatenform** einer Ebene hat die Gestalt:

$$ ax + by + cz = d $$

wobei $a$, $b$, $c$ und $d$ reelle Zahlen sind.

:::

## Normalenvektor

:::snippet{#definition}

Der **Normalenvektor** $\vec{n} = \begin{pmatrix}a\\b\\c\end{pmatrix}$ steht senkrecht auf der Ebene und bestimmt die Koeffizienten der Koordinatenform.

:::

## Umwandlung: Parameterform → Koordinatenform

:::snippet{#satz}

**Algorithmus**:
1. Normalenvektor berechnen: $\vec{n} = \vec{u} \times \vec{v}$ (Kreuzprodukt)
2. Koordinatenform aufstellen: $n_1x + n_2y + n_3z = d$
3. Parameter $d$ mit einem bekannten Punkt bestimmen

:::

### Beispiel

:::snippet{#beispiel}

Parameterform: $$ E: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\1\end{pmatrix} $$

**Schritt 1**: Normalenvektor
$$ \vec{n} = \begin{pmatrix}1\\0\\1\end{pmatrix} \times \begin{pmatrix}0\\1\\1\end{pmatrix} = \begin{pmatrix}-1\\-1\\1\end{pmatrix} $$

**Schritt 2**: Ansatz der Koordinatenform
$$ -x - y + z = d $$

**Schritt 3**: Mit Stützpunkt $(1|2|0)$
$$ -1 - 2 + 0 = d \Rightarrow d = -3 $$

**Koordinatenform**: $$ -x - y + z = -3 $$

:::

## Umwandlung: Koordinatenform → Parameterform

:::snippet{#satz}

**Algorithmus**:
1. Einen Punkt auf der Ebene finden (einen Koordinatenwert wählen)
2. Zwei linear unabhängige Vektoren finden, die senkrecht zum Normalenvektor stehen
3. Parameterform aufstellen

:::

## Besondere Ebenen

:::snippet{#merken}

**Koordinatenebenen**:
- xy-Ebene: $z = 0$
- xz-Ebene: $y = 0$  
- yz-Ebene: $x = 0$

**Parallele Ebenen** zu den Koordinatenebenen:
- $x = a$, $y = b$, $z = c$

:::