import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';

function CadastroDeServico() {
    return (
        <Fragment>
            <div>
                <nav className="navbar navbar-dark bg-info navbar-expand text-white">
                    <i className='fas fa-user-circle' style={{ fontSize: '36px' }}></i>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li className="nav-item">
                            <Link className="nav-link" to="index.html">Catálogo</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="Meus serviços.html">Meus Serviços</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="index.html">Meus Contratos</Link>
                        </li>
                    </ul>
                    <form className="form-inline col-sm-5">
                        <input className="form-control w-75 mt-2 ml-4" type="search" placeholder="O que você está procurando?" />
                        <button className="btn btn-secondary mt-2 " type="submit">Buscar</button>
                    </form>
                    <Link to="#menu-toggle" id="menu-toggle" className="navbar-brand">
                        <span className="navbar-toggler-icon"></span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation" onclick="mostra()">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div className="row w-100 justify-content-right">
                    <form className="col justify-content-center">
                        <div className="row justify-content-center mt-2">
                            <h5>Cadastro de Serviço</h5>
                        </div>
                        <div className="row justify-content-center mt-1">
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label>Nome do serviço</label>
                                    <input id="nomeServico" type="text" className="form-control" placeholder="Confeiteira" />
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-3">
                            <div className="col-sm-5">
                                <div className="form-group">
                                    <label>Descrição do serviço</label>
                                    <textarea id="descricaoServico" className="form-control" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="row justify-content-center" align="center">
                                <div className="col">
                                    <div className="row justify-content-center">
                                        <div className="form-group">
                                            <label>Preço do serviço</label>
                                            <input id="precoServico" type="text" className="form-control" placeholder="R$ 100,20" />
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="form-group">
                                            <label>Tempo médio de resposta</label>
                                            <input id="tempoDeServico" type="time" className="form-control"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="row-sm-3">
                                        <label>Disponível fim de semana?</label>
                                        <div className="form-check mt-0">
                                            <input id="disponivelSim" className="form-check-input" type="radio" />
                                            <label className="form-check-label mt-3 ml-4" for="exampleRadios1">
                                                Sim
                                        </label>
                                        </div>
                                        <div className="form-check">
                                            <input id="disponivelNao" className="form-check-input" type="radio" />
                                            <label className="form-check-label mt-3 ml-4" for="exampleRadios1">
                                                Não
                                        </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-1">
                            <div className="col-sm-3">
                                <label>Local de atendimento</label>

                                <div className="form-check">
                                    <input id="domicilio" className="row form-check-input" type="radio" />
                                    <label className="form-check-label mt-3 ml-4" for="exampleRadios1">
                                        Atendimento à domicilio
                    </label>
                                </div>
                                <div className="form-check">
                                    <input id="meuEndereco" className="form-check-input" type="radio" />
                                    <label className="form-check-label mt-3 ml-4" for="exampleRadios1">
                                        Atendimento no meu endereço
                                <Modal />
                                    </label>

                                </div>
                            </div>
                            <div className="col-sm-2">
                                <button id="cadastrarServico" type="button" className="btn btn-primary w-100">Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>

    );
}

export default CadastroDeServico;


