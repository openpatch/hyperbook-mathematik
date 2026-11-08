---
name: ➗ Quotientengleichheit
index: 5
lang: de
permaid: mittelstufe-zuordnungen-quotient
---

# Quotientengleichheit

:::alert{info}

📓 **Im Arbeitsheft (S. 19)** steht, dass bei proportionalen Zuordnungen alle Quotienten gleich sind. **Hier** siehst du, *warum* das so ist, was der Quotient am Graphen bedeutet und wie du damit jede Tabelle sicher prüfst.

:::

## Warum sind die Quotienten gleich?

Bei einer proportionalen Zuordnung gilt $y = k \cdot x$. Teilst du beide Seiten durch $x$, bleibt

$$\frac{y}{x} = k.$$

Der Quotient $\frac{y}{x}$ ist also **immer der Proportionalitätsfaktor** – egal, welches Wertepaar du nimmst. Er sagt dir, wie viel zu **einer** Einheit gehört.

:::snippet{#merken}

**Quotientengleichheit:** Eine Zuordnung ist genau dann proportional, wenn der Quotient

$$\frac{\text{zugeordnete Größe}}{\text{Ausgangsgröße}} = \frac{y}{x}$$

für **alle** Wertepaare gleich ist. Dieser Quotient ist der Proportionalitätsfaktor $k$.

:::

## Der Quotient am Graphen

Ziehe den Punkt $P$ auf dem Graphen. Das Dreieck zeigt dir $x$ (waagerecht) und $y$ (senkrecht). Schalte dann auf „mit Grundgebühr“ um.

:::jsxgraph{height="420" width="720" boundingbox="[-1,23,13,-5]" axis=false grid=false}

```js
var schalter = board.create('checkbox', [0.3, 21.5, ' mit Grundgebühr (4 €)'], { fontSize: 15, fixed: true });
var b = function () { return schalter.Value() ? 4 : 0; };
var f = function (x) { return b() + 1.5 * x; };
board.create('arrow', [[0,0],[12.5,0]], { strokeColor: '#444', fixed: true });
board.create('arrow', [[0,0],[0,20.5]], { strokeColor: '#444', fixed: true });
for (var i = 1; i <= 12; i++) {
  board.create('segment', [[i,0],[i,20]], { strokeColor: '#f0f0f0', fixed: true, highlight: false });
  board.create('text', [i, -1, String(i)], { anchorX: 'middle', fontSize: 12, fixed: true });
}
for (var j = 2; j <= 20; j += 2) {
  board.create('segment', [[0,j],[12,j]], { strokeColor: '#f0f0f0', fixed: true, highlight: false });
  board.create('text', [-0.15, j, String(j)], { anchorX: 'right', anchorY: 'middle', fontSize: 12, fixed: true });
}
board.create('text', [12.4, -2.5, 'Strecke in km'], { anchorX: 'right', fontSize: 13, fixed: true });
board.create('text', [0.15, 20.4, 'Preis in €'], { fontSize: 13, fixed: true });
var G = board.create('functiongraph', [f, 0, 11], { strokeColor: '#2bb3ad', strokeWidth: 3, fixed: true });
var achse = board.create('segment', [[0.5,0],[10.5,0]], { visible: false });
var Q = board.create('glider', [4, 0, achse], { name: '', size: 5, color: '#397b96' });
var xv = function () { return Math.round(Q.X() * 2) / 2; };
var P = board.create('point', [xv, function () { return f(xv()); }], { name: 'P', size: 5, color: '#bb0a21', fixed: true });
board.create('polygon', [[0,0], [xv, 0], [xv, function () { return f(xv()); }]],
  { fillColor: '#bb0a21', fillOpacity: 0.12, fixed: true, vertices: { visible: false }, borders: { strokeColor: '#bb0a21', dash: 2 } });
var komma = function (z) { return String(Math.round(z * 100) / 100).replace('.', ','); };
board.create('text', [0.3, -3.8, function () {
  return 'x = ' + komma(xv()) + ' km,  y = ' + komma(f(xv())) + ' €,  y : x = ' + komma(f(xv()) / xv());
}], { fontSize: 17, fixed: true, strokeColor: '#bb0a21' });
```

:::

:::multievent

- **Ohne** Grundgebühr ist der Quotient $\frac{y}{x}$ immer {z{1,5}}. Das ist der Preis für {z{1}} km.
- **Mit** Grundgebühr {A{bleibt der Quotient gleich|!ändert sich der Quotient}}, wenn du $P$ verschiebst.
- Mit Grundgebühr ist die Zuordnung {A{proportional|!nicht proportional}}, obwohl der Graph eine Gerade ist.

{h{Mit Grundgebühr: Rechne für 2 km und für 8 km jeweils Preis : Strecke.}}

:::

## So prüfst du eine Tabelle

1. Berechne für **jede** Spalte den Quotienten $\frac{y}{x}$.
2. Sind **alle** gleich → proportional. Ist auch nur **einer** anders → nicht proportional.
3. Der gemeinsame Quotient ist $k$. Damit kannst du jeden weiteren Wert berechnen: $y = k \cdot x$.

:::multievent

**a)** Anzahl Kinokarten → Preis

