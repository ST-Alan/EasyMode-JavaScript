//Capturar los datos de nuestro formulario y guardarlos
const users = []

const form = document.querySelector("#form-store-user")

// Vamos a agregar el evento onsubmit

// ! Nota el evento onsubmit tiene una propiedad la cual nos da un parámetro que está implícito, este parámetro contiene la información del evento y este evento se suele llamar event o e

//Lo que está dentro de un paréntesis de una función anónima se llama parámetro, es decir event o e son parámetros

form.onsubmit = (e)=>{
    // * Un formulario al tener el evento submit va a recargar la página
    //? Para evitar que el evento onsubmit recargue la página podemos usar el evento.preventDefault() esta función bloquea la acción de recargar la página
    e.preventDefault()
    console.log(e.target)
    console.log(e.target[0])
    console.log(e.target[0].value)
}