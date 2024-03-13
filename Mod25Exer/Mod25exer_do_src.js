console.log("Hello !!!!!")

let alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 6 },
    { nome: 'Ana', nota: 7 }
];

const alunosAprovados = (arrayDeAlunos) => {
    const aprovados = arrayDeAlunos.filter(aluno => aluno.nota >= 6);
    return aprovados;
}

const alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);