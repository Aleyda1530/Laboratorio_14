// Ejercicio 3 - Redondeo de precios
// Autor : Aleyda Quispe

var precio = parseFloat(prompt("Ingrese el precio del producto:"));

var redondeoAbajo = Math.floor(precio);
var redondeoArriba = Math.ceil(precio);
var redondeoNormal = Math.round(precio);

var mensaje = "Resultados del redondeo:\n";
mensaje += "Precio original: " + precio + "\n";
mensaje += "Redondeo hacia abajo: " + redondeoAbajo + "\n";
mensaje += "Redondeo hacia arriba: " + redondeoArriba + "\n";
mensaje += "Redondeo normal: " + redondeoNormal;

alert(mensaje);
