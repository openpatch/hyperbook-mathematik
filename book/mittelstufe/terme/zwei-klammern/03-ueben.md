---
name: Üben
index: 3
lang: de
permaid: mittelstufe-terme-zwei-klammern-ueben
---

# Üben: Zwei Klammern multiplizieren

:::alert{info}

**Darum geht's:** Hier übst du das Multiplizieren von zwei Klammern. Alle Aufgaben kannst du direkt überprüfen.

:::

## Gemischtes Training

::bitflow{id="zwei-klammern-training" src="training.bitflow" height="auto" maxHeight="85vh"}

## Fehler-Detektiv

:::snippet{#aufgabe}

Prüfe jede Rechnung. Ist sie falsch, gib das richtige Ergebnis an.

:::

:::multievent

| Rechnung | Prüfung | richtig |
| --- | --- | --- |
| $(x + 2)(y + 5) = xy + 10$ | {A{richtig|!falsch}} | $xy +$ {z{5}} $x +$ {z{2}} $y + 10$ |
| $(a + 3)(a - 3) = a^2 - 9$ | {A{!richtig|falsch}} | – |
| $(x - 1)(x - 6) = x^2 - 7x - 6$ | {A{richtig|!falsch}} | $x^2 - 7x +$ {z{6}} |
| $(2x + 1)(3x + 2) = 6x^2 + 3$ | {A{richtig|!falsch}} | $6x^2 +$ {z{7}} $x + 2$ |

{b{Wer nur „vorne mal vorne“ und „hinten mal hinten“ rechnet, vergisst die gemischten Produkte. Beim Rechteck sind das die beiden Streifen.}}

:::

## Was ist übrig?

:::snippet{#aufgabe}

Multipliziere aus und vereinfache. Ein Teil fällt immer weg.

:::

:::multievent

$(x + 5)(x + 2) - x^2 =$ {z{7}} $x +$ {z{10}}

$(a + 3)(a - 3) - (a^2 - 10) =$ {z{1}}

$(x + 1)(x + 4) - (x + 2)(x + 3) =$ {z{-2}}

{b{(x + 1)(x + 4) = x² + 5x + 4 und (x + 2)(x + 3) = x² + 5x + 6. Die Differenz ist 4 − 6 = −2, egal welche Zahl x ist.}}

:::

## Rechentrick

Mit zwei Klammern lassen sich Produkte nahe bei runden Zahlen im Kopf rechnen.

:::snippet{#beispiel}

$$21 \cdot 32 = (20 + 1)(30 + 2) = 600 + 40 + 30 + 2 = 672$$

:::

:::multievent

$31 \cdot 42 = (30 + 1)(40 + 2) =$ {z{1302}}

$19 \cdot 51 = (20 - 1)(50 + 1) =$ {z{969}}

$102 \cdot 103 = (100 + 2)(100 + 3) =$ {z{10506}}

:::

## Rechteck mit Rahmen

Ein Bild ist $x$ cm breit und $y$ cm hoch. Es bekommt rundherum einen $3$ cm breiten Rahmen.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 320 240" width="320" style="max-width:100%;height:auto;" role="img" aria-label="Bild mit Breite x und Höhe y in einem Rahmen, der rundherum 3 cm breit ist.">
<rect x="30" y="20" width="260" height="190" fill="#9A6B2F" fill-opacity="0.5" stroke="currentColor" stroke-width="1.5"/>
<rect x="66" y="56" width="188" height="118" fill="#397b96" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/>
<g font-size="16" text-anchor="middle" fill="currentColor">
<text x="160" y="120">Bild</text>
<text x="160" y="166">x</text>
<text x="240" y="120">y</text>
<text x="48" y="120" font-size="13">3</text>
<text x="160" y="42" font-size="13">3</text>
</g>
</svg>
</figure>

:::multievent

Mit Rahmen ist das Bild $x +$ {z{6}} breit und $y +$ {z{6}} hoch.

Fläche mit Rahmen: $(x + 6)(y + 6) = xy +$ {z{6}} $x +$ {z{6}} $y +$ {z{36}}

Fläche nur des Rahmens: {z{6}} $x +$ {z{6}} $y +$ {z{36}}

Für ein Bild mit $x = 20$ cm und $y = 30$ cm hat der Rahmen eine Fläche von {z{336}} cm².

{b{Der Rahmen kommt auf beiden Seiten dazu, also 3 + 3 = 6 cm. Rahmenfläche: 6 · 20 + 6 · 30 + 36 = 120 + 180 + 36 = 336 cm².}}

:::
