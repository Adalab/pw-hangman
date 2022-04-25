Hoy ha venido la jefa de producto a hablar con nosotras y nos pedido unos cambios de última hora... algo que no estaba previsto en la definición inicial de la web.

![](./assets/images/react_ejercicio_ahorcado_enunciado-02.gif)

Nos ha pedido que añadamos un menú en el footer de la página, con tres enlaces:

- **A jugar:** pulsando en este enlace iremos a la home de la web `/` y podremos jugar al ahorcado como hasta ahora.
- **¿Cómo se juega?:** pulsando aquí redireccionaremos a la usuaria a la ruta `/instructions` y le mostraremos una página con las normas del juego. Todavía no nos han dado esas normas, así que usaremos un poquito de _lorem ipsum_.
- **Más opciones:** pulsando en este último link redireccionaremos a la usuaria a la ruta `/options`. Hasta ahora estamos sacando la palabra a adivinar de una API. Pues bien, en la página de opciones mostraremos un campo de texto por si acaso queremos escribir nuestra propia palabra a secreta para que la adivine otra persona.

## Ejercicios

### 1. Instalando y configurando React Router DOM

Como os habréis imaginado el primer paso para hacer estos nuevos cambios es instalar y configurar React Router DOM. Sigue las instrucciones de la lección de hoy para hacerlo.

### 2. Creando el menú

Vamos a crear el menú del footer:

1. Cread un componente llamado `Footer` y usadlo al final del componente `App`, justo a continuación de la etiqueta de cierre `<main />`.
1. El HTML que este componente debe renderizar es:
   ```html
   <!-- HTML que debe generar el componente Footer -->
   <footer class="footer">
     <nav>
       <ul>
         <li class="footer__menu-item">
           <a class="footer__menu-link" href="#/">A jugar</a>
         </li>
         <li class="footer__menu-item">
           <a class="footer__menu-link active" href="#/instructions"
             >¿Cómo se juega?</a
           >
         </li>
         <li class="footer__menu-item">
           <a class="footer__menu-link" href="#/options">Más opciones</a>
         </li>
       </ul>
     </nav>
     <small class="footer__copy">© Adalab</small>
   </footer>
   ```
