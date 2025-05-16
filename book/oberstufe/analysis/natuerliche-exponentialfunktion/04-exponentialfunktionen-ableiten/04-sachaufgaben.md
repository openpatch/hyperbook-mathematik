---
name: ✏️ Sachaufgaben
index: 4
lang: de
---

# ✏️ Sachaufgaben

## Aufgabe: ⚛ Iod-Isotop

:::collapsible{title="Videoerklärung" id="078599"}

::youtube[title]{#ZXh4cfrKS1s}

:::

Der Mensch nimmt täglich Iod-131 auf, welches sich in der Regel in der Schilddrüse ablagert. Pro Tag zerfällt ca. 8,28% der Menge des Iod-131 Isotops.

Ein Mensch hat 100 µg aufgenommen.

a) Stelle die Exponentialfunktion auf, die den Zerfall des Iod-131 Isotops im Körper des Menschen beschreibt.

:::collapsible{title="Musterlösung" id="940306"}

Anfangswert: $a = 100 \, \mu g$

Zerfallsfaktor: $q = 1 - 0,0828 = 0,9172$

Exponentialfunktion: $f(x) = 100 \cdot 0,9172^{x}$

Exponentialfunktion umgeschrieben: $f(x) = 100 \cdot e^{\ln(0,9172) \cdot x}$

:::

b) Berechne die Halbwertszeit des Iod-131 Isotops.

:::collapsible{title="Musterlösung" id="940307"}

Die Halbwertszeit $t_{h}$ ist gegeben durch:

$$

t_{h} = \frac{\ln(\frac{1}{2})}{\ln(0,9172)} \approx 8,02 \text{ Tage}

$$

:::


c) Berechne die Zeit, nach der nur noch 10 µg Iod-131 im Körper des Menschen vorhanden sind.

:::collapsible{title="Musterlösung" id="940308"}

$$

\begin{align*}

f(x) &= 10 \\

100 \cdot e^{\ln(0,9172) \cdot x} &= 10 &&|:100 \\

\frac{10}{100} &= e^{\ln(0,9172) \cdot x} \\

0,1 &= e^{\ln(0,9172) \cdot x} \\

\ln(0,1) &= \ln(0,9172) \cdot x &&|\ln(...) \\

x &= \frac{\ln(0,1)}{\ln(0,9172)} \approx 26,64 \text{ Tage}

\end{align*}

$$

:::

## Aufgabe: 🍺 Bierschaum

Ein Bier wird in einem Glas serviert. Der Schaum des Bieres hat eine Höhe von 5 cm. Nach 1 Minuten ist der Schaum nur noch 3 cm hoch.

a) Stelle die Exponentialfunktion auf, die den Zerfall des Bierschaums beschreibt.

:::collapsible{title="Musterlösung" id="940309"}

Anfangswert: $a = 5 \, cm$

Zerfallsfaktor: $q = \frac{3}{5} = 0,6$

Exponentialfunktion: $f(x) = 5 \cdot 0,6^{x}$

Exponentialfunktion umgeschrieben: $f(x) = 5 \cdot e^{\ln(0,6) \cdot x}$

:::

b) Berechne die Halbwertszeit des Bierschaums.

:::collapsible{title="Musterlösung" id="940310"}

Die Halbwertszeit $t_{h}$ ist gegeben durch:

$$

t_{h} = \frac{\ln(\frac{1}{2})}{\ln(0,6)} \approx 1,36 \text{ Minuten}

$$

:::

c) Berechne die Zeit, nach der nur noch 1 cm Bierschaum im Glas vorhanden ist.

:::collapsible{title="Musterlösung" id="940311"}

$$

\begin{align*}

f(x) &= 1 \\

5 \cdot e^{\ln(0,6) \cdot x} &= 1 &&|:5 \\

\frac{1}{5} &= e^{\ln(0,6) \cdot x} \\

0,2 &= e^{\ln(0,6) \cdot x} \\

\ln(0,2) &= \ln(0,6) \cdot x &&|\ln(...) \\

x &= \frac{\ln(0,2)}{\ln(0,6)} \approx 3,15 \text{ Minuten}

\end{align*}

$$

Nach etwa 3,15 Minuten ist nur noch 1 cm Bierschaum im Glas vorhanden.

:::


