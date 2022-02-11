$(function () {

    $(".article_content").find("p").css({
        "font-size": "0.8em"
    });

    $(".article").find(".article_link").on("click", function () {

        $(this).parent().find(".article_content p").toggleClass("active");
        $(this).toggleClass("active");
        return false;

    });

    //obtem o irmão imediatamente próximo ao elemento selecionado
    $(".article_content p:first").next().addClass("active");
    $(".article_content p:first").nextAll().addClass("active");

    //obtem o irmão imediatamente anterior ao elemento selecionado
    $(".article_content p:last").prev().removeClass("active");
    $(".article_content p:last").prevAll().addClass("active");

    $("p").removeClass("active");

    //Clonando objetos
    $(".article_content p:first").clone().addClass("active").appendTo(".article_content");
    $(".article_content p:first").clone().removeClass("active").appendTo(".article_content");
    $(".article_content p:first").clone().addClass("active").appendTo(".article_content");

    //seleciona os elementos até determinado elemento que contém ou não uma determinada classe
    // $(".article_content p:first").nextUntil().fadeOut(2000);
    $(".article_content p:first").nextUntil("", ".active").fadeOut(2000); //(seletor, filtro)

});
