import React from "react";
import CardCatalogoEspecifico from "./Components/CardCatalogoEspecifico";
import getAllServicesById from "../request/todosServicosRequest";
import { Fragment } from "react";
import Navbar from "./Components/Navbar";


class CatalogoEspecifico extends React.Component {
  state = {
    servicos: getAllServicesById(1
    )
  };

  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <div className="row justify-content-center" align="center">
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
