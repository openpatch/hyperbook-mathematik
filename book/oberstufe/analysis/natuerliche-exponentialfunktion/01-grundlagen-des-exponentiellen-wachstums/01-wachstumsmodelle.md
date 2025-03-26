---
name: 💡 Wachstumsmodelle
index: 1
lang: de
---

# 💡 Wachstumsmodelle

Wachstumsprozesse können durch verschiedene mathematische Modelle beschrieben werden. Drei wichtige Modelle sind das lineare, das quadratische und das exponentielle Wachstum.

## Lineares Wachstum

Beim linearen Wachstum nimmt die Größe einer Menge in gleichen Zeitintervallen um denselben Betrag zu. Die Funktionsgleichung des linearen Wachstums lautet:

$$

f(x) = m \cdot x + n

$$

Dabei ist $m$ die Steigung der Geraden und $n$ der y-Achsenabschnitt.

Im Kontext von Wachstumsprozessen bedeutet das, dass die Menge in jeder Zeiteinheit um denselben Betrag zunimmt. Ein Beispiel für lineares Wachstum ist das Wachstum einer Pflanze, die jeden Tag um die gleiche Höhe wächst.

$ m $ ist die Wachstumsrate, also der Betrag, um den die Menge in jeder Zeiteinheit zunimmt. $ n $ ist der Anfangswert, also die Menge, mit der der Wachstumsprozess beginnt.

### Grafische Darstellung

In der folgenden interaktiven Grafik kannst du die Wachstumsrate $ m $ und den Anfangswert $ n $ verändern und sehen, wie sich die Gerade verändert. Zusätzlich werden drei Punkte auf der Geraden angezeigt, um das lineare Wachstum zu veranschaulichen. $P_0$ zeigt den Wert zum Zeitpunkt 0, $P_1$ den Wert zum Zeitpunkt 1 und $P_2$ den Wert zum Zeitpunkt 2.

:::geogebra{perspective="G" coordsystem="-1,10,-10,500" enableRightClick=false}
m = Slider(-100, 100)
n = Slider(0, 100)
f(x) = m * x + n
P_0 = (0, f(0))
SetLabelMode(P_0, 1)
P_1 = (1, f(1))
SetLabelMode(P_1, 1)
P_2 = (2, f(2))
SetLabelMode(P_2, 1)
:::

::::alert{success}

**Prüfe dein Verständnis**

Ein Auto fährt mit einer konstanten Geschwindigkeit von 60 km/h. Zu Beginn der Messung befindet sich das Auto 10 km vom Startpunkt entfernt. Stelle die Parameter $m$ und $n$ so ein, dass der Graph zur folgenden Situation passt: Nach einer Stunde hat das Auto 70 km zurückgelegt.

:::collapsible{title="Lösung" id="392591"}

Der Graph der linearen Funktion sollte durch die Punkte $P_0 = (0, 10)$ und $P_1 = (1, 70)$ verlaufen. Das bedeutet, dass $m = 60$ und $n = 10$ sein müssen.

:::

::::

## Quadratisches Wachstum

Beim quadratischen Wachstum nimmt die Größe einer Menge in gleichen Zeitintervallen um den Quadratwert zu. Die Funktionsgleichung des quadratischen Wachstums lautet:

$$

f(x) = a (\cdot x - b)^2 + c

$$

Dabei sind $a$, $b$ und $c$ Konstanten, die die Form der Parabel bestimmen.

Im Kontext von Wachstumsprozessen bedeutet das, dass die Menge in jeder Zeiteinheit um den Quadratwert zunimmt. Ein Beispiel für quadratisches Wachstum ist das Wachstum einer Population, die sich in jedem Zeitintervall um den Quadratwert vermehrt.

$ a $ ist der Faktor, der die Steigung der Parabel bestimmt. $ b $ ist der Faktor, der die Verschiebung der Parabel entlang der x-Achse bestimmt. $ c $ .

### Grafische Darstellung

