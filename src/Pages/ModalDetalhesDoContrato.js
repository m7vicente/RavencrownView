import React, { Component } from "react";

class ModalDetalhesDoContrato extends React.Component {
  state = {
    contract: null
  };

  constructor(contract) {
    super();
    this.state.contract = contract.contract.contract;
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="modal fade" id="myModal" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="row justify-content-center border-bottom">
                    <div>
                      <p className="h4 text-primary ml-4">
                        {this.state.contract.servicoModel.nomeServico}
                      </p>
                    </div>
                  </div>
                  <div className="row w-100 justify-content-left mt-4">
                  <div className="col-sm-6 mt-2">
                  <div className="">
                        <label className="h4 text-primary mr-4">
                          {" "}
                          Categoria{" "}
                        </label>
                        <label className="h4 text-secondary"> Reformas </label>
                      </div>
                  </div>
                  </div>  
                  <div className="row w-100 justify-content-left mt-1">
                    <div className="col-sm-6 mt-2">
                      <label className="h4 text-primary mr-4">
                        {" "}
                        Local de Atendimento{" "}
                      </label>

                      {this.state.contract.endereco != null ? (
                        <div>
                          <span>
                            <label className="text-secondary">Rua:</label>{" "}
                            {this.state.contract.endereco.rua}
                          </span>
                          <span>
                            <label className="text-secondary ml-5">Nº</label>{" "}
                            {this.state.contract.endereco.numero}
                          </span>
                          <p />
                          <span>
                            <label className="text-secondary">
                              Complemento:{" "}
                            </label>
                            {
                              (this.state.contract.endereco.complemento = !null
                                ? this.state.contract.endereco.complemento
                                : "")
                            }
                          </span>
                          <p />
                          <span>
                            <label className="text-secondary">CEP:</label>{" "}
                            {this.state.contract.endereco.cep}
                          </span>
                          <p />
                          <span>
                            <label className="text-secondary">Bairro:</label>{" "}
                            {this.state.contract.endereco.bairro}
                          </span>
                          <p />
                          <label>
                            {this.state.contract.endereco.estado +
                              ", " +
                              this.state.contract.endereco.cidade}
                          </label>
                        </div>
                      ) : (
                        <div />
                      )}
                    </div>
                  
                  </div>
                  <div className="row w-100 justify-content-left mt-4">
                    <div className="col-sm-6 mt-2">
                      <label className="h4 text-secondary"> Datas: </label>
                      {Object.keys(this.state.contract.datas).map((e, i) => {
                        return (
                          <p className="h4 text-secondary ml-4">
                            {" "}
                            {new Date(
                              this.state.contract.datas[i].dtAgendamento
                            ).toLocaleDateString()}
                          </p>
                        );
                      })}{" "}
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary w-50 mt-4">
                      Confirmar
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary w-50 mt-4"
                      data-dismiss="modal"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalDetalhesDoContrato;
