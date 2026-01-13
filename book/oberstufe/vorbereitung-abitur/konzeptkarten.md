---
title: Konzeptkarten
---

# Konzeptkarten

:::typst{mode="edit"}

```typ
#set page(
  width: 210mm,
  height: 297mm,
  margin: 10mm
)

#set text(
  font: "Linux Libertine",
  size: 12pt
)

#let karte(konzept, bereich) = box(
  width: 1fr,
  height: 1fr,
  stroke: 0.5pt,
  inset: 6pt,
)[
  align(right)[
    text(size: 9pt)[#bereich]
  ]

  v(1fr)

  align(center)[
    text(size: 14pt, weight: "bold")[#konzept]
  ]

  v(1fr)
]

#let seite(karten) = {
  grid(
    columns: 3,
    rows: 4,
    gutter: 6mm,
    ..karten
  )
  pagebreak()
}

= Konzeptkarten Abitur Mathematik

#seite((
  karte("Potenzfunktion mit ganzzahligem Exponenten", "A"),
  karte("Ganzrationale Funktion", "A"),
  karte("Definitionsbereich einer Funktion", "A"),
  karte("Wertebereich einer Funktion", "A"),
  karte("Nullstellen einer Funktion", "A"),
  karte("Symmetrie von Funktionen", "A"),
  karte("Verhalten für x → +∞", "A"),
  karte("Verhalten für x → −∞", "A"),
  karte("Graph einer Funktion", "A"),
  karte("Spiegelung an der x-Achse", "A"),
  karte("Spiegelung an der y-Achse", "A"),
  karte("Verschiebung eines Funktionsgraphen", "A"),
))

#seite((
  karte("Mittlere Änderungsrate", "A"),
  karte("Lokale Änderungsrate", "A"),
  karte("Sekante", "A"),
  karte("Tangente", "A"),
  karte("Ableitung als Steigung", "A"),
  karte("Potenzregel", "A"),
  karte("Summenregel", "A"),
  karte("Faktorregel", "A"),
  karte("Monotonie", "A"),
  karte("Lokales Extremum", "A"),
  karte("Globales Extremum", "A"),
  karte("Wendepunkt", "A"),
))

#seite((
  karte("Punkt im Raum", "G"),
  karte("Ortsvektor", "G"),
  karte("Vektor", "G"),
  karte("Vektoraddition", "G"),
  karte("Skalarmultiplikation", "G"),
  karte("Länge eines Vektors", "G"),
  karte("Kollinearität", "G"),
  karte("Gerade in Parameterform", "G"),
  karte("Parallele Geraden", "G"),
  karte("Windschiefe Geraden", "G"),
  karte("Skalarprodukt", "G"),
  karte("Ebene in Parameterform", "G"),
))

#seite((
  karte("Zufallsexperiment", "S"),
  karte("Mehrstufiges Zufallsexperiment", "S"),
  karte("Baumdiagramm", "S"),
  karte("Vierfeldertafel", "S"),
  karte("Bedingte Wahrscheinlichkeit", "S"),
  karte("Pfadregel", "S"),
  karte("Erwartungswert", "S"),
  karte("Varianz", "S"),
  karte("Standardabweichung", "S"),
  karte("Diskrete Zufallsgröße", "S"),
  karte("Binomialverteilung", "S"),
  karte("Histogramm", "S"),
))
```

:::
