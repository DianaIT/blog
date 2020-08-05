---
id: 3
title: " 📝 CSS Modules"
author: "DianaIT"
date: "28/07/20"
updateAt: ""
tag: "front"
---

## ¿Qué es?

> _"A CSS Module is a CSS file in which all class names and animation names are scoped locally by default"_

Ficheros CSS donde sus clases son de ámbito local por defecto.

## ¿Qué significa esto?

No se trata de una especeficacion oficial, es más bien un proceso que se realiza en el paso de build. Css modules cambia el nombre de las clases, añandiendole numéritos y demás para hacerlas únicas únicas. Y así evitar cualquier conflicto que pudiera surgir entre clases con el mismo nombre o selectores similares.

## ¿Para que sirve?

Para evitar sobrescritura de clases y conflictos de estilos.

Sin CSS Modules cada documento .css tiene un ámbito global, si repetimos una clase en 2 archivos diferentes, 2 clases o 2 elementos html, y tenemos importados los dos archivos no tenemos ningún control sobre los estilos que estamos aplicando a nuestra aplicación.

Bueno, para ser exactos, reamente si lo tenemos, ya que por algo esta lo de **\*Cascading** style sheets.\*

El último archivo importando será el ganador, siempre y cuando el selector sea más especifico, pero seamos honestos, hacer esto está regular\*.

\*MAL

## ¿Qué necesito?

[Webpack](https://www.notion.so/Webpack-83a1006211c34612bbedddbf5cbfbaa0) Próximamente

## ¿Cómo funciona?

Crea una clase globalmente única compuesta por el nombre del archivo css, el nombre de la clase y un identificador único. Sería algo así.

**When importing the CSS Module from a JS Module, it exports an object with all mappings from local names to global names.**

```css
/* styles.css */

.foo {
  color: red;
}
```

```jsx
import styles from "./styles.css"; // CSS MODULES
import "./main.css"; // IMPORTACIÓN NORMAL DE CSS
<h1 class={sytles.foo}> CSS </h1>;
```

```html
<!-- EL NAVEGADOR VERÍA ALGO ASÍ
class = "ARCHIVO_CLASE_ID_UNICO" -->
<h1 class="styles_foo_4xfe1">CSS</h1>
```

## A tener en cuanta

**This is recommended because the common alternative, kebab-casing may cause unexpected behavior when trying to access style.class-name as a dot notation. You can still work around kebab-case with bracket notation (eg. style['class-name']) but style.className is cleaner.**

CSS Modules are turned on for files ending with the .module.css extension.

It's possible to compose selectors.

Composing from other files

Composing from global class names

## Resumiendo...

> Whenever I start a new component, I know that there are no global styles that will interfere with my work.

[**@ahfarmer**](https://twitter.com/ahfarmer)

CSS Modules coge nuestras clases y las hace únicas. Esto nos permite repetir nombres de clases sin miedo a que se produzcan resultados no deseados en el layout de nuestra aplicación.

## Bibliografía

- [css-modules/css-modules](https://github.com/css-modules/css-modules)

- [What are CSS Modules? A visual introduction](http://javascriptstuff.com/what-are-css-modules/)

- [Create React App · Set up a modern web app by running one command.](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)

- [What are CSS Modules and why do we need them? | CSS-Tricks](https://css-tricks.com/css-modules-part-1-need/)

Disclaimer:

Tú que vas a ver que hay alguna cosa que no está bien explicadao, muy probablemente, y quieres hacermelo saber de manera educada, este no es tu disclaimer.

No soy ninguna experta en este tema. He escrito esto para aprender CSS Modules, no deja de ser una introducción, puede que esté equivocada en cosas, en algunas o en ninguna, fíjate. Sólo he intentado explicarlo a mi manera, y si le ayuda a alguién por el camino mejor que mejor.

                                                    ⌨ con ❤ por Diana
