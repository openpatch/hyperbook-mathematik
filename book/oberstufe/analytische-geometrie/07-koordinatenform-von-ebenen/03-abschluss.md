---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Koordinatenform**: $ax + by + cz = d$ mit Normalenvektor $\vec{n} = \begin{pmatrix}a\\b\\c\end{pmatrix}$

:::

:::snippet{#merken}

**Kreuzprodukt**: $\vec{u} \times \vec{v}$ ergibt einen Vektor senkrecht zu beiden Ausgangsvektoren

:::

:::snippet{#merken}

**Abstand Punkt-Ebene**: $d(P,E) = \frac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2 + b^2 + c^2}}$

:::

# Prüfe dich

## Aufgabe 1: Koordinatenform bestimmen

:::snippet{#aufgabe}
Bestimme die Koordinatenform der Ebene durch die Punkte $A(1|0|1)$, $B(2|1|0)$ und $C(0|1|2)$.
:::

:::collapsible{title="Musterlösung" id="c6eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Spannvektoren**:
- $\vec{AB} = \begin{pmatrix}1\\1\\-1\end{pmatrix}$
- $\vec{AC} = \begin{pmatrix}-1\\1\\1\end{pmatrix}$

**Normalenvektor**: $\vec{n} = \vec{AB} \times \vec{AC} = \begin{pmatrix}2\\0\\2\end{pmatrix}$

**Koordinatenform**: $2x + 2z = d$

Mit Punkt A: $2 \cdot 1 + 2 \cdot 1 = 4$

**Ergebnis**: $2x + 2z = 4$ oder vereinfacht: $x + z = 2$

:::

## Aufgabe 2: Abstand berechnen

:::snippet{#aufgabe}
Berechne den Abstand des Punktes $P(3|2|1)$ zur Ebene $x + 2y + 2z = 9$.
:::

:::collapsible{title="Musterlösung" id="d6eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$d(P,E) = \frac{|3 + 2 \cdot 2 + 2 \cdot 1 - 9|}{\sqrt{1^2 + 2^2 + 2^2}} = \frac{|9 - 9|}{3} = 0$

Der Punkt liegt auf der Ebene (Abstand = 0).

:::