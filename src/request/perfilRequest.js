import $ from "jquery";

function perfilRequest() {
  const nome = document.getElementById("name").value.toString();
  const cpf = document.getElementById("cpf").value.toString();
  const sexo = $("#sexo :selected").val();
  const email = document.getElementById("email").value.toString();
  const telefone = document.getElementById("telefone").value.toString();
  const pais = document.getElementById("pais").value.toString();

  const parameters = JSON.stringify({
    nome: nome,
    email: email,
    id_Usuario: null,
    endereco: {
      pais: pais
    },
    imagem: null,
    cpfCnpj: cpf,
    telefone: telefone,
    sexo: "M",
  
  });

  $.ajax({
    type: "put",
    contentType: "application/json;charset=UTF-8",
    url: "https://ravencrownservice.azurewebsites.net/cadastro",
    data: parameters
  })
    .done(function(msg) {
      console.log(msg);
    })
    .fail(function(jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    });
}

export default cadastroUsuarioRequest;