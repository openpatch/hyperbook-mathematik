---
name: 💡 Die Produktregel
index: 2
lang: de
---

# 💡 Die Produktregel

Wenn wir Wachstumsprozesse modellieren, die nicht unbegrenzt wachsen, sondern welche, die erst wachsen und dann wieder abnehmen oder sich stabilisieren, können wir Funktionen der folgenden Form nutzen:

$$

f(x) = a x \cdot e^{b \cdot x}

$$

Wenn wir nun zum Beispiel nach dem Hochpunkt dieser Funktion suchen wollen, benötigen wir die erste Ableitung.

Für diese Funktionstypen verwenden wir die Produktregel der Differentiation, da es sich um das Produkt zweier Funktionen handelt: $a x$ und $e^{b \cdot x}$.

Die Produktregel funktioniert so:

Wir betrachten die beiden Funktionen $u(x) = a x$ und $v(x) = e^{b \cdot x}$.

Von diesen Funktionen berechnen wir die Ableitungen:

$$

u'(x) = a
v'(x) = b e^{b \cdot x}

$$

Nun können wir die Produktregel anwenden und die Ableitung der Funktion $f(x)$ berechnen:

$$

\begin{align*}
f'(x) &= u'(x) v(x) + u(x) v'(x)\\
&= a e^{b \cdot x} + a x b e^{b \cdot x}\\
&= a e^{b \cdot x} (1 + b x)
\end{align*}

$$

## Produktregel allgemein

Die Produktregel ist eine allgemeine Regel zur Ableitung von Produkten zweier Funktionen. Sie lautet:

$$ 

\begin{align*}
f(x) &= u(x) \cdot v(x) \\
f'(x) &= u'(x) v(x) + u(x) v'(x)
\end{align*}

$$

## Ableitung von Polynomen

Auch Polynome können mit der Produkregel abgeleitet werden.

Nehmen wir zum Beispiel $f(x)=x^2$. Diese Funktion können wir als Produkt schreiben: $f(x) = x \cdot x$.

Jetzt wenden wir die Produktregel an:

$$

u(x) = x, \quad v(x) = x \\

u'(x) = 1, \quad v'(x) = 1 \\

\begin{align*}
f'(x) &= u'(x) v(x) + u(x) v'(x)\\
&= 1 \cdot x + x \cdot 1\\
&= 2 x
\end{align*}

$$

Mit unserem bisherigen Vorgehen hätten wir die Ableitung von $f(x) = x^2$ auch direkt berechnen können, indem wir die Potenzregel angewendet hätten. Diese lautet:

$$

f'(x) = 2 \cdot x^{2-1} = 2 x

$$

Die Produktregel ist jedoch nützlich, wenn wir Funktionen haben, die nicht so einfach zu differenzieren sind, wie zum Beispiel $f(x) = x^2 \cdot e^{x}$.
