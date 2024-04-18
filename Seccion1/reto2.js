//Reto 2 Tipos de Souvenirs

    let nombre = prompt('Ingresa el nombre del souvenir');
    console.log(nombre);

    let costo = parseInt(prompt('Ingrese el costo del souvenir'));
    console.log(costo);

    let disponibilidad = ('El souvenir está disponible');
    console.log(disponibilidad);

    const respuesta = confirm("¿El producto está dispobible?");

    if (respuesta) {
        console.log("El producto está disponible");
         } else {
        console.log("El producto no está disponible");
}
//Verificar si los tipos de datos ingresados son correctos

        if (typeof nombre === 'string' && typeof costo === 'number') {
        console.log("Los tipos de datos ingresados son correctos");
    
            } else {
            console.log("Los tipos de datos son incorrectos");
   
}

   







    









