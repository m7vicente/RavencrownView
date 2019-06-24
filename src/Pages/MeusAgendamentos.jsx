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

  componentDidMount(){
    const session = sessionStorage.getItem("login");
    
    if (session !== null) {
      const nome = JSON.parse(sessionStorage.getItem("login")).nome;
      if(this.state.contracts > 0){
      document.getElementById("frase").innerText = nome +  ', aqui estão seus serviços agendados:' ;
      }
      else {
        document.getElementById("frase").innerText = nome +  ', você ainda não tem serviços agendados :(' ; 
        document.getElementById("frase").setAttribute("class", 'fraseSad')
      }
    }

  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <h4 className="row sub ml-4 mt-2 justify-content-center" align="center">
        <div id="frase"> </div>
        </h4>
        <div className="row ml-1 mr-1 mt-4">
          {Object.keys(this.state.contracts).map((e, i) => {
            {console.log(this.state.contracts[i])}
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
