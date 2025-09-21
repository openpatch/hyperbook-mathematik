---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Punkte im Raum**: Ein Punkt im dreidimensionalen Raum wird durch drei Koordinaten beschrieben: $$ P(x|y|z) $$

:::

:::snippet{#merken}

**Vektoren im Raum**: Ein Vektor im Raum hat drei Komponenten: $$ \vec{v} = \begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix} $$

:::

:::snippet{#merken}

**Verbindungsvektor**: Der Vektor von Punkt A zu Punkt B ist: $$ \vec{AB} = B - A $$

:::

:::snippet{#merken}

**Betrag eines Vektors**: Die Länge eines Vektors $$ \vec{v} = \begin{pmatrix}v_1\\v_2\\v_3\end{pmatrix} $$ ist: 
$$ |\vec{v}| = \sqrt{v_1^2 + v_2^2 + v_3^2} $$

:::

:::snippet{#merken}

**Einheitsvektor**: Ein Vektor der Länge 1 wird berechnet durch: $$ \vec{e} = \frac{\vec{v}}{|\vec{v}|} $$

:::

# Prüfe dich

## Aufgabe 1: Verbindungsvektor

:::snippet{#aufgabe}

Gegeben sind die Punkte $$ A(2|1|-3) $$ und $$ B(-1|4|2) $$. Bestimme den Vektor $$ \vec{AB} $$.

:::

:::collapsible{title="Musterlösung" id="b1eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ \vec{AB} = B - A = \begin{pmatrix}-1\\4\\2\end{pmatrix} - \begin{pmatrix}2\\1\\-3\end{pmatrix} = \begin{pmatrix}-3\\3\\5\end{pmatrix} $$

:::

## Aufgabe 2: Betrag eines Vektors

:::snippet{#aufgabe}

Berechne den Betrag des Vektors $$ \vec{v} = \begin{pmatrix}2\\-3\\6\end{pmatrix} $$.

:::

:::collapsible{title="Musterlösung" id="c1eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ |\vec{v}| = \sqrt{2^2 + (-3)^2 + 6^2} = \sqrt{4 + 9 + 36} = \sqrt{49} = 7 $$

:::

## Aufgabe 3: Einheitsvektor

:::snippet{#aufgabe}

Bestimme den Einheitsvektor zum Vektor $$ \vec{w} = \begin{pmatrix}6\\0\\8\end{pmatrix} $$.

:::

:::collapsible{title="Musterlösung" id="d1eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Zunächst den Betrag berechnen:
$$ |\vec{w}| = \sqrt{6^2 + 0^2 + 8^2} = \sqrt{36 + 0 + 64} = \sqrt{100} = 10 $$

Einheitsvektor:
$$ \vec{e_w} = \frac{1}{10} \begin{pmatrix}6\\0\\8\end{pmatrix} = \begin{pmatrix}0{,}6\\0\\0{,}8\end{pmatrix} $$

:::

## Aufgabe 4: Abstand zwischen Punkten

:::snippet{#aufgabe}

Berechne den Abstand zwischen den Punkten $$ P(1|2|3) $$ und $$ Q(4|6|7) $$.

:::

:::collapsible{title="Musterlösung" id="e1eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

$$ d(P,Q) = \sqrt{(4-1)^2 + (6-2)^2 + (7-3)^2} = \sqrt{9 + 16 + 16} = \sqrt{41} \approx 6{,}4 $$

:::

## Aufgabe 5: Anwendung

:::snippet{#aufgabe}

Ein Roboter bewegt sich von Position $$ A(0|0|0) $$ zu Position $$ B(3|4|0) $$ und dann weiter zu Position $$ C(3|4|5) $$. 

1. Bestimme die beiden Bewegungsvektoren $$ \vec{AB} $$ und $$ \vec{BC} $$.
2. Berechne die Gesamtstrecke, die der Roboter zurücklegt.

:::

:::collapsible{title="Musterlösung" id="f1eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. Bewegungsvektoren:
   $$ \vec{AB} = \begin{pmatrix}3\\4\\0\end{pmatrix} - \begin{pmatrix}0\\0\\0\end{pmatrix} = \begin{pmatrix}3\\4\\0\end{pmatrix} $$
   
   $$ \vec{BC} = \begin{pmatrix}3\\4\\5\end{pmatrix} - \begin{pmatrix}3\\4\\0\end{pmatrix} = \begin{pmatrix}0\\0\\5\end{pmatrix} $$

2. Gesamtstrecke:
   $$ |\vec{AB}| = \sqrt{3^2 + 4^2 + 0^2} = \sqrt{9 + 16} = 5 $$
   $$ |\vec{BC}| = \sqrt{0^2 + 0^2 + 5^2} = 5 $$
   
   Gesamtstrecke: $$ 5 + 5 = 10 $$ Einheiten

:::

## Aufgabe 6: Koordinaten bestimmen

:::snippet{#aufgabe}

Ein Punkt P hat von Q(2|1|3) den Abstand 5. Die x-Koordinate von P ist 6, die y-Koordinate ist -2. Bestimme die z-Koordinate von P.

:::

:::collapsible{title="Musterlösung" id="01eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Sei $$ P(6|-2|z) $$. Dann ist:

$$ d(P,Q) = \sqrt{(6-2)^2 + (-2-1)^2 + (z-3)^2} = 5 $$

$$ \sqrt{16 + 9 + (z-3)^2} = 5 $$

$$ \sqrt{25 + (z-3)^2} = 5 $$

Quadrieren beider Seiten:
$$ 25 + (z-3)^2 = 25 $$

$$ (z-3)^2 = 0 $$

$$ z = 3 $$

Also ist $$ P(6|-2|3) $$.

:::