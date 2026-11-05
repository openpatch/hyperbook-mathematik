---
name: Rechentricks
index: 4
lang: de
---

# Rechentricks mit binomischen Formeln

:::alert{info}

**Darum geht's:** Mit den binomischen Formeln rechnest du Aufgaben wie $49^2$ oder $21 \cdot 19$ im Kopf – schneller als mit dem Taschenrechner.

:::

## Quadrate von Zahlen nahe einer Zehnerzahl

Zerlege die Zahl in eine **runde Zahl** und einen kleinen Rest.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 560 260" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Quadrat mit Seite 20 plus 1: 400 plus zweimal 20 plus 1 gleich 441">
<rect x="30" y="20" width="200" height="200" fill="#397b96" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<rect x="230" y="20" width="20" height="200" fill="#9A6B2F" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
<rect x="30" y="220" width="200" height="20" fill="#9A6B2F" fill-opacity="0.65" stroke="currentColor" stroke-width="1.5"/>
<rect x="230" y="220" width="20" height="20" fill="#bb0a21" fill-opacity="0.75" stroke="currentColor" stroke-width="1.5"/>
<text x="130" y="126" font-size="22" text-anchor="middle" fill="currentColor">20² = 400</text>
<text x="130" y="256" font-size="13" text-anchor="middle" fill="currentColor">20</text>
<text x="18" y="126" font-size="13" text-anchor="middle" fill="currentColor">20</text>
<g font-size="17" fill="currentColor">
<text x="290" y="60">21² = (20 + 1)²</text>
<text x="290" y="100" fill="#397b96">= 20²</text>
<text x="290" y="130" fill="#9A6B2F">+ 2 · 20 · 1</text>
<text x="290" y="160" fill="#bb0a21">+ 1²</text>
<text x="290" y="200">= 400 + 40 + 1</text>
<text x="290" y="230" font-weight="bold">= 441</text>
</g>
</svg>
</figure>

:::snippet{#beispiel}

$$
\begin{aligned}
49^2 &= (50 - 1)^2 = 2500 - 100 + 1 = 2401 \\
61^2 &= (60 + 1)^2 = 3600 + 120 + 1 = 3721
\end{aligned}
$$

:::

:::snippet{#aufgabe}

**1** Rechne im Kopf.

:::

:::multievent

| Aufgabe | Zerlegung | Ergebnis |
| --- | --- | --- |
| $41^2$ | $(40 + 1)^2 = 1600 +$ {z{80}} $+ 1$ | {z{1681}} |
| $39^2$ | $(40 - 1)^2 = 1600 -$ {z{80}} $+ 1$ | {z{1521}} |
| $72^2$ | $(70 + 2)^2 = 4900 +$ {z{280}} $+$ {z{4}} | {z{5184}} |
| $99^2$ | $(100 - 1)^2 = 10000 -$ {z{200}} $+ 1$ | {z{9801}} |
| $1{,}1^2$ | $(1 + 0{,}1)^2 = 1 +$ {z{0,2}} $+ 0{,}01$ | {z{1,21}} |

:::

## Produkte mit der dritten Formel

Liegen zwei Zahlen **gleich weit** von einer runden Zahl entfernt, hilft die dritte Formel.

:::snippet{#beispiel}

$$21 \cdot 19 = (20 + 1)(20 - 1) = 20^2 - 1^2 = 400 - 1 = 399$$

:::

:::snippet{#aufgabe}

**2** Rechne im Kopf.

:::

:::multievent

| Aufgabe | Zerlegung | Ergebnis |
| --- | --- | --- |
| $31 \cdot 29$ | $(30 + 1)(30 - 1) = 900 - 1$ | {z{899}} |
| $47 \cdot 53$ | $(50 -$ {z{3}} $)(50 +$ {z{3}} $) = 2500 -$ {z{9}} | {z{2491}} |
| $103 \cdot 97$ | $(100 + 3)(100 - 3)$ | {z{9991}} |
| $45 \cdot 35$ | $(40 + 5)(40 - 5)$ | {z{1575}} |

:::

::::collapsible{title="Knobelei: Quadrate mit 5 am Ende" id="bf-fuenf"}

Schau dir diese Quadrate an:

$$15^2 = 225 \qquad 25^2 = 625 \qquad 35^2 = 1225 \qquad 45^2 = 2025$$

Fällt dir etwas auf? Die Zahl vorne entsteht so: Zehnerziffer mal (Zehnerziffer $+ 1$). Dahinter steht immer $25$.

:::multievent

- $65^2$: $6 \cdot 7 =$ {z{42}}, also $65^2 =$ {z{4225}}
- $85^2 =$ {z{7225}}
- $105^2 =$ {z{11025}}

:::

**Warum klappt das?** Eine Zahl mit 5 am Ende kann man als $10n + 5$ schreiben. Mit der ersten binomischen Formel:

$$(10n + 5)^2 = 100n^2 + 100n + 25 = 100 \cdot n \cdot (n + 1) + 25$$

::::

Weiter geht es mit den [Übungen](/mittelstufe/terme/binomische-formeln/05-uebungen).
