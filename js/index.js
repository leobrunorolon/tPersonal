// Ingreso de usuario y contraseña. usuario tiene que tener un length de 7 y includes "u". Contraseña debera tener al menos una letra mayuscula y tiene que ser al menos de 8 caracteres.

class Usuario {
  constructor(user, pass) {
    this.user = user;
    this.pass = pass;
  }
  userExitoso() {
    if (this.user.length == 7 && this.user.includes("u")) {
      return true;
    }
  }
  laClave() {
    if (this.pass.length >= 8) {
      return true;
    }
  }
  exitosoLogeo() {
    if (this.userExitoso() == true && this.laClave() == true) {
      return console.log("logeo exitoso");
    } else {
      return console.log(
        "Usuario o contraseña Incorrecto. Intentalo nuevamente."
      );
    }
  }
}

let usuario = prompt("Ingresa tu usuario de lan");
let password = prompt("Ingresa tu contraseña.");
const userUno = new Usuario(usuario, password);
userUno.exitosoLogeo();

// expreciones regulares.
