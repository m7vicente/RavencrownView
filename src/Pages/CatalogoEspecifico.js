import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import CardCatalogoEspecifico from "./Cards/CardCatalogoEspecifico";
import getAllServicesById from "../request/todosServicosRequest";
import { Fragment } from "react";
import ModalDetalhesDoServico from "./ModalDetalhesDoServico";

class CatalogoEspecifico extends React.Component {
  state = {
    servicos: getAllServicesById(1
    )
  };

  render() {
    return (
      <Fragment>
        <h4 className="text-secondary" align="center">
          Catálogo específico
        </h4>
        <div className="row" align="center">
          {Object.keys(this.state.servicos).map((e, i) => {
            return (
              <CardCatalogoEspecifico
                key={i}
                servico={this.state.servicos[i]}
              />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default CatalogoEspecifico;
