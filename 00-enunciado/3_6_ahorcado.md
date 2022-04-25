Entre hoy y mañana vamos a refactorizar todo el código del componente `App.js` con el objetivo de separar el código en diferentes componentes.

En el componente `App` vamos a dejar casi todo el código JS que hay antes del `return` vamos a mover a otros componentes.

## Ejercicios

### 1. Conoce a tu nueva pareja y su trabajo

Acabas de conocer a tu nueva pareja de pair programming y lo vamos a aprovechar para trabajar con un código que no has hecho tú, ya que es una práctica bastante común en las empresas.

1. Lo primero que debes hacer es contar a tu nueva pareja qué funcionalidades del ahorcado hiciste con tu pareja anterior y cuáles no.
1. A continuación explícale el código de tu ejercicio.
1. Entre las dos comparad las diferentes soluciones a las que habéis llegado y comentad cuáles os parecen mejor y cuáles peor y por qué.

Ahora tenemos que seguir programando, así que elegid qué ejercicio vais a desechar y cuál vais a continuar. También podéis elegir una mezcla de los dos ejercicios. En cualquier caso tenéis que dialogar y ser empáticas para llegar a la mejor solución para ambas.

Por último:

1. Cread un nuevo repo en GitHub > Organización de Adalab con el nombre `promo-X-module-3-pair-Y-sprint-2-hangman-game`.
1. Subid vuestro código a este repo...
1. ¡¡¡Y a codificar!!!

### 2. _Componentizando_ la cabecera

El componente más fácil que tenemos en este juego es la cabecera. Por ello:

1. Cread un componente llamado `Header` y moved dentro la etiqueta `<header>`.
1. Como en todo refactor, si cuando terminéis de editar el código la página se sigue viendo igual es que lo habéis hecho muy bien.

### 3. _Componentizando_ el muñeco

Hoy hemos aprendido a crear componentes que reciben props. Vamos a crear un componente para el muñeco que reciba por props el número de errores.

![](./assets/images/react_ejercicio_ahorcado_detalle_4.png)

Antes de continuar vamos a pensar un poco. Para hacer la funcionalidad del muñeco dijimos que teníamos que:

1. Comparar el string `word` con el array `userLetters` para obtener el número de letras falladas:
   - Si filtramos las letras del array `userLetters` comprobando si cada letra está incluida en `word` obtendremos las letras falladas en un nuevo array.
   - La longitud de este array retornado por el `filter` es el número de errores.
   - Estos cálculos son la lógica del juego, la inteligencia, es decir, los cálculos que hacemos para que el código cumpla con las reglas del juego. A estas funcionalidades también se les llama [lógica de negocio](https://es.wikipedia.org/wiki/L%C3%B3gica_de_negocio).
1. Una vez tenemos el número de errores solo debemos pintarlo para sustituir el 0 de la clase css `<section className="dummy error-0">`.
   - Esta parte del código la llamamos vista o la interfaz, porque es lo que la usuaria ve y usa.
   - Esta parte del código es más "tonta" porque no decide nada, solo pinta las cosas que la lógica de negocio le dice que pinte.

Para realizar este ejercicio queremos:

- Dejar en el componente `App` el código de la lógica de negocio, es decir, todo o casi todo el código JS que va antes del retorno. De esta forma la lógica de negocio estará en el componente `App`, que es el más listo de todos, el que tiene todo el conocimiento sobre cómo debe funcionar el juego.
- Mover a un componente la vista o interfaz del juego, es decir, el HTML, cuya única responsabilidad es pintar los datos bien para que los vea la usuaria.

Por todo esto:

1. Cread un componente llamado `Dummy.js`.
1. Meted en este componente el último `<section className="dummy error-0">` del HTML.
1. Este componente debe recibir una prop llamada `numberOfErrors` de tipo `number`. Con esta prop debéis pintar la clase `error-0`, `error-1`...
1. El componente `App` debe importar y usar este componente pasándole el número de errores que ha cometido la jugadora.
1. Y como lo que estamos haciendo es refactorizar, si al finalizar todos los cambios el juego sigue funcionando y el muñeco se pinta bien, es que lo habéis hecho todo fetén.

### 4. _Componentizando_ la solución

Hace unos días programamos el pintado de los guiones de la solución y las letras acertadas que van encima.

![](./assets/images/react_ejercicio_ahorcado_detalle_2.png)

Esta funcionalidad es una candidata perfecta para ser un componente, porque es un conjunto de código (HTML, Sass, JS y React) que hace una funcionalidad muy clara y concreta. Nos la podemos llevar a un componente. Para ello:

1. Cread un componente llamado `SolutionLetters`.
1. Moved la etiqueta `<div className="solution">` desde `App` a este nuevo componente.
1. Este componente necesita recibir por props tanto `word` como `userLetters` para poder pintar los guiones y las letras.
1. Moved la función `renderSolutionLetters` también dentro del componente para hacer el cálculo de los guiones que hay que pintar.
1. Y por último pero no menos importante, importad el fichero `letters.scss`, ya que este componente usa estos estilos.

### 5. _Componentizando_ las letras falladas

Hace unos días también programamos el pintado de las letras falladas.

![](./assets/images/react_ejercicio_ahorcado_detalle_3.png)

Pues bien, en este ejercicio debéis crear el componente `ErrorLetters` y mover dentro todo lo relativo a esta funcionalidad: el HTML, Sass, la función de JS, los estilos... Y como en el ejercicio anterior esta función también necesita recibir por props `word` y `userLetters`.


