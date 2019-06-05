import $ from "jquery";

function cadastroDeServicoRequest() {
  const nomeServico = document.getElementById("nomeServico").value.toString();
  const descricaoServico = document
    .getElementById("descricaoServico")
    .value.toString();
  const disponivelFds = $("#disponivelFds :selected").val();
  const precoServico = document.getElementById("precoServico").value.toString();
  const localAtendimento = $("#localAtendimento :selected").val();

  const parameters = JSON.stringify({
    idServico: null,
    idUsuario: "10",
    endereco: {
      id_Endereco: null,
      rua: "Rua Das Orquideas",
      cep: "0000-000",
      complemento: null,
      numero: "69",
      referencia: null,
      bairro: "Jardim das Flores",
      cidade: "Porto Real",
      estado: "UK",
      pais: "A Terra do REU"
    },
    idCategoria: "1",
    Imagens: null,
    nomeServico: nomeServico,
    descricaoServico: descricaoServico,
    tempoExecucao: "2019-06-04T23:18:24",
    precoServico: precoServico,
    localizacaoFixa: "true"
  });

  $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: "https://ravencrownservice.azurewebsites.net/Servico",
    async: false,
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
