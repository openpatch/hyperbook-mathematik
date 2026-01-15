---
title: Lotterie
scripts:
  - /wc/lotterie-spiel.js
---

# Lotterie

Bei einer Lotterie zahlt man 50 Cent Einsatz und dreht zuerst ein Glücksrad, welches die Farben Rot und Blau hat. Danach zieht man eine Kugel aus einer Urne, derselben Farbe. Den Wert eine roten Kugel muss man zahlen, den Wert einer blauen Kugel bekommt man ausgezahlt.

Hier kannst du das Spiel ausprobieren:

<lotterie-spiel></lotterie-spiel>

<!--
Glücksrad: rot 0,8, blau 0,2
Urne rot: 1 (0,2), 2 (0,5), 0 (0,3)
Urne blau: 0 (0,1), 4 (0,4), 8 (0,5)
-->

:::snippet{#aufgabe}
Gib die Wahrscheinlichkeitsverteilung der Zufallsgröße "Gewinn in Euro" an.
:::

:::collapsible{title="Musterlösung" id="047915"}

Die möglichen Gewinne und ihre Wahrscheinlichkeiten sind:

| Gewinne (x)               | -1.5 | -0.5 | 0.5  | 4.5  | 8.5  |
| ------------------------- | ---- | ---- | ---- | ---- | ---- |
| Wahrscheinlichkeit P(X=x) | 0.34 | 0.18 | 0.45 | 0.04 | 0.05 |

:::

:::snippet{#aufgabe}
Berechne den Erwartungswert und die Standardabweichung der Zufallsgröße "Gewinn in Euro".
:::

:::collapsible{title="Musterlösung" id="b1c2d3e4"}
Der Erwartungswert \( E(X) \) wird berechnet als:

$$
E(X) = \sum (x_i \cdot P(x_i))
$$

$$
= (-1.5 \cdot 0.34) + (-0.5 \cdot 0.18) + (0.5 \cdot 0.45) + (4.5 \cdot 0.04) + (8.5 \cdot 0.05)
$$

$$
= -0.51 - 0.09 + 0.225 + 0.18 + 0.425 = 0.23
$$

Die Varianz $ Var(X) $ wird berechnet als:

$$
Var(X) = \sum (x_i^2 \cdot P(x_i)) - (E(X))^2
$$

$$
= [(-1.5)^2 \cdot 0.34] + [(-0.5)^2 \cdot 0.18] + [(0.5)^2 \cdot 0.45] + [(4.5)^2 \cdot 0.04] + [(8.5)^2 \cdot 0.05] - (0.23)^2
$$

$$
= 0.765 + 0.045 + 0.1125 + 0.81 + 3.6125 - 0.0529 = 4.2921 - 0.0529 = 4.2392
$$

Die Standardabweichung $ \sigma(X) $ ist die Quadratwurzel der Varianz:

$$
\sigma(X) = \sqrt{Var(X)} = \sqrt{4.2392} \approx 2.06
$$

:::

:::snippet{#aufgabe}
Bestimme den Einsatz so, dass die Lotterie fair ist.
:::

:::collapsible{title="Musterlösung" id="c3d4e5f6"}
Damit die Lotterie fair ist, muss der Einsatz dem Erwartungswert entsprechen. Der Einsatz sollte also 23 Cent betragen.
:::
