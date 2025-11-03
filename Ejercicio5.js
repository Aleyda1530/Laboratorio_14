// Ejercicio 5 - Lanzamiento de dados
// Autor : Aleyda Quispe

function numeroAleatorio(minimo, maximo) {
    var numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
    return numero;
}

function lanzarDados() {
    var dado1 = numeroAleatorio(1, 6);
    var dado2 = numeroAleatorio(1, 6);
    var suma = dado1 + dado2;

    var mensaje = "Resultados del lanzamiento:\n";
    mensaje += "Dado 1: " + dado1 + "\n";
    mensaje += "Dado 2: " + dado2 + "\n";
    mensaje += "Suma total: " + suma;

    alert(mensaje);
}

lanzarDados();