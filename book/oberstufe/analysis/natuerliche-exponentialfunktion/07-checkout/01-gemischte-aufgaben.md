---
name: ✏️ Gemischte Aufgaben
index: 1
lang: de
---

# ✏️ Gemischte Aufgaben

## Aufgaben ohne Hilfsmittel

### Aufgabe 1: Exponentilafunktionen ableiten

Leite die folgenden Funktionen ab und fasse so weit wie möglich zusammen.

$$

\begin{align*}
f(x) &= e^{\frac{1}{2}x+3} \\
g(x) &= e^{2x} + \sqrt{2} \cdot 4^{x} \\
h(x) &= 5 \cdot (e^{x} + e^{-x}) \\
\end{align*}

$$

:::collapsible{title="Musterlösung" id="613045"}

$$

\begin{align*}

f'(x) &= \frac{1}{2} \cdot e^{\frac{1}{2}x+3} \\
g'(x) &= 2 \cdot e^{2x} + \sqrt{2} \cdot 4^{x} \cdot \ln(4) \\
h'(x) &= 5 \cdot (e^{x} - e^{-x}) \\
\end{align*}

$$


:::

### Aufgabe 2: Exponentialfunktionen integrieren

Berechne das Integral und fasse so weit wie möglich zusammen.

a) $ \int_{0}^{1} e^{x} + e^{-x} \, dx $

b) $ \int_{0}^{1} e^{2x} + 4^{x} \, dx $

c) $ \int_{-1}^{0} e^{2x+3} \, dx $

:::collapsible{title="Musterlösung" id="335337"}

a) $ \int_{0}^{1} e^{x} + e^{-x} \, dx = \left[e^{x} - e^{-x}\right]_{0}^{1} = e - \frac{1}{e} - (1 - 1) = e - \frac{1}{e}$

b) $ \int_{0}^{1} e^{2x} + 4^{x} \, dx = \left[\frac{1}{2} e^{2x} + \frac{4^{x}}{\ln(4)}\right]_{0}^{1} = \frac{1}{2} e^{2} + \frac{4}{\ln(4)} - \left(\frac{1}{2} + \frac{1}{\ln(4)}\right) = \frac{1}{2}(e^{2}-1) + \frac{3}{\ln(4)}$

c) $ \int_{-1}^{0} e^{2x+3} \, dx = \left[\frac{1}{2} e^{2x+3}\right]_{-1}^{0} = \frac{1}{2}(e^{3}-\frac{1}{e})$



:::

### Aufgabe 3: Graphen zuordnen

Ordne den Graphen den Funktionen zu.

:::multievent

1) {A{f|!g|h}}$(x) = e^{x} + e^{-x}$

2) {A{!f|g|h}}$(x) = e^{x + 1}$

3) {A{f|g|!h}}$(x) = e^{x} - x$


:::

