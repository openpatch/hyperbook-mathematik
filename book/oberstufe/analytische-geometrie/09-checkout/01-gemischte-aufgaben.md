---
name: ✏️ Gemischte Aufgaben
index: 1
lang: de
---

# ✏️ Gemischte Aufgaben

## Aufgaben ohne Hilfsmittel

### Aufgabe 1: Vektoroperationen

Gegeben sind die Vektoren $$ \vec{a} = \begin{pmatrix}2\\-1\\3\end{pmatrix} $$ und $$ \vec{b} = \begin{pmatrix}1\\2\\-1\end{pmatrix} $$.

a) Berechne $$ \vec{a} + \vec{b} $$ und $$ \vec{a} - \vec{b} $$.

b) Bestimme $$ |\vec{a}| $$ und $$ |\vec{b}| $$.

c) Berechne das Skalarprodukt $$ \vec{a} \cdot \vec{b} $$.

:::collapsible{title="Musterlösung" id="f1e2d3c4-5b6a-7c8d-9e0f-123456789abc"}

a) Vektoraddition und -subtraktion:

$$
\begin{align*}
\vec{a} + \vec{b} &= \begin{pmatrix}2\\-1\\3\end{pmatrix} + \begin{pmatrix}1\\2\\-1\end{pmatrix} = \begin{pmatrix}3\\1\\2\end{pmatrix} \\
\vec{a} - \vec{b} &= \begin{pmatrix}2\\-1\\3\end{pmatrix} - \begin{pmatrix}1\\2\\-1\end{pmatrix} = \begin{pmatrix}1\\-3\\4\end{pmatrix}
\end{align*}
$$

b) Beträge der Vektoren:

$$
\begin{align*}
|\vec{a}| &= \sqrt{2^2 + (-1)^2 + 3^2} = \sqrt{4 + 1 + 9} = \sqrt{14} \\
|\vec{b}| &= \sqrt{1^2 + 2^2 + (-1)^2} = \sqrt{1 + 4 + 1} = \sqrt{6}
\end{align*}
$$

c) Skalarprodukt:
$$ \vec{a} \cdot \vec{b} = 2 \cdot 1 + (-1) \cdot 2 + 3 \cdot (-1) = 2 - 2 - 3 = -3 $$

:::

### Aufgabe 2: Winkel zwischen Vektoren

Gegeben sind $$ \vec{u} = \begin{pmatrix}3\\0\\4\end{pmatrix} $$ und $$ \vec{v} = \begin{pmatrix}0\\5\\0\end{pmatrix} $$.

Berechne den Winkel $$ \alpha $$ zwischen den Vektoren.

:::collapsible{title="Musterlösung" id="a2b3c4d5-6e7f-8901-2345-6789abcdef01"}

Formel für den Winkel zwischen Vektoren:
$$ \cos(\alpha) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} $$

Berechnung der benötigten Werte:

$$
\begin{align*}
\vec{u} \cdot \vec{v} &= 3 \cdot 0 + 0 \cdot 5 + 4 \cdot 0 = 0 \\
|\vec{u}| &= \sqrt{3^2 + 0^2 + 4^2} = \sqrt{9 + 16} = 5 \\
|\vec{v}| &= \sqrt{0^2 + 5^2 + 0^2} = 5
\end{align*}
$$

Einsetzen:
$$ \cos(\alpha) = \frac{0}{5 \cdot 5} = 0 $$

Daher ist $$ \alpha = 90° $$. Die Vektoren stehen senkrecht aufeinander.

:::

### Aufgabe 3: Geraden im Raum

Gegeben ist die Gerade $$ g: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$.

a) Liegt der Punkt $$ P(5|0|6) $$ auf der Geraden?

b) Bestimme den Punkt auf der Geraden, der die $x$-Koordinate $x = 7$ hat.

:::collapsible{title="Musterlösung" id="b3c4d5e6-7f89-0123-4567-89abcdef0123"}

a) Punktprobe für $$ P(5|0|6) $$:

Ansatz: $$ \begin{pmatrix}5\\0\\6\end{pmatrix} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$

Komponentenweise:

