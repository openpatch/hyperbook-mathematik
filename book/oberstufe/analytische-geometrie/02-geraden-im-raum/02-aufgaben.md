---
name: ✏️ Aufgaben
lang: de
index: 2
---

# Aufgaben

## Geradengleichungen aufstellen

:::snippet{#aufgabe}
Stelle die Parameterform der Geraden auf, die durch die gegebenen Punkte verläuft.
:::

1. $$ A(1|2|3) $$ und $$ B(4|1|7) $$

:::collapsible{title="Lösung" id="12eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektor: $$ \vec{AB} = \begin{pmatrix}4-1\\1-2\\7-3\end{pmatrix} = \begin{pmatrix}3\\-1\\4\end{pmatrix} $$

Geradengleichung: $$ g: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}3\\-1\\4\end{pmatrix} $$

:::

2. $$ P(0|1|-2) $$ und $$ Q(3|4|1) $$

:::collapsible{title="Lösung" id="22eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektor: $$ \vec{PQ} = \begin{pmatrix}3-0\\4-1\\1-(-2)\end{pmatrix} = \begin{pmatrix}3\\3\\3\end{pmatrix} $$

Vereinfacht: $$ \vec{v} = \begin{pmatrix}1\\1\\1\end{pmatrix} $$

Geradengleichung: $$ g: \vec{x} = \begin{pmatrix}0\\1\\-2\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} $$

:::

3. $$ M(-2|0|5) $$ und $$ N(1|3|-1) $$

:::collapsible{title="Lösung" id="32eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektor: $$ \vec{MN} = \begin{pmatrix}1-(-2)\\3-0\\-1-5\end{pmatrix} = \begin{pmatrix}3\\3\\-6\end{pmatrix} $$

Vereinfacht: $$ \vec{v} = \begin{pmatrix}1\\1\\-2\end{pmatrix} $$

Geradengleichung: $$ g: \vec{x} = \begin{pmatrix}-2\\0\\5\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\-2\end{pmatrix} $$

:::

## Punktprobe

:::snippet{#aufgabe}
Prüfe, ob die gegebenen Punkte auf den Geraden liegen.
:::

### Aufgabe 1

Gerade: $$ g: \vec{x} = \begin{pmatrix}2\\1\\3\end{pmatrix} + t \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix} $$

Punkte: a) $$ P(3|3|2) $$, b) $$ Q(4|5|1) $$, c) $$ R(1|-1|4) $$

:::collapsible{title="Lösung" id="42eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

a) Für $$ P(3|3|2) $$:
   $$ \begin{pmatrix}3\\3\\2\end{pmatrix} = \begin{pmatrix}2\\1\\3\end{pmatrix} + t \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix} $$
   
   x: $3 = 2 + t \Rightarrow t = 1$
   y: $3 = 1 + 2t \Rightarrow t = 1$
   z: $2 = 3 - t \Rightarrow t = 1$
   
   **P liegt auf der Geraden** mit $t = 1$.

b) Für $$ Q(4|5|1) $$:
   x: $4 = 2 + t \Rightarrow t = 2$
   y: $5 = 1 + 2t \Rightarrow t = 2$
   z: $1 = 3 - t \Rightarrow t = 2$
   
   **Q liegt auf der Geraden** mit $t = 2$.

c) Für $$ R(1|-1|4) $$:
   x: $1 = 2 + t \Rightarrow t = -1$
   y: $-1 = 1 + 2t \Rightarrow t = -1$
   z: $4 = 3 - t \Rightarrow t = -1$
   
   **R liegt auf der Geraden** mit $t = -1$.

:::

## Lagebeziehungen von Geraden

