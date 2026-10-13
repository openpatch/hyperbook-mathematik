---
name: 🧮 Terme berechnen
index: 5
lang: de
---

# Terme mit rationalen Zahlen berechnen

:::alert{info}

**Darum geht's:** In einer Rechnung kommen oft mehrere Rechenarten vor. Du lernst, in welcher **Reihenfolge** gerechnet wird – auch mit negativen Zahlen.

:::

## Einstieg: Die Wetterprognose

Am Montagmorgen ist es $-3$ °C. Die Vorhersage: Bis Freitag wird es **jeden Tag 1,5 °C kälter**.

:::multievent

Von Montag bis Freitag vergehen {z{4}} Tage. $\qquad -3 + 4 \cdot (-1{,}5) =$ {z{-9}} °C

{b{Zuerst wird 4 · (−1,5) = −6 gerechnet (Punkt vor Strich). Dann −3 + (−6) = −9.}}

:::

## Die Reihenfolge

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 205" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Treppe der Rechenreihenfolge: 1. Klammern, 2. Potenzen, 3. Punktrechnung, 4. Strichrechnung">
<rect x="20" y="25" width="142" height="170" rx="6" fill="#9A6B2F" fill-opacity="0.85"/><text x="91" y="55" font-size="22" font-weight="bold" text-anchor="middle" fill="#fff">1. Klammern</text><text x="91" y="87" font-size="24" text-anchor="middle" fill="#fff">( )</text>
<rect x="170" y="61" width="142" height="134" rx="6" fill="#bb0a21" fill-opacity="0.85"/><text x="241" y="91" font-size="22" font-weight="bold" text-anchor="middle" fill="#fff">2. Potenzen</text><text x="241" y="123" font-size="24" text-anchor="middle" fill="#fff">x²</text>
<rect x="320" y="97" width="142" height="98" rx="6" fill="#397b96" fill-opacity="0.85"/><text x="391" y="127" font-size="22" font-weight="bold" text-anchor="middle" fill="#fff">3. Punkt</text><text x="391" y="159" font-size="24" text-anchor="middle" fill="#fff">·  :</text>
<rect x="470" y="133" width="142" height="62" rx="6" fill="#5a8f3c" fill-opacity="0.85"/><text x="541" y="163" font-size="22" font-weight="bold" text-anchor="middle" fill="#fff">4. Strich</text><text x="541" y="195" font-size="24" text-anchor="middle" fill="#fff">+  −</text>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Steige die Treppe von oben nach unten hinab. Auf einer Stufe rechnest du von links nach rechts.</figcaption>
</figure>

:::snippet{#merken}

**Reihenfolge beim Rechnen**

1. **Klammern** zuerst, bei Klammern in Klammern die innerste zuerst
2. **Potenzen**
3. **Punktrechnung**: mal und geteilt
4. **Strichrechnung**: plus und minus

Auf derselben Stufe rechnest du **von links nach rechts**.

:::

:::snippet{#beispiel}

$$
\begin{aligned}
14 - 4 \cdot (-2)^3 &= 14 - 4 \cdot (-8) &&\text{2. Potenz} \\
&= 14 - (-32) &&\text{3. Punkt vor Strich} \\
&= 14 + 32 = 46 &&\text{4. Strich}
\end{aligned}
$$

:::

## Üben

:::snippet{#aufgabe}

**1** Rechne Schritt für Schritt.

:::

:::multievent

- $12 + 8 : (-2) = 12 + ($ {z{-4}} $) =$ {z{8}}
- $(-2)^4 - 24 =$ {z{16}} $- 24 =$ {z{-8}}
- $(-4) : (3 - 11) = (-4) : ($ {z{-8}} $) =$ {z{0,5}}
- $-6 + (-4)^3 = -6 + ($ {z{-64}} $) =$ {z{-70}}

:::

:::snippet{#aufgabe}

**2** Die Klasse 7b hat beim Schulfest $180$ € eingenommen. Davon soll ein Ausflug für alle $24$ Kinder bezahlt werden. Pro Kind kostet er $9{,}50$ €. Reicht das Geld?

:::

:::multievent

$(180 - 24 \cdot 9{,}5) : 24 = (180 -$ {z{228}} $) : 24 =$ {z{-48}} $: 24 =$ {z{-2}}

Das Ergebnis ist negativ: Jedes Kind muss noch {z{2}} € {A{!dazubezahlen|zurückbekommen}}.

:::

## Teste dich

Zuerst kommen Grundlagen. Wenn sie sitzen, geht es mit Profi-Aufgaben weiter, sonst mit einer Extra-Übung.

::bitflow{id="rationale-zahlen-terme" src="terme.bitflow" height="auto" maxHeight="85vh"}
