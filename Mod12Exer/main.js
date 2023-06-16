$(document).ready(function(){

    
    $('#telefonefixo').mask('(00) 0000-0000');
    $('#telefonecelular').mask('(00) 00000-0000');
    


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
            mensagem: {
                required: false,
            },
            
        },
        messages: {
            nome: 'Obrigatório insira seu nome completo',
            telefone2: 'Obrigatório insira seu número de celular',
            email: 'Obrigatório insira seu e-mail'
        },
        
        submitHandler: function(form) {
            console.log(form)
        },
        
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incompleto(s)`)
            }
        }
    })
})
