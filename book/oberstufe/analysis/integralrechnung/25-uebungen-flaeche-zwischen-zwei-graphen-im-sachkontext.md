---
name: "✏️ Übungen: Fläche zwischen zwei Graphen im Sachkontext"
index: 25
lang: de
---

# ✏️ Übungen: Fläche zwischen zwei Graphen im Sachkontext

## 🐟 Logo eines Fischerladens

Das Logo eines Fischerlades wurde mithilfe von zwei Funktionen gestaltet.

Die Funktion $f(x)$ und $g(x)=-f(x)$ schließen Flächen ein, die an einen Fisch erinnern, wenn $x \in [-1; 0,5]$.

Die Funktion $f(x)$ ist eine Funktion dritten Grades, sie hat einen Hochpunkt bei $x=-\frac{2}{3}$, einen Tiefpunkt im Ursprung und einen Punkt $P(-0,5|0,125)$.

:::geogebra{perspective="G" coordsystem="-1.2,0.6,-0.5,0.5" enableRightClick=false}
f(x)=x^(3)+x^(2)
g(x)=-f(x)
a=Integral(f,g,-1,0.5)
ShowLabel(a, false)
:::

a) Ermittle die Funktionsgleichungen zu den beiden Graphen.

:::collapsible{title="Lösung" id="26268611"}

Zunächst stellen wir die allgemeine Funktionsgleichung einer Funktion dritten Grades auf:

$$

\begin{align*}

f(x) &= ax^3 + bx^2 + cx + d \\
f'(x) &= 3ax^2 + 2bx + c \\

\end{align*}

$$

Nun stellen wir die Bedingungen auf:

$$

\begin{align*}

f(0) &= 0 \\
f'(0) &= 0 \\
f(-0,5) &= 0,125 \\
f'(-\frac{2}{3}) &= 0 \\

\end{align*}

$$

Daraus ergeben sich die Gleichungen:

$$

\begin{align*}

d &= 0 \\
c &= 0 \\
0,125 &= -\frac{1}{8}a + \frac{1}{4}b - \frac{1}{2}c + d \\
0 &= 3 \cdot \frac{4}{9}a - 2 \cdot \frac{2}{3}b + c \\

\end{align*}

$$

c und d einsetzen in III und IV:

$$

\begin{align*}

0,125 &= -\frac{1}{8}a + \frac{1}{4}b \\
0 &= \frac{4}{3}a - \frac{4}{3}b \\

\end{align*}

$$

Aus IV folgt $a = b$. Einsetzen in III:

$$

\begin{align*}

0,125 &= -\frac{1}{8}a + \frac{1}{4}a \\

0,125 &= \frac{1}{8}a \\

a &= 1 \\

\end{align*}

$$

Die Funktionsgleichung von $f(x)$ lautet also:

$$

f(x) = x^3 + x^2

$$

Die Funktionsgleichung von $g(x)$ ist $g(x) = -f(x)$:

$$

g(x) = -x^3 - x^2

$$


:::

b) Berechne den Flächeninhalt der Fläche, die von den beiden Graphen eingeschlossen wird.

:::collapsible{title="Lösung" id="26268714913294"}

1. Scnittstellen berechnen:

$$

\begin{align*}

f(x) &= g(x) \\

x^3 + x^2 &= -x^3 - x^2 \\

2x^3 + 2x^2 &= 0 \\

x^2(x + 1) &= 0 \\

x_1 &= 0 \\

x_2 &= -1 \\

\end{align*}

$$

2. Teilflächen berechnen:

$$

\begin{align*}

A_1 &= \int_{-1}^{0} f(x) - g(x) \, dx = \frac{1}{6} \\
A_2 &= \int_{0}^{0,5} f(x) - g(x) \, dx \approx 0,115 \\

\end{align*}

$$

Gesamtfläche: $A = |A_1| + |A_2| \approx 0,281$

:::

Ein Alternativvorschlag sieht ein bauchigeren Fisch vor. Dazu wird die Funktion $f(x)$ mit dem Faktor $2$ in Richtung der y-Achse gestreckt. Damit die Schwanzfloße nicht zu groß wird, wird x auf das Intervall $[-1; 0,3]$ beschränkt.

:::geogebra{perspective="G" coordsystem="-1.2,0.6,-0.5,0.5" enableRightClick=false}
f(x)=2 * (x^(3)+x^(2))
g(x)=-f(x)
a=Integral(f,g,-1,0.3)
ShowLabel(a, false)
:::

