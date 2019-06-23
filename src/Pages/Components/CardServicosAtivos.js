import { Component, Fragment } from "react";
import React from "react";

class CardServicosAtivos extends React.Component {
  state = {
    service: null
  };

  constructor(service) {
    super();
    this.state.service = service;
  }


  render() {
    return (
      <div className="col-sm-3 ml-5 mr-5 mt-4 ">
        <div class="card" >
          {/* <img class="card-img-top" src={this.state.imagemBIN} alt="Card image cap"/> */}
          <div class="card-body">
            <h5 class="card-title">{console.log(this.state.service.nomeServico)}</h5>
            <p class="card-text">{this.state.service.descricaoServico}</p>
            <a 
              className="btn btn-info"
              data-toggle="modal"
              data-target="#myModal" 
              to={{data: this.state.service }}>
              
              Detalhes
              </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardServicosAtivos;
