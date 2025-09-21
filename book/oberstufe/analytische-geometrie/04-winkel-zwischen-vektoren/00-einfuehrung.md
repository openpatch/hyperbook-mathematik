---
name: 💡 Einführung
lang: de
index: 0
---

# Winkel zwischen Vektoren

## Vom Skalarprodukt zum Winkel

Du weißt bereits, wie man das Skalarprodukt zweier Vektoren berechnet. Nun lernst du, wie du mithilfe des Skalarprodukts den Winkel zwischen zwei Vektoren bestimmen kannst.

![Winkel zwischen Vektoren](https://via.placeholder.com/400x300/397b96/ffffff?text=Winkel+zwischen+Vektoren)

## Forschungsauftrag

Betrachte die beiden Vektoren $$ \vec{a} = \begin{pmatrix}3\\0\\0\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}0\\4\\0\end{pmatrix} $$.

1. Zeichne die Vektoren in ein Koordinatensystem. Welchen Winkel schließen sie ein?

:::collapsible{title="Lösung" id="a3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Die Vektoren stehen senkrecht aufeinander. Der eingeschlossene Winkel beträgt 90°.

:::

2. Berechne das Skalarprodukt $$ \vec{a} \cdot \vec{b} $$.

:::collapsible{title="Lösung" id="b3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{a} \cdot \vec{b} = 3 \cdot 0 + 0 \cdot 4 + 0 \cdot 0 = 0 $$

:::

3. Was fällt dir bei orthogonalen (senkrechten) Vektoren und ihrem Skalarprodukt auf?

:::collapsible{title="Lösung" id="c3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Wenn zwei Vektoren orthogonal sind, ist ihr Skalarprodukt null.

:::

## Geometrische Bedeutung des Skalarprodukts

:::snippet{#definition}

Das **Skalarprodukt** zweier Vektoren $\vec{a}$ und $\vec{b}$ kann auch geometrisch interpretiert werden:

$$ \vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\alpha) $$

wobei $\alpha$ der Winkel zwischen den beiden Vektoren ist.

:::

## Herleitung der Winkelformel

Aus der geometrischen Interpretation des Skalarprodukts folgt:

:::snippet{#satz}

Der **Winkel** $\alpha$ zwischen zwei Vektoren $\vec{a}$ und $\vec{b}$ wird berechnet durch:

$$ \cos(\alpha) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} $$

und somit:

$$ \alpha = \arccos\left(\frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|}\right) $$

:::

### Beispiel

:::snippet{#beispiel}

Bestimme den Winkel zwischen $$ \vec{u} = \begin{pmatrix}1\\1\\0\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}1\\0\\1\end{pmatrix} $$.

1. Skalarprodukt: $$ \vec{u} \cdot \vec{v} = 1 \cdot 1 + 1 \cdot 0 + 0 \cdot 1 = 1 $$

2. Beträge: $$ |\vec{u}| = \sqrt{1^2 + 1^2 + 0^2} = \sqrt{2} $$
   $$ |\vec{v}| = \sqrt{1^2 + 0^2 + 1^2} = \sqrt{2} $$

3. Cosinus: $$ \cos(\alpha) = \frac{1}{\sqrt{2} \cdot \sqrt{2}} = \frac{1}{2} $$

4. Winkel: $$ \alpha = \arccos\left(\frac{1}{2}\right) = 60° $$

:::

## Spezialfälle

:::snippet{#merken}

**Spezielle Winkel**:
- $\alpha = 0°$: Vektoren zeigen in dieselbe Richtung (parallel)
- $\alpha = 90°$: Vektoren sind orthogonal (senkrecht)
- $\alpha = 180°$: Vektoren zeigen in entgegengesetzte Richtungen (antiparallel)

:::

### Forschungsauftrag: Spezialfälle untersuchen

Überprüfe die folgenden Aussagen:

1. Wenn $\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}|$, dann ist $\alpha = 0°$.

:::collapsible{title="Lösung" id="d3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \cos(\alpha) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} = \frac{|\vec{a}| \cdot |\vec{b}|}{|\vec{a}| \cdot |\vec{b}|} = 1 $$

$$ \alpha = \arccos(1) = 0° $$

Die Aussage ist richtig.

:::

2. Wenn $\vec{a} \cdot \vec{b} = 0$, dann ist $\alpha = 90°$.

:::collapsible{title="Lösung" id="e3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \cos(\alpha) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} = \frac{0}{|\vec{a}| \cdot |\vec{b}|} = 0 $$

$$ \alpha = \arccos(0) = 90° $$

Die Aussage ist richtig.

:::

3. Wenn $\vec{a} \cdot \vec{b} = -|\vec{a}| \cdot |\vec{b}|$, dann ist $\alpha = 180°$.

:::collapsible{title="Lösung" id="f3eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \cos(\alpha) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} = \frac{-|\vec{a}| \cdot |\vec{b}|}{|\vec{a}| \cdot |\vec{b}|} = -1 $$

$$ \alpha = \arccos(-1) = 180° $$

Die Aussage ist richtig.

:::