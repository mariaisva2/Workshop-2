
function CalculadoradePresupuesto() {
    const preDiario = parseFloat(prompt("Introduce tu presupuesto diario:"));
    const saliraC = parseFloat(prompt("Ingrese el costo de lo que come por fuera"));
    const Libro = parseFloat(prompt("Ingrese el costo del libro"));
    const ahorro = parseFloat(prompt("Ahorro deseado diario:"));

    const ComerFuera = preDiario -  saliraC;
    const LibroS = preDiario - Libro;
    const PreSobra = preDiario -  saliraC - Libro;
  
  
  if (PreSobra >= ahorro) {
      console.log("Puede comer fuera, comprarte el libro y ahorrar algo de dinero");
        } else if (ComerFuera >= ahorro && LibroS < ahorro) {
          console.log("Puede comer fuera y ahorrar más no puede comprar el libro.");
        } else if (LibroS >= ahorro && ComerFuera < ahorro) {
          console.log("No puede comer por fuera, pero puede comprar el libro y ahorrar ");
        } else if (ComerFuera >= ahorro || LibroS >= ahorro) {
          console.log(" Considera comer o comprar el libro para que siga ahorrando");
        } else {
         console.log("Si deseas realmente ahorrar no puedes comer por fuera ni comprar el libro");
    }
  }
  

  CalculadoradePresupuesto();