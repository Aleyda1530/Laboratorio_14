// Ejercicio 13 - Herencia (Figura, Cuadrado y Triángulo)
// Autor : Aleyda Quispe

// Clase base
class Figura {
    area() {
        return 0;
    }
    perimetro() {
        return 0;
    }
}

// Subclase Cuadrado
class Cuadrado extends Figura {
    constructor(lado) {
        super(); // llama al constructor de la clase padre
        this.lado = lado;
    }
    area() {
        return this.lado * this.lado;
    }

    perimetro() {
        return 4 * this.lado;
    }
}

// Subclase Triangulo
class Triangulo extends Figura {
    constructor(base, altura, lado1, lado2, lado3) {
        super();
        this.base = base;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.lado3 = lado3;
    }

    area() {
        return (this.base * this.altura) / 2;
    }
    perimetro() {
        return this.lado1 + this.lado2 + this.lado3;
    }
}

var opcion = prompt("Seleccione una figura:\n1. Cuadrado\n2. Triángulo");

if (opcion == "1") {
    var lado = parseFloat(prompt("Ingrese el lado del cuadrado:"));
    var cuadrado = new Cuadrado(lado);
    alert(
        "Área del cuadrado: " + cuadrado.area() +
        "\nPerímetro del cuadrado: " + cuadrado.perimetro()
    );
} else if (opcion == "2") {
    var base = parseFloat(prompt("Ingrese la base del triángulo:"));
    var altura = parseFloat(prompt("Ingrese la altura del triángulo:"));
    var lado1 = parseFloat(prompt("Ingrese el primer lado:"));
    var lado2 = parseFloat(prompt("Ingrese el segundo lado:"));
    var lado3 = parseFloat(prompt("Ingrese el tercer lado:"));
    var triangulo = new Triangulo(base, altura, lado1, lado2, lado3);
    alert(
        "Área del triángulo: " + triangulo.area() +
        "\nPerímetro del triángulo: " + triangulo.perimetro()
    );
} else {
    alert("Opción no válida.");
}