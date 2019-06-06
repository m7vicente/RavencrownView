import React, { Component, Fragment } from 'react';
import $ from 'jquery';

class ModalDetalhesDoServico extends React.Component {

    state = {
        servico: null,
        prestador: null
    };

    constructor(servico) {
        super();

        this.state.servico = servico

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
    render() {
        return (
            <Fragment>
                {console.log(this.state.servico)}
                <div>
                    <div className="container w-50">
                        <div className="modal fade" id="myModal" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="row w-100 justify-content-center">
                                            <div className="">
                                                <i className='fas fa-user-circle' style={{ fontSize: '72px' }}></i>
                                            </div>

                                            <div className="col-sm-4 justify-content-left">
                                                <p className="h3"></p>
                                                <p className="h4">Reformas de casas</p>
                                            </div>
                                        </div>
                                        <div className="row w-100 border-top border-bottom justify-content-center mt-5">
                                            <div className="">
                                                <p className="h4 text-secondary">Descrição do serviço</p>
                                                <div className="text-secondary">Lorem ipsum per enim senectus ut odio pretium consectetur conubia bibendum morbi venenatis dictum, blandit enim ipsum className litora posuere imperdiet primis rhoncus venenatis magna. himenaeos sapien praesent tortor facilisis ut, blandit massa lorem consectetur amet, vestibulum commodo aptent vivamus. est mauris nisi senectus himenaeos maecenas className vestibulum ultrices.
						                        </div>
                                            </div>
                                        </div>
                                        <div className="row w-100 justify-content-left mt-4">
                                            <div className="ml-5">
                                                <label className="h4 text-secondary"> Local -  </label>
                                                <label className="h5 text-primary">Domicilio</label>
                                            </div>
                                            <div className="col mr-5" align="right">
                                                <label className="h4 text-secondary"> Categoria </label>
                                                <p className="h5 text-secondary"> Reformas </p>
                                            </div>
                                        </div>
                                        <div className="row w-100 justify-content-center mt-4">
                                            <div className="">
                                                <label className="h4" align="right"> R$ <span className="h1">100,20</span> </label>
                                            </div>
                                        </div>
                                        <div className="row w-75 justify-content-center mt-3 border-top">
                                            <div className="col-sm-7">
                                                <label className="h5 text-secondary mt-3"> Comentários </label>
                                            </div>
                                        </div>
                                        <div className="row justify-content-center mt-3 mb-3">
                                            <div className="col-sm-7">
                                                <textarea className="form-control" rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary w-50 mt-4">Contratar</button>
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