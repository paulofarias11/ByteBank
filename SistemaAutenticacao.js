/*
    Ser autenticável significa ter o método de autenticar, ou seja, todos que tiverem esse método podem ter acesso ao sistema;
*/

/*
    o meu método estático de login recebe um usuário (funcionários ou cliente) e uma senha p/ verificação, no meu segundo método estático
    verificamos se esse usuário é realmente autenticável através das condicionais, se o método 'autenticar' estiver presente nas classes
    de funcionário ou cliente ('autenticar' in usuario) && se esse método 'autenticar' for realmente uma função dentro do objeto me retorne
    o valor 'true';
    já no login dizemos que se o usuário autenticavel do meu SistemaAutenticacao for verdadeiro e a senha desse usuário também for true
    me retorne esse valor de true, caso contrário retorne falso e negue o acesso;
*/

export class SistemaAutenticacao {
    static login (usuario, senha) {
        if (SistemaAutenticacao.ehAutenticavel(usuario)) { // se no meu sistema de autenticação existir um método de é autenticável que recebe o nosso objeto autenticável;
            return usuario.autenticar(senha);
        }

        return false;
    }

    static ehAutenticavel (usuario) { // método estático pois não precisa de uma instância para chamá-lo; 
        return 'autenticar' in usuario && // o autenticar é o método que utilizamos para fazer a verificação da senha, se esse método existir dentro de quem queremos que seja autenticável ele nos retornará o valor true;
        usuario.autenticar instanceof Function; // o autenticavel nada mais é do que o objeto (cliente ou funcionário) que queremos saber se pode ou não ter acesso ao nosso sistema, então o método 'autenticar' tem que está presente em todos esses objetos para que possa ser chamado, por isso o 'autenticar' tem que ser obrigatoriamente uma função da classe; 
    }
}