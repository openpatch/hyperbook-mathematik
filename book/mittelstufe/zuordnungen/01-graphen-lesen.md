---
name: 📈 Graphen lesen
index: 1
lang: de
permaid: mittelstufe-zuordnungen-graphen-lesen
---

# Graphen lesen und beschreiben

:::alert{info}

📓 **Im Arbeitsheft (S. 3–7)** hast du die Sprechweisen kennengelernt und Graphen zur Bevölkerung und zum Stromverbrauch gelesen. **Hier** erfährst du, wie du beim Ablesen sicher vorgehst, was die *Steilheit* eines Graphen verrät und wie du selbst einen guten Graphen zeichnest.

:::

## So liest du einen Graphen ab

Ein Graph beantwortet immer dieselbe Frage: **Welcher Wert gehört zu welchem Wert?** Beim Ablesen gehst du immer in derselben Reihenfolge vor.

:::snippet{#merken}

**Einen Wert ablesen**

1. Lies die **Achsenbeschriftungen**: Was steht auf der $x$-Achse, was auf der $y$-Achse – und in welcher Einheit?
2. Suche den bekannten Wert auf der **$x$-Achse**.
3. Gehe **senkrecht** nach oben bis zum Graphen.
4. Gehe **waagerecht** nach links bis zur $y$-Achse und lies dort ab.

Einen Graphen liest du immer **von links nach rechts** – so wie du einen Text liest.

:::

Probier es aus: Ziehe den Punkt auf der Zeitachse. Die gestrichelten Linien zeigen dir den Weg vom Wert auf der $x$-Achse zum Wert auf der $y$-Achse.

:::jsxgraph{height="400" width="720" boundingbox="[-1.6,118,14.3,-20]" axis=false grid=false}

```js
// Akkustand eines Handys an einem Schultag (eigene Daten)
var pkt = [[7,100],[9,84],[11,69],[12,69],[13,69],[14,44],[15,18],[16,58],[17,100],[19,78],[20,61]];
var wert = function (t) {
  for (var i = 0; i < pkt.length - 1; i++) {
    var a = pkt[i], b = pkt[i + 1];
    if (t >= a[0] && t <= b[0]) return a[1] + (b[1] - a[1]) * (t - a[0]) / (b[0] - a[0]);
  }
  return pkt[pkt.length - 1][1];
};
var trend = function (t) {
  for (var i = 0; i < pkt.length - 1; i++) {
    var a = pkt[i], b = pkt[i + 1];
    if (t >= a[0] && t < b[0]) {
      var d = (b[1] - a[1]) / (b[0] - a[0]);
      if (Math.abs(d) < 0.01) return 'bleibt konstant';
      var art = Math.abs(d) >= 20 ? 'stark' : 'langsam';
      return (d > 0 ? 'steigt ' : 'fällt ') + art + ' (' + (d > 0 ? '+' : '') + Math.round(d) + ' % pro Stunde)';
    }
  }
  return '';
};
board.create('arrow', [[0,0],[14,0]], { strokeColor: '#444', strokeWidth: 1.5, fixed: true });
board.create('arrow', [[0,0],[0,112]], { strokeColor: '#444', strokeWidth: 1.5, fixed: true });
for (var h = 7; h <= 20; h++) {
  board.create('segment', [[h-7,-2],[h-7,2]], { strokeColor: '#444', fixed: true });
  board.create('text', [h-7, -6, String(h)], { anchorX: 'middle', fontSize: 12, fixed: true });
}
for (var p = 25; p <= 100; p += 25) {
  board.create('segment', [[0,p],[13,p]], { strokeColor: '#e5e5e5', fixed: true, highlight: false });
  board.create('text', [-0.25, p, String(p)], { anchorX: 'right', anchorY: 'middle', fontSize: 12, fixed: true });
}
board.create('text', [13.9, -12, 'Uhrzeit'], { anchorX: 'right', fontSize: 13, fixed: true });
board.create('text', [0.2, 110, 'Akku in %'], { fontSize: 13, fixed: true });
board.create('curve', [pkt.map(function (q) { return q[0] - 7; }), pkt.map(function (q) { return q[1]; })],
  { strokeColor: '#e08a3c', strokeWidth: 3.5, fixed: true, highlight: false });
var achse = board.create('segment', [[0,0],[13,0]], { visible: false });
var X = board.create('glider', [3, 0, achse], { name: '', size: 6, color: '#397b96' });
var t = function () { return Math.round((X.X() + 7) * 4) / 4; };
var G = board.create('point', [function () { return t() - 7; }, function () { return wert(t()); }],
  { name: '', size: 4, color: '#bb0a21', fixed: true });
board.create('segment', [X, G], { strokeColor: '#397b96', dash: 2, fixed: true });
board.create('segment', [G, [0, function () { return G.Y(); }]], { strokeColor: '#bb0a21', dash: 2, fixed: true });
var uhr = function (z) { var hh = Math.floor(z), mm = Math.round((z - hh) * 60); return hh + ':' + (mm < 10 ? '0' : '') + mm; };
board.create('text', [0.3, -15, function () {
  return 'Um ' + uhr(t()) + ' Uhr: Akku ' + Math.round(wert(t())) + ' %. Der Graph ' + trend(t()) + '.';
}], { fontSize: 16, fixed: true, strokeColor: '#bb0a21' });
```

:::

## Steil oder flach? Die Steilheit erzählt mit

Ob ein Graph steigt oder fällt, weißt du schon. Genauso wichtig ist, **wie schnell** sich etwas ändert:

- **steiler** Graph → der Wert ändert sich **schnell**,
- **flacher** Graph → der Wert ändert sich **langsam**,
- **waagerechter** Graph → der Wert ändert sich **gar nicht** (konstant).

:::multievent

Schau dir oben den Akku-Graphen an.

- Zwischen 13 und 15 Uhr {A{!fällt der Graph steil|fällt der Graph flach|steigt der Graph}}. Mia hat vermutlich Videos geschaut.
- Am Morgen zwischen 7 und 11 Uhr {A{fällt der Graph steil|!fällt der Graph flach|bleibt der Graph konstant}}.
- Am schnellsten **lädt** der Akku zwischen {A{15 und 16 Uhr|!16 und 17 Uhr|17 und 19 Uhr}} – dort ist der Graph am steilsten.

{h{Fahre mit dem blauen Punkt die Abschnitte ab und vergleiche die Angaben „% pro Stunde“.}}

:::

## Welcher Graph erzählt die Geschichte?

:::snippet{#aufgabe}

**Badewanne:** Lea lässt Wasser in die Badewanne ein. Dann steigt sie hinein, badet eine Weile und zieht am Ende den Stöpsel. Welcher Graph zeigt den **Wasserstand** in der Wanne?

:::

:::jsxgraph{height="250" width="720" boundingbox="[-0.5,11,31,-2.5]" axis=false grid=false}

```js
var graphen = [
  { x: 0.5, name: 'A', pkt: [[0,0],[3,6],[3.15,8],[6.5,8],[8.5,0]] },
  { x: 11, name: 'B', pkt: [[0,0],[3,6],[6.5,6],[8.5,0]] },
  { x: 21.5, name: 'C', pkt: [[0,6],[0.15,8],[6.5,8],[8.5,0]] }
];
graphen.forEach(function (g) {
  board.create('arrow', [[g.x,0],[g.x+9,0]], { strokeColor: '#444', fixed: true });
  board.create('arrow', [[g.x,0],[g.x,10]], { strokeColor: '#444', fixed: true });
  board.create('text', [g.x+8.9, -1.3, 'Zeit'], { anchorX: 'right', fontSize: 12, fixed: true });
  board.create('text', [g.x+0.2, 10.2, 'Wasserstand'], { fontSize: 12, fixed: true });
  board.create('text', [g.x+4.2, -1.6, 'Graph ' + g.name], { anchorX: 'middle', fontSize: 15, fixed: true });
  board.create('curve', [g.pkt.map(function (q) { return g.x + q[0]; }), g.pkt.map(function (q) { return q[1]; })],
    { strokeColor: '#e08a3c', strokeWidth: 3, fixed: true, highlight: false });
});
```

:::

:::multievent

Der passende Graph ist {r1{!Graph A}} {r1{Graph B}} {r1{Graph C}}.

{h{Beim Einsteigen steigt der Wasserstand plötzlich ein Stück an. Beim Baden bleibt er konstant. Und wo beginnt der Wasserstand?}}
{H{Genau: Erst steigt der Wasserstand gleichmäßig, beim Einsteigen springt er hoch, dann bleibt er konstant und fällt am Ende. Bei Graph B fehlt der Sprung, bei Graph C ist die Wanne am Anfang schon voll.}}

:::

:::multievent

Beschreibe Graph A mit den Fachwörtern:

- Am Anfang {A{!steigt|fällt|bleibt konstant}} der Graph gleichmäßig.
- Beim Einsteigen {A{!steigt|fällt}} er ganz {A{!steil|flach}} – fast senkrecht.
- Während Lea badet, {A{steigt|fällt|!bleibt}} er {A{steil|!konstant}}.
- Am Ende {A{steigt|!fällt|bleibt konstant}} er {A{!steil|flach}} bis auf 0.

:::

## Bevölkerung: genauer hinschauen

Im Arbeitsheft hast du den Graphen zur Bevölkerung von NRW gelesen. Hier kannst du ihn **genau** abtasten: Ziehe den blauen Punkt am Graphen entlang.

:::jsxgraph{height="400" width="720" boundingbox="[1962,19.3,2074,14.6]" axis=false grid=false}

```js
var hist = [[1970,17.02],[1971,17.14],[1972,17.2],[1973,17.24],[1974,17.21],[1975,17.13],[1976,17.07],[1977,17.03],[1978,17.0],[1979,17.02],[1980,17.06],[1981,17.04],[1982,16.95],[1983,16.82],[1984,16.7],[1985,16.68],[1986,16.68],[1987,16.76],[1988,16.9],[1989,17.12],[1990,17.32],[1991,17.53],[1992,17.68],[1993,17.76],[1994,17.82],[1995,17.9],[1996,17.95],[1997,17.97],[1998,17.98],[1999,18.0],[2000,18.01],[2001,18.05],[2002,18.08],[2003,18.08],[2004,18.07],[2005,18.06],[2006,18.03],[2007,17.99],[2008,17.93],[2009,17.87],[2010,17.8],[2011,17.56],[2012,17.56],[2013,17.58],[2014,17.66],[2015,17.86],[2016,17.89],[2017,17.91],[2018,17.94],[2019,17.95],[2020,17.93],[2021,17.95],[2022,18.12]];
var v5 = [[2023,18.18],[2024,18.21],[2025,18.25],[2026,18.29],[2027,18.33],[2028,18.36],[2029,18.39],[2030,18.41],[2031,18.44],[2032,18.45],[2033,18.47],[2034,18.49],[2035,18.5],[2036,18.52],[2037,18.52],[2038,18.53],[2039,18.54],[2040,18.55],[2041,18.55],[2042,18.55],[2043,18.55],[2044,18.55],[2045,18.55],[2046,18.55],[2047,18.55],[2048,18.54],[2049,18.54],[2050,18.53],[2051,18.53],[2052,18.53],[2053,18.52],[2054,18.52],[2055,18.53],[2056,18.53],[2057,18.53],[2058,18.54],[2059,18.55],[2060,18.57],[2061,18.59],[2062,18.6],[2063,18.62],[2064,18.65],[2065,18.68],[2066,18.7],[2067,18.73],[2068,18.76],[2069,18.78],[2070,18.81]];
var v2 = [[2023,18.11],[2024,18.12],[2025,18.13],[2026,18.14],[2027,18.14],[2028,18.15],[2029,18.15],[2030,18.14],[2031,18.14],[2032,18.13],[2033,18.12],[2034,18.11],[2035,18.09],[2036,18.07],[2037,18.06],[2038,18.04],[2039,18.02],[2040,17.99],[2041,17.97],[2042,17.95],[2043,17.92],[2044,17.89],[2045,17.87],[2046,17.84],[2047,17.8],[2048,17.78],[2049,17.75],[2050,17.71],[2051,17.68],[2052,17.65],[2053,17.62],[2054,17.58],[2055,17.56],[2056,17.53],[2057,17.49],[2058,17.47],[2059,17.44],[2060,17.42],[2061,17.4],[2062,17.37],[2063,17.36],[2064,17.34],[2065,17.32],[2066,17.32],[2067,17.3],[2068,17.29],[2069,17.28],[2070,17.27]];
var v4 = [[2023,18.04],[2024,18.03],[2025,18.02],[2026,18.0],[2027,17.97],[2028,17.96],[2029,17.92],[2030,17.88],[2031,17.85],[2032,17.8],[2033,17.76],[2034,17.72],[2035,17.67],[2036,17.62],[2037,17.57],[2038,17.52],[2039,17.47],[2040,17.41],[2041,17.37],[2042,17.32],[2043,17.24],[2044,17.19],[2045,17.14],[2046,17.08],[2047,17.01],[2048,16.95],[2049,16.89],[2050,16.83],[2051,16.76],[2052,16.7],[2053,16.63],[2054,16.56],[2055,16.5],[2056,16.43],[2057,16.36],[2058,16.29],[2059,16.23],[2060,16.17],[2061,16.1],[2062,16.04],[2063,15.97],[2064,15.92],[2065,15.86],[2066,15.8],[2067,15.74],[2068,15.69],[2069,15.63],[2070,15.58]];
board.create('arrow', [[1968,15],[2073,15]], { strokeColor: '#444', fixed: true });
board.create('arrow', [[1968,15],[1968,19.2]], { strokeColor: '#444', fixed: true });
for (var j = 1970; j <= 2070; j += 10) {
  board.create('segment', [[j,14.97],[j,15.03]], { strokeColor: '#444', fixed: true });
  board.create('text', [j, 14.85, String(j)], { anchorX: 'middle', fontSize: 12, fixed: true });
}
for (var m = 15; m <= 19; m += 0.5) {
  board.create('segment', [[1968,m],[2070,m]], { strokeColor: m % 1 === 0 ? '#ccc' : '#eee', fixed: true, highlight: false });
  if (m % 1 === 0) board.create('text', [1966.8, m, String(m)], { anchorX: 'right', anchorY: 'middle', fontSize: 12, fixed: true });
}
board.create('text', [1968.5, 19.15, 'Anzahl in Millionen'], { fontSize: 12, fixed: true });
var linie = function (d, farbe) {
  return board.create('curve', [d.map(function (q) { return q[0]; }), d.map(function (q) { return q[1]; })],
    { strokeColor: farbe, strokeWidth: 3, fixed: true, highlight: false });
};
linie(v4, '#f2a58c'); linie(v2, '#f07350'); linie(v5, '#b4411e');
var blau = linie(hist, '#0050a0');
board.create('text', [2071, 18.85, 'Variante 5'], { anchorX: 'right', fontSize: 12, strokeColor: '#b4411e', fixed: true });
board.create('text', [2071, 17.05, 'Variante 2'], { anchorX: 'right', fontSize: 12, strokeColor: '#f07350', fixed: true });
board.create('text', [2071, 15.35, 'Variante 4'], { anchorX: 'right', fontSize: 12, strokeColor: '#e07a5f', fixed: true });
var P = board.create('glider', [1990, 17.4, blau], { name: '', size: 5, color: '#0050a0' });
board.create('text', [1972, 16.0, function () {
  return Math.round(P.X()) + ': etwa ' + P.Y().toFixed(2).replace('.', ',') + ' Millionen';
}], { fontSize: 16, strokeColor: '#0050a0', fixed: true });
```

:::

<small>Daten: Statistisches Bundesamt, ab 2023: 15. koordinierte Bevölkerungsvorausberechnung; nach einer Grafik des Demografie-Portals des Bundes und der Länder, neu gezeichnet.</small>

:::multievent

- Seit 1970 hatte NRW die **wenigsten** Einwohner im Jahr {z{1984|1985|1986}}. Das ist ein {A{Hochpunkt|!Tiefpunkt}} des Graphen.
- Am **steilsten** steigt der blaue Graph zwischen {A{1970 und 1980|!1987 und 1995|2003 und 2010}}. Damals zogen viele Menschen nach NRW.
- Um 2011 fällt der Graph plötzlich um etwa {z{0,3|0,25|0,35}} Millionen. Grund war eine neue Volkszählung: Man hatte vorher **zu viele** Menschen gezählt.
- Variante 5 und Variante 4 liegen 2070 etwa {z{3,2|3,1|3,3}} Millionen auseinander.

:::

## Tipps für deinen eigenen Graphen

Im Arbeitsheft (S. 7) zeichnest du einen Graphen zu deinem Stromverbrauch. Ein guter Graph hat:

:::multievent

Hake ab, was dein Graph schon hat.

{c{!beschriftete Achsen: Was steht auf der $x$-Achse, was auf der $y$-Achse?}} \
{c{!eine gleichmäßige Einteilung: Jedes Kästchen bedeutet gleich viel.}} \
{c{!die Ausgangsgröße (hier: Uhrzeit) auf der $x$-Achse}} \
{c{!markierte besondere Stellen: Hochpunkt, Tiefpunkt}} \
{c{!steile Abschnitte dort, wo sich viel schnell ändert}}

:::

:::alert{warn}

**Typische Fehler**

- **Achsen vertauscht:** Die Ausgangsgröße (hier die Zeit) gehört auf die $x$-Achse.
- **Ungleichmäßige Einteilung:** Wenn ein Kästchen einmal 1 Stunde und einmal 3 Stunden bedeutet, sieht der Graph falsch steil aus.
- **Hochpunkt mit Maximum verwechselt:** Ein Hochpunkt ist der höchste Punkt *in seiner Umgebung*. Ein Graph kann mehrere Hochpunkte haben.

:::
