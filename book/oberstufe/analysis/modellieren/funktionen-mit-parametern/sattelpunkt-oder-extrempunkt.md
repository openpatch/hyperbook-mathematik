---
name: "f''(x₀) = 0 – und jetzt?"
lang: de
permaid: oberstufe-analysis-modellieren-parameter-sattelpunkt
keywords:
  - analysis
  - extrempunkte
  - sattelpunkt
  - funktionenschar
---

# f″(x₀) = 0 – Sattelpunkt oder doch nicht?

:::alert{info}

**Darum geht's:** Wenn $f'(x_0) = 0$ **und** $f''(x_0) = 0$ ist, sagt die zweite Ableitung **nichts** über die Art des Punktes. Es kann ein Sattelpunkt sein, aber genauso gut ein Tiefpunkt oder ein Hochpunkt. Dann musst du mit einer anderen Methode weiterprüfen.

:::

## Die Aufgabe

Gegeben ist die Funktionenschar $f_a$ mit

$$
f_a(x) = x^4 - 2ax^2, \quad a \in \mathbb{R}.
$$

Untersuche in Abhängigkeit von $a$, wie viele Extrempunkte der Graph von $f_a$ hat und welche Art sie haben. Achte besonders auf den Fall $a = 0$.

Die Ableitungen sind

$$
f_a'(x) = 4x^3 - 4ax = 4x\,(x^2 - a), \qquad f_a''(x) = 12x^2 - 4a.
$$

## Der Trugschluss

Für $a = 0$ ist $f_0(x) = x^4$. An der Stelle $x_0 = 0$ gilt

$$
f_0'(0) = 0 \quad \text{und} \quad f_0''(0) = 0.
$$

Ein naheliegender, aber **falscher** Schluss ist:

:::alert{error}

„$f'(0) = 0$ und $f''(0) = 0$, also ist bei $x = 0$ ein Sattelpunkt.“

:::

Schau dir den Graphen an. Verschiebe den Regler auf $a = 0$.

:::jsxgraph{height="480" width="720" boundingbox="[-3,5,3,-5]"}

```js
var num = function (v) {
  return String(Math.round(v * 100) / 100).replace('.', ',').replace('-', '−');
};
var A = board.create('slider', [[-2.6, 4.3], [-0.6, 4.3], [-2, 1, 2]], {
  name: 'a', snapWidth: 0.1, precision: 1,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var a = function () { return Math.round(A.Value() * 10) / 10; };
var f = function (x) { return x * x * x * x - 2 * a() * x * x; };
var fs = function (x) { return 4 * x * x * x - 4 * a() * x; };

board.create('functiongraph', [fs, -3, 3], {
  strokeColor: '#9A6B2F', strokeWidth: 1.5, dash: 2, fixed: true, highlight: false
});
board.create('functiongraph', [f, -3, 3], {
  strokeColor: '#397b96', strokeWidth: 3, fixed: true, highlight: false
});

board.create('point', [0, 0], {
  name: '', size: 5, fixed: true,
  color: function () { return a() > 0 ? '#bb0a21' : '#2e7d32'; }
});
var sq = function () { return Math.sqrt(Math.max(a(), 0)); };
[-1, 1].forEach(function (s) {
  board.create('point', [function () { return s * sq(); }, function () { return -a() * a(); }], {
    name: '', size: 5, fixed: true, color: '#2e7d32',
    visible: function () { return a() > 0; }
  });
});

board.create('text', [0.3, 4.3, function () {
  var t = 'f<sub>a</sub>(x) = x<sup>4</sup> − 2·(' + num(a()) + ')·x<sup>2</sup><br>' +
    'f<sub>a</sub>\'\'(0) = −4a = ' + num(-4 * a()) + '<br>';
  if (a() > 0) {
    t += '<b style="color:#bb0a21">f\'\'(0) &lt; 0 ⇒ Hochpunkt (0|0)</b><br>' +
      '<b style="color:#2e7d32">2 Tiefpunkte (±' + num(sq()) + ' | ' + num(-a() * a()) + ')</b>';
  } else if (a() < 0) {
    t += '<b style="color:#2e7d32">f\'\'(0) &gt; 0 ⇒ Tiefpunkt (0|0)</b>';
  } else {
    t += '<b>f\'\'(0) = 0 ⇒ keine Aussage!</b><br>' +
      '<b style="color:#2e7d32">f\'\'\'\'(0) = 24 &gt; 0 ⇒ Tiefpunkt (0|0)</b>';
  }
  return t;
}], { fontSize: 15, anchorY: 'top', fixed: true });

board.create('text', [-2.9, -4.3,
  '<span style="color:#397b96">━ f<sub>a</sub></span> &nbsp; <span style="color:#9A6B2F">┅ f<sub>a</sub>\'</span>'
], { fontSize: 14, fixed: true });
```

