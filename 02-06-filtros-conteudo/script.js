//Forma padrão simplificada de iniciar o jquery
$(function () {
    //seleciona todos os elementos que tem algum conteudo
    $("p:parent").css('background', 'red');

    //seleciona todos os elementos que nao tem conteudo
    $("p:empty").html('Esse paragrafo estava vazio');

    //seleciona os elementos que contém a ocorrência de alguma coisa (conteúdo)
    $("p:contains('used since the 1500s')").css('color', '#fff');

    //seleciona os elementos que contém a ocorrência da tag
    $("p:has('b')").text('Ipsum');
});