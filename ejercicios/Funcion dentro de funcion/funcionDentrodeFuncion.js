function calcularFactorial(numero) {
    const number = Number(numero)
    
    // ! El return aparte de retornar un valor da fin a la ejecución de la función
    if (isNaN(number)){
        return "Esto no se puede realizar porque no es un número"
    }
    let resultado = 1
    for (let i = 1; i <= numero; i++){
        resultado *= i
    }
return resultado
}


//I- Función
// function imprimirFactorial(){
//     const inputValor = document.getElementById("input_number").value
//     console.log(inputValor)
// }
// imprimirFactorial() 


//II- Función dentro de otra función
function imprimirFactorial(){
    const inputValor = document.getElementById("input_number").value
    const resultado = calcularFactorial(inputValor)

    const container = document.querySelector(".container")
    container.innerHTML += `<p>Factorial de ${inputValor} es: ${resultado} </p>`
    console.log (inputValor)
}