---
name: 💻 Taschenrechner
index: 99
lang: de
---

# TI-Nspire CX

Angenommen wir möchten den Schnitwinkel zwischen den Geraden

$$

f: \vec{x} = \begin{pmatrix}1\\1\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\0\\-1\end{pmatrix}

$$

und

$$

g: \vec{x} = \begin{pmatrix}5\\0\\-3\end{pmatrix} + t \cdot \begin{pmatrix}-4\\1\\3\end{pmatrix}

$$

berechnen.

Dazu können wir mit dem Taschenrechner wie folgt vorgehen.

1. Prüfen, ob sich die Geraden schneiden.
    1. Wir setzen die Geradengleichung gleich und lösen mit **linSolve** (Buch-Taste (a) oder auf Menü (b) und dann 3  2 drücken).
1. Wenn es ein Ergebnis gibt, dann
    1. berechnen wir den Winkel zwischen den Richtungsvektoren.
    1. Dazu gehen wir wie bei [Winkel zwischen Vektoren mit dem Taschenrechner berechnen](/oberstufe/analytische-geometrie/winkel-zwischen-vektoren/taschenrechner) vor.
1. Wenn es mehrere Ergebnisse gibt, dann
    1. sind wir fertig. Die Geraden sind identisch und der Schnittwinkel ist 0°.
1. Wenn es kein Ergebnis gibt, dann
    1. sind wir fertig. Es kann keinen Schnittwinkel geben.

:::alert{warn}
Denke daran, dass du einen der beiden Parameter umbenennst.
:::

![](/assets/oberstufe/analytische-geometrie/schnittwinkel-zwischen-geraden/ti-annotation.png)

## Ergebnis

$$

\begin{pmatrix}1\\1\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\0\\-1\end{pmatrix} = \begin{pmatrix}5\\0\\-3\end{pmatrix} + p \cdot \begin{pmatrix}-4\\1\\3\end{pmatrix}

$$

![](/assets/oberstufe/analytische-geometrie/schnittwinkel-zwischen-geraden/ti-ablauf.gif)

=> Die Geraden schneiden sich.

![](/assets/oberstufe/analytische-geometrie/schnittwinkel-zwischen-geraden/ti-ablauf2.gif)

=> Der Schnittwinkel beträgt ungefähr $164.745°$.
