// Reto 1: El Viaje de Julian
const destination = parseInt(prompt('Ingresa tu destino'));
console.log(destination);

let days = parseInt(prompt('Ingresa los dias de hospedaje'));
console.log(days);

let aloja = parseInt(prompt('Ingresa costo de alojamiento'));
console.log(aloja);

let budget = parseInt(prompt('Ingrese su presupuesto'));
console.log(budget);

let tikets = parseInt(prompt('Ingresa el costo de los tiquetes'));
console.log(tikets);

let costoT = parseInt(prompt('Ingresa el costo total que se estima'));
console.log(costoT);

if (budget >= costoT) {
  console.log('El presupuesto le alcanza para realizar el viaje');
} else {
  console.log('El presupuesto no es suficiente para realizar el viaje');
}
