import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "./Components/Navbar";
import CardMeusAgendametos from "./Components/CardMeusAgendamentos";
import getAllContractById from "../request/todosContratosRequest";

class MeusAgendamentos extends React.Component {
  state = {
    contracts: getAllContractById(
      JSON.parse(sessionStorage.getItem("login")).Id_Usuario
    )
  };

  render() {
    return (
      <Fragment>
        <Navbar />
        <h5 className="row ml-4 " align="center">
          Meus Agendamentos
        </h5>
        <div className="row ml-1 mr-1 mt-2">
          {Object.keys(this.state.contracts).map((e, i) => {
            return (
              <CardMeusAgendametos key={i} contract={this.state.contracts[i]} />
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default MeusAgendamentos;
