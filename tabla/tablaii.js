let tablaMultiplicar = []

let form = document.querySelector('#formularioTabla')

form.onsubmit=(e)=>{
e.preventDefault()


console.log('e',e)
console.log('e.target',e.target)
console.log('e.target.value',e.target.value)

let el = new FormData()
let elemen = new FormData(e.target).entries()
let formData = new FormData(e.target)

console.log ('el', el) //"el" y "formData" arrojan los mismos resultados Prototipe, append, delete, forEach, entries
console.log ('element', elemen)// "este y formData.entries" arrojan el mismo resultado: "Iterator"
console.log ('formData', formData)//"el" y "formData" arrojan los mismos resultados Prototipe, append, delete, forEach, entries
console.log ('formData.entries', formData.entries()) // este y "element" arrojan el mismo resultado: "Iterator"


//Creo 3 objetos para hacer diversas pruebas con los for of
let tabla= {}
let tablas= {}
let tablita = {}
//Si dentro del FormData no tiene el e.target o evento.target no funciona
for (let datos of elemen){
    console.log('datos elemen',datos)
}
for (let datos of formData.entries()){
    console.log('datos formData.entries()',datos)

    tablas[datos[0]] = datos[1]
}
for (let datos of formData){
    console.log('datos formData',datos)
    // tablita.datos[0] = datos[1]
}
for (let [key,value] of formData){
    console.log('[key,value] formData:', key, ':' , value )
    tabla.key = value
}
for (let datos of formData){
    console.log('datos[0]    key:',datos[0])
    console.log('datos[1]    Value: ',datos[1])
    console.log('-------------------')
}

//Voy a agregar un key:value de dos formas distintas un objeto para probar
//Forma1
const objetoPrueba = {}
objetoPrueba.CI = 18603683
console.log('objetoPrueba', objetoPrueba)
// Forma2
console.log("-----------------------------")
objetoPrueba["Dirección"]= "Las Manoas 84"
objetoPrueba["Whatsapp"]= 992912010
console.log('objetoPrueba', objetoPrueba)



}