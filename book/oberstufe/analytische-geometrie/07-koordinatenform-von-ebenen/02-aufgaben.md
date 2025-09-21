---
name: ✏️ Aufgaben
lang: de
index: 2
---

# Aufgaben

## Umwandlung Parameterform → Koordinatenform

:::snippet{#aufgabe}
Wandle die gegebene Parameterform in die Koordinatenform um.
:::

1. $$ E: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="16eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Normalenvektor berechnen**:
$$ \vec{n} = \begin{pmatrix}1\\1\\0\end{pmatrix} \times \begin{pmatrix}0\\1\\1\end{pmatrix} = \begin{pmatrix}1\\-1\\1\end{pmatrix} $$

**Koordinatenform**: $$ x - y + z = d $$

**Parameter d bestimmen** mit Stützpunkt $(1|0|2)$:
$$ 1 - 0 + 2 = 3 $$

**Ergebnis**: $$ x - y + z = 3 $$

:::

## Abstand Punkt-Ebene

:::snippet{#aufgabe}
Berechne den Abstand des Punktes zur Ebene.
:::

Punkt: $$ P(2|1|3) $$, Ebene: $$ 2x + y - 2z = 4 $$

:::collapsible{title="Lösung" id="26eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ d(P,E) = \frac{|2 \cdot 2 + 1 \cdot 1 - 2 \cdot 3 - 4|}{\sqrt{2^2 + 1^2 + (-2)^2}} = \frac{|4 + 1 - 6 - 4|}{\sqrt{9}} = \frac{5}{3} $$

:::

## Punktprobe

:::snippet{#aufgabe}
Prüfe, ob der Punkt auf der Ebene liegt.
:::

Punkt: $$ Q(1|2|3) $$, Ebene: $$ x + 2y - z = 2 $$

:::collapsible{title="Lösung" id="36eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Einsetzen: $$ 1 + 2 \cdot 2 - 3 = 1 + 4 - 3 = 2 $$

Da $2 = 2$, liegt Q auf der Ebene.

:::