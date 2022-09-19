let nodo = document.getElementById("array")

const nombres = ["Pepe","Juan","Maria", "Luisa", "Carlos", "Lucas"]

const data = [1, true, false, -2, "Hola Mundo"]

nodo.innerHTML += `<p> ${nombres[0][2]} </p>`
nodo.innerHTML += `<p> ${nombres['0','2']} </p>`
nodo.innerHTML += `<p> ${nombres.length} </p>`
nodo.innerHTML += `<p> ${nombres} </p>`
console.log(nombres)

nodo.innerHTML += `<p> ${data[3]} </p>`
nodo.innerHTML += `<p> ${data[data.length-1]} </p>`
nodo.innerHTML += `<p> ${data.length} </p>`
console.log(data.length)

data.push("agrgar elemento")

// nodo.innerHTML = `<h3>${data}</h3>`