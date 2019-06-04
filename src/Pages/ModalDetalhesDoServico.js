import React, {Component} from 'react';

class ModalDetalhesDoServico extends React.Component {
    state = {
        contract: null
    };
    
    constructor(contract) {
        super();
        this.state.contract = contract;
    }

    render(){
    return (
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
                                    <div className="justify-content-left">
                                        <p className="h3"></p>
                                        <p className="h4"></p>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-5 border-top border-bottom">
                                    <div>
                                        <p className="h4 text-secondary">Descrição do serviço</p>
                                        <div className="text-secondary">Faço reformas em geral. Troco piso, faço pintura, faço reboco, entre outros serviços. Faça seu orçamento.
						            </div>
                                    </div>
                                </div>
                                <div className="row w-100 justify-content-left mt-4">
                                    <div className="col-sm-6 mt-2">
                                        <label className="h4 text-secondary"> Local - </label>
                                        <label className="h5 text-primary"> Domicilio</label>
                                    </div>
                                    <div className="col-sm-6 mt-2">
                                        <div className="">
                                            <label className="h4 text-secondary"> Categoria </label>
                                            <p className="h5 text-secondary"> Reformas </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-4">
                                    <div className="justify-content-right">
                                        <label className="h4"> R$ <span className="h1">100,20</span> </label>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3 border-top">
                                    <div className="col-sm-7">
                                        <label className="h5 text-secondary mt-3"> Comentários </label>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-3 mb-3">
                                    <div className="w-75">
                                        <textarea className="form-control" rows="5"></textarea>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-primary w-50">Contratar</button>
                                    <button type="button" className="btn btn-secondary w-50" data-dismiss="modal">Fechar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
}

export default ModalDetalhesDoServico