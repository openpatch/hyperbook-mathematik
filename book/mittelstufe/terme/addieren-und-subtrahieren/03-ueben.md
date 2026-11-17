---
name: Üben
index: 3
lang: de
permaid: mittelstufe-terme-addieren-ueben
---

# Üben: Addieren und Subtrahieren

:::alert{info}

**Darum geht's:** Hier übst du das Zusammenfassen und Ordnen von Termen. Alle Aufgaben kannst du direkt überprüfen.

:::

## Gemischtes Training

::bitflow{id="addieren-subtrahieren-training" src="training.bitflow" height="auto" maxHeight="85vh"}

## Fehler-Detektiv

:::snippet{#aufgabe}

Michael hat Terme vereinfacht. Prüfe jede Umformung. Ist sie falsch, gib die richtige Vereinfachung an.

:::

:::multievent

| Michaels Umformung | Prüfung | richtig ist |
| --- | --- | --- |
| $7x - 7 = x$ | {A{richtig|!falsch}} | {A{!7x − 7 bleibt stehen|0|7x}} |
| $3x^2 + 2x = 5x^2$ | {A{richtig|!falsch}} | {A{5x³|!3x² + 2x bleibt stehen|5x}} |
| $6x^3 = 6 + x^3$ | {A{richtig|!falsch}} | {A{!6x³ ist schon ein Produkt|6 · x · 3|18x}} |
| $9a + 9b = 9ab$ | {A{richtig|!falsch}} | {A{18ab|!9a + 9b bleibt stehen|18a}} |
| $12d - d = 11d$ | {A{!richtig|falsch}} | – |
| $x^2 - x = x$ | {A{richtig|!falsch}} | {A{!x² − x bleibt stehen|x|0}} |

{b{Michael fasst Glieder zusammen, die nicht gleichartig sind. Eine Zahl ohne Variable, x und x², a und b sind jeweils verschiedene Sorten.}}

:::

## Mauer aus Termen

In einer Termmauer ist jeder Stein die **Summe** der beiden Steine darunter.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 420 200" width="420" style="max-width:100%;height:auto;" role="img" aria-label="Termmauer mit drei Steinen unten: 3x, 2y und 5x minus y. In der Mitte zwei leere Steine, oben ein leerer Stein.">
<g stroke="currentColor" stroke-width="1.5">
<rect x="20" y="140" width="120" height="44" fill="#397b96" fill-opacity="0.25"/>
<rect x="150" y="140" width="120" height="44" fill="#397b96" fill-opacity="0.25"/>
<rect x="280" y="140" width="120" height="44" fill="#397b96" fill-opacity="0.25"/>
<rect x="85" y="86" width="120" height="44" fill="#9A6B2F" fill-opacity="0.25"/>
<rect x="215" y="86" width="120" height="44" fill="#9A6B2F" fill-opacity="0.25"/>
<rect x="150" y="32" width="120" height="44" fill="#bb0a21" fill-opacity="0.25"/>
</g>
<g font-size="18" text-anchor="middle" fill="currentColor">
<text x="80" y="168">3x</text><text x="210" y="168">2y</text><text x="340" y="168">5x − y</text>
<text x="145" y="114">A</text><text x="275" y="114">B</text><text x="210" y="60">C</text>
</g>
</svg>
</figure>

:::multievent

$A = 3x + 2y$

$B = 2y + 5x - y =$ {z{5}} $x +$ {z{1}} $y$

$C = A + B =$ {z{8}} $x +$ {z{3}} $y$

Kontrolle mit $x = 1$ und $y = 2$: Unten stehen $3$, $4$ und $3$. Oben ergibt sich {z{14}}.

{b{B = 5x + y. C = 3x + 2y + 5x + y = 8x + 3y. Mit x = 1 und y = 2: 8 + 6 = 14. Und mit Zahlen: A = 7, B = 7, C = 14.}}

:::

## Umfang einer Figur

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 380 210" width="380" style="max-width:100%;height:auto;" role="img" aria-label="Fünfeck in Hausform mit den Seiten: unten 2a, zwei senkrechte Seiten b, zwei Dachseiten a.">
<path d="M 60 180 L 300 180 L 300 90 L 180 30 L 60 90 Z" fill="#397b96" fill-opacity="0.3" stroke="currentColor" stroke-width="2"/>
<g font-size="17" fill="currentColor" text-anchor="middle">
<text x="180" y="202">2a</text>
<text x="40" y="140">b</text><text x="320" y="140">b</text>
<text x="105" y="52">a</text><text x="255" y="52">a</text>
</g>
</svg>
</figure>

:::multievent

Der Umfang ist $2a + b + a + a + b =$ {z{4}} $a +$ {z{2}} $b$.

Für $a = 3{,}5$ cm und $b = 4$ cm beträgt der Umfang {z{22}} cm.

:::
