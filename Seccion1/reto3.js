//Reto 3 Planificación del itinerio

// let preinicial = parseInt(prompt('Ingresa el total de su presupuesto inicial'));
// console.log(preinicial);

// let budget = parseInt(prompt('Ingresa costo estimado de su viaje'));
// console.log(budget);

// let aloja = parseInt(prompt('Ingrese el costo de alojamiento'));
// console.log(aloja);

// let transporte = parseInt(prompt('Ingrese costo de transporte'));
// console.log(transporte);

// let acti = parseInt(prompt('Ingresa el costo de actividades'));
// console.log(acti);

// let costoT = parseInt(prompt('Ingresa el costo total que se estima'));
// console.log(costoT);

// let costoArt = parseInt(prompt('Ingrese el costo del artículo'));
// console.log(costoArt);


// function CompraArticulo(preinicial, aloja, transporte, acti) {
 
//   let costoT = preinicial - (aloja + transporte + acti);

//   if (preinicial > costoT) {
//       console.log("Puede llevar el artículo extra");
//   } else {
//       console.log("No puedes llevar el artículo extra");
//   }
// }

// function SumarPresupuesto(preinicial, aloja,  transporte, acti, costoArt){

//     let SumarPresupuesto = preinicial + aloja + transporte + acti + costoArt;

//   if (isNaN(SumarPresupuesto)){
//     alert("Su presupuesto final es = " + SumarPresupuesto);
//   }
 
// }
// SumarPresupuesto[200000, 500000, 20000, 30000, 100000];
//  CompraArticulo();
//  SumarPresupuesto();

 let preinicial = parseInt(prompt('Ingresa el total de su presupuesto inicial'));
console.log(preinicial);

let aloja = parseInt(prompt('Ingrese el costo de alojamiento'));
console.log(aloja);

let transporte = parseInt(prompt('Ingrese costo de transporte'));
console.log(transporte);

let acti = parseInt(prompt('Ingresa el costo de actividades'));
console.log(acti);

let costoT = parseInt(prompt('Ingresa el costo total que se estima'));
console.log(costoT);

let costoArt = parseInt(prompt('Ingrese el costo del artículo'));
console.log(costoArt);

function CompraArticulo(preinicial, aloja, transporte, acti) {
    let costoT = preinicial - (aloja + transporte + acti);

    if (preinicial > costoT) {
        console.log("Puede llevar el artículo extra");
    } else {
        console.log("No puedes llevar el artículo extra");
    }
}

function SumarPresupuesto(preinicial, aloja, transporte, acti, costoArt){
    let presupuestoTotal = preinicial + aloja + transporte + acti + costoArt;

    if (!isNaN(presupuestoTotal)) {
        // Mostrar el presupuesto total
        alert("Su presupuesto final es = " + presupuestoTotal);
    } 
}

CompraArticulo(preinicial, aloja, transporte, acti);
SumarPresupuesto(preinicial, aloja, transporte, acti, costoArt);
