Hoy es el segundo día que vamos a dedicar a **componentizar**.

En futuros proyectos puedes seguir dos formas de trabajar:

- Creo todo mi código en el componente `App` y cuando ya funciona lo muevo a los correspondientes componentes. Así es como lo estamos haciendo ahora.
- Creo mi código directamente en los componentes definitivos.

Deberías probar ambas opciones en diferentes proyectos para saber cuáles son los pros y los contras. Las buenas programadoras lo son porque han probado muchas cosas y han desarrollado su propio criterio de programación.

Y ahora vamos al lío...

## Ejercicios

### 1. _componentizando_ el formulario

En este ejercicio nos toca extraer el formulario a un componente propio.

![](./assets/images/react_ejercicio_ahorcado_detalle_5.png)

Lo primero que vamos a hacer es crear el componente `Form.js`, pero antes de continuar debemos **pensar mucho para trabajar poco**; y en programación **pensar mucho significa hacernos muchas preguntas**.

Cada vez que vayas a _componentizar_ una funcionalidad debéis haceros las siguientes preguntas:

- ¿Qué HTML voy a mover a un componente?
  - En este caso vamos a mover el HTML de la etiqueta `<form>`.
- ¿Qué datos dinámicos tengo que pintar en este HTML?
  - Mirad dentro de la etiqueta `<form>` y comprobad si hay alguna variable o constante de JS o del estado de React que estemos utilizando. Si hay algún dato en ese HTML pueden pasar dos cosas:
    - Que tengamos que pasar ese dato por props desde el componente `App` al componente `Form`. Si este dato lo necesitamos más arriba en el componente `App`, elegiremos esta opción.
    - Que tengamos que mover la declaración, cálculo y uso de ese dato dentro de `Form`. Si este dato **no** lo necesitamos más arriba elegiremos esta opción.
- ¿Este código HTML gestiona algún evento de la usuaria?
  - Mira dentro de la etiqueta `<form>` y comprueba si estás escuchando algún evento. En el caso de que haya eventos pueden pasar dos cosas:
    - Que ese evento necesite compartir información con otros componentes o con `App`. Si es así, necesitarás hacer lifting para subir esa información desde `Form` a `App`.
    - Que ese evento no necesite compartir información con otros componentes. Si es así mueve la función manejadora dentro del componente.

Respondiendo a todas estas preguntas ya podéis saber qué código hay que mover a `Form.js` y cuál dejar en `App.js`.

Puesto que estamos _componentizando_ y no añadiendo nueva funcionalidad, sabréis que lo habéis hecho bien si al finalizar la refactorización vuestra página sigue funcionando igual que antes.


