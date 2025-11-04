// Ejercicio 16 - Herencia (Empleado, Programador y ProgramadorSenior)
// Autor : Aleyda Quispe

// Clase base
class Empleado {
    constructor(nombre, sueldoBase) {
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
    }
    calcularSueldo() {
        return this.sueldoBase;
    }
    mostrarInfo() {
        return "Empleado: " + this.nombre + "\nSueldo base: $" + this.sueldoBase.toFixed(2);
    }
}
// Subclase Programador
class Programador extends Empleado {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase);
        this.lenguaje = lenguaje;
    }
    calcularSueldo() {
        return this.sueldoBase + (this.sueldoBase * 0.10); // Bono 10%
    }
    mostrarInfo() {
        return super.mostrarInfo() +
            "\nLenguaje: " + this.lenguaje +
            "\nSueldo total (con bono 10%): $" + this.calcularSueldo().toFixed(2);
    }
}
// Subclase ProgramadorSenior
class ProgramadorSenior extends Programador {
    constructor(nombre, sueldoBase, lenguaje) {
        super(nombre, sueldoBase, lenguaje);
    }
    calcularSueldo() {
        return this.sueldoBase + (this.sueldoBase * 0.25); /* Bono 25% */
    }
    mostrarInfo() {
        return super.mostrarInfo().replace("10%", "25%");
    }
}
var tipo = prompt("Seleccione tipo de empleado:\n1. Empleado\n2. Programador\n3. Programador Senior");
if (tipo == "1") {
    var nombre = prompt("Ingrese el nombre del empleado:");
    var sueldo = parseFloat(prompt("Ingrese el sueldo base:"));
    var empleado = new Empleado(nombre, sueldo);
    alert(empleado.mostrarInfo());
} else if (tipo == "2") {
    var nombre = prompt("Ingrese el nombre del programador:");
    var sueldo = parseFloat(prompt("Ingrese el sueldo base:"));
    var lenguaje = prompt("Ingrese el lenguaje de programación:");
    var prog = new Programador(nombre, sueldo, lenguaje);
    alert(prog.mostrarInfo());
} else if (tipo == "3") {
    var nombre = prompt("Ingrese el nombre del programador senior:");
    var sueldo = parseFloat(prompt("Ingrese el sueldo base:"));
    var lenguaje = prompt("Ingrese el lenguaje de programación:");
    var senior = new ProgramadorSenior(nombre, sueldo, lenguaje);
    alert(senior.mostrarInfo());
} else
    alert("Opción no válida.");