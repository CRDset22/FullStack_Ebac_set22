$(document).ready(function(){

    
    $('#telefonefixo').mask('(00) 0000-0000');
    $('#telefonecelular').mask('(00) 00000-0000');
    $('#CPFnumber').mask('000.000.000-00');
    $('#CEPnumber').mask('00000-000');


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone1: {
                required: false
            },
            telefone2: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            cpfnumber: {
                required: true
            },
            endereco: {
                required: true
            },
            CEPnumber: {
                required: true
            },
            mensagem: {
                required: false,
            },
            
        },
        messages: {
            nome: 'Insira seu nome completo'
        },
        
        submitHandler: function(form) {
            console.log(form)
        },
        
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})
