---
name: 💡 Minus mal minus?
index: 1
lang: de
---

# Minus mal minus – was kommt da raus?

:::alert{info}

**Darum geht's:** Du findest selbst heraus, welches Vorzeichen ein Produkt hat, wenn negative Zahlen mitspielen. Das schaffst du in drei Schritten.

:::

## Schritt 1: Malnehmen ist Plusrechnen

$3 \cdot 2$ bedeutet $2 + 2 + 2$. Das klappt auch mit einer negativen Zahl:

$$3 \cdot (-2) = (-2) + (-2) + (-2) = -6$$

:::multievent

- $4 \cdot (-1{,}5) = (-1{,}5) + (-1{,}5) + (-1{,}5) + (-1{,}5) =$ {z{-6}}
- $2 \cdot (-0{,}25) =$ {z{-0,5}}
- $5 \cdot (-3) =$ {z{-15}}

Man darf die Faktoren vertauschen: $(-3) \cdot 5 = 5 \cdot (-3) =$ {z{-15}}

**Plus mal minus** ergibt {A{plus|!minus}}.

:::

## Schritt 2: Das Muster fortsetzen

Rechne von oben nach unten. Wie verändern sich die Ergebnisse? Setze das Muster fort.

:::multievent

| Aufgabe | Ergebnis |
| :---: | :---: |
| $(-3) \cdot 3$ | {z{-9}} |
| $(-3) \cdot 2$ | {z{-6}} |
| $(-3) \cdot 1$ | {z{-3}} |
| $(-3) \cdot 0$ | {z{0}} |
| $(-3) \cdot (-1)$ | {z{3}} |
| $(-3) \cdot (-2)$ | {z{6}} |

Von Zeile zu Zeile wird das Ergebnis um {z{3}} größer. **Minus mal minus** ergibt also {A{!plus|minus}}.

:::

## Schritt 3: Ausprobieren mit Pfeilen

Jede Zahl ist ein Pfeil, der bei 0 startet: Positive Zahlen zeigen nach rechts, negative nach links. Stelle $a$ und $b$ mit den Schiebereglern ein und beobachte den **roten Ergebnis-Pfeil**.

:::jsxgraph{height="400" width="720" boundingbox="[-13,5,13,-3.2]" axis=false grid=false}

```js
var num = function (x) {
  var r = Math.round(x * 100) / 100;
  var s = String(Math.abs(r)).replace('.', ',');
  return r < 0 ? '−' + s : s;
};
var par = function (x) {
  return x < 0 ? '(' + num(x) + ')' : num(x);
};
var av = function () { return Math.round(A.Value()); };
var bv = function () { return Math.round(B.Value() * 2) / 2; };

var A = board.create('slider', [[-10.3, 4.3], [-3.5, 4.3], [-4, 3, 4]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#bb0a21', fillColor: '#bb0a21', highline: { strokeColor: '#bb0a21' }
});
var B = board.create('slider', [[3.7, 4.3], [10.5, 4.3], [-3, -1.5, 3]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
board.create('text', [-12.8, 4.3, function () { return 'a = ' + num(av()); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#bb0a21'
});
board.create('text', [1.2, 4.3, function () { return 'b = ' + num(bv()); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96'
});

// Zahlengerade
board.create('arrow', [[-12.6, 0], [12.6, 0]], { strokeColor: '#666', strokeWidth: 1.5, fixed: true });
for (var k = -12; k <= 12; k++) {
  board.create('segment', [[k, -0.15], [k, 0.15]], { strokeColor: '#666', strokeWidth: k === 0 ? 2.5 : 1, fixed: true });
  board.create('text', [k, -0.5, String(k).replace('-', '−')], {
    anchorX: 'middle', anchorY: 'middle', fontSize: 11, fixed: true, strokeColor: '#666'
  });
}

var P = function (fx, y) {
  return board.create('point', [fx, y], { visible: false, fixed: true, withLabel: false });
};

// Pfeil für b
board.create('arrow', [P(0, 3.1), P(function () { return bv(); }, 3.1)], {
  strokeColor: '#397b96', strokeWidth: 5, fixed: true
});
board.create('text', [function () { return bv() / 2; }, 3.55, 'b'], {
  anchorX: 'middle', fontSize: 16, fixed: true, strokeColor: '#397b96'
});

// b mehrmals aneinandergelegt
var chain = [];
for (var i = 0; i < 4; i++) {
  (function (i) {
    chain.push(board.create('arrow', [
      P(function () { return i * bv(); }, 2.1),
      P(function () { return (i + 1) * bv(); }, 2.1)
    ], { strokeColor: '#999', strokeWidth: 4, fixed: true }));
  })(i);
}

// Ergebnis a · b
board.create('arrow', [P(0, 1.0), P(function () { return av() * bv(); }, 1.0)], {
  strokeColor: '#bb0a21', strokeWidth: 5, fixed: true
});

board.create('text', [-12.6, -1.5, function () {
  var a = av();
  if (a === 0) return 'a = 0: Es wird kein Pfeil angelegt. Das Ergebnis ist 0.';
  if (bv() === 0) return 'b = 0: Der Pfeil hat die Länge 0. Das Ergebnis ist 0.';
  if (a > 0) return 'Der Pfeil b wird ' + a + '-mal aneinandergelegt. Die Richtung bleibt gleich.';
  return 'Der Pfeil b wird ' + (-a) + '-mal aneinandergelegt (grau) und dann umgedreht (rot), weil a negativ ist.';
}], { fontSize: 15, fixed: true });

board.create('text', [-12.6, -2.5, function () {
  return par(av()) + ' · ' + par(bv()) + ' = ' + num(av() * bv());
}], { fontSize: 22, fixed: true, strokeColor: '#bb0a21' });

var refresh = function () {
  var n = Math.abs(av());
  for (var j = 0; j < 4; j++) chain[j].setAttribute({ visible: j < n });
  board.update();
};
A.on('drag', refresh);
A.on('up', refresh);
refresh();
```

