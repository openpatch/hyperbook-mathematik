---
name: So viel wie möglich
index: 2
lang: de
permaid: mittelstufe-terme-ausklammern-so-viel-wie-moeglich
---

# So viel wie möglich ausklammern

:::alert{info}

**Darum geht's:** Du klammerst vollständig aus, klammerst auch ein Minuszeichen aus und findest typische Fehler. Zum Schluss lernst du einen Trick, mit dem man sogar eine ganze Klammer ausklammern kann.

:::

## Woran erkennst du, dass du fertig bist?

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 200" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Drei Umformungen von 12ab plus 18ab hoch 2. Erste: 3ab mal Klammer 4 plus 6b, nicht fertig, weil 4 und 6b noch den Faktor 2 haben. Zweite: 6ab mal Klammer 2 plus 3b, fertig.">
<g font-size="18" fill="currentColor">
<text x="20" y="40">12ab + 18ab²</text>
<text x="20" y="100">= 3ab(4 + 6b)</text>
<text x="20" y="165">= 6ab(2 + 3b)</text>
</g>
<rect x="138" y="76" width="98" height="34" rx="8" fill="#bb0a21" fill-opacity="0.2" stroke="#bb0a21"/>
<rect x="138" y="141" width="98" height="34" rx="8" fill="#2e7d32" fill-opacity="0.2" stroke="#2e7d32"/>
<g font-size="15" fill="currentColor">
<text x="270" y="92">richtig, aber nicht fertig:</text>
<text x="270" y="112">4 und 6b haben noch den gemeinsamen Faktor 2</text>
<text x="270" y="158">fertig:</text>
<text x="270" y="178">2 und 3b haben keinen gemeinsamen Faktor mehr</text>
</g>
</svg>
</figure>

