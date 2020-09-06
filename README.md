## INDEX.JS

1. yarn add redux react-redux redux-thunk
2. config index.js
3. wrap the app inside the react-redux provider
```javascript
	<Provider store={store}>
    <App />
	</Provider>
```
4. We import createStore from redux and create the store function
5. STORE receives a function reducer
6. we have to tell the store to use the MIDDELWARE
7. We import applyMiddleware fom redux
```javascript
import { createStore, applyMiddleware } from 'redux'
```
**Note: applyMiddleWare it is a function that cans recive all of  the moddlewares tha we want**
8. we import thunk from redux-thunk
```javascript
import thunk from 'redux-thunk'
```
9. To tell REDUX that it has to use THUNK as MIDDLELWARE we go to createStore and as the second parameter inside applyMiddelware(thunk) we send the MIDDELWARES
```javascript
const store = createStore(reducer, applyMiddleware(thunk))
```

## APP.JS

1. We connect REDUX
2. Import connect from react-redux
3. Curring the connect function export default connect()(App)
```javascript
import { connect } from 'react-redux'
export default connect(mapStateToProps, mapDispatchToProps)(App) // curring
```
5. We define const mapStateToProps
```javascript
const mapStateToProps = state => state
```
6. We define const mapDispatchToProps it will return us an object
7. We will say that we go to DISPATCH a thunk 

```javascript
const mapDispatchToProps = dispatch => ({
	myThunk: payload => dispatch(myThunk(payload)),
})
```
8. We import create myThunk and we import it
```javascript
import myThunk from './thunk'
```

## THUNK.JS

1. we export a default a function CURRYING that recives as a first parameter a payload and when is is call for second time recives dispatch and getState
```javascript
export default payload => 
	(dispatch, getState) => {
		console.log(payload)
}
```
**Note: we can check the complete status of the application with getState() and dispatch() it will allow to dispatch more actions**

## APP.JS

9. We will set the constructor of app.js that recives props as argument
```javascript
	constructor(props)
		super(props)
```
10. We will DESCTRUCTURYING myThunk within the constructor
```javascript
	constructor(props) {
		super(props)
		const { myThunk } = this.props
		myThunk('lala')
	}
```

## INDEX.JS

10. We will set the constructor of app.js that recives props as argument
```javascript
export default payload => 
	(dispatch, getState) => {
		// console.log(payload)
		const state = getState()
		console.log(state)
}
```

## INDEX.JS


# Rumbo Digital | Terpel

## Contenido

