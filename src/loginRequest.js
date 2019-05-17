var email = document.getElementById('txtEmail');
var pass = document.getElementById('txtSenha');

var request = $.ajax({
    method: "POST",
    url: "localhost:8080/usuarios",
    data: { email: userName, pass: userpass }
})

//////// UTILIZANDO O MÉTODO POST DO JQUERY //////

/* $.post("salvar_dados.php", {
    email: userName, pass: userpass
}, function (msg) {
    $("#resultado").html(msg);
}) */