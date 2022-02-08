//Forma padrão simplificada de iniciar o jquery
$(function () {
    //filtra (seleciona) todos os paragrafos, exceto os que tem a classe p
    $("p:not('.p')").css('font-weight', 'bold');

    //seleciona o primeiro
    $('p:first').css('color', 'red');

    //seleciona o último
    $('p:last').css('color', 'red');

    //seleciona os pares
    $('p:even').css('background', '#eee');

    //seleciona os ímpares
    $('p:odd').css('background', '#ccc');

    //seleciona uma tag com uma posição específica
    $('p:eq(4)').text('jQuery Essentials');

    //seleciona os que estão depois de uma posição específica
    $('p:gt(4)').text('posteriores');

    //seleciona os que estão antes de uma posição específica
    $('p:lt(4)').text('anteriores');

    $('.list :header').css({
        'font-size': "1,4em",
        color: "#888"
    });

    $('.list :header span').css('color', 'blue');

    //animações: slideToggle, fadeToggle
    function animarElemento(elemento) {
        $(elemento).fadeToggle(400, function () {
            animarElemento(elemento);
        });
    }

    var numero = 1;

    setInterval(function () {
        $(':animated').text(numero)
        numero++;
    }, 800);

    animarElemento('.list span')

    $(':focus').css('padding', "10px");

    console.log($(":root"));
});