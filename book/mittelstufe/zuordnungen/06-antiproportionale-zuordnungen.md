---
name: 🌾 Antiproportionale Zuordnungen
index: 6
lang: de
permaid: mittelstufe-zuordnungen-antiproportional
---

# Antiproportionale Zuordnungen

:::alert{info}

📓 **Im Arbeitsheft (S. 24–32)** hast du in der Ich- und Du-Phase berechnet, wie lange die Ackerfläche der Schule reicht. **Hier** verstehst du, *warum* zum Doppelten die Hälfte gehört, warum der Graph eine Hyperbel ist und wie du antiproportionale von proportionalen Zuordnungen unterscheidest.

:::

## Die Idee: Ein fester Vorrat wird geteilt

Bei antiproportionalen Zuordnungen gibt es immer etwas, das **gleich bleibt**: einen Vorrat, eine Strecke, eine Arbeit. Dieses Ganze wird aufgeteilt.

**Beispiel:** Eine Pizza hat 12 Stücke. Sie wird gerecht verteilt.

<figure style="text-align:center;margin:1em 0;">
<svg viewBox="0 0 640 230" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Balkenmodell: 12 Pizzastücke verteilt auf 1, 2, 3 und 4 Personen ergeben 12, 6, 4 und 3 Stücke pro Person">
<g font-size="15" fill="currentColor">
<text x="10" y="38">1 Person</text><text x="10" y="88">2 Personen</text><text x="10" y="138">3 Personen</text><text x="10" y="188">4 Personen</text>
<text x="520" y="38">12 Stücke</text><text x="520" y="88">je 6 Stücke</text><text x="520" y="138">je 4 Stücke</text><text x="520" y="188">je 3 Stücke</text>
</g>
<g stroke="#fff" stroke-width="3">
<rect x="110" y="18" width="396" height="30" fill="#e07a90"/>
<rect x="110" y="68" width="198" height="30" fill="#e07a90"/><rect x="308" y="68" width="198" height="30" fill="#f2a58c"/>
<rect x="110" y="118" width="132" height="30" fill="#e07a90"/><rect x="242" y="118" width="132" height="30" fill="#f2a58c"/><rect x="374" y="118" width="132" height="30" fill="#e07a90"/>
<rect x="110" y="168" width="99" height="30" fill="#e07a90"/><rect x="209" y="168" width="99" height="30" fill="#f2a58c"/><rect x="308" y="168" width="99" height="30" fill="#e07a90"/><rect x="407" y="168" width="99" height="30" fill="#f2a58c"/>
</g>
<text x="308" y="222" font-size="14" fill="currentColor" text-anchor="middle">Der Balken ist immer gleich lang: Das Ganze bleibt 12 Stücke.</text>
</svg>
</figure>

- Kommt eine zweite Person dazu, muss das Ganze auf **doppelt** so viele verteilt werden – jede bekommt die **Hälfte**.
- Bei **dreimal** so vielen Personen bekommt jede ein **Drittel**.
- Das **Produkt** bleibt immer gleich: $2 \cdot 6 = 3 \cdot 4 = 4 \cdot 3 = 12$. Das ist der ganze Vorrat.

