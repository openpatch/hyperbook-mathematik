---
name: 🔢 Dreisatz
index: 4
lang: de
permaid: mittelstufe-zuordnungen-dreisatz
---

# Dreisatz bei proportionalen Zuordnungen

:::alert{info}

📓 **Im Arbeitsheft (S. 19)** steht das Verfahren mit drei Schritten. **Hier** siehst du, *warum* der Dreisatz funktioniert, wie du einen geschickten Hilfswert wählst und welche Fehler oft passieren.

:::

## Warum funktioniert der Dreisatz?

Bei einer proportionalen Zuordnung gehört zu jeder Einheit **gleich viel**. Der Dreisatz macht genau das sichtbar: Erst findest du heraus, wie viel zu **einer** Einheit gehört, dann nimmst du davon so viele, wie du brauchst.

**Beispiel:** 5 kg Kartoffeln kosten 4,50 €. Was kosten 3 kg?

<figure style="text-align:center;margin:1em 0;">
<svg viewBox="0 0 640 190" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Balkenmodell: 5 Kilogramm sind 5 Blöcke zu 0,90 Euro, 1 Kilogramm ist ein Block, 3 Kilogramm sind 3 Blöcke, zusammen 2,70 Euro">
<g font-size="15" fill="currentColor">
<text x="10" y="38">5 kg</text><text x="10" y="98">1 kg</text><text x="10" y="158">3 kg</text>
<text x="540" y="38">4,50 €</text><text x="540" y="98">0,90 €</text><text x="540" y="158" font-weight="bold">2,70 €</text>
</g>
<g fill="#2bb3ad" stroke="#fff" stroke-width="3">
<rect x="70" y="18" width="90" height="30"/><rect x="160" y="18" width="90" height="30"/><rect x="250" y="18" width="90" height="30"/><rect x="340" y="18" width="90" height="30"/><rect x="430" y="18" width="90" height="30"/>
<rect x="70" y="78" width="90" height="30"/>
<rect x="70" y="138" width="90" height="30"/><rect x="160" y="138" width="90" height="30"/><rect x="250" y="138" width="90" height="30"/>
</g>
<g font-size="13" fill="#fff" text-anchor="middle">
<text x="115" y="38">0,90 €</text><text x="205" y="38">0,90 €</text><text x="295" y="38">0,90 €</text><text x="385" y="38">0,90 €</text><text x="475" y="38">0,90 €</text>
<text x="115" y="98">0,90 €</text>
<text x="115" y="158">0,90 €</text><text x="205" y="158">0,90 €</text><text x="295" y="158">0,90 €</text>
</g>
<g font-size="14" fill="#bb0a21"><text x="180" y="72">: 5 (einen Block nehmen)</text><text x="180" y="132">· 3 (drei Blöcke nehmen)</text></g>
</svg>
</figure>

Ziehe den Schieberegler und sieh dir den Dreisatz Schritt für Schritt an:

:::jsxgraph{height="300" width="720" boundingbox="[0,10,24,0]" axis=false grid=false}

```js
var s = board.create('slider', [[1, 9], [7, 9], [1, 1, 3]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var st = function () { return Math.round(s.Value()); };
var texte = ['', 'Schritt 1: Eintragen', 'Schritt 2: Zurückrechnen auf 1 kg', 'Schritt 3: Hochrechnen auf 3 kg'];
board.create('text', [8, 9, function () { return texte[st()]; }], { fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96' });
var x0 = 2, w = 4.5, ys = [6.2, 4.2];
var zellen = [['Gewicht in kg', '5', '1', '3'], ['Preis in €', '4,50', '0,90', '2,70']];
for (var r = 0; r < 2; r++) {
  for (var c = 0; c < 4; c++) {
    (function (r, c) {
      board.create('polygon', [[x0 + c * w, ys[r]], [x0 + (c + 1) * w, ys[r]], [x0 + (c + 1) * w, ys[r] - 2], [x0 + c * w, ys[r] - 2]],
        { fillColor: c === 0 ? '#ddd' : '#fff', fillOpacity: 1, fixed: true, vertices: { visible: false },
          borders: { strokeColor: '#666' } });
      board.create('text', [x0 + c * w + w / 2, ys[r] - 1, zellen[r][c]], {
        anchorX: 'middle', anchorY: 'middle', fontSize: 17, fixed: true,
        strokeColor: (c === 3 && r === 1) ? '#bb0a21' : '#222',
        visible: function () {
          if (c === 2) return st() >= 2;
          if (c === 3 && r === 1) return st() >= 3;
          return true;
        }
      });
    })(r, c);
  }
}
var bogen = function (von, nach, oben, txt, ab) {
  var y = oben ? ys[0] + 0.15 : ys[1] - 2.15, h = oben ? 1.1 : -1.1;
  var a = x0 + von * w + w / 2, b = x0 + nach * w + w / 2;
  board.create('curve', [function (t) { return a + (b - a) * t; }, function (t) { return y + h * 4 * t * (1 - t); }, 0, 1],
    { strokeColor: '#bb0a21', strokeWidth: 2, fixed: true, lastArrow: true, visible: function () { return st() >= ab; } });
  board.create('text', [(a + b) / 2, y + h * 1.25, txt], { anchorX: 'middle', anchorY: 'middle', fontSize: 15,
    strokeColor: '#bb0a21', fixed: true, visible: function () { return st() >= ab; } });
};
bogen(1, 2, true, ': 5', 2); bogen(1, 2, false, ': 5', 2);
bogen(2, 3, true, '· 3', 3); bogen(2, 3, false, '· 3', 3);
board.create('text', [x0, 0.5, function () { return st() === 3 ? 'Antwort: 3 kg Kartoffeln kosten 2,70 €.' : ''; }],
  { fontSize: 16, fixed: true, strokeColor: '#bb0a21' });
```

