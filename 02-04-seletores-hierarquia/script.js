//Forma padrão simplificada de iniciar o jquery
$(function () {
    //seleciona todos os filhos diretos e indiretos com a tag p dentro de article
    $('article p').css('color', 'red');

    //seleciona todos os filhos diretos dentro de article
    $('article > *').css('color', 'blue');

    //seleciona apenas os filhos diretos com a tag p dentro de article
    $('article > p').css('color', 'blue');

    //seleciona o elemento imediatamente seguidos pelo posterior
    $('article + div').css('background', 'yellow');

    //seleciona qualquer imediato seguido do posterior div
    $('div + *').css('background', 'pink');

    //selecionar irmaos dentros de um anterior
    $('div ~ p').text('Irmãos P');

});