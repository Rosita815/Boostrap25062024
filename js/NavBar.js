
/* Componente NavBar */
document.addEventListener('DOMContentLoaded', () => {
    Mostar_NavBar();
})




function Mostar_NavBar() {
    /* let Opcion1 = "Inicio"
    let Opcion2 = "Listado de Productos"
    let Opcion3 = "Crear Producto"
    let Opcion4 = "Pagina de Mercadeo" */
    let Menu = {
        Nombre: "Inicio",
        Ruta: "Index.html"
    }
    let listadoMenu = [
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

/* Bucles o Ciclos */

    let Contenedor = document.getElementById('V_NavBar')
    let Plantilla = `<a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="${listadoMenu[0].Ruta}">${listadoMenu[0].Nombre} <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${listadoMenu[1].Ruta}">${listadoMenu[1].Nombre}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${listadoMenu[2].Ruta}">${listadoMenu[2].Nombre}</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="${listadoMenu[3].Ruta}">${listadoMenu[3].Nombre}</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownId">
                            <a class="dropdown-item" href="#">Action 1</a>
                            <a class="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="CerrarSesion()">Cerrar Sesion</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div> `
    Contenedor.innerHTML = Plantilla;
}


