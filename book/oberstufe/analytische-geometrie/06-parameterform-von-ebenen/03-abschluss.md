---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Parameterform einer Ebene**: $$ E: \vec{x} = \vec{a} + r \cdot \vec{u} + s \cdot \vec{v} $$
- $\vec{a}$: Stützvektor (Punkt auf der Ebene)
- $\vec{u}, \vec{v}$: Spannvektoren (nicht parallel!)
- $r, s$: Parameter

:::

:::snippet{#merken}

**Ebene durch drei Punkte**: $$ E: \vec{x} = \vec{OA} + r \cdot \vec{AB} + s \cdot \vec{AC} $$

:::

:::snippet{#merken}

**Lineare Unabhängigkeit**: Die Spannvektoren dürfen nicht parallel sein: $\vec{u} \neq k \cdot \vec{v}$

:::

:::snippet{#merken}

**Punktprobe**: Ein Punkt liegt auf der Ebene, wenn das Gleichungssystem eine Lösung für $r$ und $s$ hat.

:::

# Prüfe dich

## Aufgabe 1: Ebene aufstellen

:::snippet{#aufgabe}

Stelle die Parameterform der Ebene durch die Punkte $$ A(1|0|2) $$, $$ B(2|1|1) $$ und $$ C(0|2|3) $$ auf.

:::

:::collapsible{title="Musterlösung" id="b5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \vec{OA} = \begin{pmatrix}1\\0\\2\end{pmatrix} $$

**Spannvektoren**:
- $$ \vec{AB} = \begin{pmatrix}2-1\\1-0\\1-2\end{pmatrix} = \begin{pmatrix}1\\1\\-1\end{pmatrix} $$
- $$ \vec{AC} = \begin{pmatrix}0-1\\2-0\\3-2\end{pmatrix} = \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\-1\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

:::

## Aufgabe 2: Punktprobe

:::snippet{#aufgabe}

Liegt der Punkt $$ P(2|3|0) $$ auf der Ebene $$ E: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\-1\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\1\end{pmatrix} $$?

:::

:::collapsible{title="Musterlösung" id="c5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Ansatz: $$ \begin{pmatrix}2\\3\\0\end{pmatrix} = \begin{pmatrix}1\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\-1\end{pmatrix} + s \cdot \begin{pmatrix}-1\\2\\1\end{pmatrix} $$

Gleichungssystem:
\begin{align*}
x: \quad 2 &= 1 + r - s \quad \Rightarrow \quad r - s = 1 \\
y: \quad 3 &= 0 + r + 2s \quad \Rightarrow \quad r + 2s = 3 \\
z: \quad 0 &= 2 - r + s \quad \Rightarrow \quad -r + s = -2
\end{align*}

Aus (1) und (3): $r - s = 1$ und $-r + s = -2$
Addition: $0 = -1$ → Widerspruch!

**P liegt nicht auf der Ebene.**

:::

## Aufgabe 3: Lineare Unabhängigkeit

:::snippet{#aufgabe}

Prüfe, ob die Vektoren $$ \vec{u} = \begin{pmatrix}3\\1\\2\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}6\\2\\4\end{pmatrix} $$ eine Ebene aufspannen können.

:::

:::collapsible{title="Musterlösung" id="d5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Prüfung auf lineare Abhängigkeit: $\vec{v} = k \cdot \vec{u}$?

$$ \begin{pmatrix}6\\2\\4\end{pmatrix} = k \cdot \begin{pmatrix}3\\1\\2\end{pmatrix} $$

Aus jeder Komponente: $k = 2$

Da $\vec{v} = 2 \cdot \vec{u}$, sind die Vektoren **linear abhängig**.

Sie können **keine Ebene aufspannen**, sondern nur eine Gerade.

:::

## Aufgabe 4: Ebene aus Gerade und Punkt

:::snippet{#aufgabe}

Stelle die Ebene auf, die durch die Gerade $$ g: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} $$ und den Punkt $$ A(0|0|2) $$ verläuft.

:::

:::collapsible{title="Musterlösung" id="e5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Stützvektor**: $$ \vec{a} = \begin{pmatrix}0\\0\\2\end{pmatrix} $$ (der gegebene Punkt)

**Erster Spannvektor**: Richtungsvektor der Geraden $$ \vec{u} = \begin{pmatrix}1\\0\\1\end{pmatrix} $$

**Zweiter Spannvektor**: Verbindungsvektor von A zu einem Punkt auf der Geraden
$$ \vec{v} = \begin{pmatrix}1\\2\\0\end{pmatrix} - \begin{pmatrix}0\\0\\2\end{pmatrix} = \begin{pmatrix}1\\2\\-2\end{pmatrix} $$

**Ebenengleichung**: $$ E: \vec{x} = \begin{pmatrix}0\\0\\2\end{pmatrix} + r \cdot \begin{pmatrix}1\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}1\\2\\-2\end{pmatrix} $$

:::

## Aufgabe 5: Parameter bestimmen

:::snippet{#aufgabe}

Bestimme die Parameter $r$ und $s$, für die der Punkt $$ P(3|1|4) $$ auf der Ebene $$ E: \vec{x} = \begin{pmatrix}1\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\-1\\2\end{pmatrix} $$ liegt.

:::

:::collapsible{title="Musterlösung" id="f5eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Ansatz: $$ \begin{pmatrix}3\\1\\4\end{pmatrix} = \begin{pmatrix}1\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} + s \cdot \begin{pmatrix}0\\-1\\2\end{pmatrix} $$

Gleichungssystem:
\begin{align*}
x: \quad 3 &= 1 + r \quad \Rightarrow \quad r = 2 \\
y: \quad 1 &= 0 + r - s = 2 - s \quad \Rightarrow \quad s = 1 \\
z: \quad 4 &= 1 + r + 2s = 1 + 2 + 2 = 5 \quad \times
\end{align*}

Das System ist **nicht lösbar** → P liegt nicht auf der Ebene.

*Anmerkung: Wenn das System lösbar wäre, hätten wir $r = 2, s = 1$.*

:::

## Aufgabe 6: Anwendung Architektur

:::snippet{#aufgabe}

Ein dreieckiges Dachfenster wird durch drei Eckpunkte definiert:
- $$ E_1(2|0|3) $$ (unten links)
- $$ E_2(4|0|3) $$ (unten rechts)  
- $$ E_3(3|1|4) $$ (oben)

1. Stelle die Parameterform der Fensterfläche auf.
2. Liegt der Punkt $$ M(3|0{,}5|3{,}5) $$ (Mittelpunkt) auf der Fensterfläche?

:::

:::collapsible{title="Musterlösung" id="05eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. **Parameterform**:
   
   Stützvektor: $$ \vec{a} = \begin{pmatrix}2\\0\\3\end{pmatrix} $$
   
   Spannvektoren:
   - $$ \vec{E_1E_2} = \begin{pmatrix}2\\0\\0\end{pmatrix} $$
   - $$ \vec{E_1E_3} = \begin{pmatrix}1\\1\\1\end{pmatrix} $$
   
   **Fensterfläche**: $$ E: \vec{x} = \begin{pmatrix}2\\0\\3\end{pmatrix} + r \cdot \begin{pmatrix}2\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} $$

2. **Punktprobe für M(3|0,5|3,5)**:
   
   $$ \begin{pmatrix}3\\0{,}5\\3{,}5\end{pmatrix} = \begin{pmatrix}2\\0\\3\end{pmatrix} + r \cdot \begin{pmatrix}2\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} $$
   
   System:
   \begin{align*}
   x: \quad 3 &= 2 + 2r + s \\
   y: \quad 0{,}5 &= 0 + 0 + s \quad \Rightarrow \quad s = 0{,}5 \\
   z: \quad 3{,}5 &= 3 + 0 + s = 3 + 0{,}5 = 3{,}5 \quad \checkmark
   \end{align*}
   
   Aus der ersten Gleichung: $1 = 2r + 0{,}5 \Rightarrow r = 0{,}25$
   
   **Ja, M liegt auf der Fensterfläche** mit $r = 0{,}25, s = 0{,}5$.

:::

## Aufgabe 7: Verschiedene Darstellungen

:::snippet{#aufgabe}

Zeige, dass die folgenden Gleichungen dieselbe Ebene beschreiben:


$$ E_1: \vec{x} = \begin{pmatrix}1\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}0\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\0\\1\end{pmatrix} $$

$$ E_2: \vec{x} = \begin{pmatrix}2\\1\\1\end{pmatrix} + u \cdot \begin{pmatrix}0\\2\\0\end{pmatrix} + v \cdot \begin{pmatrix}0\\0\\3\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="15eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

**Strategie**: Zeigen, dass der Stützpunkt von $E_2$ auf $E_1$ liegt und die Spannvektoren von $E_2$ Linearkombinationen der Spannvektoren von $E_1$ sind.

**1. Punktprobe**: Liegt $(2|1|1)$ auf $E_1$?
$$ \begin{pmatrix}2\\1\\1\end{pmatrix} = \begin{pmatrix}1\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}0\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\0\\1\end{pmatrix} $$

System: $r = 1, s = 1$ → Ja, der Punkt liegt auf $E_1$.

**2. Spannvektoren vergleichen**:
- $\begin{pmatrix}0\\2\\0\end{pmatrix} = 2 \cdot \begin{pmatrix}0\\1\\0\end{pmatrix}$ ✓
- $\begin{pmatrix}0\\0\\3\end{pmatrix} = 3 \cdot \begin{pmatrix}0\\0\\1\end{pmatrix}$ ✓

Da beide Bedingungen erfüllt sind, beschreiben $E_1$ und $E_2$ **dieselbe Ebene**.

:::
