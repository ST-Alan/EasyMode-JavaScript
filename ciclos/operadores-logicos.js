// Solo para operadores lógicos
// && (AND)
// || (OR)
// ! (NOT)
//== Igual
//=== Estrictamente igual, compara, valores y si es del mismo tipo

// let hora = 12;

// if (hora < 18 && hora > 6){
//     document.write(`<p>Es de día</p>`)
// } else{
//     document.write(`<p>Es de noche</p>`)
// }

// document.write(`<p>Es de día</p>`);
let nombre = "Magaly"
let edad = 35
let estadoCivil = 'casada'
let numeroHijos = 2

if (edad < 30 && estadoCivil == 'soltera' && numeroHijos == 0){
    document.write(`Buen Día señorita ${nombre}<br><br><br>`)
} else {
    document.write(`Buen Día señora ${nombre} <br><br><br>`)
}

let nombre2 = "Magaly"
let edad2 = 29
let estadoCivil2 = 'casada'
let numeroHijos2 = 0

if (edad2 > 30 || estadoCivil2 == 'casada' || numeroHijos2 > 0){
    document.write(`Buen Día señora ${nombre2}`)
} else {
    document.write(`Buen Día señorita ${nombre2}`)
}