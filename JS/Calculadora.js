/* console.log("Funtion");

const Num1 = document.getElementById("Num1").value;
const Num2 = document.getElementById("Num2").value;
const Resultado = document.getElementById("Resultado"); */

/* function Sumar(event) {
    event.preventDefault();
    
    let calculo = parseFloat(Num1) + parseFloat(Num2);

    Resultado.textContent = `El resultado es ${calculo}`;
}

function Restar(event) {
    event.preventDefault();
    
    let calculo = parseFloat(Num1) - parseFloat(Num2);

    Resultado.textContent = `El resultado es ${calculo}`;
} */

function Calculadora2(event) {
    event.preventDefault();
    const Resultado = document.getElementById("Resultado");
    const Num1 = parseFloat(document.getElementById("Num1").value);
    const Num2 = parseFloat(document.getElementById("Num2").value);
    const operaciones = document.getElementById("operaciones").value;
    let calculo;
    switch (operaciones) {
        case "-":
            calculo = Num1 - Num2;
            break;
        case "+":
            calculo = Num1 + Num2;
            break;
        case "*":
            calculo = Num1 * Num2;
            break;
        case "/":
            calculo = Num1 / Num2;
            break;
        default:
            calculo = "Operacion no valido";
            break;
    }

    Resultado.textContent = `El resultado es ${calculo}`;
}