$$
\begin{align*}
x: \quad 5 &= 1 + 2t \quad \Rightarrow \quad t = 2 \\
y: \quad 0 &= 2 - t \quad \Rightarrow \quad t = 2 \\
z: \quad 6 &= 0 + 3t \quad \Rightarrow \quad t = 2
\end{align*}
$$

Alle Gleichungen ergeben $t = 2$, daher liegt $P$ auf der Geraden.

b) Punkt mit $x = 7$:

Aus $7 = 1 + 2t$ folgt $t = 3$.

Der gesuchte Punkt ist:
$$ \begin{pmatrix}7\\2-3\\0+9\end{pmatrix} = \begin{pmatrix}7\\-1\\9\end{pmatrix} $$

:::

### Aufgabe 4: Ebenen in Parameterform

Gegeben ist die Ebene $$ E: \vec{x} = \begin{pmatrix}2\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\1\end{pmatrix} $$.

Liegt der Punkt $$ Q(3|2|2) $$ auf der Ebene?

:::collapsible{title="Musterlösung" id="c4d5e6f7-8901-2345-6789-abcdef012345"}

Ansatz: $$ \begin{pmatrix}3\\2\\2\end{pmatrix} = \begin{pmatrix}2\\0\\1\end{pmatrix} + r \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\1\\1\end{pmatrix} $$

Gleichungssystem:

$$
\begin{align*}
x: \quad 3 &= 2 + r \quad \Rightarrow \quad r = 1 \\
y: \quad 2 &= 0 + r + s \quad \Rightarrow \quad 1 + s = 2 \quad \Rightarrow \quad s = 1 \\
z: \quad 2 &= 1 + s \quad \Rightarrow \quad s = 1
\end{align*}
$$

Das System ist lösbar mit $r = 1, s = 1$. Der Punkt $Q$ liegt auf der Ebene.

:::

### Aufgabe 5: Dreieck

Gegeben sind die Punkte $$ A(1|2|3) $$, $$ B(4|0|1) $$ und $$ C(2|5|4) $$.

a) Überprüfe, ob die drei Punkte eine gleichschenkliges oder rechteckiges Dreieck bilden.

b) Bestimme die Seitenlängen des Dreiecks.

c) Stelle eine Ebene in Parameterform auf, in der das Dreieck liegt.

d) Gib einen weiteren Punkt an der in der Ebene liegt.

:::collapsible{title="Musterlösung" id="c4d5e6f7-8901-2345-6789-abasdfkjsadf"}

a) Um zu überprüfen, ob das Dreieck gleichschenklig oder rechtwinklig ist, berechnen wir die Seitenlängen:

$$

\vec{AB} = \begin{pmatrix}4-1\\0-2\\1-3\end{pmatrix} = \begin{pmatrix}3\\-2\\-2\end{pmatrix}, \quad |\vec{AB}| = \sqrt{3^2 + (-2)^2 + (-2)^2} = \sqrt{9 + 4 + 4} = \sqrt{17} \\
\vec{AC} = \begin{pmatrix}2-1\\5-2\\4-3\end{pmatrix} = \begin{pmatrix}1\\3\\1\end{pmatrix}, \quad |\vec{AC}| = \sqrt{1^2 + 3^2 + 1^2} = \sqrt{1 + 9 + 1} = \sqrt{11} \\
\vec{BC} = \begin{pmatrix}2-4\\5-0\\4-1\end{pmatrix} = \begin{pmatrix}-2\\5\\3\end{pmatrix}, \quad |\vec{BC}| = \sqrt{(-2)^2 + 5^2 + 3^2} = \sqrt{4 + 25 + 9} = \sqrt{38}

$$

Da nicht zwei Seiten gleich lang sind, ist das Dreieck nicht gleichsenkling.

Um zu prüfen, ob es rechtwinklig ist, berechnen wir die Skalarprodukte:

$$

\vec{AB} \cdot \vec{AC} = 3 \cdot 1 + (-2) \cdot 3 + (-2) \cdot 1 = 3 - 6 - 2 = -5 \\

\vec{AB} \cdot \vec{BC} = 3 \cdot (-2) + (-2) \cdot 5 + (-2) \cdot 3 = -6 - 10 - 6 = -22 \\