c) Berechne den Flächenunterschied zwischen dem ursprünglichen und dem alternativen Logo in Prozent.

:::collapsible{title="Lösung" id="2626871491329asd4"}

1. Scnittstellen berechnen:

Es ergeben sich die gleichen Schnittpunkte wie im ursprünglichen Logo.

2. Teilflächen berechnen:

$$

\begin{align*}

A_1 &= \int_{-1}^{0} f(x) - g(x) \, dx = \frac{1}{3} \\
A_2 &= \int_{0}^{0,3} f(x) - g(x) \, dx \approx 0,0441 \\

\end{align*}

$$

Gesamtfläche: $A = |A_1| + |A_2| \approx 0,3774$

Prozentualer Flächenunterschied: $\frac{0,3774 - 0,281}{0,281} \approx 34,4\%$

:::

## 💋 Kussmund

Für eine Datingseite soll ein Logo entworfen werden, das an einen Kussmund erinnert.

Das Logo besteht aus drei Funktionen $f(x)$, $g(x)$ und $h(x)$.

$$

\begin{align*}
f(x) &= \frac{1}{4} (1-x)(x+3) \\
g(x) &= \frac{1}{4} (x+1)(3-x) \\
h(x) &= \frac{1}{4} (x-3)(x+3) \\
\end{align*}

$$

:::geogebra{perspective="G" coordsystem="-4,4,-3,3" enableRightClick=false}
f(x) = 0.25 * (1-x) * (x+3)
g(x) = 0.25 * (x+1) * (3-x)
h(x) = 0.25 * (x-3) * (x+3)
a=Integral(f,h,-3,0)
ShowLabel(a, false)
b=Integral(g,h,0,3)
ShowLabel(b, false)
:::

a) Berechne den gefärbten Flächeninhalt.

:::collapsible{title="Tipp" id="262688ajsdasda"}

Nutze die Symmetrie zur y-Achse. Berechne die Fläche zwischen g und h im Intervall von 0 bis 3 und verdopple das Ergebnis.

:::

:::collapsible{title="Lösung" id="262688ajsd"}

$$

A = 13,5

$$

:::

## 🏎️ Rennstrecke

Der östliche Abschnitt einer Motorsportstrecke lässt sich durch eine ganzrationale Funktion beschreiben mit:

$$

\begin{align*}
f(x) &= -\frac{1}{50}x^4 + 0.5x^3 - 4x^2 + 10x + 4
\end{align*}

$$

Die Funktion $f$ schneidet die x-Achse bei $x=11,61$.

Das Streckengelände wird mit einer Begrenzungsmauer versehen, die durch die Funktion $g(x)$ beschrieben wird:

$$

\begin{align*}
g(x) &= -\frac{1}{10} x^2 +  0.5x + 14
\end{align*}

$$

Eine Einheit im Kooridnatensystem entspricht 10 Metern.

:::geogebra{perspective="G" coordsystem="-2,16,-2,16" enableRightClick=false}
f(x) = -1/50x^4 + 0.5x^3 - 4x^2 + 10x + 4
A_1 = Integral(f,0,11.61)
SetColor(A_1, "Green")
SetLabelMode(A_1, 1)
g(x) = -1/10 x^2 + 0.5x + 14
A_2 = Integral(f,g,1,11)
SetLabelMode(A_2, 1)
SetColor(A_2, "Gray")
:::

a) Im Innenraum ($A_1$) der Strecke soll Rasen gesät werden. Berechne die Fläche, die mit Rasen bedeckt werden muss.

:::collapsible{title="Lösung" id="864868"}

$$

A_1 \approx 61,17 = 611,7 \, m^2

$$

Die Fläche, die mit Rasen bedeckt werden muss, beträgt $611,7 \, m^2$

:::

b) Zwischen der Strecke und der Begrenzungsmauer soll im Intervall $1 \leq x \leq 11$ ein Kiesbett angelegt werden ($A_2$). Berechne die benötigte Menge an Kies in $m^3$, wenn die Kiesschicht $20cm$ hoch sein soll.

:::collapsible{title="Lösung" id="86486asdsad8"}

$$

A_2 \approx 73,2 = 732 \, m^2

$$

Die benötigte Menge an Kies beträgt $732 \cdot 0,2 = 146,4 \, m^3$

:::
