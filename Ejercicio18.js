// Ejercicio 18 - Composición (Carrito y Producto)
// Autor : Aleyda Quispe
// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    mostrarInfo() {
        return this.nombre + " - $" + this.precio.toFixed(2);
    }
}
// Clase Carrito
class Carrito {
    constructor() {
        this.listaProductos = []; // array de objetos Producto
    }
    agregarProducto(producto) {
        this.listaProductos.push(producto);
        alert("Producto agregado: " + producto.nombre);
    }
    calcularTotal() {
        var total = 0;
        for (var i = 0; i < this.listaProductos.length; i++) {
            total += this.listaProductos[i].precio;
        }
        return total;
    }
    mostrarResumen() {
        if (this.listaProductos.length === 0) {
            alert("El carrito está vacío.");
            return;
        }
        var resumen = "Resumen del carrito:\n\n";
        for (var i = 0; i < this.listaProductos.length; i++) {
            resumen += (i + 1) + ". " + this.listaProductos[i].mostrarInfo() + "\n";
        }
        resumen += "\nTotal a pagar: $" + this.calcularTotal().toFixed(2);
        alert(resumen);
    }
}

var carrito = new Carrito();
var cantidad = parseInt(prompt("¿Cuántos productos desea agregar al carrito?"));

for (var i = 0; i < cantidad; i++) {
    var nombre = prompt("Ingrese el nombre del producto " + (i + 1) + ":");
    var precio = parseFloat(prompt("Ingrese el precio del producto " + (i + 1) + ":"));
    var producto = new Producto(nombre, precio);
    carrito.agregarProducto(producto);
}
carrito.mostrarResumen();