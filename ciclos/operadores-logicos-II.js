const nota = Number(prompt("Inserte la nota"));

let mensaje = "";
// Cualquiera de las dos son válidas
// if (nota < 13) {
//   document.write(`<p>Debe mejorar</p>`);
// } else if (nota > 15) {
//   document.write(`<p>Estudiante promedio</p>`);
// } else if (nota > 18) {
//   document.write(`<p>Estudiante sobresaliente</p> `);
// } else if (nota == 20) {
//   document.write(`<p style="color:red">¡Tenemos un Genio!</p>`);
// }
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