---
name: 💡 Wertetabellen von Wachstumsmodellen
index: 3
lang: de
---

# 💡 Wertetabellen von Wachstumsmodellen

Um zu überprüfen, welches Wachstumsmodell zu den gegebenen Daten passt, können aufeinanderfolgende Wertepaare untersucht werden.

## Lineares Wachstum

Beim linearen Wachstum nimmt die Größe einer Menge in gleichen Zeitintervallen um denselben Betrag zu.

Zum Beispiel gehört diese Wertetabelle zum linearen Wachstum:

$$
\begin{array}{c|c}
    x & f(x) \\
    \hline
    0 & 3 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow +2} \\
    1 & 5 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow +2} \\
    2 & 7 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow +2} \\
    3 & 9 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow +2} \\
    4 & 11 \\
\end{array}
$$

Hier nimmt der Wert pro Zeiteinheit um 1 zu.

::::alert{success}

**Prüfe dich**

Gib die Funktionsgleichung passend zur Wertetabelle an.

:::collapsible{title="Lösung" id="684844"}

Der Anfangswert $f(0)$ ist $0$ und die Wachstumsrate beträgt $2$, daher lautet die Funktionsgleichung:

$$

f(x)=2 \cdot x +3

$$

:::

::::

## Quadratisches Wachstum

Diese Wertetabelle gehört zum quadratischen Wachstum

$$
\begin{array}{c|c}
    x & f(x) \\
    \hline
    0 & 0 \\
    \footnotesize{2^2=4} & \footnotesize{\frac{1}{2}\cdot 4=2} \\
    2 & 2 \\
    \footnotesize{4^2=16} & \footnotesize{\frac{1}{2}\cdot 16 = 8} \\
    4 & 8 \\
\end{array}
$$

Das erkennen wir so:

1. Quadriere den $x$-Wert
2. Finde einen Faktor a, sodass der $f(x)$-Wert herauskommt
3. Überprüfe, ob der Faktor a für alle Wertepaare gleich ist.

Im Falle des Beispiels ist der Faktor $a=\frac{1}{2}$.

**Prüfe dich**

Gib die Funktionsgleichung passend zur Wertetabelle an.

::::alert{success}

**Prüfe dich**

Gib die Funktionsgleichung passend zur Wertetabelle an.

:::collapsible{title="Lösung" id="684844"}

$$

f(x)=\frac{1}{2} \cdot x^2

$$

:::

::::

## Exponentielles Wachstum

Beim exponentiellen Wachstum nimmt die Größe einer Menge in gleichen Zeitintervallen um denselben Faktor zu.

$$

\begin{array}{c|c}
    x & f(x) \\
    \hline
    0 & 2 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow \cdot 2} \\
    1 & 4 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow \cdot 2} \\
    2 & 8 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow \cdot 2} \\
    3 & 16 \\

\end{array}

$$

Als Spezialfall gibt es auch die exponentielle Abnahme. Bei dieser liegt der Faktor zwischen $0$ und $1$.

Hier ist ein Beispiel:

$$

\begin{array}{c|c}
    x & f(x) \\
    \hline
    0 & 8 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow \cdot \frac{1}{2}} \\
    1 & 4 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow \cdot \frac{1}{2}} \\
    2 & 2 \\
    \footnotesize{\downarrow +1} & \footnotesize{\downarrow \cdot \frac{1}{2}} \\
    3 & 1 \\
\end{array}

$$

Wenn du dir noch nicht sicher bist, ob du alles verstanden hast, kannst du dieses Video schauen:

::youtube{#Z2-aM3YlCB4}

::::alert{success}

**Prüfe dich**

Gib zu beiden Wertetabellen eine Funktionsgleichung an.

:::collapsible{title="Lösung" id="684844"}

Der Anfangswert ist $f(0)=2$ und der Wachstumsfaktor ist $q=2$. Daher lautet die Funktionsgleichung im ersten Fall:

$$

f(x)=2 \cdot 2^x

$$

Im zweiten Fall ist der Anfangswert $f(0)=8$ und der Wachstumsfaktor ist $q=\frac{1}{2}$. Daher lautet die Funktionsgliechung im zweiten Fall:

$$

f(x)=8 \cdot \frac{1}{2}^x

$$

:::

::::