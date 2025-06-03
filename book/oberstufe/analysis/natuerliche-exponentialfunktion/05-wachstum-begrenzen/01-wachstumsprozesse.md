---
name: 💡 Wachstumsprozesse
lang: de
index: 1
---

# 💡 Wachstumsprozesse

Bis jetzt haben wir mit der natürlichen Exponentialfunktion Wachstumsprozesse beschrieben, die sich durch eine konstante Wachstumsrate auszeichnen.

Zum Beispiel haben wir das Wachstum mit so einer Funktion beschrieben:

$$

w(t) = 2 \cdot e^{0,3 \cdot t}

$$

Der Graph diese Funktione sieht so aus:

:::jsxgraph{height="400" width="400" boundingbox="[-1,26,12,-1]"}
```js
function w(x) {
    return 2 * Math.exp(0.3 * x);
}

board.create('functiongraph', [w], {
    name: 'w',
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

Anhand des Graphens können wir sehen, dass dieser unbegrenzt wächst. Auch wenn wir den Grenzwert für $x \to \infty$ betrachten, wird der Funktionswert immer größer. In der Realität gibt es jedoch häufiger Prozesse, die einen variablen Verlauf haben oder nur begrenzt wachsen.

## Wachstumsprozesse modellieren

Wenn man in der Mathematik die reale Welt beschreibt, spricht man von einem **Modell**. Ein Modell ist eine vereinfachte Darstellung der Realität, die es uns ermöglicht, bestimmte Aspekte zu analysieren und zu verstehen.

In diesem Fall wollen wir Wachstumsprozesse modellieren, die nicht unbegrenzt wachsen, sondern welche, die erst wachsen und dann wieder abnehmen oder sich stabilisieren.

Solche Prozesse können zum Beispiel mit Funktionen der folgenden Form beschreiben werden:

$$
f(x) = a x \cdot e^{b \cdot x}
$$

:::jsxgraph{height="400" width="600" boundingbox="[-6,26,24,-6]"}
```js

var a = board.create('slider',[[-2,-2],[8,-2],[-10,5,10]],{name:'a'});
var b = board.create('slider',[[-2,-4],[8,-4],[-2,-0.6,2]],{name:'b'});


function w(x) {
    return a.Value() * x * Math.exp(b.Value() * x);
}

board.create('functiongraph', [w], {
    name: 'w',
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

:::alert{info}
Verändere die Schieberegler für a und b. Du kannst so verschiedene Wachstumsprozesse simulieren und beobachten, wie sich die Funktion verhält. Überlege, welchen Einfluss die Parameter $a$ und $b$ auf den Verlauf der Funktion haben.
:::

## Beispiel für einen beschränkten Wachstumsprozess

Solch eine Modellierung könnte zum Beispiel das Wachstum einer Bakterienkultur beschreiben, die zunächst exponentiell wächst, aber irgendwann durch Nahrungsmangel oder andere Faktoren begrenzt wird. Eine mögliche Funktionsgleichung könnte so aussehen:

$$

f(x) = 5 x \cdot e^{-0.1 \cdot x}

$$

:::jsxgraph{height="400" width="600" boundingbox="[-6,26,50,-6]"}
```js


function f(x) {
    return 5 * x * Math.exp(-0.1 * x);
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

Hier sehen wir den Graphen der Wachstumsgeschwindigkeit der Bakterienkultur. Zunächst wächst die Kultur schnell, aber mit der Zeit verlangsamt sich das Wachstum und stabilisiert sich schließlich.

In diesen Sachkontexten werden immer wieder typische Fragen gestellt:

:::alert{info}
Zu den folgen Fragen sollten Dir schon Ideen einfallen, wie Du diese beantworten könntest. Wenn dir dies nicht einfällt, dann schaue im Aufklappkasten nach.
:::

- Wie groß ist die Wachstumsrate zu einem bestimmten Zeitpunkt?

:::collapsible{id="asdkjafi13487184" title="Mathematisches Vorgehen"}
Wir nehmen die Funktion der Wachstumsgeschwindigkeit $f(x)$ und setzen einen bestimmten Wert für $x$ ein. Das Ergebnis ist die Wachstumsrate zu diesem Zeitpunkt.
:::

- Wann ist die Wachstumsrate maximal oder minimal?

:::collapsible{id="asdkjafi134asdf87184" title="Mathematisches Vorgehen"}
Wir bestimmen die globalen Hoch- und Tiefpunkte der Funktion $f(x)$. Dazu gehen wir wie bekannt vor:
1. Wir bilden die Ableitung $f'(x)$.
2. Wir setzen die Ableitung gleich Null und lösen die Gleichung $f'(x) = 0$.
3. Wir überprüfen, ob es sich um ein Maximum oder Minimum handelt, indem wir die zweite Ableitung $f''(x)$ betrachten.
4. Wir setzen den gefundenen Wert in die Funktion $f(x)$ ein, um die Wachstumsrate zu diesem Zeitpunkt zu erhalten.
5. Wir betrachten die Randwerte des Definitionsbereichs, um zu sehen, ob es dort größere oder kleinere Wachstumsraten gibt.
:::

- Wann ändert sich die Wachstumsrate am schnellsten?

:::collapsible{id="adfasdkjafi134asdf87184" title="Mathematisches Vorgehen"}
Wir bestimmen die Wendestellen der Funktion $f(x)$. Dazu gehen wir wie folgt vor:
1. Wir bilden die zweite Ableitung $f''(x)$.
2. Wir setzen die zweite Ableitung gleich Null und lösen die Gleichung $f''(x) = 0$.
3. Wir überprüfen, ob es sich um eine Wendestelle handelt, indem wir die gefundene Stelle in die dritte Ableitung $f'''(x)$ einsetzen. Wenn $f'''(x) \neq 0$ ist, handelt es sich um eine Wendestelle.
:::

- Wie viele Bakterien gibt es zu einem bestimmten Zeitpunkt?

:::collapsible{id="adfasdkjasdfajafi134asdf87184" title="Mathematisches Vorgehen"}
Wir bestimmen die Bestandsfunktion $F(x)$, indem wir die Funktion $f(x)$ integrieren. Dann setzen wir den gewünschten Zeitpunkt in die Funktion ein, um die Anzahl der Bakterien zu diesem Zeitpunkt zu erhalten.

Meistens ist die Bestandfunktion $F(x)$ gegeben, wenn dies nicht der Fall ist, können wir so vorgehen:

1. Wir ermitteln den Anfangsbestand $A$.
2. Wir integrieren die Funktion $f(x)$, um die $F(x)$ zu erhalten.
3. Wir setzen den Anfangsbestand $A$ als Integrationskonstante ein, um die vollständige Funktion $F(x)$ zu erhalten.
4. Wir setzen den gewünschten Zeitpunkt in die Funktion $F(x)$ ein, um die Anzahl der Bakterien zu diesem Zeitpunkt zu erhalten.
:::

Auf den nächsten Seiten werden wir diese Fragen in Übungen genauer betrachten.
