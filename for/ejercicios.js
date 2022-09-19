// Si un número sólo es divisible por si mismo y por la unidad es un número primo.
// Ejemplo:
// 17 % 17 = 0
// 17 % 1 = 0
// 17 % 2= 1
// 17 % 3= 2


let e = document.getElementById("elementFor");

e.innerHTML = `<h1>Ejercicios Bucles</h1>`;

const numero = 6;

e.innerHTML = `<h1>Factorial de ${numero}</h1>`;

let factorial = 1;

for (i = 1; i <= numero; i++) {
    factorial *= i
}

e.innerHTML += `<p> <b>Resultado:</b>  ${factorial}</p>`
e.innerHTML += `<hr>`
let ex = document.getElementById("ex")
e.innerHTML += `<h2>Reto</h2> <br> <p>Imprimir solo los números que terminen en 7</p>`

let num = 100
let reto = 1
for (i = 0; i < num; i++){
    if(i == 7 || i == 17 || i== 27 || i == 37 || i == 47|| i== 57 || i == 67 || i == 77 || i== 87){
        ex.innerHTML += `${i + 10} <hr>`
    }
}
ex.innerHTML = `<hr>`

// for(i = 0; i > num; i++){
//     ex.innerHTML = ``
// }