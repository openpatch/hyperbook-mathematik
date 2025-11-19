---
name: Ergeignis einer Beschreibung zuordnen
layout: standalone
lang: de
scripts:
  - /wc/mengen-visualisierung.js
---

# Ereignis einer Beschreibung zuordnen

Ordne jedem Ergeignis eine Beschreibung zu.

:::multievent
| Ergeignis | Beschreibung |
|-----------|--------------|
| $E = \{2,3,5,7\}$ | {S1{Primzahl}} |
| $F = \{2,4,6,8\}$ | {S1{gerade Zahl}} |
| $ E \cap F $ | {S1{gerade Primzahl}} |
| $ E \cup F $ | {S1{Zahl größer als 1}} |
| $ \overline{F} $ | {S1{ungerade Zahl}} |
| $ E \setminus F $ | {S1{ungerade Primzahl}} |
:::

:::collapsible{title="Hilfe: Mengensymbole" id="651491"}

$\cap$: Schnittmenge (gemeinsame Elemente)

$\cup$: Vereinigungsmenge (alle Elemente)

$\overline{A}$: Komplement von A (alle Elemente, die nicht in A sind)

$A \setminus B$: Differenzmenge (A ohne B)

:::


:::collapsible{title="Hilfe: Visualiserung" id="651492"}

<mengen-visualisierung
  menge-a="2,3,5,7"
  menge-b="2,4,6,8"
  label-a="E"
  label-b="F">
</mengen-visualisierung>

:::
