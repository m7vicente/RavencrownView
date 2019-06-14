import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import '../css/ModalDetalhesDoServico.css';
import contratoRequest from '../request/contratoRequest';
import ValidaDataEscolhida from '../request/DatasRequest';
import sleep from '../request/DatasRequest';

class ModalDetalhesDoServico extends React.Component {

    state = {
        servico: null,
        prestador: null,
    };

    constructor(servico) {
        super();
        this.state.servico = servico.servico;
        this.dataValida = this.dataValida.bind(this);
    }

    obterPrestador(id) {
        const retorno = $.ajax({
            type: "get",
            contentType: "application/json;charset=UTF-8",
            async: false,
            url:
                "https://ravencrownservice.azurewebsites.net/Usuario?id=" +
                id
        })
            .done(function (msg) {
                //return JSON.stringify(msg);
            })

            .fail(function (jqXHR, textStatus, msg) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(msg);
            });
        return retorno.responseJSON;
    }


    dataValida() {
        const data = document.getElementById("dtData").value;
        alert(data);
        const idServico = document.getElementById("servico1").value;
        if (data != null) {
            const respose = ValidaDataEscolhida(data, idServico, document.getElementById("btnContratar"));
        }
    }

    render() {
        return (
            <Fragment>
                {console.log(this.state.servico)}
                <div>
                    <div className="container">
                        <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row w-100 justify-content-center">
                                            <div className="col-sm-1 ml-3">
                                                <i className='fas fa-user-circle' style={{ fontSize: '72px' }}></i>
                                            </div>

                                            <div className="col-sm-7 justify-content-left">
                                                <input type="hidden" id="servico1" value={this.state.servico.idServico} />
                                                <input type="hidden" id="usuario1" value={this.state.servico.idUsuario} />
                                                <input type="hidden" id="valorFinal" value={this.state.servico.precoServico} />
                                                <p className="h4 mt-4">{this.state.servico.nomeServico}</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 border-top border-bottom justify-content-center mt-5">
                                            <div className="">
                                                <p className="h4 text-secondary">Descrição do serviço</p>
                                                <div className="text-secondary">{this.state.servico.descricaoServico}</div>
                                            </div>
                                        </div>
                                        <div className="row w-100 justify-content-left mt-4">
                                            <div className="ml-5">
                                                <label className="h4 text-secondary"> Local: </label>{" "}
                                                <label className="h5 text-primary">Domicilio</label>
                                            </div>
                                            <div className="col mr-5" align="right">
                                                <label className="h4 text-secondary"> Categoria: </label>{" "}
                                                <label className="h5 text-primary"> Reformas </label>
                                            </div>
                                        </div>
                                        <div className="row w-100 justify-content-center mt-4">
                                            <div className="">
                                                <label className="h4" align="right"> R$ <span id="valor" className="h1">{this.state.servico.precoServico}</span> </label>
                                            </div>
                                        </div>
                                        <div className="row w-100 justify-content-center mt-4 mb-2"><a
                                            style={{ fontSize: '12pt', cursor: 'pointer' }}
                                            className="link text-danger" onClick={function (event) {
                                                document.getElementById("datas").removeAttribute("class", "invisivel")
                                                event.preventDefault();
                                            }}>Escolher datas</a>
                                        </div>
                                        <div id='datas' class="invisivel">
                                            <div className="row w-100 border-top border-bottom justify-content-center mt-2">

                                                <div className="form-group mt-4">
                                                    <label>Data</label>
                                                    <input id="dtData" type="datetime-local" className="form-control text-secondary" placeholder="23/05/2019" onBlur={this.dataValida} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary w-50 mt-4" disabled id="btnContratar" onClick={contratoRequest}>Contratar</button>
                                            <button type="button" className="btn btn-secondary w-50 mt-4" data-dismiss="modal">Fechar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default ModalDetalhesDoServico;