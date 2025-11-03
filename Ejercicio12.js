// Ejercicio 12 - Modificar Producto (precio con formato de moneda y setter flexible)
// Autor : Aleyda Quispe

class Producto {
    #nombre;
    #precio;
    #stock;

    constructor(nombre, precio, stock) {
        this.#nombre = nombre;
        this.precio = precio; // usa el setter
        this.stock = stock;   // usa el setter
    }

    set precio(valor) {
        var numero = Number(valor);
        if (!isNaN(numero) && numero > 0)
            this.#precio = numero;
        else 
            alert("El precio debe ser un número mayor que 0.");
    }
    get precio() {
        return "$" + this.#precio.toFixed(2);
    }

    set stock(valor) {
        if (valor >= 0)
            this.#stock = valor;
        else 
            alert("El stock no puede ser negativo.");
    }
    get stock() {
        return this.#stock;
    }

    vender(cantidad) {
        if (cantidad <= this.#stock) {
            this.#stock -= cantidad;
            alert("Venta realizada con éxito. El stock restante: " + this.#stock);
        } else
            alert("No hay suficiente stock para realizar la venta.");
    }
    mostrarInformacion() {
        alert(
            "Producto: " + this.#nombre +
            "\nPrecio: " + this.precio +
            "\nStock: " + this.#stock
        );
    }
}
var nombre = prompt("Ingrese el nombre del producto:");
var precio = prompt("Ingrese el precio del producto (puede ser número o texto):");
var stock = parseInt(prompt("Ingrese el stock inicial:"));

var producto1 = new Producto(nombre, precio, stock);
producto1.mostrarInformacion();

var cantidadVenta = parseInt(prompt("Ingrese la cantidad a vender:"));
producto1.vender(cantidadVenta);

producto1.mostrarInfo();