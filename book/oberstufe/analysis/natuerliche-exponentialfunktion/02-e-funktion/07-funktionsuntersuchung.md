---
name: ✏️ Funktionsuntersuchung
index: 7
lang: de
---

# ✏️ Funktionsuntersuchung

Gegeben ist die Funktion $f(x) = e^{x} - x$.

:::geogebra{perspective="G" coordsystem="-4,8,-2,6"}
f(x) = e^x - x
SetLabelMode(f, 1)
:::

a) Untersuche den Graphen von f auf Extrempunkte. Lies diese zuerst grafisch ab und berechne dann die Extrempunkte rechnerisch.

:::collapsible{title="Musterlösung" id="918071"}

$$

\begin{aligned}

f'(x) &= e^{x} - 1\\

f'(x) &= 0 \Leftrightarrow e^{x} - 1 = 0 \Leftrightarrow e^{x} = 1 \Leftrightarrow x = 0\\

f''(x) &= e^{x}\\

f''(0) &= e^{0} = 1 > 0 \Rightarrow \text{Minimum bei } x = 0\\

f(0) &= e^{0} - 0 = 1\\

\end{aligned}

$$

Der Graph hat ein Minimum bei $x = 0$ mit dem Funktionswert $f(0) = 1$.

:::

b) Beschreibe das Monotonieverhalten der Funktion.

:::collapsible{title="Musterlösung" id="918072"}

Die Funktion hat bei $x = 0$ ein Minimum.

Für $x < 0$ ist $f'(x) < 0$ und die Funktion ist somit monoton fallend.
Für $x > 0$ ist $f'(x) > 0$ und die Funktion ist somit monoton steigend.

:::

c) Begründe, dass der Graph von f keine Wendepunkte hat.

:::collapsible{title="Musterlösung" id="918073"}

Die Funktion $f(x) = e^{x} - x$ hat keine Wendepunkte, da die zweite Ableitung $f''(x) = e^{x}$ immer größer als 0 ist.

:::