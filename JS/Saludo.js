/* console.log("Funcionando")

let Mensaje = "Hola Mundo"; */

/* Console.log = Mostrar
   Alert = Mostrar
   prompt = Ingresar */

/* console.log(Mensaje); */

/* resultado */


/* DOM = Document Object Model */
/* documento obtenerporid(Aqui ID).Propiedad = Valor*/

/* Seleccionar el elemento del DOM por el ID y cambiar el contenido */
/* document.getElementById("resultado").textContent = "Hola Mundo";
/* Seleccionar el elemento del DOM por el ID y cambiar el BG */
/* document.getElementById("resultado").style.backgroundColor = "blue";  */

let DivResultado = document.getElementById("resultado");

console.log(DivResultado);

DivResultado.textContent = "Hola Mundo";
DivResultado.style.backgroundColor = "green";

/* ++++++++++++++++Practica en clase #1+++++++++++++++++++++++++++++++++++++++++++++++++++ */
let Parrafo = document.getElementById("parrafo");

console.log(Parrafo);

Parrafo.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non nihil totam deserunt dolor doloribus itaque esse quaerat consequuntur! Consequatur maiores modi autem nesciunt odio, officia animi nostrum architecto voluptate.";
Parrafo.style.backgroundColor = "green";
/* Value = lo que hace es obtener el valor actual del DOM*/
let titulo = document.getElementById("titulo").value;
/* titulo.textContent = "Gato"; */
console.log(titulo);
let NuevoParrafo = document.createElement("p");
NuevoParrafo.textContent = "Contenido p de la etiqueta";
/* Para concatenar o unir agregar etiquetas CreateElement al HTML */
DivResultado.appendChild(NuevoParrafo);
console.log(NuevoParrafo);