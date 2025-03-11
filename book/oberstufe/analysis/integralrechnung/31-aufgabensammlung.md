---
name: ✅ Aufgabensammlung
index: 31
lang: de
---

# ✅ Aufgabensammlung

:::::::::collapsible{title="Flächeninhalt mit geometrischen Formen bestimmen" id="54876sa4"}

:::collapsible{title="Erklärung" id="982227"}

Schau dir das folgende Video von Minute 0 bis Minute 6 an, um zu lernen, wie du den Flächeninhalt mit geometrischen Formen bestimmen kannst.

::youtube[Flächeninhalt mit geometrischen Formen bestimmen]{#rA4SEQNwNqc}


:::

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

:::collapsible{title="Erklärung" id="200108"}

Das unbestimmte Integral ist die Menge aller Stammfunktionen einer Funktion. Schau dir das folgende Video an, um zu lernen, wie du das unbestimmte Integral von ganzrationalen Funktionen bestimmen kannst.

Ein unbestimmtes Integral heißt so, da keine Integrationsgrenzen angegeben sind. Es wird mit dem Integralzeichen $\int$ dargestellt.

::youtube[Stammfunktion von Polynomen bestimmen]{#uWVZ37PthFU}

:::

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

:::::::::collapsible{title="Bestimmtes Integral berechnen" id="54876sa5"}

::::collapsible{title="Erklärung" id="954643"}

In diesem Video wird erklärt, wie du das bestimmte Integral einer Funktion berechnen kannst.

::youtube[Flächen mit der Stammfunktion bestimmen]{#nGwRQyoozD8}

::::

## Aufgabe 1

Berechne das bestimmte Integral der Funktion $f(x) = 3x^2 - 2x + 1$ im Intervall $[-1, 2]$.

:::collapsible{title="Lösung" id="35718243252"}

$$

\begin{align*}

d &= \int_{-1}^{2} 3x^2 - 2x + 1 \, dx \\

d &= \left[ x^3 - x^2 + x \right]_{-1}^{2} \\

d &= 9

\end{align*}

$$

:::

## Aufgabe 2

Berechne das bestimmte Integral der Funktion $f(x) = \frac{1}{2}(x^2 - 3x + 4) \cdot x$ im Intervall $[0, 3]$.

:::collapsible{title="Lösung" id="35718243253"}

$$

\begin{align*}

d &= \int_{0}^{3} \frac{1}{2}(x^2 - 3x + 4) \cdot x \, dx \\

d &= \int_{0}^{3} \frac{1}{2}x^3 - \frac{3}{2}x^2 + 2x \, dx \\

d &= \left[ \frac{1}{8}x^4 - \frac{1}{2}x^3 + x^2 \right]_{0}^{3} \\

d &\approx 5,63

\end{align*}

$$

:::

:::::::::


:::::::::collapsible{title="Bestandsfunktionen aufstellen" id="54876sa6asd"}

:::collapsible{title="Erklärung" id="495992"}

In diesem Video wird erklärt, wie du Bestandsfunktionen aufstellen kannst.

::youtube[Bestandsfunktion]{#1wCXTKXHkpU}

Eine schriftliche Erklärung findest du [hier](/oberstufe/analysis/integralrechnung/17-bestandsfunktion).

:::

## Aufgabe 1

In einem Gastank befinden sich zu Beginn des Tages 1000 Liter Wasserstoff. Durch eine Leitung wird Gas entnommen und hinzugefügt. Die Verbrauchsgeschwindigkeit in Liter pro Stunde lässt sich im Laufe des Tages mit der Funktion 

$$
f(t) = 0,02(t^2 - t + 12) \cdot t^2
$$ 
modellieren. Dabei ist $t$ die Zeit in Stunden.

a) Bestimme die Bestandsfunktion $B(t)$, die den Bestand an Wasserstoff im Tank zu einem beliebigen Zeitpunkt $t$ in Litern angibt.

:::collapsible{title="Lösung" id="35718243254"}

Die Bestandsfunktion $B(t)$ ergibt sich durch Integration der Funktion $f(t)$:

$$

\begin{align*}

B(t) &= \int f(t) \, dt \\

B(t) &= \int 0,02(t^2 - t + 12) \cdot t^2 \, dt \\

B(t) &= 0,02 \int t^4 - t^3 + 12t^2 \, dt \\

B(t) &= 0,02 \cdot (\frac{1}{5}t^5 - \frac{1}{4}t^4 + 4t^3) + C

\end{align*}

$$

Da zu Beginn des Tages 1000 Liter Wasserstoff im Tank waren, gilt:

$$

\begin{align*}

B(0) &= 1000 \\

0,02 \cdot (\frac{1}{5} \cdot 0^5 - \frac{1}{4} \cdot 0^4 + 4 \cdot 0^3) + C &= 1000 \\

C &= 1000

\end{align*}

$$

Die Bestandsfunktion $B(t)$ lautet also:

$$

B(t) = 0,02 \cdot (\frac{1}{5}t^5 - \frac{1}{4}t^4 + 4t^3) + 1000

$$

:::

b) Bestimme wie viel Wasserstoff nach 10 Stunden im Tank ist.

:::collapsible{title="Lösung" id="35718243255"}

$$

\begin{align*}

B(10) &= 0,02 \cdot (\frac{1}{5} \cdot 10^5 - \frac{1}{4} \cdot 10^4 + 4 \cdot 10^3) + 1000 \\

B(10) &= 1430

\end{align*}

$$

Nach 10 Stunden sind also 1430 Liter Wasserstoff im Tank.

:::

c) Zeige rechnerisch, dass am Ende des Tages, nach 24 Stunden, der Tank nicht leer ist.

:::collapsible{title="Lösung" id="35718243256"}

$$

\begin{align*}

B(24) &= 0,02 \cdot (\frac{1}{5} \cdot 24^5 - \frac{1}{4} \cdot 24^4 + 4 \cdot 24^3) + 1000 \\

B(24) &\approx 32297

\end{align*}

$$

Am Ende des Tages, nach 24 Stunden, sind also 32297 Liter Wasserstoff im Tank.

:::

d) Bestimme den Zeitpunkt, zu dem der Tank in den ersten 24 Stunden am meisten Wasserstoff enthält.

