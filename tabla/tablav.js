let result = document.querySelector('.resultadosi')
let numero = Number(prompt('insertenumero'))
let multiplo = Number(prompt('insertenumero'))

for (i=0;i<numero; i++){
    result.innerHTML += `<h2>Esta es la tabla del ${i}<h2>`
    for(j= 0; j<multiplo; j++){
        result.innerHTML += `<p>${j} x ${i} = ${j*i}</p>`
    }
}

//><
let resulti = document.getElementById('title')
let numeroi = 15

resulti.innerHTML += `<h2>Esta es la tabla del 20</h2>`
for (let i=0; i<20; i++){
    resulti.innerHTML += `<p>${i} x ${numeroi} = ${i*numeroi}</p>`

}