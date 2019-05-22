import $ from "jquery";

function cadastroUsuarioRequest() {
  const nome = document.getElementById("name").value.toString();
  const rg = document.getElementById("rg").value.toString();
  const cpf = document.getElementById("cpf").value.toString();
  const data= document.getElementById("data").value.toString().split('/');
  const dataNasc = data[2] + "-" + data[1] + "-" + data[0];
  const estadoCivil = document.getElementById("estadoCivil").value.toString();
  const sexo = $("#sexo :selected").val();

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
    id_Usuario: null,
    endereco: {
    id_Endereco: null, 
    rua: rua,
    cep: cep, 
    complemento: complemento,
    numero: numero, 
    referencia: null,
    bairro: bairro, 
    cidade: cidade,
    estado: estado,
    pais: pais
    },
    imagem: null, 
    cpfCnpj: cpf, 
    rg: rg, 
    telefone: telefone,  
    prestador: false, 
    sexo: "M",
    estadoCivil: estadoCivil,
    data_Nascimento: dataNasc
    });

  $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: "http://localhost:8080/cadastro",
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

