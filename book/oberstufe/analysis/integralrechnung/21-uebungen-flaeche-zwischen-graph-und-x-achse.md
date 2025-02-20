---
name: "✏️ Übungen: Fläche zwischen Graph und x-Achse"
lang: de
index: 21
---

# ✏️ Übungen: Fläche zwischen Graph und x-Achse

## Graphen skizzieren und Flächeninhalt berechnen

Skizziere den Graphen der Funktion $f(x)$ und berechne den Flächeninhalt zwischen dem Graphen und der $x$-Achse im Intervall $[a,b]$.

1. $f(x) = x^2 - 4x + 3$ im Intervall $[0,3]$

:::collapsible{title="Lösung: Nullstellen" id="155043"}

1. Nullstellen bestimmen:

$f(x) = x^2 - 4x + 3 = 0$

$x_1 = 1$

$x_2 = 3$

:::

:::collapsible{title="Lösung: Flächeninhalte der Teilabschnitte" id="155044"}

2. Flächeninhalte der Teilabschnitte berechnen:

$A_1 = \int_0^1 (x^2 - 4x + 3) \, dx$

$A_1 = \left[ \frac{1}{3}x^3 - 2x^2 + 3x \right]_0^1$

$A_1 = \left( \frac{1}{3} - 2 + 3 \right) - 0 = \frac{4}{3}$

$A_2 = \int_1^3 (x^2 - 4x + 3) \, dx$

$A_2 = \left[ \frac{1}{3}x^3 - 2x^2 + 3x \right]_1^3$

$A_2 = \left( \frac{27}{3} - 18 + 9 \right) - \left( \frac{1}{3} - 2 + 3 \right) = -\frac{4}{3}$

:::

:::collapsible{title="Lösung: Flächeninhalte addieren" id="155045"}
3. Flächeninhalte addieren:

$A = A_1 + A_2 = \frac{4}{3} + \frac{4}{3} = \frac{8}{3}$

Der Flächeninhalt beträgt $\frac{8}{3}$.
:::

2. $f(x) = -x^2 + 4x - 3$ im Intervall $[0,3]$

:::collapsible{title="Lösung: Nullstellen" id="155046"}

1. Nullstellen bestimmen:

$f(x) = -x^2 + 4x - 3 = 0$

$x_1 = 1$

$x_2 = 3$

:::

:::collapsible{title="Lösung: Flächeninhalte der Teilabschnitte" id="155047"}

2. Flächeninhalte der Teilabschnitte berechnen:

$A_1 = \int_0^1 (-x^2 + 4x - 3) \, dx$

$A_1 = \left[ -\frac{1}{3}x^3 + 2x^2 - 3x \right]_0^1$

$A_1 = \left( -\frac{1}{3} + 2 - 3 \right) - 0 = -\frac{4}{3}$

$A_2 = \int_1^3 (-x^2 + 4x - 3) \, dx$

$A_2 = \left[ -\frac{1}{3}x^3 + 2x^2 - 3x \right]_1^3$

$A_2 = \left( -\frac{27}{3} + 18 - 9 \right) - \left( -\frac{1}{3} + 2 - 3 \right) = \frac{4}{3}$

:::

:::collapsible{title="Lösung: Flächeninhalte addieren" id="155048"}

3. Flächeninhalte addieren:

$A = A_1 + A_2 = \frac{4}{3} + \frac{4}{3} = -\frac{8}{3}$

Der Flächeninhalt beträgt $\frac{8}{3}$.

:::

3. $f(x) = x^2 - 4x + 3$ im Intervall $[0,2]$

:::collapsible{title="Lösung: Nullstellen" id="155049"}

1. Nullstellen bestimmen:

$f(x) = x^2 - 4x + 3 = 0$

$x_1 = 1$

$x_2 = 3$

:::

:::collapsible{title="Lösung: Flächeninhalte der Teilabschnitte" id="155050"}

2. Flächeninhalte der Teilabschnitte berechnen:

$A_1 = \int_0^1 (x^2 - 4x + 3) \, dx$

$A_1 = \left[ \frac{1}{3}x^3 - 2x^2 + 3x \right]_0^1$

$A_1 = \left( \frac{1}{3} - 2 + 3 \right) - 0 = \frac{4}{3}$

$A_2 = \int_1^2 (x^2 - 4x + 3) \, dx$

$A_2 = \left[ \frac{1}{3}x^3 - 2x^2 + 3x \right]_1^2$

$A_2 = \left( \frac{8}{3} - 8 + 6 \right) - \left( \frac{1}{3} - 2 + 3 \right) = \frac{2}{3}$

:::

:::collapsible{title="Lösung: Flächeninhalte addieren" id="155051"}

3. Flächeninhalte addieren:

$A = A_1 + A_2 = \frac{4}{3} + \frac{2}{3} = \frac{6}{3}$

Der Flächeninhalt beträgt $2$.

:::

## KI-Prompt zum Üben

Du kannst jede :t[Chat-KI]{#chat-ki-lernen} mit dem folgenden Prompt nutzen.

> Du bist mein Mathematiklehrer und sollst mir helfen, die Fläche zwischen dem Graphen einer Funktion und der x-Achse bestimmen zu können. Mir wurde bereits folgende Vorgehensweise erklärt: 1. Nullstellen bestimmen im Intervall, 2. Flächeninhalte der Teilabschnitte berechnen, indem die Integrale im Betrag berechnet werden, 3. Flächeninhalte addieren. Du sollst mir Übungsaufgaben dazu stellen und mich beim Lösen unterstützen. Bitte gib mir nicht direkt die Lösung an, sondern versuche mir den nächsten Schritt zu erklären. Erst, wenn ich wirklich nicht mehr weiterweiß, präsentiere mir die Lösung, aber erkläre mir diese auch. Zum Schluss fragst du mich, ob ich noch weitere Übungsaufgaben möchte. Frage mich nach jeder Aufgabe, wie schwer ich diese fand und höher oder verringere den Schwierigkeitsgrad dementsprechend.
