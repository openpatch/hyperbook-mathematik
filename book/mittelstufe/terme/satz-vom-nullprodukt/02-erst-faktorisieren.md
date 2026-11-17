---
name: Erst faktorisieren
index: 2
lang: de
permaid: mittelstufe-terme-nullprodukt-erst-faktorisieren
---

# Erst faktorisieren, dann lösen

:::alert{info}

**Darum geht's:** Bei Gleichungen wie $x^2 - 7x = 0$ steht noch kein Produkt da. Du verwandelst die linke Seite zuerst durch Ausklammern oder mit einer binomischen Formel in ein Produkt und nutzt dann den Satz vom Nullprodukt.

:::

## Vom Term zum Produkt

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 220" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Ablauf in drei Schritten: Eine Seite muss null sein, dann faktorisieren, dann jeden Faktor null setzen.">
<g font-size="15" fill="currentColor" text-anchor="middle">
<rect x="10" y="20" width="190" height="80" rx="12" fill="#397b96" fill-opacity="0.25" stroke="currentColor"/>
<text x="105" y="52" font-weight="bold">1. Null auf eine Seite</text>
<text x="105" y="78">x² = 7x  →  x² − 7x = 0</text>
<rect x="225" y="20" width="190" height="80" rx="12" fill="#9A6B2F" fill-opacity="0.25" stroke="currentColor"/>
<text x="320" y="52" font-weight="bold">2. Faktorisieren</text>
<text x="320" y="78">x(x − 7) = 0</text>
<rect x="440" y="20" width="190" height="80" rx="12" fill="#bb0a21" fill-opacity="0.2" stroke="currentColor"/>
<text x="535" y="52" font-weight="bold">3. Faktoren null setzen</text>
<text x="535" y="78">x = 0 oder x = 7</text>
<text x="212" y="66" font-size="22">→</text>
<text x="428" y="66" font-size="22">→</text>
<text x="320" y="140">Faktorisieren geht durch</text>
<text x="200" y="180" font-weight="bold">Ausklammern</text>
<text x="200" y="202">6x² + 12x = 6x(x + 2)</text>
<text x="450" y="180" font-weight="bold">binomische Formel</text>
<text x="450" y="202">x² − 25 = (x + 5)(x − 5)</text>
</g>
</svg>
</figure>

:::snippet{#beispiel}

**Mit Ausklammern**

$$
\begin{aligned}
x^2 - 7x &= 0 \\
x(x - 7) &= 0 \\
x = 0 \quad &\text{oder} \quad x - 7 = 0 \\
x = 0 \quad &\text{oder} \quad x = 7
\end{aligned}
$$

$L = \{0;\, 7\}$

:::

:::snippet{#beispiel}

**Mit der dritten binomischen Formel**

$$
\begin{aligned}
x^2 - 25 &= 0 \\
(x + 5)(x - 5) &= 0 \\
x = -5 \quad &\text{oder} \quad x = 5
\end{aligned}
$$

$L = \{-5;\, 5\}$

:::

## Sarahs Fehler

Sarah soll $x^2 = 2x$ lösen. Sie rechnet:

$$x^2 = 2x \quad | : x \qquad \Rightarrow \qquad x = 2$$

:::multievent

Setze $x = 0$ in $x^2 = 2x$ ein: links {z{0}}, rechts {z{0}}. Also ist $x = 0$ {A{!auch eine Lösung|keine Lösung}}.

Sarah hat durch $x$ geteilt. Das ist für $x = 0$ {A{erlaubt|!nicht erlaubt}}. Dabei ist die Lösung $x = 0$ verloren gegangen.

Richtig: $x^2 - 2x = 0 \Rightarrow x(x - 2) = 0 \Rightarrow L = \{$ {z{0}} $;$ {z{2}} $\}$

:::

:::alert{warn}

**Teile nie durch $x$!** Bringe stattdessen alles auf eine Seite und **klammere $x$ aus**. Sonst verlierst du die Lösung $x = 0$.

:::

## Wer hat recht?

Tina, Sarah und Tom haben Hausaufgaben gemacht.

| Name | Gleichung | Lösung |
| --- | --- | --- |
| Tina | $(x + 2)(x - 6) = 0$ | $L = \{-2;\, 6\}$ |
| Sarah | $x^2 = 2x$ | $L = \{2\}$ |
| Tom | $(x - 3)(x - 3) = 0$ | „Entweder $x = 3$ oder $x = 3$. Das geht nicht, also $L = \{\,\}$.“ |

:::multievent

Tina: {A{!richtig|falsch}} $\qquad$ Sarah: {A{richtig|!falsch}} $\qquad$ Tom: {A{richtig|!falsch}}

Toms richtige Lösungsmenge: $L = \{$ {z{3}} $\}$

{b{Tom verwechselt „oder“ mit „entweder … oder“. Für x = 3 sind beide Faktoren null. Das ist erlaubt.}}

:::

## Faktorisieren und lösen

:::snippet{#aufgabe}

**1** Faktorisiere zuerst. Bestimme dann die Lösungen und trage sie der Größe nach ein.

:::

:::multievent

| Gleichung | Produkt | $x_1$ | $x_2$ |
| --- | --- | :---: | :---: |
| $x^2 - 7x = 0$ | {A{!x(x − 7) = 0|x(x + 7) = 0|(x − 7)² = 0}} | {z{0}} | {z{7}} |
| $x^2 + 5x = 0$ | {A{x(x − 5) = 0|!x(x + 5) = 0|5x(x + 1) = 0}} | {z{-5}} | {z{0}} |
| $x^2 - 3x = 0$ | {A{!x(x − 3) = 0|3x(x − 1) = 0|x(x + 3) = 0}} | {z{0}} | {z{3}} |
| $x^2 - 36 = 0$ | {A{(x − 6)² = 0|!(x + 6)(x − 6) = 0|x(x − 36) = 0}} | {z{-6}} | {z{6}} |
| $6x^2 - 24 = 0$ | {A{!6(x + 2)(x − 2) = 0|6x(x − 4) = 0|(6x − 24)x = 0}} | {z{-2}} | {z{2}} |
| $4x^2 = 12x$ | {A{4x(x − 12) = 0|!4x(x − 3) = 0|x(4x − 3) = 0}} | {z{0}} | {z{3}} |

{b{Bei 6x² − 24 erst 6 ausklammern: 6(x² − 4). Dann dritte binomische Formel: x² − 4 = (x + 2)(x − 2). Bei 4x² = 12x erst alles auf eine Seite: 4x² − 12x = 0.}}

:::

:::snippet{#aufgabe}

**2** Hier hilft die erste oder zweite binomische Formel.

:::

:::multievent

$x^2 - 6x + 9 = 0 \;\Rightarrow\; (x -$ {z{3}} $)^2 = 0 \;\Rightarrow\; L = \{$ {z{3}} $\}$

$x^2 + 10x + 25 = 0 \;\Rightarrow\; (x +$ {z{5}} $)^2 = 0 \;\Rightarrow\; L = \{$ {z{-5}} $\}$

{b{Ein Quadrat (x − 3)² ist das Produkt (x − 3)(x − 3). Beide Faktoren sind gleich, deshalb gibt es nur eine Lösung.}}

:::
