---
name: 💡 Muster entdecken
index: 1
lang: de
---

# Warum ist minus mal minus plus?

Dass $3 \cdot 2 = 6$ ist, weißt du längst. Aber was ist $3 \cdot (-2)$? Und was soll $(-3) \cdot (-2)$ bedeuten? Auf dieser Seite findest du es selbst heraus – auf drei verschiedenen Wegen.

## Weg 1: Malnehmen ist wiederholtes Addieren

$3 \cdot 2$ bedeutet $2 + 2 + 2$. Das klappt genauso mit einer negativen Zahl.

:::snippet{#aufgabe}

Schreibe als Summe und berechne.

:::

:::multievent

- $3 \cdot (-2) = (-2) + (-2) + (-2) =$ {z{-6}}
- $4 \cdot (-1{,}5) = (-1{,}5) + (-1{,}5) + (-1{,}5) + (-1{,}5) =$ {z{-6}}
- $2 \cdot (-0{,}25) =$ {z{-0,5}}
- $5 \cdot (-3) =$ {z{-15}}

Beim Malnehmen darf man die Faktoren vertauschen. Also ist $(-2) \cdot 3 = 3 \cdot (-2) =$ {z{-6}}.

Ein positiver und ein negativer Faktor ergeben ein {A{positives|!negatives}} Ergebnis.

:::

## Weg 2: Muster fortsetzen

:::snippet{#aufgabe}

Rechne die Aufgaben oben in jeder Reihe aus. Schau dir an, wie sich die Ergebnisse verändern, und setze das Muster fort.

:::

::::::tabs

::::tab{title="Reihe 1"}

:::multievent

| Aufgabe | Ergebnis |
| --- | --- |
| $3 \cdot 3$ | {z{9}} |
| $3 \cdot 2$ | {z{6}} |
| $3 \cdot 1$ | {z{3}} |
| $3 \cdot 0$ | {z{0}} |
| $3 \cdot (-1)$ | {z{-3}} |
| $3 \cdot (-2)$ | {z{-6}} |
| $3 \cdot (-3)$ | {z{-9}} |

Wird der zweite Faktor um 1 kleiner, wird das Ergebnis um {z{3}} {A{größer|!kleiner}}.

:::

::::

::::tab{title="Reihe 2"}

:::multievent

| Aufgabe | Ergebnis |
| --- | --- |
| $(-3) \cdot 3$ | {z{-9}} |
| $(-3) \cdot 2$ | {z{-6}} |
| $(-3) \cdot 1$ | {z{-3}} |
| $(-3) \cdot 0$ | {z{0}} |
| $(-3) \cdot (-1)$ | {z{3}} |
| $(-3) \cdot (-2)$ | {z{6}} |
| $(-3) \cdot (-3)$ | {z{9}} |

Wird der zweite Faktor um 1 kleiner, wird das Ergebnis um {z{3}} {A{!größer|kleiner}}.

:::

::::

::::::

:::snippet{#brain}

Wenn das Muster weitergehen soll, **muss** $(-3) \cdot (-1) = 3$ sein. Jede andere Festlegung würde das Muster zerstören.

:::

## Weg 3: Pfeile auf der Zahlengeraden

Eine Zahl kannst du als Pfeil darstellen, der bei 0 beginnt. Positive Zahlen zeigen nach rechts, negative nach links.

Stelle mit den Schiebereglern die Faktoren $a$ und $b$ ein. Der blaue Pfeil ist $b$. Der graue Pfeil zeigt, wie $b$ mehrmals aneinandergelegt wird. Der rote Pfeil ist das Ergebnis $a \cdot b$.

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

:::snippet{#aufgabe}

Stelle die Faktoren mit den Schiebereglern ein und lies das Ergebnis ab.

:::

:::multievent

- $3 \cdot (-1{,}5) =$ {z{-4,5}}
- $(-3) \cdot 2 =$ {z{-6}}
- $(-3) \cdot (-2) =$ {z{6}}
- $(-2) \cdot (-2{,}5) =$ {z{5}}
- $(-4) \cdot 0{,}5 =$ {z{-2}}

Ein negativer Faktor $a$ {A{verlängert den Pfeil nur|!verlängert den Pfeil und dreht seine Richtung um|lässt den Pfeil unverändert}}.

Zeigt der Pfeil $b$ nach links und wird umgedreht, zeigt das Ergebnis nach {A{links|!rechts}}. Also ist minus mal minus {A{!plus|minus}}.

:::

## Eine Geschichte dazu: Temperatur im Zeitraffer

Auf einem Berg sinkt die Temperatur am Abend jede Stunde um 2 °C. Die Änderung pro Stunde ist also $-2$ °C. Jetzt ist es 0 °C.

- **In** 3 Stunden: $3 \cdot (-2) = -6$. Es wird 6 °C **kälter** sein.
- **Vor** 3 Stunden (also Zeit $-3$): $(-3) \cdot (-2) = +6$. Es war 6 °C **wärmer**.

Wenn du einen Film, in dem es kälter wird, **rückwärts** abspielst, wird es wärmer. Rückwärts (−) und kälter werden (−) ergibt wärmer werden (+).

:::snippet{#aufgabe}

Ergänze. Jetzt ist es 0 °C.

:::

:::multievent

| Änderung pro Stunde | Zeit in Stunden | Rechnung | Temperatur |
| --- | --- | --- | --- |
| $+3$ °C | $+2$ (in 2 Stunden) | $2 \cdot 3$ | {z{6}} °C |
| $-3$ °C | $+2$ (in 2 Stunden) | $2 \cdot (-3)$ | {z{-6}} °C |
| $+3$ °C | $-2$ (vor 2 Stunden) | $(-2) \cdot 3$ | {z{-6}} °C |
| $-3$ °C | $-2$ (vor 2 Stunden) | $(-2) \cdot (-3)$ | {z{6}} °C |
| $-1{,}5$ °C | $-4$ (vor 4 Stunden) | $(-4) \cdot (-1{,}5)$ | {z{6}} °C |

:::

## Was hast du herausgefunden?

:::multievent

Haben beide Faktoren **das gleiche** Vorzeichen, ist das Produkt {A{!positiv|negativ}}.

Haben beide Faktoren **verschiedene** Vorzeichen, ist das Produkt {A{positiv|!negativ}}.

Ist ein Faktor $0$, ist das Produkt {A{positiv|negativ|!null}}.

:::

Weiter geht es mit der [Regel für das Multiplizieren](/mittelstufe/rationale-zahlen/multiplizieren-und-dividieren/02-multiplizieren).
