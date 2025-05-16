---
name: 💡 Verdopplungs- und Halbwertszeit
index: 3
lang: de
---

# 💡 Verdopplungs- und Halbwertszeit

:::collapsible{title="Videoerklärung" id="107212"}

::youtube[title]{#i4xy7AacLVc}

:::

In vielen Anwendungsbereichen ist es wichtig, die Verdopplungs- und Halbwertszeit einer Exponentialfunktion zu bestimmen. Diese Zeitpunkte geben an, wie lange es dauert, bis eine Größe sich verdoppelt oder halbiert hat.

## Verdopplungszeit

Die Verdopplungszeit ist die Zeit, die benötigt wird, damit eine Größe sich verdoppelt. Sie wird oft in der Form $t_{v}$ angegeben.

Die Verdopplungszeit kann aus der Exponentialfunktion $f(x) = a \cdot e^{b \cdot x}$ abgeleitet werden. Wir setzen $f(x) = 2 \cdot a$ und lösen die Gleichung nach $x$ auf:

$$

\begin{align*}

f(x) &= 2 \cdot a \\

a \cdot e^{b \cdot x} &= 2 \cdot a \ &&| : a \\

e^{b \cdot x} &= 2 \ &&| \ln(...) \\

\ln(e^{b \cdot x}) &= \ln(2) \\

b \cdot x &= \ln(2) \ &&| : b \\

x &= \frac{\ln(2)}{b}

\end{align*}

$$

Also ist die Verdopplungszeit $t_{v} = \frac{\ln(2)}{b}$.

### Beispiel

In einer Stadt gibt es 123000 Einwohner. Jedes Jahr wächst die Bevölkerung um 0,5%. Berechne die Verdopplungszeit.

Zuerst stellen wir die Exponentialfunktion auf:

$ f(x) = 123000 \cdot 1,005^{x} $

Nun formen wir die Funktion um:

$ f(x) = 123000 \cdot e^{\ln(1,005) \cdot x} $

Jetzt können wir die Verdopplungszeit berechnen:

$$

t_{v} = \frac{\ln(2)}{\ln(1,005)} \approx 139

$$

Es dauert also etwa 139 Jahre, bis sich die Bevölkerung verdoppelt hat.

## Halbwertszeit

Die Halbwertszeit ist die Zeit, die benötigt wird, damit eine Größe sich halbiert. Sie wird oft in der Form $t_{h}$ angegeben.

Die Halbwertszeit kann aus der Exponentialfunktion $f(x) = a \cdot e^{b \cdot x}$ abgeleitet werden. Wir setzen $f(x) = \frac{1}{2} \cdot a$ und lösen die Gleichung nach $x$ auf:

$$

\begin{align*}

f(x) &= \frac{1}{2} \cdot a \\

a \cdot e^{b \cdot x} &= \frac{1}{2} \cdot a \ &&| : a \\

e^{b \cdot x} &= \frac{1}{2} \ &&| \ln(...) \\

\ln(e^{b \cdot x}) &= \ln(\frac{1}{2}) \\

b \cdot x &= \ln(\frac{1}{2}) \ &&| : b \\

x &= \frac{\ln(\frac{1}{2})}{b}

\end{align*}

$$

Also ist die Halbwertszeit $t_{h} = \frac{\ln(\frac{1}{2})}{b}$.

### Beispiel

Ein Patient hat 120 mg eines Medikaments im Blut. Das Medikament wird jede Stunde um 20% abgebaut. Berechne die Halbwertszeit.

Zuerst stellen wir die Exponentialfunktion auf:

$ f(x) = 120 \cdot 0,8^{x} $

Nun formen wir die Funktion um:

$ f(x) = 120 \cdot e^{\ln(0,8) \cdot x} $

Jetzt können wir die Halbwertszeit berechnen:

$$

t_{h} = \frac{\ln(\frac{1}{2})}{\ln(0,8)} \approx 3,1

$$

Es dauert also etwa 3,1 Stunden, bis sich die Menge des Medikaments im Blut halbiert hat.

## Merke

:::alert{info}

Von einer Exponentialfunktion $f(x) = a \cdot e^{b \cdot x}$ berechnet man die Verdopplungs- und Halbwertszeit mit den Formeln:

$$

t_{v} = \frac{\ln(2)}{b} \quad \text{und} \quad t_{h} = \frac{\ln(\frac{1}{2})}{b}


:::
