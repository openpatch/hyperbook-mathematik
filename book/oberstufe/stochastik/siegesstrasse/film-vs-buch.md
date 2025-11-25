---
name: Film vs. Buch
---

# Film vs. Buch

In einer Umfrage wurden 800 Personen befragt, ob sie regelmäßig lesen und ob sie Filme schauen.
400 Personen gaben an, regelmäßig zu lesen und 500 Personen gaben an, regelmäßig Filme zu schauen,
davon haben 250 Personen beides angegeben. Betrachtet werden die Ereignisse A und B mit A: "Eine Person
liest regelmäßig." und B: "Eine Person schaut regelmäßig Filme."

## Aufgabe 1

::::multievent{id="film-vs-buch"}
:::snippet{#aufgabe}
Vervollständige die Vierfeldertafel.

|                | $B$      | $\overline{B}$ | Gesamt   |
| -------------- | -------- | -------------- | -------- |
| $A$            | {z{250}} | {z{150}}       | {z{400}} |
| $\overline{A}$ | {z{250}} | {z{150}}       | {z{400}} |
| Gesamt         | {z{500}} | {z{300}}       | {z{800}} |

:::
::::

## Aufgabe 2

:::snippet{#aufgabe}
Überprüfe die beiden Ereignisse A und B auf stochastische Unabhängigkeit und interpretiere das Ergebnis.
:::

:::collapsible{title="Lösung"}
Die Ereignisse A und B sind stochastisch unabhängig, wenn gilt:

$ P(A \cap B) = P(A) \cdot P(B) $

$ P(A) = \frac{400}{800} = 0,5 $

$ P(B) = \frac{500}{800} = 0,625 $

$ P(A \cap B) = \frac{250}{800} = 0,3125 $

$ P(A) \cdot P(B) = 0,5 \cdot 0,625 = 0,3125 $

Da $ P(A \cap B) = P(A) \cdot P(B) $ gilt, sind die Ereignisse A und B stochastisch unabhängig.

Interpretation: Ob eine Person regelmäßig liest, hat keinen Einfluss darauf, ob sie regelmäßig Filme schaut, und umgekehrt.
:::
