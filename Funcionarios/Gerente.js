import { Funcionario } from "./Funcionario.js";

export class Gerente extends Funcionario {
    constructor (nome, cpf, rg, salario) {
        super (nome, cpf, rg, salario);
        this._bonificacao = 1.1;
    }
}