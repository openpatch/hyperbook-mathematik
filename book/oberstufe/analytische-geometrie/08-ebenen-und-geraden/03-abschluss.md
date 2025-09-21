---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Lagebeziehungen Gerade-Ebene**:
- Gerade in Ebene: $\vec{v} \cdot \vec{n} = 0$ und Stützpunkt in Ebene
- Gerade schneidet Ebene: $\vec{v} \cdot \vec{n} \neq 0$  
- Gerade parallel zu Ebene: $\vec{v} \cdot \vec{n} = 0$ und Stützpunkt nicht in Ebene

:::

:::snippet{#merken}

**Schnittpunkt**: Geradengleichung in Ebenengleichung einsetzen und nach Parameter auflösen

:::

:::snippet{#merken}

**Winkel Gerade-Ebene**: $\sin(\alpha) = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{v}| \cdot |\vec{n}|}$

:::

# Prüfe dich

## Aufgabe 1: Schnittpunkt bestimmen

:::snippet{#aufgabe}
Bestimme den Schnittpunkt von $g: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix}$ und $E: x + 2y + z = 5$.
:::

:::collapsible{title="Musterlösung" id="c7eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Einsetzen: $(1+2t) + 2(2-t) + (0+3t) = 5$
$1 + 2t + 4 - 2t + 3t = 5$
$5 + 3t = 5 \Rightarrow t = 0$

Schnittpunkt: $S = \begin{pmatrix}1\\2\\0\end{pmatrix}$

:::

## Aufgabe 2: Lagebeziehung

:::snippet{#aufgabe}
Untersuche die Lagebeziehung zwischen $g: \vec{x} = \begin{pmatrix}0\\1\\2\end{pmatrix} + t \cdot \begin{pmatrix}1\\-2\\1\end{pmatrix}$ und $E: x + 2y - z = 0$.
:::

:::collapsible{title="Musterlösung" id="d7eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$\vec{v} \cdot \vec{n} = 1 \cdot 1 + (-2) \cdot 2 + 1 \cdot (-1) = 1 - 4 - 1 = -4 \neq 0$

Da das Skalarprodukt ungleich null ist, **schneidet** die Gerade die Ebene.

:::