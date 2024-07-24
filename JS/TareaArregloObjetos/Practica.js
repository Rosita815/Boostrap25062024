let series = [
    { id: 1, Serie: "Ana", Categoria: "Drama", Temporadas: 2 },
    { id: 2, Serie: "Stranger Things", Categoria: "Ciencia Ficción", Temporadas: 4 },
    { id: 3, Serie: "The Crown", Categoria: "Historia", Temporadas: 5 },
    { id: 4, Serie: "La Casa de Papel", Categoria: "Crimen", Temporadas: 5 }
];
/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
function mostrarNombresSeries(datos) {
    datos.forEach(series => {
        console.log(series.Serie);
    });
}
mostrarNombresSeries(series)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function mostrarLongitudNombres(datos) {
    datos.forEach(series => {
        const longitud = series.Serie.length;
        console.log(`${series.Serie} tiene un longitud de: ${longitud}`);
    });
}
mostrarLongitudNombres(series)

/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */

function mostrarNombresMayusculas(datos) {
    datos.forEach(series => {
        const Mayuscula = series.Serie.toUpperCase();
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
    datos.forEach(series => {
        const subcadena = series.Serie.slice(inicio, final);
        console.log(`La subcadena del nombre de la serie "${series.Serie}" es: "${subcadena}"`);
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
verificarPalabraEnNombres(series, 'Alberto');