Ya estamos a punto de acabar nuestro Juego del Ahorcado.

## Ejercicios

### 1. Añadir un loader al arrancar

Queremos mostrar un loader a la web mientras estamos esperando que la API responda. Para ello:

1. Cread un componente `Loading` y usadlo dentro de `App`. El componente `Loading` debe:
   - Recibir por props la prop `loading`, que debe ser un booleano.
   - Si la prop `loading` es `true` el componente debe retornar: `<span className="loading" />`.
   - Si la prop `loading` es `false` el componente debe retornar: `null`.
   - Los estilos de este `span` ya los tenéis en el fichero [src/scss/components/\_loading.scss](https://github.com/Adalab/ejercicios-de-los-materiales/blob/main/react-juego-de-ahorcado/00-enunciado/src/scss/components/_loading.scss) del enunciado. Debéis importar este fichero Sass en el componente `Loading`.
1. En el componente `App` debéis seguir los pasos que ya sabemos para crear un loader:
   1. Añadir una constante de estado llamada `isLoading`.
   1. Justo antes de llamar a la API debemos poner este estado en `true`.
   1. Justo después de que la API responda debemos poner este estado en `false`.
   1. Debemos pasar esta constante por props al componente `Loading`.

Os recomendamos inspeccionar con DevTools > Elements el código HTML que está generando React para ver que durante unos milisegundos aparece la etiqueta `<span className="loading" />` y en seguida desaparece.

### 2. Añadir las defaultProps

Como somos una desarrolladoras muy limpias y ordenadas queremos añadir a todos los componentes del proyecto que reciben props sus correspondientes valores por defecto.

Seguid la mini lección de las defaultProps para saber cómo hacerlo.

### 3. Añadir las PropTypes

Como además de ser desarrolladoras limpias y ordenadas queremos ayudar a las futuras compañeras que trabajen con este proyecto, debemos añadir las PropTypes a todos los componentes con props.

Seguid la mini lección de las PropTypes para saber cómo hacerlo.

### 4. Desestructurar las props

Para este ejercicio tenemos dos objetivos, primero practicar el destructuring de objetos en React y segundo decidir cómo preferimos trabajar, con destructuring o sin él.

Para ello vamos a refactorizar el componente `SolutionLetters`:

1. Actualmente el componente `SolutionLetters` debería empezar con una línea parecida a:
   ```jsx
   const SolutionLetters = (props) => {
   ```
   Y este componente recibe por props `word` y `userLetters`.
1. Cambiemos esta línea para que sea:
   ```jsx
   const SolutionLetters = ({ word, userLetters }) => {
   ```
1. Haced los cambios que necesitéis en el componente para que siga funcionando como antes.
1. Decidid si os gusta más trabajar con o sin desctructuring en las props de React.