\vec{AC} \cdot \vec{BC} = 1 \cdot (-2) + 3 \cdot 5 + 1 \cdot 3 = -2 + 15 + 3 = 16

$$

Da keine der Skalarprodukte null ist, ist das Dreieck nicht rechtwinklig.

b) Die Seitenlängen wurden bereits in Teil a) berechnet.

c) Eine Ebene, in der das Dreieck liegt, kann mit dem Stützvektor $$ \vec{OA} = \begin{pmatrix}1\\2\\3\end{pmatrix} $$ und den Spannvektoren $$ \vec{AB} $$ und $$ \vec{AC} $$ aufgestellt werden:

$$

E: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + r \cdot \begin{pmatrix}3\\-2\\-2\end{pmatrix} + s \cdot \begin{pmatrix}1\\3\\1\end{pmatrix}

$$

d) Ein weiterer Punkt in der Ebene kann durch Wahl von $r = 1$ und $s = 2$ gefunden werden:

$$

\vec{OP} = \begin{pmatrix}1\\2\\3\end{pmatrix} + 1 \cdot \begin{pmatrix}3\\-2\\-2\end{pmatrix} + 2 \cdot \begin{pmatrix}1\\3\\1\end{pmatrix} = \begin{pmatrix}1 + 3 + 2\\2 - 2 + 6\\3 - 2 + 2\end{pmatrix} = \begin{pmatrix}6\\6\\3\end{pmatrix}

$$

Damit liegt der Punkt $$ P(6|6|3) $$ in der Ebene.

:::


## Aufgaben mit Hilfsmitteln

### Aufgabe 1: Architektur-Anwendung

Ein Architekt plant ein Dach einer großen Terrasse mit einer geneigten Ebene. Die Eckpunkte des rechteckigen Daches sind:
- $$ A(0|0|3) $$
- $$ B(10|0|3) $$  
- $$ C(10|8|5) $$
- $$ D(0|8|5) $$

:::geogebra{perspective="T" height=400 width=700 coordsystem="0,12,0,12,0,8"}
A(0|0|3)
B(10|0|3)
C(10|8|5)
D(0|8|5)
E(0|0|0)
F(10|0|0)
G(10|8|0)
H(0|8|0)
Polygon(A,B,C, D)
Segment(C,G)
Segment(D,H)
Segment(F,B)
Segment(A,E)
:::

a) Weiße nach, dass alle Punkte in einer Ebene liegen, und stelle die Ebene in Parameterform auf.

:::collapsible{title="Musterlösung" id="e6f7g8h9-0123-4567-8901-cdef01234567-a"}

Dachebene mit Stützvektor $\vec{OA} = \begin{pmatrix}0\\0\\3\end{pmatrix}$ und Spannvektoren:

$$
\begin{align*}
\vec{AB} &= \begin{pmatrix}10\\0\\0\end{pmatrix} \\
\vec{AD} &= \begin{pmatrix}0\\8\\2\end{pmatrix}
\end{align*}
$$

Dachebene: $$ E: \vec{x} = \begin{pmatrix}0\\0\\3\end{pmatrix} + r \cdot \begin{pmatrix}10\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\8\\2\end{pmatrix} $$

Wir müssen noch zeigen, dass Punkt C in der Ebene liegt:

$$

\vec{OC} = \begin{pmatrix}10\\8\\5\end{pmatrix} = \begin{pmatrix}0\\0\\3\end{pmatrix} + 1 \cdot \begin{pmatrix}10\\0\\0\end{pmatrix} + 1 \cdot \begin{pmatrix}0\\8\\2\end{pmatrix}

$$

Damit liegt Punkt C in der Ebene.

:::

b) Die Mitte des Daches soll durch einen Balken verstärkt werden. Berechne die Koordinaten des Mittelpunktes $$ M $$ des Daches und dessen Höhe vom Boden ($x_1x_2$-Ebene).

:::collapsible{title="Musterlösung" id="e6f7g8h9-0123-4567-8901-cdef01234567-b"}

Mittelpunkt $$ M $$ des Daches:

$$

\vec{OM} = \frac{1}{2}(\vec{OA} + \vec{OC}) = \frac{1}{2}\left(\begin{pmatrix}0\\0\\3\end{pmatrix} + \begin{pmatrix}10\\8\\5\end{pmatrix}\right) = \begin{pmatrix}5\\4\\4\end{pmatrix}

