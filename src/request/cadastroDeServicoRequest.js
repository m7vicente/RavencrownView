import $ from "jquery";

function cadastroDeServicoRequest() {
  const nomeServico = document.getElementById("nomeServico").value.toString();
  const descricaoServico = document.getElementById("descricaoServico").value.toString();
  const disponivelFds = $("#disponivelFds :selected").val();
  const precoServico = document.getElementById("precoServico").value.toString();
  const localAtendimento = $("#localAtendimento :selected").val();

  const parameters = JSON.stringify({
    idServico: null,
    idUsuario: null,
    Endereco: {
      id_Endereço: null,
      rua: "Rua teste",
      cep: "00000-000",
      complemento: null,
      numero: '24',
      referencia: null,
      bairro: "Bairro teste",
      cidade: "Cidade teste",
      estado: "SP",
      pais: "Brasil"
    },
    idCategoria: "1",
    Imagens: null,
    nomeServico: nomeServico,
    descricaoServico: descricaoServico,
    tempoExecucao: null,
    precoServico: precoServico,
    localizacaoFixa: null,
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
