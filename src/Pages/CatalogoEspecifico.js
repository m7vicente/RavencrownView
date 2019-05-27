import React from 'react';
import { Link } from 'react-router-dom';

function CatalogoEspecifico() {
    return (
        <div style={{ overflowX: 'hidden' }}>
            <nav className="navbar navbar-dark navbar-expand text-white bg-info">
                <Link to="login.html">
                    <i className='fas fa-user-circle' style={{ fontSize: '36px', color: 'black' }}></i>
                </Link>
                <ul className="navbar-nav navbar-collapse justify-content-end">
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="#">Catálogo</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="Meus serviços.html">Meus Serviços</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-dark" to="#">Meus Contratos</Link>
                    </li>
                </ul>
                <form className="form-inline col-sm-5">
                    <input className="form-control w-75 mt-2 ml-4" type="search" placeholder="O que você está procurando?" />
                    <button className="btn btn-secondary mt-2 " type="submit">Buscar</button>
                </form>
                <Link to="#menu-toggle" id="menu-toggle" className="navbar-brand">
                    <span className="navbar-toggler-icon"></span>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02"
                    aria-expanded="false" aria-label="Toggle navigation" onclick="mostra()">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
            <h4 className="text-secondary" align="center">Catálogo específico</h4>
            <div className="row" align="center">
                <div className="col-sm ml-3 mr-3 mt-4">
                    <div className="card">
                        <div className="card-body" align="center">
                            <div className="row w-100 h-25 border border-secondary">
                                <h5>Imagem do serviço</h5>
                            </div>
                            <h5 className="card-title">Título serviço</h5>
                            <p className="card-text">Aqui uma descrição e detalhes sobre o serviço.
                            </p>
                            <p>R$95,99</p>
                            <Link to="/DetalhesDoServico" className="btn btn-primary">Ver detalhes</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm ml-3 mr-3 mt-4">
                    <div className="card">
                        <div className="card-body" align="center">
                            <div className="row w-100 h-25 border border-secondary">
                                <h5>Imagem do serviço</h5>
                            </div>
                            <h5 className="card-title">Título serviço</h5>
                            <p className="card-text">Aqui uma descrição e detalhes sobre o serviço.
                             </p>
                            <p>R$200,00</p>
                            <Link to="/DetalhesDoServico" className="btn btn-primary">Ver detalhes</Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm ml-3 mr-3 mt-4">
                    <div className="card">
                        <div className="card-body" align="center">
                            <div className="row w-100 h-25 border border-secondary">
                                <h5>Imagem do serviço</h5>
                            </div>
                            <h5 className="card-title">Título serviço</h5>
                            <p className="card-text">Aqui uma descrição e detalhes sobre o serviço.
                            </p>
                            <p>R$100,90</p>
                            <Link to="/DetalhesDoServico" className="btn btn-primary">Ver detalhes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogoEspecifico;