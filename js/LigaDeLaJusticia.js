console.log("Funciona");
/* 1--Evento que carga la funcion cuando el DOM este en la pagina */
/* Control + space -> Para que salgan los eventos*/
document.addEventListener('DOMContentLoaded',()=>{
    Mostrar_LigaDeLaJusticia(Heroes) 
})

/* 2--Arreglo de objetos */
const Heroes = [{
    nombre: "Aquaman",
    bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
    img: "img/aquaman.png",
    casa: "DC"
  },
  {
    nombre: "Batman",
    bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
    img: "img/batman.png",
    casa: "DC"
  },
  {
    nombre: "Superman",
    bio: "Superman es un superhéroe ficticio que aparece en los cómics publicados por DC Comics. Es uno de los personajes de ficción más populares del siglo XX.",
    img: "img/superman.png",
    casa: "DC"
  },
  {
    nombre: "Wonder Woman",
    bio: "Es una superheroína ficticia creada por el psicólogo y escritor William Moulton Marston para la editorial DC Comics. Sus historias se centran en los ideales del amor, paz y sexualidad.",
    img: "img/wonder_woman.png",
    casa: "DC"
  }]


/* 3 --Funcion que muestra los heroes
A. -ID del contenedor
B. -Plantilla
C. -Ciclo de la parte 2 (2- Arreglo de Objetos)
D Meter la Plantilla en el contenedor*/
function Mostrar_LigaDeLaJusticia(Heroes){ /* Se llama Firma */
  /*   let Contenedor = document.getElementById('');*/
  let Plantilla = "";
    Heroes.forEach(element => {
        if (element) {
            Plantilla += `
            Nombre: ${element.nombre}, bio:${element.bio}`
        }
       
        
    });
  
    /* Contenedor.innerHTML = Plantilla */
    alert(Plantilla)
}

    

    