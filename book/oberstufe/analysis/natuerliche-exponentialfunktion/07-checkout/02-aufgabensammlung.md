---
name: ✅ Aufgabensammlung
index: 2
lang: de
---

# ✅ Aufgabensammlung

::::::collapsible{title="Exponentialfunktionen ableiten" id="782279"}

Leite die folgenden Funktionen ab:

$$

\begin{align*}
f_1(x) &= 3 \cdot 2^{x} \\
f_2(x) &= 4 \cdot e^{3x+2} \\
f_3(x) &= 5 \cdot (e^{x-2} + 3^{x} + 2)

\end{align*}

$$

:::collapsible{title="Musterlösung" id="990257"}

Die Ableitungen der Funktionen sind:

$$

\begin{align*}

f_1'(x) &= 3 \cdot 2^{x} \cdot \ln(2) \\
f_2'(x) &= 4 \cdot 3 \cdot e^{3x+2} = 12 \cdot e^{3x+2} \\
f_3'(x) &= 5 e^{x-2} + 3^{x} \cdot 5 \cdot \ln(3) = 5 (e^{x-2} + 3^{x} \cdot \ln(3))
\end{align*}

$$


:::


::::::


::::::collapsible{title="Exponentialfunktionen integrieren" id="782280"}

Integriere die folgenden Funktionen:

$$

\begin{align*}

f_1(x) &= 3 \cdot 2^{x} \\
f_2(x) &= 4 \cdot e^{3x+2} \\
f_3(x) &= 5 \cdot (e^{x-2} + 3^{x} + 2)
\end{align*}

$$

:::collapsible{title="Musterlösung" id="990258"}

Damit wir die Integrale der Funktionen berechnen können, schreiben wir diese als e-Funktionen um und multiplizieren die Klammern aus:

$$

\begin{align*}

f_1(x) &= 3 \cdot e^{\ln(2) \cdot x} \\
f_2(x) &= 4 \cdot e^{3x+2} \\
f_3(x) &= 5 \cdot (e^{x-2} + 3^{x} + 2) = 5 \cdot e^{x-2} + 5 \cdot 3^{x} + 10
\end{align*}

$$

Dann können wir die Integrale berechnen:

$$

\begin{align*}

\int f_1(x) \, dx &= \frac{3}{\ln(2)} \cdot e^{\ln(2) \cdot x} + C_1 = \frac{3}{\ln(2)} \cdot 2^{x} + C_1 \\
\int f_2(x) \, dx &= \frac{4}{3} \cdot e^{3x+2} + C_2 = \frac{4}{3} \cdot e^{3x+2} + C_2 \\
\int f_3(x) \, dx &= 5 \cdot e^{x-2} + 5 \cdot \frac{3^{x}}{\ln(3)} + 10x + C_3
\end{align*}

$$


:::


::::::

::::::collapsible{title="Tangenten an Exponentialfunktionen aufstellen" id="782281"}

## Aufgabe 1

Stelle die Tangente an den Graphen der Funktion $f(x) = 4 \cdot e^{x+2}$ im Punkt $P(0|1)$ auf.

:::collapsible{title="Musterlösung" id="990258"}

Eine Tangente ist eine lineare Funktion der Form $t(x) = mx + b$, wobei $m$ die Steigung und $b$ der y-Achsenabschnitt ist.

Da eine Tangente sich an den Graphen der Funktion $f(x)$ anlegt, gilt, dass die Steigung der Tangente gleich der Ableitung der Funktion an der Stelle $x_0$ ist:

$$

\begin{align*}
m &= f'(x_0) \\
m &= f'(0) \\
f'(x) &= 4 \cdot e^{x+2} \\
m &= 4 \cdot e^{0+2} \\
m &= 4 \cdot e^{2}
\end{align*}
$$

Die Steigung der Tangente ist also $m = 4 \cdot e^{2}$.

