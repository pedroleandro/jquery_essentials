//Forma padrão simplificada de iniciar o jquery
$(function () {
    $('.jquery_essentials').html('jQuery Essentials!');

    // var jQueryEssentials = "Olá, Mundo!";
    // alert(jQueryEssentials);

    console.log('jQuery Essentials')
    console.info('jQuery foi iniciado com gatilho!');
    console.warn('Atenção');
    console.error('O arquivo não foi encontrado.');

    console.group('Mensagens gerais');
    console.log('jQuery Essentials')
    console.info('jQuery foi iniciado com gatilho!');
    console.warn('Atenção');
    console.error('O arquivo não foi encontrado.');
    console.groupEnd();

    console.group('Cadastro de pessoas');
    console.info('Cadastro iniciado!');

    var cadastro = false;

    if (cadastro === true) {
        console.log('Cadastro realizado.');
    } else {
        console.warn('Erro ao cadastrar!')
    }

    console.groupEnd();

});