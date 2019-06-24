import $ from "jquery";
import service from "./ConnectionString";

function contratoRequest(contrato) {
  const parameters = JSON.stringify(contrato);

  console.log(parameters);

  const request = $.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: service() + "/Servico/Agendar",
    async: false,
    data: parameters
  });

  if (request.status == 200) {
    alert("Agendado com sucesso");
    window.location.replace("http://localhost:3000/MeusAgendamentos");
  }
}
export default contratoRequest;