:::

Bei $a = 0$ sieht der Graph aus wie eine (flache) Parabel. Der Punkt $(0|0)$ ist ganz klar ein **Tiefpunkt**, denn alle anderen Funktionswerte sind größer: $x^4 > 0$ für $x \neq 0$.



## Warum f″(x₀) = 0 nicht reicht

Die beiden Kriterien, die du kennst, sind so aufgebaut:

- **Notwendige Bedingung:** Ist bei $x_0$ ein Extrempunkt oder Sattelpunkt, dann gilt $f'(x_0) = 0$.
- **Hinreichende Bedingung:** Gilt $f'(x_0) = 0$ und $f''(x_0) \neq 0$, dann ist bei $x_0$ ein Extrempunkt.

Die hinreichende Bedingung sagt nur etwas für $f''(x_0) \neq 0$. Für $f''(x_0) = 0$ macht sie **gar keine Aussage**. Es kann ein Sattelpunkt sein, aber auch ein Tiefpunkt oder ein Hochpunkt.

Das zeigt der Vergleich von $g(x) = x^3$ und $h(x) = x^4$. Bei beiden sind an der Stelle $0$ die erste **und** die zweite Ableitung null. Trotzdem sind die Punkte völlig verschieden.

### g(x) = x³ → Sattelpunkt

:::jsxgraph{height="360" width="480" boundingbox="[-2.4,3,2.4,-3]"}

```js
board.create('functiongraph', [function (x) { return 6 * x; }, -2.4, 2.4], {
  strokeColor: '#888', strokeWidth: 1.5, dash: 1, fixed: true, highlight: false
});
board.create('functiongraph', [function (x) { return 3 * x * x; }, -2.4, 2.4], {
  strokeColor: '#9A6B2F', strokeWidth: 2, dash: 2, fixed: true, highlight: false
});
board.create('functiongraph', [function (x) { return x * x * x; }, -2.4, 2.4], {
  strokeColor: '#397b96', strokeWidth: 3, fixed: true, highlight: false
});
board.create('point', [0, 0], { name: '', size: 5, color: '#555', fixed: true });
board.create('text', [-2.3, 2.6,
  '<span style="color:#397b96">━ g</span> &nbsp; <span style="color:#9A6B2F">┅ g\'</span> &nbsp; <span style="color:#888">┈ g\'\'</span>'
], { fontSize: 14, fixed: true });
```

:::

$g'(x) = 3x^2$ ist links **und** rechts von $0$ positiv. Der Graph steigt vorher und nachher: **kein Vorzeichenwechsel** von $g'$, also ein **Sattelpunkt**.

### h(x) = x⁴ → Tiefpunkt

:::jsxgraph{height="360" width="480" boundingbox="[-2.4,3,2.4,-3]"}

```js
board.create('functiongraph', [function (x) { return 12 * x * x; }, -2.4, 2.4], {
  strokeColor: '#888', strokeWidth: 1.5, dash: 1, fixed: true, highlight: false
});
board.create('functiongraph', [function (x) { return 4 * x * x * x; }, -2.4, 2.4], {
  strokeColor: '#9A6B2F', strokeWidth: 2, dash: 2, fixed: true, highlight: false
});
board.create('functiongraph', [function (x) { return x * x * x * x; }, -2.4, 2.4], {
  strokeColor: '#397b96', strokeWidth: 3, fixed: true, highlight: false
});
board.create('point', [0, 0], { name: '', size: 5, color: '#2e7d32', fixed: true });
board.create('text', [-2.3, 2.6,
  '<span style="color:#397b96">━ h</span> &nbsp; <span style="color:#9A6B2F">┅ h\'</span> &nbsp; <span style="color:#888">┈ h\'\'</span>'
], { fontSize: 14, fixed: true });
```

:::

$h'(x) = 4x^3$ ist links von $0$ negativ und rechts positiv. Der Graph fällt erst und steigt dann: **Vorzeichenwechsel von − nach +**, also ein **Tiefpunkt**.

Ein **Sattelpunkt** ist ein Wendepunkt mit waagerechter Tangente. Dafür muss die Krümmung wechseln. Bei $h(x) = x^4$ ist aber $h''(x) = 12x^2 \geq 0$ überall. Im Bild siehst du: $h''$ berührt die $x$-Achse nur. Der Graph ist überall linksgekrümmt, es gibt also gar keinen Wendepunkt.

