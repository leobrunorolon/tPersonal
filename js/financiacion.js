/*
 *Lo que intento realizar es una herramienta que me sirva para la diaria, la cual me hara los calculos correspondientes al paga con tarjeta y su correpondiente interes si corresponde, la idea es divivirlas por tarjeta luego por cuotas, tener un espacio de memoria de consultas anteriores, agregar una etiqueta con el nombre si es posible, para luego armarla como una especie de cotizador, el cual se podra imprimir si el cliente o el representante lo necesita.
 * Realizar tabla de calculo segun los datos de los coeficientes que son constante,
 */
// array prueba con tarjeta para englobarlas posicion tarjetas 0=cuotas z/ 1=cuotas 3/ 2=cuotas 6/ 3=cuotas 9/ 4 = cuotas 12 /5 = cuotas 18.
const visaTarjeta = [0, 1, 1, 0, 1.172064, 1.383348];
const mastercardTarjeta = [0, 1, 1, 0, 1.155376, 1.355931];
const solTarjeta = [0, 1, 1.231673, 0, 1.231673, 1.442347];
const naranjaTarjeta = [1.128409, 0, 1, 0, 0, 0];
const dpfTarjeta = [0, 1, 1.074, 1.1424, 1.2143, 0];

// impuestos
const impIndividuo = Number(1);
const impEmpresa = Number(1.33);

/*
 * Funciones, datos que necesito procesar de la mejor forma, estaba pensando en realizarlo por tarjeta ya que es mi dato clave, para el cambio de coeficiente.
 */
// Funcion para optener la diferencia
class Tabla {
  constructor(precio, condImp, tarjeta, cuotas) {
    this.precio = precio;
    this.condImp = condImp;
    this.tarjeta = tarjeta;
    this.cuotas = cuotas;

    this.total = 0;
    this.totalInteres = 0;
    this.totalCuotas = 0;
  }
  precioTotal() {
    if (this.condImp == "EMPRESA") {
      this.precio = this.precio * impEmpresa;
      return this.precio;
    } else if (this.condImp == "INDIVIDUO") {
      this.precio = this.precio * impIndividuo;
      return this.precio;
    }
    /*probando como hacer  para que salgan todas en all*/
    switch (this.tarjeta) {
      case 1: {
        if (this.cuotas == 1) {
          for (let i = 0; i < visaTarjeta.length; i++) {
            this.total = this.precio * visaTarjeta[i];
            document.write("$" + this.total + "<br>");
            this.diferencia();
            this.lasCuotas();
          }
          break;
        } else if (this.cuotas == 2) {
          this.total = this.precio * visaTarjeta[0];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 3) {
          this.total = this.precio * visaTarjeta[1];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 6) {
          this.total = this.precio * visaTarjeta[2];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 9) {
          this.total = this.precio * visaTarjeta[3];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 12) {
          this.total = this.precio * visaTarjeta[4];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 18) {
          this.total = this.precio * visaTarjeta[5];
          document.write("$" + this.total);
          break;
        }
      }

      case 2: {
        if (this.cuotas == 1) {
          for (let i = 0; i < mastercardTarjeta.length; i++)
            this.total = this.precio * mastercardTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 2) {
          this.total = this.precio * mastercardTarjeta[0];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 3) {
          this.total = this.precio * mastercardTarjeta[1];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 6) {
          this.total = this.precio * mastercardTarjeta[2];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 9) {
          this.total = this.precio * mastercardTarjeta[3];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 12) {
          this.total = this.precio * mastercardTarjeta[4];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 18) {
          this.total = this.precio * mastercardTarjeta[5];
          document.write("$" + this.total);
          break;
        }
      }

      case 3: {
        if (this.cuotas == 1) {
          for (let i = 0; i < solTarjeta.length; i++)
            this.total = this.precio * solTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 2) {
          this.total = this.precio * solTarjeta[0];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 3) {
          this.total = this.precio * solTarjeta[1];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 6) {
          this.total = this.precio * solTarjeta[2];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 9) {
          this.total = this.precio * solTarjeta[3];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 12) {
          this.total = this.precio * visaTarjeta[4];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 18) {
          this.total = this.precio * solTarjeta[5];
          document.write("$" + this.total);
          break;
        }
      }

      case 4: {
        if (this.cuotas == 1) {
          for (let i = 0; i < naranjaTarjeta.length; i++)
            this.total = this.precio * naranjaTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 2) {
          this.total = this.precio * naranjaTarjeta[0];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 3) {
          this.total = this.precio * naranjaTarjeta[1];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 6) {
          this.total = this.precio * naranjaTarjeta[2];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 9) {
          this.total = this.precio * naranjaTarjeta[3];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 12) {
          this.total = this.precio * naranjaTarjeta[4];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 18) {
          this.total = this.precio * naranjaTarjeta[5];
          document.write("$" + this.total);
          break;
        }
      }

      case 5: {
        if (this.cuotas == 1) {
          for (let i = 0; i < dpfTarjeta.length; i++)
            this.total = this.precio * dpfTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 2) {
          this.total = this.precio * dpfTarjeta[0];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 3) {
          this.total = this.precio * dpfTarjeta[1];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 6) {
          this.total = this.precio * dpfTarjeta[2];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 9) {
          this.total = this.precio * dpfTarjeta[3];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 12) {
          this.total = this.precio * dpfTarjeta[4];
          document.write("$" + this.total);
          break;
        } else if (this.cuotas == 18) {
          this.total = this.precio * dpfTarjeta[5];
          document.write("$" + this.total);
          break;
        }
      }

      default: {
        console.error("operacion invalida");
        break;
      }
    }
  }
  diferencia() {
    this.totalInteres = this.total - this.precio;
    document.write("El total de interes es: " + this.totalInteres);
  }
  lasCuotas() {
    this.totalCuotas = this.total / this.cuotas;
    document.write(`Las cuotas son ${this.cuotas} de $ ${this.totalCuotas}`);
  }
}

const precioEquipo = [];
let disyuntiva = "";

do {
  let precio = Number(prompt("Ingresa el precio del Equipo"));
  let condImp = Number(
    prompt("Ingresa condicion impositiva\n 1 EMPRESA\n 2 INDIVIDUO")
  );
  let tarjeta = Number(
    prompt(
      "Ingresa el medio de pago\n 1 VISA\n 2 MASTERCARD\n 3NARANJA\n 4 SOL\n 5 DPF"
    )
  );
  let cuotas = Number(
    prompt("Ingresa el numero de cuotas\n 1 All\n 2 Z\n3\n6\n12\n18")
  );

  const nuevaConsulta = new Tabla(precio, condImp, tarjeta, cuotas);
  nuevaConsulta.precioTotal();
  nuevaConsulta.diferencia();
  nuevaConsulta.lasCuotas();
  precioEquipo.push(precio);

  disyuntiva = prompt(
    "¿Quiere crear un nuevo Usuario?\n SI para continuar\nESC para salir"
  );
} while (disyuntiva.toUpperCase() != "ESC");

for (let i = 0; i < precioEquipo.length; i++) {
  console.log(i + "-" + precioEquipo[i]);
}
