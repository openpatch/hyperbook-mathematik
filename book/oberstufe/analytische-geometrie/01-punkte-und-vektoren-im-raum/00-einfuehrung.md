---
name: 💡 Einführung
lang: de
index: 0
---

# Punkte und Vektoren im Raum

## Vom zweidimensionalen zum dreidimensionalen Raum

In der Mittelstufe hast du bereits mit Punkten und Vektoren in der Ebene (2D) gearbeitet. Nun erweitern wir unser Wissen auf den dreidimensionalen Raum.

![Koordinatensystem](https://via.placeholder.com/400x300/397b96/ffffff?text=3D+Koordinatensystem)

## Forschungsauftrag

Betrachte die folgenden Punkte im dreidimensionalen Raum:
- $$ A(2|3|1) $$
- $$ B(5|1|4) $$
- $$ C(1|6|2) $$

1. Wie viele Koordinaten benötigt man zur Beschreibung eines Punktes im Raum?

:::collapsible{title="Lösung" id="a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Im dreidimensionalen Raum benötigt man drei Koordinaten: x-, y- und z-Koordinate.

:::

2. Welche Achsen gibt es in einem dreidimensionalen Koordinatensystem?

:::collapsible{title="Lösung" id="b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Es gibt drei Achsen:
- x-Achse (horizontale Achse)
- y-Achse (vertikale Achse in der Ebene)
- z-Achse (räumliche Tiefe)

:::

3. Bestimme den Vektor $$ \vec{AB} $$ von A nach B.

:::collapsible{title="Lösung" id="c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{AB} = B - A = \begin{pmatrix}5\\1\\4\end{pmatrix} - \begin{pmatrix}2\\3\\1\end{pmatrix} = \begin{pmatrix}3\\-2\\3\end{pmatrix} $$

:::

## Definition: Vektor im Raum

:::snippet{#definition}

Ein **Vektor im Raum** ist eine gerichtete Strecke, die durch drei Komponenten beschrieben wird:

$$ \vec{v} = \begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix} $$

wobei $v_1$, $v_2$ und $v_3$ die Komponenten in x-, y- und z-Richtung sind.

:::

## Betrag eines Vektors

:::snippet{#definition}

Der **Betrag** (oder die **Länge**) eines Vektors $$ \vec{v} = \begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix} $$ wird berechnet durch:

$$ |\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2} $$

:::

### Beispiel

Gegeben sei der Vektor $$ \vec{v} = \begin{pmatrix}3\\-2\\6\end{pmatrix} $$.

:::snippet{#beispiel}

Berechnung des Betrags:

$$ |\vec{v}| = \sqrt{3^2 + (-2)^2 + 6^2} = \sqrt{9 + 4 + 36} = \sqrt{49} = 7 $$

:::

## Einheitsvektor

:::snippet{#definition}

Ein **Einheitsvektor** ist ein Vektor mit der Länge 1. Jeden Vektor $$ \vec{v} $$ kann man in einen Einheitsvektor umwandeln durch:

$$ \vec{e} = \frac{\vec{v}}{|\vec{v}|} $$

:::