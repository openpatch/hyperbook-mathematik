---
name: ✅ Prüfe dich
index: 5
lang: de
---

# ✅ Prüfe dich

## Aufgabe 1: Wirkstoffmenge im Blut

Zu Beginn befindet keine Wirkstoffmenge im Blut. Ein Medikament wird kontinuierlich über eine Infusion zugeführt. Die momentane Zufuhrgeschwindigkeit ist gegeben durch:

$f(t) = 5 \cdot e^{-0,3 \cdot t}$ (t in Stunden, $f(t)$ in mg/h)

a) Nimmt die Wirkstoffmenge im Körper zu oder ab? Begründen Sie.

:::collapsible{title="Musterlösung" id="926301"}

Die Funktion $f(t)$ beschreibt die momentane Zufuhrgeschwindigkeit des Medikaments. Es gilt $f(t) > 0$ für alle $t \geq 0$, da die Exponentialfunktion immer positiv ist. Das bedeutet, dass die Wirkstoffmenge im Körper zunimmt.

:::

b) Wie viel Milligramm des Wirkstoffs befinden sich nach 4 Stunden im Blut? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Es befinden sich {z{11,65}} mg Wirkstoff im Blut.

:::

:::collapsible{title="Musterlösung" id="960313"}

Die Funktion $f(t)$ beschreibt die momentane Zufuhrgeschwindigkeit des Medikaments. Um die gesamte Wirkstoffmenge im Blut nach 4 Stunden zu berechnen, müssen wir das Integral der Funktion $f(t)$ von 0 bis 4 berechnen:

$$

\begin{align*}

F(t) &= \int_0^t f(t) \, dt \\

F(t) &= \int_0^4 5 \cdot e^{-0,3 \cdot t} \, dt \\

F(t) &= \left[-\frac{5}{0,3} \cdot e^{-0,3 \cdot t}\right]_0^4 \\

F(t) &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot 4} + \frac{5}{0,3} \cdot e^{-0,3 \cdot 0} \\

F(t) &= -\frac{5}{0,3} \cdot e^{-1,2} + \frac{5}{0,3} \\

F(t) &\approx -\frac{5}{0,3} \cdot 0,3012 + \frac{5}{0,3} \\

F(t) &\approx -\frac{5 \cdot 0,3012}{0,3} + \frac{5}{0,3} \\

F(t) &\approx -5,02 + 16,67 \\

F(t) &\approx 11,65 \text{ mg}

\end{align*}

$$

:::

c) Nach welcher Zeit sind 10 mg Wirkstoff im Blut enthalten?

:::multievent

Antwort: Nach {z{6,93}} Stunden sind 10 mg Wirkstoff im Blut enthalten.

:::

:::collapsible{title="Musterlösung" id="926302"}

Um die Zeit zu berechnen, nach der 10 mg Wirkstoff im Blut sind, setzen wir $F(t) = 10$ und lösen die Gleichung:

$$

\begin{align*}

F(t) &= 10 \\

10 &= \int_0^t f(t) \, dt \\
10 &= \int_0^t 5 \cdot e^{-0,3 \cdot t} \, dt \\
10 &= \left[-\frac{5}{0,3} \cdot e^{-0,3 \cdot t}\right]_0^t \\
10 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} + \frac{5}{0,3} \\
10 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} + \frac{5}{0,3} \\
10 - \frac{5}{0,3} &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} \\
10 - 16,67 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} \\
-6,67 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} \\
0,4002 &= e^{-0,3 \cdot t} \\
\ln(0,4002) &= -0,3 \cdot t \\
\frac{\ln(0,4002)}{-0,3} &= t \\
t &\approx \frac{-0,9163}{-0,3} \\
t &\approx 3,05 \text{ Stunden}
\end{align*}

$$

:::

d) Welche maximale Wirkstoffmenge wird bei dieser Infusion erreicht?

:::multievent

Antwort: Die maximale Wirkstoffmenge beträgt {z{16,67}} mg.

:::

:::collapsible{title="Musterlösung" id="926303"}

Die maximale Wirkstoffmenge wird erreicht, wenn die Zufuhrgeschwindigkeit $f(t)$ gegen 0 geht. Das bedeutet, dass die Exponentialfunktion $e^{-0,3 \cdot t}$ gegen 0 geht. Daher ist die maximale Wirkstoffmenge:

