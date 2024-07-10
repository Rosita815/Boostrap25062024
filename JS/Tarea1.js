// Tarea JS trate de utilizar funciones para encapsular su codigo . 


//1-Crear una función que salude
// Crear una función llamada 'saludar' que tome un parámetro 'nombre' y retorne un saludo
// Solicitar al usuario ingresar su nombre y mostrar el saludo en la consola
var nombre = prompt("Ingresa tu nombre:");
function saludar(nombre) {
    return nombre;
};
console.log(saludar(nombre));

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//2-Determinar si una persona es mayor de edad

// Solicitar al usuario ingresar su edad
let Edad = parseInt(prompt("Ingresa tu edad:"));
// Verificar si la persona es mayor de edad y mostrar el resultado en la consola
if (Edad >= 18) {
    console.log("Eres mayor de edad")
} else {
    console.log("Eres menor de edad")
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//3-Crear un objeto con información de un libro y mostrar una propiedad
// Crear un objeto llamado 'libro' con propiedades 'titulo', 'autor' y 'anio'
let libro = {
    titulo: "El cuervo",
    autor: "Edgar Allan Poe",
    anio: 1843
};
let Mensaje = "El libro fue escrito por :" + libro.autor;
// Mostrar la propiedad "El libro fue escrito por : 'autor' " 'autor' del objeto en la consola
console.log(Mensaje);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//4-Verificar si una cadena está vacía

// Solicitar al usuario ingresar una cadena o string 
let cadena = prompt("Ingresa una cadena:");
// Verificar si la cadena está vacía y mostrar el resultado en la consola
if (cadena != null) {
    console.log(cadena);
} else {
    console.log("Cadena vacía");
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//5-Usar un switch para mostrar el día de la semana

// Solicitar al usuario ingresar un número del 1 al 7
let dia = parseInt(prompt("Ingresa un número del 1 al 7:"));
// Mostrar el día de la semana correspondiente usando un switch
switch (dia) {
    case 1:
        console.log("Es Lunes ");
        break;
    case 2:
        console.log("Es Martes ");
        break;
    case 3:
        console.log("Es Miercoles ");
        break;
    case 4:
        console.log("Es Jueves ");
        break;
    case 5:
        console.log("Es Viernes ");
        break;
    case 6:
        console.log("Es Sabado ");
        break;
    case 7:
        console.log("Es Domingo ");
        break;
    default:
        console.log(dia);
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//6-Crear un array y mostrar la posicion 7 y 0
// Crear un array llamado 'Pokemones' con al menos 10 Especies

let Pokemones = ["Bicho", "Dragon", "Electrico", "Hada", "Lucha", "Fuego", "Volador", "Fantasma", "Planta", "Tierra"];
console.log(Pokemones[7] + " y " + Pokemones[0]);
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//7-Usar un operador lógico para verificar si un número está en un rango
// Solicitar al usuario ingresar un número
let numero = parseFloat(prompt("Ingresa un número:"));
// Verificar si el número está entre 1 y 10, y mostrar el resultado en la consola
if (numero >= 1 && numero <= 10) {
    console.log("El numero ingesado se encuentra en el rango");
} else {
    console.log("El numero ingresado no se encuentra entre el rango");
}

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//8 Sumar dos números ingresados por el usuario

// Solicitar al usuario ingresar dos números
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
// Sumar los números y mostrar el resultado en la consola
let suma = numero1 + numero2;
console.log(suma);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//9 Crear una constante y mostrarla en consola

// Crear una constante llamada 'pi' y asignarle un valor
const pi = 3.141592;
// Mostrar el valor de 'pi' en la consola
console.log(pi);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// 10 Verificar si una persona puede votar
// Instrucción: Solicitar al usuario ingresar su edad y nacionalidad. 
/* Crear una función que verifique si la persona puede votar. La persona 
puede votar si tiene 18 años o más y es de nacionalidad 'peruana' o 'colombiana'. */

// Solicitar al usuario ingresar su edad y nacionalidad
/* let Edad = parseInt(prompt("Ingresa tu edad:")); */
let nacionalidad = prompt("Ingresa tu nacionalidad:");

// Función para verificar si la persona puede votar
function puedeVotar(Edad, nacionalidad) {
    if (Edad >= 18 && nacionalidad == "peruana" || nacionalidad == "colombiana") {
        console.log("La persona puede votar");
    } else {
        console.log("La persona no puede votar");
    }
};
console.log(puedeVotar(Edad, nacionalidad));

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
//11  Determinar si una persona está en edad escolar
// Instrucción: Solicitar al usuario ingresar su edad y verificar si la persona está 
/* en edad escolar (de 6 a 18 años) o si es un adulto mayor (65 años o más). */
// Solicitar al usuario ingresar su edad
let edad = parseInt(prompt("Ingresa tu edad:"));

// Función para verificar si la persona está en edad escolar o es adulto mayor
function verificarEdad(edad) {
    if (edad >= 6 && edad <= 18) {
        console.log("Edad escolar");
    }
    else if (edad >= 65) {
        console.log("Adulto mayor");
    }
    else {
        console.log("Edad no escolar, ni adulto mayor");
    }
};

console.log(verificarEdad(edad));