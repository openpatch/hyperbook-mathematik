---
name: 🔢 Viele Faktoren und Potenzen
index: 3
lang: de
---

# Viele Faktoren und Potenzen

:::alert{info}

**Darum geht's:** Was passiert, wenn mehr als zwei Zahlen malgenommen werden? Du lernst einen Trick: **Minuszeichen zählen**. Damit kannst du auch Potenzen wie $(-2)^4$ berechnen.

:::

## Die Vorzeichen-Maschine

Hier werden fünf Zahlen malgenommen. Mache mit den Kästchen einzelne Zahlen negativ. Wann ist das Produkt positiv, wann negativ?

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

Bei **zwei** negativen Faktoren ist das Produkt {A{!positiv|negativ}}, bei **drei** {A{positiv|!negativ}}, bei **vier** {A{!positiv|negativ}}.

:::

:::snippet{#merken}

**Minuszeichen zählen**

- **gerade** Anzahl negativer Faktoren ($2, 4, 6, \dots$) → Produkt **positiv**
- **ungerade** Anzahl negativer Faktoren ($1, 3, 5, \dots$) → Produkt **negativ**

Je zwei Minuszeichen werden zusammen zu einem Plus.

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 620 185" width="620" style="max-width:100%;height:auto;" role="img" aria-label="Fünf negative Faktoren: je zwei Minuszeichen ergeben plus, eines bleibt übrig, also ist das Produkt negativ">
<circle cx="70" cy="105" r="32" fill="#bb0a21" fill-opacity="0.15" stroke="#bb0a21" stroke-width="2"/><text x="70" y="113" font-size="22" text-anchor="middle" fill="currentColor">(−1)</text>
<text x="127" y="112" font-size="22" text-anchor="middle" fill="currentColor">·</text>
<circle cx="185" cy="105" r="32" fill="#bb0a21" fill-opacity="0.15" stroke="#bb0a21" stroke-width="2"/><text x="185" y="113" font-size="22" text-anchor="middle" fill="currentColor">(−2)</text>
<text x="242" y="112" font-size="22" text-anchor="middle" fill="currentColor">·</text>
<circle cx="300" cy="105" r="32" fill="#bb0a21" fill-opacity="0.15" stroke="#bb0a21" stroke-width="2"/><text x="300" y="113" font-size="22" text-anchor="middle" fill="currentColor">(−3)</text>
<text x="357" y="112" font-size="22" text-anchor="middle" fill="currentColor">·</text>
<circle cx="415" cy="105" r="32" fill="#bb0a21" fill-opacity="0.15" stroke="#bb0a21" stroke-width="2"/><text x="415" y="113" font-size="22" text-anchor="middle" fill="currentColor">(−4)</text>
<text x="472" y="112" font-size="22" text-anchor="middle" fill="currentColor">·</text>
<circle cx="530" cy="105" r="32" fill="#bb0a21" fill-opacity="0.15" stroke="#bb0a21" stroke-width="2"/><text x="530" y="113" font-size="22" text-anchor="middle" fill="currentColor">(−5)</text>
<path d="M 70 70 Q 127.5 15 185 70" fill="none" stroke="#397b96" stroke-width="3"/><circle cx="127.5" cy="38" r="15" fill="#397b96"/><text x="127.5" y="45" font-size="20" font-weight="bold" text-anchor="middle" fill="#fff">+</text>
<path d="M 300 70 Q 357.5 15 415 70" fill="none" stroke="#397b96" stroke-width="3"/><circle cx="357.5" cy="38" r="15" fill="#397b96"/><text x="357.5" y="45" font-size="20" font-weight="bold" text-anchor="middle" fill="#fff">+</text>
<text x="530" y="58" font-size="15" text-anchor="middle" fill="#bb0a21">bleibt übrig</text>
<text x="310" y="172" font-size="17" text-anchor="middle" fill="currentColor">5 Minuszeichen: 2 Paare und 1 übrig → Ergebnis <tspan fill="#bb0a21" font-weight="bold">negativ</tspan></text>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">(−1) · (−2) · (−3) · (−4) · (−5) = −120</figcaption>
</figure>

:::snippet{#aufgabe}

**1** Bestimme zuerst das Vorzeichen. Berechne dann.

:::

:::multievent

| Produkt | Vorzeichen | Ergebnis |
| --- | :---: | --- |
| $(-2) \cdot 3 \cdot (-5)$ | {A{!+\|−}} | {z{30}} |
| $(-1) \cdot (-1) \cdot (-1)$ | {A{+\|!−}} | {z{-1}} |
| $4 \cdot (-0{,}5) \cdot 10$ | {A{+\|!−}} | {z{-20}} |
| $(-2) \cdot (-2) \cdot (-2) \cdot (-2)$ | {A{!+\|−}} | {z{16}} |
| $(-7) \cdot 0 \cdot (-3)$ | {A{+\|−\|!weder noch}} | {z{0}} |

:::

## Ein Minus vor der Klammer

:::snippet{#merken}

Ein Minus vor einer Zahl oder Klammer bedeutet **mal (−1)**. Du erhältst die **Gegenzahl**:

$$-(-7) = (-1) \cdot (-7) = 7 \qquad -(+5) = (-1) \cdot 5 = -5$$

:::

:::multievent

$-(-1) =$ {z{1}} $\qquad -(-0{,}3) =$ {z{0,3}} $\qquad -(+2) =$ {z{-2}} $\qquad -(-(-7)) =$ {z{-7}}

:::

## Potenzen mit negativer Basis

Eine Potenz ist ein Produkt aus lauter gleichen Faktoren. Also hilft wieder das Minuszeichen-Zählen:

$$(-2)^4 = (-2) \cdot (-2) \cdot (-2) \cdot (-2) = 16$$

:::multievent

| $(-2)^1$ | $(-2)^2$ | $(-2)^3$ | $(-2)^4$ | $(-2)^5$ | $(-2)^6$ |
| :---: | :---: | :---: | :---: | :---: | :---: |
| {z{-2}} | {z{4}} | {z{-8}} | {z{16}} | {z{-32}} | {z{64}} |

Gerade Hochzahl → {A{!positiv|negativ}} $\qquad$ Ungerade Hochzahl → {A{positiv|!negativ}}

:::

:::alert{warn}

**Achtung, Klammer!** $\quad (-3)^2 = (-3) \cdot (-3) = 9$, aber $-3^2 = -(3 \cdot 3) = -9$.

Ohne Klammer gehört die Hochzahl **nur zur 3**.

:::

## Teste dich

Zuerst kommen Grundlagen. Wenn sie sitzen, geht es mit Profi-Aufgaben weiter, sonst mit einer Extra-Übung.

::bitflow{id="rationale-zahlen-faktoren" src="faktoren.bitflow" height="auto" maxHeight="85vh"}
