---
name: "✏️ Bestandsfunktionen nutzen im Sachkontext"
index: 19
lang: de
---

# ✏️ Bestandsfunktionen nutzen im Sachkontext

Bei diesen Aufgaben wird die Bestandsfunktion genutzt, um verschiedene Sachverhalte zu berechnen. 

## Aufgabe: 🏊 Sprung vom 10-Meter-Turm

Bei einem Sprung vom 10-Meter-Turm eines Freibads kann man den Luftwiderstand vernachlässigen, also von einem freien Fall ausgehen. Dabei nimmt die Geschwindigkeit pro Sekunde um etwa 9,81 m/s zu. Diese sogenannte Erdbeschleunigung ist nach unten gerichtet, daher kann die Geschwindigkeit $ v(t)$ in Abhängigkeit von der Zeit $ t $ durch 

$$ 
v(t) = -9,81t 
$$ 

beschrieben werden. Dabei wird $ t $ in Sekunden und $ v(t) $ in Meter pro Sekunde angegeben.

a) Bestimme die Funktion $ h(t) $, die die Höhe des Springers nach $ t $ Sekunden angibt.

:::collapsible{title="1. Tipp: Verstehen der Funktion" id="001122"}

- Funktion analysieren: Die gegebene Funktion $ v(t) = -9,81t $ beschreibt die Geschwindigkeit des Springers in Abhängigkeit von der Zeit.
- Bedeutung der Variablen: Hierbei ist $ t $ die Zeit in Sekunden und $ v(t) $ die Geschwindigkeit in Meter pro Sekunde. Die Höhe $ h(t) $ kann durch die Integration der Geschwindigkeit bestimmt werden.

:::

:::collapsible{title="2. Tipp: Integration der Geschwindigkeit" id="334455"}

- Bestandsfunktion finden: Um die Höhe $ h(t) $ zu bestimmen, muss die Funktion $ v(t) $ integriert werden. Also die Stammfunktion gefunden werden.

$$

\begin{align*}
h(t) &= \int v(t) \, dt \\
     &= \int (-9,81t) \, dt
\end{align*}

$$

- Integration durchführen:
    - Die Integration von $-9,81t$ ergibt $-\frac{9,81}{2}t^2 = -4,905t^2$.

Somit ergibt sich die Funktion $ h(t) $:

$$

h(t) = -4,905t^2 + c

$$

Wobei $ c $ die Integrationskonstante ist, die die Anfangshöhe beschreibt.

:::

:::collapsible{title="3. Tipp: Bestimmung der Integrationskonstante" id="667788"}

- Anfangsbedingung einsetzen: Die Integrationskonstante $ c $ kann bestimmt werden, indem die Anfangshöhe des Springers (10 Meter) eingesetzt wird. Zu Beginn des Sprungs (bei $ t = 0 $) gilt $ h(0) = 10 $.

$$

\begin{align*}
h(0) = -4,905 \cdot 0^2 + c &= 10\\
c &= 10
\end{align*}
$$

:::

:::collapsible{title="4. Tipp: Höhe-Funktion aufstellen" id="990011"}

- Höhe-Funktion aufstellen: Die Integrationskonstante $ c $ ist 10. Die Höhe des Springers nach $ t $ Sekunden lautet also:

$$

h(t) = -4,905t^2 + 10
$$

:::

b) Wie lange dauert es, bis der Springer die Wasseroberfläche erreicht? Mit welcher Geschwindigkeit taucht er ein?

:::collapsible{title="5. Tipp: Bestimmung der Zeit bis zum Eintauchen" id="223344"}

- Eintauchen in die Wasseroberfläche: Der Springer erreicht die Wasseroberfläche, wenn $ h(t) = 0 $. Setze die Höhe-Funktion gleich null und löse nach $ t $ auf:

$$

0 = -4,905t^2 + 10
$$

- Umstellen der Gleichung:

$$

4,905t^2 = 10 \\
t^2 = \frac{10}{4,905} \\
t = \sqrt{\frac{10}{4,905}} \\
t \approx 1,43 \, \text{s}
$$

- Berechne den Wert von $ t $.

:::

:::collapsible{title="6. Tipp: Bestimmung der Eintauchgeschwindigkeit" id="556677"}

- Eintauchgeschwindigkeit bestimmen: Setze den Wert von $ t $ in die Geschwindigkeitsfunktion $ v(t) $ ein, um die Geschwindigkeit beim Eintauchen zu berechnen:

$$

\begin{align*}
v(t) &= -9,81t \\

