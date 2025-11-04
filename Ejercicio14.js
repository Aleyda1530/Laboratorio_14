// Ejercicio 14 - Herencia (Usuario, Cliente y Administrador)
// Autor : Aleyda Quispe

// Clase base
class Usuario {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }

    mostrarInfo() {
        return "Nombre: " + this.nombre + "\nEmail: " + this.email;
    }
}

// Subclase Cliente
class Cliente extends Usuario {
    constructor(nombre, email, nivelFidelidad) {
        super(nombre, email);
        this.nivelFidelidad = nivelFidelidad; // valor entre 1 y 5
    }

    mostrarInfo() {
        return super.mostrarInfo() + "\nNivel de fidelidad: " + this.nivelFidelidad;
    }
}

// Subclase Administrador
class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos; 
    }

    mostrarInfo() {
        return super.mostrarInfo() + "\nPermisos: " + this.permisos;
    }
}

var tipo = prompt("Seleccione tipo de usuario:\n1. Cliente\n2. Administrador");

if (tipo == "1") {
    var nombre = prompt("Ingrese el nombre del cliente:");
    var email = prompt("Ingrese el email del cliente:");
    var nivel = parseInt(prompt("Ingrese el nivel de fidelidad (1 a 5):"));
    var cliente1 = new Cliente(nombre, email, nivel);
    alert("Información del cliente:\n" + cliente1.mostrarInfo());
} else if (tipo == "2") {
    var nombre = prompt("Ingrese el nombre del administrador:");
    var email = prompt("Ingrese el email del administrador:");
    var permisos = prompt("Ingrese los permisos del administrador (crear, editar, eliminar):");
    var admin1 = new Administrador(nombre, email, permisos);
    alert("Información del administrador:\n" + admin1.mostrarInfo());
} else {
    alert("Opción no válida.");
}