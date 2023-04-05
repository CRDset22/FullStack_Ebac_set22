$(document).ready(function() {
    
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const NovaTarefa = $('#insertarefa').val();
        const novoItem = $('<li></li>');
        $(`<p>${NovaTarefa}</p>`).appendTo(novoItem);
        $(novoItem).click(function() {
        $(this).css('text-decoration', 'line-through');
        });
        //$(novoItem).css('text-decoration', 'line-through').css('cursor', 'pointer');
        $(novoItem).appendTo('ul').click(function() {
            $(this).css('text-decoration', 'line-through').css('cursor', 'pointer')
        });
        $('#insertarefa').val('');

    })

})