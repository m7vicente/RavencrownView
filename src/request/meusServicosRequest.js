import $ from "jquery";
import service from "./ConnectionString";

function meusServicosRequest(id) {
  const url = service() + "/Prestador/Servicos?id=" + id;
  const retorno = $.ajax({
    type: "get",
    contentType: "application/json;charset=UTF-8",
    async: false,
    url: url
  });

  return retorno.responseJSON;
}

export default meusServicosRequest;
