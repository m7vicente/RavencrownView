import React from 'react';
import '../css/Cadastro.css';

function Cadastro() {
    return (
        <div className="fundoCadastro bg-info justify-content-center">
            <div className="container containerCadastro w-75 bg-white border border-secondary">

                <div className="row justify-content-center mt-4">
                    <div className="col-sm-8">
                        <h4 className="text-secondary">Dados Pessoais</h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <div className="form-group">
                            <label className="text-secondary">Nome Completo</label>
                            <input className="form-control" placeholder="João César" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="text-secondary">RG</label>
                            <input id="rg" className="form-control text-secondary" placeholder="00.000.000-0" />
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="text-secondary">CPF</label>
                            <input id="cpf" className="form-control text-secondary" placeholder="000.000.000-00" />
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="text-secondary">Data de nascimento</label>
                            <input id="data" className="form-control text-secondary" placeholder="23/03/1998" />
                        </div>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputState">Estado civil</label>
                        <select id="inputState" className="form-control">
                            <option selected>Selecione</option>
                            <option>Solteiro(a)</option>
                            <option>Casado(a)</option>
                            <option>Divorciado(a)</option>
                            <option>Viúvo(a)</option>
                        </select>
                    </div>
                </div>
                <div className="row mb-4 justify-content-center">
                    <div className="col-sm-8">
                        <label className="text-secondary">Sexo</label>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" />
                            <label className="form-check-label text-secondary">
                                Masculino
                      </label>
                            <input className="form-check-input ml-2" type="radio" />
                            <label className="form-check-label text-secondary ml-4">
                                Feminino
                      </label>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-8 mt-4">
                        <h4 className="text-secondary">Dados de Contato e Acesso</h4>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="text-secondary">Email</label>
                            <input type="email" className="form-control" placeholder="exemplo@dominio.com" />
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="text-secondary">Telefone</label>
                            <input id="telefone" className="form-control" placeholder="(11) 97929-2717" />
                        </div>
                    </div>
                </div>

                <div className="row mb-4 justify-content-center">
                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="text-secondary">Senha</label>
                            <input type="password" className="form-control" />
                        </div>
                    </div>

                    <div className="col-sm-4">
                        <div className="form-group">
                            <label className="text-secondary">Confirmar senha</label>
                            <input type="password" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-8 mt-4">
                        <h4 className="text-secondary">Endereço</h4>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <label className="text-secondary">Rua</label>
                        <input className="form-control" />
                    </div>

                    <div className="col-sm-2">
                        <label className="text-secondary">Número</label>
                        <input className="form-control" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <label className="text-secondary">Complemento</label>
                        <input className="form-control" />
                    </div>

                    <div className="col-sm-4">
                        <label className="text-secondary">CEP</label>
                        <input id="cep" className="form-control" placeholder="01010-020" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <label className="text-secondary">Bairro</label>
                        <input className="form-control" />
                    </div>

                    <div className="col-sm-4">
                        <label className="text-secondary">Cidade</label>
                        <input className="form-control" />
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className="col-sm-4">
                        <label className="text-secondary">Estado</label>
                        <input className="form-control" />
                    </div>

                    <div className="col-sm-4">
                        <label className="text-secondary">País</label>
                        <input className="form-control" />
                    </div>
                </div>

                <div className="row justify-content-center mt-4 mb-4">
                    <div className="col-sm-4">
                        <button type="button" className="btn btnCadastro btn-info w-100">Cadastrar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;