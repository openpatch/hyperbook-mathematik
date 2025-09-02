---
name: Pinball 3D b
hide: true
lang: de
---

# Pinball 3D: Soundcheck

Wenn die Kugel eine der beiden Soundebenen berührt, dann soll ein Sound abgespielt werden. Die Soundebenen sind wie folgt definiert.

$$

E_{Sound-Links}: \vec{x} = \begin{pmatrix}-5,12\\28\\-0,64\end{pmatrix} + r \cdot \begin{pmatrix}17,86\\22,4\\2,23\end{pmatrix} + s \cdot \begin{pmatrix}18,86\\22,4\\-5,77\end{pmatrix}, \ r, s \in \mathbb{R}

$$

$$

E_{Sound-Rechts}: \vec{x} = \begin{pmatrix}-5,12\\28\\-0,64\end{pmatrix} + r \cdot \begin{pmatrix}17,86\\-22,4\\2,23\end{pmatrix} + s \cdot \begin{pmatrix}18,86\\-22,4\\-5,77\end{pmatrix}, \ r, s \in \mathbb{R}

$$

- Überprüfe rechnerisch, ob für die Kugelposition $K=(2,224|19,04|-1,348)$ ein Sound abgespielt werden muss.

::::tabs{id="884989"}

:::tab{title="2D Visualisierung" id="894404"}

![](/assets/oberstufe/analytische-geometrie/parameterform-von-ebenen/pinball3d-sound.png)

:::

:::tab{title="3D Visualisierung" id="894405"}

::embed{src="https://www.geogebra.org/calculator/gcqgud2s?embed" height="600px"}

:::

::::


:::collapsible{title="Tipp" id="689121"}

Wie haben wir überprüft, ob ein Punkt auf einer Geraden liegt? Kannst du das Verfahren übertragen?

:::

:::collapsible{title="Lösung" id="146267"}

Die Kugel berührt die rechte Soundebene für $r=0,2$ und $s=0,2$.

:::
