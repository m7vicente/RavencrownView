import $ from "jquery";
import pegaDadosDom from "../Pages/CadastroDeServico";
import pegaDadosEnd from "../Pages/Components/modal";

function cadastroDeServicoRequest() {
  var rua;
  var cep;
  var complemento;
  var numero;
  var referencia;
  var bairro;
  var cidade;
  var estado;
  var id_Endereco;

  if ($("#casa").is(":checked")) {
    rua = JSON.parse(sessionStorage.getItem("login")).endereco.rua;
    cep = JSON.parse(sessionStorage.getItem("login")).endereco.cep;
    complemento = JSON.parse(sessionStorage.getItem("login")).endereco
      .complemento;
    numero = JSON.parse(sessionStorage.getItem("login")).endereco.numero;
    id_Endereco = JSON.parse(sessionStorage.getItem("login")).endereco
      .id_Endereco;
    referencia = JSON.parse(sessionStorage.getItem("login")).endereco
      .referencia;
    bairro = JSON.parse(sessionStorage.getItem("login")).endereco.bairro;
    cidade = JSON.parse(sessionStorage.getItem("login")).endereco.cidade;
    estado = JSON.parse(sessionStorage.getItem("login")).endereco.estado;
  } else {
    rua = document.getElementById("rua").value.toString();
    cep = document.getElementById("cep").value.toString();
    complemento = document.getElementById("complemento").value.toString();
    numero = document.getElementById("numero").value.toString();
    referencia = document.getElementById("referencia").value.toString();
    bairro = document.getElementById("bairro").value.toString();
    cidade = document.getElementById("cidade").value.toString();
    estado = document.getElementById("estado").value.toString();
    id_Endereco = null;
  }
  const nomeServico = document.getElementById("nomeServico").value.toString();
  const descricaoServico = document
    .getElementById("descricaoServico")
    .value.toString();
  const a = document.getElementById("precoServico").value;
  const precoServico = parseFloat(a);
  const idUsuario = JSON.parse(sessionStorage.getItem("login")).Id_Usuario;
  const idCategoria = $("#categoria option:selected").val();

  const parameters = JSON.stringify({
    idServico: null,
    idUsuario: idUsuario,
    endereco: {
      id_Endereco: null,
      rua: rua,
      cep: cep,
      complemento: complemento,
      numero: numero,
      referencia: referencia,
      bairro: bairro,
      cidade: cidade,
      estado: estado,
      pais: "Brasil"
    },
    idCategoria: idCategoria,
    Imagens: null,
    nomeServico: nomeServico,
    descricaoServico: descricaoServico,
    tempoExecucao: "2019-06-04T23:18:24",
    precoServico: precoServico,
    localizacaoFixa: "true"
  });

  console.log(parameters);

  $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: "https://ravencrownservice.azurewebsites.net/Servico",
    async: false,
    data: parameters
  })

    .done(function(msg) {
      if (document.getElementById("iptRecomendacao").files[0] != null) {
        inserirCSV();
      }

      $(function() {
        $("#mdl").trigger("click");
      });
      //document.getElementById("mdl").click();
    })

    .fail(function(jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    });
}

function inserirCSV() {
  const fileURL = document.getElementById("iptRecomendacao").files[0];

  var form = new FormData();
  form.append("file", fileURL);
  form.append("id", JSON.parse(sessionStorage.getItem("login")).Id_Usuario);

  $.ajax({
    async: false,
    crossDomain: true,
    url: "http://localhost:8080/",
    method: "POST",
    processData: false,
    contentType: false,
    mimeType: "multipart/form-data",
    data: form
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

export default cadastroDeServicoRequest;
