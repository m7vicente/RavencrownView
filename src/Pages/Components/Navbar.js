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
      document.getElementById("dropdownMenuButton").innerText = nome;

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
        <div class="navbar navbar-expand">
        <img src="/rv.png" style={{height: "100px", width: "210px", marginTop: 
          '-1.5%', marginBottom: "-2%"}}></img>
          <ul class="navbar-nav navbar-collapse justify-content-center">
            
            <li class="nav-item active">
              <Link to="/Catalogo" class="nav-link">
                Home |
              </Link>
            </li>
          
            <li class="nav-item active">
              <Link to="/Cadastro" id="Cadastro" class="nav-link">
                Cadastre-se |
              </Link>
            </li>
            <li class="nav-item active">
              <Link
                to="/MeusServicos"
                style={estilo}
                id="meusServicos"
                class="nav-link"
              >
                Meus Serviços |
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
              
          <i class="fa fa-moon-o lua ml-4" style={{fontSize: '18pt'}} 
          onClick={NightMode}
          ></i>
            </li>
          </ul>

          <div class="dropdown mr-4" style={estilo}>
             <button class="btn dropdown-toggle nav-link sub1" style={{backgroundColor: 'transparent', fontSize: '14pt'}}
              type="button" id="dropdownMenuButton" 
              data-toggle="dropdown" aria-haspopup="true"
              aria-expanded="false"
              >
            </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" style={{fontSize: '14pt'}}>
                <Link to="/Perfil">
                  Perfil
                </Link>
              </a>
              <a  class="dropdown-item" style={{fontSize: '13pt'}}><Link
                to="/"
                style={estilo}
                Id="sair"
                className="text-danger"
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
          </div>
        </div>
          <Link to="/Perfil">
            <div id="imgUser">
              <i
                id="logo"
                className="fas fa-user-circle text-dark display-4 ml-4 mr-4"
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