$$

Der Mittelpunkt $$ M $$ hat die Koordinaten $$ (5|4|4) $$ und die Höhe vom Boden beträgt 4 m.

:::


Zur Verschönerung sollen bunte Dachplatte mit den Maßen 90 cm x 60 cm auf das Dach gelegt werden.


c) Berechne die Anzahl der Platten, die benötigt werden, um das gesamte Dach zu bedecken.

:::collapsible{title="Musterlösung" id="e6f7g8h9-0123-4567-8901-cdef01234567-c"}

In die Breite können 11 Platten (10 m / 0,9 m = 11,11) und in die Tiefe 13 Platten (8 m / 0,6 m = 13,33) gelegt werden. Insgesamt werden also $$ 11 \cdot 13 = 143 $$ Platten benötigt.

Werden die Platten um 90° gedreht, passen 8 Platten in die Breite (10 m / 0,6 m = 16,66) und 17 Platten in die Tiefe (8 m / 0,9 m = 8,88). Insgesamt werden also $$ 8 \cdot 17 = 136 $$ Platten benötigt.

Also können maximal 143 Platten verlegt werden.

:::

Die Baugenehmigung für das Dach schreibt vor, dass es maximal 30° geneigt sein darf. In diesem Sachzusamenhang wird folgende Rechnung durchgeführt:

$$

(1) \vec{u} = \vec{AD} = \begin{pmatrix}0\\8\\2\end{pmatrix} \ \ \ \vec{v} = \begin{pmatrix}0\\8\\0\end{pmatrix} \\

(2) \cos{\alpha} = \frac{\begin{pmatrix}0\\8\\2\end{pmatrix} \cdot \begin{pmatrix}0\\8\\0\end{pmatrix}}{\left\lvert\begin{pmatrix}0\\8\\2\end{pmatrix}\right\rvert \cdot \left\lvert\begin{pmatrix}0\\8\\0\end{pmatrix}\right\rvert} \\

$$

d) Erläutere den Ansatz in Zeile (1) und den Rechenschritt in Zeile (2). Berechne anschließend den Winkel $\alpha$ und deute das Ergebnis im Sachzusammenhang.

:::collapsible{title="Musterlösung" id="e6f7g8h9-0123-4567-8901-cdef01234567-d"}

In Zeile (1) wird der Richtungsvektor $$ \vec{u} $$ der geneigten Kante $$ AD $$ und der Richtungsvektor $$ \vec{v} $$ der horizontalen Kante $$ AH $$ bestimmt. In Zeile (2) wird der Kosinus des Winkels $$ \alpha $$ zwischen den beiden Vektoren mit Hilfe des Skalarprodukts berechnet.

Den Winkel $$ \alpha $$ berechnen:

$$

\begin{align*}

\vec{u} \cdot \vec{v} &= 0 \cdot 0 + 8 \cdot 8 + 2 \cdot 0 = 64 \\

\left\lvert\vec{u}\right\rvert &= \sqrt{0^2 + 8^2 + 2^2} = \sqrt{68} \\

\left\lvert\vec{v}\right\rvert &= \sqrt{0^2 + 8^2 + 0^2} = 8 \\

\alpha &= \cos^{-1}\left(\frac{64}{\sqrt{68} \cdot 8}\right) = \cos^{-1}\left(\frac{64}{8\sqrt{68}}\right) = \cos^{-1}\left(\frac{8}{\sqrt{68}}\right) \approx 14,04°

\end{align*}

$$

Das Dach ist mit einem Winkel von ca. 14,04° geneigt, was innerhalb der zulässigen Neigung von 30° liegt.


:::

e) Bestimme für die Punkte D und C neue Koordinaten, sodass das Dach genau 30° geneigt ist. Gib die neuen Koordinaten an.

:::collapsible{title="Musterlösung" id="e6f7g8h9-0123-4567-8901-cdef01234567-e"}

Um die Neigung auf genau 30° zu ändern, muss der Höhenunterschied zwischen den Punkten D und A angepasst werden. Dazu stellen wir einen Vektore mit einer fehlenden Höhe $$ h $$ auf:

