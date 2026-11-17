---
name: Das Beet
index: 1
lang: de
permaid: mittelstufe-terme-aufstellen-das-beet
---

# Das Beet: Ein Term für viele Möglichkeiten

:::alert{info}

**Darum geht's:** Du stellst einen Term für eine Fläche auf, setzt verschiedene Zahlen ein und findest so die beste Lösung. Dabei lernst du ein Vorgehen in drei Schritten kennen.

:::

## Die Situation

Familie Pfeiffer hat ihren Garten neu angelegt. Dabei sind $7$ m Zaun übrig geblieben. Damit soll ein **rechteckiges Beet** an einer Hausecke eingezäunt werden. Zwei Seiten des Beetes sind Hauswände, die anderen zwei Seiten bekommen den Zaun.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 360 260" width="360" style="max-width:100%;height:auto;" role="img" aria-label="Hausecke mit rechteckigem Beet. Zwei Seiten sind Hauswand, die anderen zwei Seiten sind Zaun mit den Längen x und 7 minus x.">
<rect x="20" y="20" width="40" height="220" fill="currentColor" opacity="0.25"/>
<rect x="20" y="200" width="320" height="40" fill="currentColor" opacity="0.25"/>
<text x="40" y="120" font-size="14" text-anchor="middle" fill="currentColor" transform="rotate(-90 40 120)">Hauswand</text>
<text x="200" y="226" font-size="14" text-anchor="middle" fill="currentColor">Hauswand</text>
<rect x="60" y="80" width="180" height="120" fill="#397b96" fill-opacity="0.45"/>
<path d="M 60 80 L 240 80 L 240 200" fill="none" stroke="#9A6B2F" stroke-width="5" stroke-dasharray="10 5"/>
<g font-size="17" text-anchor="middle" fill="currentColor">
<text x="150" y="70">x</text>
<text x="275" y="146">7 − x</text>
<text x="150" y="146">Beet</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Der braune Zaun ist zusammen 7 m lang. Ist eine Seite x Meter lang, bleiben für die andere Seite 7 − x Meter.</figcaption>
</figure>

Die Länge der oberen Seite kennen wir noch nicht. Wir nennen sie $x$. Weil der Zaun insgesamt $7$ m lang ist, bleibt für die rechte Seite $7 - x$ übrig. Die Fläche des Beetes ist dann

$$A = x \cdot (7 - x).$$

Hier ist $x$ eine **Variable**: Sie steht für eine Zahl, die wir noch frei wählen können.

## Ausprobieren

Verschiebe den Regler. Links siehst du das Beet, rechts, wie groß die Fläche für jedes $x$ ist.

:::jsxgraph{height="420" width="720" boundingbox="[-1,9,17,-1.5]" axis=false grid=false}

```js
var num = function (v) {
  return String(Math.round(v * 100) / 100).replace('.', ',');
};
var X = board.create('slider', [[1, 8.3], [6, 8.3], [0.5, 2, 6.5]], {
  name: '', withLabel: false, snapWidth: 0.5,
  strokeColor: '#397b96', fillColor: '#397b96', highline: { strokeColor: '#397b96' }
});
var xv = function () { return Math.round(X.Value() * 2) / 2; };
var yv = function () { return 7 - xv(); };
board.create('text', [6.4, 8.3, function () { return 'x = ' + num(xv()) + ' m'; }], {
  fontSize: 17, anchorY: 'middle', fixed: true, strokeColor: '#397b96'
});

// Hauswände
board.create('polygon', [[-0.6, -0.6], [7.4, -0.6], [7.4, 0], [0, 0], [0, 7.4], [-0.6, 7.4]], {
  fillColor: '#888', fillOpacity: 0.35, fixed: true, vertices: { visible: false },
  borders: { strokeWidth: 0 }
});

// Beet
var P = function (fx, fy) {
  return board.create('point', [fx, fy], { visible: false, fixed: true, withLabel: false });
};
var p1 = P(0, 0), p2 = P(xv, 0), p3 = P(xv, yv), p4 = P(0, yv);
board.create('polygon', [p1, p2, p3, p4], {
  fillColor: '#397b96', fillOpacity: 0.45, fixed: true, hasInnerPoints: false,
  vertices: { visible: false }, borders: { strokeWidth: 0 }
});
board.create('segment', [p4, p3], { strokeColor: '#9A6B2F', strokeWidth: 5, dash: 2, fixed: true });
board.create('segment', [p3, p2], { strokeColor: '#9A6B2F', strokeWidth: 5, dash: 2, fixed: true });
board.create('text', [function () { return xv() / 2; }, function () { return yv() + 0.4; },
  function () { return num(xv()) + ' m'; }], { anchorX: 'middle', fontSize: 15, fixed: true });
board.create('text', [function () { return xv() + 0.2; }, function () { return yv() / 2; },
  function () { return num(yv()) + ' m'; }], { anchorY: 'middle', fontSize: 15, fixed: true });
board.create('text', [function () { return xv() / 2; }, function () { return yv() / 2; },
  function () { return num(xv() * yv()) + ' m²'; }], {
  anchorX: 'middle', anchorY: 'middle', fontSize: 17, fixed: true
});

// Diagramm: Fläche in Abhängigkeit von x
var ox = 9.2, oy = 0, sx = 1, sy = 0.5;
board.create('arrow', [[ox, oy], [ox + 7.6, oy]], { strokeColor: '#666', fixed: true });
board.create('arrow', [[ox, oy], [ox, oy + 7.3]], { strokeColor: '#666', fixed: true });
for (var i = 1; i <= 7; i++) {
  board.create('text', [ox + i * sx, -0.45, String(i)], { anchorX: 'middle', fontSize: 12, fixed: true });
}
for (var j = 2; j <= 12; j += 2) {
  board.create('text', [ox - 0.2, oy + j * sy, String(j)], { anchorX: 'right', anchorY: 'middle', fontSize: 12, fixed: true });
}
board.create('text', [ox + 7.3, -1, 'x in m'], { anchorX: 'right', fontSize: 13, fixed: true });
board.create('text', [ox + 0.2, oy + 7.2, 'A in m²'], { fontSize: 13, fixed: true });
board.create('curve', [
  function (t) { return ox + t * sx; },
  function (t) { return oy + t * (7 - t) * sy; }, 0, 7
], { strokeColor: '#bb0a21', strokeWidth: 2, fixed: true });
board.create('point', [function () { return ox + xv() * sx; }, function () { return oy + xv() * yv() * sy; }], {
  name: '', size: 5, color: '#397b96', fixed: true
});
```

