const form = document.getElementById('form-deposito');
//const numberA = document.getElementById('Campo-A');
//const numberB = document.getElementById('Campo-B');
//const numberC = numberB.value - numberA.value;
//let formEvalido = numberC > 0;

//console.log(formEvalido);


const eventA = document.getElementById('Campo-A');
const eventB = document.getElementById('Campo-B');

function validaNumero(b){
    var A = eventA.value;
    var B = eventB.value;
    var b = B - A;
    return b > 0;
}

formEvalido = validaNumero();




eventA.addEventListener('keyup', function(e){
    
    console.log(e.target.value);
    formEvalido = validaNumero(e.target.value);

    if(!formEvalido){
        eventA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        eventA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';

    }

})


eventB.addEventListener('keyup', function(e){
    
    console.log(e.target.value);
    formEvalido = validaNumero(e.target.value);

    if(formEvalido){
        eventA.style.border = '';
        eventA.style.color = '';
        eventB.classList.remove('error');
        eventA.classList.add('ok');
        document.querySelector('.error-message').style.display = 'none';
        
    } else {
        eventB.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';

    }

})







form.addEventListener('submit', function(e){

e.preventDefault();

const mensagemsucesso = `Operação realizada com sucesso: <b>${eventB.value}</b> é maior que <b>${eventA.value}</b>, Ok!!!!!`


if(formEvalido){
    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemsucesso;
    containerMensagemSucesso.style.display = 'block';
    eventA.classList.remove('error');
    document.querySelector('.error-message').style.display = 'none';
    

    eventA.value = '';
    eventB.value = '';

    //numberA.value = '';
    //numberB.value = '';
} else{
    eventA.classList.add('error');
    //eventA.style.border = '1px solid red';
    document.querySelector('.error-message').style.display = 'block';
    eventA.value = '';
    eventB.value = '';
    
    

    //numberA.value = '';
    //numberB.value = '';
}

})












