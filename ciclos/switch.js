document.write(`<h1>Switch</h1>`);
// Switch
// Problema: En base a la nota escribir un mensaje

// nota<13 ="Debe mejorar"
// nota>15 = "Alumno promedio"
// nota>18 = "Alumno sobresaliente"
// nota==20 = "Alumno genio"

const nota = Number(prompt("Inserte la nota"));
let mensaje = "";
if (nota < 13) {
    mensaje = `<p>Debe mejorar</p>`;
  } 
  else if (nota >= 14 && nota <=17) {
    mensaje = `<p>Estudiante promedio</p>`;
  } 
  else if (nota >= 18 && nota <=19) {
    mensaje = `<p>Estudiante sobresaliente</p>`;
  } else if (nota == 20) {
    mensaje = `<p style="color:red">¡Tenemos un Genio!</p>`;
}

document.write(`${mensaje }`)

switch (nota){
    case 0:
    case 13:
        mensaje = `<p>Debe mejorar</p>`
        break;
    case 14:
    case 17:
        mensaje = `<p>Estudiante promedio</p>`
        break;
    case 18:
    case 19:
        mensaje = `<p>Estudiante sobresaliente</p>`
    case 20:
        mensaje = `<p style="color:red">¡Tenemos un Genio!</p>`;
        break;  
}
document.write(`${mensaje}`)