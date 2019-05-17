var email = document.getElementById('txtEmail');
var pass = document.getElementById('txtSenha');

const parameters = { 'email': email, 'senha': pass };

$.ajax({
    method: "POST",
    url: "localhost:8080/login",
    data: JSON.parse(parameters)
}).done(function (msg) {
    console.log(msg);
})
    .fail(function (jqXHR, textStatus, msg) {
        alert(msg);
});

//////// UTILIZANDO O MÉTODO POST DO JQUERY //////

/* $.post("salvar_dados.php", {
    email: userName, pass: userpass
}, function (msg) {
    $("#resultado").html(msg);
}) */