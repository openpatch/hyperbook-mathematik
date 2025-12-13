---
name: ✏️ Gemischte Aufgaben
index: 1
lang: de
---

# ✏️ Gemischte Aufgaben

## Aufgaben ohne Hilfsmittel

### Aufgabe 1: Ebene in Koordinatenform

:::collapsible{title="Videoerklärung" id="vid-ebene-koordinaten"}


:::

Gegeben ist die Parameterform einer Ebene $$ E $$:

$$
E: \vec{x} = \begin{pmatrix}2\\1\\0\end{pmatrix} + r \cdot \begin{pmatrix}2\\0\\-2\end{pmatrix} + s \cdot \begin{pmatrix}0\\4\\1\end{pmatrix}
$$

a) Zeigen Sie, dass der Vektor $$ \vec{n} = \begin{pmatrix}4\\-1\\4\end{pmatrix} $$ ein Normalenvektor der Ebene $$ E $$ ist.

b) Stellen Sie die Koordinatenform der Ebene $$ E $$ auf.

:::collapsible{title="Musterlösung" id="lsg-ebene-koordinaten"}

a) Überprüfung durch Skalarprodukte:

$$
\begin{align*}
\vec{n} \cdot \vec{r_1} &= \begin{pmatrix}4\\-1\\4\end{pmatrix} \cdot \begin{pmatrix}2\\0\\-2\end{pmatrix} = 4 \cdot 2 + (-1) \cdot 0 + 4 \cdot (-2) = 8 + 0 - 8 = 0 \\
\end{align*}
$$

b) Koordinatenform aufstellen:

Mit dem Normalenvektor $$ \vec{n} = \begin{pmatrix}4\\-1\\4\end{pmatrix} $$ und dem Stützvektor $$ \vec{p} = \begin{pmatrix}2\\1\\0\end{pmatrix} $$:

$$
\begin{align*}
\vec{n} \cdot \vec{x} &= d \\
4x_1 - 1x_2 + 4x_3 &= d
\end{align*}
$$

Bestimmung von $$ d $$ durch Einsetzen von $$ \vec{p} $$:

$$
4 \cdot 2 - 1 \cdot 1 + 4 \cdot 0 = 8 - 1 + 0 = 7
$$  

Also lautet die Koordinatenform der Ebene:

$$
4x_1 - x_2 + 4x_3 = 7
$$

:::

### Aufgabe 2: Mengenoperationen

:::collapsible{title="Videoerklärung" id="vid-mengen"}


:::

Gegeben ist die Ergebnismenge $$ S = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\} $$ eines Zufallsexperiments sowie die Ereignisse:
- $$ A = \{2, 4, 6, 8, 10\} $$
- $$ B = \{1, 2, 3, 4, 5\} $$

a) Geben Sie die Mengen $$ A \cap B $$ und $$ A \cup B $$ an.

b) Bestimmen Sie $$ \overline{A} $$ und $$ \overline{B} $$.

c) Geben Sie $$ \overline{A \cap B} $$ und $$ \overline{A} \cup \overline{B} $$ an.

:::collapsible{title="Musterlösung" id="lsg-mengen"}

a) Schnitt- und Vereinigungsmenge:

$$
\begin{align*}
A \cap B &= \{2, 4\} \\
A \cup B &= \{1, 2, 3, 4, 5, 6, 8, 10\}
\end{align*}
$$

b) Komplementärmengen:

$$
\begin{align*}
\overline{A} &= \{1, 3, 5, 7, 9\} \\
\overline{B} &= \{6, 7, 8, 9, 10\}
\end{align*}
$$

c) Komplexere Mengenoperationen:

$$
\begin{align*}
\overline{A \cap B} &= \overline{\{2, 4\}} = \{1, 3, 5, 6, 7, 8, 9, 10\} \\
\overline{A} \cup \overline{B} &= \{1, 3, 5, 7, 9\} \cup \{6, 7, 8, 9, 10\} = \{1, 3, 5, 6, 7, 8, 9, 10\}
\end{align*}
$$

:::

### Aufgabe 3: Würfelwurf mit Ereignissen

:::collapsible{title="Videoerklärung" id="vid-wuerfel"}


:::

Bei einem Zufallsexperiment werden zwei unterscheidbare Würfel geworfen (ein roter und ein blauer).

a) Geben Sie die Ergebnismenge $$ S $$ an (Anzahl der Elemente genügt).

b) Beschreiben Sie folgende Ereignisse in Mengenschreibweise:
   - $$ C $$: Die Augensumme beträgt 7
   - $$ D $$: Beide Würfel zeigen die gleiche Augenzahl

