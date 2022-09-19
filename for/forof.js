// El for of captura el valor del elemento. Estructura de control para recorrer objetos iterables (Array, String, Map, Set, custom_objects)
let e = document.getElementById("elementFor")
let arreglos = ["Categoria", 1, true, "SubCategorías"]

for (let arreglo of arreglos){
    e. innerHTML += `<h2>Elemento: <u>${arreglo}</u></h2>`
}

let cadena = "Amo Programar"

for (let caracter of cadena)
{
    if(caracter == " ") continue
    e. innerHTML += `<h2>- ${caracter}</h2>`
}

let estudiantes = ["José", "Jesús", "Gregorio", "Pedro", "Manuel"]

for (estudiante of estudiantes){
    console.log(estudiante)
    e. innerHTML += `<h2>- ${estudiante}</h2>`
}