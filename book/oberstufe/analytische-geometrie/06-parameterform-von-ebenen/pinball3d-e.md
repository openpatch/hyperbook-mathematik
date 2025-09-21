---
name: Pinball 3D e
hide: true
lang: de
---

# Pinball 3D: Kollisionserkennung

Im Moment ist die Tischebene sehr allgemein definiert. Zur Kollisionserkennung muss diese jedoch auf die Tischkanten eingeschränkt werden.

- Untersuche, inwiefern die Definition der Tischebene angepasst werden kann, sodass nur Punkte erlaubt sind, die innerhalb der Tischkanten (die Hindernisse können ignoriert werden) liegen.

$$

E_{Tisch}: \vec{x} = \begin{pmatrix}0\\0\\0\end{pmatrix} + r \cdot \begin{pmatrix}0\\56\\0\end{pmatrix} + s \cdot \begin{pmatrix}80\\0\\10\end{pmatrix}, \ r,s \in \mathbb{R}

$$

- Untersuche, inwiefern die Wahl der Richtungsvektoren einen Einfluss auf die Anpassung der Definition hat.

::::tabs{id="753586"}

:::tab{title="2D Visualisierung" id="043465"}

![](/assets/oberstufe/analytische-geometrie/parameterform-von-ebenen/pinball3d-beschränkt.png)

:::

:::tab{title="3D Visualisierung" id="957605"}

::embed{src="https://www.geogebra.org/calculator/zza6cmcm?embed" height="600px"}

:::

::::