c) Berechnen Sie $$ P(C) $$ und $$ P(D) $$.

d) Berechnen Sie $$ P(C \cup D) $$ und $$ P(C \cap D) $$.

:::collapsible{title="Musterlösung" id="lsg-wuerfel"}

a) Ergebnismenge:

Die Ergebnismenge enthält alle Kombinationen (rot, blau): $$ |S| = 6 \cdot 6 = 36 $$ Elemente.

b) Ereignisse in Mengenschreibweise:

$$
\begin{align*}
C &= \{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)\} \\
D &= \{(1,1), (2,2), (3,3), (4,4), (5,5), (6,6)\}
\end{align*}
$$

c) Wahrscheinlichkeiten:

$$
\begin{align*}
P(C) &= \frac{6}{36} = \frac{1}{6} \\
P(D) &= \frac{6}{36} = \frac{1}{6}
\end{align*}
$$

d) Vereinigung und Schnitt:

$$
\begin{align*}
C \cap D &= \{\} \text{ (leere Menge)} \\
P(C \cap D) &= 0 \\
P(C \cup D) &= P(C) + P(D) - P(C \cap D) = \frac{1}{6} + \frac{1}{6} - 0 = \frac{1}{3}
\end{align*}
$$

:::

## Aufgaben mit Hilfsmitteln

### Aufgabe 1: Pyramide und Schnittwinkel

:::collapsible{title="Videoerklärung" id="vid-pyramide"}

::youtube{#7AV-jAFhBzM}

:::

Eine quadratische Pyramide hat die Grundfläche $ ABCD $ in der $ x_1x_2 $-Ebene mit den Eckpunkten:
$ A(0|0|0) $, $ B(6|0|0) $, $ C(6|6|0) $, $ D(0|6|0) $

Die Spitze der Pyramide liegt bei $ S(3|3|8) $.

a) Bestimmen Sie die Gleichung der Ebene, in der die Seitenfläche $ ABS $ liegt, in Parameterform.

b) Berechnen Sie den Flächeninhalt der Seitenfläche $ ABS $ mithilfe des Kreuzprodukts, indem du diese Formel anwendest:

$$
A_{ABS} = \frac{1}{2} \left|\overrightarrow{AB} \times \overrightarrow{AS}\right|
$$

c) Berechnen Sie den Winkel zwischen der Seitenfläche $ ABS $ und der Grundfläche $ ABCD $.

d) Die Gerade $ g: \vec{x} = \begin{pmatrix}3\\0\\0\end{pmatrix} + t \cdot \begin{pmatrix}0\\1\\1\end{pmatrix} $ verläuft durch die Pyramide. Bestimmen Sie die Schnittpunkte von $ g $ mit der Seitenfläche $ ABS $.

:::collapsible{title="Musterlösung" id="lsg-pyramide"}

a) Parameterform der Ebene durch $ ABS $:

Stützvektor: $ \vec{OA} = \begin{pmatrix}0\\0\\0\end{pmatrix} $

Richtungsvektoren:

$$
\begin{align*}
\overrightarrow{AB} &= \begin{pmatrix}6\\0\\0\end{pmatrix} \\
\overrightarrow{AS} &= \begin{pmatrix}3\\3\\8\end{pmatrix}
\end{align*}
$$

Ebenengleichung:

$$
E_{ABS}: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}6\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}3\\3\\8\end{pmatrix}
$$

b) Flächeninhalt mit Kreuzprodukt:

$$
\overrightarrow{AB} \times \overrightarrow{AS} = \begin{pmatrix}6\\0\\0\end{pmatrix} \times \begin{pmatrix}3\\3\\8\end{pmatrix} = \begin{pmatrix}0 \cdot 8 - 0 \cdot 3\\0 \cdot 3 - 6 \cdot 8\\6 \cdot 3 - 0 \cdot 3\end{pmatrix} = \begin{pmatrix}0\\-48\\18\end{pmatrix}
$$

Flächeninhalt des Dreiecks $ ABS $:

$$
A = \frac{1}{2} \left|\overrightarrow{AB} \times \overrightarrow{AS}\right| = \frac{1}{2}\sqrt{0^2 + (-48)^2 + 18^2} = \frac{1}{2}\sqrt{2304 + 324} = \frac{1}{2}\sqrt{2628} \approx 25{,}64 \text{ FE}
$$

c) Winkel zwischen den Ebenen:

Normalenvektor der Seitenfläche: $ \vec{n_1} = \begin{pmatrix}0\\-48\\18\end{pmatrix} $ (oder vereinfacht: $ \begin{pmatrix}0\\-8\\3\end{pmatrix} $)

