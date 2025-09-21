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
\begin{align*}
\vec{a} + \vec{b} &= \begin{pmatrix}2\\-1\\3\end{pmatrix} + \begin{pmatrix}1\\2\\-1\end{pmatrix} = \begin{pmatrix}3\\1\\2\end{pmatrix} \\
\vec{a} - \vec{b} &= \begin{pmatrix}2\\-1\\3\end{pmatrix} - \begin{pmatrix}1\\2\\-1\end{pmatrix} = \begin{pmatrix}1\\-3\\4\end{pmatrix}
\end{align*}

b) Beträge der Vektoren:
\begin{align*}
|\vec{a}| &= \sqrt{2^2 + (-1)^2 + 3^2} = \sqrt{4 + 1 + 9} = \sqrt{14} \\
|\vec{b}| &= \sqrt{1^2 + 2^2 + (-1)^2} = \sqrt{1 + 4 + 1} = \sqrt{6}
\end{align*}

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
\begin{align*}
\vec{u} \cdot \vec{v} &= 3 \cdot 0 + 0 \cdot 5 + 4 \cdot 0 = 0 \\
|\vec{u}| &= \sqrt{3^2 + 0^2 + 4^2} = \sqrt{9 + 16} = 5 \\
|\vec{v}| &= \sqrt{0^2 + 5^2 + 0^2} = 5
\end{align*}

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
\begin{align*}
x: \quad 5 &= 1 + 2t \quad \Rightarrow \quad t = 2 \\
y: \quad 0 &= 2 - t \quad \Rightarrow \quad t = 2 \\
z: \quad 6 &= 0 + 3t \quad \Rightarrow \quad t = 2
\end{align*}

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
\begin{align*}
x: \quad 3 &= 2 + r \quad \Rightarrow \quad r = 1 \\
y: \quad 2 &= 0 + r + s \quad \Rightarrow \quad 1 + s = 2 \quad \Rightarrow \quad s = 1 \\
z: \quad 2 &= 1 + s \quad \Rightarrow \quad s = 1
\end{align*}

Das System ist lösbar mit $r = 1, s = 1$. Der Punkt $Q$ liegt auf der Ebene.

:::

## Aufgaben mit Hilfsmitteln

### Aufgabe 1: Navigation im Raum

Ein Flugzeug startet am Punkt $$ A(0|0|0) $$ und fliegt entlang der Geraden 
$$ g: \vec{x} = t \cdot \begin{pmatrix}100\\50\\10\end{pmatrix} $$ (Koordinaten in km).

Ein Kontrollturm befindet sich am Punkt $$ T(200|150|0) $$.

a) Bestimme den Punkt auf der Flugroute, der dem Kontrollturm am nächsten liegt.

b) Berechne die minimale Entfernung zwischen Flugzeug und Kontrollturm.

:::collapsible{title="Musterlösung" id="d5e6f7g8-9012-3456-7890-bcdef0123456"}

a) Für den Punkt $$ P(t) = t \cdot \begin{pmatrix}100\\50\\10\end{pmatrix} $$ auf der Flugroute ist der Abstand zum Turm:

$$ \vec{TP}(t) = \begin{pmatrix}100t\\50t\\10t\end{pmatrix} - \begin{pmatrix}200\\150\\0\end{pmatrix} = \begin{pmatrix}100t-200\\50t-150\\10t\end{pmatrix} $$

Für minimalen Abstand muss gelten: $$ \vec{TP}(t) \perp \vec{v} $$, wobei $$ \vec{v} = \begin{pmatrix}100\\50\\10\end{pmatrix} $$ der Richtungsvektor ist.

$$ \vec{TP}(t) \cdot \vec{v} = 0 $$

$$ (100t-200) \cdot 100 + (50t-150) \cdot 50 + 10t \cdot 10 = 0 $$

$$ 10000t - 20000 + 2500t - 7500 + 100t = 0 $$

$$ 12600t = 27500 $$

