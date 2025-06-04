---
name: ✏️ Anwendungen
index: 4
lang: de
---

# ✏️ Anwendungen

Jetzt, da wir die Produktregel beherrschen, können wir sie auf verschiedene Anwendungen anwenden. Hier sind einige Beispiele:

## Aufgabe: ☕ Abkühlung eines Tees

Die Temperatur eines Tees kann durch eine Funktion der Form $f(t) = a + b \cdot e^{-k \cdot t}$, $t$ in Minuten und $f(t)$ in $^{\circ}C$, modelliert werden.

a) Die Anfangstemperatur des Tees beträgt $95^{\circ}C$. Nach 9 Minuten ist der Tee auf $40,9^{\circ}C$ abgekühlt. Für den Abkühlungfaktor gilt $k=0,3$. Zeige, dass $f(t)=37 + 58 \cdot e^{-0,3x}$ gilt.

:::collapsible{title="Musterlösung"}

Wir setzen die gegebenen Werte in die Funktion ein:

$$

\begin{align*}
f(0) &= a + b \cdot e^{-k \cdot 0} = a + b = 95
f(9) &= a + b \cdot e^{-0,3 \cdot 9} = a + b \cdot e^{-2,7} = 40,9
\end{align*}

$$

Jetzt können wir die beiden Gleichungen lösen:

$$

\begin{align*}
I: a + b &= 95 \\
II: a + b \cdot e^{-2,7} &= 40,9
\end{align*}

$$

$$

\begin{align*}
I - II: b - b \cdot e^{-2,7} &= 95 - 40,9 \\
b(1 - e^{-2,7}) &= 54,1 \\
b &= \frac{54,1}{1 - e^{-2,7}} \approx 58
\end{align*}

$$

Nun setzen wir $b$ in die erste Gleichung ein und lösen nach $a$ auf:

$$

a = 95 - b \approx 37

$$

Die Funktion gilt.

:::

b) Bestimme die Temperatur des Tees nach 15 Minuten.

:::collapsible{title="Musterlösung"}

Hier setzen wir $t = 15$ in die Funktion ein:

$$

f(15) = 37 + 58 \cdot e^{-0,3 \cdot 15} \approx 37,644^{\circ}C

$$

Die Temperatur des Tees nach 15 Minuten beträgt also etwa $37,644^{\circ}C$.

:::

c) Berechne den Wert der Ableitung $f'(t)$ nach 15 Minuten und interpretiere das Ergebnis im Sachzusammenhang.

:::collapsible{title="Musterlösung"}

Zuerst berechnen wir die Ableitung der Funktion:

$$

f'(t) = -0,3 \cdot 58 \cdot e^{-0,3 \cdot t} = -17,4 \cdot e^{-0,3 \cdot t}

$$

Dann setzen wir $t = 15$ ein:

$$

f'(15) = -17,4 \cdot e^{-0,3 \cdot 15} \approx -2,5

$$

Da bedeutet, dass die Temperatur des Tees nach 15 Minuten um etwa $2,5^{\circ}C$ pro Minute abnimmt.

:::

d) Bestimme die Zeit, nach der der Tee auf $50^{\circ}C$ abgekühlt ist.

:::collapsible{title="Musterlösung"}

Dazu setzen wir $f(t) = 50$ und lösen die Gleichung:

$$

\begin{align*}
f(t) = 37 + 58 \cdot e^{-0,3 \cdot t} &= 50 | -37\\
58 \cdot e^{-0,3 \cdot t} &= 13 | :58\\
e^{-0,3 \cdot t} &= \frac{13}{58} | ln(..) \\
-0,3 \cdot t &= ln\left(\frac{13}{58}\right) | : -0,3\\
t &= \frac{ln\left(\frac{13}{58}\right)}{-0,3} \approx 8,5

\end{align*}


$$

:::

e) Anhand des Funktionsterms kann die Umgebungstemperatur des Tees bestimmt werden. Bestimme diese.

:::collapsible{title="Musterlösung"}

Hier berechnen wir den Grenzwert der Funktion für $t \to \infty$:

$$

\lim_{t \to \infty} f(t) = 37 + 58 \cdot e^{-0,3 \cdot t} = 37 + 58 \cdot 0 = 37

$$

Der Grenzwert der Funktion ist also $37^{\circ}C$. Das bedeutet, dass die Umgebungstemperatur des Tees $37^{\circ}C$ beträgt. Ganz schön warm, oder? 🥵

:::

f) Um die Abkühlung des Tees zu verlangsamen, wird der Tee in eine Thermoskanne gefüllt. Begründe wie sich der Abkühlungsfaktor $k$ ändert und wie sich dies auf die Funktion $f(t)$ auswirkt.

:::collapsible{title="Musterlösung"}

Der Abkühlungsfaktor $k$ wird kleiner, da die Thermoskanne die Wärme besser isoliert. Dadurch wird die Funktion flacher und die Temperatur des Tees bleibt länger hoch. Die neue Funktion könnte zum Beispiel die Form $f(t) = 37 + 58 \cdot e^{-k' \cdot t}$ haben, wobei $k' < k$ ist. Zum Beispiel könnte $k' = 0,2$ sein, was die Abkühlung des Tees verlangsamt.

:::

## Aufgabe: 💊 Wirkstoffkonzentration eines Medikaments

Durch die Funktion $f(t) = 20 t \cdot e^{-0,5t}$ wird die Wirkstoffkonzentration eines Medikaments im Blut modelliert, wobei $t$ die Zeit in Stunden und $f(t)$ die Konzentration in mg/l angibt. Die Funktion ist nur im Intervall $[0, 10]$ definiert.

a) Bestimme die Wirkstoffkonzentration am Anfang und Ende der Zeitspanne.

