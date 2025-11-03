// Ejercicio 4 - Número aleatorio en un rango
// Autor : Aleyda Quispe

function numeroAleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return numero;
}

var minimo = parseInt(prompt("Ingrese el número mínimo del rango:"));
var maximo = parseInt(prompt("Ingrese el número máximo del rango:"));

var resultado = numeroAleatorio(minimo, maximo);

alert("Número aleatorio generado entre " + minimo + " y " + maximo + " es: " + resultado);