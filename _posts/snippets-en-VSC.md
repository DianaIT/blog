---
id: 3
title: "📝 Custom snippets en VSC"
author: "DianaIT"
date: "5/08/20"
updateAt: ""
tag: "front"
---

Vamos a ver como podemos crear un snippet personalizado en **Visual Studio Code** _( plantillas de código )_ que nos ayude a tener en pocos segundos estructuras complejas de código.

En el **marketplace** podeis encontrar multitud de plugins con snippets para un montón de lenguajes. Pero aquí nos vamos a centrar en crear nuestro propio snippet. Personalización al poder 💪

#### ⭐️ Empezamos

Lo primero para crear nuestro snipper personalizado en **VSC** será acceder a la sección de **File>Preferences>User Snippet**.

Tendremos que elegir el legunaje para que queramos que se aplique el snippet. En este caso vamos ha elegir **Javascript**, ya que lo que queremos es crear un snippet para crear una page inicial en un proyecto con next.js. _Como la de este blog, por ejemplo_

Una vez elegido el lenguaje nos abrirá un documento, en este caso, _javascript.json_ dónde podemos ver un comentario con una pequeña plantilla para crear nuestro primer snippet.
Estos archivos de snippets se guardan en:

```javascript
🏠 Windows: %APPDATA%\Code\User\snippets
🍎 Mac: $HOME/Library/Application Support/Code/User/snippets
🐦 Linux:  $HOME/.config/Code/User/snippets
```

#### 🍆 Estructura

```javascript
{
  // Nombre
  "Page next": {
    // Abrebiatura para "llamar" al snippet
    "prefix": "page",
    "body": [
      "export default function $1({$2}){"
        "return"
          "(<>$3</>)"
      "}"
    ],
    // Opcional
    "description": "A new Peage en Next.js"
  }
}
```

##### 💰 ¿Qué son esos dólares, my friend?

Lo mejor que tienen los snippets a parte del tiempo que ganamos al no tener que teclear tanto, es que podemos poner una serie de _índices_ para que el cursor se mueva por ellos.

Le estamos creando una ruta al cursor, y mediante la tecla tab podemos ir de uno a otro con el teclado, rellenado los campos que necesitemos sin necesidad de tocar el ratón.

Puedes poner tantos como quieras y en el orden que más te guste.

Este ejemplo es muy sencillo, por lo que instalando cualquier plugin para React lo tendriamos ya incluido, junto con muchos otros.
Pero a poco que empecemos a realizar proyectos veremos que repetimos muchas estructuras, y poder tenerlas a nuestra manera nos ahorrara mucho tiempo y trabajo.

Así que ya solo faltaría irnos a nuestro documento escribir el **prefix** y pulsar tabulador y ✨MAGIC! Ya tenemos nuestro código.

⚠️ **IMPORTANTE** Hay que tener activada la opción de aceptar sugerencias en _settings.json_.

```javascript
  "editor.quickSuggestions": true
```

Podeis acceder a este archivo desde **Paleta de comandos > Configure language specifics settings...** Aunque aquí teneis la ruta, por si quereis acceder por aquí.

```javascript
🏠 Windows: %APPDATA%\Code\Use
🍎 Mac: $HOME/Library/Application Support/Code/User
🐦 Linux: $HOME/.config/Code/User
```

#### 🍄 ¿Algo más eleborado?

[Aquí](/posts/Snippets-en-VSC-Parte-II) podeis ver el snippet en markdown que utilizo para el post que estás leyendo ahora mismo.

📚 **sources:**

- [Defined Snippets in vscode-docs](https://vscode-docs.readthedocs.io/en/stable/customization/userdefinedsnippets/)
- [Activate quickSuggestions](https://github.com/Microsoft/vscode/issues/26108)