:::collapsible{title="Musterlösung"}

Dazu setzen wir die Werte $t = 0$ und $t = 10$ in die Funktion ein:

$$

f(0) = 20 \cdot 0 \cdot e^{-0,5 \cdot 0} = 0 \quad (\text{Konzentration am Anfang}) \\

f(10) = 20 \cdot 10 \cdot e^{-0,5 \cdot 10} = 20 \cdot 10 \cdot e^{-5} \approx 0,735 \quad (\text{Konzentration am Ende})

$$

Am Anfang beträgt die Konzentration des Medikaments im Blut $0$ mg/l und am Ende der Zeitspanne $0,735$ mg/l.

:::

b) Bestimme die Zeit, zu der die Konzentration des Medikaments im Blut am höchsten ist.

:::collapsible{title="Musterlösung"}

Dazu das globale Maximum der Funktion $f(t)$ bestimmen. Dazu setzen wir die Ableitung $f'(t)$ gleich Null:

$$

\begin{align*}
f'(t) = e^{-0,5t} (20 - 10t) &= 0
\end{align*}

$$

Der Faktor $e^{-0,5t}$ ist für alle $t$ ungleich Null, daher setzen wir nur den anderen Faktor gleich Null:

$$

20 - 10t = 0 \implies 10t = 20 \implies t = 2

$$

Das heißt, das wir für $t=2$ eine Extremstelle haben. Nun setzen wir diese in die zweite Ableitung ein, um zu überprüfen, ob es sich um ein Maximum handelt:

$$

\begin{align*}
f''(t) &= e^{-0,5t} \left(5t-20\right) \\
f''(2) &= e^{-0,5 \cdot 2} \left(5 \cdot 2 - 20\right) = e^{-1} \cdot (-10) < 0
\end{align*}

$$

:::

c) Ab dem Zeitpunkt $t=5$ kann die Konzentration durch die Tangente an den Graphen von $f$ an dieser Stelle beschrieben werden. Bestimme den Zeitpunkt, zu dem das Medikament vollständig abgebaut ist, wenn die Konzentration des Medikaments im Blut durch die Tangente beschrieben wird.

:::collapsible{title="Musterlösung"}

Dazu müssen wir die Tangente an den Graphen von $f$ bei $t=5$ bestimmen. Zuerst berechnen wir die Ableitung an dieser Stelle:

$$

f'(5) = e^{-0,5 \cdot 5} (20 - 10 \cdot 5) = e^{-2.5} \cdot (-30) \approx -11,1

$$

Jetzt können wir die Tangentengleichung aufstellen. Die Tangente hat die Form $g(t) = f(5) + f'(5)(t - 5)$.

$$

\begin{align*}
g(t) &= f(5) + f'(5)(t - 5) \\
&= 20 \cdot 5 \cdot e^{-0,5 \cdot 5} - 11,1(t - 5) \\
&= 100 \cdot e^{-2.5} - 11,1(t - 5)
\end{align*}

$$

Abschließend setzen wir die Tangentengleichung gleich Null, um den Zeitpunkt zu finden, an dem das Medikament vollständig abgebaut ist:

$$

\begin{align*}
g(t) = 100 \cdot e^{-2.5} - 11,1(t - 5) &= 0 \\
100 \cdot e^{-2.5} &= 11,1(t - 5) \\
100 \cdot e^{-2.5} + 55,5 &= 11,1t \\
(100 \cdot e^{-2.5} + 55,5) / 11,1 &= t \\
t &= \frac{100 \cdot e^{-2.5} + 55,5}{11,1} \approx 6,4

\end{align*}

$$

Mit dieser Annahme ist das Medikament nach etwa $6,4$ Stunden vollständig abgebaut.

:::

d) Für ein anderes Medikament soll eine ähnliche Funktion modelliert werden. Es ist bekannt, dass die Konzentration des Medikaments 2 Stunden nach der Einnahme mit 10 mg/l am größten ist. Bestimme den Wert von $k > 0$ und $a > 0$, wenn die Funktion die Form $f(t) = a \cdot t \cdot e^{-kt}$ hat.

:::collapsible{title="Musterlösung"}

Dazu stellen wir zwei Gleichungen auf, die die Bedingungen erfüllen:

$$

\begin{align*}

f(2) &= a \cdot 2 \cdot e^{-2k} = 10 \quad (\text{Konzentration am Maximum}) \\
f'(2) &= e^{-2k} (a - 2ak) = 0 \quad (\text{Ableitung gleich Null am Maximum})

\end{align*}

$$

Jezt lösen wir die Gleichungen:

$$

\begin{align*}
I. a \cdot 2 \cdot e^{-2k} &= 10 \\
II. e^{-2k} (a - 2ak) &= 0
\end{align*}

$$

Aus der zweiten Gleichung folgt, dass $a - 2ak = 0$, also $a(1 - 2k) = 0$. Da $a$ nicht Null sein kann, folgt $1 - 2k = 0$, also $k = \frac{1}{2}$.

Somit können wir $k$ in die erste Gleichung einsetzen:

$$

a = \frac{10}{2 \cdot e^{-1}} = 5e

$$

Demnach ist die Funktion $f(t) = 5e \cdot t \cdot e^{-\frac{1}{2}t}$.

:::