$$

\begin{align*}

\lim_{t \to \infty} F(t) &= \lim_{t \to \infty} \left[-\frac{5}{0,3} \cdot e^{-0,3 \cdot t}\right]_0^t \\

&= \lim_{t \to \infty} \left[-\frac{5}{0,3} \cdot 0\right] + \frac{5}{0,3} \\

&= 0 + \frac{5}{0,3} \\

&= \frac{5}{0,3} \\

&\approx 16,67 \text{ mg}

\end{align*}

$$

:::

## Aufgabe 2: Besucheranzahl auf einer Website

Zu Beginn (t = 0) wurden 2000 Besucher auf einer neuen Website registriert. Die momentane Besucherzunahme kann durch folgende Funktion beschrieben werden:

$g(t) = 600 \cdot e^{-0,4 \cdot t}$ (t in Tagen, $g(t)$ in Besuchern pro Tag)

a) Nimmt die tägliche Besucherzahl zu oder ab?

:::collapsible{title="Musterlösung" id="926304"}

Die Funktion $g(t)$ beschreibt die momentane Besucherzunahme. Es gilt $g(t) > 0$ für alle $t \geq 0$, da die Exponentialfunktion immer positiv ist. Das bedeutet, dass die tägliche Besucherzahl abnimmt.

:::

b) Wie viele Besucher sind nach 3 Tagen insgesamt auf der Website gewesen?

:::multievent

Antwort: Nach 3 Tagen sind insgesamt {z{3048}} Besucher auf der Website gewesen.

:::

:::collapsible{title="Musterlösung" id="926305"}

Um die Gesamtbesucherzahl nach 3 Tagen zu berechnen, müssen wir das Integral der Funktion $g(t)$ von 0 bis 3 berechnen und den Anfangswert von 2000 Besuchern hinzufügen:

$$

\begin{align*}

F(t) &= \int_0^t g(t) \, dt + 2000 \\

F(t) &= \int_0^3 600 \cdot e^{-0,4 \cdot t} \, dt + 2000 \\

F(t) &= \left[-\frac{600}{0,4} \cdot e^{-0,4 \cdot t}\right]_0^3 + 2000 \\
F(t) &= -\frac{600}{0,4} \cdot e^{-0,4 \cdot 3} + \frac{600}{0,4} + 2000 \\
F(t) &= -451,8 + 1500 + 2000 \\
F(t) &approx 3048 \text{ Besucher}
\end{align*}
$$

:::

c) Nach wie vielen Tagen wurde die Schwelle von 2500 Besuchern überschritten?

:::multievent

Antwort: Nach {z{1,01}} Tagen wurde die Schwelle von 2500 Besuchern überschritten.

:::

:::collapsible{title="Musterlösung" id="926306"}

Um die Zeit zu berechnen, nach der die Schwelle von 2500 Besuchern überschritten wird, setzen wir $F(t) = 2500$ und lösen die Gleichung:

$$

\begin{align*}

F(t) &= 2500 \\

2500 &= \int_0^t g(t) \, dt + 2000 \\

2500 - 2000 &= \int_0^t g(t) \, dt \\
500 &= \int_0^t 600 \cdot e^{-0,4 \cdot t} \, dt \\
500 &= \left[-\frac{600}{0,4} \cdot e^{-0,4 \cdot t}\right]_0^t \\
500 &= -\frac{600}{0,4} \cdot e^{-0,4 \cdot t} + \frac{600}{0,4} \\
500 &= -\frac{600}{0,4} \cdot e^{-0,4 \cdot t} + 1500 \\
500 - 1500 &= -\frac{600}{0,4} \cdot e^{-0,4 \cdot t} \\
-1000 &= -\frac{600}{0,4} \cdot e^{-0,4 \cdot t} \\
\frac{2}{3} &= e^{-0,4 \cdot t} \\
\ln(\frac{2}{3}) &= -0,4 \cdot t \\
\frac{\ln(\frac{2}{3})}{-0,4} &= t \\
t &\approx \frac{-0,4055}{-0,4} \\
t &\approx 1,01 \text{ Tage}
\end{align*}
$$
:::
