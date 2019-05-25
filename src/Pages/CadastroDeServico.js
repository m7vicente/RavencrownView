import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './modal';

function CadastroDeServico() {
    return (
        <div>
            <nav classNameName="navbar navbar-dark bg-info navbar-expand text-white">
                <i classNameName='fas fa-user-circle' style={{ fontSize: '36px' }}></i>
                <ul classNameName="navbar-nav navbar-collapse justify-content-end">
                    <li classNameName="nav-item">
                        <Link classNameName="nav-link" to="index.html">Catálogo</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link classNameName="nav-link" to="Meus serviços.html">Meus Serviços</Link>
                    </li>
                    <li classNameName="nav-item">
                        <Link classNameName="nav-link" to="index.html">Meus Contratos</Link>
                    </li>
                </ul>
                <form classNameName="form-inline col-sm-5">
                    <input classNameName="form-control w-75 mt-2 ml-4" type="search" placeholder="O que você está procurando?" />
                    <button classNameName="btn btn-secondary mt-2 " type="submit">Buscar</button>
                </form>
                <Link to="#menu-toggle" id="menu-toggle" classNameName="navbar-brand">
                    <span classNameName="navbar-toggler-icon"></span>
                </Link>
                <button classNameName="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation" onclick="mostra()">
                    <span classNameName="navbar-toggler-icon"></span>
                </button>
            </nav>
            <form>
                <div classNameName="row justify-content-center mt-2">
                    <h5>Cadastro de Serviço</h5>
                </div>
                <div classNameName="row justify-content-center mt-1">
                    <div classNameName="col-sm-5">
                        <div classNameName="form-group">
                            <label>Nome do serviço</label>
                            <input id="nomeServico" type="text" classNameName="form-control" placeholder="Confeiteira" />
                        </div>
                    </div>
                </div>
                <div classNameName="row justify-content-center mt-3">
                    <div classNameName="col-sm-5">
                        <div classNameName="form-group">
                            <label>Descrição do serviço</label>
                            <textarea id="descricaoServico" classNameName="form-control" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div classNameName="row justify-content-center">
                    <div classNameName="col-sm-3">
                        <label>Disponibilidade aos finais de semana</label>
                        <div classNameName="form-check mt-2">
                            <input id="disponivelSim" classNameName="form-check-input" type="radio" />
                            <label classNameName="form-check-label mt-3" for="exampleRadios1">
                                Sim
                    </label>
                        </div>
                        <div classNameName="form-check">
                            <input id="disponivelNao" classNameName="form-check-input" type="radio" />
                            <label classNameName="form-check-label mt-3" for="exampleRadios1">
                                Não
                    </label>
                        </div>
                    </div>
                    <div classNameName="col-sm-2">
                        <div classNameName="form-group">
                            <label>Preço do serviço</label>
                            <input id="precoServico" type="text" classNameName="form-control" placeholder="R$ 100,20" />
                        </div>
                    </div>
                    <div classNameName="col-sm-2">
                        <div classNameName="form-group">
                            <label>Tempo médio de resposta</label>
                            <input id="tempoDeServico" type="time" classNameName="form-control"></input>
                        </div>
                    </div>
                </div>
                <div classNameName="row justify-content-center mt-5">
                    <div classNameName="col-sm-3">
                        <label>Local de atendimento</label>

                        <div classNameName="form-check">
                            <input id="domicilio" classNameName="form-check-input" type="radio" />
                            <label classNameName="form-check-label mt-3" for="exampleRadios1">
                                Atendimento à domicilio
                    </label>
                        </div>
                        <div classNameName="form-check">
                            <input id="meuEndereco" classNameName="form-check-input" type="radio" />
                            <label classNameName="form-check-label mt-3" for="exampleRadios1">
                                Atendimento no meu endereço
                    </label>
                        </div>
                        <div>
                            <div className="container">
                                <h2>Modal Example</h2>
                                    <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                                    <div className="modal fade" id="myModal" role="dialog">
                                    <div className="modal-dialog">
                                            <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">Modal Header</h4>
                                            </div>
                                            <div className="modal-body">
                                                <p>Some text in the modal.</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div classNameName="col-sm-2">
                        <button id="cadastrarServico" type="button" classNameName="btn btn-primary w-100">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default CadastroDeServico;


