import cadastrarAluno from "../useCase/aluno/cadastrarAluno";

function alunoController() {
  async function novoAluno(req, res) {
    const { name, lastName, nota } = req.body;

    cadastrarAluno({ name, lastName, nota });
  }

  return {
    novoAluno,
  };
}

module.exports = alunoController();

//isto abaixo é um ciclo, tipo um loop. Mas dependendo do caso acontece nas sequencias:
// routes > controller > services > model (recebendo dado do usuario e colocando-o no banco de dados)
// model > services > controller > routes  (enviando dado do banco de dados pro usuario)

//model == banco de dados , ele tem as config do bd

//services ou useCase
//service é uma factory que geralmente é bem específica, tipo pra cadastrar usuario e etc... ex, alunoController seria uma service, pq é específico pra alunos
//useCASE (caso de uso) ele é isolado, é uma função única... ex, novoAluno seria um useCase

// ----

// no mvc o costume é usarmos serviços
// Services (Serviços):

// Os serviços geralmente representam operações ou funcionalidades que são reutilizáveis em toda a aplicação.
// Eles encapsulam a lógica de negócios que não se encaixa perfeitamente em nenhum modelo específico.
// Podem se comunicar com um ou mais modelos e coordenar sua interação.
// Exemplos: userService.js, emailService.js.

// ----

// Use Cases (Casos de Uso):

// Os casos de uso representam uma ação ou tarefa específica que a aplicação pode realizar.
// Eles encapsulam a lógica de negócios relacionada a uma única tarefa ou objetivo específico.
// Geralmente são mais granulares e específicos do que os serviços.
// Os casos de uso podem depender de serviços e modelos para realizar suas operações.
// Exemplos: registerUserUseCase.js, createProductUse