:::jsxgraph{height="600" width="600" boundingbox="[-4,15,6,-10]"}
```js
function f(x) {
    return Math.exp(x + 1);
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

function g(x) {
    return Math.exp(x) + Math.exp(-x);
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

function h(x) {
    return Math.exp(x) - x;
}

board.create('functiongraph', [h], {
    name: 'h',
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

### Aufgabe 4: Flächeninhalt berechnen

Gegeben ist die Funktion $f(x) = 4 - e^{x}$.

:::jsxgraph{height="300" width="300" boundingbox="[-2,5,2,-1]"}
```js
function f(x) {
    return 4 - Math.exp(x);
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
```
:::

a) Beschreibe das Verhalten der Funktion im $\pm$ Unendlichen.

:::collapsible{title="Musterlösung" id="335338"}

Die Funktion $f(x) = 4 - e^{x}$ hat für $x \to -\infty$ den Grenzwert $f(x) \to 4$, da  $ \lim_{x \to -\infty} e^{x} = 0$ gilt. 

Für $x \to +\infty$ hat die Funktion den Grenzwert $f(x) \to -\infty$, da $ \lim_{x \to +\infty} e^{x} = +\infty$ gilt.

:::


b) Bestimmte die Schnittpunkte mit den Koordinatenachsen.

:::collapsible{title="Musterlösung" id="335339"}

Die Funktion $f(x) = 4 - e^{x}$ hat den Schnittpunkt mit der y-Achse bei $f(0) = 4 - e^{0} = 3$.

Der Schnittpunkt mit der x-Achse ist $f(x) = 0$:

$$

\begin{align*}
4 - e^{x} &= 0 &&| +e^{x} \\
4 &= e^{x} &&| \ln(...) \\
x &= \ln(4)
\end{align*}
$$

Der Schnittpunkt mit der x-Achse ist also $P(\ln(4), 0)$.

:::

c) Berechne den Flächeninhalt, den der Graph der Funktion $f$ mit den Koordinatenachsen einschließt.

:::collapsible{title="Musterlösung" id="335340"}

Die Fläche ist von der y-Achse bis zur Nullstelle begrenzt. Diese Nullstelle ist $x = \ln(4)$.

Daher ist der Flächeninhalt $A$ gegeben durch:

$$

A = \int_{0}^{\ln(4)} (4 - e^{x}) \, dx = \left[4x - e^{x}\right]_{0}^{\ln(4)} = 4 \cdot \ln(4) - e^{\ln(4)} + 1 = 4 \cdot \ln(4) - 3

$$

Der Flächeninhalt ist also $A = 4 \cdot \ln(4) - 3$.

:::

## Aufgaben mit Hilfsmitteln

### Aufgabe 1: Kanninchenpopulation

Eine Kanninchenpopulation wächst exponentiell und hat sich in 10 Jahren von 100 auf 600 Kanninchen vermehrt.

a) Bestimme die Funktion $f(t)$, die die Anzahl der Kanninchen in Abhängigkeit von der Zeit $t$ beschreibt.

:::collapsible{title="Musterlösung" id="555275"}

Die Funktion $f(t)$ beschreibt die Anzahl der Kanninchen in Abhängigkeit von der Zeit $t$ in Jahren.

Die Anfangspopulation ist $f(0) = 100$.
Die Wachstumsrate $b$ kann aus der Bedingung $f(10) = 600$ bestimmt werden.

$$

\begin{align*}

f(10) &= 100 \cdot q^{10} = 600 &&| : 100 \\

q^{10} &= 6 &&| \sqrt[10]{...} \\

q &= \sqrt[10]{6}


\end{align*}

$$

Die Wachstumsrate ist also $b = \sqrt[10]{6}$.

Die Funktion $f(t)$ ist also gegeben durch:

$$

f(t) = 100 \cdot \sqrt[10]{6}^{t} = 100 \cdot 6^{\frac{t}{10}} 

$$

:::

b) Bestimme die Verdopplungszeit der Kanninchenpopulation.

:::collapsible{title="Musterlösung" id="555276"}

Für die Verdopplungszeit gilt die Formel:

$$

\begin{align*}

t_{v} = \frac{\ln(2)}{b}

\end{align*}

$$

Die Wachstumsrate $b$ ist gegeben durch $b = \sqrt[10]{6}$.

Daher ist die Verdopplungszeit:

$$

t_{v} = \frac{\ln(2)}{\sqrt[10]{6}} \approx 3,5

$$

Die Kanninchenpopulation verdoppelt sich also alle 3,5 Jahre.

:::

### Aufgabe 2: Akku laden

Ein leerer Akku wird geladen. Die momentane Ladegeschwindigkeit ist gegeben durch:

$L(t) = 8 \cdot e^{-0,2 \cdot t}$ ($t$ in Minuten, $L(t)$ in % Ladung pro Minute)

a) Wird der Akku schneller oder langsamer geladen mit der Zeit?

:::collapsible{title="Musterlösung" id="926311"}

Die Funktion $L(t)$ beschreibt die momentane Ladegeschwindigkeit des Akkus. Es gilt $L(t) > 0$ für alle $t \geq 0$, da die Exponentialfunktion immer positiv ist. Das bedeutet, dass der Akku langsamer geladen wird mit der Zeit.

:::

b) Wie hoch ist der Ladezustand nach 10 Minuten? Runde auf zwei Dezimalstellen.

:::multievent

Antwort: Nach 10 Minuten beträgt der Ladezustand {z{34,59}} %.

:::

:::collapsible{title="Musterlösung" id="926312"}

Um den Ladezustand nach 10 Minuten zu berechnen, müssen wir das Integral der Funktion $L(t)$ von 0 bis 10 berechnen:

$$

\begin{align*}

L(10) &= \int_0^{10} L(t) \, dt \\

L(10) &= \int_0^{10} 8 \cdot e^{-0,2 \cdot t} \, dt \\
L(10) &= \left[-\frac{8}{0,2} \cdot e^{-0,2 \cdot t}\right]_0^{10} \\
L(10) &= -40 \cdot e^{-2} + 40 \\
L(10) &= -40 \cdot 0,1353 + 40 \\
L(10) &\approx -5,41 + 40 \\
L(10) &\approx 34,59 \text{ \%}
\end{align*}

$$

:::

c) Angenommen, der Ladezustand kann mit der Funktion $F(x)=-40 \cdot e^{-0.2 \cdot t} + 80$ beschrieben werden. Begründe, warum der Akku in dieser mathematischen Modellerung langfristig nicht 100 % erreichen kann.

:::collapsible{title="Musterlösung" id="926314"}

Langfristig nähert sich die Funktion $F(t) = -40 \cdot e^{-0.2 \cdot t} + 80$ dem Wert 80, da die Exponentialfunktion gegen 0 geht. Das bedeutet, dass der Akku langfristig nicht 100 % erreichen kann, sondern nur 80 %.

:::

### Aufgabe 3: Temperaturverlauf eines Kühlvorgangs

Nach der Schockkühlung eines warmen Produkts und der Einlagerung in einen Kühlraum wurde folgende Funktion zur Temperaturentwicklung aufgestellt. Auf der y-Achse ist die Temperatur in °C, auf der x-Achse sind die Stunden seit der Einlagerung abgetragen.

$$

f(x) = -8e^{-0,4x} + 24e^{-1.2x} + 4

$$

:::jsxgraph{height="400" width="400" boundingbox="[-1,26,20,-1]"}
```js
function f(x) {
    return -8*Math.exp(-0.4 * x)+24*Math.exp(-1.2 * x) + 4;
}

board.create('functiongraph', [f], {
    name: 'f',
    withLabel: true,
    label: {
        autoPosition: true,
        fontSize: 18,
    },
    strokeColor: '#0077cc',
    strokeWidth: 2
});
```
:::


a) Untersuche das Verhalten der Funktion im Unendlichen.

:::collapsible{title="Musterlösung" id="926315"}

Die Funktion $f(x) = -8e^{-0,4x} + 24e^{-1.2x} + 4$ hat für $x \to -\infty$ den Grenzwert $f(x) \to \infty$, da die Exponentialfunktionen gegen unendlich gehen.

Für $x \to +\infty$ hat die Funktion den Grenzwert $f(x) \to 4$, da die Exponentialfunktionen gegen 0 gehen.

Die Funktion hat also für $x \to -\infty$ und $x \to +\infty$ den Grenzwert 4.

:::

b) Beschreibe den Verlauf des Graphens im Intervall $[0,18]$

:::collapsible{title="Musterlösung" id="926316"}

Der Graph der Funktion $f(x)$ im Intervall $[0,18]$ zeigt starken Abfall, dann einen leichten Anstieg und schließlich eine Annäherung an den Wert 4.

Im Intervall $[0,18]$ beginnt die Funktion bei $f(0) = 20$ und erreicht ihren Tiefpunkt bei $x \approx 2.1$. Danach steigt die Funktion wieder und annähert sich asymptotisch dem Wert 4.

:::

c) Zeige, dass die Funktion $f$ an der Stelle $x=5 \cdot \frac{ln(3)}{2}$ ein Minimum besitzt.

:::collapsible{title="Musterlösung" id="399448"}

Dafür bilden wir die Ableitung $f'(x)$ und setzen die Stelle $x=5 \cdot \frac{ln(3)}{2}$ ein:

$$

\begin{align*}

f'(x) &= -8 \cdot (-0,4) \cdot e^{-0,4x} + 24 \cdot (-1,2) \cdot e^{-1,2x} \\
&= 3,2 \cdot e^{-0,4x} - 28,8 \cdot e^{-1,2x} \\
f'(5 \cdot \frac{ln(3)}{2}) &= 3,2 \cdot e^{-0,4 \cdot 5 \cdot \frac{ln(3)}{2}} - 28,8 \cdot e^{-1,2 \cdot 5 \cdot \frac{ln(3)}{2}} \\
&= 0
\end{align*}
$$

Jetzt wissen wir, dass es sich um eine Extremstelle handelt.

Nun überprüfen wir, ob es sich um ein Minimum handelt. Dazu bilden wir die zweite Ableitung $f''(x)$:

$$

\begin{align*}

f''(x) &= 3,2 \cdot (-0,4) \cdot e^{-0,4x} + 28,8 \cdot (-1,2) \cdot e^{-1,2x} \\
&= 1,28 \cdot e^{-0,4x} + 35,04 \cdot e^{-1,2x} \\

f''(5 \cdot \frac{ln(3)}{2}) &= 1,28 \cdot e^{-0,4 \cdot 5 \cdot \frac{ln(3)}{2}} + 35,04 \cdot e^{-1,2 \cdot 5 \cdot \frac{ln(3)}{2}} \\

&\approx 1,72 > 0 \\

\end{align*}

$$

Damit ist $f''(5 \cdot \frac{ln(3)}{2}) > 0$ und es handelt sich um ein Minimum.

:::

---

Diese Funktion könnte für die Prognose der Temperaturentwicklung nach dem Einlagern eines warmen Produkts in einen gekühlten Lagerraum genutzt werden:

Ein Produkt wird bei Raumtemperatur (ca. 20 °C) Schockgekühlt, das heißt stark heruntergekühlt. Anschließend wurde das Produkt in den Kühlschrank gelegt.

---

d) Interpretiere die Bedeutung des Extremwertes der Funktion im Sachzusammenhang.

:::collapsible{title="Musterlösung" id="926317"}

Der Extremwert der Funktion $f(x)$ beschreibt den Zeitpunkt, an dem die Temperatur des Produkts am niedrigsten ist. Dies ist die Temperatur nach der Schockkühlung. Im Kühlschrank stabilisiert sich die Temperatur und geht langfristig gegen 4 °C.

:::

e) Erkläre die Bedeutung der 4 in der Funktionsgleichung im Sachzusammenhang.

:::collapsible{title="Musterlösung" id="926318"}

Die 4 in der Funktionsgleichung $f(x) = -8e^{-0,4x} + 24e^{-1,2x} + 4$ beschreibt die Umgebungstemperatur des Kühlraums. Langfristig wird die Temperatur des Produkts asymptotisch gegen diesen Wert konvergieren.

:::
