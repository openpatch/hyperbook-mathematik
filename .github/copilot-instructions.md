---
lang: de
---

Wir verwenden Hyperbook für dieses digitale Arbeitsheft.

Hyperbook ist eine Erweiterung von Markdown, das heißt, dass wir eine erweiterte Markdown-Syntax verwenden.

Wir verwenden sogenannte directives, die durch Doppelpunkte eingeleitet werden. Direktiven sind spezielle Anweisungen, die Hyperbook versteht und interpretiert.

Hier sind einige Beispiele für Direktiven:

Collapsible: Ein- und Ausklappbare Abschnitte

```md
::::collapsible{title="Hallo" id="3249321948"}
 
This is a panel
 
:::collapsible{title="Nested"}
 
This is a stacked collapsible
 
:::
 
This is normal Test in-between.
 
:::collapsible{title="With an Image"}
 
![](/test.jpg)
 
::::
```

Bei Collapsibles achte darauf, dass du eindeutige IDs generierst. Am Besten benutzt du zufällige UUIDs.
