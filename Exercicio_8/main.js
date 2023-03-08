const form = document.getElementById('form-contatos');
const inputPrioridade = document.getElementById('Prior');
const imgIndiferente = '<img src="./Images/Indiferente.png" alt="Nenhuma Relevância" />';
const imgBoa = '<img src="./Images/Bom.jpg" alt="Boa Relevância" />';
const imgOtima = '<img src="./Images/Ótimo.jpg" alt="Ótima Relevância" />';
const imgIncrivel = '<img src="./Images/Incrivel.jpg" alt="Relevância Íncrivel" />';

let linhas = '';

form.addEventListener('submit', function(e){

    e.preventDefault();
    
    const inputnomecontato = document.getElementById('nomecontato');
    const inputelefone = document.getElementById('telefone');
    
    
    
    let linha = '<tr>';
    linha += `<td>${inputnomecontato.value}</td>`;
    linha += `<td>${inputelefone.value}</td>`;
    linha += `<td>${inputPrioridade.value <= 0 ? imgIndiferente : inputPrioridade.value == 1 ? imgBoa : inputPrioridade.value == 2 ? imgOtima : inputPrioridade.value == 3 ? imgIncrivel : ''} </td>`;
    linha += '</tr>';

    linhas += linha;

    const corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML = linhas;

    inputnomecontato = '';
    inputelefone = '';
    inputPrioridade = '';

    

});