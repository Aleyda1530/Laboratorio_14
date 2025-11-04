// Ejercicio 17 - Encapsulación y Polimorfismo (Cuenta, CuentaAhorro y CuentaCorriente)
// Autor : Aleyda Quispe
// Clase base
class Cuenta {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
            alert("Depósito realizado. Saldo actual: $" + this.#saldo.toFixed(2));
        } else 
            alert("El monto a depositar debe ser mayor que 0.");
    }
    retirar(monto) {
        if (monto > this.#saldo) {
            alert("Fondos insuficientes.");
        } else {
            this.#saldo -= monto;
            alert("Retiro realizado. Saldo actual: $" + this.#saldo.toFixed(2));
        }
    }
    transferir(monto, otraCuenta) {
        if (monto > 0 && monto <= this.#saldo) {
            this.#saldo -= monto;
            otraCuenta.depositar(monto);
            alert("Transferencia realizada con éxito.");
        } else
            alert("Monto inválido o saldo insuficiente para transferir.");
    }

    get saldo() {
        return this.#saldo;
    }
}
// Subclase CuentaAhorro
class CuentaAhorro extends Cuenta {
    retirar(monto) {
        if (monto <= this.saldo) {
            super.retirar(monto);
        } else
            alert("No puede retirar más del saldo disponible en la cuenta de ahorro.");
    }
}
// Subclase CuentaCorriente
class CuentaCorriente extends Cuenta {
    constructor(saldoInicial, limiteSobregiro) {
        super(saldoInicial);
        this.limiteSobregiro = limiteSobregiro;
    }
    retirar(monto) {
        if (monto <= this.saldo + this.limiteSobregiro) {
            // Permite sobregiro dentro del límite
            let saldoFinal = this.saldo - monto;
            alert("Retiro realizado. Saldo actual (puede ser negativo): $" + saldoFinal.toFixed(2));
        } else
            alert("No puede exceder el límite de sobregiro.");
    }
}
var tipo = prompt("Seleccione tipo de cuenta:\n1. Ahorro\n2. Corriente");
if (tipo == "1") {
    var saldo = parseFloat(prompt("Ingrese el saldo inicial:"));
    var cuentaAhorro = new CuentaAhorro(saldo);
    cuentaAhorro.depositar(parseFloat(prompt("Ingrese monto a depositar:")));
    cuentaAhorro.retirar(parseFloat(prompt("Ingrese monto a retirar:")));
} else if (tipo == "2") {
    var saldo = parseFloat(prompt("Ingrese el saldo inicial:"));
    var limite = parseFloat(prompt("Ingrese el límite de sobregiro permitido:"));
    var cuentaCorriente = new CuentaCorriente(saldo, limite);
    cuentaCorriente.depositar(parseFloat(prompt("Ingrese monto a depositar:")));
    cuentaCorriente.retirar(parseFloat(prompt("Ingrese monto a retirar:")));
} else 
    alert("Opción no válida.");