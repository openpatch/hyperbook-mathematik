---
name: Web Components
hide: true
scripts:
  - /wc/mengen-visualisierung.js
  - /wc/draw-input.js
  - https://cdn.jsdelivr.net/npm/mathjax@4/tex-svg.js
  - /wc/tree-diagram.js
  - /wc/lotterie-spiel.js
---

# Dokumentation zu Web Components

## Mengen-Visualisierung

Die `mengen-visualisierung` Web Component visualisiert Mengenoperationen mit interaktiven Venn-Diagrammen.

### Verwendung

```html
<mengen-visualisierung
  menge-a="1,2,3,4,5"
  menge-b="3,4,5,6,7"
  label-a="A"
  label-b="B">
</mengen-visualisierung>
```

<mengen-visualisierung
  menge-a="1,2,3,4,5"
  menge-b="3,4,5,6,7"
  label-a="A"
  label-b="B">
</mengen-visualisierung>

### Attribute

- `menge-a`: Kommagetrennte Liste der Elemente von Menge A (Standard: "1,2,3,4,5")
- `menge-b`: Kommagetrennte Liste der Elemente von Menge B (Standard: "3,4,5,6,7")
- `grundmenge`: Optionale kommagetrennte Liste der Elemente der Grundmenge (wird automatisch um A und B erweitert, falls nötig)
- `label-a`: Bezeichnung für Menge A (Standard: "A")
- `label-b`: Bezeichnung für Menge B (Standard: "B")
- `label-grundmenge`: Bezeichnung für die Grundmenge (Standard: "G")

### Funktionen

Die Komponente bietet folgende Mengenoperationen:

- **Vereinigung (A ∪ B)**: Alle Elemente aus beiden Mengen
- **Schnittmenge (A ∩ B)**: Gemeinsame Elemente beider Mengen
- **Differenz (A \ B)**: Elemente in A, aber nicht in B
- **Differenz (B \ A)**: Elemente in B, aber nicht in A
- **Komplement A**: Alle Elemente außer denen in A (bezogen auf die Grundmenge, falls definiert)
- **Komplement B**: Alle Elemente außer denen in B (bezogen auf die Grundmenge, falls definiert)

### Beispiele

**Zahlenmengen:**
```html
<mengen-visualisierung
  menge-a="2,4,6,8,10"
  menge-b="1,2,3,4,5"
  label-a="Gerade"
  label-b="Klein">
</mengen-visualisierung>
```

**Buchstabenmengen:**
```html
<mengen-visualisierung
  menge-a="a,e,i,o,u"
  menge-b="a,b,c,d,e"
  label-a="Vokale"
  label-b="Alphabet">
</mengen-visualisierung>
```
logo
Mathematik



Dokumentation zu Web Components
Mengen-Visualisierung
Die 
mengen-visualisierung

 Web Component visualisiert Mengenoperationen mit interaktiven Venn-Diagrammen.

Verwendung
<mengen-visualisierung
  menge-a="1,2,3,4,5"
  menge-b="3,4,5,6,7"
  label-a="A"
  label-b="B">
</mengen-visualisierung>


Vereinigung
A ∪ B

Schnittmenge
A ∩ B

Differenz
A \ B

Differenz
B \ A

Komplement A

Komplement B
A
B
Vereinigung A ∪ B
Alle Elemente, die in mindestens einer der beiden Mengen vorkommen.

Ergebnis: {1, 2, 3, 4, 5, 6, 7}


Attribute
menge-a

: Kommagetrennte Liste der Elemente von Menge A (Standard: "1,2,3,4,5")
menge-b

: Kommagetrennte Liste der Elemente von Menge B (Standard: "3,4,5,6,7")
grundmenge

: Optionale kommagetrennte Liste der Elemente der Grundmenge (wird automatisch um A und B erweitert, falls nötig)
label-a

: Bezeichnung für Menge A (Standard: "A")
label-b

: Bezeichnung für Menge B (Standard: "B")
label-grundmenge

: Bezeichnung für die Grundmenge (Standard: "G")
Funktionen
Die Komponente bietet folgende Mengenoperationen:

Vereinigung (A ∪ B): Alle Elemente aus beiden Mengen
Schnittmenge (A ∩ B): Gemeinsame Elemente beider Mengen
Differenz (A \ B): Elemente in A, aber nicht in B
Differenz (B \ A): Elemente in B, aber nicht in A
Komplement A: Alle Elemente außer denen in A (bezogen auf die Grundmenge, falls definiert)
Komplement B: Alle Elemente außer denen in B (bezogen auf die Grundmenge, falls definiert)
Beispiele
Zahlenmengen:

<mengen-visualisierung
  menge-a="2,4,6,8,10"
  menge-b="1,2,3,4,5"
  label-a="Gerade"
  label-b="Klein">
</mengen-visualisierung>

Buchstabenmengen:

<mengen-visualisierung
  menge-a="a,e,i,o,u"
  menge-b="a,b,c,d,e"
  label-a="Vokale"
  label-b="Alphabet">
