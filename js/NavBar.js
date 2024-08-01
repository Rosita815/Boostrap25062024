
/* Componente NavBar */
document.addEventListener('DOMContentLoaded', () => {
    Mostar_NavBar();
})

const ListadoMenu = [
    {
        Nombre: "Inicio",
        Ruta: "Index.html"
    },
    {
        Nombre: "Listado de Productos",
        Ruta: "List-Products.html"
    },
    {
        Nombre: "Crear Producto",
        Ruta: "New-Product.html"
    },
    {
        Nombre: "Pagina de Mercadeo",
        Ruta: "#"
    },
]


function Mostar_NavBar() {
 
    let Contenedor = document.getElementById('V_NavBar')
    let Plantilla = `<a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id=Nav_LI>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div> `
    Contenedor.innerHTML = Plantilla;
    Datos_LI(ListadoMenu)
}


function Datos_LI(datos) {
    let contenedor2 = document.getElementById("Nav_LI")
    datos.forEach(element => {
        contenedor2.innerHTML += `
         <li class="nav-item active">
            <a class="nav-link" href="${element.Ruta}">${element.Nombre} <span class="sr-only">(current)</span></a>
         </li>
        `
    });
}