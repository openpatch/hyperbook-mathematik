---
name: 💡 Einführung
lang: de
index: 0
---

# Geraden im Raum

## Von der Ebene in den Raum

In der Ebene hattest du bereits Geraden kennengelernt. Nun erweitern wir das Konzept auf den dreidimensionalen Raum.

![Gerade im Raum](https://via.placeholder.com/400x300/397b96/ffffff?text=Gerade+im+3D+Raum)

## Forschungsauftrag

Stelle dir vor, du willst den Flugweg eines Flugzeugs beschreiben, das vom Flughafen München nach Hamburg fliegt.

1. Welche Informationen benötigst du, um eine Gerade im Raum eindeutig zu beschreiben?

:::collapsible{title="Lösung" id="a2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Du benötigst:
- Einen Punkt auf der Geraden (z.B. Startpunkt)
- Eine Richtung (Richtungsvektor)

:::

2. Wie unterscheidet sich eine Gerade im Raum von einer Geraden in der Ebene?

:::collapsible{title="Lösung" id="b2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

- In der Ebene: Gerade wird durch Gleichung $y = mx + b$ oder $ax + by = c$ beschrieben
- Im Raum: Gerade wird durch Parameterform mit Ortsvektor und Richtungsvektor beschrieben

:::

3. Können sich zwei Geraden im Raum schneiden, ohne sich zu kreuzen?

:::collapsible{title="Lösung" id="c2eebc99-9c0b-4ef8-bb6d-6bb9bd380a11"}

Ja! Im Raum gibt es verschiedene Möglichkeiten:
- Geraden können sich schneiden (haben einen gemeinsamen Punkt)
- Geraden können parallel sein
- Geraden können windschief sein (haben keinen Schnittpunkt, sind aber nicht parallel)

:::

## Parameterform einer Geraden

:::snippet{#definition}

Eine **Gerade im Raum** wird durch die Parameterform beschrieben:

$$ g: \vec{x} = \vec{a} + t \cdot \vec{v} $$

wobei:
- $\vec{a}$ der **Ortsvektor** (Stützvektor) ist - ein bekannter Punkt auf der Gerade
- $\vec{v}$ der **Richtungsvektor** ist - gibt die Richtung der Geraden an
- $t$ der **Parameter** ist - kann alle reellen Zahlen annehmen

:::

### Beispiel

:::snippet{#beispiel}

Die Gerade durch die Punkte $$ A(1|2|3) $$ und $$ B(4|1|7) $$:

1. Ortsvektor: $$ \vec{a} = \begin{pmatrix}1\\2\\3\end{pmatrix} $$ (Punkt A)

2. Richtungsvektor: $$ \vec{v} = \vec{AB} = \begin{pmatrix}3\\-1\\4\end{pmatrix} $$

3. Geradengleichung: $$ g: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}3\\-1\\4\end{pmatrix} $$

:::

## Punkte auf einer Geraden

:::snippet{#satz}

Ein Punkt P liegt auf der Geraden $$ g: \vec{x} = \vec{a} + t \cdot \vec{v} $$, wenn es einen Parameterwert $t$ gibt, so dass:

$$ \vec{OP} = \vec{a} + t \cdot \vec{v} $$

:::

### Beispiel

:::snippet{#beispiel}

Gegeben: $$ g: \vec{x} = \begin{pmatrix}2\\1\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\2\\3\end{pmatrix} $$

Liegt der Punkt $$ P(4|5|6) $$ auf der Geraden?

Ansatz: $$ \begin{pmatrix}4\\5\\6\end{pmatrix} = \begin{pmatrix}2\\1\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\2\\3\end{pmatrix} $$

Auflösen ergibt: $t = 2$ → Ja, P liegt auf der Geraden.

:::

## Verschiedene Richtungsvektoren

:::snippet{#merken}

Eine Gerade kann unendlich viele verschiedene Darstellungen haben! Jeder Vektor, der parallel zum ursprünglichen Richtungsvektor ist, kann als Richtungsvektor verwendet werden.

:::

### Beispiel

:::snippet{#beispiel}

Diese Darstellungen beschreiben dieselbe Gerade:
- $$ g_1: \vec{x} = \begin{pmatrix}1\\2\\3\end{pmatrix} + t \cdot \begin{pmatrix}2\\-1\\1\end{pmatrix} $$
- $$ g_2: \vec{x} = \begin{pmatrix}3\\1\\4\end{pmatrix} + s \cdot \begin{pmatrix}4\\-2\\2\end{pmatrix} $$

Der Richtungsvektor in $g_2$ ist das Doppelte des Richtungsvektors in $g_1$.

:::