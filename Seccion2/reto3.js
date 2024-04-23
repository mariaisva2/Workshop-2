//Reto 3
const clima = prompt("¿Cuál es el pronóstico del clima para tu viaje? (a.lluvia b.soleado)");
console.log(clima);
const espacioDisponible = parseInt(prompt("¿Cuánto espacio tienes disponible en tu maleta?"));
console.log(espacioDisponible);
const pesoTotal = parseInt(prompt("¿Cuál es el peso total de tu equipaje? (en kg)"));
console.log(pesoTotal)

// Función para ayudar a Julian a decidir qué artículos empacar
function decidirEmpaque(clima, espacioDisponible, pesoTotal) {
    //verificar el clima
    if (clima === "lluvia") {
        console.log("El pronóstico indica lluvia. Te recomiendo llevar un paraguas.");
    } else {
        console.log("El pronóstico no indica lluvia. No necesitas llevar un paraguas.");
    }

    //Espacio para la cámara
    if (espacioDisponible >=5) { 
        console.log("Tienes suficiente espacio para llevar una cámara.");
    } else {
        console.log("No tienes suficiente espacio para llevar una cámara. Podrías considerar dejarla en casa.");
    }

    // Verificar si el peso total permite llevar un libro
    if (pesoTotal <= 10) { 
        console.log("El peso total de tu equipaje está dentro del límite. Puedes llevar un libro para entretenerte durante el viaje.");
    } else {
        console.log("El peso total de tu equipaje excede el límite. Sería mejor no llevar un libro adicional para no sobrepasar el peso permitido.");
    }

    // LLeva los artículos dependiendo del clima y la duración del viaje
    if (clima === "lluvia" && espacioDisponible >= 5 && pesoTotal <= 10) {
        console.log("Dado que se espera lluvia y tienes suficiente espacio y peso permitido, prioriza llevar el paraguas y la cámara.");
    } else if (clima !== "lluvia" && espacioDisponible >= 5 && pesoTotal <= 10) {
        console.log("Como no se espera lluvia y tienes suficiente espacio y peso permitido, prioriza llevar la cámara y el libro.");
    } else if (clima === "lluvia" && espacioDisponible < 5 && pesoTotal <= 10) {
        console.log("Dado que se espera lluvia pero no tienes suficiente espacio, prioriza llevar el paraguas y no la cámara.");
    } else if (clima === "lluvia" && espacioDisponible >= 5 && pesoTotal > 10) {
        console.log("Dado que se espera lluvia pero has excedido el límite de peso, prioriza llevar el paraguas y no el libro.");
    } 
}
decidirEmpaque(clima, espacioDisponible, pesoTotal);