| $x$ | 2 | 3 | 5 |
| --- | :-: | :-: | :-: |
| $y$ in € | 17 | 25,50 | 42,50 |
| $\frac{y}{x}$ | {z{8,5}} | {z{8,5}} | {z{8,5}} |

Die Zuordnung ist {A{!proportional|nicht proportional}}. 9 Karten kosten {z{76,5}} €.

:::

:::multievent

**b)** Alter eines Kindes in Jahren → Körpergröße

| $x$ | 2 | 4 | 8 |
| --- | :-: | :-: | :-: |
| $y$ in cm | 88 | 104 | 128 |
| $\frac{y}{x}$ | {z{44}} | {z{26}} | {z{16}} |

Die Zuordnung ist {A{proportional|!nicht proportional}}.

:::

:::multievent

**c)** Liter Benzin → Preis

| $x$ in l | 10 | 25 | 40 |
| --- | :-: | :-: | :-: |
| $y$ in € | 17,90 | 44,75 | 71,60 |
| $\frac{y}{x}$ | {z{1,79}} | {z{1,79}} | {z{1,79}} |

Die Zuordnung ist {A{!proportional|nicht proportional}}. Ein Liter kostet {z{1,79}} €.

:::

:::multievent

**d)** Gewicht eines Pakets → Porto

| $x$ in kg | 1 | 2 | 5 |
| --- | :-: | :-: | :-: |
| $y$ in € | 5,49 | 5,49 | 8,49 |
| $\frac{y}{x}$ | {z{5,49}} | {z{2,745}} | {z{1,698}} |

Rechne genau, ohne zu runden. Die Zuordnung ist {A{proportional|!nicht proportional}}. Beim Porto zahlst du für eine ganze Gewichtsstufe, nicht für jedes Kilogramm.

:::

## Rechnen mit dem Faktor: Geld umtauschen

Beim Geldwechseln ist die Zuordnung **Euro → Fremdwährung** proportional. Der Wechselkurs ist der Proportionalitätsfaktor.

:::multievent

Für 1 € bekommst du 1,08 US-Dollar. Also ist $k =$ {z{1,08}}.

| Euro | 1 | 10 | 50 | 200 |
| --- | :-: | :-: | :-: | :-: |
| US-Dollar | 1,08 | {z{10,8}} | {z{54}} | {z{216}} |

Für 27 US-Dollar musst du {z{25}} € umtauschen.

{h{Für die letzte Lücke rechnest du rückwärts: 27 : 1,08.}}

:::

:::alert{warn}

**Typische Fehler**

- **Nur zwei Spalten geprüft:** Alle Quotienten müssen gleich sein. Beim Porto sind die ersten beiden nur zufällig ähnlich.
- **Quotient falsch herum gebildet:** Rechne immer *zugeordnete Größe : Ausgangsgröße*, also $\frac{y}{x}$.
- **Rundungsfehler:** Kommen beim Messen leicht unterschiedliche Quotienten heraus (z. B. 1,99 und 2,01), kann die Zuordnung trotzdem proportional sein. Das liegt dann an Messungenauigkeiten.

:::

:::alert{info}

**Weiter üben:** *Elemente der Mathematik 7*, S. 29, Aufg. 5–7 · S. 30, Aufg. 8 · zum Knobeln S. 30, Aufg. 9–12

:::
