---
name: Dividieren
index: 4
lang: de
---

# Rationale Zahlen dividieren

## Einstieg: Das Jahresabo

Lena hat ein Streaming-Abo. Einmal im Jahr werden **95,88 €** von ihrem Konto abgebucht. Auf dem Kontoauszug steht deshalb $-95{,}88$ €. Lena überlegt, auf monatliche Zahlung umzustellen.

:::snippet{#aufgabe}

Welche Kontobewegung ergibt sich dann jeden Monat? Schreibe die Rechnung mit negativen Zahlen.

:::

:::multievent

$(-95{,}88) : 12 =$ {z{-7,99}}

Probe mit der Umkehraufgabe: $12 \cdot (-7{,}99) =$ {z{-95,88}}

{b{Der Jahresbetrag ist zwölfmal so groß wie der Monatsbetrag. Also teilst du durch 12. Weil Geld abgebucht wird, ist das Ergebnis negativ.}}

:::

## Dividieren ist die Umkehrung des Multiplizierens

Jede Divisionsaufgabe gehört zu einer Multiplikationsaufgabe. Damit kannst du das Vorzeichen herausfinden.

:::snippet{#aufgabe}

Ergänze mithilfe der Multiplikation.

:::

:::multievent

| weil … | … ist |
| --- | --- |
| $4 \cdot 3 = 12$ | $12 : 3 =$ {z{4}} |
| $(-4) \cdot 3 = -12$ | $(-12) : 3 =$ {z{-4}} |
| $4 \cdot (-3) = -12$ | $(-12) : (-3) =$ {z{4}} |
| $(-4) \cdot (-3) = 12$ | $12 : (-3) =$ {z{-4}} |

Haben Dividend und Divisor **gleiche** Vorzeichen, ist der Quotient {A{!positiv|negativ}}.
Haben sie **verschiedene** Vorzeichen, ist der Quotient {A{positiv|!negativ}}.

:::

:::snippet{#merken}

**Rationale Zahlen dividieren**

1. Dividiere die **Beträge**.
2. Setze das **Vorzeichen** – genau wie beim Multiplizieren:
   - **gleiche** Vorzeichen → der Quotient ist **positiv**
   - **verschiedene** Vorzeichen → der Quotient ist **negativ**

Durch $0$ darf man **nicht** dividieren.

:::

:::snippet{#beispiel}

$$
\begin{aligned}
(+7{,}5) : (+2{,}5) &= +(7{,}5 : 2{,}5) = +3 \\
(-7{,}5) : (-2{,}5) &= +(7{,}5 : 2{,}5) = +3 \\
(-7{,}5) : (+2{,}5) &= -(7{,}5 : 2{,}5) = -3 \\
(+7{,}5) : (-2{,}5) &= -(7{,}5 : 2{,}5) = -3
\end{aligned}
$$

:::

:::alert{warn}

**Warum darf man nicht durch 0 teilen?**

Angenommen, $(-26) : 0$ wäre eine Zahl $r$. Dann müsste $r \cdot 0 = -26$ sein. Aber jede Zahl mal $0$ ergibt $0$, niemals $-26$. Deshalb gibt es kein Ergebnis.

Umgekehrt geht es: $0 : (-26) = 0$, denn $0 \cdot (-26) = 0$.

:::

## Die Divisionsmaschine

Stelle den Dividenden $x$ und den Divisor $y$ ein. Der blaue Pfeil ist $x$, der rote Pfeil ist das Ergebnis $x : y$. Probiere auch $y = 0$ aus.

:::jsxgraph{height="340" width="720" boundingbox="[-13,4.6,13,-3]" axis=false grid=false}

```js
var num = function (x) {
  var r = Math.round(x * 1000) / 1000;
  var s = String(Math.abs(r)).replace('.', ',');
  return r < 0 ? '−' + s : s;
};
var par = function (x) { return x < 0 ? '(' + num(x) + ')' : num(x); };

var X = board.create('slider', [[-10.3, 4], [-3.5, 4], [-12, -6, 12]], {
  name: '', withLabel: false, snapWidth: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var Y = board.create('slider', [[3.7, 4], [10.5, 4], [-4, 1.5, 4]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#9A6B2F', fillColor: '#9A6B2F', highline: { strokeColor: '#9A6B2F' }
});
var xv = function () { return Math.round(X.Value()); };
var yv = function () { return Math.round(Y.Value() * 2) / 2; };
var qv = function () { return yv() === 0 ? 0 : xv() / yv(); };

board.create('text', [-12.8, 4, function () { return 'x = ' + num(xv()); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96'
});
board.create('text', [1.2, 4, function () { return 'y = ' + num(yv()); }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#9A6B2F'
});

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
board.create('arrow', [P(0, 2.4), P(function () { return xv(); }, 2.4)], {
  strokeColor: '#397b96', strokeWidth: 5, fixed: true
});
board.create('arrow', [P(0, 1.2), P(function () { return Math.max(-12.5, Math.min(12.5, qv())); }, 1.2)], {
  strokeColor: '#bb0a21', strokeWidth: 5, fixed: true
});

board.create('text', [-12.6, -1.4, function () {
  if (yv() === 0) return par(xv()) + ' : 0 ist nicht definiert!';
  return par(xv()) + ' : ' + par(yv()) + ' = ' + num(qv());
}], { fontSize: 22, fixed: true, strokeColor: '#bb0a21' });

board.create('text', [-12.6, -2.4, function () {
  if (yv() === 0) return 'Es gibt keine Zahl, die mal 0 den Wert ' + num(xv()) + ' ergibt.';
  return 'Probe: ' + par(qv()) + ' · ' + par(yv()) + ' = ' + num(xv());
}], { fontSize: 15, fixed: true });
```

:::

:::snippet{#aufgabe}

Berechne. Du kannst die Divisionsmaschine zur Kontrolle nutzen.

:::

:::multievent

| a) | b) | c) | d) |
| --- | --- | --- | --- |
| $(-45) : (-9) =$ {z{5}} | $77 : (-7) =$ {z{-11}} | $(-96) : (-3) =$ {z{32}} | $54 : 6 =$ {z{9}} |
| $(-280) : (-4) =$ {z{70}} | $360 : 2 =$ {z{180}} | $480 : (-8) =$ {z{-60}} | $(-360) : 3 =$ {z{-120}} |
| $(-270) : (-90) =$ {z{3}} | $(-240) : 60 =$ {z{-4}} | $480 : (-60) =$ {z{-8}} | $630 : 70 =$ {z{9}} |
| $(-169) : 13 =$ {z{-13}} | $144 : (-8) =$ {z{-18}} | $(-96) : (-12) =$ {z{8}} | $121 : 11 =$ {z{11}} |

:::

## Dezimalzahlen dividieren

:::snippet{#merken}

Teilst du durch eine Dezimalzahl, verschiebst du bei **beiden** Zahlen das Komma um gleich viele Stellen nach rechts, bis der Divisor eine ganze Zahl ist. Das Vorzeichen bestimmst du wie immer.

$$6 : (-0{,}3) = -(60 : 3) = -20$$

:::

:::multievent

| a) | b) | c) | d) |
| --- | --- | --- | --- |
| $(-3) : 8 =$ {z{-0,375}} | $(-1{,}5) : 3 =$ {z{-0,5}} | $(-1{,}5) : (-0{,}5) =$ {z{3}} | $12 : (-0{,}5) =$ {z{-24}} |
| $(-4) : (-1) =$ {z{4}} | $(-0{,}72) : (-6) =$ {z{0,12}} | $4{,}2 : 2{,}1 =$ {z{2}} | $(-6) : (-0{,}1) =$ {z{60}} |
| $6 : (-6) =$ {z{-1}} | $6 : (-0{,}3) =$ {z{-20}} | $(-3{,}6) : 0{,}9 =$ {z{-4}} | $5 : 0{,}2 =$ {z{25}} |
| $(-6) : 8 =$ {z{-0,75}} | $(-4) : (-0{,}8) =$ {z{5}} | $6{,}8 : (-1{,}7) =$ {z{-4}} | $(-9) : 0{,}3 =$ {z{-30}} |

