export class Cliente { // a declaração da classe será o nosso "molde", tudo que está dentro das chaves será chamado de atributos ou propriedade;
    get cpf () {
        return this._cpf;
    }

    get rg () {
        return this._rg;
    }

    constructor(nome, idade, cpf, rg, senha) {
        this._nome = nome;
        this._idade = idade;
        this._cpf = cpf;
        this._rg = rg;
        this._senha = senha;
    }

    autenticar () {
        return true;
    }
}