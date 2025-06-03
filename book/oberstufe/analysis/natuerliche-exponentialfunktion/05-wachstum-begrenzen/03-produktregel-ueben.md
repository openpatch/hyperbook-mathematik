---
name: ✏️ Die Produktregel üben
index: 3
lang: de
---

# ✏️ Die Produktregel üben

## Aufgabe 1

Bestimme die Ableitung der Funktionen:

a) $ f(x) = 3x \cdot e^{2x} $

:::collapsible{title="Lösung"}

Zuerst identifizieren wir die beiden Funktionen, die wir ableiten müssen:

$$

\begin{align*}
u(x) &= 3x \\
v(x) &= e^{2x} \\
\end{align*}

$$

Dann berechnen wir die Ableitungen:

$$

\begin{align*}

u'(x) &= 3 \\
v'(x) &= 2 e^{2x} \\

f'(x) &= u'(x) v(x) + u(x) v'(x) \\
f'(x) &= 3 e^{2x} + 3x \cdot 2 e^{2x} \\
f'(x) &= 3 e^{2x} (1 + 2x)

\end{align*}

$$

:::

b) $ f(x) = 5x^2 \cdot e^{3x} $

:::collapsible{title="Lösung"}

Zuerst identifizieren wir die beiden Funktionen, die wir ableiten müssen:

$$

\begin{align*}
u(x) &= 5x^2 \\
v(x) &= e^{3x} \\
\end{align*}

$$

Dann berechnen wir die Ableitungen:

$$

\begin{align*}

u'(x) &= 10x \\
v'(x) &= 3 e^{3x} \\
f'(x) &= u'(x) v(x) + u(x) v'(x) \\
f'(x) &= 10x e^{3x} + 5x^2 \cdot 3 e^{3x} \\
f'(x) &= e^{3x} (10x + 15x^2) \\

\end{align*}

$$

:::

c) $ f(x) = x^3 \cdot \sin(x) $

:::collapsible{title="Lösung"}

Zuerst identifizieren wir die beiden Funktionen, die wir ableiten müssen:

$$

\begin{align*}
u(x) &= x^3 \\
v(x) &= \sin(x)
\end{align*}

$$

Dann berechnen wir die Ableitungen:

$$

\begin{align*}

u'(x) &= 3x^2 \\
v'(x) &= \cos(x) \\

f'(x) &= u'(x) v(x) + u(x) v'(x) \\
f'(x) &= 3x^2 \sin(x) + x^3 \cos(x) \\
f'(x) &= \sin(x) \cdot 3x^2 + x^3 \cdot \cos(x) \\
f'(x) = 3x^2 \sin(x) + x^3 \cos(x)

\end{align*}

$$

:::

## Aufgabe 2

Analysiere die Funktion $f(x) = 4x \cdot e^{-0.5x}$.

a) Bestimme die Nullstellen der Funktion.

:::collapsible{title="Lösung"}

Zuerst setzen wir die Funktion gleich Null:

$$

f(x) = 4x \cdot e^{-0.5x} = 0

$$

Nun können wir die Nullstellen bestimmen. Da $e^{-0.5x}$ für alle $x$ ungleich Null ist, setzen wir nur den anderen Faktor gleich Null:

$$

4x = 0 \implies x = 0

$$

Somit hat die Funktion eine Nullstelle bei $x = 0$.

:::

b) Bestimme die Extrempunkte der Funktion.

::::collapsible{title="Lösung"}

Zuerst berechnen wir die Ableitung der Funktion:

$$

\begin{align*}
u(x) &= 4x \\
v(x) &= e^{-0.5x} \\
u'(x) &= 4 \\
v'(x) &= -0.5 e^{-0.5x} \\
f'(x) &= u'(x) v(x) + u(x) v'(x) \\
f'(x) &= 4 e^{-0.5x} + 4x \cdot (-0.5 e^{-0.5x}) \\
f'(x) &= e^{-0.5x} (4 - 2x)
\end{align*}

