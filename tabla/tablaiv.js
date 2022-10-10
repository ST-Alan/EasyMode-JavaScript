let tablas = []

let form =  document.querySelector('#formTabla')

form.onsubmit = (e)=>{
    e.preventDefault()

let formData = new FormData(e.target)

console.log(formData)

let tabla ={}

for (let input of formData.entries()){
    console.log(input)
tabla[input[0]] = input[1]

}
console.log(tabla)
}