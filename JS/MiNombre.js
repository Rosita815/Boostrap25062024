console.log("Funcionando");

/* Formulario Nombre y Apellido
Y darle click, Mostrar en un Div */

function Guardar() {

  const Formulario = document.getElementById("Formulario");
  const Valor1 = document.getElementById("Valor1").value;
  const Valor2 = document.getElementById("Valor2").value;
  const ValorRespuesta = document.getElementById("ValorRespuesta");

  alert(`El valor1 es ${Valor1} el valor 2 es ${Valor2}`)

  ValorRespuesta.textContent = `El valor1 es ${Valor1} el valor 2 es ${Valor2}`
 debugger
}