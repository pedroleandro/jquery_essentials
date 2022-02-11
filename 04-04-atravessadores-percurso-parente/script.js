$(function () {
    //Seleciona os filhos de uma tag específica.
    $(".article").children().css("font-family", "Open Sans, regular");
    $(".article").children(".article_content").css("margin-bottom", "30px");
    $(".article_content").children("p").css("font-size", "0.8em");

    //Seleciona os irmãos diretos dentro do mesmo contexto de uma tag espefícica
    $(".article_content p").siblings().css("color", "#777")

    //Seleciona os irmãos diretos dentro do mesmo contexto de uma tag espefícica filtrando por uma classe específica
    $(".article_content p").siblings('.a').css("color", "#09f")


    $(".article_content b").parent().css({
        padding: "10px",
        background: "#fbfbfb"
    }).parent("div").css({
        "padding-bottom": "15px",
        "border-bottom": "5px solid #eee"
    });

    //parents() retorna do elemento atual até o inicío da árvore passando por todos os elementos
    $("p").on("click", function () {
        // $(this).parents().toggleClass("active");
        $(this).parents("article").toggleClass("active");

        var data = new Date();
        $(".date").remove();
        $(this).parents('div:last').append("<div class='date'>" + data.getUTCHours() + ":" + data.getUTCMinutes() + ":" + data.getUTCSeconds() + "</div>");
    })

    //closest() retorna do elemento atual até um elemento específico da árvore passado por parâmetro na função
    $("b").closest("p").css("border-top", "1px solid #09f")

});
