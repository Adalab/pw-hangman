![](./assets/images/react_ejercicio_ahorcado_detalle_5.png)

## Ejercicios

### 1. Controlando el input

En esta página solo tenemos un input debajo del texto **Escribe una letra**. Vamos a gestionar este input.

1. Añadid un nuevo estado de React llamado `lastLetter`. En este estado vamos a guardar **la última letra escrita por la jugadora**.
1. Tenéis que programar toda esta funcionalidad, incluyendo el control del valor del input.
1. 3. Para saber que todo está bien, debéis comprobar en DevTools > Components y ver que `lastLetter` tiene el valor correcto.

### 2. Controlando qué letras están permitidas

Todas las palabras con las que vamos a jugar son normales, es decir, no contienen números, espacios, signos gramaticales, etc. Dicho de otra forma, solo contienen letras del alfabeto español con sus particularidades, como tildes o diéresis.

1. En la función manejadora que has añadido en el ejercicio anterior comprueba si la letra que estás guardando en el estado es válida o no.
1. Para saber que lo has hecho bien, escribe una carácter no válido y comprueba si se está guardando en el estado.

Por cierto, en este tipo de decisiones nos surge la duda sobre qué es mejor:

- Especificar en el código fuente las letras no permitidas (y por lo tanto todas las demás sí lo estarán), o
- Especificar en el código fuente las letras permitidas (y entonces las demás no lo estarán).

Os toca decidir a vosotras cuál es la mejor opción y apechugar con las consecuencias. A programar se aprende tomando decisiones.


