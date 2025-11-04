// Ejercicio 19 - Polimorfismo (Notificación, Email, SMS y Push)
// Autor : Aleyda Quispe
// Clase base
class Notificacion {
    constructor(destinatario, mensaje) {
        this.destinatario = destinatario;
        this.mensaje = mensaje;
    }
    enviar() {
        alert("Enviando notificación genérica a " + this.destinatario);
    }
}
// Subclase Email
class Email extends Notificacion {
    enviar() {
        alert("Enviando EMAIL a " + this.destinatario + ":\n" + this.mensaje);
    }
}
// Subclase SMS
class SMS extends Notificacion {
    enviar() {
        alert("Enviando SMS a " + this.destinatario + ":\n" + this.mensaje);
    }
}
// Subclase Push
class Push extends Notificacion {
    enviar() {
        alert("Enviando NOTIFICACIÓN PUSH a " + this.destinatario + ":\n" + this.mensaje);
    }
}
// Función para procesar una lista de notificaciones
function procesarNotificaciones(lista) {
    for (var i = 0; i < lista.length; i++) {
        lista[i].enviar(); // Polimorfismo
    }
}
// Programa principal
var notificaciones = [];
var cantidad = parseInt(prompt("¿Cuántas notificaciones desea crear?"));
for (var i = 0; i < cantidad; i++) {
    var tipo = prompt("Seleccione tipo de notificación:\n1. Email\n2. SMS\n3. Push");
    var destinatario = prompt("Ingrese el destinatario:");
    var mensaje = prompt("Ingrese el mensaje:");
    if (tipo == "1")
        notificaciones.push(new Email(destinatario, mensaje));
    else if (tipo == "2")
        notificaciones.push(new SMS(destinatario, mensaje));
    else if (tipo == "3")
        notificaciones.push(new Push(destinatario, mensaje));
    else
        alert("Tipo de notificación no válido, se omitirá.");
}
procesarNotificaciones(notificaciones);