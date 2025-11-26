---
name: Mengen und Wahrscheinlichkeiten
hide: true
scripts:
  - /wc/mengen-visualisierung.js
layout: standalone
---

# Mengen und Wahrscheinlichkeiten 2

Die Ereignisse V und K beim Ziehen aus einer Urne mit 16 Kugeln, die mit den Buchstaben A bis P beschriftet sind, können in einem Mengendiagramm dargestellt werden.

<mengen-visualisierung
  readonly
  menge-a="A,E,I,O"
  menge-b="B,D,F,H,J,L,N,P"
  grundmenge="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P"
  label-a="V"
  label-b="K"
  label-grundmenge="S">
</mengen-visualisierung>

::::multievent
:::snippet{#aufgabe}
Bestimme die folgenden Wahrscheinlichkeiten als Dezimalzahl. Runde auf zwei Nachkommastellen.

(1) $ P(V \cup K) $ = {z{0,75}}

(2) $ P(V \cap K) $ = {z{0,00}}

(3) $ P(\overline{V}) $ = {z{0,75}}

(4) $ P(\overline{V \cap K}) $ = {z{1,00}}

(5) $ P(\overline{V} \cup \overline{K}) $ = {z{1,00}}

(6) $ P(V \setminus K) $ = {z{0,25}}

:::
::::

:::collapsible{title="Hilfe"}

$\overline{E}$ bezeichnet das Komplement von V, also alle Elemente, die nicht in V sind.

<mengen-visualisierung
  menge-a="A,E,I,O"
  menge-b="B,D,F,H,J,L,N,P"
  grundmenge="A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P"
  label-a="V"
  label-b="K"
  label-grundmenge="S">
</mengen-visualisierung>
:::