Normalenvektor der Grundfläche: $ \vec{n_2} = \begin{pmatrix}0\\0\\1\end{pmatrix} $

$$
\cos(\alpha) = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|} = \frac{|0 \cdot 0 + (-8) \cdot 0 + 3 \cdot 1|}{\sqrt{64 + 9} \cdot 1} = \frac{3}{\sqrt{73}} \approx 0{,}351
$$

$$
\alpha = \arccos(0{,}351) \approx 69{,}4°
$$

d) Schnittpunkt von $ g $ mit der Ebene $ ABS $:

Einsetzen der Geradengleichung in die Ebenengleichung:

$$
\begin{pmatrix}3\\t\\t\end{pmatrix} = \begin{pmatrix}0\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}6\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}3\\3\\8\end{pmatrix}
$$

Gleichungssystem:

$$
\begin{align*}
x_1: \quad 3 &= 6r + 3s \\
x_2: \quad t &= 3s \\
x_3: \quad t &= 8s
\end{align*}
$$

Aus den letzten beiden Gleichungen: $ 3s = 8s \Rightarrow s = 0 $ (nur für $ s = 0 $ lösbar, was $ t = 0 $ bedeutet)

Aus der ersten Gleichung mit $ s = 0 $: $ 3 = 6r \Rightarrow r = 0{,}5 $

Schnittpunkt: $ \begin{pmatrix}3\\0\\0\end{pmatrix} $ (Punkt auf der Kante $ AB $)

Die Gerade schneidet die Seitenfläche nur im Punkt $ (3|0|0) $, da sie parallel zur Ebene verläuft, sobald sie in die Pyramide eindringt.

:::

### Aufgabe 2: Vierfeldertafel und bedingte Wahrscheinlichkeit

:::collapsible{title="Videoerklärung" id="vid-vierfeldertafel"}


:::

In einer Schule mit 800 Schülern wurde eine Umfrage zur Nutzung sozialer Medien durchgeführt. 60% der Schüler nutzen täglich soziale Medien. Von denen, die täglich soziale Medien nutzen, haben 75% ein Smartphone. Von den Schülern, die nicht täglich soziale Medien nutzen, haben 40% ein Smartphone.

Ereignisse:
- $$ S $$: Schüler nutzt täglich soziale Medien
- $$ H $$: Schüler hat ein Smartphone

a) Erstellen Sie eine Vierfeldertafel mit absoluten Häufigkeiten.

b) Berechnen Sie die Wahrscheinlichkeit, dass ein zufällig ausgewählter Schüler ein Smartphone hat.

c) Ein Schüler hat ein Smartphone. Wie groß ist die Wahrscheinlichkeit, dass er täglich soziale Medien nutzt?

d) Untersuchen Sie, ob die Ereignisse $$ S $$ und $$ H $$ stochastisch unabhängig sind.

:::collapsible{title="Musterlösung" id="lsg-vierfeldertafel"}

a) Vierfeldertafel mit absoluten Häufigkeiten:

Berechnungen:
- Schüler mit täglicher Nutzung: $$ 0{,}6 \cdot 800 = 480 $$
- Schüler ohne tägliche Nutzung: $$ 0{,}4 \cdot 800 = 320 $$
- Tägliche Nutzung + Smartphone: $$ 0{,}75 \cdot 480 = 360 $$
- Tägliche Nutzung + kein Smartphone: $$ 480 - 360 = 120 $$
- Keine tägliche Nutzung + Smartphone: $$ 0{,}4 \cdot 320 = 128 $$
- Keine tägliche Nutzung + kein Smartphone: $$ 320 - 128 = 192 $$

| | $$ H $$ | $$ \overline{H} $$ | Summe |
|---|---|---|---|
| $$ S $$ | 360 | 120 | 480 |
| $$ \overline{S} $$ | 128 | 192 | 320 |
| Summe | 488 | 312 | 800 |

b) Wahrscheinlichkeit für Smartphone:

$$
P(H) = \frac{488}{800} = 0{,}61 = 61\%
$$

c) Bedingte Wahrscheinlichkeit (Satz von Bayes):

$$
P_H(S) = \frac{P(S \cap H)}{P(H)} = \frac{360/800}{488/800} = \frac{360}{488} \approx 0{,}738 = 73{,}8\%
$$

d) Test auf Unabhängigkeit:

$$
\begin{align*}
P(S) \cdot P(H) &= 0{,}6 \cdot 0{,}61 = 0{,}366 \\
P(S \cap H) &= \frac{360}{800} = 0{,}45
\end{align*}
$$

Da $$ P(S) \cdot P(H) \neq P(S \cap H) $$, sind die Ereignisse **nicht** stochastisch unabhängig.

