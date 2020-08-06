---
id: 6
title: "📝 Custom snippets en VSC (II)"
author: "DianaIT"
date: "06/08/20"
updateAt: ""
tag: "front"
---

Ya hemos visto la forma básica de crear un snippet, ahora vamos a ir un paso más alla.

### 💲 Variables

Gracias a las variables que tenemos por defecto podemos desde poner la fecha actual hasta el nombre del archivo, su extensión, el directorio en el que estamos trabajando...
Y lo mejor es que las podemos modificiar con expresiones regulares. Aquí podeis ver la [Lista de variables](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variables).

```javascript
title: ${TM_FILENAME_BASE/[\\-]/ /g};
// title: Snippets en VSC Parte II
```

Esto coge el título del archivo que se está modificando sin la extensión cambiando los "-" por espacios en blanco. De esta manera solo tengo que llamar al archivo con el título que quiero para el artículo y listo ¿Cómodo, no?
Aquí teneis otros ejemplos de la [documentación](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_transform-examples) de **VSC**

Lo mismo podemos hacer con la fecha

```javascript
date: $CURRENT_DATE / $CURRENT_MONTH / $CURRENT_YEAR_SHORT;
// date: 06/08/20
```

### 🍊 Scope

Los snippets están restringuidos por defecto a un lenguaje en concreto, ya vimos que modificando el archivo **javascript.json** sólo se aplicará cuando la exptensión del archivo sea la correspondiente. Pero también se pueden hacer archivos globales para poder usar nuestros snippets en cualquier tipo deextensión.

Si queremos un archivo global de snippets tenemos que ponerle el sufijo **.code-snippets**.
Podemos añadir una nueva propiedad **scope** dónde poner los lenguajes para los que está activo el snippet. Si no ponemos nada estará habilitado para todo tipo de extensiones.

```javascript
// snippets.code-snippets
{
  "Page next": { // Nombre
    "prefix": "page", // Abrebiatura para "llamar" al snippet
    "scope": "javascript,typescript", // Opcional [default: all]
    "body": [
      "export default function $1({$2}){"
        "return"
          "(<>$3</>)"
      "}"
    ],
    "description": "A new Peage en Next.js" // Opcional
  }
}
```

### 🍟 Otras cositas interesantes

- Podemos ponerle una serie de valores por defecto a una parte del codigo

  ```javascript
  tag: ${1|'front','series'|}
  ```

de esta manera al llegar a esa sección nos aparecerá un desplegable para que eligamos una de las opciones disponibles. ¡Queda muy chulo, la verdad! 👌

- Podemos también poner un único valor por defecto .Y sólo con escribir cuando lleguemos se cambiará.

```javascript
author: '${0:DianaIT}',
```

- Si ponemos dos veces el mismo ínidice, se cambiarán a la vez una vez modifiquemos el primero.

```javascript

    "title:  `${1|📝, 📺|} ${TM_FILENAME_BASE/[\\-]/ /g}`",
    "tag: $1",
```

Así quedaría el snippet que uso para los posts

````javascript
{
  "post template": {
    "prefix": "post",
	"body": [
		"---",
    "title:  `${1|📝, 📺|} ${TM_FILENAME_BASE/[\\-]/ /g}`",
    "tag: ${1|'front','series'|}",
		"author: '${0:DianaIT}'",
		"date: '$CURRENT_DATE/$CURRENT_MONTH/$CURRENT_YEAR_SHORT'",
    "updateAt: ''"

		"---",
		"### ❓ ¿Qué es?",
		"### 👌 ¿Qué tiene de bueno?",
		"### ✅ Requisitos",
		"### 💻 Comandos",
		"```bash",
		"npm run dev",
		"```",
		"### 🍆 Estructura",
		"📚 _sources:_",
		"- []()",
		"- []()",
		"- []()",
	],
    "description": "template for a new post in DianaIT's blog"
  }
}
````

Y ya sólo quedaría ponerse a escribir.

📚 _sources:_

- [Visual Studio Code Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)
- [Variable references](https://code.visualstudio.com/docs/editor/variables-reference)
