---
name: Stammfunktionen händisch bestimmen
index: 14
lang: de
---

# Stammfunktionen händisch bestimmen

Das Integrieren ist die Umkehroperation zum Differenzieren:
man sucht eine Stammfunktion $F(x) = \int{f(x)}$, deren Ableitung $F'(x) = f(x)$ ist.

## Polynomialfunktionen

Sehr häufig wirst du das unbestimmte Integral von Polynomfunktion brauchen: 

$$$

\int{x^n} \, dx = \frac{x^{n+1}}{n+1} + c

$$$

### Übung 1

Bestimmte die Stammfunktionen in deinem Heft. Mache jeweils die Probe $F'(x) = f(x)$:

- $f(x) = x^2$
- $f(x) = x^4$

## Integrationsregeln

Hier findest du zwei Integrationsregeln, die du bei der Berechnung von Stammfunktionen oft brauchen kannst.

### Integral eines Vielfachen

$$$

\int{a \cdot f(x)} \, dx = a \cdot \int{f(x)} \, dx

$$$

Beispiel:

$$$

\int{3x^2} \, dx = 3 \cdot \int{x^2} \, dx = 3 \cdot \frac{x^3}{3} + c = x^3 + c

$$$

### Integral einer Summe

$$$

\int{(f(x) + g(x))} \, dx = \int{f(x)} \, dx + \int{g(x)} \, dx

$$$

Beispiel:

$$$

\int{(x^2 + 2x)} \, dx = \int{x^2} \, dx + \int{2x} \, dx = \frac{x^3}{3} + x^2 + c

$$$

### Übung 2

Bestimme eine Stammfunktion in deinem Heft. Mache jeweils die Probe $F'(x) = f(x)$:

- $f(x) = 3x^2$
- $f(x) = x^2 + 2x$