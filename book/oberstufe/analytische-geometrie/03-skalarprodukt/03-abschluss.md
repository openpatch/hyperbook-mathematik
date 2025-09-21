---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Skalarprodukt**: Das Skalarprodukt zweier Vektoren $$ \vec{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix} $$ wird berechnet durch:

$$ \vec{a} \cdot \vec{b} = a_1 \cdot b_1 + a_2 \cdot b_2 + a_3 \cdot b_3 $$

:::

:::snippet{#merken}

**Orthogonalität**: Zwei Vektoren $$ \vec{a} $$ und $$ \vec{b} $$ sind orthogonal (stehen senkrecht zueinander), wenn ihr Skalarprodukt null ist:

$$ \vec{a} \cdot \vec{b} = 0 $$

:::

:::snippet{#merken}

**Rechengesetze für das Skalarprodukt**:
1. Kommutativgesetz: $$ \vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a} $$
2. Assoziativgesetz: $$ r \cdot (\vec{a} \cdot \vec{b}) = (r \cdot \vec{a}) \cdot \vec{b} $$
3. Distributivgesetz: $$ \vec{a} \cdot (\vec{b} + \vec{c}) = \vec{a} \cdot \vec{b} + \vec{a} \cdot \vec{c} $$
4. Betragsbeziehung: $$ \vec{a} \cdot \vec{a} = |\vec{a}|^2 $$

:::

# Prüfe dich

## Aufgabe 1: Skalarprodukt berechnen

:::snippet{#aufgabe}

Berechne das Skalarprodukt der Vektoren $$ \vec{u} = \begin{pmatrix}2\\-3\\1\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}4\\1\\-2\end{pmatrix} $$.

:::

:::collapsible{title="Musterlösung" id="f47ac10b-58cc-4372-a567-0e02b2c3d479"}

$$ \vec{u} \cdot \vec{v} = 2 \cdot 4 + (-3) \cdot 1 + 1 \cdot (-2) = 8 - 3 - 2 = 3 $$

:::

## Aufgabe 2: Orthogonalität prüfen

:::snippet{#aufgabe}

Prüfe, ob die Vektoren $$ \vec{a} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}3\\-1\\1\end{pmatrix} $$ orthogonal sind.

:::

:::collapsible{title="Musterlösung" id="550e8400-e29b-41d4-a716-446655440000"}

$$ \vec{a} \cdot \vec{b} = 1 \cdot 3 + 2 \cdot (-1) + (-1) \cdot 1 = 3 - 2 - 1 = 0 $$

Da das Skalarprodukt null ist, sind die Vektoren orthogonal.

:::

## Aufgabe 3: Fehlenden Koordinaten bestimmen

:::snippet{#aufgabe}

Bestimme den Wert von $k$, so dass die Vektoren $$ \vec{p} = \begin{pmatrix}2\\k\\3\end{pmatrix} $$ und $$ \vec{q} = \begin{pmatrix}1\\-2\\1\end{pmatrix} $$ orthogonal sind.

:::

:::collapsible{title="Musterlösung" id="6ba7b810-9dad-11d1-80b4-00c04fd430c8"}

Für Orthogonalität muss gelten: $$ \vec{p} \cdot \vec{q} = 0 $$

$$ \vec{p} \cdot \vec{q} = 2 \cdot 1 + k \cdot (-2) + 3 \cdot 1 = 2 - 2k + 3 = 5 - 2k = 0 $$

Auflösen nach $k$:
$$ 5 - 2k = 0 $$
$$ 2k = 5 $$
$$ k = 2{,}5 $$

:::

## Aufgabe 4: Anwendung der Rechengesetze

:::snippet{#aufgabe}

Vereinfache den Ausdruck $$ 3 \cdot (\vec{a} \cdot \vec{b}) + \vec{a} \cdot (2\vec{b}) $$ mithilfe der Rechengesetze des Skalarprodukts.

:::

:::collapsible{title="Musterlösung" id="6ba7b811-9dad-11d1-80b4-00c04fd430c8"}

$$ 3 \cdot (\vec{a} \cdot \vec{b}) + \vec{a} \cdot (2\vec{b}) $$

Mit dem Assoziativgesetz:
$$ = 3 \cdot (\vec{a} \cdot \vec{b}) + 2 \cdot (\vec{a} \cdot \vec{b}) $$

Ausklammern:
$$ = (3 + 2) \cdot (\vec{a} \cdot \vec{b}) = 5 \cdot (\vec{a} \cdot \vec{b}) $$

:::