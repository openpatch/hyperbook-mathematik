---
name: "✏️ Bestandsfunktionen aufstellen im Sachkontext"
index: 18
lang: de
---

# ✏️ Bestandsfunktionen aufstellen im Sachkontext

Bei diesen Aufgaben muss die Bestandsfunktion einer gegebenen Funktion im Sachkontext bestimmt werden. Dazu wird die gegebene Funktion integriert und die Integrationskonstante durch eine Anfangsbedingung bestimmt.

## Aufgabe: 🌞 Solaranlage

In einigen Solaranlagen wird die produzierte Energie in Form von Wärme gespeichert. Die Funktion 

$$ 
g(t) = 0,5t^2 - 3t 
$$ 

beschreibt die momentane Produktionsrate der erzeugten Wärme in Megajoule pro Tag in Abhängigkeit von der Zeit $t$ in Tagen.

Für die Menge der Wärme $H(a)$ in MJ, die sich zum Zeitpunkt $a$ im Speichertank befindet, gilt 

$$ 
H(60) = 0. 
$$ 

Bestimme die Bestandsfunktion $H(t)$. 

:::collapsible{title="1. Tipp: Verstehen der Funktion" id="003424"}


- Funktion analysieren: Die gegebene Funktion $g(t)=0,5t^2−3t$ beschreibt die momentane Produktionsrate der Wärme in Megajoule pro Tag.
- Bedeutung der Variablen: Hierbei ist $t$ die Zeit in Tagen und $g(t)$ die produzierte Wärme pro Tag.

:::

:::collapsible{title="2. Tipp: Integration der Funktion" id="379897"}

- Bestandsfunktion finden: Um die Gesamtmenge der Wärme zu bestimmen, muss die Funktion $g(t)$ integriert werden. Also die Stammfunktion gefunden werden.

$$

\begin{align*}
H(t) &= \int g(t) \, dt \\
     &= \int (0,5t^2 - 3t) \, dt
\end{align*}

$$

- Integration durchführen:
    - Die Integration von $0,5t^2$ ergibt $\frac{0,5}{3}t^3 = \frac{1}{6} t^3$.
    - Die Integration von $-3t$ ergibt $-\frac{3}{2}t^2$.

Somit ergibt sich die Bestandsfunktion $H(t)$:

$$

H(t) = \frac{1}{6} t^3 - \frac{3}{2} t^2 + c

$$

Wobei c die Integrationskonstante ist.

:::

:::collapsible{title="3. Tipp: Bestimmung der Integrationskonstante" id="484394"}

- Anfangsbedingung einsetzen: Die Integrationskonstante $c$ kann bestimmt werden, indem die Anfangsbedingung $H(60) = 0$ eingesetzt wird.

$$

\begin{align*}
H(60) = \frac{1}{6} \cdot 60^3 - \frac{3}{2} \cdot 60^2 + c &= 0\\

\frac{1}{6} \cdot 60^3 - \frac{3}{2} \cdot 60^2 + c &= 0\\
\frac{1}{6} \cdot 216000 - \frac{3}{2} \cdot 3600 + c &= 0\\
36000 - 5400 + c &= 0\\
30600 + c &= 0\\
c &= -30600
\end{align*}
$$

:::

:::collapsible{title="4. Tipp: Bestandsfunktion aufstellen" id="628791"}

- Bestandsfunktion aufstellen: Die Integrationskonstante $c$ ist $-30600$. Die Bestandsfunktion $H(t)$ lautet also:

$$

H(t) = \frac{1}{6} t^3 - \frac{3}{2} t^2 - 30600

$$

:::

## Aufgabe: 🍃 Windkraftanlage

In einigen Windkraftanlagen wird die produzierte Energie in Form von elektrischer Energie gespeichert. Die Funktion 

$$ 
f(t) = 0,4t^2 - 2t 
$$ 

beschreibt die momentane Produktionsrate der erzeugten elektrischen Energie in Megawattstunden pro Tag in Abhängigkeit von der Zeit $t$ in Tagen.

Für die Menge der Energie $E(b)$ in MWh, die sich zum Zeitpunkt $b$ im Speichertank befindet, gilt 

$$ 
E(30) = 0. 
$$ 

Bestimme die Bestandsfunktion $E(t)$. 

:::collapsible{title="1. Tipp: Verstehen der Funktion" id="001234"}

- Funktion analysieren: Die gegebene Funktion $f(t)=0,4t^2−2t$ beschreibt die momentane Produktionsrate der elektrischen Energie in Megawattstunden pro Tag.
- Bedeutung der Variablen: Hierbei ist $t$ die Zeit in Tagen und $f(t)$ die produzierte Energie pro Tag.

:::

