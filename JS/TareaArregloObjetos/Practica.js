let personas = [
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Juan"  },
    { id: 3, nombre: "Pedro"},
    { id: 4, nombre: "Juana"},
    
];

let animales = [
    { id: 1, nombre: "Lolo", apellido: "Drama", edad: 2 },
    { id: 2, nombre: "Firulai", apellido: "Drama", edad: 2 },
    { id: 3, nombre: "Manchas", apellido: "Drama", edad: 2 },
    { id: 4, nombre: "Bruno", apellido: "Drama", edad: 2 },
    
];

let plantas = [
    { id: 1, nombre: "Menta", apellido: "Drama", edad: 2 },
    { id: 2, nombre: "Pastora", apellido: "Drama", edad: 2 },
    { id: 3, nombre: "Rosa", apellido: "Drama", edad: 2 },
    { id: 4, nombre: "Veranera", apellido: "Drama", edad: 2 },
];

function mostrarNombres(datos) {
    datos.forEach(element => {
        console.log(element.nombre);
    });
}

// Ejemplo de uso:
mostrarNombres(personas);
mostrarNombres(animales);
mostrarNombres(plantas);


/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];


/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
function mostrarNombresSeries(series) {
    series.forEach(element => {
        console.log(element.Serie);
    });
}
mostrarNombresSeries(series)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function mostrarLongitudNombres(datos) {
    datos.forEach(element => {
        const longitud = element.Serie.length;
        console.log(`${element.Serie} tiene un longitud de: ${longitud}`);
    });
}
mostrarLongitudNombres(series)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function mostrarNombresMayusculas(series) {
    series.forEach(element => {
        const Mayuscula = element.Serie.toUpperCase();
        console.log(Mayuscula);
    });
}
mostrarNombresMayusculas(series)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function mostrarNombresMinusculas(datos) {
    datos.forEach(series => {
        const Minuscula = series.Serie.toLowerCase();
        console.log(Minuscula);
    });
}
mostrarNombresMinusculas(series)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function encontrarSeriePorNombre(datos,nombre) {
    let serieEncontrada = datos.find(series => series.Serie === nombre);

    if (serieEncontrada) {
        console.log(`La serie "${nombre}" fue encontrada:`, serieEncontrada);
    } else {
        console.log(`La serie "${nombre}" no fue encontrada.`);
    }
}
encontrarSeriePorNombre(series,"Stranger Things")

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function agregarSerie(datos,nuevaSerie) {
    datos.push(nuevaSerie);
    console.log(`Ingreso serie nueva: ${nuevaSerie}`);
}
agregarSerie(series,"Masacre Texas")

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function extraerSubcadenaNombres(datos, inicio, final) {
    datos.forEach(element => {
        const subcadena = element.Serie.slice(inicio, final);
        console.log(`La subcadena del nombre de la serie "${element.Serie}" es: "${subcadena}"`);
    });
}
extraerSubcadenaNombres(series, 0, 4);

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function reemplazarPalabraNombres(datos, buscar, reemplazar) {
    datos.forEach(series => {
        const reemplazarPalabra = series.Serie.replace(buscar, reemplazar);
        console.log(`El nombre modificado de la serie "${series.Serie}" es: "${reemplazarPalabra}"`);
    });
}
reemplazarPalabraNombres(series, 'Ana', 'Alberto');

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function verificarPalabraEnNombres(datos, palabra) {
    datos.forEach(series => {
        const contienePalabra = series.Serie.includes(palabra);
        if (contienePalabra) {
            console.log(`El nombre de la serie "${series.Serie}" contiene la palabra "${palabra}".`);
        } else {
            console.log(`El nombre de la serie "${series.Serie}" no contiene la palabra "${palabra}".`);
        }
    });
}

verificarPalabraEnNombres(series, 'Things');
/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

