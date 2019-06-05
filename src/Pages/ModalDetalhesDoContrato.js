import React, {Component} from 'react';

class ModalDetalhesDoContrato extends React.Component {
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
                            <div className="modal-body">
                                <div className="row justify-content-center border-bottom">
                                    <div>Dias: 
                                    {Object.keys(this.state.contract.datas).map((e, i) => {
                                            return this.state.contract.datas[i].dtAgendamento + <p>
                                    });}


                                        <p className="h4 text-secondary ml-4">Descrição do serviço</p>
                                        <div className="text-secondary ml-4 mb-4">Faço reformas em geral. Troco piso, faço pintura, faço reboco, entre outros serviços. Faça seu orçamento.
						            </div>
                                    </div>
                                </div>
                                <div className="row w-100 justify-content-left mt-4">
                                    <div className="col-sm-6 mt-2">
                                        <label className="h4 text-secondary mr-4"> Local: </label>
                                        <label className="h5 text-primary"> Domicilio</label>
                                    </div>
                                    <div className="col-sm-6 mt-2">
                                        <div className="">
                                            <label className="h4 text-secondary mr-4"> Categoria: </label>
                                            <label className="h5 text-primary"> Reformas </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="row justify-content-center mt-4">
                                    <div className="justify-content-right">
                                        <label className="h4"> R$ <span className="h1">100,20</span> </label>
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

    )
}
}

export default ModalDetalhesDoContrato