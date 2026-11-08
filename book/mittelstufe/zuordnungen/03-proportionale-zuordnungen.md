---
name: 🌱 Proportionale Zuordnungen
index: 3
lang: de
permaid: mittelstufe-zuordnungen-proportional
---

# Proportionale Zuordnungen

:::alert{info}

📓 **Im Arbeitsheft (S. 15–18)** hast du ausgerechnet, wie viel Ackerfläche verschiedene Mahlzeiten brauchen, und das Merkblatt gelesen. **Hier** verstehst du, *warum* der Graph immer eine Halbgerade durch den Ursprung ist, was der Proportionalitätsfaktor bedeutet und wie du proportionale Zuordnungen von anderen unterscheidest.

:::

## Die Idee: Jede Einheit bringt gleich viel dazu

Stell dir vor, eine Portion braucht immer **gleich viel** Ackerfläche, zum Beispiel 2 m². Dann kommen für jede weitere Portion wieder genau 2 m² dazu:

<figure style="text-align:center;margin:1em 0;">
<svg viewBox="0 0 640 170" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Balkenmodell: 1 Portion ein Feld, 2 Portionen zwei Felder, 3 Portionen drei Felder zu je 2 Quadratmetern">
<g font-size="15" fill="currentColor">
<text x="10" y="38">1 Portion</text><text x="10" y="88">2 Portionen</text><text x="10" y="138">3 Portionen</text>
<text x="480" y="38">2 m²</text><text x="480" y="88">4 m²</text><text x="480" y="138">6 m²</text>
</g>
<g fill="#2bb3ad" stroke="#fff" stroke-width="3">
<rect x="120" y="18" width="110" height="30"/>
<rect x="120" y="68" width="110" height="30"/><rect x="230" y="68" width="110" height="30"/>
<rect x="120" y="118" width="110" height="30"/><rect x="230" y="118" width="110" height="30"/><rect x="340" y="118" width="110" height="30"/>
</g>
<g font-size="14" fill="#fff" text-anchor="middle">
<text x="175" y="38">2 m²</text><text x="175" y="88">2 m²</text><text x="285" y="88">2 m²</text>
<text x="175" y="138">2 m²</text><text x="285" y="138">2 m²</text><text x="395" y="138">2 m²</text>
</g>
</svg>
</figure>

Daraus folgen alle Eigenschaften auf einmal:

- **Doppelt** so viele Portionen sind **doppelt** so viele Felder – also doppelt so viel Fläche.
- **0** Portionen brauchen **0** m². Der Graph beginnt im **Ursprung** $(0 \mid 0)$.
- Mit jeder Portion geht es **um gleich viel** nach oben. Deshalb liegen alle Punkte auf einer **Geraden**.

