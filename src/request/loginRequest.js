import $ from "jquery";

function request() {
  const email = document.getElementById("txtEmail").value.toString();
  const pass = document.getElementById("txtSenha").value.toString();

  const parameters = JSON.stringify({ email: email, senha: pass });

  $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: "http://localhost:8080/login",
    data: parameters
  })
    .done(function(msg) {
      sessionStorage.setItem("login", JSON.stringify(msg));
    })
    .fail(function(jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    });
}

export default request;
