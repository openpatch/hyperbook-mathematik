---
name: ✏️ Aufgaben
lang: de
index: 2
---

# Aufgaben

## Schnittpunkte berechnen

:::snippet{#aufgabe}
Berechne den Schnittpunkt von Gerade und Ebene.
:::

1. Gerade: $g: \vec{x} = \begin{pmatrix}2\\1\\3\end{pmatrix} + t \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix}$
   Ebene: $E: x + y + z = 8$

:::collapsible{title="Lösung" id="17eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Einsetzen**: $(2+t) + (1+2t) + (3-t) = 8$
**Vereinfachen**: $6 + 2t = 8 \Rightarrow t = 1$
**Schnittpunkt**: $S = \begin{pmatrix}3\\3\\2\end{pmatrix}$

:::

## Lagebeziehungen bestimmen

:::snippet{#aufgabe}
Bestimme die Lagebeziehung zwischen Gerade und Ebene.
:::

1. $g: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\0\end{pmatrix}$, $E: 2x - 4y + z = 4$

:::collapsible{title="Lösung" id="27eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Richtungsvektor**: $\vec{v} = \begin{pmatrix}2\\1\\0\end{pmatrix}$
**Normalenvektor**: $\vec{n} = \begin{pmatrix}2\\-4\\1\end{pmatrix}$

**Skalarprodukt**: $\vec{v} \cdot \vec{n} = 4 - 4 + 0 = 0$

Da das Skalarprodukt null ist, ist die Gerade parallel zur Ebene oder liegt in ihr.

**Stützpunkt prüfen**: $2 \cdot 1 - 4 \cdot 0 + 1 \cdot 2 = 4$ ✓

Die Gerade **liegt in der Ebene**.

:::

## Winkel berechnen

:::snippet{#aufgabe}
Berechne den Winkel zwischen Gerade und Ebene.
:::

$g: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\1\end{pmatrix}$, $E: x + y - z = 0$

:::collapsible{title="Lösung" id="37eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$\sin(\alpha) = \frac{|1 \cdot 1 + 1 \cdot 1 + 1 \cdot (-1)|}{\sqrt{3} \cdot \sqrt{3}} = \frac{1}{3}$

$\alpha = \arcsin\left(\frac{1}{3}\right) \approx 19{,}5°$

:::