import React, { Component, Fragment } from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Fragment>
            <div class="navbar navbar-dark navbar-expand text-white bg-info" style={{ backgroundColor: 'rgb(185, 216, 69)' }}>
            <Link to="/Login"><i className='fas fa-user-circle text-light display-4 ml-4 mr-4' style={{ fontSize: '16pt;' }}></i></Link>
                <ul class="navbar-nav navbar-collapse">
                    <li class="nav-item active">
                    <Link to="/Catalogo" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item">
                    <Link to="/DetalhesDoContrato" class="nav-link">Meus Contratos</Link> 
                    </li>
                    <li class="nav-item">
                    <Link to="/MeusServicos" id="MeusServicos" class="nav-link">Meus Serviços</Link>
                    </li>
                </ul>
                <form class="form-inline col-sm-5 justify-content-end">
                    <input class="form-control w-50 mt-2 ml-4" type="search" placeholder="O que você está procurando?" />

                    <button class="btn btn-secondary mt-2 " type="submit">Buscar</button>
                </form>

            </div>
        </Fragment>
    );
}

function exibeMenu(){
    var json = JSON.parse(sessionStorage.getItem("login"))

    if(json.prestador != true){
        const ocultar = document.getElementById("MeusServicos");

        ocultar.style.display='none';

    }
}

export default Navbar;
