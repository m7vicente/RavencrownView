import React, { Fragment } from "react";
import "../css/Catalogo.css";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";

function Catalogo() {
  return (
    <Fragment>
      <Navbar />
      <div class="row" align="center">
        <div class="col">
          <div class="titulo_catalogo text-dark">
            <h3>
              Explore a variedade de serviços com a facilidade de divisão por
              categorias 
            </h3>
          </div>
        </div>
      </div>

      <div class="row ml-0 w-100 h-100 mt-5 justify-content-center">
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 1 }}>
            <div class="item" align="center" id="configuracoes">
              <i class="material-icons" style={{ fontSize: "115px" }}>
                settings
              </i>
              <p style={{ fontSize: "20px" }}>Técnico</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 30 }}>
            <div class="item" align="center" id="aulas">
              <i class="material-icons" style={{ fontSize: "115px" }}>
                grade
              </i>
              <p style={{ fontSize: "20px" }}>Aulas</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 31 }}>
            <div class="item" align="center" id="auto">
              <i class="material-icons" style={{ fontSize: "115px" }}>
                directions_car
              </i>
              <p style={{ fontSize: "20px" }}>Auto</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 32 }}>
            <div class="item" align="center" id="code">
              <i class="material-icons" style={{ fontSize: "115px" }}>
                code
              </i>
              <p style={{ fontSize: "20px" }}>Code</p>
            </div>
          </Link>
        </div>
      </div>
      <div class="row mt-5 ml-0 w-100 justify-content-center">
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 33 }}>
            <div class="item" align="center" id="reformas">
              <i class="material-icons" style={{ fontSize: "120px" }}>
                build
              </i>
              <p style={{ fontSize: "20px" }}>Reformas</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 34 }}>
            <div class="item" align="center" id="culinaria">
              <i class="material-icons" style={{ fontSize: "120px" }}>
                cake
              </i>
              <p style={{ fontSize: "20px" }}>Culinária</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 35 }}>
            <div class="item" align="center" id="domesticos">
              <i class="material-icons" style={{ fontSize: "120px" }}>
                home
              </i>
              <p style={{ fontSize: "20px" }}>Domésticos</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico", data: 36 }}>
            <div class="item" align="center" id="vestuario">
              <i class="material-icons" style={{ fontSize: "120px" }}>
                store
              </i>
              <p style={{ fontSize: "20px" }}>Vestuário</p>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Catalogo;
