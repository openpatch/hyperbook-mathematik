---
name: Aufgabensammlung
index: 31
lang: de
---

# Aufgabensammlung

:::::::::collapsible{title="Flächeninhalt mit geometrischen Formen bestimmen" id="54876sa4"}

## Aufgabe 1

:::geogebra{perspective="G" coordsystem="-5,5,-8,2" enableRightClick=false}

f(x) = -2x -7, (-4 <= x <= 0)
ShowLabel(f, false)
h(x) = -7, (0 <= x <= 2)
ShowLabel(h, false)
p(x) = 1x - 4, (2 <= x <= 4)
ShowLabel(p, false)
a = Integral(f, -4, -3.5)
ShowLabel(a, false)
b = Integral(f, -3.5, 0)
ShowLabel(b, false)
c = Integral(h, 0, 2)
ShowLabel(c, false)
d = Integral(p, 2, 4)
ShowLabel(d, false)

:::

:::collapsible{title="Lösung" id="357182sadfasg"}

A = 0.25 + 12.25 + 14 + 2 = 28.5

:::

## Aufgabe 2

:::geogebra{perspective="G" coordsystem="-5,5,-8,2" enableRightClick=false}

f(x) = -0.5x -7, (-4 <= x <= 0)
ShowLabel(f, false)
h(x) = -7, (0 <= x <= 2)
ShowLabel(h, false)
a = Integral(f, -4, 0)
ShowLabel(a, false)
c = Integral(h, 0, 2)
ShowLabel(c, false)

:::

:::collapsible{title="Lösung" id="357182"}

A = 24 + 14 = 38

:::

:::::::::

:::::::::collapsible{title="Unbestimmtes Integral (Menge aller Stammfunktionen) von ganzrationalen Funktionen bestimmen" id="548764asdfsdag"}

Bestimme das unbestimme Integral (die Menge aller Stammfunktionen) der folgenden Funktionen und gib zwei konrete Stammfunktionen an.

## Aufgabe 1

$$

f(x) = 3x^2 - 2x + 1

$$

:::collapsible{title="Lösung" id="357182sadfasg"}

$$

\begin{align*}
F(x) &= \int 3x^2 - 2x + 1 \, dx \\
F(x) &= x^3 - x^2 + x + C
\end{align*}

$$

Zwei konkrete Stammfunktionen:

$$

\begin{align*}

F_1(x) &= x^3 - x^2 + x + 1 \\
F_2(x) &= x^3 - x^2 + x + 2

\end{align*}

$$

:::

## Aufgabe 2

$$

f(x) = 2x^3 - 3x^2 + 4x - 1

$$

:::collapsible{title="Lösung" id="35718asfasda2"}

$$

\begin{align*}

F(x) &= \int 2x^3 - 3x^2 + 4x - 1 \, dx \\
F(x) &= \frac{1}{2}x^4 - x^3 + 2x^2 - x + C

\end{align*}

$$

Zwei konkrete Stammfunktionen:

$$

\begin{align*}

F_1(x) &= \frac{1}{2}x^4 - x^3 + 2x^2 - x + 1 \\
F_2(x) &= \frac{1}{2}x^4 - x^3 + 2x^2 - x - 20

\end{align*}

$$

:::

## Aufgabe 3

$$

f(x) = 4x^3 - 2x^2 + 3x - 1

$$

:::collapsible{title="Lösung" id="357182asdfasdf"}

$$

\begin{align*}

F(x) &= \int 4x^3 - 2x^2 + 3x - 1 \, dx \\
F(x) &= x^4 - \frac{2}{3}x^3 + \frac{3}{2}x^2 - x + C

\end{align*}

$$

Zwei konkrete Stammfunktionen:

$$

\begin{align*}

F_1(x) &= x^4 - \frac{2}{3}x^3 + \frac{3}{2}x^2 - x + 1 \\
F_2(x) &= x^4 - \frac{2}{3}x^3 + \frac{3}{2}x^2 - x + \pi

\end{align*}

$$

:::

## Aufgabe 4

$$

f(x) = (x - 1)(x + 1)

$$

:::collapsible{title="Lösung" id="3571asdfasd82asdfasdf"}

Hier nutzen wir zuerst die dritte binomische Formel.

$$

\begin{align*}

F(x) &= \int (x - 1)(x + 1) \, dx \\
F(x) &= \int (x^2 - 1) \, dx \\
F(x) &= \frac{1}{3}x^3 - x + C

\end{align*}

$$

Zwei konkrete Stammfunktionen:

$$

\begin{align*}

F_1(x) &= \frac{1}{3}x^3 - x + 1 \\
F_2(x) &= \frac{1}{3}x^3 - x

\end{align*}

$$

:::

## Aufgabe 5

$$

h(t) = (t^2 - 20) \cdot t

$$

:::collapsible{title="Lösung" id="3571sdfas82asdfasdf"}

Hier multiplizieren wir zuerst die Klammern aus.

$$

\begin{align*}

H(t) &= \int (t^2 - 20) \cdot t \, dt \\
H(t) &= \int (t^3 - 20t) \, dt \\
H(t) &= \frac{1}{4}t^4 - 10t^2 + C

\end{align*}

$$

Zwei konkrete Stammfunktionen:

$$

\begin{align*}

H_1(t) &= \frac{1}{4}t^4 - 10t^2 + 1 \\
H_2(t) &= \frac{1}{4}t^4 - 10t^2 + 2

\end{align*}

$$

:::

## Aufgabe 6

$$

j(k) = 20 * (20 - k^3) * k^2

$$

:::collapsible{title="Lösung" id="3571asdf82asdfasdsdfsdff"}

Hier multiplizieren wir zuerst die Klammern aus.

$$

\begin{align*}

J(k) &= \int 20 \cdot (20 - k^3) \cdot k^2 \, dk \\
J(k) &= \int 20k^2 \cdot (20 - k^3) \, dk \\
J(k) &= \int 400k^2 - 20k^5 \, dk \\
J(k) &= \frac{400}{3}k^3 - 4k^6 + C

\end{align*}

$$

Zwei konkrete Stammfunktionen:

$$

\begin{align*}

J_1(k) &= \frac{400}{3}k^3 - 4k^6 + 1 \\
J_2(k) &= \frac{400}{3}k^3 - 4k^6 + \frac{1}{2}

\end{align*}

$$

:::


:::::::::