// Algoritmo que reciba dos argumentos y los sume. El resultado se debe imprimir en pantalla

function sumarNumeros(numero1, numero2){
    // Cuando se haga una función se debe tener en cuenta que casos pueden suceder
    // Eso se llama validación
    return Number(numero1) + Number(numero2)
}

let sumNum = sumarNumeros(5,8)

document.write(`La suma es: ${sumNum}`);