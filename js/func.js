$(function(){

    $.ajax({
        url: 'conteudo.html'
    })
    .done(function(data){
        $('#container').append(data);
    });

});