- [Instalación](#instalacion-del-proyecto)
- [Estructura](#estructura-del-proyecto )
- [Versionamiento](#versionamiento-del-proyecto)
- [Iconos](#iconos)
- [Buenas prácticas](#buenas-prácticas)
  - [HTML](#html)
  - [CSS](#css)
  - [SASS (SCSS)](#sass)
  - [JavaScript](#javascript)
- [Soporte exploradores](#soporte-navegadores)
- [Vue.js](#vue)
- [Recursos](#recursos)

___
## Instalación del proyecto

Para descargar, instalar y correr el proyecto en un ambiente local **se requiere tener instalado git y Node.js**

- La instalación y configuración de git se encuentra [acá](https://git-scm.com/book/es/v1/Empezando)
- La instalación de Node.js se encuentra [acá](https://nodejs.org/es/)

Después de tener instalados y configurados git y Node.js procedemos a la descarga del repositorio:

```bash
# clonar repositorio
git clone [url]
```

Una vez descargado el repositorio, nos ubicamos en la carpeta *root* del proyecto procedemos a la instalación:

```bash
# cambiar de directorio
cd [project/folder]

# instalar proyecto y dependencias (node_modules)
npm install

# correr proyecto en localhost:8080
npm start
```

Para generar una versión para subir a producción:

```bash
# generar build para producción
npm run build
```

```bash
# generar build para producción e inicializar un reporte de lo archivos compilados en el puerto :8888
npm run build --report
```

```bash
# generar documentación local en desarrollo :8080
vuepress dev
```

```bash
# generar documentación para distribución :8080
vuepress build
```
___
### Estructura del proyecto

```bash
├── build/
├── config/
├── dist/
├── node_modules/
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   ├── images/
│   │   └── media/
│   ├── components/
│   ├── helpers/
│   ├── pages/
│   ├── plugins/
│   ├── polyfills/
│   ├── router/
│   ├── sass/
│   ├── App.vue
│   ├── main.js
│   └── store.js
├── static/
│   ├── css/
│   ├── fonts/
│   └── images/
├── .babelrc
├── .gitignore
├── index.html
├── package.json
└── README.md
```

**build/** - Carpeta del build, configuración para el despliegue

**config/** - Carpeta de configuración, variables de entorno para los ambientes

**dist/** - Esta carpeta se crea al generar el build, NO se versiona

**node_modules/** - Librerías npm, NO se versiona

**src/** - *Core* del proyecto, en esta carpeta se encuentran componentes, estilos, imágenes, etc

**src/assets/** - Archivos adicionales, imágenes, fonts, media...

**src/components/** - Componentes UI/funcionales como inputs, pickers, botones, etc.

**src/pages/** - Componentes UI con url propia, por ejemplo */reportes*

**src/router/** - Gestion de rutas del proyecto

**src/sass/** - Carpeta donde se guardan los archivos de estilos globales del proyecto

**src/App.vue** - Archivo contenedor de la aplicación

**src/main.js** - Archivo .js con la configuración para inicialización del la aplicación, desde este archivo se configura el comportamiento de los ambientes, se insertan los endpoints según el ambiente, se insertan insertan al objeto .vue funcionalidades que se reutilizan: plugins, filters, methods, etc...

**src/store.js** - Estados globales de la aplicación

**static/** - Esta carpeta se copia sin cambios a la carpeta de distribución.

**index.html** - Es la plantilla base que va a leer nuestro servidor, este archivo se carga antes de que el main.js y bundle.js.

**package.json** - Es el manifiesto de nuestro proyecto, se encarga de manejar la publicación y de administrar las dependencias del proyecto.

___
## Versionamiento del proyecto

El proyecto utiliza la herramienta para el control de versiones [GitLab](https://about.gitlab.com/). Para acceder, clonar y versionar el proyecto se requiere tener credenciales de desarrollador.

> Las credenciales las configura el usuario con rol de **MASTER**

### Herramientas

Para el versionamiento podemos utilizar un cliente git GUI:

- [GitHub Desktop](https://desktop.github.com/)
- [GitKraken](https://www.gitkraken.com/)
- [SmartGit](https://www.syntevo.com/smartgit/)
- [SourceTree](https://www.sourcetreeapp.com/)

O bien mediante comandos en la terminal/consola, a continuación listamos los comandos mas usados o podemos ver la documentación completa [aquí](https://git-scm.com/book/es/v1/)

```bash
# Descargar version de repositorio remoto
git pull origin "nombre de la rama con ruta si la tiene"

# Crear una rama
git checkout -b "feature/nombre de la rama"

# Listar archivos modificados/agregados
git status

# Agregar archivos para commit
git add .

# Agregar un archivo específico para commit
git add [nombre/ruta del archivo]

# Crear commint
git commit -m "mensaje del commit"

# Listar commit
git log

# Subir cambios en la rama
git push

# Subir cambios al repositorio
git push origin "nombre de la rama con ruta si la tiene"

# Cambiar de rama o de commit
git checkout "nombre de la rama o id del commit"
git checkout "develop"
git checkout "nombre de la rama con ruta"
git checkout "release/nombre de la rama"

# Actualizar cambios del repositorio remoto
git fetch

# Crear etiqueta
git tag -a [nombre de la etiqueta] # este nombre es el mismo de la rama RELEASE
```
Al crear una etiqueta en la consola se deplegara un editor donde ponemos el listado de las ramas a desplegar o una descripción de la etiqueta, entramos al editor con la tecla INS, salimos con el comando ESC `:wq`

### Ramas

``` bash
├── master # rama raíz
└── develop # rama de desarrollo, QA
    ├── feature # rama donde se desarrollan las historias
    └── release # rama de alistamiento para producción
```

**master** - Es la rama raíz del proyecto donde se encuentran las versiones estables de los pasos a productivo. A esta carpeta solo se le hace `merge` cuando hay una versión estable ya probada en producción. solo se debe hacer `merge` desde la rama de `release/...` donde se realizo el alistamiento.

**develop** - Es la rama de desarrollo donde se encuentra la versión que se está probando actualmente en el ambiente de QA. En esta rama **NO SE DEBE DESARROLLAR** directamente, se debe hacer el `pull` o `merge` desde la rama `feature/[nombre]` donde se desarrollo la funcionalidad.

**feature** - En esta ruta se deben crear las ramas donde se están desarrollando las historias. Una vez terminado el desarrollo se debe hacer `merge` con la rama `develop` para desplegar al ambiente de QA, en la rama creada se debe realizar los ajustes hasta que este aprobada por parte de CALIDAD y PO.

**release** - En esta ruta se deben crear las ramas donde se hace el alistamiento para producción con esta estructura: v0.0.0 donde el primer 0 es la fase actual, el segundo 0 es el sprint y el tercer 0 es el versión del ***release***. En esta rama se deja la versión lista con las historias para pasar a productivo y se realizan los ajustes de ser necesario, una vez en pre o producción si hay ajustes o cambios se crea una nueva rama con la la nueva versión.

___
## Iconos

> Los iconos se tienen que entregar por parte de UX en formato .svg optimizados para poder adicionarlos al set de iconos del portal.

Una vez tenemos el icono lo nombramos de acuerdo al contexto donde lo vamos a utilizar en ingles:



```bash

frequentquestions.svg

```

Si el icono no tiere relleno lo nombramos con -stroke antes del .svg

```bash

frequentquestions-stroke.svg

```

> Los iconos en .svg no se versionan y no deben añadirse al proyecto

Para añadir el icono al set debemos usar el  `selection.json` y lo cargaremos desde la aplicación web [icomoon](https://icomoon.io/app/#/select) seleccionamos la opción New Empty Set y arrastramos el `selection.json` para cargar nuestro set de iconos actualizado.

```bash

├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │  ├── selection.json

```

La aplicación nos va a preguntar si queremos cargar la configuración de nuestro `selection.json`

> Your icon selection was loaded.
Would you like to load all the settings stored in your selection file?

Una vez podamos ver cargado nuestro `set de iconos` arrastramos el nuevo icono. Lo vamos a ver cargado con nuestro `set de iconos` actual pero con fondo gris. Vamos a hacer click en el nuevo icono para añadirlo a nuestro `set de iconos` y damos click en `Generate font`

Podremos previsualizar nuestro `set de iconos` antes de generarlo, una vez todo este en orden hacemos click en `download` para descargar nuestro set.

La aplicación va a descargar los archivos que vamos a reemplazar en nuestro proyecto .

> También se va a descargar una `demo` donde podremos previsualizar el icono, su nombre y el codígo del content 

Los archivos a reemplazar son: 

```bash

├── fonts/
│   │   ├── iconmoon.eot
│   │   ├── iconmoon.svg
│   │   ├── iconmoon.ttf
│   │   ├── iconmoon.woff
│   ├── selection.json
```
Reemplazamos los arhcivos en nuestro proyecto: 

```bash

├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   │  ├── iconmoon.eot
│   │   │  ├── iconmoon.svg
│   │   │  ├── iconmoon.ttf
│   │   │  ├── iconmoon.woff
│   │   │  ├── selection.json

```

Copiamos la nueva clase de nuestro icono en el `style.css` que descargamos:

```bash
│   ├── style.css
```

```css
/* Copiamos la clase de style.css */
.icon-frequentquestions-stroke:before {
  content: "\e944";
}
```

Por último pegamos la clase en el archivo `rumboiconsset.scss` que descargamos:

```bash

├── src/
│   ├── sass/
│   │   ├── rumboiconsset.scss

```

```css
/* Pegamos la clase rumboiconsset.scss`*/
.icon-frequentquestions-stroke:before {
  content: "\e944";
}
```

> La clase debe quedar en la primara posición para encontrarla con facilidad

Ya podemos usar el nuevo icono desde cualquier parte del proyecto con la nueva  clase `icon-frequentquestions-stroke`

```html
<!-- Todas las clases van con "icon-" al inicio -->
<span class="icon-frequentquestions-stroke"></span>
```

___
## Buenas prácticas

En esta sección se define el formato y guía de estilo a seguir para HTML, CSS y JavaScript, apuntando a la creación de un codigo colaborativo, mantenible y de fácil soporte.

### General

#### Nombres de archivos

A excepción de los archivos **.vue** cuyo nombre lleva mayúsculas para separar palabras. (pe. `NombreDeComponente.vue`), los nombres de archivos deben estar en minúsculas. En caso de necesitar separar palabras se puede usar `-` o `_` (pe. `nombre-de-estilos.css`, `nombre_de_funcion.js`). **NO** utilizar tildes o caracteres especiales en los nombres de los archivos.

#### Protocolo

De ser posible siempre usar HTTPS para llamar imágenes, contenido multimedia, hojas de estilo, scripts, a menos que no estén disponibles mediante HTTPS.

```html
<!-- No recomendado -->
<img src="//path-to-image.jpg" >
<img src="http://path-to-image.jpg" >

<!-- Recomendado -->
<img src="https://path-to-image.jpg" >
```

#### Indentación

La indentación debe ser de 2 espacios. No mezclar tabs y espacios al indentar.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
```
```css
.azul {
  color: blue;
}
```

#### Capitalización

Usar sólo minúsculas. El código debe estar en minúsculas, esto aplica para elementos HTML, attributos, valores, selectores CSS, propiedades y valores, a excepción de *strings*.

```html
<!-- No recomendado -->
<A HREF="/">Inicio</A>

<!-- Recomendado -->
<img src="google.png" alt="Google">
```
```css
/* No recomendado */
color: #E5E5E5;

/* Recomendado */
color: #e5e5e5;
```

#### Codificación

Usar UTF-8. Asegurarse de que el editor usa la codificación UTF-8.\
Especificar la codificación en el HTML mediante `<meta charset="utf-8">`. No es necesario especificar en el CSS.

#### Comentarios

Explicar el codigo cuándo se necesite, donde sea posible. Usar comentarios para explicar el código.

### HTML

#### Semántica

Usar el HTML de acuerdo a su propósito. Usar los elementos para lo que fueron creados, por ejemplo usar `h1` para el título principal, `p` para párrafos, `a` para anclas o enlaces, etc. Esto es importante por accesibilidad, reutilización y eficiencia del código.

```html
<!--No recomendado -->
<div onclick="goToRecommendations();">Recomendaciones</div>

<!-- Recomendado -->
<a href="recommendations/">Recomendaciones</a>
```

#### Formato

Usar una nueva línea para cada elemento de bloque, lista o tabla, e indentar cada elemento hijo.

```html
<!-- Ejemplos -->
<blockquote>
  <p><em>Hola</em> mundo!</p>
</blockquote>

<ul>
  <li>Moe</li>
  <li>Larry</li>
  <li>Curly</li>
</ul>

<table>
  <thead>
    <tr>
      <th>Debito</th>
      <th>Crédito</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>$ 5.00</td>
      <td>$ 4.50</td>
    </tr>
  </tbody>
</table>

<!-- No recomendado -->
<div><p>Lorem ipsum</p></div>
```
#### Uso de comillas

Usar doble comilla ("") en los valores de atributos

```html
<!-- No recomendado -->
<a class='button button-secondary'>Entrar</a>

<!-- Recomendado -->
<a class="button button-secondary">Entrar</a>
```

#### Imágenes

Agregar siempre el atributo `alt` en las imágenes. Es importante en caso de que la imagen no se pueda mostrar por alguna razón.

```html
<img src="html5.gif" alt="HTML5">
```

#### Atributos data-*

Es común usar atributos `data-*` como *JavaScript Hooks*, pero es una mala práctica, ya que su función es la de almacenar datos, no la de asociar estilos y/o funcionalidades. Podemos ver ejemplos de uso [acá](https://www.sitepoint.com/how-why-use-html5-custom-data-attributes/)

### CSS

#### Nombres de ID y clases

Usar nombres específicos o genéricos en ID y clases. Usar nombres que reflejen el propósito del elemento en cuestión, o que sea genérico en caso de que el elemento no tenga alguna diferencia que resalte.

```css
/* No recomendado */
#yee-1901 {}

/* Recomendado: especifico */
#gallery {}
#login {}
.video {}

/* Recomendado: genérico */
.aux {}
.alt {}
```

Usar nombres de ID y clases que sean tan cortos como sea posible pero tan largos como sean necesarios.

```css
/* No recomendado */
#navigation {}
.atr {}

/* Recomendado */
#nav {}
.autor {}
```

#### Selectores

A menos que sea necesario, evitar combinar nombres de elementos con clases e IDs. También es de resaltar **NO usar selectores ID**

```css
/*No recomendado */
div.error {}

/* Recomendado */
.error {}
```

#### Uso de `!important`

Evitar el uso de `!important` a menos que sea estrictamente necesario. Cómo en el caso de una librería que sobreescribe un estilo o se necesita hacer un fix.

Una forma de evitar el uso es con el uso de *super-selectores* los cuales son selectores largos de varias jerarquías, lo cual es también una mala práctica (no tan mala como !important) pues lo ideal es no tener más de 3 jerarquías de selectores, esto es propuesto por [SMACSS](https://smacss.com/) la cual es una lista de metodologías que propone mejorar la arquitectura de proyectos.

#### Comillas

Usar comillas simples ('') para selectores de atributos y valores

```css
/* Not recomendado */
html {
  font-family: "open sans", arial, sans-serif;
}

/* Recomendado */
html {
  font-family: 'open sans', arial, sans-serif;
}
```

#### Secciones

De ser posible agrupar los estilos por secciones mediante comentarios.

```css
/* Header */

.header {}

/* Footer */

.footer {}

/* Gallery */

.gallery {}
```

#### JavaScript Hooks
Evitar usar la misma clase en los estilos y en el JavaScript. Se recomienda crear clases especificas para el js con el prefijo `js-`.

```html
<button class="btn btn-primary js-request-to-book">Request to Book</button>
```

### SASS

[SASS](http://sass-lang.com/) es el pre-procesador de *css* más completo y con mayor comunidad. La sintaxis utilizda es la de [SCSS](http://compass-style.org/)

#### Nombramiento de clases

Al nombrar las clases hay que tener en cuanta que: 

Si los se pueden aprovechar en otros componentes las clases deben quedar globales y ubicarse en el archivo segun corresponda:

```bash
└── src
    └── sass // .scss globales.
        │── _basic // Estilos generales
        │── _compasshacks // Hacks para navegadores
        │── _forms// Estilos para formularios
        │── _mixinsrumbo // Mixins
        │── _modals// Estilos para modales
        │── _tooltips // Estilos para tooltips
        │── _variables // Variables
        │── _warnings // Estilos para alertas
        └── rumboiconsset // Set de iconos


```

De esta forma declaramos la clase una sola vez y podemos usarla en cualquier componente:

```html
<style lang="scss">
 @import '~@/sass/_variables.scss';
 @import '~@/sass/_mixinsrumbo.scss';
</style>

<div class="wrp_mainrouteslist">
  <button class="button_terpel small right"></button>
  <button class="button_terpel small right"></button>
</div>
```
Cuando el estilo solo aplica una vez se deben hacer con el contexto del componente o del módulo a desarrollar:

```scss
<style lang="scss">
@import '~@/sass/_variables.scss';
@import '~@/sass/_mixinsrumbo.scss';

.wrp_mainrouteslist {
  .button_terpel  {
    margin-top: 50px;
  }
}
</style>
```

> #### BEM
> Para más información leer el [convenio de denominación](https://en.bem.info/methodology/naming-convention/) que ofrece [BEM](https://en.bem.info/), pues propone arquitecturas de css para desarrollo ágil y escalable el cual se utiliza en el proyecto.

#### Manejo de mixins, silent classes y helpers

Estas se pueden separar en funcionlidades individuales para poder ser reusados en todo el proyecto, cada elemento debe tener solo una responsabilidad para mantener el principio del css modular de [css orientado a objetos](https://www.keycdn.com/blog/oocss/).

Ejempo de [Silent Classes](https://csswizardry.com/2014/01/extending-silent-classes-in-sass/)\
Ejemplo de [Mixins](https://scotch.io/tutorials/how-to-use-sass-mixins)\
Ejemplo de Helpers:

```html
<!--  este elemento tendrá texto pequeño con pocisión relativa -->
<div class="relative text-s"> ... </div> 
```

#### Include & Extend

Utilizar `@include` duplica código y crea archivos compilados extensos sin embargo es customizable por si hay una propiedad que siempre cambia como los *media queries* pues hay varios tamaños a validar. De lo contrario se recomienda heredar propiedades con `@extend` ya que los diseños siempre tienen una base la cual los componentes pueden heredar sin repetir código. Además al utilizar estas utilidades de *SASS* es recomendado utilizarlas antes que otras propiedades por si hay que re-escribirlas:

```scss
.selector {
  @include transition(0.2);
  @extend main-button;
  property: value;
}
```

#### Transiciones
Es importante que cualquier elemento que cambie de forma dinámica en el *DOM* tenga una transición de entrada y de salida, son detalles que le ofrecen mucha calidad visual y mejora la experiencia, también es importante evaluar si es necesario utilizar *keyframes* sobre *transitions* dependiendo de la complejidad teniendo en cuenta que si hay alguna animación que se puede hacer de las dos formas siempre se debe dar prioridad a *transitions*.

> [ver ejemplos](https://css-tricks.com/ease-out-in-ease-in-out/)

#### Alineaciones verticales y Horizontales
Estas tienen que ser de forma dinámica para evitar valores forzados que pueden traer varios problemas en diferentes browsers para ubicar los elementos, en lo posible utilizar *Silent Clases* creadas en el proyecto.

> [Guía con ejemplos](https://codeburst.io/common-problems-in-positioning-elements-in-css-best-practices-b03ac54dbdcb) con diferentes métodos.


Más recomendaciones sobre SCSS [acá](https://sass-guidelin.es/es/)

### JavaScript

#### Inglés

Evitar definir funciones y variables en español, ya que el código tiene un lenguaje y el desarrollo tiene que estar acorde, los comentarios sin embargo pueden estar en un español.

#### Declaración de variables

Evitar usar `var`, usar `const` para variables constantes y `let` para variables que se vayan a modificar

```js
const a = 10;

let counter = 1;
if (true) {
  counter += 1;
}
```

#### Objetos

Usar la sintáxis literal al crear objetos.

```js
// No
const item = new Object();

// Si
const item = {};
```

#### Arreglos

Usar la sintáxis literal al crear arreglos.

```js
// No
const items = new Array();

// Si
const items = [];
```

#### Nombres de variables y funciones

Se recomiendan usar nombres de variables y funciones descriptivos. para boleanos agregando el prefijo 'is', para funciones detallando su finalidad.

```js
let isActive = true;

function getUsers() {}
```

#### Guía de estilos

Para más recomendaciones se sugiere la guía de estilos de [airbnb](https://github.com/airbnb/javascript)

También se recomienda seguir las recomendaciones de [Douglas Crockford](http://jslint.com/help.html) para tener buenas prácticas de Javascript.

___
## Soporte navegadores

El soporte en cuanto a navegador web se da desde IE11, esto debido a que versiones anteriores no soportan algunas propiedades CSS como `display:flex;`, con la cual están estructurados los componentes del proyecto en su mayoría.

___
## Vue

Vue.js es un framework JavaScript progresivo para construir interfaces de usuario, intuitivas e interactivas, mucho más faciles de mantener y probar.

Los archivos de extensión .vue son *single file template*, es decir, contienen una estructura, una lógica y un estilo asociados.

La estructura de un archivo con extensión .vue es la siguiente:

```html
<template>
  <!-- Estructura del componente en HTML  -->
</template>

<script>
  // Lógica del componente en JavaScript
</script>

<style>
  /* Estilos CSS o SCSS del componente */
</style>
```

Más información sobre Vue [acá](https://vuejs.org/)

___
## Recursos

- [Guía de estilos de Google HTML/CSS](https://google.github.io/styleguide/htmlcssguide.html)
- [Guía de estilos de Google JavaScript](https://google.github.io/styleguide/jsguide.html)
- [Guía de estilos airbnb CSS](https://github.com/airbnb/css)
- [Guía de estilos airbnb JavaScript](https://github.com/airbnb/javascript)
- [Guía de estilos SASS](https://sass-guidelin.es/es/)