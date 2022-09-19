let nodoPrincipal = document.getElementById("tablaMultiplicar")
function cantidadTablas(numero, numeroMultiplicar){
    let cantTablas = Number(numero)
    let cantidadFilas = Number(numeroMultiplicar)

    if(isNaN(numero, numeroMultiplicar)){
        alert("Ha ingresado un caracter no válido para el número de tablas")
        return
    }
    for (i = 1; i<=cantTablas; i++){
        nodoPrincipal.innerHTML += `<h2>Esta es la tabla del ${i}</h2>`
        for(j=0; j<=cantidadFilas; j++){
            nodoPrincipal.innerHTML += `<p>${i} x ${j} = ${i*j}</p>`
        }
    }
}

function mostrarTablas(){
    let botonTablas = document.getElementById("ingresarNumero").value
    let botonCantidad = document.getElementById("NumeroMultiplicar").value
    // console.log(botonCantidad, botonTablas)

    let resultado = cantidadTablas(botonTablas,botonCantidad)

    // nodoPrincipal.innerHTML += `<h2>Esta es la tabla del ${cantTablas}</h2>`
    // nodoPrincipal.innerHTML += `<p>${i} x ${j} = ${i*j}</p>` 
}