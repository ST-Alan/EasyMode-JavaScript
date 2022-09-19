let bod = document.getElementById('jj')
// console.log(bod)
frutas = ["pera", "manzana", "cambur", "fresa", "mango"]
dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"]

for (i = 0; i < frutas.length; i++){
    bod.innerHTML += `<p>El dia ${dias[i]} toca comer ${frutas[i]}</p> <hr>`
}

for (i = 0; i < frutas.length; i++){
    bod.innerHTML += `<p>Frutas: ${frutas[i]}</p>`
}

for (i = 0; i < frutas.length; i++){
    bod.innerHTML += `<p>Frutas: ${frutas}</p> <hr>`
}