import { Component, Fragment } from "react";
import React from "react";
import { Link } from "react-router-dom";
import DetalhesDoServico from "../DetalhesDoServico";
import ModalDetalhesDoContrato from "../ModalDetalhesDoContrato";
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
        <div class="card" >
          {<img class="card-img-top" src={this.state.imagemBIN} alt="Card image cap"/>}
          <div class="card-body">
            <h5 class="card-title">{this.state.servico.nomeServico}</h5>
            <p class="card-text">{this.state.servico.descricaoServico}</p>
            <a 
              className="btn btn-warning"
              data-toggle="modal"
              data-target="#myModal" 
              to={{data: this.state.servico }}>
              
              Detalhes
              </a>
          <ModalDetalhesDoServico servico={this.state.servico}></ModalDetalhesDoServico>
          </div>
        </div>
      </div>
    );
  }
}

export default CardCatalogoEspecifico;
