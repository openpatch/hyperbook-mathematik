---
name: 💡 Stammfunktion
index: 13
lang: de
---

# Stammfunktion

Eine Funktion F(x) heißt Stammfunktion oder unbestimmtes Integral von f(x), wenn 

$$$

F'(x) = f(x)

$$$

Das Integrieren ist die Umkehroperation zum Differenzieren: man sucht eine Stammfunktion $F(x)$, deren Ableitung $F'(x) = f(x)$ ist.

- Im unteren Fenster siehst du eine Funktion $f(x)$ und zwei Stammfunktion $F(x)$ und $G(x)$. Ziehe im unteren Fenster den Graph von $f(x)$ mit der Maus.

- Die Funktion $f(x)$ hat unendlich viele Stammfunktionen der Form $G(x) = F(x) + c$, wobei $c$ eine reelle Zahl ist. Ziehe im unteren Fenster den grünen Punkt entlang der y-Achse, um $c$ zu verändern.

::geogebra{src="https://www.geogebra.org/calculator/kz5v8mc4" height=600 width=800}

## Stammfunktion und bestimmtes Integral

Jede Stammfunktion ist übrigens eine Flächeninhaltsfunktion von $f(x)$. Warum das so ist, erfährst du beim Hauptsatz der Differential- und Integralrechnung. Kennt man also eine Stammfunktion $F(x)$ von $f(x)$, dann kann man das bestimmte Integral mithilfe dieser Stammfunktion berechnen:

$$$

\int_a^b f(x) \, dx = F(b) - F(a)

$$$

Dadurch erspart man sich die langwierige Berechnung von Unter- und Obersummen samt Grenzwerten.