1. Combinad este HTML y el componente `<NavLink>` de React Router DOM para crear el código de vuestro `Footer`.
   - Utilizamos el componente `<NavLink>` para que React Router DOM nos añada la clase `active` en el link que esté activo y así poder cambiar sus estilos a través de CSS. [Visita la documentación para más info](https://reactrouter.com/web/api/NavLink).
   - Entre los ficheros Sass que os dimos en el enunciado está [`src/scss/components/_footer.scss`](https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/react-juego-de-ahorcado/00-enunciado/src/scss/components/_footer.scss). Si lo importáis en el nuevo componente debería mostrarse bien maquetado.
1. Si al pulsar en los enlaces el navegador cambia correctamente de ruta, lo habréis hecho bien.

### 3. Creando las páginas estáticas

Ya tenemos los links del router funcionando. Ahora le tenemos que indicar qué debe mostrar en cada una de estas rutas.

Para ello empezaremos creando un par de componentes:

1. Cread un componente que se llame `Instructions.js` que renderice el código:
   ```html
   <section class="instructions">
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
       provident nisi voluptatem est nostrum optio perferendis doloremque,
       delectus at, assumenda suscipit sit odio ipsum error consequatur numquam
       vero impedit nulla?
     </p>
     <p>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
       animi voluptatem quis impedit amet in dicta soluta explicabo, fugit magni
       mollitia, pariatur eos, repellendus aut esse recusandae minima eum eaque.
     </p>
   </section>
   ```
1. Y cread otro componente que se llame `Options.js` que renderice cualquier texto, por ejemplo "Estas son las opciones del juego". Por ahora nos queremos centrar en que funcionen las rutas, más tarde le daremos [vidilla](https://twitter.com/deAnta_/status/68991568014622722) a este componente.
1. Con los componentes `Switch` y `Route` cread la funcionalidad para que:
   - El componente `Header` **aparezca siempre**, justo antes de la etiqueta `<main />`.
   - Dentro de la etiqueta `<main />` meteremos:
     - Los componentes `SolutionLetters`, `ErrorLetters` y `Form` para que **aparezcan solo en la ruta `/`**.
     - El componente `Instructions` para que **aparezca solo en la ruta `/instructions`**.
     - El componente `Options` para que **aparezca solo en la ruta `/options`**.
     - El componente `Dummy` para que **aparezca siempre**, en cualquier ruta.
   - El componente `Footer` para que **aparezca siempre**, justo después de la etiqueta de cierre de `<main />`.

En resumen, que la página funcione como en el gif de arriba.

### 4. Publicando en GitHub Pages

Ya tenéis este repo subido a GitHub. Ahora configuradlo para que funcione perfectamente en GitHub Pages.

### 5. Cambiando la palabra a adivinar

> **Nota:** la funcionalidad que vamos a programar en este ejercicio no tiene nada que ver con rutas. Por ello si queréis, dejadlo para más adelante.

Queremos crear un modo multijugadora para este juego. Hasta ahora la palabra a adivinar la estamos sacando de una API. A partir de ahora si una jugadora entra en la página `#/options` puede modificar a mano la palabra que hay que adivinar. A continuación vuelve a la home y le dice a otra jugadora que intente adivinar la palabra secreta. Y ya está.

![](./assets/images/react_ejercicio_ahorcado_enunciado-03.gif)

Programar esta funcionalidad es más fácil de lo que parece, siempre y cuándo pensemos un poco cómo hacerlo.

**¿Qué funcionalidad tenemos ahora mismo?** Tenemos un `useEffect` que la primera vez que se renderiza la página pide a una API la nueva palabra y la guardar en el estado de React `word`.

**¿Qué queremos hacer?** Queremos que desde el input de un formulario podamos cambiar dicha palabra.

Pues la solución es sencilla: creamos **un input cuyo valor guardaremos en la constante de estado `word` cuando sea modificado por la usuaria**.

A React y a la web les da igual si el valor de `word` ha sido modificado en el `useEffect` cuando responde la API o por la función manejadora que gestiona el `onChange` de un input. **A React solo le importa el valor actual de `word`.** En resumen, a React le da igual el pasado, solo le importan los datos presentes en el estado. **Así es como debemos razonar cuando programamos en React.**

Por ello, para programar esta funcionalidad debéis:

1. Añadir el siguiente formulario al componente `Options`:
   ```html
   <form>
     <label class="title" for="word">
       Escribe aquí la palabra que hay que adivinar:
     </label>
     <input
       autofocus
       autocomplete="off"
       class="form__input"
       maxlength="15"
       type="text"
       id="word"
       name="word"
     />
   </form>
   ```
1. Editar el código anterior para que no haya errores en consola.
1. Añadir una función manejadora a la etiqueta `<form>` para prevenir el envío del formulario.
1. Hacer lifting del valor del input:
   1. Añadir una función manejadora al `<input>` llamada `handleChange`.
   1. Esta función debe obtener el valor del input y hacer lifting para subirlo hasta `App`.
1. En `App` debemos recoger el valor del `<input>` que nos están subiendo por lifting y guardarlo en el estado de `word`.
1. Desde `App` debemos pasar al componente `Options` el valor de `word` para que `Options` pueda controlar el `value` del `<input>`.

Tras los pasos anteriores se producirá un comportamiento raro que puedes ver si sigues los pasos:

1. Ir a la home.
1. Escribir letras correctas y fallidas en el input. Es decir, modificar `userLetters` y `lastLetter`.
1. Ir a las opciones.
1. Cambiar la palabra secreta.
1. Volver a la home.
   - Aquí puedes comprobar que la palabra secreta ha cambiado, pero `userLetters` y `lastLetter` no. Y se produce una incoherencia en el juego.

La solución es que, en `App`, cuando guardamos la palabra secreta en `word` limpiemos los estados de `userLetters` y `lastLetter` para que estén como al arrancar la página.

Y ya estaría.


