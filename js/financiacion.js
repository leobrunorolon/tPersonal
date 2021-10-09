/*
 *Lo que intento realizar es una herramienta que me sirva para la diaria, la cual me hara los calculos correspondientes al paga con tarjeta y su correpondiente interes si corresponde, la idea es divivirlas por tarjeta luego por cuotas, tener un espacio de memoria de consultas anteriores, agregar una etiqueta con el nombre si es posible, para luego armarla como una especie de cotizador, el cual se podra imprimir si el cliente o el representante lo necesita.
 * Realizar tabla de calculo segun los datos de los coeficientes que son constante,
 */
// Coeficiente sin interes
const coeficienteUno = Number(1);
// Coeficientes Visa
const coefVisaDoce = Number(1, 172064);
const coefVisaDieciocho = Number(1, 383348);
// Coeficientes Mastercard
const coefMastDoce = Number(1, 155376);
const coefMastDieciocho = Number(1, 355931);
// Coeficientes Sol
const coefSolSeis = Number(1, 231673);
const coefSolDoce = Number(1, 231673);
const coefSolDieciocho = Number(1, 442347);
// Coeficientes Naranja
const coefNarZ = Number(1, 128409);
// Coeficientes DPF
const coefDpfSeis = Number(1, 074);
const coefDpfNueve = Number(1, 1424);
const coefDpfDoce = Number(1, 2143);
// impuestos
const impIndividuo = Number(1);
const impEmpresa = Number(1, 33);

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
  }
  impuestos() {
    if (this.condImp == "EMPRESA") {
      this.precio = this.precio * impEmpresa;
      return this.precio;
    } else if (this.condImp == "INDIVIDUO") {
      this.precio = this.precio * impIndividuo;
      return this.precio;
    }
  }
  tarjeta(tarjeta) {
    switch (tarjeta) {
      case "VISA": {
        if (this.cuotas == "all") {
        } else if (this.cuotas == "Z") {
          console.log("No posee");
          break;
        } else if (this.cuotas == 3) {
          this.precio = this.precio * coeficienteUno;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 6) {
          this.precio = this.precio * coeficienteUno;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 12) {
          this.precio = this.precio * coefVisaDoce;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 18) {
          this.total = this.precio * coefVisaDieciocho;
          console.log("tu total es de $ " + this.precio);
          break;
        } else console.error("cuota no existe");
        break;
      }

      case "MASTERCARD": {
        if (this.cuotas == "all") {
        } else if ((this.cuotas = "Z")) {
          console.log("No posee");
          break;
        } else if (this.cuotas == 3) {
          this.precio = this.precio * coeficienteUno;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 6) {
          this.precio = this.precio * coeficienteUno;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 12) {
          this.precio = this.precio * coefMastDoce;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 18) {
          this.precio = this.precio * coefMastDieciocho;
          console.log("tu total es de $ " + this.precio);
          break;
        } else {
          console.error("Error en el numero de cuotas");
          break;
        }
      }

      case "NARANJA": {
        if (this.cuotas == "all") {
        } else if ((this.cuotas = "Z")) {
          this.precio = this.precio * coefNarZ;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 3) {
          console.error("Error en el numero de cuotas");
          break;
        } else if (this.cuotas == 6) {
          this.precio = this.precio * coeficienteUno;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 12) {
          console.error("Error en el numero de cuotas");
          break;
        } else if (this.cuotas == 18) {
          console.error("Error en el numero de cuotas");
          break;
        } else {
          console.error("Error en el numero de cuotas");
          break;
        }
      }

      case "SOL": {
        if (this.cuotas == "all") {
        } else if (this.cuotas == "Z") {
          console.log("No posee");
        } else if (cuotas == 3) {
          total = precio * coeficienteUno;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (cuotas == 6) {
          total = precio * coefSolSeis;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (cuotas == 12) {
          total = precio * coefSolDoce;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (cuotas == 18) {
          total = precio * coefSolDieciocho;
          console.log("tu total es de $ " + this.precio);
          break;
        } else {
          console.error("Cuotas incorrectas");
          break;
        }
      }
      case "DPF": {
        if (this.cuotas == "all") {
        } else if (this.cuotas == "Z") {
          console.log("No posee");
          break;
        } else if (this.cuotas == 3) {
          this.precio = this.precio * coeficienteUn;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 6) {
          this.precio = this.precio * coefDpfSeis;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 9) {
          this.precio = this.precio * coefDpfNueve;
          console.log("tu total es de $ " + this.precio);
          break;
        } else if (this.cuotas == 12) {
          this.precio = this.precio * coefDpfDoce;
          console.log("tu total es de $ " + this.precio);
          break;
        } else {
          console.error("cuota no existe");
          break;
        }
      }
      default: {
        console.error("operacion invalida");
        break;
      }
    }
  }
}

let nuevaConsulta = "";
let precio = Number(prompt("Ingresa el precio del Equipo"));
let condImp = prompt("Ingresa condicion impositiva\n EMPRESA\n INDIVIDUO");
let tarjeta = prompt(
  "Ingresa el medio de pago\n VISA\nMASTERCARD\nNARANJA\nSOL\nDPF"
);
let cuotas = prompt("Ingresa el numero de cuotas\n All\nZ\n3\n6\n12\n18");
