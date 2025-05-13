---
name: Aufgabensammlung
index: 2
lang: de
---

# Aufgabensammlung


:::::collapsible{title="Sachaufgaben mit einfachen e-Funktionen" id="746793"}

## Aufgabe: 📈 Besucheranzahl auf einer Website

Zu Beginn (t = 0) wurden 2000 Besucher auf einer neuen Website registriert. Die momentane Besucherzunahme kann durch folgende Funktion beschrieben werden:

$g(t) = 600 \cdot e^{-0,4 \cdot t}$ (t in Tagen, $g(t)$ in Besuchern pro Tag)

a) Nimmt die tägliche Besucherzahl zu oder ab?

:::collapsible{title="Musterlösung" id="926304"}

Die Funktion $g(t)$ beschreibt die momentane Besucherzunahme. Es gilt $g(t) > 0$ für alle $t \geq 0$, da die Exponentialfunktion immer positiv ist. Das bedeutet, dass die tägliche Besucherzahl abnimmt.

:::

b) Wie viele Besucher sind nach 3 Tagen insgesamt auf der Website gewesen? Runde auf ganze Zahlen.

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

c) Nach wie vielen Tagen wurde die Schwelle von 2500 Besuchern überschritten? Runde auf zwei Dezimalstellen.

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

## Aufgabe: 🌞 Temperaturanstieg in einem Raum

Ein Raum wird beheizt. Zu Beginn hat der Raum eine Temperatur von 12 °C. Die momentane Änderungsrate der Temperatur wird durch folgende Funktion beschrieben:

$T'(t) = 1,2 \cdot e^{-0,1 \cdot t}$ ($t$ in Stunden, $T'(t)$ in °C/h)

a) Wird der Raum mit der Zeit wärmer oder kälter?

:::collapsible{title="Musterlösung" id="926307"}

Die Funktion $T'(t)$ beschreibt die momentane Änderungsrate der Temperatur. Es gilt $T'(t) > 0$ für alle $t \geq 0$, da die Exponentialfunktion immer positiv ist. Das bedeutet, dass der Raum mit der Zeit wärmer wird.

:::

b) Welche Temperatur herrscht nach 5 Stunden? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Nach 5 Stunden herrscht eine Temperatur von {z{16,72}} °C.

:::

:::collapsible{title="Musterlösung" id="926308"}

Um die Temperatur nach 5 Stunden zu berechnen, müssen wir das Integral der Funktion $T'(t)$ von 0 bis 5 berechnen und den Anfangswert von 12 °C hinzufügen:

$$

\begin{align*}

T(5) &= \int_0^5 T'(t) \, dt + 12 \\
T(5) &= \int_0^5 1,2 \cdot e^{-0,1 \cdot t} \, dt + 12 \\
T(5) &= \left[-\frac{1,2}{0,1} \cdot e^{-0,1 \cdot t}\right]_0^5 + 12 \\
T(5) &= -12 \cdot e^{-0,5} - (-12 \cdot e^{0}) + 12 \\
T(5) &= -12 \cdot e^{-0,5} + 12 +12 \\
T(5) &= -12 \cdot 0,6065 + 24 \\
T(5) &\approx -7,28 + 24 \\
T(5) &\approx 16,72 \text{ °C}

\end{align*}
$$
:::

c) Nach welcher Zeit ist die Temperatur auf 16 °C gestiegen? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Nach {z{4,05}} Stunden ist die Temperatur auf 16 °C gestiegen.

:::

:::collapsible{title="Musterlösung" id="926309"}
Um die Zeit zu berechnen, nach der die Temperatur auf 16 °C gestiegen ist, setzen wir $T(t) = 16$ und lösen die Gleichung:

$$

\begin{align*}

T(t) &= 16 \\

16 &= \int_0^t T'(t) \, dt + 12 \\
16 - 12 &= \int_0^t T'(t) \, dt \\
4 &= \int_0^t 1,2 \cdot e^{-0,1 \cdot t} \, dt \\
4 &= \left[-\frac{1,2}{0,1} \cdot e^{-0,1 \cdot t}\right]_0^t \\
4 &= -12 \cdot e^{-0,1 \cdot t} + 12 \\
4 - 12 &= -12 \cdot e^{-0,1 \cdot t} \\
-8 &= -12 \cdot e^{-0,1 \cdot t} \\
\frac{2}{3} &= e^{-0,1 \cdot t} \\
\ln(\frac{2}{3}) &= -0,1 \cdot t \\
\frac{\ln(\frac{2}{3})}{-0,1} &= t \\
t &\approx \frac{-0,4055}{-0,1} \\
t &\approx 4,05 \text{ Stunden}
\end{align*}
$$
:::

d) Auf welche maximale Temperatur nähert sich der Raum langfristig an?

:::multievent

Antwort: Der Raum nähert sich langfristig einer maximalen Temperatur von {z{24}} °C an.

:::

:::collapsible{title="Musterlösung" id="926310"}