$$ t = \frac{27500}{12600} = \frac{275}{126} \approx 2,18 $$

Der nächste Punkt ist: $$ P \approx \begin{pmatrix}218\\109\\21,8\end{pmatrix} $$

b) Die minimale Entfernung ist:
$$ |\vec{TP}| = \sqrt{(218-200)^2 + (109-150)^2 + (21,8-0)^2} \approx 48,5 \text{ km} $$

:::

### Aufgabe 2: Architektur-Anwendung

Ein Architekt plant ein Dach mit einer geneigten Ebene. Die Eckpunkte des rechteckigen Daches sind:
- $$ A(0|0|3) $$
- $$ B(10|0|3) $$  
- $$ C(10|8|5) $$
- $$ D(0|8|5) $$

a) Bestimme die Gleichung der Dachebene in Parameterform.

b) Ein Schornstein soll am Punkt $$ S(5|4|h) $$ durch das Dach geführt werden. Berechne die Höhe $h$, bei der der Schornstein das Dach durchstößt.

:::collapsible{title="Musterlösung" id="e6f7g8h9-0123-4567-8901-cdef01234567"}

a) Dachebene mit Stützvektor $\vec{OA} = \begin{pmatrix}0\\0\\3\end{pmatrix}$ und Spannvektoren:
\begin{align*}
\vec{AB} &= \begin{pmatrix}10\\0\\0\end{pmatrix} \\
\vec{AD} &= \begin{pmatrix}0\\8\\2\end{pmatrix}
\end{align*}

Dachebene: $$ E: \vec{x} = \begin{pmatrix}0\\0\\3\end{pmatrix} + r \cdot \begin{pmatrix}10\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\8\\2\end{pmatrix} $$

b) Für den Schornstein am Punkt $$ S(5|4|h) $$:

$$ \begin{pmatrix}5\\4\\h\end{pmatrix} = \begin{pmatrix}0\\0\\3\end{pmatrix} + r \cdot \begin{pmatrix}10\\0\\0\end{pmatrix} + s \cdot \begin{pmatrix}0\\8\\2\end{pmatrix} $$

Gleichungssystem:
\begin{align*}
x: \quad 5 &= 0 + 10r \quad \Rightarrow \quad r = 0{,}5 \\
y: \quad 4 &= 0 + 8s \quad \Rightarrow \quad s = 0{,}5 \\
z: \quad h &= 3 + 2s = 3 + 1 = 4
\end{align*}

Der Schornstein durchstößt das Dach bei $h = 4$ m.

:::

### Aufgabe 3: Schnittwinkel und Lagebeziehungen

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
\begin{align*}
1 + 2t &= s \\
t &= 1 - s \\
2 - t &= 1 + s
\end{align*}

Aus (2): $s = 1 - t$, einsetzen in (1): $1 + 2t = 1 - t \Rightarrow t = 0$
Also $s = 1$.

Prüfung in (3): $2 - 0 = 1 + 1 = 2$ ✓

Die Geraden schneiden sich.

b) Schnittpunkt: $$ S = \begin{pmatrix}1\\0\\2\end{pmatrix} $$

c) Schnittwinkel:
$$ \cos(\alpha) = \frac{|\vec{v_1} \cdot \vec{v_2}|}{|\vec{v_1}| \cdot |\vec{v_2}|} $$

\begin{align*}
\vec{v_1} \cdot \vec{v_2} &= 2 \cdot 1 + 1 \cdot (-1) + (-1) \cdot 1 = 0 \\
|\vec{v_1}| &= \sqrt{4 + 1 + 1} = \sqrt{6} \\
|\vec{v_2}| &= \sqrt{1 + 1 + 1} = \sqrt{3}
\end{align*}

$$ \cos(\alpha) = \frac{0}{\sqrt{6} \cdot \sqrt{3}} = 0 $$

Der Schnittwinkel beträgt $\alpha = 90°$.

:::