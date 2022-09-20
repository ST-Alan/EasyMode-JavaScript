// El name de un formulario es el id con el cual se puede identificar cada input cuando se envía la información
// El name es el nombre de un input


// Acá almaceno el lugar donde voy a mostrar la tabla
let resultados =  document.querySelectorAll(".resultados")

// Se captura los datos del formulario y se guarda en un array de objetos,.
const datosForm = []

const form = document.querySelector("#formTabla")


//Ahora se agrega el evento onsubmit
//! El evento onsubmit tiene una propiedad especial la cual da un parámetro que está implícito
//! Este parámetro contiene la información del evento y se suele llamar event o e

form.onsubmit = (event) => {
    //*NOTA: UN FORMULARIO al tener el evento submit va a recargar la página.
    //? Para evitar que el evento onsubmit recargue la página podemos usar el evento: event.preventDefault()
    event.preventDefault()
    console.log(event)
    console.log(event.target)
}

