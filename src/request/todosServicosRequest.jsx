import $ from "jquery";
import service from "./ConnectionString";

function getAllServicesById(id) {

  const url = service() + "/Servicos/Categoria?categoria=" +
    id + "&login=" + JSON.parse(sessionStorage.getItem("login")).id_Usuario;

  const ServerResponse = $.ajax({
    type: "get",
    contentType: "application/json;charset=UTF-8",
    async: false,
    url: url
  });

  if (ServerResponse.status == 200) {
    return ServerResponse.responseJSON;
  }
}

export default getAllServicesById;
