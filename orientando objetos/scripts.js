class contabancaria{
    constructor(agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = saldo;
    }
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
    if (valor > this._saldo) {
       return "Operação negada"
    }
     this._saldo = valor - this._saldo;

     return this._saldo;
}
    depositar(valor){
        this._saldo = valor + this._saldo;
        return "Seu saldo atual é: " + this._saldo
    }
}


class contacorrente extends contabancaria{
    constructor(agencia,numero,saldo,cartaocredito){
        super(agencia,numero,saldo);
        this.tipo = 'corrente';
        this._cartaocredito = 'cartaocredito';
    }


    get cartaocredito(){
        return this._cartaocredito;
    }

    set cartaocredito(valor){
        this._cartaocredito = valor;
    }
}


class contapoupanca extends contabancaria{
    constructor(agencia,numero,saldo){
        super(agencia,numero,saldo);
        this.tipo = 'poupanca';
    }

}

class contauniversitaria extends contabancaria{
    onstructor(agencia,numero,saldo){
        super(agencia,numero,saldo);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor>500){
            return "Operação negada!"
        }
    }
}