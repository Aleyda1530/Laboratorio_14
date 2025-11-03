// Ejercicio 7 - Conversión de grados a radianes y de radianes a grados
// Autor : Aleyda Quispe

function gradosARadianes(grados) {
    var radianes = grados * (Math.PI / 180);
    var seno = Math.sin(radianes);
    var coseno = Math.cos(radianes);

    var mensaje = "Conversión de grados a radianes:\n";
    mensaje += grados + "° equivalen a " + radianes.toFixed(4) + " radianes.\n";
    mensaje += "Seno: " + seno.toFixed(4) + "\n";
    mensaje += "Coseno: " + coseno.toFixed(4);
    alert(mensaje);
}

function radianesAGrados(radianes) {
    var grados = radianes * (180 / Math.PI);
    alert(radianes + " radianes equivalen a " + grados.toFixed(4) + "°.");
}

var opcion = prompt("¿Qué desea convertir? (1) Grados a Radianes  (2) Radianes a Grados");

if (opcion == "1") {
    var grados = parseFloat(prompt("Ingrese el valor en grados:"));
    gradosARadianes(grados);
} else if (opcion == "2") {
    var radianes = parseFloat(prompt("Ingrese el valor en radianes:"));
    radianesAGrados(radianes);
} else
    alert("Opción no válida.");