:::collapsible{title="Lösung" id="3572312"}

Die Ableitung der Bestandsfunktion $B(t)$ gibt die Veränderung des Bestands an Wasserstoff im Tank an. Der Zeitpunkt, an dem der Tank am meisten Wasserstoff enthält, ist der Zeitpunkt, an dem die Ableitung $B'(t)$ den Wert 0 annimmt.

$$

\begin{align*}

B'(t) &= f(t) \\

B'(t) &= 0,02(t^4 - t^3 + 12t^2)

\end{align*}

$$

$$

\begin{align*}

0 &= 0,02(t^4 - t^3 + 12t^2) \\

0 &= 0,02t^2 \cdot (t^2 - t + 12)

t_1 &= 0 \\
t_{2,3} &= 1 \pm \sqrt{1 - 48} \\

\end{align*}

$$

Da die Diskriminante negativ ist, hat die Funktion keine weiteren Nullstellen.

Zusätzlich müssen wir noch die Randpunkte des Intervalls $[0, 24]$ betrachten:

$$

\begin{align*}

B(0) &= 1000 \\
B(24) &= 32297

\end{align*}

$$

Der Tank enthält also nach 20 Stunden am meisten Wasserstoff.

:::

## Aufgabe 2

Der Wasserstand eines Stausees verändert sich im Laufe eines Tages. Die Veränderung des Wasserstands in Metern pro Stunde lässt sich mit der Funktion

$$

f(t) = \frac{1}{10000}(5t^2 - 120t + 480) \cdot t

$$

modellieren. Dabei ist $t \in [0;24]$ die Zeit in Stunden. Zu Beginn des Tages betrug der Wasserstand im Stausee 10 Meter.

a) Bestimme die Bestandsfunktion $B(t)$, die den Wasserstand im Stausee zu einem beliebigen Zeitpunkt $t$ in Metern angibt.

:::collapsible{title="Lösung" id="35718243257"}

Die Bestandsfunktion $B(t)$ ergibt sich durch Integration der Funktion $f(t)$:

$$

\begin{align*}

B(t) &= \int f(t) \, dt \\

B(t) &= \int \frac{1}{10000}(5t^2 - 120t + 480) \cdot t \, dt \\
B(t) &= \frac{1}{10000} \int 5t^3 - 120t^2 + 480t \, dt \\
B(t) &= \frac{1}{10000} (\frac{5}{4}t^4 - 120 \cdot \frac{1}{3}t^3 + 480 \cdot \frac{1}{2}t^2) + C

\end{align*}

$$

Da zu Beginn des Tages der Wasserstand im Stausee 10 Meter betrug, gilt:

$$

\begin{align*}

B(0) &= 10 \\

\frac{1}{10000} (\frac{5}{4} \cdot 0^4 - 120 \cdot \frac{1}{3} \cdot 0^3 + 480 \cdot \frac{1}{2} \cdot 0^2) + C &= 10 \\

C &= 10

\end{align*}

$$

Die Bestandsfunktion $B(t)$ lautet also:

$$

B(t) = \frac{1}{10000} (\frac{5}{4}t^4 - 120 \cdot \frac{1}{3}t^3 + 480 \cdot \frac{1}{2}t^2) + 10

$$

:::


b) Bestimme wie hoch der Wasserstand nach 10 Stunden ist.

:::collapsible{title="Lösung" id="35718243258"}

$$

\begin{align*}

B(10) &= \frac{1}{10000} (\frac{5}{4} \cdot 10^4 - 120 \cdot \frac{1}{3} \cdot 10^3 + 480 \cdot \frac{1}{2} \cdot 10^2) + 10 \\

B(10) &= 9,65

\end{align*}

$$

Nach 10 Stunden beträgt der Wasserstand im Stausee also 50 Meter.

:::

c) Zeige rechnerisch, dass der Wasserstand zu Beginn des Tages und am Ende des Tages gleich ist.

:::collapsible{title="Lösung" id="35718243259"}

$$

\begin{align*}

B(0) &= \frac{1}{10000} (\frac{5}{4} \cdot 0^4 - 120 \cdot \frac{1}{3} \cdot 0^3 + 480 \cdot \frac{1}{2} \cdot 0^2) + 10 \\

B(0) &= 10

\end{align*}

$$

$$

\begin{align*}

B(24) &= \frac{1}{10000} (\frac{5}{4} \cdot 24^4 - 120 \cdot \frac{1}{3} \cdot 24^3 + 480 \cdot \frac{1}{2} \cdot 24^2) + 10 \\

B(24) &= 10

\end{align*}

$$

Der Wasserstand zu Beginn des Tages und am Ende des Tages ist also gleich.

:::



:::::::::

:::::::::collapsible{title="Flächeninhalt zwischen dem Graphen einer Funktion und der x-Achse bestimmen" id="54876sa7"}

:::collapsible{title="Erklärung" id="851913"}

In diesem Video wird erklärt, wie du den Flächeninhalt zwischen dem Graphen einer Funktion und der x-Achse bestimmen kannst.

