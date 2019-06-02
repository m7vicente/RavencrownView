import React from 'react';

function Modal() {
    return (
        <div>
            <div className="container">
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5>Dados do endereço para prestação do serviço</h5>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div className="modal-body">
                                <div className="col justify-content-center">
                                    <div className="row-sm-7">
                                        <label className="text-secondary">Rua</label>
                                        <input id="rua" className="form-control" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="text-secondary">Bairro</label>
                                            <input id="bairro" className="form-control" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="text-secondary">Cidade</label>
                                            <input id="cidade" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col justify-content-center">
                                    <div className="row-sm-7">
                                        <label className="text-secondary">Complemento</label>
                                        <input id="complemento" className="form-control" />
                                    </div>
                                    <div className="row-sm-7">
                                        <label className="text-secondary">Referência</label>
                                        <input id="referencia" className="form-control" />
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="text-secondary">CEP</label>
                                            <input id="cep" className="form-control" placeholder="01010-020" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="text-secondary">Número</label>
                                            <input id="numero" className="form-control" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="text-secondary">Estado</label>
                                            <input id="estado" className="form-control" />
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="text-secondary">País</label>
                                            <input id="pais" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary w-50">Cadastrar</button>
                                <button type="button" className="btn btn-secondary w-50" data-dismiss="modal">Fechar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal