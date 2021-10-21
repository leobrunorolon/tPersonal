/*
 *Lo que intento realizar es una herramienta que me sirva para la diaria, la cual me hara los calculos correspondientes al paga con tarjeta y su correpondiente interes si corresponde, la idea es divivirlas por tarjeta luego por cuotas, tener un espacio de memoria de consultas anteriores, agregar una etiqueta con el nombre si es posible, para luego armarla como una especie de cotizador, el cual se podra imprimir si el cliente o el representante lo necesita.
 * Realizar tabla de calculo segun los datos de los coeficientes que son constante,
 */
// array prueba con tarjeta para englobarlas posicion tarjetas 0=cuotas z/ 1=cuotas 3/ 2=cuotas 6/ 3=cuotas 9/ 4 = cuotas 12 /5 = cuotas 18.
const visaTarjeta = [undefined, 1, 1, undefined, 1.172064, 1.383348];
const mastercardTarjeta = [undefined, 1, 1, undefined, 1.155376, 1.355931];
const solTarjeta = [undefined, 1, 1.231673, undefined, 1.231673, 1.442347];
const naranjaTarjeta = [
  1.128409,
  undefined,
  1,
  undefined,
  undefined,
  undefined,
];
const dpfTarjeta = [undefined, 1, 1.074, 1.1424, 1.2143, undefined];

// impuestos
const impIndividuo = Number(1);
const impEmpresa = Number(1.33);

document.getElementById(`botonConsulta`).addEventListener(`click`, Tabla);
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

    this.precio = document.getElementById("precioEquipo").value;
    this.condImp = document.getElementById("condImp").value;
    this.tarjeta = document.getElementById("tarjetas").value;
    this.cuotas = document.getElementById("cuotas").value;

    this.total = 0;
    this.totalInteres = 0;
    this.totalCuotas = 0;
  }
  condicionimpositiva() {
    if (this.condImp == "EMPRESA") {
      this.precio = this.precio * impEmpresa;
      return this.precio;
    } else if (this.condImp == "INDIVIDUO") {
      this.precio = this.precio * impIndividuo;
      return this.precio;
    }
  }
  coeficiente(coeficientes) {
    this.total = this.precio * coeficientes;
    document.write("$" + this.total + "<br>");
    return this.total;
  }
  tarjetasCuotas(tarjeta, cuotas) {
    switch (tarjeta) {
      case "VISA": {
        if (cuotas == "ALL") {
          for (let i = 0; i < visaTarjeta.length; i++) {
            this.total = this.precio * visaTarjeta[i];
            document.write("$" + this.total + "<br>");
          }
          break;
        } else if (cuotas == "Z") {
          this.coeficiente(visaTarjeta[0]);
          break;
        } else if (cuotas == "3") {
          this.coeficiente(visaTarjeta[1]);
          break;
        } else if (cuotas == "6") {
          this.coeficiente(visaTarjeta[2]);
          break;
        } else if (cuotas == "9") {
          this.coeficiente(visaTarjeta[3]);
          break;
        } else if (cuotas == "12") {
          this.coeficiente(visaTarjeta[4]);
          break;
        } else if (cuotas == "18") {
          this.coeficiente(visaTarjeta[5]);
        }
      }
      case "MASTERCAR": {
        if (cuotas == "ALL") {
          for (let i = 0; i < mastercardTarjeta.length; i++)
            this.total = this.precio * mastercardTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (cuotas == "Z") {
          this.coeficiente(mastercardTarjeta[0]);
          break;
        } else if (cuotas == "3") {
          this.coeficiente(mastercardTarjeta[1]);
          break;
        } else if (cuotas == "6") {
          this.coeficiente(mastercardTarjeta[2]);
          break;
        } else if (cuotas == "9") {
          this.coeficiente(mastercardTarjeta[3]);
          break;
        } else if (cuotas == "12") {
          this.coeficiente(mastercardTarjeta[4]);
          break;
        } else if (cuotas == "18") {
          this.coeficiente(mastercardTarjeta[5]);
          break;
        }
      }
      case "SOL": {
        if (cuotas == "ALL") {
          for (let i = 0; i < solTarjeta.length; i++)
            this.total = this.precio * solTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (cuotas == "Z") {
          this.coeficiente(solTarjeta[0]);
          break;
        } else if (cuotas == "3") {
          this.coeficiente(solTarjeta[1]);
          break;
        } else if (cuotas == "6") {
          this.coeficiente(solTarjeta[2]);
          break;
        } else if (cuotas == "9") {
          this.coeficiente(solTarjeta[3]);
          break;
        } else if (cuotas == "12") {
          this.coeficiente(solTarjeta[4]);
          break;
        } else if (cuotas == "18") {
          this.coeficiente(solTarjeta[5]);
          break;
        }
      }
      case "NARANJA": {
        if (cuotas == "ALL") {
          for (let i = 0; i < naranjaTarjeta.length; i++)
            this.total = this.precio * naranjaTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (cuotas == "Z") {
          this.coeficiente(naranjaTarjeta[0]);
          break;
        } else if (cuotas == "3") {
          this.coeficiente(naranjaTarjeta[1]);
          break;
        } else if (cuotas == "6") {
          this.coeficiente(naranjaTarjeta[2]);
          break;
        } else if (cuotas == "9") {
          this.coeficiente(naranjaTarjeta[3]);
          break;
        } else if (cuotas == "12") {
          this.coeficiente(naranjaTarjeta[4]);
          break;
        } else if (cuotas == "18") {
          this.coeficiente(naranjaTarjeta[5]);
          break;
        }
      }
      case "DPF": {
        if (cuotas == "ALL") {
          for (let i = 0; i < dpfTarjeta.length; i++)
            this.total = this.precio * dpfTarjeta[i];
          document.write("$" + this.total);
          break;
        } else if (cuotas == "Z") {
          this.coeficiente(dpfTarjeta[0]);
          break;
        } else if (cuotas == "3") {
          this.coeficiente(dpfTarjeta[1]);
          break;
        } else if (cuotas == "6") {
          this.coeficiente(dpfTarjeta[2]);
          break;
        } else if (cuotas == "9") {
          this.coeficiente(dpfTarjeta[3]);
          break;
        } else if (cuotas == "12") {
          this.coeficiente(dpfTarjeta[4]);
          break;
        } else if (cuotas == "18") {
          this.coeficiente(dpfTarjeta[5]);
          break;
        }
      }
      default:
        break;
    }
  }
  precioTotal() {
    condicionimpositiva();
    tarjetasCuotas(this.tarjeta, this.cuotas);
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

const nuevaConsulta = new Tabla(precio, condImp, tarjeta, cuotas);
nuevaConsulta.precioTotal();
nuevaConsulta.diferencia();
nuevaConsulta.lasCuotas();
precioEquipo.push(precio);

for (let i = 0; i < precioEquipo.length; i++) {
  console.log(i + "-" + precioEquipo[i]);
}
