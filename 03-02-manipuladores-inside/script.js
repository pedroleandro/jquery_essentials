$(function () {

    //Recupera o texto sem marcações
    var conteudo = $('.j').text();
    $('.e').text(conteudo);

    //Recupera o texto com as marcações html
    var conteudoComHtml = $('.j').html();
    $('.e').html(conteudoComHtml);

    //Adiciona o conteúdo com ou sem marcação na div selecionada
    $('.e').append("<p>" + conteudo + "</p>")
    $('.e').append("<p>" + conteudoComHtml + "</p>")

    //Adiciona o conteúdo para um local específico no final
    $('.a').appendTo($('.e'));

    //Adiciona o conteúdo para um local específico no inicio
    $('.e').prepend("<h2>Resultados: </h2>");

    //Adiciona o conteúdo para um local específico após uma posição específica
    $("<p>Exemplos: </p>").prependTo($('.e p:first'));

});
