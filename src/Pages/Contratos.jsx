import { Component } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Fragment } from "react";
import Navbar from "./Components/Navbar";

class Contratos extends React.Component {
  state = {};

  render() {
    return (
      <Fragment>
        <Navbar />
        <h4 className="text-secondary" align="center">
          Meus Contratos
        </h4>
        <div className="row" align="center" />
      </Fragment>
    );
  }
}

export default Contratos;
