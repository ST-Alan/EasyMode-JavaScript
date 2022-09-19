let resultado = 1
function calcularFactorial(numero) {
    const number = Number(numero)

// ! El return aparte de retornar un valor da fin a la ejecución de la función
    if (isNaN(number)){
        return "Esto no se puede realizar porque no es un número"
    }

    for (let i = 1; i <= numero; i++){
        resultado *= i
    }
    
return resultado
}

console.log(calcularFactorial(6))