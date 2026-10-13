---
name: Mehrere Faktoren und Potenzen
index: 3
lang: de
---

# Mehrere Faktoren und Potenzen

## Die Vorzeichen-Maschine

Hier werden fünf Zahlen multipliziert. Mit den Kästchen machst du einen Faktor negativ. Beobachte, wann das Produkt positiv und wann es negativ ist.

:::jsxgraph{height="300" width="720" boundingbox="[0,4,12,0]" axis=false grid=false}

```js
var base = [2, 0.5, 3, 4, 1.5];
var xs = [1.2, 3.4, 5.6, 7.8, 10.0];
var boxes = [];
var factorTexts = [];
var productText;
var num = function (x) {
  var r = Math.round(x * 100) / 100;
  var s = String(Math.abs(r)).replace('.', ',');
  return r < 0 ? '−' + s : s;
};
var val = function (i) { return boxes[i].Value() ? -base[i] : base[i]; };
var negatives = function () {
  var n = 0;
  for (var i = 0; i < 5; i++) if (boxes[i].Value()) n++;
  return n;
};

for (var i = 0; i < 5; i++) {
  (function (i) {
    boxes.push(board.create('checkbox', [xs[i] - 0.55, 2.1, ' negativ'], { fixed: true, fontSize: 14 }));
    factorTexts[i] = board.create('text', [xs[i], 3.1, function () {
      var v = val(i);
      return v < 0 ? '(' + num(v) + ')' : num(v);
    }], {
      anchorX: 'middle', anchorY: 'middle', fontSize: 26, fixed: true, strokeColor: '#397b96'
    });
    if (i < 4) {
      board.create('text', [xs[i] + 1.1, 3.1, '·'], { anchorX: 'middle', anchorY: 'middle', fontSize: 26, fixed: true });
    }
    JXG.addEvent(boxes[i].rendNodeCheckbox, 'change', function () { recolor(); }, boxes[i]);
  })(i);
}

productText = board.create('text', [0.6, 1.2, function () {
  var p = 1;
  for (var i = 0; i < 5; i++) p *= val(i);
  return 'Produkt: ' + num(p);
}], {
  fontSize: 24, fixed: true, anchorY: 'middle', strokeColor: '#397b96'
});

board.create('text', [0.6, 0.45, function () {
  var n = negatives();
  return 'Negative Faktoren: ' + n + (n % 2 === 0 ? ' (gerade Anzahl) → positiv' : ' (ungerade Anzahl) → negativ');
}], { fontSize: 16, fixed: true, anchorY: 'middle' });

function recolor() {
  for (var i = 0; i < 5; i++) {
    factorTexts[i].setAttribute({ strokeColor: val(i) < 0 ? '#bb0a21' : '#397b96' });
  }
  productText.setAttribute({ strokeColor: negatives() % 2 === 1 ? '#bb0a21' : '#397b96' });
  board.update();
}
```

:::

:::multievent

Bei **zwei** negativen Faktoren ist das Produkt {A{!positiv|negativ}}.
Bei **drei** negativen Faktoren ist das Produkt {A{positiv|!negativ}}.
Bei **vier** negativen Faktoren ist das Produkt {A{!positiv|negativ}}.

Der Betrag des Produkts ist immer {z{18}}. Nur das {A{Komma|!Vorzeichen|Ergebnis von 2 · 0,5}} ändert sich.

:::