v(1,43) &= -9,81 \cdot 1,43  \\
&\approx -14,04 \, \text{m/s}
\end{align*}
$$

Die Negative Geschwindigkeit zeigt an, dass der Springer nach unten fällt.

:::

c) Berechne $ \int_0^1 v(t) \, dt $ und interpretiere den Wert im Sachzusammenhang.

:::collapsible{title="7. Tipp: Berechnung des Integrals" id="889900"}

- Integral berechnen: Das Integral $ \int_0^1 v(t) \, dt $ gibt die Höhe nach einer Sekunde an.

:::

## Aufgabe: 🚴 Fahrradfahrt den Hügel hinunter

Bei einer Fahrradfahrt den Hügel hinunter kann man die Beschleunigung des Fahrrads als konstant annehmen. Die Funktion 

$$ 
a(t) = 2t 
$$ 

beschreibt die Beschleunigung des Fahrrads in Metern pro Sekunde zum Quadrat in Abhängigkeit von der Zeit $ t $ in Sekunden. Der Fahrradfahrer startet mit einer Geschwindigkeit von 0 m/s.

a) Bestimme die Funktion $ v(t) $, die die Geschwindigkeit des Fahrrads nach $ t $ Sekunden angibt.

:::collapsible{title="1. Tipp: Verstehen der Funktion" id="123456"}

- Funktion analysieren: Die gegebene Funktion $ a(t) = 2t $ beschreibt die Beschleunigung des Fahrrads in Abhängigkeit von der Zeit.
- Bedeutung der Variablen: Hierbei ist $ t $ die Zeit in Sekunden und $ a(t) $ die Beschleunigung in Metern pro Sekunde zum Quadrat. Die Geschwindigkeit $ v(t) $ kann durch die Integration der Beschleunigung bestimmt werden.

:::

:::collapsible{title="2. Tipp: Integration der Beschleunigung" id="789012"}

- Bestandsfunktion finden: Um die Geschwindigkeit $ v(t) $ zu bestimmen, muss die Funktion $ a(t) $ integriert werden. Also die Stammfunktion gefunden werden.

$$
\begin{align*}
v(t) &= \int a(t) \, dt \\
     &= \int (2t) \, dt
\end{align*}
$$

- Integration durchführen:
    - Die Integration von $ 2t $ ergibt $ t^2 $.

Somit ergibt sich die Funktion $ v(t) $:

$$
v(t) = t^2 + c
$$

Wobei $ c $ die Integrationskonstante ist, die die Anfangsgeschwindigkeit beschreibt.

:::

:::collapsible{title="3. Tipp: Bestimmung der Integrationskonstante" id="345678"}

- Anfangsbedingung einsetzen: Die Integrationskonstante $ c $ kann bestimmt werden, indem die Anfangsgeschwindigkeit des Fahrrads (0 m/s, beim Start) eingesetzt wird. Zu Beginn der Fahrt (bei $ t = 0 $) gilt $ v(0) = 0 $.

$$
\begin{align*}
v(0) = 0^2 + c &= 0\\
c &= 0
\end{align*}
$$

:::

:::collapsible{title="4. Tipp: Geschwindigkeitsfunktion aufstellen" id="901234"}

- Geschwindigkeitsfunktion aufstellen: Die Integrationskonstante $ c $ ist 0. Die Geschwindigkeit des Fahrrads nach $ t $ Sekunden lautet also:

$$
v(t) = t^2
$$

:::

b) Wie lange dauert es, bis das Fahrrad eine Geschwindigkeit von 10 m/s erreicht? 

:::collapsible{title="5. Tipp: Bestimmung der Zeit bis zur gewünschten Geschwindigkeit" id="567890"}

- Geschwindigkeit bestimmen: Setze die Geschwindigkeit gleich 10 m/s und löse nach $ t $ auf:

$$
10 = t^2
$$

- Umstellen der Gleichung:

$$
t = \sqrt{10} \approx 3,16 \, \text{s}
$$

- Berechne den Wert von $ t $.

:::

c) Berechne $ \int_0^3 v(t) \, dt $ und interpretiere den Wert im Sachzusammenhang.

:::collapsible{title="6. Tipp: Berechnung des Integrals" id="234567"}

- Integral berechnen: Das Integral $ \int_0^3 v(t) \, dt $ gibt die zurückgelegte Strecke des Fahrrads in den ersten 3 Sekunden an. 

