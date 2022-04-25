A partir de esta lección es cuando vamos a meter funcionalidad e interactividad al código. Es el momento de agarrar lápiz y papel y pararnos a pensar.

![](./assets/images/react_ejercicio_ahorcado_enunciado-01.gif)

## Ejercicios

### 1. ¿Qué datos tenemos que gestionar?

Leed el enunciado y observad cómo se comporta el juego para identificar todos los datos implicados en el ejercicio.

Os queremos echar una mano y en este primer ejercicio os damos la solución, pero antes de leerla dedicad un rato a pensar qué datos hay que gestionar.

Los datos que las profes hemos identificado son:

- **La solución:** es una palabra que obtenemos de una API y que durante la vida del juego tenemos que comparar con otros datos para saber si la jugadora acierta o falla.
- **Las letras correctas de la solución:** a medida que la jugadora prueba diferentes letras, debemos mostrar en la solución algunas de las letras.
- **Las letras falladas:** a medida que la jugadora prueba diferentes letras, debemos mostrar en las letras falladas las que no estén contenidas en la solución.
- **La letra introducida por la usuaria:** tendremos que comparar esta letra con las letras de la solución para saber si la jugadora ha acertado o no.
- **El número de errores:** para pintar las líneas blancas del muñeco necesitamos saber cuántas veces ha fallado la jugadora.

### 2. ¿Qué datos debemos guardar en el estado?

Una vez que hemos investigado los datos que tenemos que gestionar nos toca saber cuáles de ellos debemos guardar en el estado.

Os damos una pista: en los materiales hay un apartado donde indicamos qué datos hay que guardar en el estado y cuáles no. Los datos que no debemos guardar son aquellos que podemos calcular a partir de otros datos.

Con esta información, responde a las siguientes preguntas. De los cinco datos que hemos identificado en el primer ejercicio:

- ¿Cuáles de estos datos son originales? Es decir, que no los podemos calcular a partir de otros datos.
- ¿Cuáles de estos datos son calculados? Es decir, que sí los podemos calcular a partir de otros datos.

A continuación haceos todas las preguntas posibles, como por ejemplo:

- El número de errores, ¿lo tenemos que guardar en el estado para poder pintarlo, o lo podemos calcular a partir de otros datos?
- El número de errores, ¿cambia siempre que la jugadora añade una letra, o solo cuando añade una letra errónea?
- ¿Qué número de errores hay cuando el juego no ha empezado?
- ¿Hay un número de errores mínimo y/o máximo?
- ¿Hay datos que son conjuntos de datos (como un array o un objeto) o todos los datos son simples o primitivos?
- Y cualquier otra pregunta que se os ocurra sobre los datos

Con todas estas preguntas y respuestas seguro que sabéis qué datos guardaremos en el estado.

### 3. El diagrama de flujo

Antes de programar, siempre debemos dibujar un diagrama de flujo que indique lo que deberá hacer el código. En los diagramas de flujo debemos identificar:

- Cuáles son las acciones que hay que hacer al arrancar la página.
- Cuáles son las acciones que hay que hacer después de un evento de la usuaria.

### 4. El muñeco

Lo que vamos a hacer en este cuarto ejercicio es darle vidilla al muñeco. Vamos a programar una funcionalidad para que las líneas del muñeco se pongan blancas una a una.

> **Nota:** esta funcionalidad no está dentro del enunciado, pero queremos que la programéis para aprender a trabajar con el estado y los eventos y para qué veáis como debemos manejar el muñeco.

1. Crea un estado de React llamado `numberOfErrors` cuyo valor inicial sea 0.
1. Crea un botón que tenga el texto **Incrementar**.
1. Añade un evento de tipo click a este botón.
1. En la función manejadora del evento incrementa el valor de `numberOfErrors`.
1. Edita la línea `<section className="dummy error-5">` para sustituir el número 5 por el valor de `numberOfErrors`.
1. Para saber que todo está bien, al pulsar en el botón **Incrementar**, las líneas del muñeco se irán poniendo blancas una a una. La etiqueta anterior debe empezar en `<section className="dummy error-0">`, después pasar a `<section className="dummy error-1">` y así sucesivamente.
