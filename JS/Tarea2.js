
/*  Práctica 1: Solicitud de Información */ 
function enviarSolicitud(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const resultado = document.getElementById("resultado");
    const copia = document.getElementById("copia").value;
    let respuesta;
    switch (copia) {
        case "si":
            respuesta = "Se enviará una copia de la solicitud a su correo electrónico.";
            break;
        case "no":
            respuesta = "No se enviará ninguna copia.";
            break;
        default:
            respuesta = "opcion no valido";
            break;
    }

   /*  alert(`El valor1 es ${Valor1} el valor 2 es ${Valor2}`) */

    resultado.textContent = `Nombre: ${nombre}, Correo: ${email}, Asunto: ${asunto}, Mensaje: ${mensaje}, Copia: ${respuesta}`
}

/* Práctica 2: Calculadora de IMC (Índice de Masa Corporal) */
function calcularIMC(event) {
    event.preventDefault();
    const resultado1 = document.getElementById("resultado1");
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    let calculo = peso / (altura * altura);

    resultado1.textContent = `El resultado es ${calculo}`;
}