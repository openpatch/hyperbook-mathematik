---
name: "✏️ Gemischte Aufgaben"
lang: de
index: 30
---

# ✏️ Gemischte Aufgaben

## 💐 Temperatur im Gewächshaus

Um die Temperatur in einem Gewächshaus zu regulieren, wurde ein Heizsystem installiert. Bei kaltem Wetter wird die Wärme von der Heizung in den Raum geleitet. In das Heizsystem wurde ein Thermometer eingebaut, das kontinuierlich die Temperaturentwicklung registriert und als Graph aufzeichnet. Ein solcher Graph ist in der nachfolgenden Abbildung vereinfacht dargestellt. Die Zeit wird in Stunden und die Temperaturerhöhung in der Einheit °C pro Stunde gemessen.

:::geogebra{perspective="G" coordsystem="-10,40,-20,40"}
c = Slider[0.001, 0.1, 0.001, 0.01]
T = c(x - 20)^2 * x
:::

a) Erkläre das Verhalten der Funktion T anhand des abgebildeten Graphen im Sachzusammenhang.

:::collapsible{title="Lösung" id="811688"}

Die Temperatur im Gewächshaus steigt anfangs langsam an und steigt dann immer schneller an. Nach 20 Stunden erreicht die Temperatur ihren Höchstwert und sinkt dann wieder.

:::

b) Begründe, dass eine lineare Funktion zur Modellierung nicht ausreicht.

:::collapsible{title="Lösung" id="262681"}

Eine lineare Funktion würde eine konstante Steigung bedeuten, was nicht dem Verhalten des Graphen entspricht. Sie würde auch nicht zur Modellierung ausreichen, da die Temperatur nach 20 Stunden wieder sinkt.

:::

c) Die Funktion T kann durch eine ganzrationale Funktion dritten Grades in der Form 
$$
T(t)=c⋅(t−20)^2⋅t, \ t \in [0;40]
$$ 
beschrieben werden. Gehe davon aus, dass die Temperaturänderung nach 10 Stunden $0,1 \, \text{°C}$ pro Stunde beträgt. Bestimme den Wert von c.

:::collapsible{title="Lösung" id="262682"}

Die Temperaturänderung nach 10 Stunden beträgt $0,1 \, \text{°C}$ pro Stunde. Das bedeutet, dass die Ableitung der Funktion T an der Stelle $t = 10$ den Wert $0,1$ hat:

$$

\begin{align*}

T(10) &= 0,1 \\

c \cdot \left( 10 - 20 \right)^2 \cdot 10 &= 0,1 \\

c \cdot 100 \cdot 10 &= 0,1 \\

c &= \frac{0,1}{1000} = 0,0001

\end{align*}

$$


:::

d) Zu Beginn der aufgezeichneten Messung betrug die Temperatur im Gewächshaus 10 °C. Bestimme aus der Funktion T die Bestandsfunktion G, die die Temperatur im Gewächshaus in °C zum Zeitpunkt t in Stunden angibt.

:::collapsible{title="Lösung" id="262683"}

Die Bestandsfunktion G ergibt sich durch Integration der Funktion T:

$$

\begin{align*}

G(t) &= \int T(t) \, dt \\
&= \int 0,0001 \cdot (t - 20)^2 \cdot t \, dt \\
&= \int 0,0001 \cdot (t^2 - 40t + 400) \cdot t \, dt \\
&= 0,0001 \cdot \int (t^3 - 40t^2 + 400t) \, dt \\
&= 0,0001 \cdot \left( \frac{1}{4}t^4 - \frac{40}{3}t^3 + 200t^2 \right) + C

\end{align*}

$$

Da die Temperatur zu Beginn der Messung 10 °C betrug, gilt:

$$

\begin{align*}

G(0) &= 10 \\
0,0001 \cdot \left( \frac{1}{4} \cdot 0^4 - \frac{40}{3} \cdot 0^3 + 200 \cdot 0^2 \right) + C &= 10 \\
C &= 10

\end{align*}

$$

Die Bestandsfunktion G lautet also:

$$

G(t) = 0,0001 \cdot \left( \frac{1}{4}t^4 - \frac{40}{3}t^3 + 200t^2 \right) + 10

$$

:::

e) Berechne, wie hoch die Temperatur im Gewächshaus nach 40 Stunden ist.

:::collapsible{title="Lösung" id="262684"}

Die Temperatur nach 40 Stunden ergibt sich durch Einsetzen von $t = 40$ in die Bestandsfunktion G:

$$

\begin{align*}

G(40) &= 0,0001 \cdot \left( \frac{1}{4} \cdot 40^4 - \frac{40}{3} \cdot 40^3 + 200 \cdot 40^2 \right) + 10 \\
&= 0,0001 \cdot \left( 256000 - 1024000 + 320000 \right) + 10 \\
&= 0,0001 \cdot 256000 + 10 \\
&= 25,6 + 10 \\
&= 35,6


\end{align*}

$$

Die Temperatur im Gewächshaus beträgt also nach 40 Stunden $35,6$ °C.

:::

f) Berechne, wann die Temperatur in den ersten 40 Stunden ihr Maximum erreicht.

:::collapsible{title="Lösung" id="262685"}

Das Maximum der Temperatur entspricht dem Maximum der Funktion G. Dieses Maximum liegt an der Stelle, an der die Ableitung der Funktion G den Wert 0 hat. Die Ableitung der Funktion G ist T:

$$

\begin{align*}

G'(t) &= T(t)

\end{align*}

$$

Das Maximum der Temperatur liegt also an der Stelle, an der die Funktion T den Wert 0 hat. 

$$ 

\begin{align*}

T(t) = 0,0001 \cdot (t - 20)^2 \cdot t &= 0 \\
(t - 20)^2 \cdot t &= 0 \\
t &= 0 \ \text{oder} \ t = 20

\end{align*}

$$

Überprüfen, ob es sich um ein Maximum handelt:

$$

\begin{align*}

T'(t) &= 0,0001 \cdot (3t^2 - 120t + 400) \\

T'(0) &= 0,0001 \cdot (3 \cdot 0^2 - 120 \cdot 0 + 400) = 0,4 \\
T'(20) &= 0,0001 \cdot (3 \cdot 20^2 - 120 \cdot 20 + 400) = -0,4 \\

\end{align*}

$$

Das Maximum der Temperatur wird also nach 20 Stunden erreicht.

:::


