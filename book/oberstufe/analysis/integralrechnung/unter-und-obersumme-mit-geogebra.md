---
name: 💻 Unter- und Obersumme mit GeoGebra berechnen
index: 7
lang: de
---

# Unter- und Obersumme mit GeoGebra berechnen

Mit dieser Anleitung kannst du die Ober- und Untersumme einer Funktion in einem bestimmten Intervall in GeoGebra berechnen.

::geogebra{showToolBar showAlgebraInput algebraInputPosition="bottom" enableUndoRedo showMenuBar enableFileFeatures showZoomButtons widht="800"}

1. Gib in die Eingabezeile eine Funktion ein, z.B. $f(x)=x^2$.
2. Gib die Intervallgrneze a, b und die Anzahl der Rechtecke n ein.

```
a = -1
b = 3
n = 5
```

3. Lass GeoGebra die Untersumme und Obersumme berechnen.

```
U = Untersumme(f, a, b, n)
O = Obersumme(f, a, b, n)
```

4. Du kannst die Intervallgrenzen, sowie die Anzahl der Rechtecke mithilfe der Schieberegler verändern.

5. Um eine neue Funktion zu untersuchen, veränderst du einfach die momentane Funktion. Zum Beispiel in $f(x)=sin(x)$.