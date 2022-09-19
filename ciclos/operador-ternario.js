// let hora = 18;

// let cielo;

// if (hora < 18 && hora > 6) {
//   cielo = "dia";
// } else {
//   cielo = "noche";
// }

// document.write(`<p>Son las ${hora} horas y es de ${cielo}</p>`);
let hora;
// Operadores ternarios
// El if se cambia por el ? el else se cambia del :
// Cualquieras de las dos líneas de abajo me funciona
// let cielo = (hora < 18 && hora > 6) ? "dia" : "noche";
(hora < 18 && hora > 6) ? cielo ="dia" : cielo = "noche";

document.write(`Son las ${hora} y es de ${cielo}`)
document.write(`<hr>`)