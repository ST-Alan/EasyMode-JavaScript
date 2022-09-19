const persona = {
    Nombre: 'Alan',
    Apellido: 'Fermin',
    Edad: 33,
    Direccion:{
        Main1:{
            Country:"Ca",
            lat: 43.70011,
            lng: -79.4163,
        },
        Main2:{
            Country:"Ve",
            lat: 10.48801,
            lng: -66.87919,
        },
        Main3:{
            Country:"Pe",
            lat: -12.04318,
            lng: -77.02824,
        }, 
    }
}
const persona2 = {...persona}
persona2.Nombre = "Peter Pan"
// console.log(nombre: persona.nombre, persona.apellido, persona.edad)
console.log({nombre: persona.Nombre,
    apellido: persona.Apellido, 
    edad: persona.Edad
})

console.log({persona})
console.log({persona2})

// Es una mala práctica asignar persona2 = persona porque lo que se hace es que hay dos constantes utilizando el mismo espacio de memoria, entonces para evitar eso se debería colocar en este caso persona2 =  {todos los key/value nuevamente} es decir persona2 debería tener un espacio de memoria nuevo.

//Sin embargo, puede ser muy complicado hacerlo manual, entonces JS creó el operador spread "que son los 3 puntos", que se encarga de clonar o exportar los atributos de una constante.

//Para ello se utiliza los tres puntos seguidos de la constante ...nombreConstante