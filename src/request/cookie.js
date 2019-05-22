import $ from "jquery";

const nome = document.getElementById("name").value.toString();

const parameters = JSON.stringify({ 
    nome: nome
});

$.cookie('the_cookie', parameters);
