---
name: ✅ Prüfe dich
index: 5
lang: de
---

# ✅ Prüfe dich

## Aufgabe 1: 💉 Wirkstoffmenge im Blut

Zu Beginn befindet keine Wirkstoffmenge im Blut. Ein Medikament wird kontinuierlich über eine Infusion zugeführt. Die momentane Zufuhrgeschwindigkeit ist gegeben durch:

$f(t) = 5 \cdot e^{-0,3 \cdot t}$ (t in Stunden, $f(t)$ in mg/h)

a) Nimmt die Wirkstoffmenge im Körper zu oder ab? Begründen Sie.

:::collapsible{title="Musterlösung" id="926301"}

Die Funktion $f(t)$ beschreibt die momentane Zufuhrgeschwindigkeit des Medikaments. Es gilt $f(t) > 0$ für alle $t \geq 0$, da die Exponentialfunktion immer positiv ist. Das bedeutet, dass die Wirkstoffmenge im Körper zunimmt.

:::

b) Wie viel Milligramm des Wirkstoffs befinden sich nach 4 Stunden im Blut? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Es befinden sich {z{11,65}} mg Wirkstoff im Blut.

:::

:::collapsible{title="Musterlösung" id="960313"}

Die Funktion $f(t)$ beschreibt die momentane Zufuhrgeschwindigkeit des Medikaments. Um die gesamte Wirkstoffmenge im Blut nach 4 Stunden zu berechnen, müssen wir das Integral der Funktion $f(t)$ von 0 bis 4 berechnen:

$$

\begin{align*}

F(t) &= \int_0^t f(t) \, dt \\

F(t) &= \int_0^4 5 \cdot e^{-0,3 \cdot t} \, dt \\

F(t) &= \left[-\frac{5}{0,3} \cdot e^{-0,3 \cdot t}\right]_0^4 \\

F(t) &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot 4} + \frac{5}{0,3} \cdot e^{-0,3 \cdot 0} \\

F(t) &= -\frac{5}{0,3} \cdot e^{-1,2} + \frac{5}{0,3} \\

F(t) &\approx -\frac{5}{0,3} \cdot 0,3012 + \frac{5}{0,3} \\

F(t) &\approx -\frac{5 \cdot 0,3012}{0,3} + \frac{5}{0,3} \\

F(t) &\approx -5,02 + 16,67 \\

F(t) &\approx 11,65 \text{ mg}

\end{align*}

$$

:::

c) Nach welcher Zeit sind 10 mg Wirkstoff im Blut enthalten? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Nach {z{3,05}} Stunden sind 10 mg Wirkstoff im Blut enthalten.

:::

:::collapsible{title="Musterlösung" id="926302"}

Um die Zeit zu berechnen, nach der 10 mg Wirkstoff im Blut sind, setzen wir $F(t) = 10$ und lösen die Gleichung:

$$

\begin{align*}

F(t) &= 10 \\

10 &= \int_0^t f(t) \, dt \\
10 &= \int_0^t 5 \cdot e^{-0,3 \cdot t} \, dt \\
10 &= \left[-\frac{5}{0,3} \cdot e^{-0,3 \cdot t}\right]_0^t \\
10 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} + \frac{5}{0,3} \\
10 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} + \frac{5}{0,3} \\
10 - \frac{5}{0,3} &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} \\
10 - 16,67 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} \\
-6,67 &= -\frac{5}{0,3} \cdot e^{-0,3 \cdot t} \\
0,4002 &= e^{-0,3 \cdot t} \\
\ln(0,4002) &= -0,3 \cdot t \\
\frac{\ln(0,4002)}{-0,3} &= t \\
t &\approx \frac{-0,9163}{-0,3} \\
t &\approx 3,05 \text{ Stunden}
\end{align*}

$$

:::

d) Welche maximale Wirkstoffmenge wird bei dieser Infusion erreicht? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Die maximale Wirkstoffmenge beträgt {z{16,67}} mg.

:::

:::collapsible{title="Musterlösung" id="926303"}

Die maximale Wirkstoffmenge wird erreicht, wenn die Zufuhrgeschwindigkeit $f(t)$ gegen 0 geht. Das bedeutet, dass die Exponentialfunktion $e^{-0,3 \cdot t}$ gegen 0 geht. Daher ist die maximale Wirkstoffmenge:

$$

\begin{align*}

\lim_{t \to \infty} F(t) &= \lim_{t \to \infty} \left[-\frac{5}{0,3} \cdot e^{-0,3 \cdot t}\right]_0^t \\

&= \lim_{t \to \infty} \left[-\frac{5}{0,3} \cdot 0\right] + \frac{5}{0,3} \\

&= 0 + \frac{5}{0,3} \\

&= \frac{5}{0,3} \\

&\approx 16,67 \text{ mg}

\end{align*}

$$

:::

## Aufgabe 2: 🔍 Vergleichen von Exponentialfunktionen

Gegeben sind die Exponentialfunktionen:

$$

f(x) = 2 \cdot e^{0,5 \cdot x}

$$

$$

g(x) = 3 \cdot e^{0,3 \cdot x}

$$

a) Berechne die Ableitungen $f'(x)$ und $g'(x)$.

:::collapsible{title="Musterlösung" id="430997"}

$$

\begin{align*}

f'(x) &= 2 \cdot 0,5 \cdot e^{0,5 \cdot x} = e^{0,5 \cdot x} \\

g'(x) &= 3 \cdot 0,3 \cdot e^{0,3 \cdot x} = 0,9 \cdot e^{0,3 \cdot x}

