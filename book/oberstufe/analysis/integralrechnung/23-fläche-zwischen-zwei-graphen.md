---
name: 💡 Fläche zwischen zwei Graphen
index: 23
lang: de
---

# 💡 Fläche zwischen zwei Graphen

Der Flächeninhalt zwischen zwei Graphen $f(x)$ und $g(x)$ im Intervall $[a,b]$ kann durch das Integral der Differenz der beiden Funktionen berechnet werden:

1. Schnittstellen der beiden Funktionen im Intervall $[a,b]$ bestimmen: $f(x) = g(x)$
2. Flächeninhalt der Teilflächen zwischen den Schnittstellen berechnen. Bei negativen Werten wird der Betrag genommen.
3. Die Flächeninhalte der Teilflächen addieren.

Verschiebe die Punkte $P_1$ und $P_2$ um die Funktion $g(x)$ zu verschieben. Die Fläche zwischen den beiden Funktionen ist markiert.

Untersuche, wie sich die Fläche verändert, wenn sich die Funktion $g(x)$ ändert.

:::geogebra{perspective="G" coordsystem="-5,5,-5,5" enableRightClick=false}

f(x) = 0.125*x^3
P_1 = (0,0)
g_1 = DynamicCoordinates(P_1, x(P_1), y(P_1))
ShowLabel(g_1, false)
P_2 = (2,2)
g_2 = DynamicCoordinates(P_2, x(P_2), y(P_2))
ShowLabel(g_2, false)
g(x) = Line(g_1, g_2)
p = {Intersect(f(x), g(x))}
a = x(Element(p,1))
b = x(Element(p,2))
c = x(Element(p,3))
A_1 = IntegralBetween(g, f, a, b)
A_2 = IntegralBetween(g, f, b, c)

:::