:::

:::multievent

Fülle die Tabelle aus. Nutze den Regler zur Kontrolle.

| $x$ in m | $1$ | $2$ | $3$ | $3{,}5$ | $5$ |
| --- | :---: | :---: | :---: | :---: | :---: |
| $7 - x$ in m | {z{6}} | {z{5}} | {z{4}} | {z{3,5}} | {z{2}} |
| $A = x \cdot (7 - x)$ in m² | {z{6}} | {z{10}} | {z{12}} | {z{12,25}} | {z{10}} |

Die größte Fläche erhält man für $x =$ {z{3,5}} m. Das Beet ist dann ein {A{Rechteck mit zwei verschieden langen Seiten|!Quadrat|Dreieck}}.

{b{Je näher x an 3,5 liegt, desto größer wird die Fläche. Bei x = 3,5 sind beide Seiten gleich lang: 3,5 · 3,5 = 12,25 m².}}

:::

:::alert{info}

**Variable als Veränderliche:** In diesem Beispiel kann $x$ viele Werte annehmen. Der Term $x \cdot (7 - x)$ beschreibt alle möglichen Beete auf einmal. Setzt du eine Zahl für $x$ ein, erhältst du den **Termwert**, hier die Fläche eines bestimmten Beetes.

:::

## So stellst du einen Term auf

