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

## Web Components

Web Components sind wiederverwendbare UI-Elemente, die in Hyperbook verwendet werden können.

Web Components werden in /public/wc abgelegt und können in Hyperbook-Dokumenten eingebunden werden.

Dazu muss im Frontmatter das Script des Web Components eingebunden werden:

```md
---
name: Meine Seite
scripts:
  - /wc/mein-web-component.js
---
```

Verwende diese Farben:

```css
--color-brand: "#007864";
--color-brand-text: "white";
--color-background: white;
--color-text: black;
--color-text-deactivated: #242428;
--color-nav: #f5f5f5;
--color-nav-border: #3c3c3c;
--color-author-background: #d6d6d6;
--color-author-color: #3c3c3c;
--color-spacer: #a4a4a4;
```

Du kannst auch Abstufungen der Farben verwenden, diese müssen aber berechnet werden.

Die Web Components sollen auch mit Touch-Geräten gut bedienbar sein.

Verwende keine eigenen Schriftarten, sondern die Systemschriftarten.

Benutze immer Deutsch als Spracheinstellung.

Die Web Component soll in /book/wc.md dokumentiert werden.