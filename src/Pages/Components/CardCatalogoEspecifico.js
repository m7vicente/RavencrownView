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
      this.state.imagemBIN =
        "data:image/png;base64," + this.state.servico.imagem[0].image;
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
        <div className="col-sm-3 ml-5 mr-5 mt-4 border border-rounded">
        <div className="card h-25">
          <div className="card-body" align="center">
            <div className=" w-100 border border-secondary">
              <img src={this.state.imagemBIN} />
            </div>
            <h5 className="card-title mt-2">{this.state.servico.nomeServico}</h5>
            <p className="card-text">{this.state.servico.descricaoServico}</p>
            <h4>R${this.state.servico.precoServico}</h4>
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