import React, { Component, Fragment } from "react";
import Navbar from "../Pages/Components/Navbar";
import meusServicosRequest from "../request/meusServicosRequest";
import CardServicosAtivos from "./Components/CardServicosAtivos";

class MeusServicos extends React.Component {
  state = {
    services: meusServicosRequest(
      JSON.parse(sessionStorage.getItem("login")).Id_Usuario
    )
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <ul className="nav nav-tabs justify-content-center mt-2">
          <li className="nav-item active">
            <a
              className="nav-link text-secondary"
              href="#ServicosAtivos"
              data-toggle="tab"
            >
              Serviços Ativos
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link text-secondary"
              href="#ServicosAgendados"
              data-toggle="tab"
            >
              Serviços Agendados
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div className=" tab-pane active" id="ServicosAtivos">
            <h4
              className="row sub ml-4 mt-2 justify-content-center"
              align="center"
            >
              <div id="frase"> </div>
            </h4>
            <div className="row ml-1 mr-1 mt-4">
              {Object.keys(this.state.services).map((e, i) => {
                return (
                  <CardServicosAtivos
                    key={i}
                    service={this.state.services[i]}
                  />
                );
              })}
            </div>
          </div>

          <div className="tab-pane" id="ServicosAgendados" />
        </div>
      </Fragment>
    );
  }
}
export default MeusServicos;
