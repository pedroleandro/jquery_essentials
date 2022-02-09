$(function () {

    //Embrulha cada elemento em uma div separada
    // $('p').wrap('<div>');

    //Embrulha todos os elementos selecionados em uma unica div
    $("p").wrapAll("<div>");

    //Embrulha cada elemento selecionado por dentro de um span
    $("p").wrapInner("<span>");

    //Desembrulha o elemento selecionado de seu antecedente.
    $("span").unwrap("p");

    //Embrulha cada os elementos selecionados.
    $("span").wrap("<h2>");
});
