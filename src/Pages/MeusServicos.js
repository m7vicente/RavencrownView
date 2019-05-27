import React, { Component, Fragment } from 'react';
import Navbar from './Navbar';


function MeusServicos() {
  return (
    <Fragment>
      <Navbar></Navbar>
      <ul className="nav nav-tabs justify-content-center mt-2">
        <li className="nav-item active">
          <a className="nav-link text-secondary" href="#ServicosAtivos" data-toggle="tab">Serviços Ativos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-secondary" href="#ServicosAgendados" data-toggle="tab">Serviços Agendados</a>
        </li>
      </ul>
      <div className="tab-content">
        <div className=" tab-pane active" id="ServicosAtivos">

          <div className="row">
            <div className="col-sm ml-3 mr-3 mt-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Titulo do serviço</h5>
                  <p className="card-text">Aqui informações / detalhes sobre o serviço</p>
                  <a href="#" className="btn btn-primary">Mais detalhes</a>
                </div>
              </div>
            </div>
            <div className="col-sm ml-3 mr-3 mt-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Titulo do serviço</h5>
                  <p className="card-text">Aqui informações / detalhes sobre o serviço</p>
                  <a href="#" className="btn btn-primary">Mais detalhes</a>
                </div>
              </div>
            </div>

            <div className="col-sm ml-3 mr-3 mt-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Titulo do serviço</h5>
                  <p className="card-text">Aqui informações / detalhes sobre o serviço</p>
                  <a href="#" className="btn btn-primary">Mais detalhes</a>
                </div>
              </div>
            </div>
          </div>

        </div>


        <div className="tab-pane" id="ServicosAgendados" >

          <div className="row">
            <div className="col-sm ml-3 mr-3 mt-4">

              <div className="card">
                <img src="..." className="card-img-top" style={{ heigth: "100px" }} />
                <div className="card-body">
                  <h4 className="card-title">Titulo do serviço</h4>
                  <p className="card-text">
                    <p> <span id="Data">12/05/2019</span> </p>
                    <p> <span id="Local">Santa Cruz</span> </p>
                    <h5 className="card-title">R$ 120,00</h5>
                  </p>
                  <a href="#" className="card-link">Detalhes</a>
                </div>
              </div>
            </div>

            <div className="col-sm ml-3 mr-3 mt-4">

              <div className="card">
                <img src="..." className="card-img-top" style={{ heigth: "100px" }} />
                <div className="card-body">
                  <h4 className="card-title">Titulo do serviço</h4>
                  <p className="card-text">
                    <p> <span id="Data">10/05/2019</span> </p>
                    <p> <span id="Local">Domicilio</span> </p>
                    <h5 className="card-title">R$ 100,00</h5>
                  </p>
                  <a href="#" className="card-link">Detalhes</a>
                </div>
              </div>
            </div>

            <div className="col-sm ml-3 mr-3 mt-4">

              <div className="card">
                <img src="..." className="card-img-top" style={{ heigth: "100px" }} style={{ heigth: "100px" }} />
                <div className="card-body">
                  <h4 className="card-title">Titulo do serviço</h4>
                  <p className="card-text">
                    <p> <span id="Data">23/06/2019</span> </p>
                    <p> <span id="Local">Domicilio</span> </p>
                    <h5 className="card-title">R$ 10,00</h5>
                  </p>
                  <a href="#" className="card-link">Detalhes</a>
                </div>
              </div>
            </div>

            <div className="col-sm ml-3 mr-3 mt-4">
              <div className="card">
                <img src="..." className="card-img-top" style={{ heigth: "100px" }} />
                <div className="card-body">
                  <h4 className="card-title">Titulo do serviço</h4>
                  <p className="card-text">
                    <p> <span id="Data">23/05/2019</span> </p>
                    <p> <span id="Local">Domicilio</span> </p>
                    <h5 className="card-title">R$ 130,00</h5>
                  </p>
                  <a href="#" className="card-link">Detalhes</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default MeusServicos;
