import $ from "jquery";

function getAllServicesById(id) {
  const retorno = $.ajax({
    type: "get",
    contentType: "application/json;charset=UTF-8",
    async: false,
    url:
      "https://ravencrownservice.azurewebsites.net/Servicos/Categoria?categoria=" +
      id
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

export default getAllServicesById;
