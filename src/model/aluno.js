function alunoModel() {
  const listaDeAlunos = [];

  function adicionarAluno(aluno) {
    listaDeAlunos.push(aluno);
  }

  function removerAluno(aluno) {
    const indice = listaDeAlunos.findIndex(
      (alunoLista) => aluno === alunoLista
    );
    if (indice) {
    }
  }

  return {
    adicionarAluno,
    removerAluno,
  };
}

export default alunoModel();
