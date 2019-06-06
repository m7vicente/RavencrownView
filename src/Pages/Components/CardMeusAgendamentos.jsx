import { Component, Fragment } from "react";
import React from "react";
import ModalDetalhesDoContrato from "../ModalDetalhesDoContrato";

class CardMeusAgendamentos extends React.Component {
  state = {
    contract: null
  };

  constructor(contract) {
    super();
    this.state.contract = contract;
  }

  render() {
    return (
      <div className="col-lg-4  mt-1 mb-3 d-flex align-items-stretch">
        <div className="card h-100 w-100">
          <div className="card border border-rounded">
            <div className="card-header">
              <h5>
                Dia:
                {this.state.contract === null
                  ? "Sem Datas"
                  : new Date(
                      this.state.contract.contract.datas[0].dtAgendamento
                    ).toLocaleDateString()}
              </h5>
            </div>
            <div className="card-body">
              <div>
                <label className="text-secondary">Prestador: {" "}
                 <span className="h4 text-dark">  {this.state.contract.contract.prestador.nome}</span>
                </label>
              </div>
              <div>
                <label className="text-secondary">
                  Serviço:{" "}<span  className="text-dark">
                  {this.state.contract.contract.servicoModel.nomeServico}</span>
                </label>
              </div>
              <div>
                {this.state.contract.contract.pago ? (
                  "Serviço pago"
                ) : (
                  <label className="text-secondary">
                    Valor Combinado: {" "} <span className="text-dark"> {this.state.contract.contract.valor_Final}</span>
                  </label>
                )}
              </div>
              <div>
                <label className="text-secondary">Endereço: {" "} 
                <span className="text-dark"> 
                  {this.state.contract.contract.endereco != null
                  ? this.state.contract.contract.endereco.rua
                  : this.state.contract.contract.servicoModel.endereco.rua}
                  </span>
                  </label>
              </div>
              <div>
                <label className="text-secondary">
                  Aprovação:{" "}
                  {this.state.contract.contract.aprovado_Prestador &&
                  this.state.contract.contract.aprovado_Consumidor ? (
                    <span class="badge badge-pill badge-success">OK</span>
                  ) : (
                    <span class="badge badge-pill badge-danger">
                      Aguardando
                    </span>
                  )}
                </label>
              </div>
              <a
                className="btn btn-info"
                data-toggle="modal"
                data-target="#myModal"
              >
                Ver Detalhes
              </a>
              <ModalDetalhesDoContrato contract={this.state.contract} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardMeusAgendamentos;
