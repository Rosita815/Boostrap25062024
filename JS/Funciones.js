/* 5. Funciones 
Funciones Simple
Funcion con Argumentos
Anonimas
Return
Modernas
*/

/* Invocando la funcion */
Saludo();

/* Creando */
function Saludo(){
    console.log("Hola a Todos");
};

function ConsultarProductos() {
    console.log("Consultando Productos .....");
};

function InsertarProductos() {
    console.log("Insertar Productos.....");
};

function IniciarSesion() {
    let nombre = "Pepe";
    let pass = 1234;

    if(nombre=="Pepe" && pass == 1234){
        alert("Bienvenido...");
    }else{
        alert("No cumple con las condiciones.");
    };
    
};