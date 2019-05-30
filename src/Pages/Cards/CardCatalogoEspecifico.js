import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";

class CardCatalogoEspecifico extends React.Component {
  state = {
    servico: null,
    imagemBIN: null
  };

  constructor(servico) {
    super();
    this.state.servico = servico.servico;
    try {
      this.state.imagemBIN = this.state.servico.imagem[0].imagem;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="col-sm ml-3 mr-3 mt-4">
        <div className="card">
          <div className="card-body" align="center">
            <div className="row w-100 h-25 border border-secondary">
              <img src={this.props.imagem} />
            </div>
            <h5 className="card-title">{this.state.servico.nomeServico}</h5>
            <p className="card-text">{this.state.servico.descricaoServico}</p>
            <p>R${this.state.servico.precoServico}</p>
            <Link to="/DetalhesDoServico" className="btn btn-primary">
              Ver detalhes do id {this.state.servico.idServico}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCatalogoEspecifico;