::youtube[Flächen zwischen dem Graphen und der x-Achse]{#tWgejCz2iEE}

Eine schriftliche Erklärung findest du [hier](/oberstufe/analysis/integralrechnung/20-flaeche-zwischen-graph-und-x-achse).

:::

## Aufgabe 1

Berechne den Flächeninhalt der Fläche, die von der Funktion $f(x) = 2x^2 - 4x + 3$ und der x-Achse im Intervall $[-1; 4]$ eingeschlossen wird.

:::collapsible{title="Lösung" id="35718243260"}

1. Nullstellen berechnen:

$$

\begin{align*}

f(x) &= 0 \\

2x^2 - 4x + 3 &= 0 \\

x^2 - 2x + \frac{3}{2} &= 0 \\

x_{1,2} &= 1 \pm \sqrt{1 - \frac{3}{2}} \\
x_{1,2} &= 1 \pm \sqrt{-\frac{1}{2}} \\



\end{align*}

$$

Da die Wurzel aus einer negativen Zahl nicht definiert ist, hat die Funktion keine Nullstellen.

2. Flächen berechnen:

$$

\begin{align*}

A &= \int_{-1}^{4} 2x^2 - 4x + 3 \, dx \\

A &= \left[ \frac{2}{3}x^3 - 2x^2 + 3x \right]_{-1}^{4} \\

A &\approx 28,33

\end{align*}

$$

:::

# Aufgabe 2

Berechne den Flächeninhalt der Fläche, die von der Funktion $f(x) = (x + 2)^2 - 20$ und der x-Achse im Intervall $[0; 3]$ eingeschlossen wird.

:::collapsible{title="Lösung" id="35718243261"}

1. Nullstellen berechnen:

$$

\begin{align*}

f(x) &= 0 \\

(x + 2)^2 - 20 &= 0 \\
x^2 + 4x + 4 - 20 &= 0 \\
x^2 + 4x - 16 &= 0 \\
x_1 &\approx -6,47 \\
x_2 &\approx 2,47

\end{align*}

$$

2. Flächen berechnen:

$$

\begin{align*}

A_1 &= \int_{0}^{2,47} (x + 2)^2 - 20 \, dx \\
A_2 &= \int_{2,47}^{3} (x + 2)^2 - 20 \, dx \\

A_1 &\approx 22,3 \\
A_2 &\approx 1,3

A = A_1 + A_2 = 23,6

\end{align*}

$$

:::::::::

:::::::::collapsible{title="Flächeninhalt zwischen zwei Graphen bestimmen" id="54876skpqweoa8"}

:::collapsible{title="Erklärung" id="153713"}

In diesem Video wird erklärt, wie du den Flächeninhalt zwischen zwei Graphen bestimmen kannst.

::youtube[Flächeninhalt zwischen zwei Graphen]{#XcqaJ42smNg}

Eine schriftliche Erklärung findest du [hier](/oberstufe/analysis/integralrechnung/23-fläche-zwischen-zwei-graphen).

:::

## Aufgabe 1

Bestimme die Fläche, die von der Funktion $f$ und der Funktion $g$ eingeschlossen wird.

$$

\begin{align*}
f(x) &= (x+1)^3-3 \\
g(x) &= x-2
\end{align*}

$$

:::geogebra{perspective="G" coordsystem="-3,1,-5,-1" enableRightClick=false}
f(x)=(x+1)^3-3
g(x)=x-2
d = Integral(f, g, -2, -1)
ShowLabel(d, false)
e = Integral(f, g, -1, 0)
ShowLabel(e, false)
:::

:::collapsible{title="Lösung" id="521159"}

Zuerst multiplizieren wir den Funktionsterm von $f(x)$ aus:

$$

\begin{align*}
f(x) &= (x^2 + 2x +1)(x+1)-3 \\
f(x) &= x^3 + 3x^2 + 3x - 2
\end{align*}

$$

Dann rechnen wir die Schnittstellen aus:

$$

\begin{align*}

f(x) &= g(x) \\
x^3 + 3x^2 + 3x - 2 &= x - 2 \\
x^3 + 3x^2 + 2x &= 0 \\
x(x^2 + 3x + 2) &= 0 \\
x(x+1)(x+2) &= 0 \\
x_1 &= 0 \\
x_2 &= -1 \\
x_3 &= -2

\end{align*}

$$

Dann stellen wir die Differenzfunktion $h(x) = f(x) - g(x)$ auf:

$$

\begin{align*}
h(x) &= x^3 + 3x^2 + 3x - 2 - x + 2 \\
h(x) &= x^3 + 3x^2 + 2x
\end{align*}

$$

Jetzt können wir die Teilflächen berechnen:

$$

\begin{align*}

A_1 &= \int_{-2}^{-1} h(x) \, dx \\
A_2 &= \int_{-1}^{0} h(x) \, dx

\end{align*}

$$

$ A = 0,5 $

:::

## Aufgabe 2

Bestimme die Fläche, die von der Funktion $f$ und der Funktion $g$ eingeschlossen wird. Dabei ist bekannt, dass die Schnittstellen der Funktionen bei $x_1=-1$ und $x_2=1$ liegen.

$$

\begin{align*}
f(x) &= (x+1)(x-1) \cdot x \\
g(x) &= x^2-1
\end{align*}

$$

:::geogebra{perspective="G" coordsystem="-1.5,1.5,-2,1" enableRightClick=false}
f(x)=(x+1)(x-1) * x
g(x)=x^2-1
p=Integral(f, g, -1, 1)
ShowLabel(p, false)
:::

:::collapsible{title="Lösung" id="109524"}

Zuerst multiplizieren wir den Funktionsterm von $f(x)$ aus:

$$

f(x) = x^3 - x

$$

Dann stellen wir die Differenzfunktion auf:

$$

h(x)=x^3-x-x^2+1

$$

Jetzt können wir die Fläche berechnen:

$$

\begin{align*}
A &= \int_{-1}^{1} x^3-x^2-x+1 dx \\
A &= \left[ \frac{1}{4}x^4 - \frac{1}{3}x^3 - \frac{1}{2}x^2 + x \right]_{-1}^{1}
\end{align*}

$$

$ A \approx 1,33 $

:::

:::::::::

:::::::::collapsible{title="Integralgrenze bestimmen, wenn der Integralwert gegeben ist" id="54876sa8"}

:::collapsible{title="Erklärung" id="153713"}

In diesem Video wird erklärt, wie du eine Grenze des Integrals bestimmen kannst, wenn der Integralwert gegeben ist.

::youtube[Integralgrenze bestimmen, wenn der Integralwert gegeben ist]{#xSe-9hOflLM}

:::

# Aufgabe 1

Bestimme die obere Grenze des Integrals, wenn der Integralwert gegeben ist.

$$

\int_{0}^{x} (2t^2 - 4t - 3) \, dt = 0

$$

:::collapsible{title="Lösung" id="35718243262"}

Wir berechnen das Integral mit der gegebenen unteren Grenze $x$ und lösen die Gleichung nach $x$ auf.

$$

\begin{align*}

\int_{0}^{x} (2t^2 - 4t - 3) \, dt &= 0 \\
\left[ \frac{2}{3}t^3 - 2t^2 - 3t \right]_{0}^{x} &= 0 \\
\frac{2}{3}x^3 - 2x^2 - 3x &= 0 \\
x \cdot (\frac{2}{3}x^2 - 2x - 3) &= 0 \\

\end{align*}

$$

Mit der pq-Formel erhalten wir die Nullstellen:

$$

\begin{align*}
x_1 &= 0 \\
x_{2,3} &= x^2 - 3x - \frac{9}{2} = 0 \\
x_2 &\approx -1,1 \\
x_3 &\approx 4,1
\end{align*}

$$

Die obere Grenze des Integrals ist also $x_3 \approx 4,1$, da $x_2$ und $x_1$ nicht im Intervall $(0, x]$ liegen.

:::

# Aufgabe 2

Bestimme die untere Grenze des Integrals, wenn der Integralwert gegeben ist.

$$

\int_{x}^{4} (2t - 4) \, dt = 4

$$

:::collapsible{title="Lösung" id="35718243263"}

Wir berechnen das Integral mit der gegebenen unteren Grenze $x$ und lösen die Gleichung nach $x$ auf.

$$

\begin{align*}

\int_{x}^{4} (2t - 4) \, dt &= 4 \\

\left[ t^2 - 4t \right]_{x}^{4} &= 4 \\

4^2 - 4 \cdot 4 - x^2 + 4x &= 4 \\

16 - 16 - x^2 + 4x &= 4 \\

-x^2 + 4x &= 4 \\

x^2 - 4x &= -4 \\

x^2 - 4x + 4 &= 0

\end{align*}

$$

Mit der pq-Formel erhalten wir die Nullstellen:

$$

\begin{align*}

x_{1,2} &= \frac{4}{2} \pm \sqrt{\left( \frac{4}{2} \right)^2 - 4} \\
x_1 &= 2 \\
x_2 &= 2

\end{align*}

$$

Die untere Grenze des Integrals ist also $x = 2$.

:::::::::

:::::::::collapsible{title="Kombinierte Aufgaben im Sachkontext" id="54876saqweezrbc4"}

# Aufgabe 1

Das Logo für ein Reiseunternehmen wurde mithilfe von zwei Funktionen modelliert. Die nachfolgende Abbildung zeigt dieses
Logo, das von dem Graphen einer ganzrationalen Funktion $f$ vierten Grades und dessen Spiegelung, der Funktion $g$, begrenzt wird.

:::geogebra{perspective="G" height=400 coordsystem="-2.5,2.5,-1.5,1.5" axissteps="0.1,0.1" enableRightClick=false}
f(x)=-0.25x^4+0.5x^2-0.25
g(x)=-f(x)
P=(0,0)
ShowLabel(P, false)
Circle(P,0.1)
:::

a) Bestimme die Funktiongleichungen der beiden Funktionen. Nehme dafür an, dass die Funktion $f$ einen Tiefpunkt $T(0|-0.25)$ und zwei Hochpunkte bei $H_1(-1|0)$ und $H_2(1|0)$ hat.

:::collapsible{title="Lösung" id="626057"}

Zunächst bestimmen wir die Funktiongleichung der Funktion $f$.

Dazu nutzen wir die allgemeine Form einer ganzrationalen Funktion vierten Grades:

$$

\begin{align*}
f(x) &= ax^4 + bx^3 + cx^2 + dx + e
f'(x) &= 4ax^3 + 3bx^2 + 2cx + d
\end{align*}

$$

An der Abbildung und an der Lage der beiden Hochpunkte können wir erkennen, dass die Funktion symmetrisch zur y-Achse ist. Das bedeutet, dass wir die Koeffizienten $b$ und $d$ gleich null setzen können, da nur die geraden Potenzen von $x$ vorkommen.

$$

\begin{align*}
f(x) &= ax^4 + cx^2 + e
f'(x) &= 4ax^3 + 2cx
\end{align*}

$$

Da die Funktion $f$ einen Tiefpunkt bei $T(0|-0.25)$ hat, wissen wir, dass der y-Achsenabschnitt $e = -0.25$ ist.

Mit den beiden Hochpunkten $H_1(-1|0)$ und $H_2(1|0)$ können wir die restlichen Parameter bestimmen:

$$

\begin{align*}

f(-1) &= a + c - 0.25 = 0 \\
f(1) &= a + c - 0.25 = 0
f'(-1) &= -4a - 2c = 0 \\
f'(1) &= 4a + 2c = 0

\end{align*}

$$

Daraus folgt:


$$

\begin{align*}

a &= -0.25 \\
c &= 0.5

\end{align*}

$$

Die Funktion $f$ hat also die Funktiongleichung:

$$

f(x) = -0.25x^4 + 0.5x^2 - 0.25

$$

Die Funktion $g$ ist die Spiegelung der Funktion $f$ an der x-Achse. Das bedeutet, dass die Funktion $g$ die Funktiongleichung $g(x) = -f(x)$ hat.

$$

g(x) = -f(x) = 0.25x^4 - 0.5x^2 + 0.25

$$

:::

b) Der Hintergrund des Logos soll in Gold dargestellt werden. Das Augo, welches einen Radius von $0,1 FE$ hat, des Logos in Schwarz. Berechne wie viel goldene und wie viel schwarze Farbe benötigt wird, um das Logo zu drucken.

:::collapsible{title="Lösung" id="626058"}

Die goldene Fläche entspricht der Fläche zwischen den Funktionen $f$ und $g$ im Intervall $[-1, 1]$ ohne die Fläche des Kreises.

Die schwarze Fläche entspricht der Fläche des Kreises.

Die goldene Fläche berechnen wir, indem wir die Differenz der beiden Funktionen berechnen und das Integral im Intervall $[-1, 1]$ bilden.

$$

\begin{align*}

A_{1} &= \int_{-1}^{1} f(x) - g(x) \, dx \\

A_{1} &= \int_{-1}^{1} -0.5x^4 + x^2 -0.5 \, dx \\

A_{1} &\approx 0.53 \\

A_{schwarz} &= \pi \cdot 0.1^2 \\
A_{schwarz} &\approx 0.0314 \\

A_{gold} &= A_{1} - A_{schwarz}

\end{align*}

$$

:::

c) Die Form der Funktionen $f$ und $g$ sollen durch eine Streckung in Richtung der y-Achse so verändert werden, dass das Logo weniger Breit wird. Dazu wurde entschieden, dass die Schnittstellen der Funktionen bei $S_1(-0.5|0.25)$ und $S_2(0.5|0.25)$ liegen sollen. Bestimme die Funktiongleichungen der beiden Funktionen.

