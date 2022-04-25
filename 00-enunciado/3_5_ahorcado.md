![](./assets/images/react_ejercicio_ahorcado_detalle_1.png)

## Ejercicios

### 1. Obtener una palabra aleatoria de una API

Existe una página en Internet que nos proporciona un [API de palabras aleatorias](https://palabras-aleatorias-public-api.herokuapp.com/). Leyendo la documentación vemos que si entramos en la URL https://palabras-aleatorias-public-api.herokuapp.com/random el servidor nos devuelve un JSON. En el JSON > body > Word tenemos la palabra aleatoria que estamos buscando.

En ejercicios anteriores habíamos puesto a fuego la palabra **katakroker** en la constante del estado `word`. Pues ahora vamos a hacer que esa constante se rellene desde una API. Para ello:

1. Borrad la palabra **katakroker** del estado y poned como valor inicial un string vacío.
1. Cread la funcionalidad necesaria (un servicio por aquí, un useEffect por allá...) para que al arrancar la página se haga una petición a https://palabras-aleatorias-public-api.herokuapp.com/random y se guarde el resultado en la constante de estado `word`.
1. Si al refrescar la página veis que en DevTools > Componentes hay una palabra aleatoria es que lo habéis hecho bien. Además, los guiones de la solución deben tener la misma longitud que la palabra.



<!-- ## 3.6 Componentes y props
## 3.7 Lifting y children
## 3.8 Router
## 3.9 Buenas prácticas -->