Als Nächstes müssen wir den y-Achsenabschnitt $b$ berechnen. Dazu setzen wir den Punkt $P(0|1)$ in die Gleichung der Tangente ein:

$$

\begin{align*}
t(0) &= m \cdot 0 + b \\
1 &= 4 \cdot e^{2} \cdot 0 + b \\
b &= 1
\end{align*}

$$

Die Tangente hat also die Gleichung:

$$
\begin{align*}
t(x) &= 4 \cdot e^{2} \cdot x + 1
\end{align*}
$$

:::

## Aufgabe 2

Stelle die Tangente an den Graphen der Funktion $f(x) = 2^{x}$ im Punkt $P(1|2)$ auf.

:::collapsible{title="Musterlösung" id="990259"}


Eine Tangente ist eine lineare Funktion der Form $t(x) = mx + b$, wobei $m$ die Steigung und $b$ der y-Achsenabschnitt ist.

Da eine Tangente sich an den Graphen der Funktion $f(x)$ anlegt, gilt, dass die Steigung der Tangente gleich der Ableitung der Funktion an der Stelle $x_0$ ist:

$$

\begin{align*}
m &= f'(x_0) \\
m &= f'(1) \\
f'(x) &= 2^{x} \cdot \ln(2) \\
m &= 2^{1} \cdot \ln(2) \\
m &= 2 \cdot \ln(2)
\end{align*}
$$

Die Steigung der Tangente ist also $m = 2 \cdot \ln(2)$.

Als Nächstes müssen wir den y-Achsenabschnitt $b$ berechnen. Dazu setzen wir den Punkt $P(1|2)$ in die Gleichung der Tangente ein:

$$

\begin{align*}

t(1) &= m \cdot 1 + b \\
2 &= 2 \cdot \ln(2) \cdot 1 + b \\
b &= 2 - 2 \cdot \ln(2)
\end{align*}

$$

Die Tangente hat also die Gleichung:

$$
\begin{align*}

t(x) &= 2 \cdot \ln(2) \cdot x + (2 - 2 \cdot \ln(2)) \\
&= 2 \cdot \ln(2) \cdot x + 2 - 2 \cdot \ln(2) \\
\end{align*}

$$

::::::


::::::collapsible{title="Integrale von Exponentialfunktionen berechnen" id="782282"}

## Aufgabe 1

Gegeben ist die Funktion $f(x) = 2^{x} + 3^{x} + e^{-x+1}$.

a) Begründe, dass $F(x) = \frac{2^{x}}{\ln(2)} + \frac{3^{x}}{\ln(3)} - e^{-x+1}$ eine Stammfunktion von $f$ ist.

:::collapsible{title="Musterlösung" id="990260"}

Um zu zeigen, dass $F(x)$ eine Stammfunktion von $f(x)$ ist, müssen wir die Ableitung von $F(x)$ berechnen und zeigen, dass sie gleich $f(x)$ ist:

$$

\begin{align*}

F(x) &= \frac{e^{\ln(2x)}}{\ln(2)} + \frac{e^{\ln(3x)}}{\ln(3)} - e^{-x+1} \\
F'(x) &= \ln(2) \cdot \frac{e^{\ln(2x)}}{\ln(2)} + \ln(3) \cdot \frac{e^{\ln(3x)}}{\ln(3)} - (-e^{-x+1}) \\
&= 2^{x} + 3^{x} + e^{-x+1} \\

\end{align*}
$$

Damit ist $F(x)$ eine Stammfunktion von $f(x)$.
:::

b) Berechne das Integral der Funktion $f$ im Intervall $[0,1]$.

:::collapsible{title="Musterlösung" id="164322"}

Um das Integral der Funktion $f(x)$ im Intervall $[0,1]$ zu berechnen, verwenden wir die Stammfunktion $F(x)$:

