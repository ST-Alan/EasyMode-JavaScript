let nodoPrincipal = document.getElementById("tablaMultiplicar")
function tablaUnica(tabla,num){
    let numTabla = Number(tabla)
    let numero = Number(num)
    if(isNaN(numTabla,numero)){
        nodoPrincipal.innerHTML+="<br> <h3>Debe ingresar un número para hacer la operación</h3>"
        return
    }
    nodoPrincipal.innerHTML += `<h2>Esta es la tabla del ${numTabla}</h2>`
    for(i=0; i<= numero; i++){
        nodoPrincipal.innerHTML += `<p>${numTabla} x ${i} = ${numTabla * i}</p>`
    }
}

function mostrarTabla(){
    let numeroTabla = document.getElementById("tablaNumero").value
    let numeroAMultiplicar = document.getElementById("numeroMult").value

    let resultado = tablaUnica(numeroTabla,numeroAMultiplicar)
}