import $ from 'jquery';

function contratoRequest(){

  const idServico = document.getElementById('IdServico').value;
  const idUsuario = document.getElementById('IdUsuario').value;
  const idConsumidor = JSON.parse(sessionStorage.getItem("login")).Id_Usuario;
  const valorFinal = document.getElementById("valor").value; 
  const data = document.getElementById('inicio').value.toString().split("/");
  var dataAgend1 = data[2] + "-" + data[1] + "-" + data[0];

  const data2 = document.getElementById('fim').value.toString().split("/");
  var dataAgend2 = data2[2] + "-" + data2[1] + "-" + data2[0];

  const rua = JSON.parse(sessionStorage.getItem("login")).endereco.rua;
  const cep = JSON.parse(sessionStorage.getItem("login")).endereco.cep;
  const complemento = JSON.parse(sessionStorage.getItem("login")).endereco.complemento;
  const numero = JSON.parse(sessionStorage.getItem("login")).endereco.numero;
  const idEndereco = JSON.parse(sessionStorage.getItem("login")).endereco.id_Endereco;
  const referencia = JSON.parse(sessionStorage.getItem("login")).endereco.referencia;
  const bairro = JSON.parse(sessionStorage.getItem("login")).endereco.bairro;
  const cidade = JSON.parse(sessionStorage.getItem("login")).endereco.cidade;
  const estado = JSON.parse(sessionStorage.getItem("login")).endereco.estado;

  const parameters = JSON.stringify({
    idContrato: null,
    idServico: idServico,
    endereco: {
        rua: rua,
        cep: cep,
        complemento: complemento,
        pais: 'Brasil',
        id_Endereco: idEndereco,
        numero: numero,
        referencia: referencia,
        bairro: bairro,
        cidade: cidade,
        estado: estado
    },
    idPrestador: idUsuario,
    idConsumidor: idConsumidor,
    idDemanda: null,   
    valor_Final: valorFinal,
    pago: false, 
    aprovado_Consumidor: false,
    aprovado_Prestador: true,
    datas: [
        {
            idDemanda: 0,
            dtAgendamento: dataAgend1,
            tipoReserva: 'T',
            idServico: idServico,
            idConsumidor: idConsumidor,
            idContrato: null,
            idDataAgendamento: 0,
            idPrestador: 0
        },
        {
            idDemanda: 0,
            dtAgendamento: dataAgend2,
            tipoReserva: 'T',
            idServico: idServico,
            idConsumidor: idConsumidor,
            idContrato: null,
            idDataAgendamento: 0,
            idPrestador: 0
        }
    ]
    
});

console.log(parameters);

$.ajax({
    type: "post",
    contentType: "application/json;charset=UTF-8",
    url: "https://ravencrownservice.azurewebsites.net/Servico/Agendar",
    async: false,
    data: parameters
  })

    .done(function (msg) {
      $(function () {
          console.log(msg)
    })

    .fail(function (jqXHR, textStatus, msg) {
      console.log(jqXHR);
      console.log(textStatus);
      console.log(msg);
    });

})


}
export default contratoRequest;