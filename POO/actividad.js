let variable = document.querySelector(".container")

class Carro{
    constructor(_color,_velocidad){
        this.color = _color
        this.velocidad = _velocidad
    }

    presentacion(){
        const texto =`Este carro es de color ${this.color}, y va a una velocidad de ${this.velocidad} km/h`
    }
}