$$
\begin{align*}
\int_0^3 v(t) \, dt &= \int_0^3 t^2 \, dt \\
&= \left[ \frac{t^3}{3} \right]_0^3 \\
&= \frac{3^3}{3} - \frac{0^3}{3} \\
&= \frac{27}{3} = 9 \, \text{m}
\end{align*}
$$

- Der Wert von 9 m bedeutet, dass das Fahrrad in den ersten 3 Sekunden eine Strecke von 9 Metern zurückgelegt hat.

:::

## Aufgabe: 🏀 Ball rollen lassen

Ein Ball rollt auf einer schiefen Ebene hinunter. Die Beschleunigung des Balls kann als zeitabhängig betrachtet werden und ist durch die Funktion  

$$ 
a(t) = 3t 
$$ 

gegeben. Dabei ist $ t $ die Zeit in Sekunden und $ a(t) $ die Beschleunigung in Metern pro Sekunde zum Quadrat. Der Ball startet aus der Ruhe (Geschwindigkeit = 0 m/s).

a) Bestimme die Funktion $ v(t) $, die die Geschwindigkeit des Balls nach $ t $ Sekunden angibt.

:::collapsible{title="1. Tipp: Verstehen der Funktion" id="654321"}

- Funktion analysieren: Die gegebene Funktion $ a(t) = 3t $ beschreibt die Beschleunigung des Balls in Abhängigkeit von der Zeit.
- Bedeutung der Variablen: Hierbei ist $ t $ die Zeit in Sekunden und $ a(t) $ die Beschleunigung in Metern pro Sekunde zum Quadrat. Die Geschwindigkeit $ v(t) $ kann durch die Integration der Beschleunigung bestimmt werden.

:::

:::collapsible{title="2. Tipp: Integration der Beschleunigung" id="890123"}

- Bestandsfunktion finden: Um die Geschwindigkeit $ v(t) $ zu bestimmen, muss die Funktion $ a(t) $ integriert werden.

$$
\begin{align*}
v(t) &= \int a(t) \, dt \\
     &= \int (3t) \, dt
\end{align*}
$$

- Integration durchführen:
    - Die Integration von $ 3t $ ergibt $ \frac{3}{2} t^2 $.

Somit ergibt sich die Funktion $ v(t) $:

$$
v(t) = \frac{3}{2} t^2 + c
$$

Wobei $ c $ die Integrationskonstante ist, die die Anfangsgeschwindigkeit beschreibt.

:::

:::collapsible{title="3. Tipp: Bestimmung der Integrationskonstante" id="456789"}

- Anfangsbedingung einsetzen: Die Integrationskonstante $ c $ kann bestimmt werden, indem die Anfangsgeschwindigkeit des Balls (0 m/s, beim Start) eingesetzt wird. Zu Beginn der Bewegung (bei $ t = 0 $) gilt $ v(0) = 0 $.

$$
\begin{align*}
v(0) = \frac{3}{2} \cdot 0^2 + c &= 0\\
c &= 0
\end{align*}
$$

:::

:::collapsible{title="4. Tipp: Geschwindigkeitsfunktion aufstellen" id="123789"}

- Geschwindigkeitsfunktion aufstellen: Die Integrationskonstante $ c $ ist 0. Die Geschwindigkeit des Balls nach $ t $ Sekunden lautet also:

$$
v(t) = \frac{3}{2} t^2
$$

:::

b) Wie lange dauert es, bis der Ball eine Geschwindigkeit von 12 m/s erreicht?

:::collapsible{title="5. Tipp: Bestimmung der Zeit bis zur gewünschten Geschwindigkeit" id="678901"}

- Geschwindigkeit bestimmen: Setze die Geschwindigkeit gleich 12 m/s und löse nach $ t $ auf:

$$
12 = \frac{3}{2} t^2
$$

- Umstellen der Gleichung:

$$
t^2 = \frac{12 \times 2}{3} = 8
$$

$$
t = \sqrt{8} \approx 2,83 \, \text{s}
$$

:::

c) Berechne $ \int_0^3 v(t) \, dt $ und interpretiere den Wert im Sachzusammenhang.

:::collapsible{title="6. Tipp: Berechnung des Integrals" id="345678"}

- Integral berechnen: Das Integral $ \int_0^3 v(t) \, dt $ gibt die zurückgelegte Strecke des Balls in den ersten 3 Sekunden an. 

$$
\begin{align*}
\int_0^3 v(t) \, dt &= \int_0^3 \frac{3}{2} t^2 \, dt \\
&= \frac{3}{2} \left[ \frac{t^3}{3} \right]_0^3 \\
&= \frac{3}{2} \times \left( \frac{3^3}{3} - \frac{0^3}{3} \right) \\
&= \frac{3}{2} \times \frac{27}{3} \\
&= \frac{3}{2} \times 9 \\
&= 13,5 \, \text{m}
\end{align*}
$$

