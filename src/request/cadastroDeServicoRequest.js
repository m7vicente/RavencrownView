import $ from "jquery";
import service from "./ConnectionString";

function cadastroDeServicoRequest(servico, endereco) {
  // console.log(tempo);
  const parameters = null;
  // const parameters = JSON.stringify({
  //   idServico: null,
  //   idUsuario: idUsuario,
  //   endereco: endereco,
  //   idCategoria: idCategoria,
  //   Imagens: null,
  //   nomeServico: nomeServico,
  //   descricaoServico: descricaoServico,
  //   tempoExecucao: tempo,
  //   precoServico: precoServico,
  //   localizacaoFixa: endereco == null
  // });

  // console.log(endereco);
  // console.log(parameters);

  $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: service() + "/Servico",
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
  });
}

export default cadastroDeServicoRequest;
