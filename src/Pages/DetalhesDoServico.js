import React, { Component, Fragment } from "react";
import Navbar from "../Pages/Components/Navbar";

class DetalhesDoServico extends React.Component {
  state = {
    servico: null
  };

  constructor(servico) {
    super();
    this.state.state = servico;
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="content mt-4">
          <div className="row justify-content-center">
            <div className="col-sm-1">
              <i className="fas fa-user-circle" style={{ fontSize: "72px" }} />
            </div>

            <div className="col-sm-4 justify-content-left">
              <p className="h3">José Pereira Ermelino</p>
              <p className="h4">Reformas de casas</p>
            </div>
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-sm-5">
              <p className="h4 text-secondary">Descrição do serviço</p>
              <div className="text-secondary">
                Lorem ipsum per enim senectus ut odio pretium consectetur
                conubia bibendum morbi venenatis dictum, blandit enim ipsum
                className litora posuere imperdiet primis rhoncus venenatis
                magna. himenaeos sapien praesent tortor facilisis ut, blandit
                massa lorem consectetur amet, vestibulum commodo aptent vivamus.
                est mauris nisi senectus himenaeos maecenas className vestibulum
                ultrices.
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-sm-3 mt-2">
              <label className="h4 text-secondary"> Local - </label>
              <label className="h5 text-primary">Domicilio</label>
            </div>
            <div className="col-sm-2">
              <label className="h4">
                {" "}
                R$ <span className="h1">100,20</span>{" "}
              </label>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-sm-3 mt-2">
              <label className="h4 text-secondary"> Categoria </label>
              <p className="h5 text-secondary"> Reformas </p>
            </div>
            <div className="col-sm-2">
              <button
                type="button"
                className="btn border border-none btn-primary w-100"
                style={{ backgroundColor: "rgb(185, 216, 69)" }}
              >
                Contratar
              </button>
            </div>
          </div>
          <div className="row justify-content-center mt-3 border-top">
            <div className="col-sm-7">
              <label className="h5 text-secondary mt-3"> Comentários </label>
            </div>
          </div>
          <div className="row justify-content-center mt-3 mb-3">
            <div className="col-sm-7">
              <textarea className="form-control" rows="5" />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default DetalhesDoServico;
