// Ejercicio 9 - Distancia entre dos puntos en el plano cartesiano
// Autor : Aleyda Quispe

var x1 = parseFloat(prompt("Ingrese la coordenada x1:"));
var y1 = parseFloat(prompt("Ingrese la coordenada y1:"));
var x2 = parseFloat(prompt("Ingrese la coordenada x2:"));
var y2 = parseFloat(prompt("Ingrese la coordenada y2:"));

var distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
var distanciaPunto1Origen = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
var distanciaPunto2Origen = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
var sumaDistancias = distanciaPunto1Origen + distanciaPunto2Origen;

var mensaje = "Resultados:\n";
mensaje += "Distancia entre los dos puntos: " + distancia.toFixed(4) + "\n";
mensaje += "Distancia del punto 1 al origen: " + distanciaPunto1Origen.toFixed(4) + "\n";
mensaje += "Distancia del punto 2 al origen: " + distanciaPunto2Origen.toFixed(4) + "\n";
mensaje += "Suma de ambas distancias al origen: " + sumaDistancias.toFixed(4);

alert(mensaje);