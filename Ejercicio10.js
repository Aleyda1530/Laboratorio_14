// Ejercicio 10 - Normalización de calificaciones
// Autor : Aleyda Quispe

var cantidad = parseInt(prompt("¿Cuántas calificaciones desea ingresar?"));
var calificaciones = [];

for (var i = 0; i < cantidad; i++) {
    var nota = parseFloat(prompt("Ingrese la calificación " + (i + 1) + ":"));
    calificaciones.push(nota);
}
var maximo = Math.max(...calificaciones);
var calificacionesNormalizadas = [];

for (var i = 0; i < calificaciones.length; i++) {
    var normalizada = calificaciones[i] / maximo;
    calificacionesNormalizadas.push(normalizada);
}
var mensaje = "Calificaciones normalizadas (rango 0–1):\n";
for (var i = 0; i < calificacionesNormalizadas.length; i++) {
    mensaje += "Nota " + (i + 1) + ": " + calificacionesNormalizadas[i].toFixed(3) + "\n";
}
alert(mensaje);