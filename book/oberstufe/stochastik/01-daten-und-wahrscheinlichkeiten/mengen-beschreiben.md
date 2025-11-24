---
name: Mengen beschreiben
hide: true
scripts:
  - /wc/mengen-visualisierung.js
---

# Mengen beschreiben

In einer Urne sind Kugel mit den Zahlen 1 bis 8. Es wird blind eine Kugel gezogen. Als Ergebnismenge wird $ S = \{1, 2, 3, 4, 5, 6, 7, 8\} $ festgelegt. Betrachte die Ereignisse $ E = { 1, 2, 4} $ und $ F = { 2, 4, 6, 8} $.

:::snippet{#aufgabe}
Zeichne ein Mengendiagramm zur Darstellung der Ereignisse E und F.
:::

:::collapsible{title="Hilfe"}

<mengen-visualisierung
  menge-a="1,2,4"
  menge-b="2,4,6,8"
  label-a="E"
  label-b="F">
</mengen-visualisierung>

:::

:::snippet{#aufgabe}
Gib das Ereignis in Mengenschreibweise an und beschreibe die Menge in Worten.

(1) $ E \cup F $

(2) $ E \cap F $

(3) $ \overline{E} $

(4) $ \overline{E \cap F} $

(5) $ \overline{E} \cup \overline{F} $

(6) $ E \setminus F $
:::

:::collapsible{title="Lösung"}

(1) $ E \cup F = \{ 1, 2, 4, 6, 8 \} $ \\
Die Menge aller Kugeln, die in E oder in F sind.

(2) $ E \cap F = \{ 2, 4 \} $ \\
Die Menge aller Kugeln, die in E und in F sind.

(3) $ \overline{E} = \{ 3, 5, 6, 7, 8 \} $ \\
Die Menge aller Kugeln, die nicht in E sind.

(4) $ \overline{E \cap F} = \{ 1, 3, 5, 6, 7, 8 \} $ \\
Die Menge aller Kugeln, die nicht in E und in F sind.

(5) $ \overline{E} \cup \overline{F} = \{ 1, 3, 5, 7 \} $ \\
Die Menge aller Kugeln, die nicht in E oder nicht in F sind.

(6) $ E \setminus F = \{ 1 \} $ \\
Die Menge aller Kugeln, die in E, aber nicht in F sind.

:::

:::snippet{#aufgabe}
Bestimme die Wahrscheinlichkeiten der Ereignisse.

(1) $ P(E) $

(2) $ P(E \cap F) $

(3) $ P(\overline{E}) $

(4) $ P(E \cup F) $

(5) $ P(\overline{E} \cup \overline{F}) $

(6) $ P(E \setminus F) $
:::

:::collapsible{title="Lösung"}

(1) $ P(E) = \frac{3}{8} $

(2) $ P(E \cap F) = \frac{2}{8} = \frac{1}{4} $

(3) $ P(\overline{E}) = \frac{5}{8} $

(4) $ P(E \cup F) = \frac{5}{8} $

(5) $ P(\overline{E} \cup \overline{F}) = \frac{4}{8} = \frac{1}{2} $

(6) $ P(E \setminus F) = \frac{1}{8} $

:::