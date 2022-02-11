$(function () {

    $.each($("p"), function (indice, elemento) {
        var elementoAtual = $(elemento);

        elementoAtual.html(elementoAtual.html() + " - " + indice);
    })

    $('p').eq(1).css("color", "red");
    $('p').eq(2).css("color", "orange");
    $('p').first().css("color", "gray");
    $('p').last().css("color", "silver");

    //Selecionar elementos em um intervalo específico
    $('p').slice(0, 4).css({
        background: "#000",
        padding: '10px'
    });

});