:::collapsible{title="2. Tipp: Integration der Funktion" id="567890"}

- Bestandsfunktion finden: Um die Gesamtmenge der Energie zu bestimmen, muss die Funktion $f(t)$ integriert werden. Also die Stammfunktion gefunden werden.

$$

\begin{align*}
E(t) &= \int f(t) \, dt \\
     &= \int (0,4t^2 - 2t) \, dt
\end{align*}

$$

- Integration durchführen:
    - Die Integration von $0,4t^2$ ergibt $\frac{0,4}{3}t^3 = \frac{2}{15} t^3$.
    - Die Integration von $-2t$ ergibt $-t^2$.

Somit ergibt sich die Bestandsfunktion $E(t)$:

$$

E(t) = \frac{2}{15} t^3 - t^2 + c

$$

Wobei $c$ die Integrationskonstante ist.

:::

:::collapsible{title="3. Tipp: Bestimmung der Integrationskonstante" id="098765"}

- Anfangsbedingung einsetzen: Die Integrationskonstante $c$ kann bestimmt werden, indem die Anfangsbedingung $E(30) = 0$ eingesetzt wird.

$$

\begin{align*}
E(30) = \frac{2}{15} \cdot 30^3 - 30^2 + c &= 0\\

\frac{2}{15} \cdot 27000 - 900 + c &= 0\\
3600 - 900 + c &= 0\\
2700 + c &= 0\\
c &= -2700
\end{align*}
$$

:::

:::collapsible{title="4. Tipp: Bestandsfunktion aufstellen" id="112233"}

- Bestandsfunktion aufstellen: Die Integrationskonstante $c$ ist $-2700$. Die Bestandsfunktion $E(t)$ lautet also:

$$

E(t) = \frac{2}{15} t^3 - t^2 - 2700

$$

:::

## Aufgabe: 🌊 Wasserspeicher

In einem Wasserspeicher wird das Wasser durch Pumpen in Abhängigkeit von der Zeit gefüllt. Die Funktion 

$$ 
p(t) = 0,3t^2 - 1,5t 
$$ 

beschreibt die momentane Füllrate des Wassers in Litern pro Stunde in Abhängigkeit von der Zeit $t$ in Stunden.

Für die Menge des Wassers $W(c)$ in Litern, die sich zum Zeitpunkt $c$ im Speicher befindet, gilt 

$$ 
W(20) = 0. 
$$ 

Bestimme die Bestandsfunktion $W(t)$. 

:::collapsible{title="1. Tipp: Verstehen der Funktion" id="445566"}

- Funktion analysieren: Die gegebene Funktion $p(t)=0,3t^2−1,5t$ beschreibt die momentane Füllrate des Wassers in Litern pro Stunde.
- Bedeutung der Variablen: Hierbei ist $t$ die Zeit in Stunden und $p(t)$ die gefüllte Wassermenge pro Stunde.

:::

:::collapsible{title="2. Tipp: Integration der Funktion" id="778899"}

- Bestandsfunktion finden: Um die Gesamtmenge des Wassers zu bestimmen, muss die Funktion $p(t)$ integriert werden. Also die Stammfunktion gefunden werden.

$$

\begin{align*}
W(t) &= \int p(t) \, dt \\
     &= \int (0,3t^2 - 1,5t) \, dt
\end{align*}

$$

- Integration durchführen:
    - Die Integration von $0,3t^2$ ergibt $\frac{0,3}{3}t^3 = 0,1 t^3$.
    - Die Integration von $-1,5t$ ergibt $-\frac{1,5}{2}t^2 = -0,75t^2$.

Somit ergibt sich die Bestandsfunktion $W(t)$:

$$

W(t) = 0,1 t^3 - 0,75 t^2 + c

$$

Wobei $c$ die Integrationskonstante ist.

:::

:::collapsible{title="3. Tipp: Bestimmung der Integrationskonstante" id="334455"}

- Anfangsbedingung einsetzen: Die Integrationskonstante $c$ kann bestimmt werden, indem die Anfangsbedingung $W(20) = 0$ eingesetzt wird.

$$

\begin{align*}
W(20) = 0,1 \cdot 20^3 - 0,75 \cdot 20^2 + c &= 0\\

0,1 \cdot 8000 - 0,75 \cdot 400 + c &= 0\\
800 - 300 + c &= 0\\
500 + c &= 0\\
c &= -500
\end{align*}
$$

:::

:::collapsible{title="4. Tipp: Bestandsfunktion aufstellen" id="556677"}

- Bestandsfunktion aufstellen: Die Integrationskonstante $c$ ist $-500$. Die Bestandsfunktion $W(t)$ lautet also:

$$

W(t) = 0,1 t^3 - 0,75 t^2 - 500

$$

:::