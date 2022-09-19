// El módulo es el operador de una división
// Una división tiene:
// Dividendo
// Divisor
// Cociente
// Residuo  o Resto:trabaja con el operador módulo "%", el porcentaje

let div = document.getElementById("division")

div.innerHTML = `<h2>División</h2>`
const dividendo = 17
const divisor =  3
let cociente = dividendo / divisor
let residuo = dividendo % divisor
div.innerHTML = `<hr>`
div.innerHTML += `<p>Dividendo: ${dividendo}</p>`
div.innerHTML += `<p>Divisor: ${divisor}</p>`
div.innerHTML += `<p>Cociente: ${cociente}</p>`
div.innerHTML += `<p>Residuo: ${residuo}</p>`

const cantidad_primos = 25
let numPrim;
for (i = 2; i < cantidad_primos; i++){
    if( cantidad_primos % i !== 0){                              

        div.innerHTML +=`Primeros 25 números primos: <br> ${numPrim}`
    }
}