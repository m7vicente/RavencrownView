import $ from "jquery";
import service from "../Pages/Components/ConnectionString";

function ValidaDataEscolhida(Data, IdServico, buttom) {
  var disponivel = false;

  const parameters = JSON.stringify({
    idDataAgendamento: null,
    idPrestador: null,
    idServico: IdServico,
    idContrato: null,
    idConsumidor: null,
    idDemanda: null,
    dtAgendamento: Data,
    tipoReserva: "T"
  });

  const response = $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    //url: "https://ravencrownservice.azurewebsites.net/Datas/Validar",
    url: service() + "/Datas/Validar",
    async: true,
    data: parameters
  })
    .done(function(msg) {
      $(function() {
        if (msg == "Disponivel") {
          disponivel = true;
          buttom.removeAttribute("disabled");
        } else {
          alert("Data Indisponivel");
          buttom.setAttribute("disabled", "disabled");
        }
      });
    })
    .fail(function(jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    }).responseJSON;

  console.log(parameters);
  console.log(response);

  return disponivel;
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

export default ValidaDataEscolhida;
