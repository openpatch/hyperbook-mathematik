---
name: ✅ Prüfe dich
index: 10
lang: de
---

# ✅ Prüfe dich

## 🐝 Bienenvölker in Deutschland

:::alert{info}

Die Zahlen dieser Aufgabe wurden dieser Seite entnommen und für die Aufgabe vereinfacht: https://bienennutzgarten.de/honigbienen/ 

:::

In Deutschland ist der Bestand der Bienenvölker in den Jahren 1991 bis 2013 gesunken. Die Anzahl der Bienenvölker wird durch die Funktion

$$
b(t) = 1.200.000 \cdot 0,975^t
$$

beschrieben.

Dabei gibt $ b(t) $ die Anzahl der Bienenvölker an, und $ t $ die Zeit in Jahren. $ t = 0 $ entspricht dem Jahr 1991.  

---

### **Aufgaben:**  

**a)** Bestimme den Anfangswert und den Wachstumsfaktor von $ b(t) $ und interpretiere diese Werte im Sachzusammenhang. (4P)  

:::collapsible{title="Musterlösung" id="944217"}

- Der Anfangswert ist $ b(0) = 1.200.000$, was bedeutet, dass es im Jahr 1991 etwa 1,2 Millionen Bienenvölker gibt.

- Der Wachstumsfaktor ist 0,975, was darauf hinweist, dass die Anzahl der Bienenvölker jedes Jahr um 2,5 % abnimmt.

:::

**b)** Berechne die Anzahl der Bienenvölker gemäß der Funktion $ b $ im Jahr 2013 und ermittle, um wie viel Prozent die Population im Vergleich zu heute sinken würde. (5P)  

:::collapsible{title="Musterlösung" id="9442172"}

Um die Anzahl der Bienenvölker im Jahr 2013 zu berechnen, setzen wir $ t = 5 $ in die Funktion $ b(t) $ ein:

$$

b(5) = 1.200.000 \cdot 0,975^5 \approx 1.057.315

$$

Um den prozentualen Rückgang zu berechnen, verwenden wir die Formel:

$$

\text{Prozentualer Rückgang} = \frac{b(0) - b(5)}{b(0)} \cdot 100

= \frac{1.200.000 - 1.059.120}{1.200.000} \cdot 100 \approx 11,75 \%

$$

Die Anzahl der Bienenvölker würde also um etwa 11,75 % sinken.

:::


**c)** Berechne, nach wie vielen Jahren sich die Anzahl der Bienenvölker gemäß Funktion $ b $ halbiert. (5P)  

:::collapsible{title="Musterlösung" id="9442173"}

Um zu bestimmen, nach wie vielen Jahren sich die Anzahl der Bienenvölker halbiert, setzen wir $ b(t) = \frac{1.200.000}{2} = 600.000 $ und lösen die Gleichung:

$$

\begin{aligned}

b(t) &= 1.200.000 \cdot 0,975^t\\

600.000 &= 1.200.000 \cdot 0,975^t \ | : 1.200.000\\

0,5 &= 0,975^t \ | \log_{0,975}(\dots)\\

t &= \log_{0,975}(0,5) \approx 27,38

\end{aligned}

$$

Das bedeutet, dass sich die Anzahl der Bienenvölker nach etwa 27 Jahren halbiert.

:::

**d)** Durch gezielte Schutzmaßnahmen wie das Anlegen von Blühstreifen und den Verzicht auf bestimmte Pestizide kann der Rückgang der Bienenvölker verlangsamt werden. Angenommen, durch diese Maßnahmen reduziert sich der jährliche Rückgang auf 1,5 %. Berechne, wie viel Prozent der Population nach fünf Jahren mit Schutzmaßnahmen noch vorhanden ist. (3P)  

:::collapsible{title="Musterlösung" id="9442174"}

Um den prozentualen Rückgang mit einem jährlichen Rückgang von 1,5 % zu berechnen, verwenden wir die Funktion:

$$

b(t) = 1.200.000 \cdot 0,985^t

$$

Setzen wir $ t = 5 $ ein:

$$

b(5) = 1.200.000 \cdot 0,985^5 \approx 1.112.660

$$

Der prozentuale Rückgang beträgt:

$$

\text{Prozentualer Rückgang} = \frac{b(0) - b(5)}{b(0)} \cdot 100

= \frac{1.200.000 - 1.112.660}{1.200.000} \cdot 100 \approx 7,28 \%

$$

Das bedeutet, dass nach fünf Jahren mit Schutzmaßnahmen noch etwa 7,28 % weniger Bienenvölker vorhanden sind. Also sind noch etwa 92,72 % der Population vorhanden.

:::

**e)** Durch verschiedene Maßnahmen konnte die Anzahl der Bienenvölker in Deutschland wieder erhöht werden. Im Jahre 2019 gab es ca. 1.000.000 Bienenvölker.

**e1)** Begründe, warum die Funktion $ b(t) $ nicht mehr für die Anzahl der Bienenvölker in Deutschland geeignet ist.

:::collapsible{title="Musterlösung" id="9442175"}

Die Funktion $ b(t) $ beschreibt einen kontinuierlichen Rückgang der Bienenvölker. Da die Anzahl der Bienenvölker jedoch wieder gestiegen ist, ist die Funktion nicht mehr geeignet, um den aktuellen Zustand zu beschreiben.

:::

**e2)** Erstelle eine neue Exponentialfunktion, die das Wachstum zwischen den Jahren 2013 und 2019 beschreibt. Berechne den Wachstumsfaktor und stelle die Funktion auf.

:::collapsible{title="Musterlösung" id="9442176"}

Der Anfangswert ist $ b(22) \approx 687516 $, also der Wert im Jahr 2013.

Den Wachstumsfaktor $ q $ können wir mit der Formel

$$

\begin{aligned}

b(t) &= b(0) \cdot q^t\\

1.000.000 &= 687516 \cdot q^6 \ | : 687516\\

q^6 &= \frac{1.000.000}{687516} \approx 1,454\\

q &= \sqrt[6]{1,454} \approx 1,0644

\end{aligned}

$$

Die neue Funktion lautet also:

$$

b(t) = 687516 \cdot 1,0644^t

$$

:::

**e3)** Berechne, wie viele Jahre es dauert, bis die Anzahl der Bienenvölker wieder den Wert von 1991 (1.200.000) erreicht.

:::collapsible{title="Musterlösung" id="9442177"}

Um zu bestimmen, nach wie vielen Jahren sich die Anzahl der Bienenvölker wieder auf 1.200.000 erhöht, setzen wir $ b(t) = 1.200.000 $ und lösen die Gleichung:

$$

\begin{aligned}

b(t) &= 687516 \cdot 1,0644^t\\

1.200.000 &= 687516 \cdot 1,0644^t \ | : 687516\\

1,743 &= 1,0644^t \ | \log_{1,0644}(\dots)\\

t &= \log_{1,0644}(1,743) \approx 8,9

\end{aligned}

$$


Das bedeutet, dass es etwa 9 Jahre dauert, bis die Anzahl der Bienenvölker wieder den Wert von 1991 erreicht. Da wir den Anfangswert im Jahr 2013 gesetzt haben, würde dies im Jahr 2022 geschehen.

:::

