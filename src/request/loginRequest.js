import $ from "jquery";

function request() {
  const email = document.getElementById("txtEmail").value.toString();
  const pass = document.getElementById("txtSenha").value.toString();

  const parameters = JSON.stringify({ email: email, senha: pass });

  let sucess = false;

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

  if (result.responseJSON.Id_Usuario > 0) {
    sessionStorage.setItem("login", JSON.stringify(result.responseJSON));
    sucess = true;
  }

  return sucess;
}

export default request;
