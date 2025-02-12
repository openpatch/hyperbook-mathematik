---
name: "💡 Bestandsfunktion"
index: 17
lang: de
---

# Bestandsfunktion

Eine Bestandsfunktion $F(t)$ gibt den Bestand einer Größe zu einem Zeitpunkt $t$ an. Die Ableitung der Bestandsfunktion ist die Zuwachsfunktion.

Die Bestandsfunktion einer Funktion $f(t)$ kann in zwei Schritten berechnet werden:

1. Stammfunktionen bestimmen
2. Konstante c bestimmen

## Beispiel

Gegeben sei die Funktion $f(t) = 4t^3 - t$ und $F(2) = 10$.

1. Stammfunktionen bestimmen

$$

\begin{align*}
F(t) &= \int f(t) \, dt  \\
     &= \int (4t^3 - t) \, dt  \\
     &= \frac{4}{4}t^4 - \frac{1}{2}t^2 + c \\
     &= t^4 - \frac{1}{2}t^2 + c
\end{align*}

$$

2. Konstante c bestimmen

$$

\begin{align*}
F(2) = 2^4 - \frac{1}{2}2^2 + c &= 10 \\
     16 - 2 + c &= 10 \\
     c &= -4 \\
\end{align*}

$$

Somit ist die Bestandsfunktion $F(t) = t^4 - \frac{1}{2}t^2 - 4$.

F(10) gibt den Bestand der Größe zum Zeitpunkt 10 an.
