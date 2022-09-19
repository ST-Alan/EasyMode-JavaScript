let btn1 = document.querySelector("#btnClck");
let btn2 = document.querySelector("#btnClck2");
let h2t = document.getElementById("h1-test")
let h3t = document.getElementById("h3-test")
let h4t = document.getElementById("h4-test")
let t = "elemento de prueba"

const evntClck = () => console.log("Esto es un click");

btn1.onclick = () => console.log("Esto es un click directo desde JS");

btn2.onclick = function prntScrn() {
    console.log("function | Esto es un click directo desde JS");
    document.querySelector("#print").innerHTML += "Esto es un mensaje creado con <b> function </b> y con <b> fat arrow </b>" + t
  }
//onclick con fat arrow
h2t.onclick=()=>{
    console.log("Hey Arnold")
  }
//onclick con función
h3t.onclick = function vrblH3(){
    console.log("Hey H3")
    h3t.innerHTML = `<h1>Cambiando el texto</h1>`
}
//onclick con función anónima
h4t.onclick = function(){
    console.log("Esto es h4")
}
