---
name: Pinball 3D a
hide: true
lang: de
---

# Pinball 3D: Tischebene

Für das Spiel Pinball 3D soll die Tischebene modelliert werden. Der Tisch hat die Eckpunkte $A(0|0|0)$, $B(0|56|0)$, $C(80|56|10)$ und $D(80|0|10)$. 

- Gib eine [Parameterform der Ebene](/oberstufe/analytische-geometrie/parameterform-von-ebenen/formel) an. 
- Zeige rechnerisch, dass der vierte Punkt in der Ebene liegt.

::::tabs{id="079755"}

:::tab{title="2D Visualisierung" id="344998"}

![](/assets/oberstufe/analytische-geometrie/parameterform-von-ebenen/pinball3d-tischebene.png)

:::

:::tab{title="3D Visualisierung" id="617342"}

::embed{src="https://www.geogebra.org/calculator/xzbce9ag?embed" height=600}

:::

::::


:::collapsible{title="Lösung: Parameterform" id="410366"}

Je nachdem welche Punkte du zum Aufstellen der Ebene benutzt hast, sind verschiedene Parameterformen richtig. Hier sind ein paar Lösungen aufgelistet:

$\vec{OA}$ Stützvektor; $\vec{AB}$ und $\vec{AD}$ Spannvektoren:

$$

E_{Tisch}: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}0\\56\\0\end{pmatrix} + s \cdot \begin{pmatrix}80\\0\\10\end{pmatrix}, \ r,s \in \mathbb{R}

$$


$\vec{OA}$ Stützvektor; $\vec{AB}$ und $\vec{AC}$ Spannvektoren:

$$

E_{Tisch}: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}0\\56\\0\end{pmatrix} + s \cdot \begin{pmatrix}80\\56\\10\end{pmatrix}, \ r,s \in \mathbb{R}

$$

$\vec{OB}$ Stützvektor; $\vec{BA}$ und $\vec{BC}$ Spannvektoren:

$$

E_{Tisch}: \vec{x} = \begin{pmatrix}0\\56\\0\end{pmatrix} + r \cdot \begin{pmatrix}0\\-56\\0\end{pmatrix} + s \cdot \begin{pmatrix}80\\0\\10\end{pmatrix}, \ r,s \in \mathbb{R}

$$

:::

:::collapsible{title="Lösung: Punkt in der Ebene" id="846727"}

Wir überprüfen, ob $D(80|0|10)$ in der Ebene $E_{Tisch}$ liegt.

$$

\begin{pmatrix}80\\0\\10\end{pmatrix} = \begin{pmatrix}0\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}0\\56\\0\end{pmatrix} + s \cdot \begin{pmatrix}80\\56\\10\end{pmatrix}, \ r,s \in \mathbb{R}

$$

Für $r=-1$ und $s=1$ ist die Gleichung erfüllt. Somit liegt der Punkt D in der Ebene.

:::