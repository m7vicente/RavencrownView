import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Components/modal';
import Navbar from './Components/Navbar';
import '../css/CadastroDeServico.css'
import cadastrodeServicoRequest from '../request/cadastroDeServicoRequest';

function CadastroDeServico() {
    return (
        <Fragment>
            <div>
                <Navbar></Navbar>
                <div className="row w-100 justify-content-right">
                    <form className="col justify-content-center">
                        <div className="row justify-content-center mt-2">
                            <h5>Cadastre seu serviço :)</h5>
                        </div>
                        <div className="row justify-content-center mt-1">
                            <div className="col-sm-5" style={{ marginLeft: '-19%'}}>
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
                            <div className="col-sm-2 ml-5">
                                <div className="form-group">
                                <label>Preço do serviço</label>
                                <input id="precoServico" type="text" className="form-control" placeholder="R$ 100,20" />
                                </div>
                            
                                <div className="form-group">
                                <label>Tempo médio de resposta</label>
                                <input id="tempoDeServico" type="time" className="form-control"></input>
                                </div>
                            </div>
                        </div>
                            
                        <div className="row justify-content-center mt-4">
                        <div className="col-sm-2">
                            <label>Disponível fim de semana?</label>
                                <div className="form-check mt-0">
                                    <input id="disponivelSim" className="form-check-input" type="radio" />
                                    <label className="form-check-label ml-4" for="exampleRadios1">
                                    Sim
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input id="disponivelNao" className="form-check-input" type="radio" />
                                    <label className="form-check-label ml-4" for="exampleRadios1">
                                    Não
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <label>Local de atendimento</label>

                                <div className="form-check">
                                    <input id="domicilio" className="row form-check-input" type="radio" />
                                    <label className="form-check-label ml-4" for="exampleRadios1">
                                        Atendimento à domicilio
                                </label>
                                </div>
                                <div className="form-check">
                                    <input id="meuEndereco" className="form-check-input" type="radio"  data-toggle="modal" data-target="#myModal" />
                                    <label className="form-check-label ml-4" for="exampleRadios1">
                                        Atendimento no meu endereço
                                    <Modal />
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-2 ml-4">
                            <div class="arq-img">
                                 <div class="file btn btn-lg btn-primary">
                                        Adicionar recomendações
                                <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-4">
                        
                        <div class="col-md-4">
                        <div class="servico-img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt=""/>
                            <div class="file btn btn-lg btn-primary">
                                Adicionar foto
                                <input type="file" name="file"/>
                            </div>
                        </div>
                    </div>
                            
                        <div className="form-group col-md-2" style={{marginLeft: '-12%', marginRight: '1%'}}>
                            <label className="text-secondary">Selecione a categoria</label>
                            <select id="categoria" className="form-control">
                                <option selected>Selecione</option>
                                <option value="29">Técnico</option>
                                <option value="30">Aulas</option>
                                <option value="31">Auto</option>
                                <option value="32">Code</option>
                                <option value="33">Reformas</option>
                                <option value="34">Culinária</option>
                                <option value="35">Domésticos</option>
                                <option value="36">Vestuário</option>
                            </select>
                        </div>
                            <div className="col-sm-2">
                                <button
                                id="cadastrarServico"
                                type="button"
                                onClick={cadastrodeServicoRequest}
                                className="btn btn-primary w-100 ml-5" style={{marginTop: '10%'}}>Cadastrar Serviço</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>

    );
}

export default CadastroDeServico;


