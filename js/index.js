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
      return alert("Usuario creado exitosamente.");
    } else {
      return alert(
        "Usuario o contraseña Incorrecto. Intentalo nuevamente.\nRecuerda que el usuario tiene u+legajo\n Y la contraseña tiene que ser de al menos 8 caracteres."
      );
    }
  }
}

const usuarios = [];
let disyuntiva = "";
do {
  let usuario = prompt("Ingresa tu usuario de lan");
  let password = prompt("Ingresa tu contraseña.");

  const usuarioNuevo = new Usuario(usuario, password);
  usuarioNuevo.exitosoLogeo();
  usuarios.push(usuario);

  disyuntiva = prompt(
    "¿Quiere crear un nuevo Usuario?\n SI para continuar\nESC para salir"
  );
} while (disyuntiva.toUpperCase() != "ESC");

for (let i = 0; i < usuarios.length; i++) {
  console.log(i + "-" + usuarios[i]);
}
console.log(usuarios.sort());
// usuarios.forEach((usuarioNuevo, i) => {
//   console.log(i + "-" + usuarioNuevo);
// });

// expreciones regulares.
