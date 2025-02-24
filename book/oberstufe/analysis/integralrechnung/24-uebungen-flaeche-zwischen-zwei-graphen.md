---
name: "✏️ Übungen: Fläche zwischen zwei Graphen"
index: 24
lang: de
---

# ✏️ Übungen: Fläche zwischen zwei Graphen

## Musterbeispiel

Berechne die Fläche zwischen den Graphen der Funktionen $f(x) = x^2 -8x +14$ und $g(x) = -x^2 +6x -6$.

:::geogebra{perspective="G" coordsystem="-2,8,-3,4" enableRightClick=false}

f(x)=x^2-8x+14
g(x)=-x^2+6x-6
A = Integral(f,g,2,5)
ShowLabel(A, false)

:::

### Schritt 1: Schnittpunkte berechnen

Zuerst berechnen wir die Schnittpunkte der beiden Funktionen. Dazu setzen wir $f(x) = g(x)$:

$$

\begin{align*}

f(x) &= g(x) \\
x^2 -8x +14 &= -x^2 +6x -6 \\
2x^2 -14x +20 &= 0 \\
x^2 -7x +10 &= 0 \\
x_{1,2} &= \frac{7}{2} \pm \sqrt{(\frac{7}{2})^2 - 10} \\
x_{1,2} &= \frac{7}{2} \pm \sqrt{\frac{49}{4} - 10} \\
x_{1,2} &= \frac{7}{2} \pm 1,5 \\

x_1 &= 5, x_2 = 2

\end{align*}

$$

### Schritt 2: Fläche berechnen

Die Fläche zwischen den beiden Graphen berechnen wir, indem wir die Differenz der beiden Flächen berechnen:

$$

\begin{align*}

A &= \int_{2}^{5} f(x) - g(x) \, dx \\

&= \int_{2}^{5} (x^2 -8x +14) - (-x^2 +6x -6) \, dx \\

&= \int_{2}^{5} 2x^2 -14x +20 \, dx \\

&= \left[ \frac{2}{3}x^3 -7x^2 +20x \right]_{2}^{5} \\

&= \left( \frac{2}{3} \cdot 5^3 -7 \cdot 5^2 +20 \cdot 5 \right) - \left( \frac{2}{3} \cdot 2^3 -7 \cdot 2^2 +20 \cdot 2 \right) \\

&= -9

\end{align*}

$$

## Aufgaben

Skizziere die beiden Funktionen und berechne die Fläche zwischen den Graphen.

a) $f(x)=x^3-x^2-4x+4$ und $g(x)=-x^2+4$

::::collapsible{title="Skizze" id="7822401213adad1"}

:::geogebra{perspective="G" coordsystem="-4,4,-1,8" enableRightClick=false}
f(x)=x^3-x^2-4x+4
g(x)=-x^2+4
A = Integral(f,g,-2,2) 
ShowLabel(A, false)
:::

::::

:::collapsible{title="Lösung" id="782237"}

Schnittpunkte: $S_1(-2|0); S_2(0|4); S_3(2|0)$

Fläche: $A = 8 $

:::

b) $f(x)=x^2-4x+4$ und $g(x)=x-2$

::::collapsible{title="Skizze" id="78224012131"}

:::geogebra{perspective="G" coordsystem="0,4,-1,2" enableRightClick=false}
f(x)=x^2-4x+4
g(x)=x-2
A = Integral(f,g,2,3)
ShowLabel(A, false)
:::

::::

:::collapsible{title="Lösung" id="782238"}

Schnittpunkte: $S_1(2|0); S_2(3|1)$

Fläche: $A = \frac{1}{6}$

:::

c) $f(x)=2x^2-3x+2$ und $g(x)=x^2-2x+2$

::::collapsible{title="Skizze" id="7822401asdad"}

:::geogebra{perspective="G" coordsystem="-1,3,-1,4" enableRightClick=false}
f(x)=2x^2-3x+2
g(x)=x^2-2x+2
A = Integral(f,g,0,1)
ShowLabel(A, false)
:::

::::

:::collapsible{title="Lösung" id="782239"}

Schnittpunkte: $S_1(0|2); S_2(1|1)$

Fläche: $A = \frac{1}{6}$

:::

d) $f(x)=x^3-3x^2+2x$ und $g(x)=x^2-x$

::::collapsible{title="Skizze" id="7822401"}

:::geogebra{perspective="G" coordsystem="-1,5,-3,10" enableRightClick=false}
f(x)=x^3-3x^2+2x
g(x)=x^2-x
A = Integral(f,g,0,3)
ShowLabel(A, false)
:::

::::

:::collapsible{title="Lösung" id="782240"}

Schnittpunkte: $S_1(0|0); S_2(1|0); S_3(3|6)$

Fläche: $A = 2,25$

:::

e) $f(x)=4x-x^2+4$ und $g(x)=x^2-4x+4$

::::collapsible{title="Skizze" id="7822401b"}

:::geogebra{perspective="G" coordsystem="-1,6,-1,8" enableRightClick=false}
f(x)=4x-x^2+4
g(x)=x^2-4x+4
A = Integral(f,g,0,4)
ShowLabel(A, false)
:::

::::

:::collapsible{title="Lösung" id="782241"}

Schnittpunkte: $S_1(0|4); S_2(4|4)$

Fläche: $A \approx 21,33$

:::
