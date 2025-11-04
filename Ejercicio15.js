// Ejercicio 15 - Polimorfismo (Cliente y Administrador)
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
        this.nivelFidelidad = nivelFidelidad;
    }
    mostrarInfo() {
        return super.mostrarInfo() + "\nTipo: Cliente\nNivel de fidelidad: " + this.nivelFidelidad;
    }
}
// Subclase Administrador
class Administrador extends Usuario {
    constructor(nombre, email, permisos) {
        super(nombre, email);
        this.permisos = permisos;
    }
    mostrarInfo() {
        return super.mostrarInfo() + "\nTipo: Administrador\nPermisos: " + this.permisos;
    }
}
var usuarios = [];

usuarios.push(new Cliente("Juan Pérez", "juanperez@mail.com", 4));
usuarios.push(new Administrador("Laura Gómez", "lauragomez@mail.com", "crear, editar"));
usuarios.push(new Cliente("Carlos Ruiz", "carlosruiz@mail.com", 2));
usuarios.push(new Administrador("Ana Torres", "anatorres@mail.com", "crear, eliminar"));
usuarios.forEach(function(usuario) {
    alert(usuario.mostrarInfo());
});