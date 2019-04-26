import React from 'react';
import './cadastroDeServico.css';

function cadastroDeServico() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-info navbar-expand text-white">
                <i class='fas fa-user-circle' style='font-size:36px'></i>
                <ul class="navbar-nav navbar-collapse justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Catálogo</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="Meus serviços.html">Meus Serviços</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Meus Contratos</a>
                    </li>
                </ul>
                <form class="form-inline col-sm-5">
                    <input class="form-control w-75 mt-2 ml-4" type="search" placeholder="O que você está procurando?" />
                    <button class="btn btn-secondary mt-2 " type="submit">Buscar</button>
                </form>
                <a href="#menu-toggle" id="menu-toggle" class="navbar-brand"><span class="navbar-toggler-icon"></span></a> <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation" onclick="mostra()"> <span class="navbar-toggler-icon"></span> </button>
            </nav>
            <form>
                <div class="row justify-content-center mt-2">
                    <h5>Cadastro de Serviço</h5>
                </div>
                <div class="row justify-content-center mt-1">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label>Nome do serviço</label>
                            <input type="text" class="form-control" placeholder="Confeiteira" />
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-3">
                    <div class="col-sm-5">
                        <div class="form-group">
                            <label>Descrição do serviço</label>
                            <textarea class="form-control" rows="5"></textarea>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-3">
                    <div class="col-sm-3">
                        <label>Disponibilidade aos finais de semana</label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label" for="exampleRadios1">
                                Sim
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label" for="exampleRadios1">
                                Não
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-group">
                            <label>Preço do serviço</label>
                            <input type="text" class="form-control" placeholder="R$ 100,20" />
                        </div>
                    </div>
                </div>
                <div class="row justify-content-center mt-5">
                    <div class="col-sm-3">
                        <label>Local de atendimento</label>

                        <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label" for="exampleRadios1">
                                Atendimento à domicilio
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" />
                            <label class="form-check-label" for="exampleRadios1">
                                Atendimento no meu endereço
                            </label>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <button type="button" class="btn btn-primary w-100">Cadastrar</button>
                    </div>
                </div>
            </form>
        </div>

    )
}