import { Funcionario } from "./Funcionario.js";

export class Diretor extends Funcionario {
    constructor (nome, cpf, rg, salario) {
        super (nome, cpf, rg, salario);
        this._bonificacao = 2;
    }
}