$$
\begin{align*}
\int_0^1 f(x) \, dx &= F(1) - F(0) \\
&= \left(\frac{2^{1}}{\ln(2)} + \frac{3^{1}}{\ln(3)} - e^{-1+1}\right) - \left(\frac{2^{0}}{\ln(2)} + \frac{3^{0}}{\ln(3)} - e^{-0+1}\right) \\
&= \left(\frac{2}{\ln(2)} + \frac{3}{\ln(3)} - 1\right) - \left(\frac{1}{\ln(2)} + \frac{1}{\ln(3)} - e\right) \\
&\approx 3,5096
\end{align*}
$$

:::

## Aufgabe 2

Gegeben sind die Funktionen $f(x) = 0,5 \cdot{x} + 1$ und $g(x) = 2^{x} + 1$. 

a) Zeige, dass der Punkt $P(0|2)$ ein Schnittpunkt der beiden Graphen ist.

:::collapsible{title="Musterlösung" id="990261"}
Um zu zeigen, dass der Punkt $P(0|2)$ ein Schnittpunkt der beiden Graphen ist, setzen wir $x = 0$ in beide Funktionen ein:

$$
\begin{align*}
f(0) &= 0,5 \cdot 0 + 1 = 2 \\
g(0) &= 2^{0} + 1 = 1 + 1 = 2
\end{align*}
$$

Da $f(0) = g(0) = 2$, liegt der Punkt $P(0|2)$ auf beiden Graphen. Damit ist $P(0|2)$ ein Schnittpunkt der beiden Graphen.
:::

b) P ist der einzige Schnittpunkt der beiden Graphen. Berechne die Fläche zwischen den beiden Graphen im Intervall $[-1,1]$.

:::collapsible{title="Musterlösung" id="164323"}

Da wir die Fläche zwischen den beiden Graphen berechnen wollen, müssen wir das Integral am Schnittpunkt $P(0|2)$ aufteilen:

$$

\begin{align*}

A &= \left| \int_{-1}^{0} (f(x) - g(x)) \, dx \right| + \left| \int_{0}^{1} (f(x) - g(x)) \, dx \right| \\
&= \left| \int_{-1}^{0} (0,5 \cdot x + 1 - (2^{x} + 1)) \, dx \right| + \left| \int_{0}^{1} (0,5 \cdot x + 1 - (2^{x} + 1)) \, dx \right| \\
&= \left| \int_{-1}^{0} (0,5 \cdot x - 2^{x}) \, dx \right| + \left| \int_{0}^{1} (0,5 \cdot x - 2^{x}) \, dx \right| \\
&= \left| \left[0,5 \cdot \frac{x^{2}}{2} - 2^{x} \cdot \ln(2)\right]_{-1}^{0} \right| + \left| \left[0,5 \cdot \frac{x^{2}}{2} - 2^{x} \cdot \ln(2)\right]_{0}^{1} \right| \\
&= \left| \left(0,5 \cdot 0^{2} - 2^{0} \cdot \ln(2)\right) - \left(0,5 \cdot \frac{(-1)^{2}}{2} - 2^{-1} \cdot \ln(2)\right) \right| + \left| \left(0,5 \cdot \frac{1^{2}}{2} - 2^{1} \cdot \ln(2)\right) - (0,5 \cdot 0^{2} - 2^{0} \cdot \ln(2))\right| \\
&= \left| \ln(2) - \left(0,5 \cdot \frac{1}{2} - \frac{\ln(2)}{2}\right) \right| + \left| \left(0,5 \cdot \frac{1}{2} - 2 \cdot \ln(2)\right) - \ln(2)\right| \\
&\approx 0,72 + 0,72 \\
&= 1,44

\end{align*}

$$


:::::::

::::::collapsible{title="Exponentialfunktionen analysieren" id="782283"}

## Aufgabe 1

Gegeben ist die Funktion $f(x) = 2 \cdot e^{x} + 2\cdot e^{-x}$.

a) Überprüfe, ob die Funktion achsensymmetrisch zur y-Achse ist.

:::collapsible{title="Musterlösung" id="990261"}