:::snippet{#merken}

**Vollständig ausklammern**

Man ist fertig, wenn die Glieder **in der Klammer** keinen gemeinsamen Faktor mehr haben. Dazu klammert man

- bei den Zahlen den **größten gemeinsamen Teiler** aus,
- bei jeder Variablen die **kleinste vorkommende Potenz**.

$$10a^5b + 8a^3b^2 = 2a^3b \cdot 5a^2 + 2a^3b \cdot 4b = 2a^3b(5a^2 + 4b)$$

:::

:::snippet{#aufgabe}

**1** Klammere so aus, dass der Term in der Klammer möglichst einfach wird.

:::

:::multievent

| Term | Faktor vor der Klammer | in der Klammer |
| --- | --- | --- |
| $9a^2b - 3a^4b$ | {A{3a²|!3a²b|9a²b}} | $3 - a^2$ |
| $4ab^2 + 6a^2b + 10ab$ | {A{ab|2a|!2ab}} | $2b + 3a + 5$ |
| $17xy^2 - 34y^2z$ | {A{17y|!17y²|17xy²}} | $x - 2z$ |
| $10pq + 15p^2q - 20pq^2$ | {A{!5pq|5p|10pq}} | $2 + 3p - 4q$ |

:::

## Ein Minus ausklammern

Steht vor dem ersten Glied ein Minus, klammert man oft eine negative Zahl aus. Dann dreht sich in der Klammer **jedes** Vorzeichen um.

$$-30cd - 24ce = -6c \cdot 5d + (-6c) \cdot 4e = -6c(5d + 4e)$$

:::alert{warn}

**Probe:** $-6c \cdot 5d = -30cd$ und $-6c \cdot 4e = -24ce$. Wer $-6c(5d - 4e)$ schreibt, erhält bei der Probe $+24ce$.

:::

:::multievent

| | |
| --- | --- |
| $-9x - 9y = -9(x$ {A{!+|−}} $y)$ | $-4ab^2 - 24ac^2 = -4a(b^2$ {A{!+|−}} $6c^2)$ |
| $-9xy + 9xz = -9x(y$ {A{+|!−}} $z)$ | $-8uv^2 - u^2x = -u($ {z{8}} $v^2 + ux)$ |

:::

## Wer hat recht?

:::snippet{#aufgabe}

**2** Kontrolliere die Rechnungen.

:::

:::multievent

| Name | Rechnung | Bewertung |
| --- | --- | --- |
| Anna | $4xy - 4xz = 4x(y - z)$ | {A{!richtig und fertig|richtig, aber nicht fertig|falsch}} |
| Bert | $12ab + 18ab^2 = 3ab(4 + 6b)$ | {A{richtig und fertig|!richtig, aber nicht fertig|falsch}} |
| Christian | $-30cd - 24ce = -6c(5d - 4e)$ | {A{richtig und fertig|richtig, aber nicht fertig|!falsch}} |
| Dario | $6x^6y + 4x^3z = 2x^3(x^2y + 2z)$ | {A{richtig und fertig|richtig, aber nicht fertig|!falsch}} |
| Emma | $15pq + 24pq^2 + 3q = 3q(5p + 8pq)$ | {A{richtig und fertig|richtig, aber nicht fertig|!falsch}} |

{b{Bert: 6ab(2 + 3b) ist fertig. Christian: Vorzeichen, richtig ist −6c(5d + 4e). Dario: 6x⁶y = 2x³ · 3x³y, richtig ist 2x³(3x³y + 2z). Emma hat die 1 vergessen: 3q(5p + 8pq + 1).}}

:::

## Lücken ergänzen

:::snippet{#aufgabe}

**3** Was wurde weggewischt?

:::

:::multievent

$24x^2z + 18xz^2 =$ {z{6}} $xz \cdot ($ {z{4}} $x +$ {z{3}} $z)$

$20a^2b - 30ab^2 + 10ab = 10ab \cdot ($ {z{2}} $a -$ {z{3}} $b +$ {z{1}} $)$

$\square\, x^2y - 21xy^2 = 7xy(5x - 3y) \quad \Rightarrow \quad \square =$ {z{35}}

:::

## Nazars Trick: eine Klammer ausklammern

Nazar hat eine Summe mit vier Gliedern in ein Produkt verwandelt:

$$
\begin{aligned}
2c + 2d + ac + ad &= 2(c + d) + a(c + d) \\
&= (2 + a)(c + d)
\end{aligned}
$$

Im ersten Schritt klammert er aus den ersten beiden Gliedern $2$ und aus den letzten beiden $a$ aus. Dann steckt in beiden Teilen die gleiche Klammer $(c + d)$. Diese ganze Klammer klammert er aus.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 520 240" width="520" style="max-width:100%;height:auto;" role="img" aria-label="Rechteck mit Breite c plus d und Höhe 2 plus a. Es besteht aus vier Teilen: 2c, 2d, ac und ad.">
<g stroke="currentColor" stroke-width="1.5">
<rect x="60" y="20" width="200" height="70" fill="#397b96" fill-opacity="0.5"/>
<rect x="260" y="20" width="130" height="70" fill="#397b96" fill-opacity="0.3"/>
<rect x="60" y="90" width="200" height="110" fill="#9A6B2F" fill-opacity="0.5"/>
<rect x="260" y="90" width="130" height="110" fill="#9A6B2F" fill-opacity="0.3"/>
</g>
<g font-size="18" text-anchor="middle" fill="currentColor">
<text x="160" y="61">2c</text><text x="325" y="61">2d</text>
<text x="160" y="151">ac</text><text x="325" y="151">ad</text>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="160" y="222">c</text><text x="325" y="222">d</text>
<text x="42" y="61">2</text><text x="42" y="151">a</text>
</g>
<g font-size="15" fill="currentColor">
<text x="405" y="61">2(c + d)</text>
<text x="405" y="151">a(c + d)</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Jede Zeile hat die Breite c + d. Zusammen ist das Rechteck (2 + a) hoch: (2 + a)(c + d).</figcaption>
</figure>

:::multievent

$ax + ay + bx + by = a(x + y) + b(x + y) = ($ {A{!a + b|a · b|x + y}} $)(x + y)$

$xy + 5x + 2y + 10 = x(y + 5) +$ {z{2}} $(y + 5) = (x +$ {z{2}} $)(y + 5)$

$3u + 3v + uw + vw = ($ {z{3}} $+ w)(u + v)$

{b{3u + 3v + uw + vw = 3(u + v) + w(u + v) = (3 + w)(u + v). Probe: Jedes Glied der ersten Klammer mit jedem Glied der zweiten multiplizieren.}}

:::
