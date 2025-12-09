---
name: ✅ Aufgabensammlung
index: 2
lang: de
---

# ✅ Aufgabensammlung
.
Hier findest du eine Sammlung von Aufgaben zu verschiedenen Bereichen der Stochastik.

::::::collapsible{title="Ich kann Vierfeldertafel erstellen und interpretieren"}

In einer Umfrage wurden 200 Personen befragt. 60\% waren weiblich. Von den weiblichen Personen nutzen 75\% soziale Medien, von den männlichen Personen nutzen 50\% soziale Medien.

a) Erstelle eine Vierfeldertafel, die die Ergebnisse der Umfrage in absoluten Zahlen darstellt.

::::collapsible{title="Musterlösung"}

Vierfeldertafel:

|                     | Soziale Medien nutzen | Keine sozialen Medien nutzen | Gesamt |
|---------------------|----------------------|-----------------------------|--------|
| Weiblich            | 90                   | 30                          | 120    |
| Männlich            | 40                   | 40                          | 80     |
| Gesamt              | 130                  | 70                          | 200    |

::::

b) Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählte Person weiblich ist und soziale Medien nutzt.

::::collapsible{title="Musterlösung"}

Wir nutzen für weiblich W und für soziale Medien S.

$$
P(W \cap S) = \frac{90}{200} = 0{,}45
$$

::::

c) Berechne die Wahrscheinlichkeit, dass eine zufällig ausgewählte Person soziale Medien nutzt.

::::collapsible{title="Musterlösung"}

Wir nutzen für weiblich W und für soziale Medien S.

$$
P(S) = \frac{130}{200} = 0{,}65
$$


::::

d) Berechne die bedingte Wahrscheinlichkeit, dass eine Person weiblich ist, gegeben dass sie soziale Medien nutzt.

::::collapsible{title="Musterlösung"}

Wir nutzen für weiblich W und für soziale Medien S.

$$
P_{S}(W) = \frac{P(W \cap S)}{P(S)} = \frac{0{,}45}{0{,}65} \approx 0{,}6923
$$

::::

::::::

::::::collapsible{title="Ich kann Baumdiagramme erstellen und interpretieren"}

In einer Urne liegen 5 rote und 3 blaue Kugeln. Drei Kugeln werden nacheinander ohne Zurücklegen gezogen.

a) Erstelle ein Baumdiagramm, das alle möglichen Ergebnisse des Ziehens darstellt.

::::collapsible{title="Musterlösung"}

Das Baumdiagramm zeigt die möglichen Ergebnisse des Ziehens von drei Kugeln ohne Zurücklegen:

```
          Start
         /     \
      Rot(5)  Blau(3)
      /   \      /   \
   Rot(4) Blau(3) Rot(5) Blau(2)
   / \      / \     / \     / \
Rot(3) Blau(2) Rot(4) Blau(1) Rot(4) Blau(1) Rot(5) Blau(0)
``` 

::::

b) Berechne die Wahrscheinlichkeit, dass alle drei gezogenen Kugeln rot sind.

::::collapsible{title="Musterlösung"}

Die Wahrscheinlichkeit, dass alle drei gezogenen Kugeln rot sind, berechnet sich wie folgt:

$$
P(\text{alle rot}) = \frac{5}{8} \cdot \frac{4}{7} \cdot \frac{3}{6} = \frac{60}{336} = \frac{5}{28} \approx 0{,}1786
$$

Drei rote Kugeln werden mit einer Wahrscheinlichkeit von etwa 17,86\% gezogen.

::::

c) Berechne die Wahrscheinlichkeit, dass mindestens eine blaue Kugel gezogen wird.

::::collapsible{title="Musterlösung"}

Die Wahrscheinlichkeit, dass mindestens eine blaue Kugel gezogen wird, ist das Gegenereignis dazu, dass alle drei gezogenen Kugeln rot sind:

$$
P(\text{mindestens eine blau}) = 1 - P(\text{alle rot}) = 1 - \frac{5}{28} = \frac{23}{28} \approx 0{,}8214
$$

Mindestens eine blaue Kugel wird mit einer Wahrscheinlichkeit von etwa 82,14\% gezogen.

::::

::::::

::::::collapsible{title="Ich kann bedingte Wahrscheinlichkeiten berechnen"}

Eine Maschine produziert Bauteile. 5\% der Bauteile sind defekt. Ein Testgerät erkennt defekte Bauteile mit einer Wahrscheinlichkeit von 95\%. Bei funktionierenden Bauteilen schlägt der Test fälschlicherweise mit 2\% Wahrscheinlichkeit an (Fehlalarm).

a) Berechne die Wahrscheinlichkeit, dass ein Bauteil defekt ist und der Test positiv ausfällt.

::::collapsible{title="Musterlösung"}

Wir nutzen für defekt D und für positiven Test T.

Wir stellen die Gleichung für bedingte Wahrscheinlichkeiten um:

$$
P_T(D) = \frac{P(D \cap T)}{P(D)}
$$

$$
P(D \cap T) = P(D) \cdot P_T(D) = 0{,}05 \cdot 0{,}95 = 0{,}0475
$$

::::

b) Berechne die Wahrscheinlichkeit, dass ein Bauteil funktionierend ist und der Test negativ ausfällt.

::::collapsible{title="Musterlösung"}

Wir nutzen für funktionierend F und für negativen Test N.

Wir stellen die Gleichung für bedingte Wahrscheinlichkeiten um:

$$
P_N(F) = \frac{P(F \cap N)}{P(F)}
$$

$$
P(F \cap N) = P(F) \cdot P_N(F) = 0{,}95 \cdot 0{,}98 = 0{,}931
$$

::::

::::::

::::::collapsible{title="Ich kann Aussagen zu Wahrscheinlichkeiten beurteilen"}

Prüfe, ob die folgenden Aussagen immer, manchmal oder nie gelten:

a) Für zwei Ereignisse E und F gilt: $ P(E\cup F) \geq P(E)$.

::::collapsible{title="Musterlösung"}

Diese Aussage gilt immer, da die Vereinigung von E und F mindestens so wahrscheinlich ist wie E allein.

::::

b) Wenn $P(E \cap F) = \{\}$, dann sind E und F unabhängig.

::::collapsible{title="Musterlösung"}

Diese Aussage gilt nie. Wenn $P(E \cap F) = \{\}$, sind E und F disjunkt (haben keine gemeinsamen Elemente), was bedeutet, dass sie nicht unabhängig sein können, es sei denn, eine der Wahrscheinlichkeiten ist null.

::::

c) Für zwei Ereignisse gilt: $P(E) + P(F) \leq 1 + P(E \cap F)$.

::::collapsible{title="Musterlösung"}

Diese Aussage gilt immer. Sie folgt aus der Formel für die Vereinigung von zwei Ereignissen: $P(E \cup F) = P(E) + P(F) - P(E \cap F)$ und der Tatsache, dass $P(E \cup F) \leq 1$.

::::

d) Wenn E und F unabhängig sind, dann sind auch $\overline{E}$ und $\overline{F}$ unabhängig.

::::collapsible{title="Musterlösung"}

Diese Aussage gilt immer. Wenn E und F unabhängig sind, dann gilt auch $P(\overline{E} \cap \overline{F}) = P(\overline{E}) \cdot P(\overline{F})$.

::::

::::::