- Der Wert von 13,5 m bedeutet, dass der Ball in den ersten 3 Sekunden eine Strecke von 13,5 Metern zurückgelegt hat.

:::

## Aufgabe: 🚀 Rakete starten lassen

Eine Rakete startet vertikal und ihre Beschleunigung kann als zeitabhängig betrachtet werden und ist durch die Funktion  

$$ 
a(t) = 4t 
$$ 

gegeben. Dabei ist $ t $ die Zeit in Sekunden und $ a(t) $ die Beschleunigung in Metern pro Sekunde zum Quadrat. Die Rakete startet aus der Ruhe (Geschwindigkeit = 0 m/s).

a) Bestimme die Funktion $ v(t) $, die die Geschwindigkeit der Rakete nach $ t $ Sekunden angibt.

:::collapsible{title="1. Tipp: Verstehen der Funktion" id="654321"}

- Funktion analysieren: Die gegebene Funktion $ a(t) = 4t $ beschreibt die Beschleunigung der Rakete in Abhängigkeit von der Zeit.
- Bedeutung der Variablen: Hierbei ist $ t $ die Zeit in Sekunden und $ a(t) $ die Beschleunigung in Metern pro Sekunde zum Quadrat. Die Geschwindigkeit $ v(t) $ kann durch die Integration der Beschleunigung bestimmt werden.

:::

:::collapsible{title="2. Tipp: Integration der Beschleunigung" id="890123"}

- Bestandsfunktion finden: Um die Geschwindigkeit $ v(t) $ zu bestimmen, muss die Funktion $ a(t) $ integriert werden.

$$
\begin{align*}
v(t) &= \int a(t) \, dt \\
     &= \int (4t) \, dt
\end{align*}
$$

- Integration durchführen:
    - Die Integration von $ 4t $ ergibt $ 2t^2 $.

Somit ergibt sich die Funktion $ v(t) $:

$$
v(t) = 2t^2 + c
$$

Wobei $ c $ die Integrationskonstante ist, die die Anfangsgeschwindigkeit beschreibt.

:::

:::collapsible{title="3. Tipp: Bestimmung der Integrationskonstante" id="456789"}

- Anfangsbedingung einsetzen: Die Integrationskonstante $ c $ kann bestimmt werden, indem die Anfangsgeschwindigkeit der Rakete (0 m/s, beim Start) eingesetzt wird. Zu Beginn der Bewegung (bei $ t = 0 $) gilt $ v(0) = 0 $.

$$
\begin{align*}
v(0) = 2 \cdot 0^2 + c &= 0\\
c &= 0
\end{align*}
$$

:::

:::collapsible{title="4. Tipp: Geschwindigkeitsfunktion aufstellen" id="123789"}

- Geschwindigkeitsfunktion aufstellen: Die Integrationskonstante $ c $ ist 0. Die Geschwindigkeit der Rakete nach $ t $ Sekunden lautet also:

$$
v(t) = 2t^2
$$

:::

b) Wie lange dauert es, bis die Rakete eine Geschwindigkeit von 16 m/s erreicht?

:::collapsible{title="5. Tipp: Bestimmung der Zeit bis zur gewünschten Geschwindigkeit" id="678901"}

- Geschwindigkeit bestimmen: Setze die Geschwindigkeit gleich 16 m/s und löse nach $ t $ auf:

$$
16 = 2t^2
$$

- Umstellen der Gleichung:

$$
t^2 = \frac{16}{2} = 8
$$

$$
t = \sqrt{8} \approx 2,83 \, \text{s}
$$

:::

c) Berechne $ \int_0^3 v(t) \, dt $ und interpretiere den Wert im Sachzusammenhang.

:::collapsible{title="6. Tipp: Berechnung des Integrals" id="345678"}

- Integral berechnen: Das Integral $ \int_0^3 v(t) \, dt $ gibt die zurückgelegte Strecke der Rakete in den ersten 3 Sekunden an. 

$$
\begin{align*}
\int_0^3 v(t) \, dt &= \int_0^3 2t^2 \, dt \\
&= 2 \left[ \frac{t^3}{3} \right]_0^3 \\
&= 2 \times \left( \frac{3^3}{3} - \frac{0^3}{3} \right) \\
&= 2 \times \frac{27}{3} \\
&= 2 \times 9 \\
&= 18 \, \text{m}
\end{align*}
$$

