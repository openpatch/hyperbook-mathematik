---
name: ✏️ Tangenten aufstellen
index: 6
lang: de
---

# ✏️ Tangenten aufstellen

## Aufgabe 1

Zeichne den Graphen der Funktion $f(x) = e^{x}$, bestimme die Tangenten an den Stellen $x_0 = 0$ und $x_0 = 1$ und zeichne die Tangenten in das Koordinatensystem ein.

Zeichne das Koodinatensystem im Bereich $[0, 10]$ für die x-Achse und $[0, 10]$ für die y-Achse.

:::collapsible{title="Tipp" id="098042"}

Fertige zuerste eine Wertetabelle für die Funktion $f(x) = e^{x}$ an. 

| x | f(x) |
| -- | ---- |
| 0 | f(0) |
| 1 | f(1) |
| 2 | f(2) |
| 3 | .. |
| .. | .. |

:::

::::collapsible{title="Musterlösung" id="918069"}


:::geogebra{perspective="G" coordsystem="-2,10,-2,10"}
f(x) = e^x
SetLabelMode(f, 1)
t_0(x) = e^0 * (x - 0) + e^0
SetLabelMode(t_0, 1)
t_1(x) = e^1 * (x - 1) + e^1
SetLabelMode(t_1, 1)
:::

::::

## Aufgabe 2

Gegeben ist die Funktion $f(x) = e^{x} - 2$.

a) Gib die Gleichung der Abbleitung $f'(x)$ an.

:::collapsible{title="Musterlösung" id="918070"}

$$

\begin{aligned}

f'(x) &= e^{x}\\

\end{aligned}
$$

:::

b) Berechne $f(0)$ und $f'(0)$.

:::collapsible{title="Musterlösung" id="918071"}

$$

\begin{aligned}

f(0) &= e^{0} - 2 = 1 - 2 = -1\\

f'(0) &= e^{0} = 1\\

\end{aligned}

$$

:::

c) Bestimme die Tangente an der Stelle $x_0 = 1$.

:::collapsible{title="Musterlösung" id="848732"}

$$

\begin{aligned}

t(x) &= f'(x_0) \cdot (x - x_0) + f(x_0)\\

&= e^{1} \cdot (x - 1) + e^{1} - 2\\

&= e \cdot (x - 1) + e - 2\\

\end{aligned}

$$

:::


d) Skizziere den Verlauf der Funktion $f(x)$ und die Tangente an der Stelle $x_0 = 1$.

::::collapsible{title="Musterlösung" id="408022"}

:::geogebra{perspective="G" coordsystem="-4,8,-4,8"}
f(x) = e^x - 2
SetLabelMode(f, 1)
t(x) = e^1 * (x - 1) + e^1 - 2
SetLabelMode(t, 1)
:::

::::