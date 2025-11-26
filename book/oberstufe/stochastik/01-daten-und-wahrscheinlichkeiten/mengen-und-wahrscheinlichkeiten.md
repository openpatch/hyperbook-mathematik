---
name: Mengen und Wahrscheinlichkeiten
hide: true
scripts:
  - /wc/mengen-visualisierung.js
layout: standalone
---

# Mengen und Wahrscheinlichkeiten

Die Ereignisse E und F beim Ziehen aus einer Urne mit acht Kugeln, die mit den Zahlen 1 bis 8 beschriftet sind, können in einem Mengendiagramm dargestellt werden.

<mengen-visualisierung
  readonly
  menge-a="1,2,3,4,5,6"
  menge-b="2,4,6,8"
  grundmenge="1,2,3,4,5,6,7,8"
  label-a="E"
  label-b="F"
  label-grundmenge="S">
</mengen-visualisierung>

::::multievent
:::snippet{#aufgabe}
Bestimme die folgenden Wahrscheinlichkeiten als Dezimalzahl. Runde auf zwei Nachkommastellen.

(1) $ P(E \cup F) $ = {z{0,88}}

(2) $ P(E \cap F) $ = {z{0,38}}

(3) $ P(\overline{E}) $ = {z{0,25}}

(4) $ P(\overline{E \cap F}) $ = {z{0,63}}

(5) $ P(\overline{E} \cup \overline{F}) $ = {z{0,63}}

(6) $ P(E \setminus F) $ = {z{0,38}}
:::
::::

:::collapsible{title="Hilfe"}

$\overline{E}$ bezeichnet das Komplement von E, also alle Elemente, die nicht in E sind.

<mengen-visualisierung
  menge-a="1,2,3,4,5,6"
  menge-b="2,4,6,8"
  grundmenge="1,2,3,4,5,6,7,8"
  label-a="E"
  label-b="F"
  label-grundmenge="S">
</mengen-visualisierung>
:::