:::snippet{#aufgabe}
Untersuche die Lagebeziehung der Geradenpaare.
:::

1. $$ g_1: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\3\end{pmatrix} $$
   $$ g_2: \vec{x} = \begin{pmatrix}3\\0\\1\end{pmatrix} + s \cdot \begin{pmatrix}4\\2\\6\end{pmatrix} $$

:::collapsible{title="Lösung" id="52eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren prüfen:
$$ \vec{v_2} = \begin{pmatrix}4\\2\\6\end{pmatrix} = 2 \cdot \begin{pmatrix}2\\1\\3\end{pmatrix} = 2 \cdot \vec{v_1} $$

Die Richtungsvektoren sind linear abhängig → **Geraden sind parallel**.

Um zu prüfen, ob sie identisch sind: Liegt der Punkt $(3|0|1)$ auf $g_1$?
$$ \begin{pmatrix}3\\0\\1\end{pmatrix} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\1\\3\end{pmatrix} $$

x: $3 = 1 + 2t \Rightarrow t = 1$
y: $0 = 2 + t \Rightarrow t = -2$

Widerspruch → **Geraden sind echt parallel**.

:::

2. $$ g_3: \vec{x} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} $$
   $$ g_4: \vec{x} = \begin{pmatrix}0\\1\\1\end{pmatrix} + s \cdot \begin{pmatrix}2\\0\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="62eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren sind nicht linear abhängig → Geraden sind nicht parallel.

Schnittpunkt suchen:
$$ \begin{pmatrix}1+t\\t\\2+t\end{pmatrix} = \begin{pmatrix}2s\\1\\1+s\end{pmatrix} $$

System:
- $1 + t = 2s$
- $t = 1$
- $2 + t = 1 + s$

Aus der zweiten Gleichung: $t = 1$
Einsetzen in die erste: $1 + 1 = 2s \Rightarrow s = 1$
Einsetzen in die dritte: $2 + 1 = 1 + 1$ ✓

**Geraden schneiden sich** im Punkt $$ S = \begin{pmatrix}2\\1\\3\end{pmatrix} $$.

:::

## Schnittpunkte berechnen

:::snippet{#aufgabe}
Berechne die Schnittpunkte der Geraden, falls sie existieren.
:::

$$ h_1: \vec{x} = \begin{pmatrix}2\\1\\4\end{pmatrix} + r \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix} $$
$$ h_2: \vec{x} = \begin{pmatrix}1\\3\\2\end{pmatrix} + u \cdot \begin{pmatrix}2\\-1\\1\end{pmatrix} $$

:::collapsible{title="Lösung" id="72eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Gleichsetzen:
$$ \begin{pmatrix}2+r\\1+2r\\4-r\end{pmatrix} = \begin{pmatrix}1+2u\\3-u\\2+u\end{pmatrix} $$

Gleichungssystem:
1. $2 + r = 1 + 2u \Rightarrow r - 2u = -1$
2. $1 + 2r = 3 - u \Rightarrow 2r + u = 2$
3. $4 - r = 2 + u \Rightarrow -r - u = -2 \Rightarrow r + u = 2$

Aus (2) und (3): $2r + u = 2$ und $r + u = 2$
Subtraktion: $r = 0$
Einsetzen: $u = 2$

Probe mit (1): $0 - 2 \cdot 2 = -4 \neq -1$

**Die Geraden sind windschief** (kein Schnittpunkt).

:::

## Anwendungsaufgaben

:::snippet{#aufgabe}
Löse die folgenden Sachaufgaben.
:::

### Flugzeugnavigation

Ein Flugzeug startet am Punkt $$ A(100|200|5) $$ (Koordinaten in km) und fliegt in Richtung des Vektors $$ \vec{v} = \begin{pmatrix}3\\1\\0{,}2\end{pmatrix} $$.

1. Stelle die Flugbahn als Gerade dar.
2. Wo befindet sich das Flugzeug nach 2 Stunden bei einer Geschwindigkeit von 500 km/h?

:::collapsible{title="Lösung" id="82eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. Flugbahn: $$ g: \vec{x} = \begin{pmatrix}100\\200\\5\end{pmatrix} + t \cdot \begin{pmatrix}3\\1\\0{,}2\end{pmatrix} $$

2. Nach 2 Stunden bei 500 km/h hat das Flugzeug 1000 km zurückgelegt.
   
   Einheitsvektor der Richtung:
   $$ |\vec{v}| = \sqrt{3^2 + 1^2 + 0{,}2^2} = \sqrt{9 + 1 + 0{,}04} = \sqrt{10{,}04} \approx 3{,}17 $$
   
   Parameter für 1000 km: $t = \frac{1000}{3{,}17} \approx 315{,}5$
   
   Position: $$ \begin{pmatrix}100\\200\\5\end{pmatrix} + 315{,}5 \cdot \begin{pmatrix}3\\1\\0{,}2\end{pmatrix} = \begin{pmatrix}1046{,}5\\515{,}5\\68{,}1\end{pmatrix} $$

:::