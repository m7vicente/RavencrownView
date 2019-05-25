import React, { Fragment } from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Fragment>
            <div class="navbar navbar-dark navbar-expand text-white bg-info" style={{ backgroundColor: 'rgb(185, 216, 69)',}}>
            <Link to="/Login"><i className='fas fa-user-circle text-light display-4 ml-4 mr-4' style={{ fontSize: '16pt;' }}></i></Link>
                <ul class="navbar-nav navbar-collapse justify-content-center">
                    <li class="nav-item active">
                    <Link to="/Catalogo" class="nav-link">Home</Link>
                    </li>
                    <li class="nav-item active">
                    <Link to="/DetalhesDoContrato" class="nav-link">Meus Contratos</Link> 
                    </li>
                    <li class="nav-item active">
                    <Link to="/MeusServicos" id="MeusServicos" class="nav-link">Meus Serviços</Link>
                    </li>
                    <li class="nav-item active">
                    <Link to="/Cadastro" id="Cadastro" class="nav-link">Cadastre-se</Link>
                    </li>
                </ul>
            </div>
        </Fragment>
    );
}

export default Navbar;
