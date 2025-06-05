console.log("=============ENCAPSULAMENTO=============");
class ContaBancaria {
    #saldo = 0;
    constructor (titular){
        this.titular = titular

    }
    getSaldo(){
        console.log(`Este é o seu saldo atualmente: R$ ${this.#saldo}`);
    }
    deposito(value){
        this.#saldo += value;
        console.log(`Depósito de: R$ ${this.#saldo} realizado`);
    }
    saque(value){
        if (value<this.#saldo) {
            this.#saldo -= value;
            console.log(`Saque de: R$ ${this.#saldo} realizado`);
        }else{
            console.log("Saldo insuficiente");
            this.getSaldo();
        }
    }
}

const minhaConta = new ContaBancaria("Arthurzin");
minhaConta.getSaldo();
minhaConta.deposito(10000);
minhaConta.getSaldo();
minhaConta.saque(20000)