:::collapsible{title="Lösung" id="626059"}

Die ursprüngliche Funktion $f$ hat die Funktiongleichung:

$$

f(x) = -0.25x^4 + 0.5x^2 - 0.25

$$

Eine Streckung in Richtung der y-Achse bedeutet, dass die Funktion $f$ die Funktiongleichung $f(x) = a(-0.25x^4 + 0.5x^2 - 0.25)$ hat.

Wir bestimmen jetzt den Parameter $a$, sodass die Funktionen $f$ und $g$ die Schnittstellen bei $x_1 = -0.5$ und $x_2 = 0.5$ haben.

$$

\begin{align*}

f(-0.5) &= a(-0.25 \cdot (-0.5)^4 + 0.5 \cdot (-0.5)^2 - 0.25) = 0.25 \\
f(0.5) &= a(-0.25 \cdot 0.5^4 + 0.5 \cdot 0.5^2 - 0.25) = 0.25

\end{align*}

$$

Daraus folgt:

$$

\begin{align*}

a \cdot 0.11 &= 0.25 \\
a &= \frac{0.25}{0.11} \approx 2.27

\end{align*}

$$

Die neue Funktion $f$ hat also die Funktiongleichung:

$$

f(x) = 2.27(-0.25x^4 + 0.5x^2 - 0.25)

