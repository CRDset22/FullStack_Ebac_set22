"use strict";

console.log("Hello !!!!!");
var alunos = [{
  nome: 'João',
  nota: 8
}, {
  nome: 'Maria',
  nota: 5
}, {
  nome: 'Pedro',
  nota: 6
}, {
  nome: 'Ana',
  nota: 7
}];
var alunosAprovados = function alunosAprovados(arrayDeAlunos) {
  var aprovados = arrayDeAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
  return aprovados;
};
var alunosAprovadosArray = alunosAprovados(alunos);
console.log(alunosAprovadosArray);