import $ from "jquery";

function cadastroDeServicoRequest() {
  const nomeServico = document.getElementById("nomeServico").value.toString();
  const descricaoServico = document
    .getElementById("descricaoServico")
    .value.toString();
  const disponivelSim = $("#disponivelSim :selected").val();
  const disponivelNao = $("#disponivelNao :selected").val();
  const precoServico = document.getElementById("precoServico").value.toString();
  const domicilio = $("#domicilio :selected").val();
  const meuEndereco = $("#meuEndereco :selected").val();
  const cadastrarServico = document
    .getElementById("cadastrarServico")
    .value.toString();

  const parameters = JSON.stringify({
    idServico: null,
    idUsuario: null,
    idEndereco: null,
    idCategoria: null,
    Imagens: null,
    nomeServico: nomeServico,
    descricaoServico: descricaoServico,
    tempoExecucao: null,
    precoServico: precoServico,
    localizacaoFixa: null
  });

  $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: "https://ravencrownservice.azurewebsites.net/servicos",
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

export default cadastroDeServicoRequest;
