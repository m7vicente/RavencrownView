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
          <a
            data-toggle="modal"
            data-target="#myModal"
            to={{ data: this.state.servico }}>

            <div class="card-body">
              <h3 class="card-title"><b>{this.state.servico.nomeServico}</b></h3>
              <p class="card-text"
                style={{
                  'overflow': 'hidden',
                  'text-overflow': 'ellipsis',
                  'height': '124px'
                }}>
                {this.state.servico.descricaoServico}
              </p>
            </div>
          </a>
          <ModalDetalhesDoServico servico={this.state.servico}></ModalDetalhesDoServico>

        </div>
      </div>
    );
  }
}

export default CardCatalogoEspecifico;
