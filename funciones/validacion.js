function sumarNumeros(numero1, numero2){
    const n1=Number(numero1)
    const n2=Number(numero2)

    if (isNaN(n1) || isNaN(n2)){
        return "no se pueden sumar"
    }
    return n1+n2

}
document.write(`La suma es: ${sumarNumeros(true,32)}`);