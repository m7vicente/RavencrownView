import $ from 'jquery';

function ValidaDataEscolhida(Data, IdServico) {

    var disponivel = false;

    const parameters = JSON.stringify({
        "idDataAgendamento": null,
        "idPrestador": null,
        "idServico": IdServico,
        "idContrato": null,
        "idConsumidor": null,
        "idDemanda": null,
        "dtAgendamento": Data,
        "tipoReserva": "T"
    });


    const response = (
        $.ajax({
            type: "post",
            contentType: "application/json;charset=UTF-8",
            url: "https://ravencrownservice.azurewebsites.net/Datas/Validar",
            async: false,
            data: parameters
        })

            .done(function (msg) {
                $(function () {
                    console.log(msg);
                })
            })

            .fail(function (jqXHR, textStatus, msg) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(msg);
            })
    ).responseJSON;

    if (response == "disponivel") {
        disponivel = true;
    }

    return disponivel
}
export default ValidaDataEscolhida;