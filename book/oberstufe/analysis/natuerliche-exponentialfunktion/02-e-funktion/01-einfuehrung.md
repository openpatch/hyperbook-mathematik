---
name: 💡 Einführung der natürlichen Exponentialfunktion
index: 1
lang: de
---

# 💡 Einführung der natürlichen Exponentialfunktion

Bis jetzt haben wir uns mit dem Exponentialwachstum beschäftigt. Dabei haben wir gesehen, dass die Funktion $f(x) = a \cdot b^x$ eine wichtige Rolle spielt. Diese Funktion beschreibt das Wachstum von Populationen, Geldanlagen und vielen anderen Phänomenen in der Natur.

Zum Beispiel kann das Wachstum von Seerosen auf einem Teich durch die Funktion $f(x) = 2 \cdot 2^x$ beschrieben werden. Hierbei ist $x$ die Zeit in Tagen und $f(x)$ die Anzahl der Seerosen.

Wir können bereits berechnen, wie viele Seerosen nach einer bestimmten Zeit vorhanden sind. Zum Beispiel:

- Nach 1 Tag: $f(1) = 2 \cdot 2^1 = 4$ Seerosen
- Nach 2 Tagen: $f(2) = 2 \cdot 2^2 = 8$ Seerosen
- usw.

Häufig möchte man auch die Wachstumsgeschwindigkeit zu einem bestimmten Zeitpunkt wissen. Diese wird durch die Ableitung der Funktion $f(x)$ gegeben. Die Ableitung beschreibt, wie schnell sich die Funktion an einem bestimmten Punkt ändert.

Die Ableitung von exponentiellen Funktionen kennen wir noch nicht, jedoch kennen wir die h-Methode. Diese Methode ermöglicht es uns, die Ableitung einer Funktion an einem bestimmten Punkt zu bestimmen, indem wir den Funktionswert an einem Punkt $x$ und einen sehr kleinen Schritt $h$ betrachten.

Die Ableitung $f'(x)$ an der Stelle $x$ ist dann gegeben durch:

$$

f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}

$$

Diesen Prozess führen wir jetzt für eine Exponentialfunktion durch.

## Ableitung der Exponentialfunktion herleiten

Als Beispiel betrachten wir die Funktion $f(x) = \cdot 2^x$.

### Schritt 1: h-Methode

Jetzt setzen wir die Funktion in die h-Methode ein und formen diese um:

$$

\begin{aligned}

f'(x) &= \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}\\

&= \lim_{h \to 0} \frac{2^{x + h} - 2^x}{h}\\

&= \lim_{h \to 0} \frac{2^x \cdot 2^h - 2^x}{h} \text{(Potenzgesetze anwenden)}\\

&= \lim_{h \to 0} \frac{2^x (2^h - 1)}{h} \text{(ausklammern)}\\

&= 2^x \cdot \lim_{h \to 0} \frac{2^h - 1}{h} (2^x \text{ rausziehen, da nicht von h abhängig})\\

&= f(x) \cdot \lim_{h \to 0} \frac{2^h - 1}{h} (2^x \text{wieder als f(x) schreiben})\\

\end{aligned}

$$

Das heißt, dass die ursprüngliche Funktion $f(x)$ wieder auftaucht.

Die Funktionsgleichung lautet also:

$$

f'(x) = f(x) \cdot \lim_{h \to 0} \frac{2^h - 1}{h}

$$

Die Gleichung gilt für alle x, also natürlich auch für $x = 0$. Dies nutzen wir jetzt aus, indem wir die Stelle $x = 0$ betrachten:

$$

\begin{aligned}

f'(0) &= f(0) \cdot \lim_{h \to 0} \frac{2^h - 1}{h}\\

\end{aligned}

$$

Jetzt erinnern wir uns an unsere Beispielfunktion $f(x) = 2^x$ und setzen $x = 0$ ein:

$$

\begin{aligned}

f(0) &= 2^0 = 1\\

\end{aligned}

$$

Jetzt setzen wir $f(0)$ in die Gleichung ein:

$$

\begin{aligned}

f'(0) &= 1 \cdot \lim_{h \to 0} \frac{2^h - 1}{h}\\
&= \lim_{h \to 0} \frac{2^h - 1}{h}\\

\end{aligned}

$$

Das heißt, dass wir den Limies in der Gleichung der Ableitungsfunktion ersetzen können durch den Wert $f'(0)$.

$$

\begin{aligned}

f'(x) &= f(x) \cdot f'(0)\\

\end{aligned}

$$

Das ist eine sehr wichtige Erkenntnis, jedoch kennen wir noch keinen konkreten Wert für $f'(0)$.

### Schritt 2: Ungefähre Berechnung des Grenzwertes

Der Wert von $f'(0)$ ist wie bereits erwähnt der Grenzwert von:

$$

\begin{aligned}

f'(0) &= 1 \cdot \lim_{h \to 0} \frac{2^h - 1}{h}\\
&= \lim_{h \to 0} \frac{2^h - 1}{h}\\

\end{aligned}

$$

Wir können den Grenzwert jetzt näherungsweise berechnen, indem wir einige kleine Werte für $h$ einsetzen und den Grenzwert bestimmen.

| h | $f'(0)$ |
|---|----------|
| 0,1 | $\frac{2^{0,1} - 1}{0,1} \approx 0,71773$ |
| 0,01 | $\frac{2^{0,01} - 1}{0,01} \approx 0,6955$ |
| 0,001 | $\frac{2^{0,001} - 1}{0,001} \approx 0,693$ |
| 0,0001 | $\frac{2^{0,0001} - 1}{0,0001} \approx 0,693$ |

Das heißt, dass wir die Ableitung ungefähr, auf zwei Nachkommastellen genau, angeben können:

$$

\begin{aligned}

f'(x) \approx 2^x \cdot 0,69\\

\end{aligned}

$$

:::alert{success}

**Prüfe dich:**

Berechne die ungefähre Ableitung der Funktion $f(x) = 3^x$.

:::collapsible{title="Musterlösung" id="181714"}

$$

f'(x) \approx 3^x \cdot f'(0) \approx 3^x \cdot 1,1

$$

Auf den Wert von $f'(0)$ kommen wir, indem wir den Grenzwert $\lim_{h \to 0} \frac{3^h - 1}{h}$ näherungsweise bestimmen. Das heißt, dass wir kleine Werte für $h$ einsetzen. Dabei erhalten wir den auf zwei Nachkommastellen genauen Grenzwert von $f'(0) \approx 1,1$.

:::

## Natürliche Exponentialfunktion

Man kann sich jetzt fragen, ob es eine Basis $a$ gibt, für die der Grenzwert $f'(0)$ gleich 1 ist. Das heißt, dass die Ableitung der Funktion wieder die Funktion selbst ist. Also, dass gilt:

$$

f'(x) = f(x)

$$

Diese Basis gibt es!

Die Basis $a$, für die die Funktion $f(x) = a^x$ die Eigenschaft hat, dass die Ableitung der Funktion gleich der Funktion selbst ist, heißt Eulersche Zahl und wird mit $e$ bezeichnet. $e$ ist eine wichtige Konstante in der Mathematik und hat den Wert:

$$

e \approx 2,71828

$$

Die zugehörige Funktion heißt natürliche Exponentialfunktion und wird mit $f(x) = e^x$ bezeichnet.

Für die natürliche Exponentialfunktion gilt also:

$$

f'(x) = e^x

$$