let tablas =[]

let form = document.querySelector('#formTabla')
// console.log(form)
form.onsubmit=(e)=>{
    
    e.preventDefault()

    // console.log('e',e.target)
let tabla = {}


let formData = new FormData(e.target)
console.log(formData)

for (let input of formData.entries()){
    console.log(input)
    tabla[input[0]] = input[1]
}









}