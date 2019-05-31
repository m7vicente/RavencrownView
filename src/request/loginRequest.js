import $ from "jquery";

function request() {
  const email = document.getElementById("txtEmail").value.toString();
  const pass = document.getElementById("txtSenha").value.toString();

  const parameters = JSON.stringify({ email: email, senha: pass });

  const result = $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: "https://ravencrownservice.azurewebsites.net/login",
    data: parameters,
    async: false
  })
    .done(function(msg) {})
    .fail(function(jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    });

  sessionStorage.setItem("login", JSON.stringify(result.responseJSON));
}

export default request;
