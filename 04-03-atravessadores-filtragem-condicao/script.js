$(function () {

    $('p').on('click', function () {

        console.clear();

        var paragrafoClicado = $(this);

        //Verificalção se É uma classe específica
        if (paragrafoClicado.is(".j")) {
            console.log(true);
        } else {
            console.log(false);
        }

        if (paragrafoClicado.is(':first-of-type')) {
            console.log('first')
        }

    });

    //Verificação se EXISTE um elemento filho (marcação) específica
    $("p").has("span").append("<sup>Possui um span</sup>")

    //Verificação se NÃO existe um elemento filho (marcação) específica
    $("p").not(":contains('jQuery')").css("color", "red");

    $("p").not(":eq(2)").css("border", "1px solid red");

    //Verificação através de filtro
    $("p").filter(":contains('jQuery')").css({
        color: "blue",
        border: "1px solid blue"
    });

    $('p').css({
        padding: "10px",
        background: "#eee"
    }).filter(function (indice) {
        return indice % 2 == 0;
    }).css("background", "#ccc");

    //Mapeamento dos elementos a serem percorridos, retornando a posição e o próprio elemento percorrido
    var mapa = $("p").map(function (indice, elemento) {

        console.log($(elemento));

        return "<p>" + $(elemento).html() + " - " + indice + "</p>"

    }).get().join("");

    $("<div>" + mapa + "</div>").appendTo("body");

});