$$

Die Funktion $g$ ist die Spiegelung der Funktion $f$ an der x-Achse. Das bedeutet, dass die Funktion $g$ die Funktiongleichung $g(x) = -f(x)$ hat.

$$

g(x) = -f(x) = -2.27(-0.25x^4 + 0.5x^2 - 0.25)

$$

:::

d) Berechne wie viel goldene und wie viel schwarze Farbe benötigt wird, um das Logo zu drucken, nachdem die Funktionen $f$ und $g$ gestreckt wurden.

:::collapsible{title="Lösung" id="626060"}

Die goldene Fläche entspricht der Fläche zwischen den Funktionen $f$ und $g$ im Intervall $[-0.5, 0.5]$ ohne die Fläche des Kreises.

Die schwarze Fläche entspricht der Fläche des Kreises.

Die goldene Fläche berechnen wir, indem wir die Differenz der beiden Funktionen berechnen und das Integral im Intervall $[-0.5, 0.5]$ bilden.

$$

\begin{align*}

A_{1} &= \int_{-0.5}^{0.5} f(x) - g(x) \, dx \\
A_{1} &= \int_{-0.5}^{0.5} 2.27(-0.5x^4 + x^2 - 0.25) - 2.27(-0.5x^4 + x^2 - 0.25) \, dx \\
A_{1} &\approx 0.33 \\
A_{schwarz} &= \pi \cdot 0.1^2 \\
A_{schwarz} &\approx 0.0314 \\
A_{gold} &= A_{1} - A_{schwarz} \\
A_{gold} &\approx 0.33 - 0.0314 \\
A_{gold} &\approx 0.3

