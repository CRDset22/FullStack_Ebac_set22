"use strict";
const multiplicador = (numero1, numero2, multiplicador) => {
    const resultado1 = numero1 * multiplicador;
    const resultado2 = numero2 * multiplicador;
    console.log(`Resultado 1: ${resultado1}`);
    console.log(`Resultado 2: ${resultado2}`);
    return [resultado1, resultado2];
};
const saudacao = (nome) => {
    const mensagem = `Olá ${nome}`;
    console.log(mensagem);
    return mensagem;
};
saudacao("Alberto");
