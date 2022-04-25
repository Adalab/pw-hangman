## Una solución propuesta

Os estamos guiando para que programéis este juego, pero lo estamos haciendo según una de tantas soluciones que existen. Creemos que es interesante que os expliquemos nuestra solución para que entendáis mejor qué os pedimos en los siguientes ejercicios.

![](./assets/images/react_ejercicio_ahorcado_diagrama_de_flujo.png)

<!-- https://docs.google.com/drawings/d/119c8GAShoQoeYDuwReRIYW_83oZp3j8bZU6VztIFAQE/edit -->

De acuerdo con este diagrama de flujo solo sería necesario usar tres estados de React:

- `word`: es un string para almacenar la palabra que se deberá adivinar.
- `userLetters`: es un array para almacenar las letras que introduce la jugadora.
- `lastLetter`: es un string para almacenar la última letra introducida por la jugadora.

La constante del estado `lastLetter` nos vale únicamente para controlar el input. No nos aporta mucho más. Incluso podríamos no guardarla en el estado de React, pero esto complicaría un poco el código.

Combinando las constantes del estado `word` y `userLetters` podemos obtener todo el resto de datos que tenemos que manejar en el juego, como:

- El número de guiones que tenemos que poner en la solución es el número de letras que tiene `word`.
- Las letras que hay que mostrar sobre los guiones de la solución son las letras de `word` que estén en `userLetters`.
- Las letras que hay que mostrar en **Letras falladas** son aquellas letras de `userLetters` que no estén en `word`.
- El número de letras falladas es el número que hay que ponerle al muñeco en su CSS para que se pinte bien.

Como hemos dicho, `word` es un string y `userLetters` es un array. Para trabajar cómodamente con estos datos vamos a pasar `word` a array, usando el método [split](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/split).

Ahora que ya sabemos todo esto vamos a continuar con los ejercicios.

Por cierto, seguramente no os dará tiempo a hacer todos los ejercicios en el pair programming de hoy. No pasa nada, los podéis hacer en cualquier otro momento.

## Ejercicios

### 1. Pintando los guiones de la solución (fase 1)

Todavía no hemos aprendido a obtener desde una API la palabra que se ha de adivinar. Por ello vamos a ponerla a mano en el código porque queremos pintar ya los guiones bajos.

1. Añadid un nuevo estado de React llamado `word`. El valor inicial será la palabra que hay que adivinar, por ejemplo poned **"katakroker"**.
1. Cread una función que se llame `renderSolutionLetters` y ejecutadla dentro del retorno del componente `App`, justo debajo del título **Solución**.
1. La función `renderSolutionLetters` debe hacer dos cosas:
   1. Convertir el valor de `word`, que es un string, en un array para que cada elemento del array sea una letra. Para ello podéis usar el código `const wordLetters = word.split('');`.
   1. Recorrer `wordLetters` con un `map` para pintar tantos `<li class="letter"></li>` como letras tenga la palabra **katacroker**.
1. Si se os pintan diez guiones bajos estará bien, porque **katacroker** tiene diez letras. Cambiad **katacroker** por **pepino** y se deberían pintar seis guiones bajos.

![](./assets/images/react_ejercicio_ahorcado_detalle_1.png)

### 2. Modificando un array del estado

Hasta ahora solo tenemos guardadas en el estado la palabra buscada `word` y la última letra escrita por la jugadora `lastLetter`. Con esta información sabemos cuál es la última letra pero no las anteriores así que:

1. Añadid un nuevo estado de React llamado `userLetters` que sea un array vacío.
1. En la función manejadora del input además de guardar la última letra en `lastLetter` debemos meterla en el `userLetters`.
1. Para saber que está bien mira DevTools > Components para ver si el estado de `App` tiene los datos que esperas. En `userLetters` debe haber un array al que añadimos la letra que la jugadora introduzca.

### 3. Pintando los guiones de la solución (fase 2)

Hemos pintado ya los guiones de la solución vacíos. Ahora queremos pintar letras sobre ellos cada vez que la jugadora introduzca una letra.

Para ello, dentro del map de la función `renderSolutionLetters` debes retornar:

- Un `li` vacío si la letra de `word` no está en `userLetters`: `<li className="letter"></li>`
- Un `li` relleno si la letra de `word` sí está en `userLetters`. Por ejemplo, si la letra es la `a` debes retornar `<li className="letter">a</li>`.

![](./assets/images/react_ejercicio_ahorcado_detalle_2.png)

**Atención, pista:** fuera del `map` hemos convertido el string `word` al array `wordLetters` con `const wordLetters = word.split('');`. Por ello dentro del `map` estamos trabajando de forma individual con cada una de las letras de `wordLetters`. Si queremos saber si una letra está en el array `userLetters` (que es un array de letras) lo que nos estamos preguntando es si un elemento está dentro de un array de elementos. La respuesta a esta pregunta es [una función que encontrarás aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array).

### 4. Pintando las letras falladas

Pintar las letras falladas es muy parecido a pintar las letras de la solución. Pensemos un momento… aquí lo que queremos es tomar todas las letras introducidas por la jugadora, eliminar las acertadas y quedarnos con las falladas. Por ello:

1. Cread una función que se llame `renderErrorLetters` y ejecutadla dentro del retorno del componente `App`, justo debajo del título **Letras falladas**.
1. La función `renderErrorLetters` debe hacer dos cosas:
   - Filtrar las `userLetters` comprobando si existen o no dentro de `word`. Nos interesa obtener las que no existen.
   - Recorrer estas letras filtradas con un `map` que debe retornar un `li` con cada letra. Por ejemplo si la letra errónea es la `f` este map debe retornar `<li className="letter">f</li>`.

![](./assets/images/react_ejercicio_ahorcado_detalle_3.png)

### 5. Pintando el muñeco

Para pintar el muñeco debemos renderizar la clase `<section className="dummy error-0">` cambiando el número cero por el número de errores que haya cometido la jugadora. Por ello:

1. Calcula el número de errores. Antes has calculado el número de letras falladas con un `filter`. Usa un filter parecido para saber el número de errores.
1. 2. Actualiza el CSS del muñeco.

![](./assets/images/react_ejercicio_ahorcado_detalle_4.png)