Die Funktion $f(x)$ ist achsensymmetrisch zur y-Achse, da sie die Bedingung $f(-x) = f(x)$ erfüllt.

Um dies zu zeigen, setzen wir $-x$ in die Funktion ein:

$$

\begin{align*}

f(-x) &= 2 \cdot e^{-x} + 2 \cdot e^{x} \\
&= 2 \cdot e^{x} + 2 \cdot e^{-x} \\
&= f(x)

\end{align*}

$$

Die Funktion $f(x)$ ist also achsensymmetrisch zur y-Achse.

:::

b) Beschreibe das Verhalten der Funktion im $\pm$ Unendlichen.

:::collapsible{title="Musterlösung" id="990262"}

Die Funktion $f(x)$ wächst exponentiell, da der Term $e^{x}$ exponentiell wächst und der Term $e^{-x}$ gegen 0 geht. Daher gilt:

$$

\begin{align*}

\lim_{x \to \infty} f(x) &= \lim_{x \to \infty} (2 \cdot e^{x} + 2 \cdot e^{-x}) \\

&= \infty

\end{align*}

$$

Für $x \to -\infty$ gilt, dass der Term $e^{x}$ gegen 0 geht und der Term $e^{-x}$ exponentiell wächst:

$$

\begin{align*}

\lim_{x \to -\infty} f(x) &= \lim_{x \to -\infty} (2 \cdot e^{x} + 2 \cdot e^{-x}) \\

&= 0 + \infty \\

&= \infty

\end{align*}

$$

Die Funktion $f(x)$ wächst also exponentiell für $x \to -\infty$ und $x \to \infty$.

:::

c) Untersuche die Funktion auf Extremstellen.

:::collapsible{title="Musterlösung" id="990263"}

Um die Extremstellen der Funktion $f(x)$ zu finden, setzen wir die Ableitung $f'(x)$ gleich 0:

$$

\begin{align*}

f'(x) &= 2 \cdot e^{x} - 2 \cdot e^{-x} \\

0 &= 2 \cdot e^{x} - 2 \cdot e^{-x} &&| :2 \\

0 &= e^{x} - e^{-x} \\

e^{-x} &= e^{x} &&| \ln(...) \\

\ln(e^{-x}) &= \ln(e^{x}) \\

-x &= x \\

x &= 0

\end{align*}

$$

Die Funktion $f(x)$ hat also eine Extremstelle bei $x = 0$.

Um zu bestimmen, ob es sich um ein Maximum oder Minimum handelt, setzen wir den Wert $x = 0$ in die zweite Ableitung $f''(x)$ ein:

$$

\begin{align*}

f''(x) &= 2 \cdot e^{x} + 2 \cdot e^{-x} \\

f''(0) &= 2 \cdot e^{0} + 2 \cdot e^{0} \\

&= 2 + 2 \\

&= 4 > 0

\end{align*}

$$

Da $f''(0) > 0$ ist, handelt es sich um ein Minimum.

Die Funktion $f(x)$ hat also ein Minimum bei $x = 0$.

Die Koordinaten des Minimums sind:

$$

\begin{align*}

f(0) &= 2 \cdot e^{0} + 2 \cdot e^{-0} \\

&= 2 + 2 \\

&= 4

\end{align*}

$$

Die Koordinaten des Minimums sind also $M(0|4)$.

:::



## Aufgabe 2

Gegeben ist die Funktion $f(x) = 2^{x} + 3^{x} + e^{x}$.

a) Überprüfe, ob die Funktion achsensymmetrisch zur y-Achse ist.

:::collapsible{title="Musterlösung" id="990262"}

Die Funktion $f(x)$ ist nicht achsensymmetrisch zur y-Achse, da sie nicht die Bedingung $f(-x) = f(x)$ erfüllt.

Um dies zu zeigen, setzen wir $-x$ in die Funktion ein:

$$

\begin{align*}