:::

### Aufgabe 3: Urnenmodell ohne Zurücklegen

:::collapsible{title="Videoerklärung" id="vid-urne"}


:::

In einer Urne befinden sich 5 rote und 3 blaue Kugeln. Es werden nacheinander zwei Kugeln **ohne Zurücklegen** gezogen.

a) Erstellen Sie ein Baumdiagramm mit allen Pfadwahrscheinlichkeiten.

b) Berechnen Sie die Wahrscheinlichkeit, dass beide Kugeln rot sind.

c) Berechnen Sie die Wahrscheinlichkeit, dass beide Kugeln die gleiche Farbe haben.

d) Untersuchen Sie die Ereignisse $$ A $$: "Erste Kugel ist rot" und $$ B $$: "Zweite Kugel ist rot" auf stochastische Unabhängigkeit.

:::collapsible{title="Musterlösung" id="lsg-urne"}

a) Baumdiagramm:

```
Erste Ziehung:
  R (5/8)
    ├─ R (4/7) → RR: 5/8 · 4/7 = 20/56 = 5/14
    └─ B (3/7) → RB: 5/8 · 3/7 = 15/56
  B (3/8)
    ├─ R (5/7) → BR: 3/8 · 5/7 = 15/56
    └─ B (2/7) → BB: 3/8 · 2/7 = 6/56 = 3/28
```

b) Wahrscheinlichkeit für zwei rote Kugeln:

$$
P(RR) = \frac{5}{8} \cdot \frac{4}{7} = \frac{20}{56} = \frac{5}{14} \approx 0{,}357 = 35{,}7\%
$$

c) Wahrscheinlichkeit für gleiche Farben:

$$
P(\text{gleiche Farbe}) = P(RR) + P(BB) = \frac{5}{14} + \frac{3}{28} = \frac{10}{28} + \frac{3}{28} = \frac{13}{28} \approx 0{,}464 = 46{,}4\%
$$

d) Test auf Unabhängigkeit:

$$
\begin{align*}
P(A) &= P(\text{erste rot}) = \frac{5}{8} \\
P(B) &= P(\text{zweite rot}) = P(RR) + P(BR) = \frac{5}{14} + \frac{15}{56} = \frac{20}{56} + \frac{15}{56} = \frac{35}{56} = \frac{5}{8} \\
P(A \cap B) &= P(RR) = \frac{5}{14} \\
P(A) \cdot P(B) &= \frac{5}{8} \cdot \frac{5}{8} = \frac{25}{64} \approx 0{,}391 \\
P(A \cap B) &= \frac{5}{14} \approx 0{,}357
\end{align*}
$$

Da $$ P(A) \cdot P(B) \neq P(A \cap B) $$, sind die Ereignisse **nicht** stochastisch unabhängig. Dies ist bei Ziehen ohne Zurücklegen typisch.

:::

### Aufgabe 4: Aussagen zu Wahrscheinlichkeiten

:::collapsible{title="Videoerklärung" id="vid-aussagen"}


:::

Untersuchen Sie, ob die folgenden Aussagen immer gelten, nie stimmen oder nur in bestimmten Fällen richtig sind. Geben Sie gegebenenfalls die Bedingung an oder ein Gegenbeispiel.

a) Für zwei Ereignisse $$ E $$ und $$ F $$ gilt: $$ P(E \cup F) = P(E) + P(F) $$

b) Wenn $$ P_E(F) = P(F) $$, dann sind $$ E $$ und $$ F $$ stochastisch unabhängig.

c) Für zwei Ereignisse gilt: $$ P(E \cap F) \leq P(E) $$

:::collapsible{title="Musterlösung" id="lsg-aussagen"}

a) **Nur in bestimmten Fällen richtig**

Die Aussage gilt nur, wenn $$ E $$ und $$ F $$ **disjunkt** sind, also $$ E \cap F = \{\} $$.

Allgemein gilt: $$ P(E \cup F) = P(E) + P(F) - P(E \cap F) $$

**Gegenbeispiel:** Würfelwurf, $$ E = \{1,2,3\} $$, $$ F = \{2,3,4\} $$
- $$ P(E) = 1/2 $$, $$ P(F) = 1/2 $$
- $$ P(E \cup F) = P(\{1,2,3,4\}) = 2/3 \neq 1 = P(E) + P(F) $$

b) **Nur in bestimmten Fällen richtig**

Die Bedingung $$ P_E(F) = P(F) $$ ist **notwendig** für Unabhängigkeit, aber nicht **hinreichend**.