$$

\vec{AD_{neu}} = \begin{pmatrix}0\\8\\h\end{pmatrix}

$$

Dieser muss den Winkel von 30° mit dem Vektor $$ \begin{pmatrix}0\\8\\3\end{pmatrix} $$ bilden. Wir verwenden die gleiche Formel wie zuvor:

$$


\begin{align*}

\cos{30°} &= \frac{\vec{AD_{neu}} \cdot \begin{pmatrix}0\\8\\0\end{pmatrix}}{|\vec{AD_{neu}}| \cdot |\begin{pmatrix}0\\8\\0\end{pmatrix}|}
\frac{\sqrt{3}}{2} &= \frac{0 \cdot 0 + 8 \cdot 8 + h \cdot 0}{\sqrt{0^2 + 8^2 + h^2} \cdot 8} \\
\frac{\sqrt{3}}{2} &= \frac{64}{8\sqrt{64 + h^2}} &| \cdot \sqrt{64 + h^2}\\
\sqrt{3} \cdot \sqrt{64 + h^2} &= 16 \\
\sqrt{64 + h^2} &= \frac{16}{\sqrt{3}} &| (...)^2 \\
64 + h^2 &= \frac{256}{3} \\
h^2 &= \frac{64}{3} &| \sqrt{...} \\
h &= \pm \sqrt{\frac{64}{3}} = \pm \frac{8}{\sqrt{3}} \approx \pm 4,62

\end{align*}

$$

Da das Dach höher als Punkt A sein muss, wählen wir den positiven Wert. Die neuen Koordinaten von D und G sind somit:

$$ D_{neu}(0|8|4,62) $$
$$ G_{neu}(10|8|4,62) $$

:::

### Aufgabe 2: Schnittwinkel und Lagebeziehungen

Gegeben sind die Geraden:
- $$ g_1: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\-1\end{pmatrix} $$
- $$ g_2: \vec{x} = \begin{pmatrix}0\\1\\1\end{pmatrix} + s \cdot \begin{pmatrix}1\\-1\\1\end{pmatrix} $$

a) Bestimme die Lagebeziehung der Geraden.

b) Falls sie sich schneiden, berechne den Schnittpunkt.

c) Berechne den Schnittwinkel der Geraden.

:::collapsible{title="Musterlösung" id="f7g8h9i0-1234-5678-9012-def012345678"}

a) Lagebeziehung prüfen:

Richtungsvektoren: $$ \vec{v_1} = \begin{pmatrix}2\\1\\-1\end{pmatrix} $$, $$ \vec{v_2} = \begin{pmatrix}1\\-1\\1\end{pmatrix} $$

Da $\vec{v_1}$ und $\vec{v_2}$ nicht kollinear sind, sind die Geraden nicht parallel.

Schnittpunkt suchen:
$$ \begin{pmatrix}1+2t\\t\\2-t\end{pmatrix} = \begin{pmatrix}s\\1-s\\1+s\end{pmatrix} $$

Gleichungssystem:

$$
\begin{align*}
1 + 2t &= s \\
t &= 1 - s \\
2 - t &= 1 + s
\end{align*}
$$

Aus (2): $s = 1 - t$, einsetzen in (1): $1 + 2t = 1 - t \Rightarrow t = 0$
Also $s = 1$.

Prüfung in (3): $2 - 0 = 1 + 1 = 2$ ✓

Die Geraden schneiden sich.

b) Schnittpunkt: $$ S = \begin{pmatrix}1\\0\\2\end{pmatrix} $$

c) Schnittwinkel:
$$ \cos(\alpha) = \frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|} $$

$$
\begin{align*}
\vec{v_1} \cdot \vec{v_2} &= 2 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 = 0 \\
|\vec{v_1}| &= \sqrt{4 + 1 + 1} = \sqrt{6} \\
|\vec{v_2}| &= \sqrt{1 + 1 + 1} = \sqrt{3}
\end{align*}
$$

$$ \cos(\alpha) = \frac{0}{\sqrt{6} \cdot \sqrt{3}} = 0 $$

Der Schnittwinkel beträgt $\alpha = 90°$.

:::