$$

Es ist wichtig, dass wir den Funktionsterm ganz zusammenfassen. Denn für die Bestimmung der Extrempunkte setzen wir die Ableitung gleich Null:

$$

f'(x) = e^{-0.5x} (4 - 2x) = 0

$$

Jetzt können wir wieder den Faktor $e^{-0.5x}$ ignorieren, da er für alle $x$ ungleich Null ist. Wir setzen nur den anderen Faktor gleich Null:

$$

4 - 2x = 0 \implies 2x = 4 \implies x = 2

$$

Also hat die Funktion einen Extrempunkt bei $x = 2$.

Um herauszufinden, ob es sich um ein Maximum oder Minimum handelt, untersuchen wir das Vorzeichen der Ableitung vor und nach dem Punkt $x = 2$:

$$

\begin{align*}

f'(1) &= e^{-0.5 \cdot 1} (4 - 2 \cdot 1) = e^{-0.5} (4 - 2) = e^{-0.5} \cdot 2 > 0 \quad (\text{steigend}) \\
f'(3) &= e^{-0.5 \cdot 3} (4 - 2 \cdot 3) = e^{-1.5} (4 - 6) = e^{-1.5} \cdot (-2) < 0 \quad (\text{fallend})

\end{align*}

$$

Daraus folgt, dass die Funktion bei $x = 2$ ein Maximum hat.

:::alert{info}
Wir hätten auch die zweite Ableitung $f''(x)$ bilden können, um zu überprüfen, ob es sich um ein Maximum oder Minimum handelt.
:::

::::

c) Untersuche die Funktion auf Wendestellen.

:::collapsible{title="Lösung"}

Um die Wendestellen zu finden, müssen wir die zweite Ableitung der Funktion bestimmen:

$$

\begin{align*}
u(x) &= e^{-0.5x} \\
v(x) &= 4 - 2x \\
u'(x) &= -0.5 e^{-0.5x} \\
v'(x) &= -2 \\

f''(x) &= u'(x) v(x) + u(x) v'(x) \\
f''(x) &= (-0.5 e^{-0.5x}) (4 - 2x) + e^{-0.5x} (-2) \\
f''(x) &= e^{-0.5x} \left(-0.5 (4 - 2x) - 2\right) \\
f''(x) &= e^{-0.5x} \left(-4 + x\right) \\
\end{align*}

$$

Hier setzen wir die zweite Ableitung gleich Null, um die Wendestellen zu finden:

$$

f''(x) = e^{-0.5x} (-4 + x) = 0

$$

Nun können wir wieder den Faktor $e^{-0.5x}$ ignorieren, da er für alle $x$ ungleich Null ist. Wir setzen nur den anderen Faktor gleich Null:

$$

-4 + x = 0 \implies x = 4

$$

Jetzt überprüfen wir, ob es sich um eine Wendestelle handelt, indem wir die dritte Ableitung $f'''(x)$ betrachten:

$$

\begin{align*}

u(x) &= e^{-0.5x} \\
v(x) &= -4 + x \\
u'(x) &= -0.5 e^{-0.5x} \\
v'(x) &= 1 \\
f'''(x) &= u'(x) v(x) + u(x) v'(x) \\
f'''(x) &= (-0.5 e^{-0.5x})(-4 + x) + e^{-0.5x}(1) \\
f'''(x) &= e^{-0.5x} \left(-0.5(-4 + x) + 1\right) \\
f'''(x) &= e^{-0.5x} \left(3 - 0.5x\right)

\end{align*}

$$

Jetzt setzen wir $x = 4$ in die dritte Ableitung ein:

$$ 

f'''(4) = e^{-0.5 \cdot 4} (3 - 0.5 \cdot 4) = e^{-2} (3 - 2) = e^{-2} \neq 0

$$

Daraus folgt, dass es sich um eine Wendestelle handelt.

:::
