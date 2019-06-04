import { Component, Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import ModalDetalhesDoServico from "../ModalDetalhesDoServico";

class CardCatalogoEspecifico extends React.Component {
  state = {
    servico: null,
    imagemBIN: null
  };

  constructor(servico) {
    super();
    this.state.servico = servico.servico;
    try {
      this.state.imagemBIN =
        "data:image/png;base64," + this.state.servico.imagem[0].image;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="col-sm-3 ml-5 mr-5 mt-4 ">
        <div className="card h-25">
          <div className="card-body" align="center">
            <div className=" w-100 border border-secondary">
              <img src={this.state.imagemBIN} />
              <div>
                <label>Nome: {this.state.servico.nomeServico}</label>
              </div>
              <div>
                <label>{this.state.servico.descricaoServico}</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCatalogoEspecifico;
