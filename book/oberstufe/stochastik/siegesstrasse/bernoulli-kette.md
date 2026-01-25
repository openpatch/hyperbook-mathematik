---
title: Bernoulli-Kette
hide: true
---

# Bernoulli-Kette

## Aufgabe 1

:::snippet{#aufgabe}
Zeichne einen vollständigen Baum für eine Bernoulli-Kette mit 4 Versuchen, bei der die Erfolgswahrscheinlichkeit $p = 0{,}6$ beträgt.
:::

:::snippet{#aufgabe}
Berechne damit die Binomialkoeffizienten $\binom{4}{k}$ für $k = 0, 1, 2, 3, 4$.
:::

## Aufgabe 2

Beurteile, ob sich die folgenden Situationen mit einer Bernoulli-Kette modellieren lassen. Begründe deine Entscheidung jeweils kurz.

a) Ein Basketballspieler wirft 5-mal hintereinander einen Freiwurf. 

:::collapsible{title="Lösung"}
Ja, da es zwei mögliche Ergebnisse gibt (Treffer oder kein Treffer), die Versuche unabhängig sind und die Erfolgswahrscheinlichkeit konstant bleibt.
:::

b) In einer Urne befinden sich 10 rote und 5 blaue Kugeln. Es werden nacheinander 4 Kugeln ohne Zurücklegen gezogen. 

:::collapsible{title="Lösung"}
Nein, da die Versuche nicht unabhängig sind (die Zusammensetzung der Urne ändert sich nach jedem Zug) und die Erfolgswahrscheinlichkeit nicht konstant bleibt.
:::

c) Es wird eine Münze 6-mal geworfen.

:::collapsible{title="Lösung"}
Ja, da es zwei mögliche Ergebnisse gibt (Kopf oder Zahl), die Versuche unabhängig sind und die Erfolgswahrscheinlichkeit konstant bleibt.
:::

d) Aus einem Kartenspiel mit 52 Karten werden nacheinander 3 Karten gezogen, wobei die gezogene Karte nach jedem Zug wieder zurückgelegt wird.

:::collapsible{title="Lösung"}
Ja, da es zwei mögliche Ergebnisse gibt (z.B. Herzkarte oder keine Herzkarte), die Versuche unabhängig sind und die Erfolgswahrscheinlichkeit konstant bleibt.
:::

e) Aus einem Kartenspiel mit 52 Karten werden nacheinander 3 Karten gezogen, ohne die gezogene Karte zurückzulegen.

:::collapsible{title="Lösung"}
Nein, da die Versuche nicht unabhängig sind (die Zusammensetzung des Kartenspiels ändert sich nach jedem Zug) und die Erfolgswahrscheinlichkeit nicht konstant bleibt.
:::

## Aufgabe 3

In einer Socke befinden sich sechs grüne und zwei blaue Steine. Formuliere ein Zufallsexperiment und ein Ereignis für die folgenden Wahrscheinlichkeiten.

a) $P(E) = \binom{7}{2} \cdot \frac{1}{4}^2 \cdot \frac{3}{4}^5$

:::collapsible{title="Lösung"}
Zufallsexperiment: Es werden 7 Steine nacheinander mit Zurücklegen aus der Socke gezogen. 
Ereignis: Es werden genau 2 blaue Steine gezogen.
:::

b) $P(E) = \binom{8}{3} \cdot \frac{1}{4}^3 \cdot \frac{3}{4}^5$

:::collapsible{title="Lösung"}
Zufallsexperiment: Es werden 8 Steine nacheinander mit Zurücklegen aus der Socke gezogen. 
Ereignis: Es werden genau 3 blaue Steine gezogen.
:::

c) $P(E) = \frac{1}{4}^2$

:::collapsible{title="Lösung"}
Zufallsexperiment: Es werden 2 Steine nacheinander mit Zurücklegen aus der Socke gezogen. 
Ereignis: Es werden beide Male blaue Steine gezogen.
:::