Für vollständige Unabhängigkeit muss auch gelten: $$ P_F(E) = P(E) $$ bzw. $$ P(E \cap F) = P(E) \cdot P(F) $$

Bei $$ P(E) = 0 $$ oder $$ P(F) = 0 $$ sind die Ereignisse per Definition unabhängig.

c) **Immer richtig**

Da $$ E \cap F \subseteq E $$, gilt immer $$ P(E \cap F) \leq P(E) $$.

Die Schnittmenge kann nicht wahrscheinlicher sein als die Menge selbst.

:::

### Aufgabe 5: Glücksrad mit Parametern

:::collapsible{title="Videoerklärung" id="vid-gluecksrad"}


:::

Ein Glücksrad ist in $ n $ gleich große Sektoren unterteilt. Davon sind $ m $ Sektoren rot und die restlichen $ n - m $ Sektoren blau gefärbt (mit $ 0 < m < n $). Das Rad wird zweimal gedreht.

a) Geben Sie die Ergebnismenge des Zufallsexperiments an.

b) Bestimmen Sie die Wahrscheinlichkeit, dass beide Drehungen die Farbe Rot ergeben, in Abhängigkeit von $ n $ und $ m $.

c) Bestimmen Sie die Wahrscheinlichkeit, dass beide Drehungen dieselbe Farbe ergeben, in Abhängigkeit von $ n $ und $ m $.

d) Untersuchen Sie die Ereignisse $ A $: "Erste Drehung ergibt Rot" und $ B $: "Zweite Drehung ergibt Rot" auf stochastische Unabhängigkeit. Was unterscheidet diese Situation vom Ziehen ohne Zurücklegen?

:::collapsible{title="Musterlösung" id="lsg-gluecksrad"}

a) Ergebnismenge:

$$
S = \{RR, RB, BR, BB\}
$$

wobei $ R $ für Rot und $ B $ für Blau steht.

b) Wahrscheinlichkeit für zwei Mal Rot:

Die Wahrscheinlichkeit bei einer Drehung Rot zu erhalten ist $ P(R) = \frac{m}{n} $.

Da die Drehungen unabhängig sind:

$$
P(RR) = P(R) \cdot P(R) = \frac{m}{n} \cdot \frac{m}{n} = \frac{m^2}{n^2}
$$

c) Wahrscheinlichkeit für gleiche Farben:

$$
\begin{align*}
P(\text{gleiche Farbe}) &= P(RR) + P(BB) \\
&= \frac{m^2}{n^2} + \frac{(n-m)^2}{n^2} \\
&= \frac{m^2 + n^2 - 2mn + m^2}{n^2} \\
&= \frac{2m^2 - 2mn + n^2}{n^2}
\end{align*}
$$

**Alternative Schreibweise:**
$$
P(\text{gleiche Farbe}) = \left(\frac{m}{n}\right)^2 + \left(\frac{n-m}{n}\right)^2
$$

d) Test auf Unabhängigkeit:

Ereignisse:
- $ A $: Erste Drehung ergibt Rot
- $ B $: Zweite Drehung ergibt Rot

Wahrscheinlichkeiten:
$$
\begin{align*}
P(A) &= \frac{m}{n} \\
P(B) &= \frac{m}{n} \\
P(A \cap B) &= P(RR) = \frac{m^2}{n^2}
\end{align*}
$$

Prüfung:
$$
P(A) \cdot P(B) = \frac{m}{n} \cdot \frac{m}{n} = \frac{m^2}{n^2} = P(A \cap B)
$$

Die Ereignisse $ A $ und $ B $ sind **stochastisch unabhängig**.

**Unterschied zum Ziehen ohne Zurücklegen:**

Beim Glücksrad ändert sich die Zusammensetzung nicht zwischen den Drehungen. Bei jedem Dreh ist die Wahrscheinlichkeit für Rot gleich $ \frac{m}{n} $. Das Ergebnis der ersten Drehung hat keinen Einfluss auf die zweite Drehung.

Beim Ziehen ohne Zurücklegen wird eine Kugel entfernt, wodurch sich die Gesamtzahl und die Anzahl der roten Kugeln ändern. Das erste Ergebnis beeinflusst die Wahrscheinlichkeiten beim zweiten Zug, weshalb keine Unabhängigkeit vorliegt.

**Beispiel:** Bei $ n = 10 $ und $ m = 4 $:
- Glücksrad: $ P(R) = 0{,}4 $ bei beiden Drehungen
- Urne ohne Zurücklegen: Erste Ziehung $ P(R) = 0{,}4 $, zweite Ziehung (wenn erste Rot war) $ P(R) = \frac{3}{9} \approx 0{,}33 $

:::
