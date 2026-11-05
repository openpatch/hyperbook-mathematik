---
name: Die drei Formeln
index: 2
lang: de
---

# Die drei binomischen Formeln

:::alert{info}

**Darum geht's:** Du rechnest die drei binomischen Formeln durch Ausmultiplizieren nach, siehst sie als Bild und wendest sie auf Terme mit Variablen an.

:::

## Erinnerung: Jeder mit jedem

Zwei Klammern multiplizierst du aus, indem du **jedes Glied der ersten Klammer mit jedem Glied der zweiten Klammer** malnimmst. Dabei hilft ein Malkreuz.

:::snippet{#beispiel}

$(x + 3)(x + 3)$:

| $\cdot$ | $x$ | $+3$ |
| :---: | :---: | :---: |
| $x$ | $x^2$ | $3x$ |
| $+3$ | $3x$ | $9$ |

Zusammen: $x^2 + 3x + 3x + 9 = x^2 + 6x + 9$

:::

## Die zweite Formel: mit Minus

:::snippet{#aufgabe}

**1** Fülle das Malkreuz für $(x - 3)^2 = (x - 3)(x - 3)$ aus. Achte auf die Vorzeichen!

:::

:::multievent

| $\cdot$ | $x$ | $-3$ |
| :---: | :---: | :---: |
| $x$ | $x^2$ | {z{-3}} $x$ |
| $-3$ | {z{-3}} $x$ | {z{9}} |

Zusammen: $(x - 3)^2 = x^2$ $+$ ( {z{-6}} ) $x$ $+$ {z{9}}

Das letzte Glied ist positiv, weil {A{!minus mal minus plus ergibt|man die Zahl nur abschreibt|3 positiv ist}}.

:::

Genauso geht es allgemein: $(a - b)^2 = a^2 - ab - ab + b^2$.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 560 300" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Quadrat a mal a. Davon werden zwei Streifen a mal b abgeschnitten. Die Ecke b mal b wurde dabei doppelt abgezogen und kommt wieder dazu.">
<rect x="40" y="20" width="160" height="160" fill="#397b96" fill-opacity="0.55"/>
<rect x="200" y="20" width="80" height="240" fill="#9A6B2F" fill-opacity="0.35"/>
<rect x="40" y="180" width="240" height="80" fill="#9A6B2F" fill-opacity="0.35"/>
<rect x="200" y="180" width="80" height="80" fill="#bb0a21" fill-opacity="0.6"/>
<rect x="40" y="20" width="240" height="240" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="200" y1="20" x2="200" y2="260" stroke="currentColor" stroke-dasharray="5 4"/>
<line x1="40" y1="180" x2="280" y2="180" stroke="currentColor" stroke-dasharray="5 4"/>
<g font-size="18" text-anchor="middle" fill="currentColor">
<text x="120" y="106">(a − b)²</text>
<text x="240" y="106">a·b</text>
<text x="120" y="226">a·b</text>
<text x="240" y="226">b²</text>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="120" y="282">a − b</text><text x="240" y="282">b</text>
<text x="160" y="14">a</text>
</g>
<g font-size="16" fill="currentColor">
<text x="310" y="60">Vom Quadrat a² …</text>
<text x="310" y="95">… zwei Streifen a·b wegnehmen.</text>
<text x="310" y="140">Die rote Ecke b² steckt in</text>
<text x="310" y="162">beiden Streifen. Sie wurde</text>
<text x="310" y="184">doppelt weggenommen und</text>
<text x="310" y="206">kommt einmal wieder dazu.</text>
<text x="310" y="250" font-weight="bold">(a − b)² = a² − 2ab + b²</text>
</g>
</svg>
</figure>

## Die dritte Formel: Plus mal Minus

:::snippet{#aufgabe}

**2** Fülle das Malkreuz für $(x + 3)(x - 3)$ aus.

:::

:::multievent

| $\cdot$ | $x$ | $-3$ |
| :---: | :---: | :---: |
| $x$ | $x^2$ | {z{-3}} $x$ |
| $+3$ | {z{3}} $x$ | {z{-9}} |

Die beiden gemischten Glieder ergeben zusammen {z{0}} $x$. Sie heben sich auf.

Übrig bleibt: $(x + 3)(x - 3) = x^2$ $-$ {z{9}}

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 560 230" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Vom Quadrat a mal a wird das kleine Quadrat b mal b weggenommen. Der Rest wird zu einem Rechteck mit den Seiten a plus b und a minus b umgelegt.">
<rect x="120" y="20" width="60" height="60" fill="#bb0a21" fill-opacity="0.15" stroke="#bb0a21" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="150" y="56" font-size="16" text-anchor="middle" fill="#bb0a21">b²</text>
<rect x="20" y="20" width="100" height="160" fill="#397b96" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<rect x="120" y="80" width="60" height="100" fill="#9A6B2F" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="100" y="202">a</text>
<text x="8" y="105">a</text>
<text x="100" y="222">a² − b²</text>
</g>
<text x="245" y="110" font-size="30" text-anchor="middle" fill="currentColor">→</text>
<rect x="300" y="80" width="160" height="100" fill="#397b96" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<rect x="460" y="80" width="60" height="100" fill="#9A6B2F" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="410" y="202">a + b</text>
<text x="540" y="135">a − b</text>
<text x="410" y="222">(a + b)(a − b)</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Das blaue Stück wird gedreht, das braune angelegt. Die Fläche bleibt gleich: a² − b² = (a + b)(a − b).</figcaption>
</figure>

## Alle drei Formeln

:::snippet{#merken}

**Die binomischen Formeln**

$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 &&\text{1. binomische Formel} \\
(a - b)^2 &= a^2 - 2ab + b^2 &&\text{2. binomische Formel} \\
(a + b)(a - b) &= a^2 - b^2 &&\text{3. binomische Formel}
\end{aligned}
$$

:::

:::snippet{#beispiel}

Für $a$ und $b$ kannst du **ganze Terme** einsetzen. Denk dir dann eine Klammer darum.

$$
\begin{aligned}
(2x - 3)^2 &= (2x)^2 - 2 \cdot 2x \cdot 3 + 3^2 \\
&= 4x^2 - 12x + 9
\end{aligned}
$$

:::

:::alert{warn}

**Achtung:** $(2x)^2 = 2x \cdot 2x = 4x^2$ – und nicht $2x^2$. Die Zahl vor dem $x$ wird mit quadriert.

:::

## Üben

:::snippet{#aufgabe}

**3** Multipliziere aus. Fülle die Lücken.

:::

::::::tabs

::::tab{title="1. Formel"}

:::multievent

| | |
| --- | --- |
| $(x + 2)^2 = x^2 +$ {z{4}} $x +$ {z{4}} | $(x + 8)^2 = x^2 +$ {z{16}} $x +$ {z{64}} |
| $(y + 1)^2 = y^2 +$ {z{2}} $y +$ {z{1}} | $(a + 0{,}5)^2 = a^2 +$ {z{1}} $a +$ {z{0,25}} |

:::

::::

::::tab{title="2. Formel"}

:::multievent

| | |
| --- | --- |
| $(x - 4)^2 = x^2 -$ {z{8}} $x +$ {z{16}} | $(x - 9)^2 = x^2 -$ {z{18}} $x +$ {z{81}} |
| $(z - 1)^2 = z^2 -$ {z{2}} $z +$ {z{1}} | $(b - 1{,}5)^2 = b^2 -$ {z{3}} $b +$ {z{2,25}} |

:::

::::

::::tab{title="3. Formel"}

:::multievent

| | |
| --- | --- |
| $(x + 4)(x - 4) = x^2 -$ {z{16}} | $(y + 11)(y - 11) = y^2 -$ {z{121}} |
| $(a - 0{,}3)(a + 0{,}3) = a^2 -$ {z{0,09}} | $(2x + 3)(2x - 3) =$ {z{4}} $x^2 -$ {z{9}} |

:::

::::

::::tab{title="Mit Faktoren"}

:::multievent

| |
| --- |
| $(3x + 2)^2 =$ {z{9}} $x^2 +$ {z{12}} $x +$ {z{4}} |
| $(5a - 1)^2 =$ {z{25}} $a^2 -$ {z{10}} $a +$ {z{1}} |
| $(x + 2y)^2 = x^2 +$ {z{4}} $xy +$ {z{4}} $y^2$ |

{b{Denk dir eine Klammer um 3x, 5a und 2y: (3x)² = 9x², 2 · 3x · 2 = 12x usw.}}

:::

::::

::::::

## Teste dich

Acht Aufgaben mit Hinweisen. Bei einem Fehler bekommst du einen zweiten Versuch.

::bitflow{id="binomische-formeln-ausmultiplizieren" src="ausmultiplizieren.bitflow" height="auto" maxHeight="85vh"}

Weiter geht es mit der Seite [Rückwärts: Faktorisieren](/mittelstufe/terme/binomische-formeln/03-faktorisieren).
