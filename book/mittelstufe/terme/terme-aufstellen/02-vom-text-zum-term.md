---
name: Vom Text zum Term
index: 2
lang: de
permaid: mittelstufe-terme-aufstellen-vom-text-zum-term
---

# Vom Text zum Term

:::alert{info}

**Darum geht's:** Du übersetzt Wörter wie „Summe“, „Differenz“ oder „das Doppelte“ in Rechenzeichen, erkennst den Typ eines Terms und liest umgekehrt aus einem Term heraus, was er in einer Sachsituation bedeutet.

:::

## Wörter werden zu Rechenzeichen

:::snippet{#merken}

| im Text | im Term | Achtung |
| --- | --- | --- |
| Summe aus $x$ und $y$; $x$ vermehrt um $y$ | $x + y$ | |
| Differenz aus $x$ und $y$; $x$ vermindert um $y$ | $x - y$ | Reihenfolge wie im Satz |
| subtrahiere $y$ **von** $x$ | $x - y$ | Reihenfolge **umgekehrt** |
| Produkt aus $x$ und $y$; das Dreifache von $x$ | $x \cdot y$; $\;3x$ | |
| Quotient aus $x$ und $y$; teile $x$ durch $y$ | $x : y$ | |
| das Quadrat von $x$ | $x^2$ | |
| das Doppelte **der Summe** aus $x$ und $3$ | $2 \cdot (x + 3)$ | Klammer nicht vergessen |
| um $10\,\%$ erhöht / gesenkt | $1{,}1 \cdot x$ / $0{,}9 \cdot x$ | Faktor statt Summe |

:::

## Der Rechenbaum zeigt den Termtyp

Ein Rechenbaum zeigt, in welcher Reihenfolge gerechnet wird. Die Rechnung **ganz unten** wird zuletzt ausgeführt. Sie bestimmt den **Typ** des Terms.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 620 270" width="620" style="max-width:100%;height:auto;" role="img" aria-label="Zwei Rechenbäume. Links: 2 mal Klammer a plus 3, zuletzt wird multipliziert, also ein Produkt. Rechts: 2 mal a plus 3, zuletzt wird addiert, also eine Summe.">
<g font-size="17" text-anchor="middle" fill="currentColor">
<text x="150" y="24" font-weight="bold">2 · (a + 3)</text>
<text x="470" y="24" font-weight="bold">2 · a + 3</text>
</g>
<g stroke="currentColor" stroke-width="1.5" opacity="0.7">
<line x1="60" y1="60" x2="150" y2="200"/>
<line x1="190" y1="60" x2="225" y2="125"/>
<line x1="260" y1="60" x2="225" y2="125"/>
<line x1="225" y1="125" x2="150" y2="200"/>
<line x1="390" y1="60" x2="425" y2="125"/>
<line x1="460" y1="60" x2="425" y2="125"/>
<line x1="425" y1="125" x2="490" y2="200"/>
<line x1="560" y1="60" x2="490" y2="200"/>
</g>
<g font-size="17" text-anchor="middle">
<circle cx="60" cy="55" r="18" fill="#397b96" fill-opacity="0.25"/><text x="60" y="61" fill="currentColor">2</text>
<circle cx="190" cy="55" r="18" fill="#397b96" fill-opacity="0.25"/><text x="190" y="61" fill="currentColor">a</text>
<circle cx="260" cy="55" r="18" fill="#397b96" fill-opacity="0.25"/><text x="260" y="61" fill="currentColor">3</text>
<circle cx="225" cy="125" r="18" fill="#9A6B2F" fill-opacity="0.5"/><text x="225" y="131" fill="currentColor">+</text>
<circle cx="150" cy="200" r="22" fill="#bb0a21" fill-opacity="0.6"/><text x="150" y="206" fill="currentColor">·</text>
<circle cx="390" cy="55" r="18" fill="#397b96" fill-opacity="0.25"/><text x="390" y="61" fill="currentColor">2</text>
<circle cx="460" cy="55" r="18" fill="#397b96" fill-opacity="0.25"/><text x="460" y="61" fill="currentColor">a</text>
<circle cx="560" cy="55" r="18" fill="#397b96" fill-opacity="0.25"/><text x="560" y="61" fill="currentColor">3</text>
<circle cx="425" cy="125" r="18" fill="#9A6B2F" fill-opacity="0.5"/><text x="425" y="131" fill="currentColor">·</text>
<circle cx="490" cy="200" r="22" fill="#bb0a21" fill-opacity="0.6"/><text x="490" y="206" fill="currentColor">+</text>
</g>
<g font-size="15" text-anchor="middle" fill="currentColor">
<text x="150" y="250">zuletzt: mal → Produkt</text>
<text x="490" y="250">zuletzt: plus → Summe</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Gleiche Zahlen, gleiche Rechenzeichen, aber ein anderer Term. Die Klammer entscheidet, was zuletzt gerechnet wird.</figcaption>
</figure>

:::multievent

Setze $a = 5$ ein: $2 \cdot (a + 3) =$ {z{16}} und $2 \cdot a + 3 =$ {z{13}}.

:::

## Sätze übersetzen

:::snippet{#aufgabe}

**1** Wähle den passenden Term und bestimme seinen Typ.

:::

:::multievent

| Satz | Term | Typ |
| --- | --- | --- |
| Addiere $x$ zur Summe der Zahlen $25$ und $y$. | {A{!(25 + y) + x|25 + y · x|x · (25 + y)}} | {A{!Summe|Produkt|Differenz}} |
| Multipliziere die Summe der Zahlen $x$ und $y$ mit deren Differenz. | {A{x + y · x − y|!(x + y) · (x − y)|(x + y) − (x − y)}} | {A{Summe|!Produkt|Differenz}} |
| Subtrahiere vom Produkt der Zahlen $a$ und $b$ den Quotienten dieser Zahlen. | {A{a : b − a · b|!a · b − a : b|(a − b) · (a : b)}} | {A{Quotient|Produkt|!Differenz}} |
| Dividiere die Summe aus $x$ und $6$ durch die dritte Potenz von $2$. | {A{x + 6 : 2³|!(x + 6) : 2³|(x + 6) : (2 · 3)}} | {A{Summe|!Quotient|Potenz}} |
| Subtrahiere das Quadrat der Zahl $s$ von der Summe der Zahlen $r$, $s$ und $t$. | {A{s² − (r + s + t)|!(r + s + t) − s²|(r + s + t − s)²}} | {A{Summe|Potenz|!Differenz}} |

{b{Bei „subtrahiere A von B“ steht B vorne: B − A. Wird eine Summe oder Differenz weiterverarbeitet, braucht sie eine Klammer.}}

:::

## Vier Sätze, zwei Terme

:::snippet{#aufgabe}

**2** Stelle zu jedem Satz den Term auf. Welche Terme sind **wertgleich**, liefern also für jede Einsetzung dasselbe?

1. Multipliziere $4$ mit $a$ und subtrahiere davon $b$.
2. Bilde die Differenz aus dem Vierfachen von $a$ und dem Vierfachen von $b$.
3. Subtrahiere die Differenz aus $b$ und $a$ von dem Dreifachen von $a$.
4. Multipliziere die Differenz aus $a$ und $b$ mit $4$.

:::

:::multievent

Setze $a = 3$ und $b = 1$ ein.

| Satz | 1 | 2 | 3 | 4 |
| --- | :---: | :---: | :---: | :---: |
| Termwert | {z{11}} | {z{8}} | {z{11}} | {z{8}} |

Wertgleich sind die Sätze {A{1 und 2|!1 und 3|1 und 4}} sowie die Sätze {A{2 und 3|!2 und 4|3 und 4}}.

{b{1: 4a − b. 2: 4a − 4b. 3: 3a − (b − a) = 4a − b. 4: (a − b) · 4 = 4a − 4b. Satz 1 und 3 ergeben denselben Term, ebenso Satz 2 und 4.}}

:::

:::alert{warn}

**Vorsicht beim Prüfen durch Einsetzen:** Für $b = 0$ liefern alle vier Terme denselben Wert. Eine einzige Übereinstimmung beweist also noch nichts. Ein einziges Gegenbeispiel zeigt dagegen sicher, dass zwei Terme **nicht** wertgleich sind.

:::

## Terme deuten

Eine Kinovorstellung besuchen $x$ Erwachsene und $y$ Kinder. Erwachsene zahlen $p$ Euro, Kinder $q$ Euro Eintritt.

:::snippet{#aufgabe}

**3** Was beschreibt der Term?

:::

:::multievent

| Term | Bedeutung |
| --- | --- |
| $p \cdot x + q \cdot y$ | {A{!die Einnahmen der ganzen Vorstellung|die Zahl der Besucher|der Preis für eine Familie}} |
| $x + y$ | {A{die Einnahmen|!die Zahl aller Besucher|der Preis für zwei Karten}} |
| $2p + 3q$ | {A{!der Eintritt für 2 Erwachsene und 3 Kinder|der Eintritt für 3 Erwachsene und 2 Kinder|die Zahl der Besucher}} |
| $p \cdot x + \frac{1}{2} p \cdot y$ | {A{Kinder zahlen das Doppelte|!Kinder zahlen den halben Preis|die Hälfte der Besucher sind Kinder}} |

:::

:::snippet{#aufgabe}

**4** Der Preis für Erwachsene steigt um $1$ €.

:::

:::multievent

Welcher Term beschreibt die neuen Einnahmen? {A{p · x + 1 + q · y|!(p + 1) · x + q · y|p · x + q · y + 1 · y}}

Mit $x = 40$, $y = 20$, $p = 9$ und $q = 5$ betragen die Einnahmen vorher {z{460}} € und nachher {z{500}} €.

{b{Jeder der x Erwachsenen zahlt einen Euro mehr. Das sind x Euro zusätzlich: (p + 1) · x + q · y = p · x + x + q · y. Mit den Zahlen: 400 + 100 = 500 €.}}

:::

## Fehlerlabor

:::snippet{#aufgabe}

**5** Jede Übersetzung enthält einen Fehler. Wähle den richtigen Term.

:::

:::multievent

| Text | falsch | richtig |
| --- | --- | --- |
| Subtrahiere $5$ von $x$. | $5 - x$ | {A{!x − 5|−5 − x|5 · x}} |
| das Doppelte der Summe aus $a$ und $3$ | $2a + 3$ | {A{2 + a + 3|!2 · (a + 3)|(2a)²}} |
| $25$ Kinder kaufen je ein Heft für $h$ € und einen Stift für $s$ €. | $25 \cdot h + s$ | {A{25 + h + s|!25 · (h + s)|25 · h · s}} |
| Eine Jacke für $j$ € wird um $20\,\%$ reduziert. | $j - 20$ | {A{!0,8 · j|0,2 · j|j − 0,2}} |

{b{Prüfe einen Term mit einer Zahl: Eine Jacke für 50 € kostet nach 20 % Rabatt 40 €. 0,8 · 50 = 40, aber 50 − 20 = 30.}}

:::

:::snippet{#merken}

**Textaufgaben in vier Schritten**

1. **Verstehen:** Was ist gegeben, was ist gesucht?
2. **Variablen vereinbaren:** „$x$: Anzahl der Erwachsenen“ – nicht nur „$x$ = Erwachsene“.
3. **Term aufstellen:** Teilterme bilden, zusammensetzen, Klammern prüfen.
4. **Prüfen und antworten:** Setze eine einfache Zahl ein und prüfe, ob das Ergebnis passt.

:::
