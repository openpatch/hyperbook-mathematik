---
name: Baum- und Mengendiagramme
hide: true
scripts:
  - /wc/mengen-visualisierung.js
layout: standalone
---

# Baum- und Mengendiagramme

Das Baumdiagramm beschreibt das Ziehen einer Kugel aus einer Urne mit Kugeln die von 1 bis 18 nummeriert sind.

![Baumdiagramm](./baumdiagramm-18.excalidraw.png)

## Aufgabe 1

:::snippet{#aufgabe}
Zeichne ein passendes Mengendiagramm zum Baumdiagramm.
:::

::excalidraw{aspectRatio="16/9" autoZoom=true center=true edit=true}

:::collapsible{title="Lösung"}
Es gibt mehrere Möglichkeiten, die Mengen A und B zu definieren. Eine mögliche Lösung ist:

<mengen-visualisierung
  readonly
  menge-a="2,3,1"
  menge-b="1,7,8,9,10,11,12,13,14,15,16,17,18"
  grundmenge="1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18"
  label-a="Ungerade Zahlen"
  label-b="Gerade Zahlen"
  label-grundmenge="G">
</mengen-visualisierung>

Diese Überlegungen führen zu den Mengen:

Die Wahrscheinlichkeit für A ist $\frac{1}{6}. Das heißt, 3 von 18 Kugeln müssen in A liegen.

Wenn man den linken Zweig des Baums weiter verfolgt, dann erkennt man, dass die Wahrscheinlichkeit für B unter der Bedingung, dass A eingetreten ist, $\frac{1}{3}$ ist. Das heißt, von den 3 Kugeln in A muss 1 Kugel in B liegen.

Dann schaut man sich den rechten Zweig an. Die Wahrscheinlichkeit für $\overline{A}$ ist $\frac{5}{6}$. Das heißt, 15 von 18 Kugeln müssen in $\overline{A}$ liegen. Von diesen 15 Kugeln muss laut Baumdiagramm die Wahrscheinlichkeit für B unter der Bedingung, dass $\overline{A}$ eingetreten ist, $\frac{4}{5}$ sein. Das heißt, von den 15 Kugeln in $\overline{A}$ müssen 12 Kugeln in B liegen.

Somit bleiben 3 Kugeln übrig, die außerhalb von A und B liegen.
:::

## Aufgabe 2

::::multievent
:::snippet{#aufgabe}
Berechne die folgenden Wahrscheinlichkeiten als Dezimalzahlen. Runde auf zwei Nachkommastellen.

(1) $ P(A \cup B) $ = {z{0,83}}

(2) $ P(A \cap B) $ = {z{0,06}}

(3) $ P(\overline{A}) $ = {z{0,83}}

(4) $ P(\overline{A \cap B}) $ = {z{0,94}}

(5) $ P(\overline{A} \cup \overline{B}) $ = {z{0,94}}

(6) $ P(A \setminus B) $ = {z{0,11}}
:::
::::
