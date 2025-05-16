---
name: 💡 Exponentialfunktionen umschreiben
index: 1
lang: de
---

# 💡 Exponentialfunktionen umschreiben

:::collapsible{title="Videoerklärung" id="934124"}

::youtube[title]{#5I3btdrLgyM}

:::

In Anwendungskontexten werden in der Regel Wachstumsraten benötigt, die nicht dem Wert der eulerischen Zahl $e$ entsprechen. Dies ist für manche Fragestellungen ungünstig, da uns zum Beispiel nicht die Ableitung von $f(x) = 2^{x}$ bekannt ist.

Wir kennen jedoch die Ableitung von Funktionen der Form $f(x) = a \cdot e^{b \cdot x + n}$ aus dem letzten Kapitel.

Durch geschicktes Umformen können wir jede Exponentialfunktion in eine solche Form bringen.

## Beispiel

Nehmen wir zum Beispiel die Funktion $f(x) = 2^{x}$.

Die Umformung erfolgt in zwei Schritten:

1. Wir bringen die Basis $2$ in die Form $e^{\ln(2)}$. Dies ist möglich, da die natürliche Logarithmusfunktion $\ln$ die Umkehrfunktion der natürlichen Exponentialfunktion $e^{x}$ ist. Das bedeutet, dass $e^{\ln(2)} = 2$ gilt.

2. Wir bringen die Exponentialfunktion in die Form $e^{\ln(2) \cdot x}$.

Das Ergebnis ist die Funktion $f(x) = e^{\ln(2) \cdot x}$.

Die Funktion können wir mit unserem Wissen aus dem letzten Kapitel ableiten:

$$

f'(x) = \ln(2) \cdot e^{\ln(2) \cdot x}

$$

## Allgemeine Vorgehensweise

Gegeben ist die Exponentialfunktion $f(x) = a \cdot b^{x}$ mit $a \in \mathbb{R}$ und $b > 0$.

1. Wir bringen die Basis $b$ in die Form $e^{\ln(b)}$. Dies ist möglich, da die natürliche Logarithmusfunktion $\ln$ die Umkehrfunktion der natürlichen Exponentialfunktion $e^{x}$ ist. Das bedeutet, dass $e^{\ln(b)} = b$ gilt.

2. Wir bringen die Exponentialfunktion in die Form $e^{\ln(b) \cdot x}$.

Das Ergebnis ist die Funktion $f(x) = a \cdot e^{\ln(b) \cdot x}$.

Die Funktion können wir mit unserem Wissen aus dem letzten Kapitel ableiten:

$$

f'(x) = a \cdot \ln(b) \cdot e^{\ln(b) \cdot x}

$$