## Was du stattdessen prüfen musst

:::snippet{#merken}

**Wenn $f'(x_0) = 0$ und $f''(x_0) = 0$ ist**

Die zweite Ableitung liefert keine Entscheidung. Prüfe den **Vorzeichenwechsel von $f'$** an der Stelle $x_0$:

| Vorzeichen von $f'$ links von $x_0$ | rechts von $x_0$ | Art des Punktes |
| :---: | :---: | :--- |
| $-$ | $+$ | Tiefpunkt |
| $+$ | $-$ | Hochpunkt |
| $+$ | $+$ | Sattelpunkt |
| $-$ | $-$ | Sattelpunkt |

Am einfachsten setzt du dazu je einen Wert links und rechts von $x_0$ in $f'$ ein. Zwischen den beiden Werten darf aber keine weitere Nullstelle von $f'$ liegen.

:::

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 680 330" width="680" style="max-width:100%;height:auto;" role="img" aria-label="Entscheidungsschema: Ist f Strich von x null gleich null? Dann f zwei Strich von x null prüfen. Ist es kleiner null, Hochpunkt. Größer null, Tiefpunkt. Gleich null, keine Aussage, dann Vorzeichenwechsel von f Strich prüfen: von minus nach plus Tiefpunkt, von plus nach minus Hochpunkt, kein Wechsel Sattelpunkt.">
<defs>
<marker id="sp-pfeil" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker>
</defs>
<rect x="240" y="10" width="200" height="44" rx="10" fill="#397b96" fill-opacity="0.85"/>
<text x="340" y="38" font-size="17" text-anchor="middle" fill="#fff">f′(x₀) = 0</text>
<path d="M 340 54 L 340 82" stroke="currentColor" stroke-width="2" marker-end="url(#sp-pfeil)"/>
<rect x="240" y="84" width="200" height="44" rx="10" fill="#397b96" fill-opacity="0.85"/>
<text x="340" y="112" font-size="17" text-anchor="middle" fill="#fff">f″(x₀) prüfen</text>
<path d="M 250 128 L 90 170" stroke="currentColor" stroke-width="2" marker-end="url(#sp-pfeil)"/>
<path d="M 340 128 L 340 170" stroke="currentColor" stroke-width="2" marker-end="url(#sp-pfeil)"/>
<path d="M 430 128 L 590 170" stroke="currentColor" stroke-width="2" marker-end="url(#sp-pfeil)"/>
<text x="150" y="140" font-size="15" text-anchor="middle" fill="currentColor">&lt; 0</text>
<text x="362" y="155" font-size="15" text-anchor="start" fill="currentColor">= 0</text>
<text x="530" y="140" font-size="15" text-anchor="middle" fill="currentColor">&gt; 0</text>
<rect x="20" y="172" width="140" height="40" rx="10" fill="#bb0a21" fill-opacity="0.85"/>
<text x="90" y="198" font-size="16" text-anchor="middle" fill="#fff">Hochpunkt</text>
<rect x="520" y="172" width="140" height="40" rx="10" fill="#2e7d32" fill-opacity="0.85"/>
<text x="590" y="198" font-size="16" text-anchor="middle" fill="#fff">Tiefpunkt</text>
<rect x="220" y="172" width="240" height="40" rx="10" fill="#9A6B2F" fill-opacity="0.85"/>
<text x="340" y="198" font-size="16" text-anchor="middle" fill="#fff">keine Aussage! ⇒ VZW von f′</text>
<path d="M 260 212 L 110 262" stroke="currentColor" stroke-width="2" marker-end="url(#sp-pfeil)"/>
<path d="M 340 212 L 340 262" stroke="currentColor" stroke-width="2" marker-end="url(#sp-pfeil)"/>
<path d="M 420 212 L 570 262" stroke="currentColor" stroke-width="2" marker-end="url(#sp-pfeil)"/>
<text x="160" y="232" font-size="15" text-anchor="middle" fill="currentColor">+ nach −</text>
<text x="350" y="245" font-size="15" text-anchor="start" fill="currentColor">kein VZW</text>
<text x="520" y="232" font-size="15" text-anchor="middle" fill="currentColor">− nach +</text>
<rect x="40" y="264" width="140" height="40" rx="10" fill="#bb0a21" fill-opacity="0.85"/>
<text x="110" y="290" font-size="16" text-anchor="middle" fill="#fff">Hochpunkt</text>
<rect x="270" y="264" width="140" height="40" rx="10" fill="#555" fill-opacity="0.85"/>
<text x="340" y="290" font-size="16" text-anchor="middle" fill="#fff">Sattelpunkt</text>
<rect x="500" y="264" width="140" height="40" rx="10" fill="#2e7d32" fill-opacity="0.85"/>
<text x="570" y="290" font-size="16" text-anchor="middle" fill="#fff">Tiefpunkt</text>
</svg>
</figure>

## Die richtige Lösung für a = 0

:::snippet{#beispiel}

$f_0(x) = x^4$, $\quad f_0'(x) = 4x^3$, $\quad f_0''(x) = 12x^2$

1. **Notwendige Bedingung:** $4x^3 = 0 \Rightarrow x_0 = 0$.
2. **Hinreichende Bedingung:** $f_0''(0) = 0$. Keine Aussage möglich!
3. **Vorzeichenwechsel von $f_0'$:**
   - $f_0'(-1) = -4 < 0$
   - $f_0'(1) = 4 > 0$

   $f_0'$ wechselt das Vorzeichen von $-$ nach $+$. Also ist $T(0|0)$ ein **Tiefpunkt**.

:::

## Die vollständige Fallunterscheidung

Aus $f_a'(x) = 4x\,(x^2 - a) = 0$ folgt $x = 0$ oder $x^2 = a$.

**Fall 1: $a < 0$**

- $x^2 = a$ hat keine Lösung. Die einzige Nullstelle von $f_a'$ ist $x = 0$.
- $f_a''(0) = -4a > 0$
- **Ergebnis:** 1 Extrempunkt, nämlich der Tiefpunkt $T(0|0)$.

**Fall 2: $a = 0$**

- Die einzige Nullstelle von $f_0'$ ist $x = 0$.
- $f_0''(0) = 0$, also keine Aussage. Aber $f_0'$ wechselt das Vorzeichen von $-$ nach $+$.
- **Ergebnis:** 1 Extrempunkt, nämlich der Tiefpunkt $T(0|0)$.

**Fall 3: $a > 0$**

- Nullstellen von $f_a'$: $x = 0$ und $x = \pm\sqrt{a}$.
- $f_a''(0) = -4a < 0$ und $f_a''(\pm\sqrt{a}) = 12a - 4a = 8a > 0$
- **Ergebnis:** 3 Extrempunkte, nämlich der Hochpunkt $H(0|0)$ und die Tiefpunkte $T_1(-\sqrt{a}\,|\,-a^2)$ und $T_2(\sqrt{a}\,|\,-a^2)$.

Der Fall $a = 0$ passt also gut ins Bild: Für $a \leq 0$ gibt es genau einen Tiefpunkt. Wenn $a$ von oben gegen $0$ geht, wandern die beiden Tiefpunkte zum Hochpunkt und verschmelzen bei $a = 0$ zu einem einzigen Tiefpunkt. Probiere es oben mit dem Regler aus.

## Teste dich

:::snippet{#aufgabe}

**1** Bei allen Funktionen gilt $f'(0) = 0$ und $f''(0) = 0$. Entscheide mit dem Vorzeichenwechsel von $f'$, welche Art von Punkt bei $x = 0$ vorliegt.

:::

:::multievent

- $f(x) = x^5$ mit $f'(x) = 5x^4$: {A{Hochpunkt|Tiefpunkt|!Sattelpunkt}}
- $f(x) = x^6$ mit $f'(x) = 6x^5$: {A{Hochpunkt|!Tiefpunkt|Sattelpunkt}}
- $f(x) = -x^4$ mit $f'(x) = -4x^3$: {A{!Hochpunkt|Tiefpunkt|Sattelpunkt}}
- $f(x) = x^4 + x^3$ mit $f'(x) = x^2(4x + 3)$: {A{Hochpunkt|Tiefpunkt|!Sattelpunkt}}
- $f(x) = x^4 - x^3$ mit $f'(x) = x^2(4x - 3)$: {A{Hochpunkt|Tiefpunkt|!Sattelpunkt}}

{b{x⁵: f′ = 5x⁴ ist links und rechts positiv, kein VZW. — x⁶: f′ = 6x⁵ wechselt von − nach +. — −x⁴: f′ = −4x³ wechselt von + nach −. — x⁴ ± x³: Der Faktor x² ist nie negativ, und der Faktor 4x ± 3 hat nahe bei x = 0 links und rechts das gleiche Vorzeichen. Also kein VZW.}}

:::

:::snippet{#aufgabe}

**2** Erkläre in eigenen Worten, warum man aus $f'(x_0) = 0$ und $f''(x_0) = 0$ **nicht** auf einen Sattelpunkt schließen darf. Nutze dazu das Beispiel $f(x) = x^4$.

:::
