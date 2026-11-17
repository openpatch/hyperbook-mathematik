---
name: Jedes mit jedem
index: 2
lang: de
permaid: mittelstufe-terme-zwei-klammern-jedes-mit-jedem
---

# Jedes mit jedem

:::alert{info}

**Darum geht's:** Du multiplizierst zwei Klammern auch dann sicher, wenn Minuszeichen vorkommen oder eine Klammer drei Glieder hat. Dabei helfen dir Bögen und das Malkreuz.

:::

## Vier Bögen

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 560 170" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Vier Bögen verbinden jedes Glied der ersten Klammer mit jedem Glied der zweiten Klammer: 3a mal 4b, 3a mal minus 2c, 7b mal 4b, 7b mal minus 2c.">
<g font-size="24" text-anchor="middle" fill="currentColor">
<text x="20" y="110">(</text><text x="52" y="110">3a</text><text x="88" y="110">+</text><text x="122" y="110">7b</text><text x="150" y="110">)</text>
<text x="172" y="110">(</text><text x="204" y="110">4b</text><text x="240" y="110">−</text><text x="276" y="110">2c</text><text x="304" y="110">)</text>
</g>
<g fill="none" stroke-width="2.2">
<path d="M 52 84 Q 128 30 204 84" stroke="#397b96"/>
<path d="M 52 84 Q 164 0 276 84" stroke="#397b96" stroke-dasharray="6 4"/>
<path d="M 122 122 Q 163 165 204 122" stroke="#9A6B2F"/>
<path d="M 122 122 Q 199 185 276 122" stroke="#9A6B2F" stroke-dasharray="6 4"/>
</g>
<g font-size="17" fill="currentColor">
<text x="340" y="60">3a · 4b = 12ab</text>
<text x="340" y="85">3a · (−2c) = −6ac</text>
<text x="340" y="110">7b · 4b = 28b²</text>
<text x="340" y="135">7b · (−2c) = −14bc</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">(3a + 7b)(4b − 2c) = 12ab − 6ac + 28b² − 14bc</figcaption>
</figure>

Das Vorzeichen gehört immer zu dem Glied dahinter. Bei $(4b - 2c)$ ist das zweite Glied also $-2c$.

## Das Malkreuz

Mit einer Tabelle verlierst du kein Produkt. Oben stehen die Glieder der einen Klammer, links die der anderen, jeweils mit Vorzeichen.

:::snippet{#beispiel}

$(x - 2)(x + 9)$:

| $\cdot$ | $x$ | $+9$ |
| :---: | :---: | :---: |
| $x$ | $x^2$ | $9x$ |
| $-2$ | $-2x$ | $-18$ |

Zusammen: $x^2 + 9x - 2x - 18 = x^2 + 7x - 18$

:::

:::snippet{#aufgabe}

**1** Fülle das Malkreuz für $(a + 9)(b - 3)$ aus.

:::

:::multievent

| $\cdot$ | $b$ | $-3$ |
| :---: | :---: | :---: |
| $a$ | $ab$ | {z{-3}} $a$ |
| $+9$ | {z{9}} $b$ | {z{-27}} |

Probe mit $a = 1$ und $b = 5$: $(1 + 9)(5 - 3) =$ {z{20}}. Die Summe $ab - 3a + 9b - 27$ ergibt ebenfalls {z{20}}.

:::

## Wenn beide Klammern Minuszeichen haben

:::snippet{#aufgabe}

**2** Multipliziere aus.

:::

:::multievent

$(x - y)(u - v) = xu$ $+$ ( {z{-1}} ) $xv$ $+$ ( {z{-1}} ) $yu$ $+$ {z{1}} $yv$

$(-a - b)(x - y) =$ {z{-1}} $ax +$ {z{1}} $ay$ $+$ ( {z{-1}} ) $bx +$ {z{1}} $by$

$(x - 4)(x - 5) = x^2$ {z{-9}} $x +$ {z{20}}

$(2x - 3)(x + 4) =$ {z{2}} $x^2 +$ {z{5}} $x$ {z{-12}}

{b{Bei (x − y)(u − v) ist (−y) · (−v) = +yv. Bei (2x − 3)(x + 4) = 2x² + 8x − 3x − 12 = 2x² + 5x − 12.}}

:::

:::alert{warn}

**Bei Minuszeichen hilft kein Rechteck mehr.** Du kannst keine Fläche mit negativer Seitenlänge zeichnen. Das Distributivgesetz gilt aber trotzdem. Prüfe dein Ergebnis darum durch **Einsetzen** einer Zahl.

:::

## Nicht verwechseln!

Diese Terme sehen ähnlich aus, bedeuten aber etwas ganz anderes. Achte darauf, welches Rechenzeichen **zwischen** den Klammern steht.

:::multievent

| Term | Rechnung zwischen den Klammern | Ergebnis |
| --- | --- | --- |
| $(x - 2)(x + 9)$ | {A{!mal|plus|minus}} | $x^2 +$ {z{7}} $x$ {z{-18}} |
| $(x - 2) + (x + 9)$ | {A{mal|!plus|minus}} | {z{2}} $x +$ {z{7}} |
| $(x - 2) - (x + 9)$ | {A{mal|plus|!minus}} | {z{-11}} |
| $(x + 9) - (x - 2)$ | {A{mal|plus|!minus}} | {z{11}} |

{b{Bei plus oder minus zwischen den Klammern wird nichts multipliziert. Man löst die Klammern auf und fasst zusammen: (x − 2) − (x + 9) = x − 2 − x − 9 = −11.}}

:::

## Drei Glieder in einer Klammer

Hat eine Klammer drei Glieder, entstehen mehr Produkte. Das Prinzip bleibt gleich: jedes mit jedem.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 420 200" width="420" style="max-width:100%;height:auto;" role="img" aria-label="Rechteck mit zwei Zeilen z und 3 und drei Spalten 7, z und t. Es entstehen sechs Teilflächen.">
<g stroke="currentColor" stroke-width="1.5">
<rect x="60" y="30" width="120" height="60" fill="#397b96" fill-opacity="0.45"/>
<rect x="180" y="30" width="90" height="60" fill="#397b96" fill-opacity="0.3"/>
<rect x="270" y="30" width="70" height="60" fill="#397b96" fill-opacity="0.15"/>
<rect x="60" y="90" width="120" height="70" fill="#9A6B2F" fill-opacity="0.45"/>
<rect x="180" y="90" width="90" height="70" fill="#9A6B2F" fill-opacity="0.3"/>
<rect x="270" y="90" width="70" height="70" fill="#9A6B2F" fill-opacity="0.15"/>
</g>
<g font-size="16" text-anchor="middle" fill="currentColor">
<text x="120" y="66">7z</text><text x="225" y="66">z²</text><text x="305" y="66">zt</text>
<text x="120" y="131">21</text><text x="225" y="131">3z</text><text x="305" y="131">3t</text>
<text x="120" y="20">7</text><text x="225" y="20">z</text><text x="305" y="20">t</text>
<text x="42" y="66">z</text><text x="42" y="131">3</text>
<text x="200" y="190">2 · 3 = 6 Produkte</text>
</g>
</svg>
</figure>

:::multievent

$(z + 3)(7 + z + t) = 7z + z^2 + zt + 21 + 3z + 3t = z^2 + zt +$ {z{10}} $z + 3t +$ {z{21}}

Bei $(a + b + c)(d + e + f + g)$ entstehen vor dem Zusammenfassen {z{12}} Produkte.

:::
