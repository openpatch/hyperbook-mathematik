---
name: ✏️ Einfache Integrale berechnen
index: 9
lang: de
---

# ✏️ Einfache Integrale berechnen

## Aufgabe 1

:::multievent
Berechne $\int_a^b f(x) dx$ für die Funktion $f$. Runde auf zwei Dezimalstellen.

Nehme an, dass a={X{0|-1}} und b={X{1|0}} sind.

a) $f(x) = e^x + 1$

Ergebnis: {Z{2,27|1,63}}

b) $f(x) = 2 \cdot e^x - 3$

Ergebnis: {Z{0,44|-1,74}}

c) $f(x) = 3 \cdot e^x - 4 \cdot x^3$

Ergebnis: {Z{4,15|2,9}}
:::

## Aufgabe 2

Berechne den Flächeninhalt den der Graphen der Funktion $f$ und die x-Achse im Intervall $[a, b]$ einschließen. Runde auf zwei Dezimalstellen.

:::multievent
a) $f(x) = e^x$ im Intervall [{X{0|2}}, {X{1|4}}]

Ergebnis: {Z{6,39|47,21}}

b) $f(x) = e^x - x$ im Intervall [{X{0|2}}, {X{1|4}}]

Ergebnis: {Z{4,39|41,21}}
:::

## Aufgabe 3

Bestimme die Stammfunktion von $g$, deren Graph durch den Punkt den Puntk $A$ verläuft.

a) $g(x)=e^x$ und $A(0, 2)$

:::collapsible{title="Musterlösung: Schritt 1" id="701796"}

Zunächst bestimmen wir die Stammfunktion $G$ von $g$:

$$

G(x) = \int g(x) dx = \int e^x dx = e^x + C

$$

Weißt du, wie es jetzt weitergeht?

:::

:::collapsible{title="Musterlösung: Schritt 2" id="701798"}

Nun setzen wir den Punkt $A(0, 2)$ in die Gleichung ein:

$$

G(0) = e^0 + C = 1 + C = 2

$$

Das ergibt $C = 1$.

Die gesuchte Funktion ist also:

$$

G(x) = e^x + 1

$$

:::

b) $g(x)=e^x - 2x^2$ und $A(-1, \frac{1}{e})$

:::collapsible{title="Musterlösung: Schritt 1" id="701797"}

Zunächst bestimmen wir die Stammfunktion $G$ von $g$:

$$

G(x) = \int g(x) dx = \int (e^x - 2x^2) dx = e^x - \frac{2}{3} x^3 + C

$$

Weißt du, wie es jetzt weitergeht?

:::

:::collapsible{title="Musterlösung: Schritt 2" id="701799"}

Nun setzen wir den Punkt $A(-1, \frac{1}{e})$ in die Gleichung ein:

$$

G(-1) = e^{-1} - \frac{2}{3} (-1)^3 + C = \frac{1}{e} + \frac{2}{3} + C = \frac{1}{e}

$$

Das ergibt $C = -\frac{2}{3}$.

Die gesuchte Funktion ist also:

$$

G(x) = e^x - \frac{2}{3} x^3 - \frac{2}{3}

$$

:::