:::

:::snippet{#merken}

Was du mit der **einen** Größe machst, machst du mit der **anderen** genauso: Teilst du die Kilogramm durch 5, teilst du auch den Preis durch 5.

Das klappt nur, weil die Zuordnung **proportional** ist. Prüfe das immer zuerst.

:::

## Den Hilfswert klug wählen

Du musst nicht immer auf **1** zurückrechnen. Oft geht es mit einem anderen Hilfswert leichter.

| Aufgabe | geschickter Weg |
| --- | --- |
| 250 g kosten 3 €. Was kosten 400 g? | über **50 g**: 250 : 5 = 50, dann 50 · 8 = 400 |
| 4 Karten kosten 34 €. Was kosten 12 Karten? | **direkt**: 12 = 4 · 3, also 34 € · 3 |
| 6 Eier kosten 1,80 €. Was kosten 9 Eier? | über **3 Eier**: 6 : 2 = 3, dann 3 · 3 = 9 |

:::multievent

Welcher Hilfswert ist hier am geschicktesten?

- 200 g Kirschen kosten 2,40 €. Was kosten 500 g? {A{1 g|!100 g|200 g}}
- 8 Brötchen kosten 3,20 €. Was kosten 2 Brötchen? {A{1 Brötchen|!direkt durch 4|16 Brötchen}}
- 15 l Benzin kosten 27 €. Was kosten 40 l? {A{!5 l|3 l|20 l}}

:::

:::multievent

Rechne jetzt mit deinem Hilfswert aus:

- 500 g Kirschen kosten {z{6}} €.
- 2 Brötchen kosten {z{0,8}} €.
- 40 l Benzin kosten {z{72}} €.

:::

## Fehler finden

:::snippet{#aufgabe}

Jonas hat gerechnet: „3 Pizzen kosten 24 €. Wie viel kosten 5 Pizzen?“

| Pizzen | 3 | 1 | 5 |
| --- | :-: | :-: | :-: |
| Preis in € | 24 | 72 | 360 |

:::

:::multievent

Was hat Jonas falsch gemacht? {A{Er hätte die Pizzen mit 3 multiplizieren müssen.|!Beim Preis hat er mit 3 multipliziert statt durch 3 geteilt.|Er hat den falschen Hilfswert gewählt.}}

Richtig ist: 1 Pizza kostet {z{8}} €, 5 Pizzen kosten {z{40}} €.

{h{Prüfe mit dem gesunden Menschenverstand: Kann eine Pizza teurer sein als drei Pizzen?}}

:::

:::alert{warn}

**Typische Fehler**

- **Nur eine Zeile umgerechnet:** Beide Größen müssen durch dieselbe Zahl geteilt und mit derselben Zahl multipliziert werden.
- **Die Richtung verwechselt:** Weniger Ware muss weniger kosten. Prüfe dein Ergebnis mit einer Überschlagsrechnung.
- **Der Antwortsatz fehlt:** Eine Zahl allein beantwortet die Frage nicht. Schreibe: „3 kg Kartoffeln kosten 2,70 €.“

:::

## Jetzt du

:::multievent

**a)** 5 Portionen Burger brauchen 11,25 m² Ackerfläche. Wie viel brauchen 3 Portionen?

| Portionen | 5 | 1 | 3 |
| --- | :-: | :-: | :-: |
| Fläche in m² | 11,25 | {z{2,25}} | {z{6,75}} |

{b{Tipp: Teile 11,25 durch 5. Das Ergebnis multiplizierst du mit 3.}}

:::

:::multievent

**b)** Für 250 g Nudeln braucht man 2,5 l Wasser. Wie viel Wasser braucht man für 400 g Nudeln?

| Nudeln in g | 250 | 50 | 400 |
| --- | :-: | :-: | :-: |
| Wasser in l | 2,5 | {z{0,5}} | {z{4}} |

:::

:::multievent

**c)** Eine Portion Asia-Pfanne braucht 0,65 m². Für wie viele Portionen reichen 26 m²?

| Fläche in m² | 0,65 | 26 |
| --- | :-: | :-: |
| Portionen | 1 | {z{40}} |

{b{Tipp: Wie oft passt 0,65 in 26? Rechne 26 : 0,65.}}

:::

## 🎲 Dreisatz-Trainer

Mit ↵ bekommst du eine neue Aufgabe.

:::multievent

{X{4 Hefte kosten 6,80 €. Was kosten 7 Hefte?|6 Brötchen kosten 2,10 €. Was kosten 10 Brötchen?|2 l Saft kosten 3,20 €. Was kosten 5 l?|300 g Käse kosten 4,20 €. Was kosten 500 g?|12 Eier kosten 3,60 €. Was kosten 18 Eier?|7 m Stoff kosten 31,50 €. Was kosten 4 m?}}

Ergebnis in €: {Z{11,9|3,5|8|7|5,4|18}}

:::

:::alert{warn}

Der Dreisatz in dieser Form gilt nur für **proportionale** Zuordnungen. Wie du rechnest, wenn die Zuordnung **antiproportional** ist, steht auf der Seite [✖️ Produktgleichheit und Dreisatz](/mittelstufe/zuordnungen/07-produktgleichheit).

:::

:::alert{info}

**Weiter üben:** *Elemente der Mathematik 7*, S. 24, Aufg. 1–2 · S. 25, Aufg. 3–7 · S. 26, Aufg. 9–13

:::
