
/* ae -> para que me tire el formato eventlistener.
   Al Cargar el HTML Muestra la funcion*/

document.addEventListener('DOMContentLoaded', () => {
    Mostrar_Footer();
})

/* Opciones */
const Opciones_Footer = [
    { nombre: "Terminos y Condiciones", Ruta: "term.html", Activo: true },
    { nombre: "Politica de Privacidad", Ruta: "privacidad.html", Activo: true },
    { nombre: "Contacto", Ruta: "contacto.html", Activo: true }
];

/* Funcion para footer */
function Mostrar_Footer() {
    let Contenedor = document.getElementById('V_Lista_Footer');
    let Plantilla;

    Opciones_Footer.forEach(element => {
        if (element.Activo) {
            Plantilla += `
            <li class="list-inline-item">
                <a href="${element.Ruta}" class="text-white">${element.nombre}</a>
            </li>`
        }
       
        
    });
  

    Contenedor.innerHTML = Plantilla

}


/* function Datos_Footer(Opciones_Footer) {

} */