---
name: ✏️ Aufgaben
lang: de
index: 2
---

# Aufgaben

## Ebene aus drei Punkten aufstellen

:::snippet{#aufgabe}
Stelle die Parameterform der Ebene auf, die durch die gegebenen drei Punkte verläuft.
:::

1. $$ A(1|0|3) $$, $$ B(0|2|1) $$ und $$ C(2|2|4) $$

:::collapsible{title="Lösung" id="15eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \vec{OA} = \begin{pmatrix}1\\0\\3\end{pmatrix} $$

**Spannvektoren**:
- $$ \vec{AB} = \begin{pmatrix}0-1\\2-0\\1-3\end{pmatrix} = \begin{pmatrix}-1\\2\\-2\end{pmatrix} $$
- $$ \vec{AC} = \begin{pmatrix}2-1\\2-0\\4-3\end{pmatrix} = \begin{pmatrix}1\\2\\1\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}1\\0\\3\end{pmatrix} + r \cdot \begin{pmatrix}-1\\2\\-2\end{pmatrix} + s \cdot \begin{pmatrix}1\\2\\1\end{pmatrix} $$

:::

2. $$ A(0|1|2) $$, $$ B(3|3|3) $$ und $$ C(-1|1|4) $$

:::collapsible{title="Lösung" id="25eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \begin{pmatrix}0\\1\\2\end{pmatrix} $$

**Spannvektoren**:
- $$ \vec{AB} = \begin{pmatrix}3\\2\\1\end{pmatrix} $$
- $$ \vec{AC} = \begin{pmatrix}-1\\0\\2\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}0\\1\\2\end{pmatrix} + r \cdot \begin{pmatrix}3\\2\\1\end{pmatrix} + s \cdot \begin{pmatrix}-1\\0\\2\end{pmatrix} $$

:::

3. $$ P(2|-1|0) $$, $$ Q(1|1|2) $$ und $$ R(0|0|1) $$

:::collapsible{title="Lösung" id="35eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \begin{pmatrix}2\\-1\\0\end{pmatrix} $$

**Spannvektoren**:
- $$ \vec{PQ} = \begin{pmatrix}-1\\2\\2\end{pmatrix} $$
- $$ \vec{PR} = \begin{pmatrix}-2\\1\\1\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}2\\-1\\0\end{pmatrix} + r \cdot \begin{pmatrix}-1\\2\\2\end{pmatrix} + s \cdot \begin{pmatrix}-2\\1\\1\end{pmatrix} $$

:::

## Punktprobe

:::snippet{#aufgabe}
Prüfe, ob die gegebenen Punkte auf der Ebene liegen.
:::

Ebene: $$ E: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\2\end{pmatrix} $$

1. $$ P(2|2|1) $$

:::collapsible{title="Lösung" id="45eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Ansatz: $$ \begin{pmatrix}2\\2\\1\end{pmatrix} = \begin{pmatrix}1\\2\\0\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\2\end{pmatrix} $$

Gleichungssystem:

$$

\begin{align*}
x: \quad 2 &= 1 + r \quad \Rightarrow \quad r = 1 \\
y: \quad 2 &= 2 + s \quad \Rightarrow \quad s = 0 \\
z: \quad 1 &= 0 + r + 2s = 1 + 0 = 1 \quad \checkmark
\end{align*}

$$

**P liegt auf der Ebene** mit $r = 1, s = 0$.

:::

2. $$ Q(1|4|4) $$

:::collapsible{title="Lösung" id="55eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Ansatz: $$ \begin{pmatrix}1\\4\\4\end{pmatrix} = \begin{pmatrix}1\\2\\0\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\2\end{pmatrix} $$

Gleichungssystem:

$$
\begin{align*}
x: \quad 1 &= 1 + r \quad \Rightarrow \quad r = 0 \\
y: \quad 4 &= 2 + s \quad \Rightarrow \quad s = 2 \\
z: \quad 4 &= 0 + 0 + 4 = 4 \quad \checkmark
\end{align*}
$$

**Q liegt auf der Ebene** mit $r = 0, s = 2$.

:::

## Ebene aus Gerade und Punkt

:::snippet{#aufgabe}
Stelle die Parameterform der Ebene auf, die durch die Gerade und den gegebenen Punkt verläuft.
:::

1. Gerade: $$ g: \vec{x} = \begin{pmatrix}2\\1\\-3\end{pmatrix} + r \cdot \begin{pmatrix}-1\\3\\1\end{pmatrix} $$
   Punkt: $$ A(0|0|1) $$

:::collapsible{title="Lösung" id="65eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \begin{pmatrix}0\\0\\1\end{pmatrix} $$ (der gegebene Punkt)

**Erster Spannvektor**: Richtungsvektor der Geraden $$ \vec{u} = \begin{pmatrix}-1\\3\\1\end{pmatrix} $$

**Zweiter Spannvektor**: Verbindungsvektor vom Punkt A zu einem Punkt auf der Gerade
(z.B. zum Stützpunkt der Geraden): $$ \vec{v} = \begin{pmatrix}2\\1\\-3\end{pmatrix} - \begin{pmatrix}0\\0\\1\end{pmatrix} = \begin{pmatrix}2\\1\\-4\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}0\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}-1\\3\\1\end{pmatrix} + s \cdot \begin{pmatrix}2\\1\\-4\end{pmatrix} $$

:::

2. Gerade: $$ h: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} $$
   Punkt: $$ B(0|2|0) $$

:::collapsible{title="Lösung" id="75eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \begin{pmatrix}0\\2\\0\end{pmatrix} $$

**Spannvektoren**:
- $$ \vec{u} = \begin{pmatrix}1\\1\\0\end{pmatrix} $$ (Richtungsvektor)
- $$ \vec{v} = \begin{pmatrix}1\\0\\2\end{pmatrix} - \begin{pmatrix}0\\2\\0\end{pmatrix} = \begin{pmatrix}1\\-2\\2\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}0\\2\\0\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\-2\\2\end{pmatrix} $$

:::

## Lineare Unabhängigkeit prüfen

:::snippet{#aufgabe}
Prüfe, ob die Spannvektoren linear unabhängig sind und eine Ebene aufspannen.
:::

1. $$ \vec{u} = \begin{pmatrix}2\\1\\3\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}4\\2\\6\end{pmatrix} $$

:::collapsible{title="Lösung" id="85eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Prüfung: $$ \vec{v} = k \cdot \vec{u} $$?

$$ \begin{pmatrix}4\\2\\6\end{pmatrix} = k \cdot \begin{pmatrix}2\\1\\3\end{pmatrix} $$

Aus jeder Komponente: $k = 2$

Da $\vec{v} = 2 \cdot \vec{u}$, sind die Vektoren **linear abhängig**.

Sie spannen **keine Ebene** auf, sondern nur eine Gerade.

:::

2. $$ \vec{u} = \begin{pmatrix}1\\0\\1\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}0\\1\\-1\end{pmatrix} $$

:::collapsible{title="Lösung" id="95eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Prüfung: Ist $$ \vec{v} = k \cdot \vec{u} $$ für ein $k$?

$$ \begin{pmatrix}0\\1\\-1\end{pmatrix} = k \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} $$

Aus der ersten Komponente: $0 = k \cdot 1 \Rightarrow k = 0$
Aus der zweiten Komponente: $1 = k \cdot 0$ → Widerspruch!

Die Vektoren sind **linear unabhängig** und spannen eine Ebene auf.

:::

## Anwendungsaufgaben

:::snippet{#aufgabe}
Löse die folgenden Sachaufgaben.
:::

### Dachfläche

Ein Dach wird durch drei Punkte definiert:
- Firstpunkt: $$ F(5|10|8) $$
- Eckpunkt links: $$ L(0|0|4) $$  
- Eckpunkt rechts: $$ R(10|0|4) $$

Stelle die Parameterform der Dachfläche auf.

:::collapsible{title="Lösung" id="a5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \begin{pmatrix}5\\10\\8\end{pmatrix} $$

**Spannvektoren**:
- $$ \vec{FL} = \begin{pmatrix}0-5\\0-10\\4-8\end{pmatrix} = \begin{pmatrix}-5\\-10\\-4\end{pmatrix} $$
- $$ \vec{FR} = \begin{pmatrix}10-5\\0-10\\4-8\end{pmatrix} = \begin{pmatrix}5\\-10\\-4\end{pmatrix} $$

**Dachfläche**: $$ E: \vec{x} = \begin{pmatrix}5\\10\\8\end{pmatrix} + r \cdot \begin{pmatrix}-5\\-10\\-4\end{pmatrix} + s \cdot \begin{pmatrix}5\\-10\\-4\end{pmatrix} $$

:::

### Tischplatte

Eine dreieckige Tischplatte hat die Eckpunkte:
$$ A(0|0|1) $$, $$ B(2|0|1) $$, $$ C(1|1{,}5|1) $$

1. Stelle die Parameterform der Tischplatte auf.
2. Liegt der Punkt $$ P(1|0{,}5|1) $$ auf der Tischplatte?

:::collapsible{title="Lösung" id="b5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. **Parameterform**:
   
   Stützvektor: $$ \vec{a} = \begin{pmatrix}0\\0\\1\end{pmatrix} $$
   
   Spannvektoren:
   - $$ \vec{AB} = \begin{pmatrix}2\\0\\0\end{pmatrix} $$
   - $$ \vec{AC} = \begin{pmatrix}1\\1{,}5\\0\end{pmatrix} $$
   
   **Tischplatte**: $$ E: \vec{x} = \begin{pmatrix}0\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}2\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\1{,}5\\0\end{pmatrix} $$

2. **Punktprobe für P(1|0,5|1)**:
   
   $$ \begin{pmatrix}1\\0{,}5\\1\end{pmatrix} = \begin{pmatrix}0\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}2\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\1{,}5\\0\end{pmatrix} $$
   
   System:

   $$
   \begin{align*}
   x: \quad 1 &= 0 + 2r + s \\
   y: \quad 0{,}5 &= 0 + 0 + 1{,}5s \quad \Rightarrow \quad s = \frac{1}{3} \\
   z: \quad 1 &= 1 + 0 + 0 \quad \checkmark
   \end{align*}
   $$
   
   Aus der ersten Gleichung: $1 = 2r + \frac{1}{3} \Rightarrow r = \frac{1}{3}$
   
   **Ja, P liegt auf der Tischplatte** mit $r = \frac{1}{3}, s = \frac{1}{3}$.

:::

:::collapsible{title="Tipp 1" id="480524"}

Wähle den Richtungsvektor der Geraden als ein Spannvektor.

:::

:::collapsible{title="Tipp 2" id="522985"}

Wähle den Vektor zwischen dem Punkt P und dem Aufpunkt der Geraden als zweiten Richtungsvektor.

:::


:::collapsible{title="Lösung" id="185668"}

$$

E: \vec{x} = \begin{pmatrix}1\\-3\\-3\end{pmatrix} + r \cdot \begin{pmatrix}-1\\3\\1\end{pmatrix} + s \cdot \begin{pmatrix}1\\4\\0\end{pmatrix}, \ r,s \in \mathbb{R}

$$

:::

## Ebene aus zwei sich schneidenden Geraden aufstellen

Gegeben sind die Geraden g und f. Zeige, dass die Geraden sich schneiden. Gib die Parameterform der Ebene an, die durch die Geraden festgelegt ist.

$$

g: \vec{x} = \begin{pmatrix}7\\-3\\3\end{pmatrix} + s \cdot \begin{pmatrix}6\\1\\-2\end{pmatrix}, \ s \in \mathbb{R}

$$

$$

f: \vec{x} = \begin{pmatrix}1\\-4\\5\end{pmatrix} + s \cdot \begin{pmatrix}-1\\13\\3\end{pmatrix}, \ s \in \mathbb{R}

$$

:::collapsible{title="Tipp" id="112118"}

Nimm die Richtungsvektoren der Geraden als Spannvektoren der Ebene.

:::

:::collapsible{title="Lösung" id="424749"}

$$

E: \vec{x} = \begin{pmatrix}1\\-4\\5\end{pmatrix} + s \cdot \begin{pmatrix}-1\\13\\3\end{pmatrix} + t \cdot \begin{pmatrix}6\\1\\-2\end{pmatrix}, \ s,t \in \mathbb{R}

$$

:::

## Ebene aus zwei parallelen Geraden aufstellen

Gegeben sind die Geraden g und f. Zeige, dass die Geraden parallel sind. Gib die Parameterform der Ebene an, die durch die Geraden festgelegt ist. 

$$

g: \vec{x} = \begin{pmatrix}2\\3\\-1\end{pmatrix} + s \cdot \begin{pmatrix}-8\\2\\6\end{pmatrix}, \ s \in \mathbb{R}

$$

$$

f: \vec{x} = \begin{pmatrix}5\\-2\\0\end{pmatrix} + s \cdot \begin{pmatrix}4\\-1\\-3\end{pmatrix}, s \in \mathbb{R}

$$

:::collapsible{title="Tipp 1" id="322103"}

Bestimme drei Punkte aus den Geraden, um die Ebene aufzustellen.

:::

:::collapsible{title="Tipp 2" id="3221032"}

Wähle die Aufpunkte der Geraden und einen weiteren zum Beispiel für $s = 1$.

:::

:::collapsible{title="Lösung" id="861434"}

$$

E: \vec{x} = \begin{pmatrix}2\\3\\-1\end{pmatrix} + r \cdot \begin{pmatrix}3\\-5\\1\end{pmatrix} + s \begin{pmatrix}7\\-6\\-2\end{pmatrix}, \ r,s \in \mathbb{R}

$$

:::