:::snippet{#merken}

**Vorgehen beim Aufstellen eines Terms**

1. **Größen klären:** Welche Größen sind gegeben, welche werden gesucht? Gib der unbekannten Größe einen Namen, zum Beispiel $x$, und schreibe auf, wofür sie steht.
2. **Rechenweg überlegen:** Welche Rechenoperationen sind nötig? Rechne zuerst mit einem Zahlenbeispiel.
3. **Term aufstellen:** Ersetze im Zahlenbeispiel die gewählte Zahl durch die Variable. Prüfe den Term durch Einsetzen.

:::

## Das Gehege an der Mauer

Für Kaninchen soll ein rechteckiges Gehege an einer Mauer gebaut werden. Es stehen $20$ m Zaun zur Verfügung. Die Mauer bildet eine Seite, die anderen **drei** Seiten bekommen den Zaun.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 420 220" width="420" style="max-width:100%;height:auto;" role="img" aria-label="Rechteckiges Gehege an einer Mauer. Zwei Seiten sind x lang, die Seite gegenüber der Mauer ist 20 minus 2x lang.">
<rect x="20" y="20" width="380" height="26" fill="currentColor" opacity="0.25"/>
<text x="210" y="38" font-size="14" text-anchor="middle" fill="currentColor">Mauer</text>
<rect x="90" y="46" width="240" height="120" fill="#397b96" fill-opacity="0.35"/>
<path d="M 90 46 L 90 166 L 330 166 L 330 46" fill="none" stroke="#9A6B2F" stroke-width="5" stroke-dasharray="10 5"/>
<g font-size="17" text-anchor="middle" fill="currentColor">
<text x="72" y="112">x</text>
<text x="350" y="112">x</text>
<text x="210" y="192">20 − 2x</text>
<text x="210" y="112">Gehege</text>
</g>
</svg>
</figure>

:::snippet{#aufgabe}

**1** Gehe nach den drei Schritten vor.

:::

:::multievent

**Schritt 1:** Die beiden Seiten an der Mauer sind jeweils $x$ m lang. Für die dritte Seite bleiben $20 - 2x$ m.

**Schritt 2:** Zahlenbeispiel mit $x = 3$: Die dritte Seite ist {z{14}} m lang, die Fläche ist {z{42}} m².

**Schritt 3:** Der Term für die Fläche lautet {A{x · (20 − x)|!x · (20 − 2x)|2x + (20 − 2x)|x · 20 − 2}}.

Berechne die Fläche für $x = 4$: {z{48}} m², für $x = 5$: {z{50}} m² und für $x = 6$: {z{48}} m².

Das größte Gehege hat die Maße {z{5}} m mal {z{10}} m.

{b{Die Fläche ist x · (20 − 2x). Für x = 5 ergibt sich 5 · 10 = 50 m². Für x = 4 und x = 6 kommt jeweils 48 m² heraus, also ist 50 m² am größten.}}

:::

## Draht für ein Kantenmodell

Ein Quader hat die Kantenlängen $a$, $b$ und $c$ (in cm). Für ein Kantenmodell aus Draht braucht man jede Kante einmal.

<figure style="text-align:center;margin:1.2em 0;">
<svg viewBox="0 0 320 220" width="320" style="max-width:100%;height:auto;" role="img" aria-label="Quader als Kantenmodell. Je vier Kanten haben die Länge a, b und c.">
<g fill="none" stroke-width="3">
<path d="M 40 80 L 200 80 L 200 190 L 40 190 Z" stroke="#397b96"/>
<path d="M 100 30 L 260 30 L 260 140" stroke="#397b96"/>
<path d="M 100 30 L 100 140 L 260 140" stroke="#397b96" stroke-dasharray="6 5" opacity="0.6"/>
</g>
<g stroke-width="4">
<line x1="40" y1="190" x2="200" y2="190" stroke="#397b96"/>
<line x1="40" y1="80" x2="200" y2="80" stroke="#397b96"/>
<line x1="100" y1="30" x2="260" y2="30" stroke="#397b96"/>
<line x1="200" y1="190" x2="260" y2="140" stroke="#9A6B2F"/>
<line x1="200" y1="80" x2="260" y2="30" stroke="#9A6B2F"/>
<line x1="40" y1="80" x2="100" y2="30" stroke="#9A6B2F"/>
<line x1="40" y1="190" x2="100" y2="140" stroke="#9A6B2F" stroke-dasharray="6 5" opacity="0.6"/>
<line x1="40" y1="80" x2="40" y2="190" stroke="#bb0a21"/>
<line x1="200" y1="80" x2="200" y2="190" stroke="#bb0a21"/>
<line x1="260" y1="30" x2="260" y2="140" stroke="#bb0a21"/>
<line x1="100" y1="30" x2="100" y2="140" stroke="#bb0a21" stroke-dasharray="6 5" opacity="0.6"/>
</g>
<g font-size="17" fill="currentColor" text-anchor="middle">
<text x="120" y="212">a</text>
<text x="240" y="178">b</text>
<text x="25" y="140">c</text>
</g>
</svg>
<figcaption style="font-size:0.9em;opacity:0.8;margin-top:0.3em;">Jede Farbe kommt viermal vor: vier Kanten a (blau), vier Kanten b (braun), vier Kanten c (rot).</figcaption>
</figure>

:::snippet{#aufgabe}

**2** Stelle einen Term für die Drahtlänge auf und rechne.

:::

:::multievent

Der Drahtbedarf ist {A{a + b + c|2a + 2b + 2c|!4a + 4b + 4c|a · b · c}}.

Für $a = 3$, $b = 5$ und $c = 4$ braucht man {z{48}} cm Draht.

Der Quader hat nun eine **quadratische Grundfläche** mit der Seitenlänge $x$ und die Höhe $y$. Dann gibt es {z{8}} Kanten der Länge $x$ und {z{4}} Kanten der Länge $y$.

Für $x = 5$ und $y = 8$ braucht man {z{72}} cm Draht.

Aus $60$ cm Draht soll ein solcher Quader mit der Höhe $y = 7$ cm entstehen. Für die Kanten der Grundfläche bleiben {z{32}} cm, also ist $x =$ {z{4}} cm. Das ist {A{!möglich|nicht möglich}}.

{b{Drahtlänge 8x + 4y. Mit y = 7 gilt: 8x + 28 = 60, also 8x = 32 und x = 4.}}

:::
