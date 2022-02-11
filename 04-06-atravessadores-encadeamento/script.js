$(function () {

    var elemento = $(".article");

    //end() termina o filtro encadeado naquele elemento

    //add() adiciona um determinado comportamento para aquele elemento

    elemento.css({
        "font-size": "1em",
        "margin-bottom": "20px"
    }).end().add(".article_content p").css({
        "font-size": "0.8em"
    });

    var botao = "<p class='more load'>Carregando mais 1</p>";

    $(botao).appendTo(elemento.parent());

    //Monitorar a div pai (body) quando elementos forem adicionados dinamicamente a partir de um evento
    $("body").on("click", ".more", function () {

        $(this).stop().fadeOut(100, function () {

            $(".article:last")
                .clone()
                .add(botao)
                .css("display", "none")
                .appendTo($(".article:last").parent())
                .slideDown(300, function () {

                    $("html, body").stop().animate({scrollTop: $(this).offset().top}, 1000);

                });

        });

    });

    console.clear();
    console.log($(".article").add());
    console.log($(".article").addBack());

});
