// Objeto dinámico - También existen objetos literales que no tienen constructores
class Users{
    //El constructor es donde se definen los parámetros y dentro del constructor están las propiedades
    constructor(_cliente, _vendedor,_gerente){
        // Los parámetros son asignados a las propiedades del objeto
        // La palabra reservada "this" es lo que se usa para suplantar el nombre de la clase. Es decir this.cliente, podría ser Users.cliente
        // Estas no son variables sino que corresponden a lo que en un objeto literal sería "key":"value"
        this.cliente = _cliente
        this.vendedor = _vendedor
        this.gerente = _gerente
    }
//Estas funciones son métodos del objeto
    saludoGerencial(){
        let saludo = `Buen día ${gerente}, recuerda que motivar al equipo de trabajo y tener empatía es la mejor forma de avanzar con la compañía. Todo gerente debe tener presente que los problemas de lejos se evitan y de cerca se confrontan`
        return saludo
    }
    saludoVendedor(){
        let saludoV = `¡Hola ${vendedor}, eres parte fundamental de esta empresa. Ostentas un cargo que forma parte de la medula espinal de la empresa. Si bien todos los cargos son importantes, es gracias a tí y tus compañeros que se generan los ingresos para mas de 800 familias!`
        return saludoV
    }
    saludoCliente(){
        let saludoC = `<h2>Buen día <u> ${this.cliente}</u>, de parte del gerente ${this.gerente} y en nombre de todo nuestro equipo le damos la más cordial bienvenida. Esperamos que se encuentre muy bien usted. Le recordamos que su asesor ${this.vendedor} estará disponible para acompañarle y apoyarle en todo el proceso.</h2>`
        return saludoC
    }
//Los setter y getter son funciones como todas las demás pero por buenas prácticas se usan para insertar o extraer valores de un objeto
    setCliente(_cliente){
        if(_cliente === 'Jose'){
            return;
        }
        this.cliente = 'Paulo'
    }

    setGerente(_gerente){
        this.gerente = `Sr (a). ${_gerente} `
    }

}

//Con new se crea la instancia para crear un objeto real de la clase.
const saludo_gerente = new Users('Alan', 'Alí', 'Fermin')

saludo_gerente.cliente='Jose'
saludo_gerente.setCliente()
saludo_gerente.setGerente('Ali')

let variable = document.querySelector('#container')

variable.innerHTML += `${saludo_gerente.saludoCliente()}`