:::

## Brüche dividieren

:::snippet{#merken}

Durch einen Bruch dividierst du, indem du mit seinem **Kehrwert** multiplizierst. Den Kehrwert erhältst du, wenn du Zähler und Nenner vertauschst. Das Vorzeichen setzt du nach der Vorzeichenregel.

:::

:::snippet{#beispiel}

$$
\left(+\frac{3}{8}\right) : \left(-\frac{9}{16}\right)
= -\left(\frac{3}{8} \cdot \frac{16}{9}\right)
= -\frac{\cancel{3}^{\,1} \cdot \cancel{16}^{\,2}}{\cancel{8}_{\,1} \cdot \cancel{9}_{\,3}}
= -\frac{2}{3}
$$

:::

:::snippet{#aufgabe}

**1** Berechne die Quotienten. Gib die Ergebnisse direkt als Bruch ein (Bruch-Taste der Bildschirmtastatur oder `/`) und kürze so weit wie möglich.

:::

::bitflow{id="rationale-zahlen-brueche-dividieren" src="brueche-dividieren.bitflow" height="auto" maxHeight="85vh"}

:::snippet{#aufgabe}

**2** Berechne. Überlege zuerst, ob du mit Brüchen oder mit Dezimalzahlen rechnest.

:::

::bitflow{id="rationale-zahlen-div-gemischt" src="div-gemischt.bitflow" height="auto" maxHeight="85vh"}

## Mal und geteilt vertauschen

:::snippet{#merken}

Aufeinanderfolgende Multiplikations- und Divisionsschritte darf man vertauschen. Jede Zahl nimmt dabei **ihr Rechenzeichen mit**.

$$a \cdot b : c = a : c \cdot b \qquad a : b : c = a : c : b$$

:::

:::snippet{#beispiel}

$$
\begin{aligned}
-80 \cdot 17 : (-40) &= -80 : (-40) \cdot 17 &&\text{vertauschen, damit es leichter wird} \\
&= 2 \cdot 17 \\
&= 34
\end{aligned}
$$

:::

:::multievent

- $36 \cdot 7 : (-18) =$ {z{-14}}
- $-54 \cdot (-39) : 27 =$ {z{78}}
- $-2{,}5 : 0{,}8 \cdot (-4) =$ {z{12,5}}
- $165 : (-0{,}3) : (-5) =$ {z{110}}
- $-210 : 0{,}5 : (-70) =$ {z{6}}

:::

:::snippet{#aufgabe}

**Fehlersuche:** Jonas hat beim Vertauschen nicht immer aufgepasst. Entscheide, ob die Rechnung richtig ist.

:::

:::multievent

| Rechnung | |
| --- | --- |
| $(-18) \cdot (-2) : 6 = (-18) \cdot 6 \cdot (-2) = 216$ | {A{richtig\|!falsch}} |
| $(-35) : 10 \cdot 4 = (-35) \cdot 4 : 10 = -140 : 10 = -14$ | {A{!richtig\|falsch}} |
| $3{,}6 : (-0{,}5) \cdot (-10) = 3{,}6 \cdot (-10) : (-0{,}5) = -36 : (-0{,}5) = -18$ | {A{richtig\|!falsch}} |
| $(-4) \cdot 2{,}5 + 3 = (-4) \cdot 3 + 2{,}5 = -9{,}5$ | {A{richtig\|!falsch}} |

{b{1. Zeile: Das »: 6« wurde zu »· 6«. Richtig ist (−18) : 6 · (−2) = 6. — 3. Zeile: −36 : (−0,5) = 72, nicht −18. — 4. Zeile: Ein Plus-Schritt darf nicht mit einem Mal-Schritt vertauscht werden. Richtig ist −10 + 3 = −7.}}

:::

## Alle vier Rechenarten

:::snippet{#aufgabe}

Achte auf das Rechenzeichen! Die Vorzeichenregel gilt nur für mal und geteilt.

:::

:::multievent

| a) | b) | c) |
| --- | --- | --- |
| $(-48) + (-12) =$ {z{-60}} | $36 + (-9) =$ {z{27}} | $(-4{,}5) + (-5) =$ {z{-9,5}} |
| $(-48) - (-12) =$ {z{-36}} | $36 - (-9) =$ {z{45}} | $(-4{,}5) - (-5) =$ {z{0,5}} |
| $(-48) \cdot (-12) =$ {z{576}} | $36 \cdot (-9) =$ {z{-324}} | $(-4{,}5) \cdot (-5) =$ {z{22,5}} |
| $(-48) : (-12) =$ {z{4}} | $36 : (-9) =$ {z{-4}} | $(-4{,}5) : (-5) =$ {z{0,9}} |

:::

## Erklärvideo

::youtube{#9t6niouU4BQ}

## Teste dich

Bei einem Fehler bekommst du einen Hinweis und einen zweiten Versuch.

::bitflow{id="rationale-zahlen-dividieren" src="dividieren.bitflow" height="auto" maxHeight="85vh"}
