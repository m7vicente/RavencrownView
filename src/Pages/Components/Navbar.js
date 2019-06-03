import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css'
import NightMode from './nightMode';

class Navbar extends React.Component {

    constructor(){
        super();
        this.state = {
            display: ''
        }
    }

    componentDidMount(){
        let display = this.state.display;
        let hidden = this.state.hidden;
        const session = sessionStorage.getItem("login");

        if(session !== null){
        const prestador = JSON.parse(sessionStorage.getItem("login")).Prestador;
        const nome = JSON.parse(sessionStorage.getItem('login')).nome;
        
        document.getElementById("login").setAttribute("class", "demo")
        document.getElementById("name").innerHTML = nome;
        
        var img = 'data:image/png;base64,' + JSON.parse(sessionStorage.getItem("login")).imagem.image;

        var rmv = document.getElementById("imgUser");
        document.getElementById("logo").setAttribute("class", "demo");

        var imgTag = document.createElement("img");
        imgTag.src = img;

        rmv.appendChild(imgTag);
        imgTag.setAttribute("class", "imgNav")

        if(prestador === true){
            display = 'block';
            document.getElementById("Cadastro").setAttribute('class', 'demo')
            
        }
        }  else {
            display = 'none';
        }
        this.setState({
            display: display
        });
    }

    render(){
        const estilo = {
            display: this.state.display
        }

    return (
        <Fragment>
        <div class="navbar navbar-dark navbar-expand text-white">
        <Link to="/Perfil"><div id="imgUser">
        <i id="logo" className='fas fa-user-circle text-light display-4 ml-4 mr-4' style={{ fontSize: '16pt;' }}/></div></Link>
        <h4 id='name' className="mt-3 ml-4"></h4>  
            <ul class="navbar-nav navbar-collapse justify-content-end">
                <li class="nav-item active">
                <Link to="/Catalogo" class="nav-link">Home |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/MeusServicos" style={estilo} id="MeusServicos" class="nav-link">Meus Serviços |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/Cadastro" id="Cadastro" class="nav-link">Cadastre-se |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/CadastroDeServico" style={estilo} id="CadastroDeServiço" class="nav-link">Cadastre seus serviços |</Link>
                </li>
                <li class="nav-item active">
                <Link to="/Login" Id="login" class="nav-link">Login</Link>
                </li>
                <li class="nav-item active">
                <Link to="/" style={estilo} Id="sair" class="nav-link" onClick={function(){
                    sessionStorage.removeItem("login");
                    document.getElementById("logo").removeAttribute("class", "demo");
                    var rmv = document.getElementById("imgUser");
                    rmv.removeChild();
                }}>Sair</Link>
                </li>
            </ul>
            <div class="material-switch pull-right ml-4 mt-1">
                <input id="someSwitchOptionWarning" name="someSwitchOption001" type="checkbox" onLoad={NightMode}/>
                <label for="someSwitchOptionWarning" class="bg-warning"></label>
            </div>
        </div>
    </Fragment>
    );
    }
}

export default Navbar;

