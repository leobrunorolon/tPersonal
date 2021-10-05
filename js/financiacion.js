/*
*Lo que intento realizar es una herramienta que me sirva para la diaria, la cual me hara los calculos correspondientes al paga con tarjeta y su correpondiente interes si corresponde, la idea es divivirlas por tarjeta luego por cuotas, tener un espacio de memoria de consultas anteriores, agregar una etiqueta con el nombre si es posible, para luego armarla como una especie de cotizador, el cual se podra imprimir si el cliente o el representante lo necesita.
* Realizar tabla de calculo segun los datos de los coeficientes que son constante,
*/
// Coeficiente sin interes
const coeficienteUno = Number(1);
// Coeficientes Visa
const coefVisaDoce = Number(1,172064);
const coefVisaDieciocho = Number(1,383348);
// Coeficientes Mastercard
const coefMastDoce = Number(1,155376);
const coefMastDieciocho = Number(1,355931);
// Coeficientes Sol
const coefSolSeis = Number(1,231673);
const coefSolDoce = Number(1,231673);
const coefSolDieciocho = Number(1,442347);
// Coeficientes Naranja
const coefNarZ = Number(1,128409);
// Coeficientes DPF
const coefDpfSeis = Number(1,074);
const coefDpfNueve = Number(1,1424);
const coefDpfDoce = Number(1,2143);

/*
* Funciones, datos que necesito procesar de la mejor forma, estaba pensando en realizarlo por tarjeta ya que es mi dato clave, para el cambio de coeficiente.
*/
// Funcion para optener la diferencia
function laDiferencia(elPrecio,elTotal){
    diferencia = (elPrecio - elTotal);
}

// Funcion para obtener las cuotas
function division(elTotal,lasCuotas){
    lasCuotas = (elTotal / lasCuotas);
}


/*
* Datos que necesito recibir.
*/
let disyuntiva = "";
let diferencia = null;
let lasCuotas = null;
let total = null;
let precio = null;
let cuotas = null;
let tarjetas = null;
/* 
* Datos que el cliente necesita cargar, luego van a estar disponibles y enlazados en el html para mayor practicidad.
*/ 


// funcion para obtener el Total averiguar como hacer que cuotas, en otras tarjetas se pueda cambiar y colocar en Z o 6 solamente como opciones en naranja en vez de 3 6 12 18. y averiguar como hacer que me pida cuotas por cada tarjeta.

while (disyuntiva != "ESC") {
  disyuntiva = prompt("Quieres realizar una operacion?\n SI - para Empezar\n ESC - Salir"
  );

  if (disyuntiva.toUpperCase() == "ESC") {
    break;
  } else if (disyuntiva.toUpperCase() == "SI") {
    tarjetas = prompt("Con que tarjeta deseas operar\n VISA\nMASTERCARD\nNARANJA\nSOL\nDPF");
    precio = prompt("Ingresa valor del equipo");
    cuotas = parseInt(prompt("Ingrese la cantidad de cuotas\n3\n6\n12\n18"));

    switch(tarjetas){
        case "VISA": {
            if(cuotas == 3){
                total = (precio * coeficienteUno);
                alert(`Tu total es $ ${total}`);
                break;
            } else if (cuotas == 6){
                total = (precio * coeficienteUno);
                console.log(`Tu total es $ ${total}`);
                break;
            }else if (cuotas == 12){
                total = (precio * coefVisaDoce);
                console.log(`Tu total es $ ${total}`);
                break;
            }else if (cuotas == 18){
                total = (precio * coefVisaDieciocho);
                console.log(`Tu total es $ ${total}`);
                break;
            } else
            console.error("Error en el numero de cuotas");
            break;
        }
        case "MASTERCARD": {
            if(cuotas == 3){
                total = (precio * coeficienteUno);
                console.log(`Tu total es $ ${total}`);
                break;
            } else if (cuotas == 6){
                total = (precio * coeficienteUno);
                console.log(`Tu total es $ ${total}`);
                break;
            }else if (cuotas == 12){
                total = (precio * coefMastDoce);
                console.log(`Tu total es $ ${total}`);
                break;
            }else if (cuotas == 18){
                total = (precio * coefMastDieciocho);
                console.log(`Tu total es $ ${total}`);
                break;
            } else
            console.error("Error en el numero de cuotas");
                break;
        }
        case "SOL": {
            if(cuotas == 3){
                total = (precio * coeficienteUno);
                console.log(`Tu total es $ ${total}`);
                break;
            } else if (cuotas == 6){
                total = (precio * coefSolSeis);
                console.log(`Tu total es $ ${total}`);
                break;
            }else if (cuotas == 12){
                total = (precio * coefSolDoce);
                console.log(`Tu total es $ ${total}`);
                break;
            }else if (cuotas == 18){
                total = (precio * coefSolDieciocho);
                console.log(`Tu total es $ ${total}`);
                break;
            } else
            console.error("Error en el numero de cuotas");
                break;
        }
        default: {
        console.error("operacion invalida");
        break;
      }
    }
  } else {
    console.error("operacion Invalida");
    break;
  }
  disyuntiva = prompt(
    "Quieres realizar una nueva operacion?\n SI - para Empezar\n ESC - Salir"
  );
}
console.log("Programa terminado.");
console.log(`El total del equipo es ${total}`);
console.log(`las cuotas son ${cuotas} de  ${division()}`);
console.log(`El interes total es de $ ${laDiferencia()}`);

