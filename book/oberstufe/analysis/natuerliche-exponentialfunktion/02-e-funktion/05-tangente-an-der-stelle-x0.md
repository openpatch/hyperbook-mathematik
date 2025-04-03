---
name: 💡 Tangente an der Stelle x0
index: 5
lang: de
---

# 💡 Tangente an der Stelle x0

::::alert{info}

Lies den Text oder schaue dir das Video an, um mehr über die Tangente an der Stelle $x_0$ zu erfahren.

:::collapsible{title="Video" id="501153"}

::youtube[title]{#hC_8k59BYxg}

:::
::::


Die Tangente einer Funktion an der Stelle $x_0$ können wir bereits bestimmen, indem wir die folgende Formel verwenden:

$$

\begin{aligned}

t(x) &= f'(x_0) \cdot (x - x_0) + f(x_0)\\

\end{aligned}

$$

Für die natürliche Exponentialfunktion können wir die Tangente an der Stelle $x_0 = 1$ also wie folgt bestimmen:

$$

\begin{aligned}

t(x) &= f'(x_0) \cdot (x - x_0) + f(x_0)\\

&= e^{1} \cdot (x - 1) + e^{1}\\

\end{aligned}

$$

Hier siehst du den Graphen der Funktion und die Tangente an der Stelle $x_0 = 1$:

:::geogebra{perspective="G" coordsystem="-10,10,-2,10"}
f(x) = e^x
SetLabelMode(f, 1)
x_0 = 1
t(x) = e^x_0 * (x - x_0) + e^x_0
SetLabelMode(t, 1)
:::

In der folgenden Abbildung kannst du die Stelle der Tangente verschieben und die Veränderung der Tangentengleichung beobachten. Hier erkennst du auch nochmal wie schnell die Funktion wächst. Wähle dazu ein größeres $x_0$:

:::geogebra{perspective="G" coordsystem="-10,10,-2,40"}
f(x) = e^x
SetLabelMode(f, 1)
x_0 = Slider(0, 10)
t(x) = e^x_0 * (x - x_0) + e^x_0
SetLabelMode(t, 1)
:::