In der folgenden interaktiven Grafik kannst du die Konstanten $ a $, $ b $ und $ c $ verändern und sehen, wie sich die Parabel verändert. Zusätzlich werden drei Punkte auf der Parabel angezeigt, um das quadratische Wachstum zu veranschaulichen. $P_0$ zeigt den Wert zum Zeitpunkt 0, $P_1$ den Wert zum Zeitpunkt 1 und $P_2$ den Wert zum Zeitpunkt 2.

:::geogebra{perspective="G" coordsystem="-1,10,-10,100" enableRightClick=false}
a = Slider(-20, 20)
b = Slider(-20, 20)
c = Slider(-20, 20)
f(x) = a * (x - b)^2 + c
P_0 = (0, f(0))
SetLabelMode(P_0, 1)
P_1 = (1, f(1))
SetLabelMode(P_1, 1)
P_2 = (2, f(2))
SetLabelMode(P_2, 1)
:::

::::alert{success}

**Prüfe dein Verständnis**

Eine Population von Kaninchen vermehrt sich in einem geschützten Gebiet. Zu Beginn gibt es 10 Kaninchen. Die Anzahl der Kaninchen nimmt in jedem Monat quadratisch zu, da jedes Kaninchenpaar im Durchschnitt zwei neue Kaninchen zur Welt bringt, die wiederum nach einem Monat geschlechtsreif sind und sich ebenfalls vermehren. Stelle die Parameter $a$, $b$ und $c$ so ein, dass der Graph zur folgenden Situation passt: Zu Beginn gibt es 10 Kaninchen, nach einem Monat 40 Kaninchen und nach zwei Monaten 90 Kaninchen.

:::collapsible{title="Lösung" id="392591q"}

Der Graph der quadratischen Funktion sollte durch die Punkte $P_0 = (0, 10)$, $P_1 = (1, 30)$ und $P_2 = (2, 90)$ verlaufen. Das bedeutet, dass $a = 20$, $b = 0$ und $c = 10$ sein müssen.

:::

::::

## Exponentielles Wachstum

Beim exponentiellen Wachstum nimmt die Größe einer Menge in gleichen Zeitintervallen um denselben Faktor zu. Die Funktionsgleichung des exponentiellen Wachstums lautet:

$$

f(x) = a \cdot q^x

$$

Im Kontext von Wachstumsprozessen bedeutet das, dass die Menge in jeder Zeiteinheit um denselben Faktor zunimmt. Ein Beispiel für exponentielles Wachstum ist das Wachstum einer Population, die sich in jedem Zeitintervall um denselben Faktor vermehrt.

$ a $ ist der Anfangswert, also die Menge, mit der der Wachstumsprozess beginnt. $ q $ ist der Wachstumsfaktor, also der Faktor, um den die Menge in jeder Zeiteinheit zunimmt.

### Grafische Darstellung

In der folgenden interaktiven Grafik kannst du die Konstanten $ a $ und $ q $ verändern und sehen, wie sich die Exponentialfunktion verändert. Zusätzlich werden drei Punkte auf der Exponentialfunktion angezeigt, um das exponentielle Wachstum zu veranschaulichen. $P_0$ zeigt den Wert zum Zeitpunkt 0, $P_1$ den Wert zum Zeitpunkt 1 und $P_2$ den Wert zum Zeitpunkt 2.

:::geogebra{perspective="G" coordsystem="-1,10,-10,1000" enableRightClick=false}
a = Slider(0, 200)
q = Slider(0, 10)
f(x) = a * q^x
P_0 = (0, f(0))
SetLabelMode(P_0, 1)
P_1 = (1, f(1))
SetLabelMode(P_1, 1)
P_2 = (2, f(2))
SetLabelMode(P_2, 1)
:::

::::alert{success}

**Prüfe dein Verständnis**

Stelle die Parameter $a$ und $q$ so ein, dass der Graph zur folgenden Situation passt: Eine Population von Bakterien vermehrt sich jede Stunde um das Doppelte. Der Anfangswert beträgt 100 Bakterien.

:::collapsible{title="Lösung" id="392591"}

Der Graph der Exponentialfunktion sollte durch die Punkte $P_0 = (0, 100)$, $P_1 = (1, 200)$ und $P_2 = (2, 400)$ verlaufen. Das bedeutet, dass $a = 100$ und $q = 2$ sein müssen.

:::

::::