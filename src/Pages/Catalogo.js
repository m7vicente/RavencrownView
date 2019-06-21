import React, { Fragment } from "react";
import "../css/Catalogo.css";
import Navbar from "./Components/Navbar";
import { Link } from "react-router-dom";

function Catalogo() {
  return (
    <Fragment>
      <Navbar />
      <div class="row" align="center">
        <div class="col mt-4">
          <div class="titulo_catalogo sub text-dark">
            <h3>
              Explore a variedade de serviços com a facilidade de divisão por
              categorias =D
            </h3>
          </div>
        </div>
      </div>

      <div class="row ml-0 w-100 h-100 mt-5 justify-content-center">
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico13" }}>
            <div class="item" align="center" id="configuracoes" style={{ backgroundImage: 'url(/tecnico.jpeg)' }}>
              <i class="material-icons" style={{ fontSize: "115px" }}>
                settings
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Técnico</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico14" }}>
            <div class="item" align="center" id="aulas" style={{ backgroundImage: 'url(/aulas.jpg)' }}>
              <i class="material-icons" style={{ fontSize: "115px" }}>
                grade
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Aulas</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico15" }}>
            <div class="item" align="center" id="auto" style={{ backgroundImage: 'url(/auto.jpg)' }}>
              <i class="material-icons" style={{ fontSize: "115px" }}>
                directions_car
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Auto</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico16" }}>
            <div class="item" align="center" id="code" style={{ backgroundImage: 'url(/code.jpeg)' }}>
              <i class="material-icons" style={{ fontSize: "115px" }}>
                code
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Code</p>
            </div>
          </Link>
        </div>
      </div>
      <div class="row mt-5 ml-0 w-100 justify-content-center">
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico17" }}>
            <div class="item" align="center" id="reformas" style={{ backgroundImage: 'url(/reforma.jpeg)' }}>
              <i class="material-icons" style={{ fontSize: "120px" }}>
                build
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Reformas</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico18" }}>
            <div class="item" align="center" id="culinaria" style={{ backgroundImage: 'url(/culinaria.jpg)' }}>
              <i class="material-icons" style={{ fontSize: "120px" }}>
                cake
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Culinária</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico19" }}>
            <div class="item" align="center" id="domesticos" style={{ backgroundImage: 'url(/domesticos.jpeg)' }}>
              <i class="material-icons" style={{ fontSize: "120px" }}>
                home
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Domésticos</p>
            </div>
          </Link>
        </div>
        <div class="col-sm-2 mt-3">
          <Link to={{ pathname: "/CatalogoEspecifico20" }}>
            <div class="item" align="center" id="vestuario" style={{ backgroundImage: 'url(/vestuario.jpg)' }}>
              <i class="material-icons" style={{ fontSize: "120px" }}>
                store
              </i>
              <p class="sub" style={{ fontSize: "20pt" }}>Vestuário</p>
            </div>
          </Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Catalogo;
