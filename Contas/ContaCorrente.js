import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
    static numeroDeContas = 0; // servirá como contador para a classe conta corrente como um todo;
    constructor (cliente, agencia) {
        super (cliente, agencia, 0);
        ContaCorrente.numeroDeContas += 1; // a referência será feita chamando a classe e o seu atributo para que consiga somar 1 a cada conta criada;
    }

    // esse método está sobreescrevendo o método de sacar da classe Contas;
    sacar (valor) {
        let taxa = 1.1;
        return super._sacar (valor, taxa);
    }
}