f(-x) &= 2^{-x} + 3^{-x} + e^{-x} \\

&= \frac{1}{2^{x}} + \frac{1}{3^{x}} + e^{-x} \\

&\neq 2^{x} + 3^{x} + e^{x} = f(x)

\end{align*}

$$

:::

b) Beschreibe das Verhalten der Funktion im $\pm$ Unendlichen.

:::collapsible{title="Musterlösung" id="990263"}

Die Funktion $f(x)$ wächst exponentiell, da alle drei Terme $2^{x}$, $3^{x}$ und $e^{x}$ exponentiell wachsen. Daher gilt:

$$

\begin{align*}

\lim_{x \to \infty} f(x) &= \lim_{x \to \infty} (2^{x} + 3^{x} + e^{x}) \\
&= \infty

\end{align*}

$$

Für $x \to -\infty$ gilt, dass alle drei Terme gegen 0 gehen, da die Exponentialfunktionen mit negativen Exponenten gegen 0 konvergieren:

$$

\begin{align*}

\lim_{x \to -\infty} f(x) &= \lim_{x \to -\infty} (2^{x} + 3^{x} + e^{x}) \\

&= 0 + 0 + 0 \\

&= 0

\end{align*}

$$

:::

c) Untersuche die Funktion auf Extremstellen.

:::collapsible{title="Musterlösung" id="990264"}

Um die Extremstellen der Funktion $f(x)$ zu finden, setzen wir die Ableitung $f'(x)$ gleich 0:

$$

\begin{align*}

f'(x) &= 2^{x} \cdot \ln(2) + 3^{x} \cdot \ln(3) + e^{x} \\

0 &= 2^{x} \cdot \ln(2) + 3^{x} \cdot \ln(3) + e^{x} \\

\end{align*}

$$

Da die drei Terme $2^{x} \cdot \ln(2)$, $3^{x} \cdot \ln(3)$ und $e^{x}$ immer positiv sind, kann die Gleichung $f'(x) = 0$ nicht erfüllt werden. Daher hat die Funktion $f(x)$ keine Extremstellen.

:::


::::::


:::::collapsible{title="Sachaufgaben mit einfachen e-Funktionen" id="746793"}

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

Zuerst bestimmen wir die Bestandsfunktion $T(x)$:

$$ 

\begin{align*}
T(x) = -\frac{1,2}{0,1} \cdot e ^{-0,1 \cdot t} + c
\end{align*}

$$

Jetzt bestimmen wir noch c. Dafür nutzen wir, dass wir wissen, dass zu Beginn im Raum 12°C vorliegen.

$$

\begin{align*}
T(0) = 12 &= -\frac{1,2}{0,1} \cdot e^{-0,1 \cdot 0} + c \\
12 &=  -12 + c &&| +12 \\
24 = c
\end{align*}

$$

Darauf folgt folgende Funktionsgleichung:

$$

T(x)=-12 \cdot e^{-0,1 \cdot t} + 24

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

T(x) = -12 \cdot e^{-0,1 \cdot t} + 24 &= 16 &&| -24 \\
-12 \cdot e^{-0,1 \cdot t} &= -8 &&| : (-12) \\
e^{-0,1 \cdot t} &= \frac{2}{3}  &&| \ln(...) \\
-0,1 \cdot t &= \ln(\frac{2}{3}) &&| : -0,1 \\
t &= \ln(\frac{2}{3}) : (-0,1) \\
t &\approx 4,05
 

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

\lim_{t \to \infty} T(t) &= \lim_{t \to \infty}  -12 \cdot e^{-0,1 \cdot t} + 24

&= 24 \text{ °C}
\end{align*}

$$

Da $e^{-0,1 \cdot t}$ für $t \to \infty$ gegen 0 geht.


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

Der Graph der Funktion $f(x)$ im Intervall $[0,4]$ zeigt zunächst starken einem Abfall, gefolgt von einem leichten Anstieg und einer Annäherung an den Wert 6.

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