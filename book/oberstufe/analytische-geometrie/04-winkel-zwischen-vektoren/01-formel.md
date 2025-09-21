---
name: 🔖 Formel
lang: de
index: 1
---

# Formeln für Winkel zwischen Vektoren

## Hauptformel

:::snippet{#satz}

Der **Winkel** $\alpha$ zwischen zwei Vektoren $\vec{a}$ und $\vec{b}$ wird berechnet durch:

$$ \alpha = \arccos\left(\frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|}\right) $$

Der Winkel liegt immer im Bereich $0° \leq \alpha \leq 180°$.

:::

## Geometrische Interpretation

:::snippet{#definition}

Das **Skalarprodukt** kann geometrisch interpretiert werden als:

$$ \vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\alpha) $$

Daraus folgt:
$$ \cos(\alpha) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} $$

:::

## Schrittweise Berechnung

:::snippet{#beispiel}

**Algorithmus** zur Winkelberechnung zwischen $$ \vec{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix} $$:

1. **Skalarprodukt berechnen**: $$ \vec{a} \cdot \vec{b} = a_1b_1 + a_2b_2 + a_3b_3 $$

2. **Beträge berechnen**: 
   - $$ |\vec{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2} $$
   - $$ |\vec{b}| = \sqrt{b_1^2 + b_2^2 + b_3^2} $$

3. **Cosinus berechnen**: $$ \cos(\alpha) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} $$

4. **Winkel bestimmen**: $$ \alpha = \arccos(\cos(\alpha)) $$

:::

### Beispiel

:::snippet{#beispiel}

Berechne den Winkel zwischen $$ \vec{p} = \begin{pmatrix}2\\1\\2\end{pmatrix} $$ und $$ \vec{q} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$.

**Schritt 1**: $$ \vec{p} \cdot \vec{q} = 2 \cdot 1 + 1 \cdot 2 + 2 \cdot (-1) = 2 + 2 - 2 = 2 $$

**Schritt 2**: 
- $$ |\vec{p}| = \sqrt{2^2 + 1^2 + 2^2} = \sqrt{9} = 3 $$
- $$ |\vec{q}| = \sqrt{1^2 + 2^2 + (-1)^2} = \sqrt{6} $$

**Schritt 3**: $$ \cos(\alpha) = \frac{2}{3 \cdot \sqrt{6}} = \frac{2}{3\sqrt{6}} $$

**Schritt 4**: $$ \alpha = \arccos\left(\frac{2}{3\sqrt{6}}\right) \approx 73{,}9° $$

:::

## Spezialfälle

:::snippet{#merken}

**Wichtige Spezialfälle**:

| Situation | Skalarprodukt | Cosinus-Wert | Winkel |
|-----------|---------------|--------------|--------|
| Gleiche Richtung | $\vec{a} \cdot \vec{b} = \lvert\vec{a}\rvert \cdot \lvert\vec{b}\rvert$ | $\cos(\alpha) = 1$ | $\alpha = 0°$ |
| Orthogonal | $\vec{a} \cdot \vec{b} = 0$ | $\cos(\alpha) = 0$ | $\alpha = 90°$ |
| Entgegengesetzt | $\vec{a} \cdot \vec{b} = -\lvert\vec{a}\rvert \cdot \lvert\vec{b}\rvert$ | $\cos(\alpha) = -1$ | $\alpha = 180°$ |

:::

## Parallelität und Orthogonalität

:::snippet{#satz}

**Parallelitätsbedingung**: Zwei Vektoren $\vec{a}$ und $\vec{b}$ sind parallel, wenn:
$$ \vec{a} = k \cdot \vec{b} $$ für ein $k \neq 0$

**Orthogonalitätsbedingung**: Zwei Vektoren sind orthogonal, wenn:
$$ \vec{a} \cdot \vec{b} = 0 $$

:::

### Beispiele

:::snippet{#beispiel}

**Parallelität prüfen**:
$$ \vec{u} = \begin{pmatrix}2\\4\\-2\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$

$$ \vec{u} = 2 \cdot \vec{v} $$ → Die Vektoren sind parallel mit $\alpha = 0°$.

**Orthogonalität prüfen**:
$$ \vec{r} = \begin{pmatrix}1\\2\\1\end{pmatrix} $$ und $$ \vec{s} = \begin{pmatrix}1\\-1\\1\end{pmatrix} $$

$$ \vec{r} \cdot \vec{s} = 1 \cdot 1 + 2 \cdot (-1) + 1 \cdot 1 = 1 - 2 + 1 = 0 $$

→ Die Vektoren sind orthogonal mit $\alpha = 90°$.

:::