:::

:::multievent

Stelle ein und lies ab: $\quad 3 \cdot (-1{,}5) =$ {z{-4,5}} $\quad (-3) \cdot (-2) =$ {z{6}} $\quad (-2) \cdot (-2{,}5) =$ {z{5}}

Ist $a$ negativ, wird der Pfeil {A{nur länger|!länger und umgedreht|nicht verändert}}.

:::

::::collapsible{title="🌡️ Noch eine Erklärung: Temperatur im Zeitraffer" id="rz-entdecken-temperatur"}

Auf einem Berg wird es abends **jede Stunde 2 °C kälter**. Die Änderung pro Stunde ist $-2$ °C. Gerade ist es 0 °C.

- **In** 3 Stunden: $3 \cdot (-2) = -6$. Es wird 6 °C kälter sein.
- **Vor** 3 Stunden, also zur Zeit $-3$: $(-3) \cdot (-2) = +6$. Es war 6 °C wärmer.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 640 270" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Temperaturverlauf: vor 3 Stunden plus 6 Grad, jetzt 0 Grad, in 3 Stunden minus 6 Grad">
<line x1="70" y1="130" x2="620" y2="130" stroke="currentColor" stroke-dasharray="4 4" opacity="0.5"/>
<text x="62" y="134" font-size="13" text-anchor="end" fill="currentColor">0 °C</text>
<line x1="70" y1="226" x2="620" y2="226" stroke="currentColor" stroke-width="1.5"/>
<text x="620" y="265" font-size="13" text-anchor="end" fill="currentColor">Zeit</text>
<rect x="90" y="30" width="240" height="196" fill="#397b96" fill-opacity="0.08"/>
<rect x="330" y="30" width="240" height="196" fill="#bb0a21" fill-opacity="0.06"/>
<text x="210" y="22" font-size="14" text-anchor="middle" fill="currentColor">Vergangenheit: Zeit negativ</text>
<text x="450" y="22" font-size="14" text-anchor="middle" fill="currentColor">Zukunft: Zeit positiv</text>
<line x1="90" y1="46" x2="570" y2="214" stroke="currentColor" stroke-width="2.5"/>
<circle cx="90" cy="46" r="6" fill="#397b96"/><text x="100" y="38" font-size="15" fill="#397b96">+6 °C</text>
<line x1="90" y1="222" x2="90" y2="230" stroke="currentColor"/><text x="90" y="248" font-size="13" text-anchor="middle" fill="currentColor">vor 3 h</text>
<circle cx="170" cy="74" r="6" fill="#397b96"/><text x="180" y="66" font-size="15" fill="#397b96">+4 °C</text>
<line x1="170" y1="222" x2="170" y2="230" stroke="currentColor"/><text x="170" y="248" font-size="13" text-anchor="middle" fill="currentColor">−2</text>
<circle cx="250" cy="102" r="6" fill="#397b96"/><text x="260" y="94" font-size="15" fill="#397b96">+2 °C</text>
<line x1="250" y1="222" x2="250" y2="230" stroke="currentColor"/><text x="250" y="248" font-size="13" text-anchor="middle" fill="currentColor">−1</text>
<circle cx="330" cy="130" r="6" fill="currentColor"/><text x="340" y="122" font-size="13" fill="currentColor">0 °C</text>
<line x1="330" y1="222" x2="330" y2="230" stroke="currentColor"/><text x="330" y="248" font-size="13" text-anchor="middle" fill="currentColor">jetzt</text>
<circle cx="410" cy="158" r="6" fill="#bb0a21"/><text x="420" y="150" font-size="15" fill="#bb0a21">−2 °C</text>
<line x1="410" y1="222" x2="410" y2="230" stroke="currentColor"/><text x="410" y="248" font-size="13" text-anchor="middle" fill="currentColor">+1</text>
<circle cx="490" cy="186" r="6" fill="#bb0a21"/><text x="500" y="178" font-size="15" fill="#bb0a21">−4 °C</text>
<line x1="490" y1="222" x2="490" y2="230" stroke="currentColor"/><text x="490" y="248" font-size="13" text-anchor="middle" fill="currentColor">+2</text>
<circle cx="570" cy="214" r="6" fill="#bb0a21"/><text x="580" y="206" font-size="15" fill="#bb0a21">−6 °C</text>
<line x1="570" y1="222" x2="570" y2="230" stroke="currentColor"/><text x="570" y="248" font-size="13" text-anchor="middle" fill="currentColor">in 3 h</text>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Jede Stunde wird es 2 °C kälter. Vor 3 Stunden war es also wärmer: (−3) · (−2) = +6.</figcaption>
</figure>

Spielst du einen Film, in dem es kälter wird, **rückwärts** ab, wird es wärmer: rückwärts (−) mal kälter werden (−) ergibt wärmer werden (+).

::::

## Das hast du herausgefunden

:::snippet{#merken}

- Haben beide Faktoren das **gleiche** Vorzeichen, ist das Produkt **positiv**.
- Haben die Faktoren **verschiedene** Vorzeichen, ist das Produkt **negativ**.
- Ist ein Faktor $0$, ist das Produkt $0$.

:::

Weiter geht es mit der Seite [✖️ Multiplizieren](/mittelstufe/rationale-zahlen/multiplizieren-und-dividieren/02-multiplizieren).