:::snippet{#merken}

**Produkte mit mehreren Faktoren**

Zähle die negativen Faktoren:

- **gerade** Anzahl ($0, 2, 4, \dots$) → das Produkt ist **positiv**
- **ungerade** Anzahl ($1, 3, 5, \dots$) → das Produkt ist **negativ**

Je zwei Minuszeichen heben sich gegenseitig auf.

:::

:::snippet{#aufgabe}

Bestimme zuerst nur das Vorzeichen. Berechne dann.

:::

:::multievent

| Produkt | Vorzeichen | Ergebnis |
| --- | :---: | --- |
| $(-2) \cdot 3 \cdot (-5)$ | {A{!+\|−}} | {z{30}} |
| $(-1) \cdot (-1) \cdot (-1)$ | {A{+\|!−}} | {z{-1}} |
| $4 \cdot (-0{,}5) \cdot 10$ | {A{+\|!−}} | {z{-20}} |
| $(-2) \cdot (-2) \cdot (-2) \cdot (-2)$ | {A{!+\|−}} | {z{16}} |
| $(-0{,}1) \cdot (-0{,}2) \cdot (-5)$ | {A{+\|!−}} | {z{-0,1}} |
| $(-7) \cdot 0 \cdot (-3)$ | {A{+\|−\|!weder noch}} | {z{0}} |

:::

## Potenzen mit negativer Basis

Eine Potenz ist eine Kurzschreibweise für ein Produkt aus lauter gleichen Faktoren:

$$(-2)^4 = (-2) \cdot (-2) \cdot (-2) \cdot (-2) = 16$$

:::snippet{#aufgabe}

Setze die Reihe fort. Was fällt dir auf?

:::

:::multievent

| $(-2)^1$ | $(-2)^2$ | $(-2)^3$ | $(-2)^4$ | $(-2)^5$ | $(-2)^6$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| {z{-2}} | {z{4}} | {z{-8}} | {z{16}} | {z{-32}} | {z{64}} |

Ist die Hochzahl **gerade**, ist die Potenz {A{!positiv|negativ}}. Ist die Hochzahl **ungerade**, ist die Potenz {A{positiv|!negativ}}.

:::

:::alert{warn}

**Achtung, Klammer!**

$$(-3)^4 = (-3) \cdot (-3) \cdot (-3) \cdot (-3) = +81$$

$$-3^4 = -(3 \cdot 3 \cdot 3 \cdot 3) = -81$$

Ohne Klammer gehört die Hochzahl **nur zur 3**. Das Minus wird erst danach angewendet. Viele Taschenrechner rechnen genauso: Wer `-3^4` eintippt, erhält $-81$.

:::

:::snippet{#aufgabe}

Berechne. Achte auf die Klammern.

:::

:::multievent

| | | | |
| --- | --- | --- | --- |
| $(-5)^2 =$ {z{25}} | $-5^2 =$ {z{-25}} | $(-1)^7 =$ {z{-1}} | $(-1)^{10} =$ {z{1}} |
| $(-2)^7 =$ {z{-128}} | $-2^7 =$ {z{-128}} | $(-0{,}2)^3 =$ {z{-0,008}} | $-(-4)^2 =$ {z{-16}} |
| $(-10)^5 =$ {z{-100000}} | $(-6)^1 =$ {z{-6}} | $(-0{,}3)^0 =$ {z{1}} | $0^{12} =$ {z{0}} |

:::

:::snippet{#aufgabe}

Richtig oder falsch? Du musst nichts ausrechnen – es reicht, das Vorzeichen zu bestimmen.

:::

:::multievent

- $(-9)^{75}$ ist negativ. {A{!richtig|falsch}}
- $-47^{28}$ ist positiv. {A{richtig|!falsch}}
- $(-91)^{21} > 0$ {A{richtig|!falsch}}
- $(-276)^{48} < 0$ {A{richtig|!falsch}}
- $(-15)^{4} < (-15)^{6}$ {A{!richtig|falsch}}
- $(-23)^{5} < (-34)^{5}$ {A{richtig|!falsch}}

{h{Tipp: Bei der letzten Aussage sind beide Zahlen negativ. Welche liegt weiter links auf der Zahlengeraden?}}

:::

## Geschickt rechnen

Für rationale Zahlen gelten dieselben Rechengesetze wie für Brüche und natürliche Zahlen.

:::snippet{#merken}

**Kommutativgesetz** (Vertauschungsgesetz): In einem Produkt darf man die Faktoren vertauschen.

$$a \cdot b = b \cdot a \qquad \text{z. B. } (-1{,}4) \cdot 2{,}5 = 2{,}5 \cdot (-1{,}4)$$

**Assoziativgesetz** (Verbindungsgesetz): In einem Produkt darf man Klammern beliebig setzen oder weglassen.

$$(a \cdot b) \cdot c = a \cdot (b \cdot c) = a \cdot b \cdot c$$

:::

:::snippet{#beispiel}

$$
\begin{aligned}
11 \cdot (-4) \cdot 25 &= 11 \cdot \big((-4) \cdot 25\big) &&\text{Klammer geschickt setzen} \\
&= 11 \cdot (-100) \\
&= -1100
\end{aligned}
$$

$$
\begin{aligned}
(-125) \cdot (-7) \cdot (-8) &= (-125) \cdot (-8) \cdot (-7) &&\text{Faktoren vertauschen} \\
&= 1000 \cdot (-7) \\
&= -7000
\end{aligned}
$$

Suche nach Partnern, die zusammen $10$, $100$ oder $1000$ ergeben: $4 \cdot 25$, $8 \cdot 125$, $2 \cdot 5$, $0{,}5 \cdot 2$ …

:::

:::snippet{#aufgabe}

Berechne möglichst vorteilhaft.

:::

:::multievent

- $(-13) \cdot 25 \cdot (-4) =$ {z{1300}}
- $2{,}5 \cdot (-1{,}5) \cdot 8 =$ {z{-30}}
- $(-0{,}8) \cdot (-3{,}7) \cdot 1{,}25 =$ {z{3,7}}
- $0{,}7 \cdot (-20) \cdot (-0{,}3) \cdot (-5) =$ {z{-21}}
- $125 \cdot (-23) \cdot (-8) \cdot (-3) =$ {z{-69000}}
- $(-0{,}1) \cdot (-0{,}02) \cdot (-0{,}05) =$ {z{-0,0001}}

{b{Tipp: Fasse zuerst die Faktoren zusammen, die eine »glatte« Zahl ergeben, z. B. 25 · 4 = 100 oder 1,25 · 0,8 = 1.}}

:::

:::snippet{#aufgabe}

Berechne möglichst vorteilhaft. Kürze vorher. Gib das Ergebnis als Bruch ein (Bruch-Taste oder `/`).

:::

::bitflow{id="rationale-zahlen-faktoren-brueche" src="faktoren-brueche.bitflow" height="auto" maxHeight="85vh"}

## Stimmt das?

:::snippet{#aufgabe}

Suche zuerst ein Beispiel. Entscheide dann, ob die Aussage **immer** stimmt. Ein einziges Gegenbeispiel reicht, um eine Aussage zu widerlegen.

:::

:::multievent

- Ist bei zwei Faktoren einer negativ, so ist das Produkt negativ. {A{immer richtig|!nicht immer richtig}}
- Das Produkt zweier negativer Zahlen ist größer als jeder der beiden Faktoren. {A{!immer richtig|nicht immer richtig}}
- Das Produkt dreier Zahlen ist nur dann positiv, wenn alle drei das gleiche Vorzeichen haben. {A{immer richtig|!nicht immer richtig}}
- Das Produkt zweier rationaler Zahlen ist nie null. {A{immer richtig|!nicht immer richtig}}

{b{Gegenbeispiele: (−3) · 0 = 0 ist nicht negativ. (−1) · (−1) · 5 = 5 ist positiv, obwohl die Vorzeichen verschieden sind. 0 · 4 = 0.}}

:::
