$(function () {

    $('.adicionar').on('click', function () {

        var conteudo = $('.texto')[0].value;

        if (conteudo != "") {
            $("<p>" + conteudo + "</p>").appendTo($('.area'));
        }

    });

});