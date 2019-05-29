import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../../css/Navbar.css'

class Navbar extends React.Component {

    constructor(){
        super();
        this.state = {
            display: 'none'
        }
    }

    exibeMenu () {

        let display = this.state.display;
        
        var json = JSON.parse(sessionStorage.getItem("login")).prestador

        if(json === null ){
            sessionStorage.setItem('login', 0);
            display = 'none';
        }
        if(json === true){
            display = 'block';
        } else {
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
        <div class="navbar navbar-dark navbar-expand text-white bg-info" onLoad={this.exibeMenu.bind(this)} style={{ backgroundColor: 'rgb(185, 216, 69)',}}>
        <Link to="/Login"><i className='fas fa-user-circle text-light display-4 ml-4 mr-4' style={{ fontSize: '16pt;' }}></i></Link>
            <ul class="navbar-nav navbar-collapse justify-content-center">
                <li class="nav-item active">
                <Link to="/Catalogo" class="nav-link">Home</Link>
                </li>
                <li class="nav-item active">
                <Link to="/DetalhesDoContrato" class="nav-link">Meus Contratos</Link> 
                </li>
                <li class="nav-item active">
                <Link to="/MeusServicos" style={estilo} id="MeusServicos" class="nav-link">Meus Serviços</Link>
                </li>
                <li class="nav-item active">
                <Link to="/Cadastro" id="Cadastro" class="nav-link">Cadastre-se</Link>
                </li>
            </ul>
        </div>
    </Fragment>
    );
    }
}

export default Navbar;

