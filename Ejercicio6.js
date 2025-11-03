// Ejercicio 6 - Potencias y raíces
// Autor : Aleyda Quispe

var numero = parseFloat(prompt("Ingrese un número:"));

var cuadrado = Math.pow(numero, 2);
var cubo = Math.pow(numero, 3);
var raizCuadrada = Math.sqrt(numero);

var mensaje = "Resultados:\n";
mensaje += "Número ingresado: " + numero + "\n";
mensaje += "Cuadrado: " + cuadrado + "\n";
mensaje += "Cubo: " + cubo + "\n";
mensaje += "Raíz cuadrada: " + raizCuadrada;

alert(mensaje);