\end{align*}

$$

Die goldene Fläche beträgt also 0.3 FE und die schwarze Fläche 0.0314 FE.

:::

# Aufgabe 2

Der Boden eines halben Kilometer langen Kanals hat die Form einer Parabel. Der Kanal ist 2 m tief. In der nachfolgenden Abbildung ist die Situation abgebildet. Hier entspricht eine Einheit der Länge 1 m.

:::geogebra{perspective="G" height=400 coordsystem="-6,6,-1,4" enableRightClick=false}
f(x)=1/9x^2
y=2
:::

a) Berechne den Flächeninhalt des Querschnitts des Kanals.

:::collapsible{title="Lösung" id="626061"}

Zunächst bestimmen wir die Funktiongleichung der Parabel, die den Boden des Kanals beschreibt.

Aus der Abbildung können wir entnehmen, dass die Parabel durch den Punkt $P(3|1)$ verläuft und den Scheitelpunkt $S(0|0)$ hat.

Mit der Scheitelpunktform einer Parabel können wir die Funktiongleichung bestimmen:

$$

f(x) = a(x - 0)^2 + 0

$$

Da die Parabel durch den Punkt $P(3|1)$ verläuft, können wir die Funktiongleichung aufstellen:

$$

1 = a(3 - 0)^2 \\

