---
name: 🔖 Formel
lang: de
index: 1
---

# Formeln für Schnittwinkel von Geraden

## Hauptformel

:::snippet{#satz}

Der **Schnittwinkel** $\alpha$ zwischen zwei Geraden mit den Richtungsvektoren $\vec{v_1}$ und $\vec{v_2}$ wird berechnet durch:

$$ \alpha = \arccos\left(\frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|}\right) $$

Der Schnittwinkel liegt immer im Bereich $0° \leq \alpha \leq 90°$.

:::

## Warum der Betrag?

:::snippet{#definition}

Der **Betrag** $|\vec{v_1} \cdot \vec{v_2}|$ im Zähler sorgt dafür, dass:
- Immer der kleinere der beiden möglichen Winkel berechnet wird
- Der Schnittwinkel zwischen 0° und 90° liegt
- Die Orientierung der Richtungsvektoren keine Rolle spielt

:::

### Beispiel für die Bedeutung des Betrags

:::snippet{#beispiel}

Richtungsvektoren: $$ \vec{a} = \begin{pmatrix}1\\0\\0\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}-1\\0\\0\end{pmatrix} $$

**Ohne Betrag**: $$ \cos(\beta) = \frac{-1}{1 \cdot 1} = -1 \Rightarrow \beta = 180° $$

**Mit Betrag**: $$ \cos(\alpha) = \frac{|-1|}{1 \cdot 1} = 1 \Rightarrow \alpha = 0° $$

Die Geraden sind parallel → Schnittwinkel = 0°

:::

## Schrittweises Vorgehen

:::snippet{#beispiel}

**Algorithmus** für Geraden $g_1: \vec{x} = \vec{a_1} + t \cdot \vec{v_1}$ und $g_2: \vec{x} = \vec{a_2} + s \cdot \vec{v_2}$:

1. **Richtungsvektoren identifizieren**: $\vec{v_1}$ und $\vec{v_2}$

2. **Skalarprodukt berechnen**: $\vec{v_1} \cdot \vec{v_2}$

3. **Beträge berechnen**: $|\vec{v_1}|$ und $|\vec{v_2}|$

4. **Betrag des Skalarprodukts**: $|\vec{v_1} \cdot \vec{v_2}|$

5. **Cosinus berechnen**: $\cos(\alpha) = \frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|}$

6. **Schnittwinkel bestimmen**: $\alpha = \arccos(\cos(\alpha))$

:::

### Beispiel

:::snippet{#beispiel}

Gegeben:
$$ g_1: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} $$
$$ g_2: \vec{x} = \begin{pmatrix}0\\1\\2\end{pmatrix} + s \cdot \begin{pmatrix}1\\-2\\2\end{pmatrix} $$

**Schritt 1**: $\vec{v_1} = \begin{pmatrix}2\\1\\-1\end{pmatrix}$, $\vec{v_2} = \begin{pmatrix}1\\-2\\2\end{pmatrix}$

**Schritt 2**: $\vec{v_1} \cdot \vec{v_2} = 2 \cdot 1 + 1 \cdot (-2) + (-1) \cdot 2 = 2 - 2 - 2 = -2$

**Schritt 3**: $|\vec{v_1}| = \sqrt{4 + 1 + 1} = \sqrt{6}$, $|\vec{v_2}| = \sqrt{1 + 4 + 4} = 3$

**Schritt 4**: $|\vec{v_1} \cdot \vec{v_2}| = |-2| = 2$

**Schritt 5**: $\cos(\alpha) = \frac{2}{\sqrt{6} \cdot 3} = \frac{2}{3\sqrt{6}}$

**Schritt 6**: $\alpha = \arccos\left(\frac{2}{3\sqrt{6}}\right) \approx 73{,}2°$

:::

## Spezialfälle

:::snippet{#merken}

| Lagebeziehung | Bedingung | Schnittwinkel |
|---------------|-----------|---------------|
| **Parallel** | $\vec{v_1} = k \cdot \vec{v_2}$ | $\alpha = 0°$ |
| **Orthogonal** | $\vec{v_1} \cdot \vec{v_2} = 0$ | $\alpha = 90°$ |
| **Identisch** | Parallel + gemeinsamer Punkt | $\alpha = 0°$ |
| **Windschief** | Kein Schnittpunkt | Winkel trotzdem definiert |

:::

## Parallelität prüfen

:::snippet{#satz}

Zwei Geraden sind **parallel**, wenn ihre Richtungsvektoren linear abhängig sind:
$$ \vec{v_1} = k \cdot \vec{v_2} $$ für ein $k \neq 0$

Bei parallelen Geraden ist der Schnittwinkel immer 0°.

:::

### Beispiel

:::snippet{#beispiel}

$$ \vec{v_1} = \begin{pmatrix}6\\-3\\9\end{pmatrix} $$ und $$ \vec{v_2} = \begin{pmatrix}-2\\1\\-3\end{pmatrix} $$

Prüfung: $$ \vec{v_1} = -3 \cdot \vec{v_2} = -3 \cdot \begin{pmatrix}-2\\1\\-3\end{pmatrix} = \begin{pmatrix}6\\-3\\9\end{pmatrix} $$

Die Richtungsvektoren sind linear abhängig → Geraden sind parallel → Schnittwinkel = 0°

:::

## Orthogonalität prüfen

:::snippet{#satz}

Zwei Geraden sind **orthogonal**, wenn ihre Richtungsvektoren orthogonal sind:
$$ \vec{v_1} \cdot \vec{v_2} = 0 $$

Bei orthogonalen Geraden ist der Schnittwinkel immer 90°.

:::

### Beispiel

:::snippet{#beispiel}

$$ \vec{v_1} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$ und $$ \vec{v_2} = \begin{pmatrix}3\\-1\\1\end{pmatrix} $$

Skalarprodukt: $$ \vec{v_1} \cdot \vec{v_2} = 1 \cdot 3 + 2 \cdot (-1) + (-1) \cdot 1 = 3 - 2 - 1 = 0 $$

Die Richtungsvektoren sind orthogonal → Geraden stehen senkrecht → Schnittwinkel = 90°

:::

## Unterschiedliche Richtungsvektordarstellungen

:::snippet{#merken}

**Wichtig**: Eine Gerade kann verschiedene Richtungsvektoren haben. Der Schnittwinkel bleibt dabei unverändert!

:::

### Beispiel

:::snippet{#beispiel}

Die Gerade $g: \vec{x} = \vec{a} + t \cdot \begin{pmatrix}2\\4\\-2\end{pmatrix}$ kann auch dargestellt werden als:
- $g: \vec{x} = \vec{a} + s \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix}$ (Faktor $\frac{1}{2}$)
- $g: \vec{x} = \vec{a} + r \cdot \begin{pmatrix}-4\\-8\\4\end{pmatrix}$ (Faktor $-2$)

Alle Darstellungen ergeben denselben Schnittwinkel mit anderen Geraden.

:::