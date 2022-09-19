// container:
const container = document.getElementById("container")
//Objetos
class Carro {
    constructor(_color, _velocidad){
        this.color=_color
        this.velocidad = _velocidad
    }
    presentacion(){
        const texto = `Hola soy un carro de color ${this.color} y tengo una velocidad de ${this.velocidad}`
        return texto
    }
}

const carro_rojo = new Carro("Verde", 200)
const carro_azul = new Carro("turquesa", 60)