</mengen-visualisierung>

Mit Grundmenge:

<mengen-visualisierung 
  menge-a="1,2,3,4"
  menge-b="3,4,5,6"
  grundmenge="0,1,2,3,4,5,6,7,8,9"
  label-a="A"
  label-b="B"
  label-grundmenge="G">
</mengen-visualisierung>


Vereinigung
A ∪ B

Schnittmenge
A ∩ B

Differenz
A \ B

Differenz
B \ A

Komplement A

Komplement B
G
A
B
Vereinigung A ∪ B
Alle Elemente, die in mindestens einer der beiden Mengen vorkommen.

Ergebnis: {1, 2, 3, 4, 5, 6}


Einbindung in Hyperbook
Im Frontmatter der Seite muss das Script eingebunden werden:

---
name: Meine Seite
scripts:
  - /wc/mengen-visualisierung.js
---

Draw Input
Die 
draw-input

 Web Component ermöglicht das Zeichnen von Formen auf einer Zeichenfläche und das Erfassen der Koordinatenpunkte.

Verwendung
<draw-input></draw-input>





Baumdiagramm



**Mit Grundmenge:**
```html
<mengen-visualisierung 
  menge-a="1,2,3,4"
  menge-b="3,4,5,6"
  grundmenge="0,1,2,3,4,5,6,7,8,9"
  label-a="A"
  label-b="B"
  label-grundmenge="G">
</mengen-visualisierung>
```

<mengen-visualisierung 
  menge-a="1,2,3,4"
  menge-b="3,4,5,6"
  grundmenge="0,1,2,3,4,5,6,7,8,9"
  label-a="A"
  label-b="B"
  label-grundmenge="G">
</mengen-visualisierung>

### Einbindung in Hyperbook

Im Frontmatter der Seite muss das Script eingebunden werden:

```yaml
---
name: Meine Seite
scripts:
  - /wc/mengen-visualisierung.js
---
```

## Draw Input

Die `draw-input` Web Component ermöglicht das Zeichnen von Formen auf einer Zeichenfläche und das Erfassen der Koordinatenpunkte.

### Verwendung

```html
<draw-input></draw-input>
```

<draw-input></draw-input>

## Baumdiagramm

<tree-diagram height="800px">
\frac{1}{6}:A  
  \frac{1}{3}:B  
  \frac{2}{3}:\overline{B}
\frac{5}{6}:\overline{A}
  \frac{4}{5}:B
  \frac{1}{5}:\overline{B}
\frac{5}{6}:\overline{A}
  \frac{4}{5}:B
  \frac{1}{5}:\overline{B}
\frac{5}{6}:\overline{A}
  \frac{4}{5}:B
  \frac{1}{5}:\overline{B}
\frac{5}{6}:\overline{A}
  \frac{4}{5}:B
  \frac{1}{5}:\overline{B}
</tree-diagram>

## Lotterie-Spiel

Das `lotterie-spiel` Web Component ist ein interaktives Glücksspiel, bei dem man ein Glücksrad dreht und Kugeln aus einer Urne zieht.

### Verwendung

```html
<lotterie-spiel></lotterie-spiel>
```

<lotterie-spiel></lotterie-spiel>

### Spielregeln

1. **Einsatz**: 50 Cent pro Spiel
2. **Glücksrad drehen**: Das Rad zeigt entweder Rot (80% Wahrscheinlichkeit) oder Blau (20% Wahrscheinlichkeit)
3. **Kugel ziehen**: Je nach Farbe des Glücksrads zieht man eine Kugel aus der entsprechenden Urne:
   - **Rote Urne**: Enthält Kugeln mit Werten 0, 1, 2 (mit Wahrscheinlichkeiten 0,3, 0,2, 0,5)
   - **Blaue Urne**: Enthält Kugeln mit Werten 0, 4, 8 (mit Wahrscheinlichkeiten 0,1, 0,4, 0,5)
4. **Gewinnberechnung**:
   - **Rote Kugel**: Man muss den Wert zahlen (Verlust + Einsatz)
   - **Blaue Kugel**: Man erhält den Wert ausgezahlt (Gewinn - Einsatz)

### Funktionen

- **Interaktives Glücksrad**: Klicke auf das Rad oder den Button zum Drehen
- **Urnenziehung**: Wähle nach dem Drehen eine Kugel aus der entsprechenden Urne
- **Echtzeit-Statistik**: Verfolge deine Bilanz über mehrere Spiele
- **Gewinn/Verlust-Anzeige**: Sofortiges Feedback nach jedem Spiel

### Statistik

Das Component zeigt folgende Statistiken:
- Anzahl gespielter Spiele
- Gesamt-Einsatz
- Gesamt-Gewinn/Verlust
- Aktuelle Bilanz

### Einbindung in Hyperbook

Im Frontmatter der Seite muss das Script eingebunden werden:

```yaml
---
name: Meine Seite
scripts:
  - /wc/lotterie-spiel.js
---
```