Die langfristige Temperatur wird erreicht, wenn t gegen unendlich geht. Das bedeutet, dass die Exponentialfunktion $e^{-0,1 \cdot t}$ gegen 0 geht. Daher ist die maximale Temperatur:

$$

\begin{align*}

\lim_{t \to \infty} T(t) &= \lim_{t \to \infty} \left[-\frac{1,2}{0,1} \cdot e^{-0,1 \cdot t}\right]_0^t + 12 \\

\lim_{t \to \infty} T(t) &= \lim_{t \to \infty} \left[-\frac{1,2}{0,1} \cdot e^{-0,1 \cdot t} - (-\frac{1,2}{0,1})\right] + 12 \\

\lim_{t \to \infty} T(t) &= 0 + \frac{1,2}{0,1} + 12 \\

&= 24 \text{ °C}
\end{align*}


$$
:::

## Aufgabe: 🪫 Aufladung eines Akkus

Ein leerer Akku wird geladen. Die momentane Ladegeschwindigkeit ist gegeben durch:

$L(t) = 8 \cdot e^{-0,2 \cdot t}$ ($t$ in Minuten, $L(t)$ in % Ladung pro Minute)

a) Wird der Akku schneller oder langsamer geladen mit der Zeit?

:::collapsible{title="Musterlösung" id="926311"}

Die Funktion $L(t)$ beschreibt die momentane Ladegeschwindigkeit des Akkus. Es gilt $L(t) > 0$ für alle $t \geq 0$, da die Exponentialfunktion immer positiv ist. Das bedeutet, dass der Akku langsamer geladen wird mit der Zeit.

:::

b) Wie hoch ist der Ladezustand nach 10 Minuten? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Nach 10 Minuten beträgt der Ladezustand {z{34,59}} %.

:::

:::collapsible{title="Musterlösung" id="926312"}

Um den Ladezustand nach 10 Minuten zu berechnen, müssen wir das Integral der Funktion $L(t)$ von 0 bis 10 berechnen:

$$

\begin{align*}

L(10) &= \int_0^{10} L(t) \, dt \\

L(10) &= \int_0^{10} 8 \cdot e^{-0,2 \cdot t} \, dt \\
L(10) &= \left[-\frac{8}{0,2} \cdot e^{-0,2 \cdot t}\right]_0^{10} \\
L(10) &= -40 \cdot e^{-2} + 40 \\
L(10) &= -40 \cdot 0,1353 + 40 \\
L(10) &\approx -5,41 + 40 \\
L(10) &\approx 34,59 \text{ \%}
\end{align*}

$$

:::

c) Nach wie vielen Minuten ist der Akku zu 50 % geladen?

:::multievent

Antwort: Nach {z{6,93}} Minuten ist

der Akku zu 50 % geladen.

:::

:::collapsible{title="Musterlösung" id="926313"}

Um die Zeit zu berechnen, nach der der Akku zu 50 % geladen ist, setzen wir $L(t) = 50$ und lösen die Gleichung:

$$

\begin{align*}

L(t) &= 50 \\
50 &= \int_0^t L(t) \, dt \\
50 &= \int_0^t 8 \cdot e^{-0,2 \cdot t} \, dt \\
50 &= \left[-\frac{8}{0,2} \cdot e^{-0,2 \cdot t}\right]_0^t \\
50 &= -40 \cdot e^{-0,2 \cdot t} + 40 \\
50 - 40 &= -40 \cdot e^{-0,2 \cdot t} \\
10 &= -40 \cdot e^{-0,2 \cdot t} \\
10 &= -40 \cdot e^{-0,2 \cdot t} \\
\frac{1}{4} &= e^{-0,2 \cdot t} \\
\ln(\frac{1}{4}) &= -0,2 \cdot t \\
\frac{\ln(\frac{1}{4})}{-0,2} &= t \\
t &\approx \frac{-1,3863}{-0,2} \\
t &\approx 6,93 \text{ Minuten}
\end{align*}

$$

:::

d) Begründe, warum der Akku in dieser mathematischen Modellerung langfristig nicht 100 % erreichen kann.

:::collapsible{title="Musterlösung" id="926314"}

Der Akku kann langfristig nicht 100 % erreichen, da die Exponentialfunktion $e^{-0,2 \cdot t}$ gegen 0 geht, wenn $t$ gegen unendlich geht. Das bedeutet, dass die Ladegeschwindigkeit immer langsamer wird und der Akku sich asymptotisch einer maximalen Ladung nähert, aber nie 100 % erreicht.

:::

:::::

:::::collapsible{title="Sachaufgaben mit zusammengesetzten e-Funktionen" id="353221"}

## Aufgabe: Bevölkerungsentwicklung

Im Rahmen der Prognose der Bevölkerungsentwicklung eines Landes wurde folgende Funktions aufgestellt. Auf der y-Achse sind die Personen in 10.000 und auf der x-Achse sind die Jahrzehnte seit 1970 abgetragen.

$$

f(x)=-6e^{-0,5x}+6e^{-3x}+6

$$


