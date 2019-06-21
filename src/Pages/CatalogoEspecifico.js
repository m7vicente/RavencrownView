import React from "react";
import CardCatalogoEspecifico from "./Components/CardCatalogoEspecifico";
import getAllServicesById from "../request/todosServicosRequest";
import { Fragment } from "react";
import Navbar from "./Components/Navbar";
import { Link } from "react-dom";

class CatalogoEspecifico extends React.Component {
  state = {
    servicos: getAllServicesById(this.props.match.params.id)
  };

  render() {
    return (
      <Fragment>
        <Navbar />
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