\end{align*}

$$


:::

b) Vergleiche die Graphen der beiden Ableitungen $f'(x)$ und $g'(x)$. Berücksichtige dabei den Definitions- und Wertebereich, das Monotonieverhalten, das Verhalten im Unendlichen und die Achsenschnittpunkte.

::::collapsible{title="Skizze" id="677296"}

:::jsxgraph{height="600" width="600" boundingbox="[-6,15,6,-10]"}

```js
function f(x) {
    return 2 * Math.exp(0.5 * x);
}
board.create('functiongraph', [f], {
    name: 'f',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#ff0000',
    strokeWidth: 2
});

function fPrime(x) {
    return 2 * 0.5 * Math.exp(0.5 * x);
}
board.create('functiongraph', [fPrime], {
    name: "f'",
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#ffaaaa',
    strokeWidth: 2
});

function g(x) {
    return 3 * Math.exp(0.3 * x);
}
board.create('functiongraph', [g], {
    name: 'g',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#00aaaa',
    strokeWidth: 2
});

function gPrime(x) {
    return 3 * 0.3 * Math.exp(0.3 * x);
}
board.create('functiongraph', [gPrime], {
    name: "g'",
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#00ff00',
    strokeWidth: 2
});
```

:::

::::

:::collapsible{title="Musterlösung" id="320205"}

Um die Graphen der beiden Ableitungen

$$
f'(x) = e^{0{,}5x} \quad \text{und} \quad g'(x) = 0{,}9e^{0{,}3x}
$$

zu vergleichen, analysieren wir folgende Aspekte:

---

### **1. Definitionsbereich**

Beide Funktionen sind Exponentialfunktionen mit positiven Basen:

* $e^{0{,}5x}$ und $e^{0{,}3x}$ sind für **alle reellen Zahlen definiert**.
* **Definitionsbereich** beider Funktionen: $\mathbb{R}$

---

### **2. Wertebereich**

Da der Exponentialausdruck $e^x > 0$ für alle $x \in \mathbb{R}$, gilt:

* $f'(x) = e^{0{,}5x} > 0$
* $g'(x) = 0{,}9e^{0{,}3x} > 0$

**Wertebereich:**

* $f'(x) \in (0, \infty)$
* $g'(x) \in (0, \infty)$

---

### **3. Monotonieverhalten**

Exponentialfunktionen mit positivem Exponenten sind **streng monoton steigend**:

* $f'(x) = e^{0{,}5x}$ steigt schneller als $g'(x) = 0{,}9e^{0{,}3x}$, da $0{,}5 > 0{,}3$.

---

### **4. Verhalten im Unendlichen**

* Für $x \to \infty$:

  * $f'(x) \to \infty$ deutlich schneller als $g'(x)$
* Für $x \to -\infty$:

  * Beide Funktionen gehen gegen 0, wobei $f'(x) \to 0$ **schneller** als $g'(x)$

Das liegt am Exponenten der e-Funktion:
* $e^{0{,}5x}$ geht schneller gegen 0 für $ x \to -\infty$ als $e^{0{,}3x}$, da $0{,}5 > 0{,}3$.

---

### **5. Achsenschnittpunkte**

**y-Achsen-Schnittpunkt (bei $x = 0$)**:

* $f'(0) = e^{0} = 1$
* $g'(0) = 0{,}9e^{0} = 0{,}9$

Also schneidet $f'$ die y-Achse oberhalb von $g'$.

---

### **Fazit (Vergleich in Stichpunkten)**

| Aspekt                            | $f'(x) = e^{0{,}5x}$   | $g'(x) = 0{,}9e^{0{,}3x}$ |
| --------------------------------- | ---------------------- | ------------------------- |
| **Definitionsbereich**            | $\mathbb{R}$           | $\mathbb{R}$              |
| **Wertebereich**                  | $(0, \infty)$          | $(0, \infty)$             |
| **Monotonie**                     | streng steigend        | streng steigend           |
| **Wachstum**                      | schneller wachsend     | langsamer wachsend        |
| **Verhalten bei $x \to -\infty$** | $\to 0$ schneller      | $\to 0$ langsamer         |
| **Verhalten bei $x \to \infty$**  | $\to \infty$ schneller | $\to \infty$ langsamer    |
| **y-Achsen-Schnittpunkt**         | 1                      | 0,9                       |


:::

c) Bestimme von f(x) und g(x) die Tangenten an der Stelle $x = 0$.

::::collapsible{title="Musterlösung" id="677297"}

Um die Tangente an der Stelle $x = 0$ zu bestimmen, berechnen wir den Funktionswert und die Ableitung an dieser Stelle.

$$

\begin{align*}
f'(0) &= 2 \cdot 0,5 \cdot e^{0} = 1
\end{align*}

$$

Jetzt setzen wir diesen Wert in die Tangentengleichung ein:

$$

\begin{align*}

T(x) &= f(0) + f'(0) \cdot (x - 0) \\
T(x) &= 2 + 1 \cdot x \\
T(x) &= x + 2
\end{align*}

$$

Das Gleiche machen wir für $g(x)$:

$$

\begin{align*}

g'(0) &= 3 \cdot 0,3 \cdot e^{0} = 0,9

\end{align*}

$$

Jetzt setzen wir diesen Wert in die Tangentengleichung ein:

$$

\begin{align*}

T(x) &= g(0) + g'(0) \cdot (x - 0) \\

T(x) &= 3 + 0,9 \cdot x \\

T(x) &= 0,9 \cdot x + 3

\end{align*}

$$