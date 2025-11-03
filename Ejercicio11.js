// Ejercicio 11 - Control de inventario con encapsulación
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
        if (valor > 0)
            this.#precio = valor;
        else 
            alert("El precio debe ser mayor que 0.");
    }

    get precio() {
        return this.#precio;
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
            alert("Venta realizada con éxito. Stock restante: " + this.#stock);
        } else
            alert("No hay suficiente stock para realizar la venta.");
    }

    mostrarInfo() {
        alert("Producto: " + this.#nombre + "\nPrecio: $" + this.#precio + "\nStock: " + this.#stock);
    }
}

var nombre = prompt("Ingrese el nombre del producto:");
var precio = parseFloat(prompt("Ingrese el precio del producto:"));
var stock = parseInt(prompt("Ingrese el stock inicial:"));

var producto1 = new Producto(nombre, precio, stock);
producto1.mostrarInfo();

var cantidadVenta = parseInt(prompt("Ingrese la cantidad a vender:"));
producto1.vender(cantidadVenta);

producto1.mostrarInfo();