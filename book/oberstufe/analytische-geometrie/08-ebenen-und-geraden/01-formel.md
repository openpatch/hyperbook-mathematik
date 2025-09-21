---
name: 🔖 Formel
lang: de
index: 1
---

# Formeln für Ebenen und Geraden

## Schnittpunkt Gerade-Ebene

:::snippet{#satz}

**Gerade**: $g: \vec{x} = \vec{a} + t \cdot \vec{v}$
**Ebene**: $E: ax + by + cz = d$

**Schnittpunkt**: Geradengleichung in Ebenengleichung einsetzen und nach $t$ auflösen.

:::

## Lagebeziehungen

:::snippet{#definition}

| Lagebeziehung | Bedingung | Anzahl Schnittpunkte |
|---------------|-----------|---------------------|
| **Gerade in Ebene** | $\vec{v} \cdot \vec{n} = 0$ und Stützpunkt in Ebene | unendlich viele |
| **Gerade schneidet Ebene** | $\vec{v} \cdot \vec{n} \neq 0$ | genau einer |
| **Gerade parallel zu Ebene** | $\vec{v} \cdot \vec{n} = 0$ und Stützpunkt nicht in Ebene | keiner |

:::

## Winkel Gerade-Ebene

:::snippet{#satz}

Der **Winkel** $\alpha$ zwischen Gerade (Richtungsvektor $\vec{v}$) und Ebene (Normalenvektor $\vec{n}$):

$\sin(\alpha) = \frac{|\vec{v} \cdot \vec{n}|}{|\vec{v}| \cdot |\vec{n}|}$

:::

## Abstand parallele Gerade-Ebene

:::snippet{#satz}

Wenn eine Gerade parallel zur Ebene ist, entspricht der Abstand dem Abstand eines beliebigen Geradenpunktes zur Ebene.

:::