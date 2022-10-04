// container:
const container = document.getElementById("container")
//Objetos
//*Aquí creo la clase
class Carro {
//*Aquí se crean los atributos/parámetros/propiedades color y el atributo velocidad
    constructor(_color, _velocidad){
        this.color=_color
        this.velocidad = _velocidad
    }
//*En este caso declaro un solo método llamado presentación
    presentacion(){
//* Se usa la palabra reservada this para acceder a los atributos
        const texto = `Hola soy un carro de color ${this.color} y tengo una velocidad de ${this.velocidad} km/h`
        return texto
    }
}
//*Ahora se crean los carros con el método constructor
//Instancio el objeto con la palabra reservada new y el nombre de la clase. Luego se le envía el valor al constructor del carro.
const carro_rojo = new Carro("Verde", 200)
const carro_azul = new Carro("turquesa", 60)