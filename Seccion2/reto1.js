const nivelEnergia = obtenerNivelE();
const clima = obtenerClima();


function obtenerClima() {
    return parseInt(prompt("¿Cuál es el clima hoy? (0 para malo, 1 para bueno)"));
}


function obtenerNivelE() {
    return parseInt(prompt("¿Ccuál es su nivel de energía? (0 para bajo, 1 para alto)"));
}

// función para decidir la actividad de Julian
function ActividadJuli(nivelEnergia, clima) {
    if (nivelEnergia === null || nivelEnergia === 0) {
        console.log("Tome un día libre debido a su bajo nivel de energía.");
    } else if (clima) {
        if (clima.toLowerCase() === "soleado") {
            console.log("Puede salir porque el clima es soleado y tiene energía alta.");
        } else {
            console.log("Por el mal clima, puede quedarse en casa trabajando en proyectos personales o simplemente relajándose.");
        }
    } else {
        console.log("Puede quedarse en casa.");
    }
}

ActividadJuli(nivelEnergia, clima);

