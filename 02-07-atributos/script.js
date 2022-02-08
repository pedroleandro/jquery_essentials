//Forma padrão simplificada de iniciar o jquery
$(function () {
    //seleciona todos os elementos que possuem alguma class
    $('[class]').css('background', '#ccc');

    //seleciona os elementos com data-upinside igual a true
    $('[data-upinside="true"]').css('background', '#006699');

    //seleciona os elementos que possuem título
    $('[title]').css('background', 'yellow');

    //seleciona os elementos que possuem título diferentes de "UpInside" dentro de a
    $('a[title!="UpInside"]').css('background', 'red');

    //seleciona os elementos que comecam com a palavra definida
    $('[class^="jquery"]').css('background', '#0099ff');

    //seleciona os elementos que terminam com a palavra definida
    $('[class$="Div"]').css('color', '#fff');

    //seleciona os elementos onde aparecem todas as ocorrências das palavras
    $('[class*="r"]').css('font-weight', 'bold');

    //seleciona os elementos que contém a palavra reservada na classe
    $('[class~="jquery"]').css('text-transform', 'uppercase');

    //seleciona os elementos que contem hifén em si e seguidos de hifém
    $('[class|="jquery-essentials"]').css('border-bottom', '5px solid red');

    //seleciona todos que contem jquery e data-upinside
    $('[class*="jquery"][data-upinside]').css('color', 'orange');
});