- Der Wert von 18 m bedeutet, dass die Rakete in den ersten 3 Sekunden eine Strecke von 18 Metern zurückgelegt hat.

:::

## 🔴 Aufgabe: 🏗️ Brückenkonstruktion – Belastung eines Trägers  

Ein Ingenieur untersucht die Belastung eines Brückenträgers mit einer festen Länge von **6 Metern** unter einer gleichmäßig verteilten Last. Die Biegelinie des Trägers (die Durchbiegung in Abhängigkeit von der Position $ x $) wird vereinfacht durch die zweite Ableitung der Durchbiegungsfunktion $ y(x) $ beschrieben:  

$$  
y''(x) = -4x  
$$  

wobei $ x $ die Position entlang des Trägers in Metern angibt und $ y''(x) $ die Krümmung des Trägers in Metern pro Meter zum Quadrat beschreibt. Die Brücke ist an beiden Enden (bei $ x = 0 $ und $ x = 6 $) fest eingespannt, sodass die Durchbiegung an den Enden Null ist.  

a) Bestimme die Funktion $ y(x) $, die die Durchbiegung des Trägers beschreibt.

:::collapsible{title="1. Tipp: Verständnis der Funktion" id="tip-1"}

- Die Funktion $ y''(x) = -4x $ beschreibt die Krümmung des Trägers.  
- Um die Durchbiegung $ y(x) $ zu erhalten, müssen wir zweimal integrieren.  

:::

:::collapsible{title="2. Tipp: Erste Integration" id="tip-2"}

- Die erste Integration liefert die Steigung $ y'(x) $:  

$$
\begin{align*}
y'(x) &= \int y''(x) \, dx \\
&= \int (-4x) \, dx \\
&= -2x^2 + C_1
\end{align*}
$$  

:::

:::collapsible{title="3. Tipp: Zweite Integration" id="tip-3"}

- Die zweite Integration liefert die Durchbiegung $ y(x) $:  

$$
\begin{align*}
y(x) &= \int y'(x) \, dx \\
&= \int (-2x^2 + C_1) \, dx \\
&= -\frac{2}{3} x^3 + C_1 x + C_2
\end{align*}
$$  

:::

b) Bestimme die Konstanten $ C_1 $ und $ C_2 $, wenn die Brücke an beiden Enden fest eingespannt ist ($ y(0) = 0 $ und $ y(6) = 0 $).  

:::collapsible{title="4. Tipp: Randbedingungen nutzen" id="tip-4"}

- Die Randbedingungen bedeuten, dass die Durchbiegung an den Enden $ x = 0 $ und $ x = 6 $ gleich null sein muss:  

$$
y(0) = -\frac{2}{3} (0)^3 + C_1 (0) + C_2 = 0 \Rightarrow C_2 = 0
$$  

$$
y(6) = -\frac{2}{3} \cdot 6^3 + C_1 \cdot 6 + 0 = 0
$$  

:::

:::collapsible{title="5. Tipp: Konstante $ C_1 $ berechnen" id="tip-5"}

- Einsetzen von $ x = 6 $:

$$
- \frac{2}{3} \cdot 216 + 6C_1 = 0
$$

$$
-144 + 6C_1 = 0
$$

$$
C_1 = 24
$$  

:::

:::collapsible{title="6. Tipp: Endgültige Funktion" id="tip-6"}

- Damit lautet die Durchbiegungsfunktion:

$$
y(x) = -\frac{2}{3} x^3 + 24x
$$

:::

c) Bestimme die maximale Durchbiegung der Brücke.  

:::collapsible{title="7. Tipp: Extremstelle bestimmen" id="tip-7"}

- Die maximale Durchbiegung tritt dort auf, wo die Steigung $ y'(x) $ null ist:

$$
y'(x) = -2x^2 + 24 = 0
$$

- Umstellen:

$$
2x^2 = 24
$$  

$$
x^2 = 12
$$  

$$
x = \sqrt{12} \approx 3.46
$$  

:::

:::collapsible{title="8. Tipp: Maximalen Wert berechnen" id="tip-8"}

- Setze $ x = 3.46 $ in $ y(x) $ ein:

$$
y(3.46) = -\frac{2}{3} (3.46)^3 + 24 \cdot 3.46
$$

$$
\approx -\frac{2}{3} (41.46) + 83.04
$$

$$
\approx -27.64 + 83.04
$$

$$
\approx 55.4
$$

- Die maximale Durchbiegung beträgt also **55.4 mm (0.0554 m)**.

:::