:::snippet{#merken}

Eine Zuordnung heißt **antiproportional**, wenn zum Doppelten (Dreifachen, …) der Ausgangsgröße die **Hälfte** (ein Drittel, …) der zugeordneten Größe gehört.

- **Graph:** eine **Hyperbel**. Sie fällt und nähert sich beiden Achsen, ohne sie zu berühren.
- **Zuordnungsvorschrift:** $y = \frac{c}{x}$, dabei ist $c$ das Ganze, das verteilt wird.

:::

## Proportional und antiproportional im Vergleich

| | proportional | antiproportional |
| --- | --- | --- |
| Beispiel | Anzahl Pizzen → Preis | Anzahl Personen → Stücke pro Person |
| Was passiert beim Verdoppeln? | doppelt so viel | halb so viel |
| Tabelle | $1 \to 8$, $2 \to 16$, $4 \to 32$ | $1 \to 12$, $2 \to 6$, $4 \to 3$ |
| Was bleibt gleich? | der Quotient $\frac{y}{x}$ | das Produkt $x \cdot y$ |
| Graph | Halbgerade durch den Ursprung | Hyperbel |

## Ausprobieren: Rechtecke unter der Hyperbel

36 Bonbons werden gerecht auf Kinder verteilt. Ziehe den roten Punkt über den Graphen. Das Rechteck ist so breit wie die Anzahl der Kinder und so hoch wie die Bonbons pro Kind.

:::jsxgraph{height="440" width="720" boundingbox="[-1.4,41,15,-5]" axis=false grid=false}

```js
board.create('arrow', [[0,0],[14.5,0]], { strokeColor: '#444', fixed: true });
board.create('arrow', [[0,0],[0,39]], { strokeColor: '#444', fixed: true });
for (var i = 1; i <= 14; i++) {
  board.create('text', [i, -2, String(i)], { anchorX: 'middle', fontSize: 12, fixed: true });
  board.create('segment', [[i,0],[i,37]], { strokeColor: '#f2f2f2', fixed: true, highlight: false });
}
for (var j = 4; j <= 36; j += 4) {
  board.create('text', [-0.2, j, String(j)], { anchorX: 'right', anchorY: 'middle', fontSize: 12, fixed: true });
  board.create('segment', [[0,j],[14,j]], { strokeColor: '#f2f2f2', fixed: true, highlight: false });
}
board.create('text', [14.4, -4, 'Anzahl Kinder'], { anchorX: 'right', fontSize: 13, fixed: true });
board.create('text', [0.2, 39.5, 'Bonbons pro Kind'], { fontSize: 13, fixed: true });
var f = board.create('functiongraph', [function (x) { return 36 / x; }, 36 / 38, 14],
  { strokeColor: '#e07a90', strokeWidth: 3, fixed: true });
var P = board.create('glider', [3, 12, f], { name: '', size: 6, color: '#bb0a21' });
board.create('polygon', [[0,0], [function () { return P.X(); }, 0], function () { return [P.X(), P.Y()]; },
  [0, function () { return P.Y(); }]], {
  fillColor: '#e07a90', fillOpacity: 0.25, fixed: true, vertices: { visible: false },
  borders: { strokeColor: '#e07a90', strokeWidth: 1 }
});
var komma = function (z) { return String(Math.round(z * 100) / 100).replace('.', ','); };
board.create('text', [5, 31, function () {
  return komma(P.X()) + ' Kinder · ' + komma(P.Y()) + ' Bonbons = ' + komma(P.X() * P.Y());
}], { fontSize: 18, strokeColor: '#bb0a21', fixed: true });
```

:::

:::multievent

- Bei 4 Kindern bekommt jedes {z{9}} Bonbons, bei 12 Kindern {z{3}} Bonbons.
- Das Produkt ist immer {z{36}}. Die Fläche des Rechtecks {A{wird größer|wird kleiner|!bleibt gleich}}.
- Wird das Rechteck breiter, wird es {A{auch höher|!flacher|nicht verändert}}.
- Bei 5 Kindern bekommt jedes rechnerisch {z{7,2}} Bonbons. In echt geht das nicht – hier stößt das Modell an seine Grenzen.

:::

## Warum berührt die Hyperbel die Achsen nie?

- **Die $x$-Achse:** Egal wie viele Kinder es sind – jedes bekommt immer noch ein kleines bisschen. $36 : 1000 = 0{,}036$ ist zwar winzig, aber nicht 0.
- **Die $y$-Achse:** Bei 0 Kindern gibt es nichts zu verteilen. Durch 0 kann man nicht teilen.

Deshalb kommt die Hyperbel den Achsen immer näher, erreicht sie aber nie.

## Graph erkennen

:::jsxgraph{height="240" width="720" boundingbox="[-0.6,8.6,32.5,-1.8]" axis=false grid=false}

```js
var graphen = [
  { x: 0.3, name: 'A', f: function (t) { return 6 / Math.max(t, 0.75); }, von: 0.75 },
  { x: 8.4, name: 'B', f: function (t) { return 7.5 - t; }, von: 0 },
  { x: 16.5, name: 'C', f: function (t) { return t; }, von: 0 },
  { x: 24.6, name: 'D', f: function (t) { return 7.5 - 0.15 * t * t; }, von: 0 }
];
graphen.forEach(function (g) {
  board.create('arrow', [[g.x,0],[g.x+7.2,0]], { strokeColor: '#444', fixed: true });
  board.create('arrow', [[g.x,0],[g.x,8]], { strokeColor: '#444', fixed: true });
  board.create('text', [g.x+3.5, -1, 'Graph ' + g.name], { anchorX: 'middle', fontSize: 15, fixed: true });
  board.create('curve', [function (t) { return g.x + t; }, function (t) { return g.f(t); }, g.von, 7],
    { strokeColor: '#e07a90', strokeWidth: 3, fixed: true, highlight: false });
});
```

:::

:::multievent

| Graph | Welche Zuordnung? |
| --- | --- |
| A | {R20{proportional}} {R20{!antiproportional}} {R20{keins von beidem}} |
| B | {R21{proportional}} {R21{antiproportional}} {R21{!keins von beidem}} |
| C | {R22{!proportional}} {R22{antiproportional}} {R22{keins von beidem}} |
| D | {R23{proportional}} {R23{antiproportional}} {R23{!keins von beidem}} |

{h{Graph B fällt zwar, aber er trifft die x-Achse. Eine Hyperbel tut das nie.}}

:::

## Antiproportional oder nicht?

:::multievent

| Situation | antiproportional? |
| --- | --- |
| Geschwindigkeit → Fahrzeit für 120 km | {R1{!ja}} {R1{nein}} |
| Anzahl Gäste → Kosten für das Essen | {R2{ja}} {R2{!nein}} |
| Breite eines Rechtecks mit 24 cm² → Länge | {R3{!ja}} {R3{nein}} |
| Alter eines Autos → Wert | {R4{ja}} {R4{!nein}} |
| Anzahl Helfer → Zeit zum Aufräumen der Turnhalle | {R5{!ja}} {R5{nein}} |

{h{Suche das Ganze, das gleich bleibt: die Strecke, die Fläche, die Arbeit. Beim Auto gibt es so ein Ganzes nicht.}}

:::

:::alert{warn}

**Typische Fehler**

- **„Je mehr – desto weniger“ heißt nicht automatisch antiproportional.** Ein Auto verliert mit jedem Jahr an Wert. Nach doppelt so vielen Jahren ist es aber nicht genau halb so viel wert.
- **Einen fallenden geraden Graphen für eine Hyperbel halten:** Eine Hyperbel ist gekrümmt und erreicht die Achsen nie.
- **Bei 0 anfangen:** Bei antiproportionalen Zuordnungen gibt es keinen Wert für $x = 0$.

:::

## 🎲 Trainer: Wie viel bekommt jeder?

Mit ↵ bekommst du eine neue Aufgabe.

:::multievent

{X{48 Bonbons, 6 Kinder: Bonbons pro Kind|120 km, 60 km/h: Fahrzeit in Stunden|Ein Vorrat reicht 1 Person 90 Tage. Wie lange reicht er 5 Personen?|36 cm² Fläche, Breite 4 cm: Länge in cm|Eine Arbeit dauert für 1 Helfer 12 Stunden. Wie lange für 3 Helfer?|200 € Gewinn, 8 Gewinner: Euro pro Person}}

Ergebnis: {Z{8|2|18|9|4|25}}

:::

:::alert{info}

**Weiter üben:** *Elemente der Mathematik 7*, S. 33, Aufg. 3, 5–6 · S. 34, Aufg. 7–10

:::
