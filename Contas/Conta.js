// classe abstrata;
export class Conta {
    constructor (cliente, agencia, saldoInicial) {
        if (this.constructor == Conta) {
            throw new Error ('Você não deveria instanciar um objeto do tipo conta diretamente, pois é uma classe abstrata');
        }
        this._cliente = cliente;
        this._agencia = agencia;
        this._saldo = saldoInicial;
    }

    set cliente (novoValor) { // a propriedade set atribui novos valores ao cliente como atributo dessa classe;
        if (novoValor instanceof Cliente) {  // esse novo valor só será atribuido se ele for instância ou objeto da classe Cliente;
            this._cliente = novoValor; // e esse novo valor só será aplicado na propriedade privada após a verificação;
        }
    }

    get cliente () { // o get será um acessor público da minha classe Cliente, assim eu consigo imprimir ele na minha tela com o console.log();
        return this._cliente;
    }

    get saldo () {
        return this._saldo;
    }

    //esse será um método abstrato;
    sacar (valor) {
        throw new Error ("Esse é um método abstrato, sobrescreva em cada tipo de conta");
    }

    _sacar (valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado; // nova atribuição de valor do saldo da conta após o saque;
            return valor; // é necessário que se retorne o valor para que quem fez o saque receba o dinheiro, o que está acima é apenas uma condição
        }
        
        return 0;
    }

    depositar (valor) {
        if (valor <= 0) {
            return; // esse retorno funciona como uma parada para a verificação, assim parando a verificação e indo para a próxima etapa;
        }

        this._saldo += valor;  // esse será o valor que será depositado dentro da conta;
    }

    transferir (valor, conta) { // quem transfere, transfere um valor a uma conta;
        const valorSacado = this.sacar (valor); // para transferir primeiro saca, saca da própria conta um valor;
        conta.depositar(valorSacado); // depois do saque, deposita-se em uma outra conta o valor sacado;
    }
}