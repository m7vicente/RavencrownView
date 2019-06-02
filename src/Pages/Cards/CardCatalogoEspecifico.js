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
      <Fragment>
        <div className="col ml-3 mr-5 mt-4 border border-danger">
          <div className="card h-25">
            <div className="card-body" align="center">
              <div className=" w-100 border border-secondary">
                <img src={this.state.imagemBIN} />
              </div>
              <h5 className="card-title">{this.state.servico.nomeServico}</h5>
              <p className="card-text">{this.state.servico.descricaoServico}</p>
              <p>R${this.state.servico.precoServico}</p>
              <ModalDetalhesDoServico></ModalDetalhesDoServico>
            </div>
          </div>
        </div>
      </Fragment>


    );
  }
}

export default CardCatalogoEspecifico;
