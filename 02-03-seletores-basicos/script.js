//Forma padrão simplificada de iniciar o jquery
$(function () {

    //Seletor de elementos
    $('b').text('jQuery Essentials');
    console.warn($('b')[0].offsetTop);
    console.log($('b'));

    //Seletor de classes
    $('.jquery').css('color', 'red');

    //Seletor de id's
    $('#jquery').text('jQuery Essentials');

    //Seletor de todos os elementos
    // $('*').css("border", "1px solid #ccc");

    //Seletor de todos os elementos filhos da div
    // $('div *').css("border", "1px solid #ccc");

    $('.jquery, b').css({
        background: "blue",
        color: "red",
        'border-radius': "4px",
        padding: "10px",
        'font-size': "1.4em"
    });

    $('b').add('p').css('font-size', '2em');

});