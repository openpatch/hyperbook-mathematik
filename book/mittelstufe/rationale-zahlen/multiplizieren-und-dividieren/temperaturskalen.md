---
name: 🌡️ Temperaturskalen
index: 9
lang: de
---

# Temperaturskalen

:::alert{info}

**Darum geht's:** In den USA misst man die Temperatur in **Grad Fahrenheit (°F)**, bei uns in **Grad Celsius (°C)**. Du rechnest zwischen beiden Skalen um – und dabei kommen negative Zahlen vor.

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 500 350" width="500" style="max-width:100%;height:auto;" role="img" aria-label="Thermometer mit Celsius-Skala links und Fahrenheit-Skala rechts: 0 Grad Celsius sind 32 Grad Fahrenheit, 100 Grad Celsius sind 212 Grad Fahrenheit">
<text x="175" y="22" font-size="16" font-weight="bold" text-anchor="middle" fill="#397b96">°C</text>
<text x="285" y="22" font-size="16" font-weight="bold" text-anchor="middle" fill="#bb0a21">°F</text>
<rect x="210" y="30" width="40" height="275" rx="20" fill="none" stroke="currentColor" stroke-width="2.5"/>
<rect x="221" y="170.3" width="18" height="134.7" rx="9" fill="#bb0a21"/>
<circle cx="230" cy="315" r="26" fill="#bb0a21" stroke="currentColor" stroke-width="2.5"/>
<line x1="196" y1="290.0" x2="210" y2="290.0" stroke="currentColor"/><text x="190" y="295.0" font-size="14" text-anchor="end" fill="currentColor">−20</text>
<line x1="196" y1="248.0" x2="210" y2="248.0" stroke="currentColor"/><text x="190" y="253.0" font-size="14" text-anchor="end" fill="currentColor">0</text>
<line x1="196" y1="206.0" x2="210" y2="206.0" stroke="currentColor"/><text x="190" y="211.0" font-size="14" text-anchor="end" fill="currentColor">20</text>
<line x1="196" y1="164.0" x2="210" y2="164.0" stroke="currentColor"/><text x="190" y="169.0" font-size="14" text-anchor="end" fill="currentColor">40</text>
<line x1="196" y1="122.0" x2="210" y2="122.0" stroke="currentColor"/><text x="190" y="127.0" font-size="14" text-anchor="end" fill="currentColor">60</text>
<line x1="196" y1="80.0" x2="210" y2="80.0" stroke="currentColor"/><text x="190" y="85.0" font-size="14" text-anchor="end" fill="currentColor">80</text>
<line x1="196" y1="38.0" x2="210" y2="38.0" stroke="currentColor"/><text x="190" y="43.0" font-size="14" text-anchor="end" fill="currentColor">100</text>
<line x1="250" y1="285.3333333333333" x2="264" y2="285.3333333333333" stroke="currentColor"/><text x="270" y="290.3333333333333" font-size="14" fill="currentColor">0</text>
<line x1="250" y1="248.0" x2="264" y2="248.0" stroke="currentColor"/><text x="270" y="253.0" font-size="14" fill="currentColor">32</text>
<line x1="250" y1="227.0" x2="264" y2="227.0" stroke="currentColor"/><text x="270" y="232.0" font-size="14" fill="currentColor">50</text>
<line x1="250" y1="168.66666666666666" x2="264" y2="168.66666666666666" stroke="currentColor"/><text x="270" y="173.66666666666666" font-size="14" fill="currentColor">100</text>
<line x1="250" y1="110.33333333333331" x2="264" y2="110.33333333333331" stroke="currentColor"/><text x="270" y="115.33333333333331" font-size="14" fill="currentColor">150</text>
<line x1="250" y1="38.0" x2="264" y2="38.0" stroke="currentColor"/><text x="270" y="43.0" font-size="14" fill="currentColor">212</text>
<line x1="300" y1="38.0" x2="340" y2="38.0" stroke="currentColor" stroke-dasharray="3 3" opacity="0.6"/><text x="346" y="43.0" font-size="14" fill="currentColor">Wasser kocht</text>
<line x1="300" y1="170.3" x2="340" y2="170.3" stroke="currentColor" stroke-dasharray="3 3" opacity="0.6"/><text x="346" y="175.3" font-size="14" fill="currentColor">Körpertemperatur</text>
<line x1="300" y1="248.0" x2="340" y2="248.0" stroke="currentColor" stroke-dasharray="3 3" opacity="0.6"/><text x="346" y="253.0" font-size="14" fill="currentColor">Wasser gefriert</text>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Links Grad Celsius, rechts Grad Fahrenheit. 0 °C sind 32 °F, 100 °C sind 212 °F.</figcaption>
</figure>

## Von Fahrenheit nach Celsius

:::snippet{#merken}

1. Subtrahiere $32$.
2. Multipliziere das Ergebnis mit $5$.
3. Dividiere das Ergebnis durch $9$.

Als Term: $\quad C = (F - 32) \cdot 5 : 9$

:::

:::snippet{#beispiel}

$212$ °F: $\quad (212 - 32) \cdot 5 : 9 = 180 \cdot 5 : 9 = 100$ °C

$14$ °F: $\quad (14 - 32) \cdot 5 : 9 = (-18) \cdot 5 : 9 = -10$ °C

:::

::bitflow{id="rationale-zahlen-temperatur" src="temperatur.bitflow" height="auto" maxHeight="85vh"}

## Forschungsauftrag: Interessante Temperaturen

:::snippet{#aufgabe}

Recherchiere interessante Temperaturen, zum Beispiel den Gefrierpunkt von Wasser, die tiefste Temperatur in Deutschland oder den absoluten Nullpunkt. Lege eine Tabelle in Celsius und Fahrenheit an.

| Temperatur in °C | in °F | Bedeutung |
| --- | --- | --- |
| 100 | 212 | Siedepunkt von Wasser |
| … | … | … |

:::

::::collapsible{title="🔬 Für Profis: die Kelvin-Skala" id="rz-temperatur-kelvin"}

Neben Celsius und Fahrenheit gibt es die **Kelvin-Skala**. Schau dir das Video an und bearbeite die Aufgaben.

::youtube{#JKu_Wr8wuq4}

- Erkläre, wie Celsius und Kelvin zusammenhängen.
- Erkläre, wie man von Celsius in Kelvin umrechnet.
- Ergänze deine Tabelle um eine Spalte für Kelvin (K).

::::
