---
name: Mengen
scripts:
  - /wc/mengen-visualisierung.js
---

# Mengen

## Was ist eine Menge?

In der Mathematik ist eine **Menge** eine Zusammenfassung von unterscheidbaren Objekten zu einem Ganzen. Diese Objekte nennen wir **Elemente** der Menge. Eine Menge kann alles enthalten: Zahlen, Buchstaben, Personen oder sogar andere Mengen.

**Schreibweise:**
- Mengen werden meist mit Großbuchstaben bezeichnet: $A$, $B$, $C$, ...
- Die Elemente werden in geschweiften Klammern aufgelistet: $A = \{1, 2, 3, 4, 5\}$
- Das Symbol $\in$ bedeutet "ist Element von": $3 \in A$ (3 ist Element von A)
- Das Symbol $\notin$ bedeutet "ist nicht Element von": $7 \notin A$ (7 ist nicht Element von A)

**Beispiele:**
- $A = \{1, 2, 3, 4, 5\}$ - Die Menge der natürlichen Zahlen von 1 bis 5
- $B = \{a, e, i, o, u\}$ - Die Menge der Vokale
- $C = \{\text{rot}, \text{gelb}, \text{grün}\}$ - Die Menge der Ampelfarben

## Visualisierung mit Venn-Diagrammen

Mengenoperationen lassen sich gut mit **Venn-Diagrammen** darstellen. Dabei werden Mengen als Kreise oder Ovale dargestellt, und die verschiedenen Bereiche zeigen die Ergebnisse der Operationen.

- **Schnittmenge**: Der überlappende Bereich beider Kreise
- **Vereinigung**: Beide Kreise zusammen
- **Komplement**: Alles außerhalb des Kreises (aber innerhalb der Grundmenge)
- **Differenz**: Der Teil von $A$, der nicht mit $B$ überlappt

<mengen-visualisierung
  menge-a="1,2,3,4,5"
  menge-b="3,4,5,6,7"
  label-a="A"
  label-b="B">
</mengen-visualisierung>

## Schnittmenge

Die **Schnittmenge** zweier Mengen $A$ und $B$ enthält alle Elemente, die sowohl in $A$ als auch in $B$ vorkommen.

**Schreibweise:** $A \cap B$ (gesprochen: "A geschnitten B")

**Beispiel:**
- $A = \{1, 2, 3, 4, 5\}$
- $B = \{3, 4, 5, 6, 7\}$
- $A \cap B = \{3, 4, 5\}$

Die Schnittmenge enthält nur die Zahlen 3, 4 und 5, weil diese in beiden Mengen vorkommen.

## Vereinigung

Die **Vereinigung** zweier Mengen $A$ und $B$ enthält alle Elemente, die in mindestens einer der beiden Mengen vorkommen.

**Schreibweise:** $A \cup B$ (gesprochen: "A vereinigt mit B")

**Beispiel:**
- $A = \{1, 2, 3, 4, 5\}$
- $B = \{3, 4, 5, 6, 7\}$
- $A \cup B = \{1, 2, 3, 4, 5, 6, 7\}$

Die Vereinigung enthält alle Zahlen, die in $A$ oder $B$ (oder in beiden) vorkommen. Jedes Element wird nur einmal aufgeführt, auch wenn es in beiden Mengen vorkommt.

## Komplement

Das **Komplement** einer Menge $A$ enthält alle Elemente, die nicht in $A$ enthalten sind. Dafür muss eine Grundmenge $G$ (auch Universalmenge genannt) festgelegt sein.

**Schreibweise:** $\overline{A}$ oder $A^C$ (gesprochen: "A Komplement")

**Beispiel:**
- Grundmenge: $G = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$
- $A = \{2, 4, 6, 8, 10\}$ (gerade Zahlen)
- $\overline{A} = \{1, 3, 5, 7, 9\}$ (ungerade Zahlen)

Das Komplement von $A$ enthält alle Elemente aus der Grundmenge $G$, die nicht in $A$ sind.

## Differenz

Die **Differenz** zweier Mengen $A$ und $B$ enthält alle Elemente, die in $A$, aber nicht in $B$ enthalten sind.

**Schreibweise:** $A \setminus B$ oder $A - B$ (gesprochen: "A ohne B")

**Beispiel:**
- $A = \{1, 2, 3, 4, 5\}$
- $B = \{3, 4, 5, 6, 7\}$
- $A \setminus B = \{1, 2\}$

Die Differenz $A \setminus B$ enthält nur die Elemente 1 und 2, weil diese in $A$ vorkommen, aber nicht in $B$.

**Wichtig:** $A \setminus B \neq B \setminus A$

Im Beispiel wäre: $B \setminus A = \{6, 7\}$
