---
name: 🖊️ Flächenberechnung mit Stammfunktionen
index: 15
lang: de
---

# Flächenberechnung mit Stammfunktionen

In dieser Übung berechnest du nochmal die Flächen aus der Übung zum bestimmten Integral. Diesmal verwendest du dazu Stammfunktionen.

Berechne für die folgenden Funktionen die farbig gekennzeichneten Flächen mithilfe von Stammfunktionen.

- Bestimme zunächst jeweils eine Stammfunktion $F(x)=\int{f(x) dx}$ und überprüfe diese durch Ableiten.
- Überlege genau, welche bestimmten Integrale dir helfen, die Lösung zu bekommen. Eventuell musst du auch Flächen voneinander subtrahieren oder addieren. Verwende zur Berechnung der bestimmten Integrale den Zusammenhang

$$

\int_a^b f(x) \, dx = F(b) - F(a)


$$

- Schreib alle Ergebnisse zusammen mit einer Skizze in dein Heft.

## Musterbeispiel

Unten sehen wir die Funktion $f(x)=-x^2+5$. Die farbig markierte Fläche ist die Fläche unter dem Funktionsgraphen im Intervall $[-2, 2]$. Wir bestimmen zuerst die Stammfunktion $F(x)$ von $f(x)$:

$$

F(x) = \int{f(x) dx} = \int{(-x^2+5) dx} = -\frac{x^3}{3} + 5x + c


$$

und berechnen damit das bestimmte Integral:

$$

\begin{align*}
\int_{-2}^{2} f(x) \, dx &= F(2) - F(-2) \\

&= \left(-\frac{2^3}{3} + 5 \cdot 2\right) - \left(-\frac{(-2)^3}{3} + 5 \cdot (-2)\right) \\

&= \left(-\frac{8}{3} + 10\right) - \left(\frac{8}{3} - 10\right) \\

&= \left(-\frac{16}{3}\right) + 20 \\

&= 14,67
\end{align*}


$$

![](/assets/oberstufe/analysis/integralrechnung/stammfun_bsp00.gif)

## Übung 1

$$

f(x) = 3x^2


$$

![](/assets/oberstufe/analysis/integralrechnung/FlaecheC.png)

## Übung 2

$$

f(x) = 0,5x^2


$$

![](/assets/oberstufe/analysis/integralrechnung/FlaecheB.png)

## Übung 3

$$

f(x) = (x-5)^2 -4


$$

![](/assets/oberstufe/analysis/integralrechnung/FlaecheD.png)

## Übung 4

$$

f(x)=(x-5)^2 -4


$$

![](/assets/oberstufe/analysis/integralrechnung/FlaecheE.png)
