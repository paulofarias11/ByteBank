import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Contas/ContaCorrente.js";
import { ContaPoupanca } from "./Contas/ContaPoupanca.js";
import { ContaSalario } from "./Contas/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";

//const cliente1 = new Cliente ("Paulo Ricardo Farias Rocha", 22,  4932127529, 34398384);
 // objetos ou instâncias serão as const, atributos serão todos abaixo dela;

//const cliente2 = new Cliente ("Mário Sérgio da Silva Rocha", 46, 27024281855, 52617358);

//const contaCorrentePaulo = new ContaCorrente (cliente1, 1001);
//const contaPoupancaPaulo = new ContaPoupanca (cliente1, 1001, 100);
//const ContaSalarioPaulo = new ContaSalario (cliente1);

//contaCorrentePaulo.depositar(500);
//contaCorrentePaulo.sacar(100);
//contaPoupancaPaulo.sacar(20);
//ContaSalarioPaulo.depositar(100);
//ContaSalarioPaulo.sacar(10);

//const contaCorrenteMario = new ContaCorrente (cliente2, 1002); // o valor inicial da conta corrente deverá ser declarado 0;
//contaCorrentePaulo.transferir(90, contaCorrenteMario);

//console.log(contaPoupancaPaulo);
//console.log(contaCorrentePaulo);
//console.log(ContaSalarioPaulo)
//console.log(contaCorrenteMario);

const gerente = new Gerente ('Enzo Gabriel Farias Rocha', 13142364534, 24542534, 10000);
const diretor = new Diretor ('Nathan Farias Melo', 37261572636, 27361254, 5000);
diretor.cadastrarSenha('123456789');
gerente.cadastrarSenha('123456');

const gerenteEstaLogado = SistemaAutenticacao.login (gerente, '123456');
const diretorEstaLogado = SistemaAutenticacao.login (diretor, '123456789');

const cliente = new Cliente ('Laís', 23, 16252615257, 32635154, 301910);
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 301910);

console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);