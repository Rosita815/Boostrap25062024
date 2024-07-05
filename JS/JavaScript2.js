let Paises = ["CR", "USA", "PA"];
let Frutas = ["Manzana", "Pera", "Uva", true, 35];
/* 3 Elementos en el Array 
0, 1, 2*/

/* Visualizar[posición] */
console.log(Paises); /* Muestra todo el Array */
console.log(Paises[1]);
console.log(Paises[2]);

let Estudiante = {
    Nombre: "Pedro",
    Edad: 20,
    EstadoCivil: true,
    Materias: ["Progra1","Base de datos","Calculo"]
};

console.log(Estudiante); /* Muestra todo el objeto */
console.log(Estudiante.Nombre);
console.log(Estudiante.Materias[2]);

/* Declaren el siguiente objeto Auto 4 propiedades y 1 Array*/

let Auto = {
    Colores: ["Verde","Blanco","Negro"],
    Año: 2024,
    Disponible: true,
    Marcas: ["Toyota","Mercedez Benz","Suzuky"]
};

let Mensaje = "La Marca del auto es "+Auto.Marcas[1]+" de color "+Auto.Colores[1];

let Mansaje2 = `La marca del auto es ${Auto.Marcas[1]}  de color ${Auto.Colores[1]} `;

console.log(Mansaje2);

console.table(Auto);

/* 3. Operadores Aritmeticos */
let suma = 5 + 3;
let resta = 3-5;
let multi = 5*2;
let div = 8/2;
let mod = 10%3;
/* Comparación */
console.log(5 == "5"); /* igual debil */
console.log(5 === "5"); /* igual fuerte */
console.log(5 != "5"); /* false */
console.log(5 !== "5"); /* true */
console.log(5 > 3); /* True */
console.log(5 < 1); /* false */
/* Logicos */
/* && = AND */
/* || = OR */
console.log(true && false);
console.log(true || false);

/*4. Estructuras de control */

let pato = true;
if(pato = true){ /* Si */
    alert("Pato " +pato);
}else{ /* Si no */
    alert("No cumple");
};

let edad = 18;

if(edad >= 18){ /* Si */
    alert("Eres mayor de edad");
}else{ /* Si no */
    alert("Eres menor de edad");
};