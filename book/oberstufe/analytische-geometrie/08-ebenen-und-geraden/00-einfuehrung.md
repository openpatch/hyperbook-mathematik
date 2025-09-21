---
name: 💡 Einführung
lang: de
index: 0
---

# Ebenen und Geraden

## Lagebeziehungen zwischen Ebenen und Geraden

Nachdem du Ebenen und Geraden einzeln kennengelernt hast, untersuchst du nun, wie sie zueinander im Raum liegen können.

## Mögliche Lagebeziehungen

:::snippet{#definition}

Eine Gerade kann zu einer Ebene folgende Lagebeziehungen haben:

1. **Gerade liegt in der Ebene** (unendlich viele Schnittpunkte)
2. **Gerade schneidet die Ebene** (genau ein Schnittpunkt)  
3. **Gerade ist parallel zur Ebene** (kein Schnittpunkt)

:::

## Schnittpunkt berechnen

:::snippet{#satz}

**Algorithmus** für Gerade $g: \vec{x} = \vec{a} + t \cdot \vec{v}$ und Ebene $E: ax + by + cz = d$:

1. Geradengleichung in Ebenengleichung einsetzen
2. Nach Parameter $t$ auflösen
3. $t$ in Geradengleichung einsetzen → Schnittpunkt

:::

### Beispiel

:::snippet{#beispiel}

Gerade: $g: \vec{x} = \begin{pmatrix}1\\2\\0\end{pmatrix} + t \cdot \begin{pmatrix}1\\-1\\2\end{pmatrix}$

Ebene: $E: x + y + z = 6$

**Einsetzen**: $(1+t) + (2-t) + (0+2t) = 6$
**Vereinfachen**: $3 + 2t = 6 \Rightarrow t = 1{,}5$
**Schnittpunkt**: $S = \begin{pmatrix}2{,}5\\0{,}5\\3\end{pmatrix}$

:::

## Parallelität prüfen

:::snippet{#satz}

Eine Gerade ist **parallel** zur Ebene, wenn der Richtungsvektor der Geraden senkrecht zum Normalenvektor der Ebene steht:

$\vec{v} \cdot \vec{n} = 0$

:::

## Winkel zwischen Gerade und Ebene

:::snippet{#definition}

Der **Winkel** zwischen einer Geraden und einer Ebene ist der Winkel zwischen der Geraden und ihrer Projektion auf die Ebene.

$\sin(\alpha) = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{v}| \cdot |\vec{n}|}$

:::