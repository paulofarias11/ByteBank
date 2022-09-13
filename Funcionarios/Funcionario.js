export class Funcionario {
    constructor (nome, cpf, rg, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._rg = rg;
        this._salario = salario;

        this._bonificacao = 1;
        this._senha;
    }

    autenticar (senha) {
        return senha == this._senha;
    }

    cadastrarSenha (senha) {
        return this._senha = senha;
    }
}