// Ejercicio 8 - Generar contraseñas numéricas
// Autor : Aleyda Quispe

function generarContrasena() {
    var contrasena = "";
    for (var i = 0; i < 6; i++) {
        var digito = Math.floor(Math.random() * 10); // genera un número entre 0 y 9
        contrasena += digito;
    }
    return contrasena;
}

var nuevaContrasena = generarContrasena();
alert("Contraseña generada: " + nuevaContrasena);