1 = 9a \\

a = \frac{1}{9}

$$

Die Funktiongleichung der Parabel lautet also:

$$

f(x) = \frac{1}{9}x^2

$$

Damit wir den Flächeninhalt des Querschnitts des Kanals berechnen können, verschieben wir die Funktion $f$ um 2 Einheiten nach unten, sodass die Nullstellen der Funktion $f$ den Rand des Kanals beschreiben.

$$

f(x) = \frac{1}{9}x^2 - 2

$$

Jetzt berechnen wir die Nullstellen der Funktion $f$:

$$

\begin{align*}

\frac{1}{9}x^2 - 2 &= 0 \\

\frac{1}{9}x^2 &= 2 \\

x^2 &= 18 \\
x &= \pm \sqrt{18} = \pm 3\sqrt{2}
x_1 &= -3\sqrt{2} \\
x_2 &= 3\sqrt{2}

\end{align*}

$$

Nun können wir den Flächeninhalt des Querschnitts des Kanals berechnen:

$$

\begin{align*}

A &= \int_{-3\sqrt{2}}^{3\sqrt{2}} \left( \frac{1}{9}x^2 - 2 \right) \, dx \\

A &= \left[ \frac{1}{27}x^3 - 2x \right]_{-3\sqrt{2}}^{3\sqrt{2}} \\

A &\approx 11

\end{align*}

$$

Der Flächeninhalt des Querschnitts des Kanals beträgt also 11 m$^2$.

:::

b) Bestimme das Volumen des Kanals, wenn dieser voll gefüllt ist.

:::collapsible{title="Lösung" id="626062"}

Das Volumen des Kanals berechnen wir, indem wir den Flächeninhalt des Querschnitts des Kanals mit der Länge des Kanals multiplizieren. Der Kanal ist einen halben Kilometer lang, also 500 m.

$$

V = 11 \cdot 500 = 5500

$$

Das Volumen des Kanals beträgt also 5500 m$^3$.

:::

c) Berechne zu wie viel Prozent der Kanal gefüllt ist, wenn der Wasserspiegel 1 m beträgt.

:::collapsible{title="Lösung" id="626063"}

Da der Wasserspielgel 1 m beträgt, können wir unsere Parabel um 1 Einheit nach oben verschieben.

$$

f(x) = \frac{1}{9}x^2 - 1

$$

Jetzt berechnen wir wieder die Nullstellen:

$$

\begin{align*}

\frac{1}{9}x^2 - 1 &= 0 \\

\frac{1}{9}x^2 &= 1 \\

x^2 &= 9 \\

x &= \pm 3

\end{align*}

$$

Nun können wir den Flächeninhalt des Querschnitts des Kanals berechnen, wenn zu einem Meter befüllt ist:

$$

\begin{align*}

A &= \int_{-3}^{3} \left( \frac{1}{9}x^2 - 1 \right) \, dx \\

A &= \left[ \frac{1}{27}x^3 - x \right]_{-3}^{3} \\

A &= 4

\end{align*}

$$

Der Kanal ist also zu $4/11 \approx 36,36 \%$ gefüllt.

:::


:::::::::
