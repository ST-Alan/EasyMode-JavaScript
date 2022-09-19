// Captura el índice de los elementos dentro de un array. Estructura de control para recorrer objetos iterables (Array, String, Map, Set, custom_objects)
// Para el array captura el index
// Para el objeto captura la propiedad
//También captura el key, pero no recuerdo cuál


let el = document.getElementById("elementForin")
let granja = ["Piñas pequeña", "Piñas mediana", "Piñas grande"]

for (let piña in granja){
    el.innerHTML += `<p>El índice corresponde al número:<i> ${piña}</i></p>`
}

// Si se desea imprimir los valores con forin se hace de la siguiente forma:

for (let piña in granja){
    el.innerHTML += `<p>El índice corresponde a:<i> ${granja[piña]}</i></p>`
}
