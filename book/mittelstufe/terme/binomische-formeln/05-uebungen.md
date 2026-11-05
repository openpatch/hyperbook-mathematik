---
name: Übungen
index: 5
lang: de
---

# Übungen zu den binomischen Formeln

:::alert{info}

**Darum geht's:** Hier übst du, so viel du brauchst. Die Aufgaben werden nach unten schwerer: erst Grundlagen, dann Fortgeschritten, zum Schluss Profi.

:::

## Gemischtes Training

::bitflow{id="binomische-formeln-training" src="training.bitflow" height="auto" maxHeight="85vh"}

## Zuordnen

:::snippet{#aufgabe}

Wähle die passende Summe aus.

:::

:::multievent

| Produkt | Summe |
| --- | --- |
| $(x - 7)^2$ | {A{x² − 49|!x² − 14x + 49|x² + 14x + 49|x² − 14x − 49}} |
| $(x + 7)(x - 7)$ | {A{!x² − 49|x² − 14x + 49|x² + 49|x² + 14x − 49}} |
| $(7 + x)^2$ | {A{x² + 49|x² + 7x + 49|!x² + 14x + 49|49x² + 14x + 1}} |
| $(7x - 1)^2$ | {A{7x² − 14x + 1|!49x² − 14x + 1|49x² − 7x + 1|49x² − 1}} |

:::

## Fehler-Detektiv

:::snippet{#aufgabe}

Lena hat ihre Hausaufgaben gemacht. Prüfe jede Rechnung. Ist sie falsch, verbessere sie.

:::

:::multievent

| Lenas Rechnung | Prüfung | Verbesserung |
| --- | --- | --- |
| $(x + 6)^2 = x^2 + 36$ | {A{richtig|!falsch}} | $x^2 +$ {z{12}} $x + 36$ |
| $(x - 2)^2 = x^2 - 4x - 4$ | {A{richtig|!falsch}} | $x^2 - 4x +$ {z{4}} |
| $(3x + 1)^2 = 3x^2 + 6x + 1$ | {A{richtig|!falsch}} | {z{9}} $x^2 + 6x + 1$ |
| $(x + 5)(x - 5) = x^2 - 25$ | {A{!richtig|falsch}} | – |
| $(a - b)^2 = a^2 - b^2$ | {A{richtig|!falsch}} | $a^2 -$ {z{2}} $ab + b^2$ |

{b{Typische Fehler: Mittelglied vergessen, (−2)² = +4 statt −4, und die Zahl vor dem x nicht mit quadriert.}}

:::

## Terme vereinfachen

:::snippet{#aufgabe}

Multipliziere zuerst aus. Fasse dann zusammen. Achte auf das Minus vor einer Klammer!

:::

:::multievent

- $(x + 2)^2 - (x - 2)^2 =$ {z{8}} $x$
- $(x + 3)^2 + (x + 3)(x - 3) =$ {z{2}} $x^2 +$ {z{6}} $x$
- $(a - 1)^2 - a^2 =$ {z{-2}} $a +$ {z{1}}
- $2 \cdot (x + 1)^2 =$ {z{2}} $x^2 +$ {z{4}} $x +$ {z{2}}

{b{Beispiel: (x + 2)² − (x − 2)² = x² + 4x + 4 − (x² − 4x + 4) = x² + 4x + 4 − x² + 4x − 4 = 8x}}

:::

## Das Quadrat wächst

Ein Quadrat hat die Seitenlänge $x$ cm. Jede Seite wird um $3$ cm länger.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 280 280" width="280" style="max-width:100%;height:auto;" role="img" aria-label="Quadrat mit Seite x, das um 3 verlängert wird. Der Zuwachs besteht aus zwei Streifen 3x und einer Ecke 9.">
<rect x="30" y="20" width="180" height="180" fill="#397b96" fill-opacity="0.25" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<rect x="210" y="20" width="54" height="180" fill="#9A6B2F" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
<rect x="30" y="200" width="180" height="54" fill="#9A6B2F" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
<rect x="210" y="200" width="54" height="54" fill="#bb0a21" fill-opacity="0.6" stroke="currentColor" stroke-width="1.5"/>
<g font-size="17" text-anchor="middle" fill="currentColor">
<text x="120" y="116">alt: x²</text>
<text x="237" y="116">?</text>
<text x="120" y="233">?</text>
<text x="237" y="233">?</text>
</g>
<g font-size="14" text-anchor="middle" fill="currentColor">
<text x="120" y="272">x</text><text x="237" y="272">3</text>
<text x="16" y="116">x</text><text x="16" y="233">3</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Der farbige Rand ist der Zuwachs.</figcaption>
</figure>

:::multievent

Neue Fläche: $(x + 3)^2 = x^2 +$ {z{6}} $x +$ {z{9}}

Die Fläche wächst also um {z{6}} $x +$ {z{9}} cm².

Für $x = 10$ cm wächst die Fläche um {z{69}} cm².

Für welches $x$ wächst die Fläche um genau $45$ cm²? $\quad x =$ {z{6}} cm

{b{6x + 9 = 45 ⇒ 6x = 36 ⇒ x = 6}}

:::

## Gleichungen lösen

:::snippet{#aufgabe}

Multipliziere aus. Das $x^2$ fällt weg – dann bleibt eine einfache Gleichung.

:::

:::snippet{#beispiel}

$$
\begin{aligned}
(x + 3)^2 &= x^2 + 21 \\
x^2 + 6x + 9 &= x^2 + 21 &&| - x^2 \\
6x + 9 &= 21 &&| - 9 \\
6x &= 12 &&| : 6 \\
x &= 2
\end{aligned}
$$

:::

:::multievent

- $(x + 4)^2 = x^2 + 40$ $\quad \Rightarrow \quad x =$ {z{3}}
- $(x - 4)^2 = (x + 2)^2$ $\quad \Rightarrow \quad x =$ {z{1}}
- $(x + 5)(x - 5) = (x - 1)^2$ $\quad \Rightarrow \quad x =$ {z{13}}

{b{(x − 4)² = (x + 2)²: x² − 8x + 16 = x² + 4x + 4 ⇒ 12 = 12x ⇒ x = 1. — (x + 5)(x − 5) = (x − 1)²: x² − 25 = x² − 2x + 1 ⇒ 2x = 26 ⇒ x = 13.}}

:::

Wenn du dich fit fühlst, mach den [Selbsttest](/mittelstufe/terme/binomische-formeln/06-selbsttest).
