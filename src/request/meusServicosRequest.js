import $ from "jquery";
import service from "./ConnectionString";

function meusServicosRequest(id) {
  const retorno = $.ajax({
    type: "get",
    contentType: "application/json;charset=UTF-8",
    async: false,
    url:
      service() + "/Prestador/Contratos?Id=" + id
  })
    .done(function(msg) {
      return JSON.stringify(msg);
    })

    .fail(function(jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    });

  return retorno.responseJSON;
}

export default meusServicosRequest;
