import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "../../css/Navbar.css";
import NightMode from "./nightMode";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      display: ""
    };
  }

  componentDidMount() {
    let display = this.state.display;
    const session = sessionStorage.getItem("login");
    
    if (session !== null) {
      const prestador = JSON.parse(sessionStorage.getItem("login")).Prestador;
      const nome = JSON.parse(sessionStorage.getItem("login")).nome;

      document.getElementById("Cadastro").setAttribute("class", "demo");
      document.getElementById("login").setAttribute("class", "demo");
      document.getElementById("name").innerHTML = nome;

      var img = "";

      try {
        img =
          "data:image/png;base64," +
          JSON.parse(sessionStorage.getItem("login")).imagem.image;
      } catch (ex) {
        img =
          img +
          "https://static1.squarespace.com/static/5ae340fe31d4df5e5f0ed912/t/5b23f08d0e2e7291eacf0db8/1557291866488/?format=1500w";
      }
      var rmv = document.getElementById("imgUser");
      document.getElementById("logo").setAttribute("class", "demo");

      var imgTag = document.createElement("img");
      imgTag.src = img;

      rmv.appendChild(imgTag);
      imgTag.setAttribute("class", "imgNav");

      if (prestador === true) {
        display = "block";
      }
    } else {
      display = "none";
    }

    this.setState({
      display: display
    });
  }

  render() {
    const estilo = {
      display: this.state.display
    };

    return (
      <Fragment>
        <div class="navbar navbar-dark navbar-expand text-white">
          <ul class="navbar-nav navbar-collapse justify-content-left">
            <li class="nav-item active">
              <Link to="/Catalogo" class="nav-link">
                Home |
              </Link>
            </li>
            <li class="nav-item active">
              <Link
                to="/MeusServicos"
                style={estilo}
                id="MeusServicos"
                class="nav-link"
              >
                Meus Serviços |
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/Cadastro" id="Cadastro" class="nav-link">
                Cadastre-se |
              </Link>
            </li>
            <li class="nav-item active">
              <Link
                to="/CadastroDeServico"
                style={estilo}
                id="CadastroDeServiço"
                class="nav-link"
              >
                Cadastre seus serviços |
              </Link>
            </li>
            <li class="nav-item active">
              <Link
                to="/MeusAgendamentos"
                style={estilo}
                id="meusAgendamentos"
                class="nav-link"
              >
                Meus Agendamentos
              </Link>
            </li>
            <li class="nav-item active">
              <Link to="/Login" Id="login" class="nav-link">
                Login
              </Link>
            </li>
            <li>
              
          <i class="fa fa-moon-o ml-4" style={{fontSize: '16pt'}} 
          onClick={NightMode}
          ></i>
            </li>
          </ul>

          <div class="dropdown mr-4" style={estilo}>
             <button class="btn dropdown-toggle" style={{backgroundColor: 'transparent'}}
              type="button" id="dropdownMenuButton" 
              data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"
              >
           <h4 id="name"/>
            </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a  class="dropdown-item"><Link
                to="/"
                style={estilo}
                Id="sair"
               
                onClick={function() {
                  sessionStorage.removeItem("login");
                  document
                    .getElementById("logo")
                    .removeAttribute("class", "demo");
                  var rmv = document.getElementById("imgUser");
                  rmv.removeChild();
                }}
              >
                Sair
              </Link> </a> 
              <a class="dropdown-item">
                <Link to="/Perfil">
                  Perfil
                </Link>
              </a>
   
          </div>
        </div>
          <Link to="/Perfil">
            <div id="imgUser">
              <i
                id="logo"
                className="fas fa-user-circle text-light display-4 ml-4 mr-4"
                style={{ fontSize: "16pt;" }}
              />
            </div>
          </Link>
        
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
