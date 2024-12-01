$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novoValor = $('input').val();
        const novoItem = $('<li style="display: none"><p></p></li>').find('p').text(novoValor).end();
        // Adicione o novo item à lista (por exemplo, uma ul com id 'lista')
        $('#lista').append(novoItem);
        novoItem.fadeIn();
        $('input').val('');
    });

    // Adicione o manipulador de eventos para os itens da lista
    $('#lista').on('click', 'p', function() {
        $(this).css('text-decoration', 'line-through');
    });
});