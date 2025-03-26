---
name: ✏️ Sachaufgaben
index: 9
lang: de
---

# ✏️ Sachaufgaben

Gib zunächst an, mit welchem Wachstumsmodell der Sachkontext beschrieben werden kann, und löse dann die Aufgaben.

## Aufgabe 1

Bei einer Bank kann Geld zu einem Zinssatz von 5,2 % p.a. (per annum / pro Jahr) angelegt werden.

:::collapsible{title="Wachstumsmodell" id="218776"}

Exponentielle Zunahme: $ f(t) = a \cdot q^t $

Wobei $a$ das Anfangskapital, $q$ der Wachstumsfaktor und $t$ die Zeit in Jahren ist.

:::

a) Berechne das Kapital nach neun Jahren, wenn 2000 € angelegt und die Zinsen
angesammelt werden.

:::collapsible{title="Lösung" id="630388"}

Wir kennen die Wachstumsrate $p = 5,2 \% = 0,052$ und das Anfangskapital $f(0) = 2000$. Aus der Wachstumsrate können wir den Wachstumsfaktor $q = 1 + p = 1,052$ berechnen. Die Funktion $f(t) = 2000 \cdot 1,052^t$ beschreibt das Kapital nach $t$ Jahren.

Um das Kapital nach neun Jahren zu berechnen, setzen wir $t = 9$ in die Funktion ein:

$$f(9) = 2000 \cdot 1,052^9 \approx 3156,25$$

:::

b) Ermittle, nach wie vielen Jahren man Euro-Millionär wäre, wenn man
10.000 € anlegen und die Zinsen ansammeln würde.

:::collapsible{title="Lösung" id="6303881"}

Wir nutzen die Funktion $f(t) = 10000 \cdot 1,052^t$ und setzen $f(t) = 1000000$:

$$

\begin{aligned}

10000 \cdot 1,052^t &= 1000000 \ | : 10000\\

1,052^t &= 100 \ | \log_{1,052}(\dots)\\

t &= \log_{1,052}(100) \approx 90,84

\end{aligned}

$$

Nach ungefähr 91 Jahren wären wir Euro-Millionär.

:::

c) Alina schlägt vor, doppelt so viel Geld anzulegen, also 20.000 €, damit es nur halb
so lange dauert, bis man Euro-Millionär ist. Beurteile diesen Vorschlag.

:::collapsible{title="Lösung" id="854768"}

Wir setzen $f(t) = 20000 \cdot 1,052^t = 1000000$:

$$

\begin{aligned}

20000 \cdot 1,052^t &= 1000000 \ | : 20000\\

1,052^t &= 50 \ | \log_{1,052}(\dots)\\

t &= \log_{1,052}(50) \approx 77,17

\end{aligned}

$$

Die Zeit, um Euro-Millionär zu werden, beträgt also etwa 77 Jahre. Der Vorschlag von Alina ist also nicht korrekt.

:::

## Aufgabe 2

Der radioaktive Stoff Cäsium-137 hat eine Halbwertszeit von etwa 30 Jahren. Zu
Beginn einer Beobachtung sind 250 mg Cäsium-137 vorhanden.

:::collapsible{title="Wachstumsmodell" id="218776213"}

Exponentielle Abnahme: $ f(t) = a \cdot q^t $

Wobei $a$ das Anfangskapital, $q$ der Wachstumsfaktor und $t$ die Zeit in Jahren ist.

:::

a) Berechnen Sie, wie viel mg des radioaktiven Stoffes nach drei Jahren vorhanden
sind.

b) Ermitteln Sie, nach wie vielen Jahren nur noch 50 mg vorhanden sind.

## Aufgabe 3

Der Tarif des Ökostrom-Anbieters GREENLINE verlangt eine jährliche Grundge-
bühr von 185 € und berechnet 22,7 Cent pro verbrauchter Kilowattstunde (kWh).

a) Berechnen Sie die Stromkosten in diesem Tarif, wenn man 2800 Kilowattstunden
im Jahr verbraucht.

b) Ermitteln Sie, wie viel Energie in Kilowattstunden man für 600 € bei dem genannten
Tarif in einem Jahr nutzen kann.