:::jsxgraph{height="600" width="600" boundingbox="[-1,8,4,-1]"}
```js
function f(x) {
    return -6*Math.exp(-0.5 * x)+6*Math.exp(-3 * x) + 6;
}

board.create('functiongraph', [f], {
    name: 'f',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#ff0000',
    strokeWidth: 2
});
:::

a) Untersuche das Verhalten der Funktion im Unendlichen.

:::collapsible{title="Musterlösung" id="926315"}

Die Funktion $f(x)$ beschreibt die Bevölkerungsentwicklung. Um das Verhalten der Funktion im Unendlichen zu untersuchen, betrachten wir den Grenzwert:

$$

\begin{align*}
\lim_{x \to \infty} f(x) &= \lim_{x \to \infty} (-6e^{-0,5x}+6e^{-3x}+6) \\
&= \lim_{x \to \infty} (-6e^{-0,5x}) + \lim_{x \to \infty} (6e^{-3x}) + 6 \\
&= 0 + 0 + 6 \\
&= 6
\end{align*}

$$

Das bedeutet, dass die Funktion sich langfristig einer maximalen Bevölkerungszahl von 6 (in 10.000) annähert.

Das Verhalten der Funktion im Unendlichen zeigt, dass die Bevölkerungszahl langfristig stabil bleibt und sich nicht weiter erhöht.

:::

b) Beschreibe den Verlauf des Graphens im Intervall $[0,4]$

:::collapsible{title="Musterlösung" id="926316"}

Der Graph der Funktion $f(x)$ im Intervall $[0,4]$ zeigt zunächst einen Anstieg, gefolgt von einem Abfall.

Im Intervall $[0,4]$ beginnt die Funktion bei $f(0) = 6$ und erreicht ihren Tiefpunkt bei $x \approx 0,7$. Danach steigt die Funktion wieder und annähert sich asymptotisch dem Wert 6.

:::

c) Für die Gleichung $f'(x)=0$ gilt, dass die gleichbedeutet zu der Gleichung $-0,5x=ln(6)-3x$ ist. Untersuche unter Verwendung dieses Hinweises die Funktion $f$ auf Extremstellen.

:::collapsible{title="Musterlösung" id="926317"}

Für Extremstellen setzen wir die Ableitung $f'(x)$ gleich 0:

$$

f'(x) = 0

$$

In der Aufgabenstellung wird uns der Hinweis gegeben, dass die Gleichung $f'(x)=0$ gleichbedeutend ist mit:

$$

-0,5x=\ln(6)-3x

$$

Daher können wir diese Gleichung nutzen, um die Extremstellen zu finden:

$$

\begin{align*}

-0,5x &= \ln(6) - 3x \\
-0,5x + 3x &= \ln(6) \\
2,5x &= \ln(6) \\
x &= \frac{\ln(6)}{2,5} \\
x &\approx 0,792
\end{align*}

$$

Die Extremstelle liegt also bei $x \approx 0,792$. Um den Extremwert zu finden, setzen wir diesen Wert in die Funktion $f(x)$ ein:

$$

\begin{align*}

f(0,792) &= -6e^{-0,5 \cdot 0,792} + 6e^{-3 \cdot 0,792} + 6 \\

&\approx -6 \cdot 0,451 + 6 \cdot 0,227 + 6 \\
&\approx 2,506

\end{align*}

$$

Der Extremwert liegt also bei $f(0,792) \approx 2,506$ (in 10.000 Personen).

Dort ist ein Minimum, da die Funktion vorher steigt und danach wieder fällt. Dies können wir aus der Abbildung ablesen.

:::

---

Diese Funktion könnte für die Prognose der Bevölkerungsentwicklung einer kleinen Stadt genutzt werden mit folgender Geschichte:

In der kleinen Stadt hat ein großer Maschinenbauer sein Werk geschlossen. Dadurch haben viele Bewohner der Stadt ihren Arbeitsplatz verloren und sich dazu entschlossen mit ihren Familien in die Nachbarstadt zu ziehen. Um den entgegenzuwirken wurden neue Arbeitsplätze geschaffen. Jedoch dauert es eine gewisse Zeit bis die Maßnahme greift.

---

d) Interpretiere die Bedeutung des Extremwertes der Funktion im Sachzusammenhang.

:::collapsible{title="Musterlösung" id="926318"}

Nach ungefähr 7 Jahren, also im Jahr 1977, ist die Bevölkerung auf einen Tiefpunkt von etwa 2.506 (in 10.000) Personen gefallen. 

:::

e) Erkläre die Bedeutung der 6 in der Funktionsgleichung im Sachzusammenhang.

:::collapsible{title="Musterlösung" id="926319"}

Die 6 in der Funktionsgleichung $f(x) = -6e^{-0,5x} + 6e^{-3x} + 6$ repräsentiert die langfristige maximale Bevölkerungszahl, die die Stadt erreichen kann. Dies bedeutet, dass die Bevölkerung langfristig stabil bleibt und sich nicht weiter erhöht, selbst wenn Maßnahmen zur Verbesserung der Lebensbedingungen ergriffen werden.

:::

:::::