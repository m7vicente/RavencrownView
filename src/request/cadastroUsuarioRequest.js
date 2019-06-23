import $ from "jquery";
import service from "./ConnectionString";

function cadastroUsuarioRequest() {
  const nome = document.getElementById("name").value.toString();
  const rg = document.getElementById("rg").value.toString();
  const cpf = document.getElementById("cpf").value.toString();
  const data = document
    .getElementById("data")
    .value.toString()
    .split("/");
  //const dataNasc = data[2] + "-" + data[1] + "-" + data[0];
  const timee = document.getElementById("data").value;
  const estadoCivil = document.getElementById("estadoCivil").value.toString();
  var sexo;

  if ($("#sexoM").is(":checked")) {
    sexo = 'M'
  } else  {
    sexo = 'F'
  }

  const email = document.getElementById("email").value.toString();
  const telefone = document.getElementById("telefone").value.toString();
  const senha = document.getElementById("password").value.toString();

  const rua = document.getElementById("rua").value.toString();
  const numero = document.getElementById("numero").value.toString();
  const complemento = document.getElementById("complemento").value.toString();
  const cep = document.getElementById("cep").value.toString();
  const bairro = document.getElementById("bairro").value.toString();
  const cidade = document.getElementById("cidade").value.toString();
  const estado = document.getElementById("estado").value.toString();
  const pais = document.getElementById("pais").value.toString();

  const parameters = JSON.stringify({
    nome: nome,
    email: email,
    senha: senha,
    Id_Usuario: null,
    endereco: {
      id_Endereco: null,
      cidade: cidade,
      rua: rua,
      complemento: complemento,
      cep: cep,
      numero: numero,
      referencia: null,
      bairro: bairro,
      pais: pais,
      estado: estado      
    },
    imagem: 
    {},
    cpfCnpj: cpf,
    RG: rg,
    telefone: telefone,
    sexo: sexo,
    estadoCivil: estadoCivil,
    data_Nascimento: timee,
    prestador: false    
  });

console.log(parameters)

  $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: service() + "/Cadastro",
    async: false,
    data: parameters
  })
    .done(function (msg) {
      console.log(msg);
    })
    .fail(function (jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    });
}

export default cadastroUsuarioRequest;