:::snippet{#merken}

Eine Zuordnung heißt **proportional**, wenn zum Doppelten (Dreifachen, zur Hälfte, …) der Ausgangsgröße das Doppelte (Dreifache, die Hälfte, …) der zugeordneten Größe gehört.

- **Graph:** eine **Halbgerade**, die im **Ursprung** beginnt.
- **Zuordnungsvorschrift:** $y = k \cdot x$
- **Proportionalitätsfaktor** $k$: der Wert, der zu **1** gehört (hier: 2 m² für 1 Portion).

:::

## Ausprobieren: Was macht $k$?

Stelle mit dem Schieberegler ein, wie viel **eine** Portion braucht. Beobachte die Punkte, den Graphen und die rote Treppe: Mit jeder Portion geht es um $k$ nach oben.

:::jsxgraph{height="440" width="720" boundingbox="[-1.4,27,11.5,-4]" axis=false grid=false}

```js
var k = board.create('slider', [[1, 24.5], [6, 24.5], [0.25, 2, 2.5]], {
  name: '', withLabel: false, snapWidth: 0.05,
  strokeColor: '#2bb3ad', fillColor: '#2bb3ad', highline: { strokeColor: '#2bb3ad' }
});
var kv = function () { return Math.round(k.Value() * 20) / 20; };
var komma = function (z) { return String(Math.round(z * 100) / 100).replace('.', ','); };
board.create('text', [6.4, 24.5, function () { return 'k = ' + komma(kv()) + ' m² pro Portion'; }],
  { fontSize: 16, anchorY: 'middle', strokeColor: '#2bb3ad', fixed: true });
board.create('arrow', [[0,0],[11,0]], { strokeColor: '#444', fixed: true });
board.create('arrow', [[0,0],[0,23]], { strokeColor: '#444', fixed: true });
for (var i = 1; i <= 10; i++) {
  board.create('segment', [[i,0],[i,22]], { strokeColor: '#eee', fixed: true, highlight: false });
  board.create('text', [i, -1.2, String(i)], { anchorX: 'middle', fontSize: 12, fixed: true });
}
for (var j = 5; j <= 20; j += 5) {
  board.create('segment', [[0,j],[10.5,j]], { strokeColor: '#eee', fixed: true, highlight: false });
  board.create('text', [-0.2, j, String(j)], { anchorX: 'right', anchorY: 'middle', fontSize: 12, fixed: true });
}
board.create('text', [10.9, -2.8, 'Portionen'], { anchorX: 'right', fontSize: 13, fixed: true });
board.create('text', [0.2, 22.6, 'Fläche in m²'], { fontSize: 13, fixed: true });
board.create('functiongraph', [function (x) { return kv() * x; }, 0, function () { return Math.min(10.5, 22 / kv()); }],
  { strokeColor: '#2bb3ad', strokeWidth: 2, dash: 2, fixed: true });
for (var n = 1; n <= 10; n++) {
  (function (n) {
    var sichtbar = function () { return kv() * n <= 22; };
    board.create('point', [n, function () { return kv() * n; }],
      { name: '', size: 3.5, color: '#2bb3ad', fixed: true, visible: sichtbar });
    board.create('segment', [[n - 1, function () { return kv() * (n - 1); }], [n, function () { return kv() * (n - 1); }]],
      { strokeColor: '#bb0a21', strokeWidth: 1.5, fixed: true, visible: sichtbar });
    board.create('segment', [[n, function () { return kv() * (n - 1); }], [n, function () { return kv() * n; }]],
      { strokeColor: '#bb0a21', strokeWidth: 2.5, fixed: true, visible: sichtbar });
  })(n);
}
board.create('text', [5.5, 2, function () { return 'y = ' + komma(kv()) + ' · x'; }],
  { fontSize: 20, strokeColor: '#bb0a21', fixed: true });
```

:::

:::multievent

- Je größer $k$ ist, desto {A{flacher|!steiler}} ist der Graph.
- Jede rote Stufe ist genau {A{1 hoch|!k hoch|x hoch}}.
- Für $k = 0{,}5$ gehört zu 7 Portionen eine Fläche von {z{3,5}} m².
- Bei welchem $k$ geht der Graph durch den Punkt $(4 \mid 6)$? $k =$ {z{1,5}}

{h{Für den letzten Punkt: Zu 4 Portionen gehören 6 m². Wie viel gehört dann zu 1 Portion?}}

:::

## Proportional oder nicht? Der Blick auf den Graphen

Beim Graphen musst du **zwei** Dinge prüfen: Ist er eine **Gerade**? Und beginnt er im **Ursprung**? Nur wenn beides stimmt, ist die Zuordnung proportional.

:::jsxgraph{height="260" width="720" boundingbox="[-0.6,8.6,32.5,-1.8]" axis=false grid=false}

```js
var graphen = [
  { x: 0.3, name: 'A', f: function (t) { return 0.7 * t; } },
  { x: 8.4, name: 'B', f: function (t) { return 2 + 0.6 * t; } },
  { x: 16.5, name: 'C', f: function (t) { return 0.1 * t * t; } },
  { x: 24.6, name: 'D', f: function (t) { return 0.35 * t; } }
];
graphen.forEach(function (g) {
  board.create('arrow', [[g.x,0],[g.x+7.2,0]], { strokeColor: '#444', fixed: true });
  board.create('arrow', [[g.x,0],[g.x,8]], { strokeColor: '#444', fixed: true });
  board.create('text', [g.x+3.5, -1, 'Graph ' + g.name], { anchorX: 'middle', fontSize: 15, fixed: true });
  board.create('curve', [function (t) { return g.x + t; }, function (t) { return g.f(t); }, 0, 7],
    { strokeColor: '#2bb3ad', strokeWidth: 3, fixed: true, highlight: false });
});
```

:::

:::multievent

| Graph | proportional? |
| --- | --- |
| A | {R1{!ja}} {R1{nein}} |
| B | {R2{ja}} {R2{!nein}} |
| C | {R3{ja}} {R3{!nein}} |
| D | {R4{!ja}} {R4{nein}} |

{h{Graph B ist eine Gerade, beginnt aber nicht im Ursprung. Graph C beginnt im Ursprung, ist aber keine Gerade.}}
{H{Richtig! Bei B gibt es einen „Grundbetrag“ wie die Grundgebühr beim Taxi. Bei C wächst der Wert immer schneller, wie die Fläche eines Quadrats auf dem Deckblatt deines Hefts.}}

:::

## Proportional oder nicht? Der Blick auf die Situation

:::multievent

| Situation | proportional? |
| --- | --- |
| Anzahl Brötchen → Preis (ohne Rabatt) | {R5{!ja}} {R5{nein}} |
| Seitenlänge eines Quadrats → Flächeninhalt | {R6{ja}} {R6{!nein}} |
| Seitenlänge eines Quadrats → Umfang | {R7{!ja}} {R7{nein}} |
| Handyvertrag mit 5 € Grundgebühr: Minuten → Kosten | {R8{ja}} {R8{!nein}} |
| Liter Wasser → Gewicht in kg | {R9{!ja}} {R9{nein}} |
| Alter → Schuhgröße | {R10{ja}} {R10{!nein}} |

{h{Verdopple jeweils die Ausgangsgröße. Verdoppelt sich die zugeordnete Größe auch? Bei einem Quadrat mit doppelter Seitenlänge passen viermal so viele Kästchen hinein.}}

:::

:::alert{warn}

**Typische Fehler**

- **„Je mehr – desto mehr“ heißt nicht automatisch proportional.** Beim Handyvertrag zahlst du mehr, je länger du telefonierst. Doppelt so viele Minuten kosten aber nicht doppelt so viel, weil die Grundgebühr gleich bleibt.
- **Eine Gerade reicht nicht.** Sie muss im Ursprung beginnen.
- **$k$ ist der Wert für 1, nicht für irgendeinen Wert aus der Tabelle.**

:::

## 🎲 Trainer: Tabellen ergänzen

Die Zuordnung ist proportional. Finde zuerst $k$ (den Wert für 1), dann den gesuchten Wert. Mit ↵ bekommst du eine neue Aufgabe.

:::multievent

{X{2 kg Äpfel kosten 5 €. Was kosten 7 kg?|4 Stunden Arbeit bringen 48 €. Wie viel bringen 10 Stunden?|3 Hefte wiegen 240 g. Wie viel wiegen 8 Hefte?|5 l Saft kosten 6 €. Was kosten 2 l?|Ein Drucker schafft 30 Seiten in 2 Minuten. Wie viele in 9 Minuten?|0,5 kg Käse kosten 7 €. Was kosten 1,5 kg?}}

Ergebnis: {Z{17,5|120|640|2,4|135|21}}

:::

:::alert{info}

**Weiter üben:** *Elemente der Mathematik 7*, S. 19, Aufg. 1–4 · S. 20, Aufg. 7–9 · S. 21, Aufg. 11–12

:::
