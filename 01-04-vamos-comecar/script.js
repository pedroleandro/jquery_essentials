//Forma padrão de iniciar o jquery
$(document).ready(function () {
    $('.jquery_essentials').html('jQuery iniciado!');
});

//Forma padrão simplificada de iniciar o jquery
$(function () {
    $('.jquery_essentials').html('jQuery iniciado com gatilho!');
});

//Carregando antes de outras bibliotecas
jQuery(function () {
    $('.jquery_essentials').html('jQuery iniciado antes de outra biblioteca!');
});

//Carregando depois de outras bibliotecas
var $jquery = jQuery.noConflict();

$jquery(document).ready(function () {
    $jquery('.jquery_essentials').html('jQuery iniciado depois de outra biblioteca!');
});