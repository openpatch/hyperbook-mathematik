---
name: Sparschwein
index: 2
lang: de
---

# ✏️ Sparschwein

:::alert{info}

Schreibe die Aufgabe und beide Möglichkeiten in dein Heft. Fülle die Tabelle aus.

:::

Deine Oma schenkt dir zu deiner Geburt 1000€. Nun muss sie entscheiden, wie sie das Geld für dich anlegt. Die Bank bietet ihr einen Zinssatz von 5% an. Berechne, wie viel Geld du mit 18 Jahren bekämst. 
## 1. Möglichkeit

Sie lässt sich die Zinsen jährlich auszahlen und spart sie in einem Sparschwein.

$K=1000€$; $p\%=5\%$; $n=18$

| Jahre | Guthaben (€) |
| ----- | ------------- |
| 0     | 1000          |
| 1     | 1050          |
| 2 | 1100 |
| 3 | 1150 |
| ... | ... |
| 18 | ??? |

## 2. Möglichkeit

Sie lässt die Zinsen jährlich auf dem Konto liegen.

$K=1000€$; $p\%=5\%$; $n=18$

| Jahre | Guthaben (€) |
| ----- | ------------- |
| 0     | 1000          | 
| 1     | 1050          | 
| 2 | 1102,50 | 
| 3 | 1157,625 |
| ... | ... |
| 18 | ??? |

Beispielrechnung mit $p\% = 2\% = 0,02$

::youtube[Zinsen und Zinseszinsen]{#RPFoUkR9PvA}

## Aufgaben

1. Übertrage die beiden Möglichkeiten in dein Heft und fülle die Tabelle aus.
2. Versuche eine Formel zu finden, die das Guthaben nach $n$ Jahren berechnet.

:::collapsible{title="Lösung: Formel für die 1. Möglichkeit" id="124321521523"}

Das Startkapital beträgt $K_{0} = 1000 €$, der Betrag nimmt jedes Jahr um den festen Wert d = 50€ zu. Diese Zunahme erfolgt über n = 18 Jahre.

$$$
\begin{align*}
K_{18} &= K_0 + n \cdot d \\
    &= 1000 + 18 \cdot 50 \\
    &= 1000 + 900 \\
    &= 1900 (€)
\end{align*}
$$$

Bei diesem Kapitalwachstum handelt es sich um ein lineares Wachstum.

:::

:::collapsible{title="Lösung: Formel für die 2. Möglichkeit" id="124321521522343"}

Das Startkapital beträgt $K_{0} = 1000 €$, der Betrag nimmt jedes Jahr um den gleichen Faktor $q=100\%+5\% = 105\% = 1,05$ zu. Diese Zunahme erfolgt über n = 18 Jahre.
$$$
\begin{align*}
K_{18} &= K_0 \cdot q^n \\
    &= 1000 \cdot 1,05^{18} \\
    &\approx 2406,62 (€)
\end{align*}
$$$
Bei diesem Kapitalwachstum handelt es sich um ein sogenanntes exponentielles Wachstum.

:::
