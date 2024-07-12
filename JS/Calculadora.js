console.log("Funtion");

function Sumar(event) {
    event.preventDefault();
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;
    const Resultado = document.getElementById("Resultado");
    
    let calculo = parseFloat(Num1) + parseFloat(Num2);

    Resultado.textContent = `El resultado es ${calculo}`;
}

function Restar(event) {
    event.preventDefault();
    const Num1 = document.getElementById("Num1").value;
    const Num2 = document.getElementById("Num2").value;
    const Resultado = document.getElementById("Resultado");
    
    let calculo = parseFloat(Num1) - parseFloat(Num2);

    Resultado.textContent = `El resultado es ${calculo}`;
}