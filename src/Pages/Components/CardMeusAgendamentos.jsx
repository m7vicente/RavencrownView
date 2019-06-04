import { Component, Fragment } from "react";
import React from "react";
import ModalDetalhesDoServico from "../ModalDetalhesDoServico";

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
      <div className="col-lg-4  mt-1 mb-3 d-flex align-items-stretch ">
        <div className="card h-100 w-100">
          <div className="card">
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
                <label>
                  Prestador: {this.state.contract.contract.prestador.nome}
                </label>
              </div>
              <div>
                <label>
                  Serviço:{" "}
                  {this.state.contract.contract.servicoModel.nomeServico}
                </label>
              </div>
              <div>
                {this.state.contract.contract.pago ? (
                  "Serviço pago"
                ) : (
                  <label>
                    Valor Combinado: {this.state.contract.contract.valor_Final}
                  </label>
                )}
              </div>
              <div>
                <label>Endereço: </label>
                {this.state.contract.contract.endereco != null
                  ? this.state.contract.contract.endereco.rua
                  : this.state.contract.contract.servicoModel.endereco.rua}
              </div>
              <div>
                <label>
                  Aprovação:
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
                className="btn btn-primary"
                data-toggle="modal"
                data-target="#myModal"
                >
                Ver Detalhes
        
              <ModalDetalhesDoServico />
             </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardMeusAgendamentos;
