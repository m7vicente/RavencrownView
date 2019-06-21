import $ from "jquery";
import service from "./ConnectionString";

function request() {
  const email = document.getElementById("txtEmail").value.toString();
  const pass = document.getElementById("txtSenha").value.toString();

  const parameters = JSON.stringify({ email: email, senha: pass });

  let sucess = false;

  const url = service() + "/login";

  const result = $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: url,
    data: parameters,
    async: false
  });

  if (result.status == 200) {
    if (result.responseJSON.Id_Usuario > 0) {
      sessionStorage.setItem("login", JSON.stringify(result.responseJSON));
      sucess = true;
    }
  } else {
    sessionStorage.setItem("postback", "true");
    alert("Login ou Senha Invalidos");
  }

  return sucess;
}

export default request;
