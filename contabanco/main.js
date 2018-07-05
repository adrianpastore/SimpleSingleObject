class Conta {
    constructor(agencia, numero, saldo = 500) {
        this.ag = agencia;
        this.cc = numero;
        this.saldoagr = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldoagr) {
            this.saldoagr -= valor;
        } else {
            return null;
        }
        return;
    }
    depositarEmDinheiro(dinheiro) {
        if (dinheiro >= 0 && dinheiro <= 1000) {
            this.saldoagr += dinheiro;
        }
        return;
    }
    depositarEmCheque(cheque) {
        if (cheque >= 0 && cheque <= 10000) {
            this.saldoagr += cheque;
        }
    }
    toString() {
        return 'ag ' + this.ag + ' cc ' + this.cc + ' saldo ' + this.saldoagr + '.00';
    }
    get agencia() {
        return this.ag;
    }
    get numero() {
        return this.cc;
    }
    get saldo() {
return this.saldoagr;
    }
}

//Casos de teste

const minhaConta = new Conta(3300, 33345);
console.log(minhaConta.agencia === 3300);
console.log(minhaConta.numero === 33345);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 500.00');
minhaConta.numero = 92932334; // não deve ter efeito
console.log(minhaConta.numero === 33345);
// saldo inicial de 500
console.log(minhaConta.saldo); // 500.0
console.log(minhaConta.saldo === 500.0);
// não é permitido
minhaConta.sacar(600.0);
console.log(minhaConta.saldo); // 500.0
console.log(minhaConta.saldo === 500.0);

// é permitido
minhaConta.sacar(60.0); // 500.0 - 60.0 === 440.0
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);

minhaConta.saldo = 1000000; // não deve ter efeito:
console.log(minhaConta.saldo === 440.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 440.00');

// depósito em dinheiro não permitido
minhaConta.depositarEmDinheiro(1100.0);
console.log(minhaConta.saldo); // 440.0
console.log(minhaConta.saldo === 440.0);

// depósito em dinheiro permitido
minhaConta.depositarEmDinheiro(500.0); // 440.0 + 500.0 === 940.0
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);

// depósito em cheque não permitido
minhaConta.depositarEmCheque(11100.0);
console.log(minhaConta.saldo); // 940.0
console.log(minhaConta.saldo === 940.0);

// depósito em cheque permitido
minhaConta.depositarEmCheque(5000.0); // 940.0 + 5000.0 === 5940.0
console.log(minhaConta.saldo); // 5940.0
console.log(minhaConta.saldo === 5940.0);
console.log(minhaConta.toString() === 'ag 3300 cc 33345 saldo 5940.00');