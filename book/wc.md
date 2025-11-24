---
name: Web Components
hide: true
scripts:
  - /wc/mengen-visualisierung.js
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