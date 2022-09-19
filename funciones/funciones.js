
// Funciones puras e impuras
// Funciones puras retornan un valor
// Funciones impuras no retornan un valor


let e = document.getElementById("function")

function nombredelafuncion(){
    let estudiantes = ["José", "Jesús", "Gregorio", "Pedro", "Manuel"]
    for (estudiante of estudiantes){
        console.log(estudiante)
        e.innerHTML += `<h2>- ${estudiante}</h2>`
    }
}

nombredelafuncion();


function cuboDeunNumero(numero, potencia){
    return Math.pow(numero,potencia);
}

const resultado = cuboDeunNumero(2,3);

console.log("resultado", resultado)