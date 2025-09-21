---
name: 🎯 Abschluss
lang: de
index: 3
---

# Das hast du gelernt

:::snippet{#merken}

**Parameterform einer Geraden**: $$ g: \vec{x} = \vec{a} + t \cdot \vec{v} $$
- $\vec{a}$: Ortsvektor (Stützvektor)
- $\vec{v}$: Richtungsvektor
- $t$: Parameter

:::

:::snippet{#merken}

**Gerade durch zwei Punkte**: Richtungsvektor ist $$ \vec{AB} = B - A $$

:::

:::snippet{#merken}

**Lagebeziehungen im Raum**:
- **Identisch**: gleiche Gerade
- **Parallel**: $\vec{v_1} = k \cdot \vec{v_2}$, kein gemeinsamer Punkt
- **Schneidend**: genau ein Schnittpunkt
- **Windschief**: kein Schnittpunkt, nicht parallel

:::

:::snippet{#merken}

**Punktprobe**: Ein Punkt P liegt auf der Geraden, wenn $\vec{OP} = \vec{a} + t \cdot \vec{v}$ für ein $t$ erfüllt ist.

:::

# Prüfe dich

## Aufgabe 1: Geradengleichung aufstellen

:::snippet{#aufgabe}

Stelle die Parameterform der Geraden durch die Punkte $$ A(1|3|-2) $$ und $$ B(4|1|1) $$ auf.

:::

:::collapsible{title="Musterlösung" id="b2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektor: $$ \vec{AB} = \begin{pmatrix}4-1\\1-3\\1-(-2)\end{pmatrix} = \begin{pmatrix}3\\-2\\3\end{pmatrix} $$

Geradengleichung: $$ g: \vec{x} = \begin{pmatrix}1\\3\\-2\end{pmatrix} + t \cdot \begin{pmatrix}3\\-2\\3\end{pmatrix} $$

:::

## Aufgabe 2: Punktprobe

:::snippet{#aufgabe}

Liegt der Punkt $$ P(7|-1|7) $$ auf der Geraden $$ g: \vec{x} = \begin{pmatrix}1\\3\\-2\end{pmatrix} + t \cdot \begin{pmatrix}3\\-2\\3\end{pmatrix} $$?

:::

:::collapsible{title="Musterlösung" id="c2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Ansatz: $$ \begin{pmatrix}7\\-1\\7\end{pmatrix} = \begin{pmatrix}1\\3\\-2\end{pmatrix} + t \cdot \begin{pmatrix}3\\-2\\3\end{pmatrix} $$

Komponentenweise:
- x: $7 = 1 + 3t \Rightarrow t = 2$
- y: $-1 = 3 - 2t \Rightarrow t = 2$
- z: $7 = -2 + 3t \Rightarrow t = 3$

Da sich verschiedene Werte für $t$ ergeben, liegt P **nicht** auf der Geraden.

:::

## Aufgabe 3: Lagebeziehung

:::snippet{#aufgabe}

Untersuche die Lagebeziehung der Geraden:
$$ g_1: \vec{x} = \begin{pmatrix}2\\1\\3\end{pmatrix} + r \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix} $$
$$ g_2: \vec{x} = \begin{pmatrix}1\\-1\\4\end{pmatrix} + s \cdot \begin{pmatrix}2\\4\\-2\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="d2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Richtungsvektoren vergleichen:
$$ \vec{v_2} = \begin{pmatrix}2\\4\\-2\end{pmatrix} = 2 \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix} = 2 \cdot \vec{v_1} $$

Die Richtungsvektoren sind linear abhängig → Geraden sind parallel.

Prüfen, ob identisch: Liegt $(1|-1|4)$ auf $g_1$?
$$ \begin{pmatrix}1\\-1\\4\end{pmatrix} = \begin{pmatrix}2\\1\\3\end{pmatrix} + r \cdot \begin{pmatrix}1\\2\\-1\end{pmatrix} $$

x: $1 = 2 + r \Rightarrow r = -1$
y: $-1 = 1 + 2r \Rightarrow r = -1$
z: $4 = 3 - r \Rightarrow r = -1$

Alle Gleichungen liefern $r = -1$ → Die Geraden sind **identisch**.

:::

## Aufgabe 4: Schnittpunkt

:::snippet{#aufgabe}

Berechne den Schnittpunkt der Geraden:
$$ h_1: \vec{x} = \begin{pmatrix}1\\2\\1\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$
$$ h_2: \vec{x} = \begin{pmatrix}3\\0\\7\end{pmatrix} + u \cdot \begin{pmatrix}1\\1\\0\end{pmatrix} $$

:::

:::collapsible{title="Musterlösung" id="e2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Gleichsetzen:
$$ \begin{pmatrix}1+2t\\2-t\\1+3t\end{pmatrix} = \begin{pmatrix}3+u\\u\\7\end{pmatrix} $$

Gleichungssystem:
1. $1 + 2t = 3 + u \Rightarrow 2t - u = 2$
2. $2 - t = u \Rightarrow -t - u = -2$
3. $1 + 3t = 7 \Rightarrow t = 2$

Aus (3): $t = 2$
Einsetzen in (2): $-2 - u = -2 \Rightarrow u = 0$

Probe mit (1): $2 \cdot 2 - 0 = 4 \neq 2$

Die Gleichungen sind **nicht erfüllbar** → Geraden sind windschief.

:::

## Aufgabe 5: Anwendung

:::snippet{#aufgabe}

Ein Satellit bewegt sich auf der Bahn $$ s: \vec{x} = \begin{pmatrix}400\\0\\200\end{pmatrix} + t \cdot \begin{pmatrix}5\\3\\-1\end{pmatrix} $$ (Koordinaten in km, $t$ in Minuten).

1. Wo befindet sich der Satellit zur Zeit $t = 10$ Minuten?
2. Zu welcher Zeit passiert der Satellit die Höhe $z = 150$ km?

:::

:::collapsible{title="Musterlösung" id="f2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. Position bei $t = 10$:
   $$ \vec{x} = \begin{pmatrix}400\\0\\200\end{pmatrix} + 10 \cdot \begin{pmatrix}5\\3\\-1\end{pmatrix} = \begin{pmatrix}400\\0\\200\end{pmatrix} + \begin{pmatrix}50\\30\\-10\end{pmatrix} = \begin{pmatrix}450\\30\\190\end{pmatrix} $$

2. Für $z = 150$:
   $150 = 200 + t \cdot (-1)$
   $150 = 200 - t$
   $t = 50$ Minuten

:::

## Aufgabe 6: Verschiedene Darstellungen

:::snippet{#aufgabe}

Zeige, dass die Geraden $$ g_1: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$ und $$ g_2: \vec{x} = \begin{pmatrix}3\\1\\3\end{pmatrix} + s \cdot \begin{pmatrix}4\\-2\\6\end{pmatrix} $$ identisch sind.

:::

:::collapsible{title="Musterlösung" id="02eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

1. Richtungsvektoren prüfen:
   $$ \vec{v_2} = \begin{pmatrix}4\\-2\\6\end{pmatrix} = 2 \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} = 2 \cdot \vec{v_1} $$
   
   Die Richtungsvektoren sind linear abhängig.

2. Punktprobe: Liegt $(3|1|3)$ auf $g_1$?
   $$ \begin{pmatrix}3\\1\\3\end{pmatrix} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\3\end{pmatrix} $$
   
   x: $3 = 1 + 2t \Rightarrow t = 1$
   y: $1 = 2 - t \Rightarrow t = 1$
   z: $3 = 0 + 3t \Rightarrow t = 1$
   
   Alle Gleichungen liefern $t = 1$ → Die Geraden sind identisch.

:::