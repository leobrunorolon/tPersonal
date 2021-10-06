// Ingreso de usuario y contraseña. usuario tiene que tener un length de 7 y includes "u". Contraseña debera tener al menos una letra mayuscula y tiene que ser al menos de 8 caracteres.
// funciones
function user(elDato) {
  if (elDato.length == 7 && elDato.includes("u")) {
    return true;
  }
  return false;
}
// todavia no se como hacer que verifique si por lo menos tiene una mayuscula.
function clave(password) {
  if (password.length >= 8) {
    return true;
  }
  return false;
}
// variables

let usuario = prompt("Ingresa tu usuario de lan");
let pass = prompt("Ingresa tu contraseña.");
// validacion

if (user(usuario)) {
  console.log("Usuario correcto");
}
console.error;

if (clave(pass)) {
  console.log("Contraseña exitosa");
}
console.error;
