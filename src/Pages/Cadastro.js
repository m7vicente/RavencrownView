import React from 'react';
import '../css/Cadastro.css';
import cadastroUsuarioRequest from '../request/cadastroUsuarioRequest';

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
                            <input id="name" className="form-control" placeholder="João César" />
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
                            <input id="data" type="date" className="form-control text-secondary" placeholder="23/03/1998" />
                        </div>
                    </div>
                    <div className="form-group col-md-4">
                        <label className="text-secondary">Estado civil</label>
                        <select id="estadoCivil" className="form-control">
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
                        <label className="text-secondary">Sexo</label> <br/>
                            <input className="col-sm-1" type="radio" id="sexoM" name="sexo"/>Masculino <br/>
                            <input className="col-sm-1" type="radio" name="sexo"/>Feminino
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
                            <input id="email" type="email" className="form-control" placeholder="exemplo@dominio.com" />
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
                            <input id="password" type="password" className="form-control" />
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
                        <input id="rua" className="form-control" />
                    </div>

                    <div className="col-sm-2">
                        <label className="text-secondary">Número</label>
                        <input id="numero" className="form-control" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-8">
                        <label className="text-secondary">Referência</label>
                        <input id="referencia" className="form-control" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <label className="text-secondary">Complemento</label>
                        <input id="complemento" className="form-control" />
                    </div>

                    <div className="col-sm-4">
                        <label className="text-secondary">CEP</label>
                        <input id="cep" className="form-control" placeholder="01010-020" />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-sm-4">
                        <label className="text-secondary">Bairro</label>
                        <input id="bairro" className="form-control" />
                    </div>

                    <div className="col-sm-4">
                        <label className="text-secondary">Cidade</label>
                        <input id="cidade" className="form-control" />
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    <div className="col-sm-4">
                        <label className="text-secondary">Estado</label>
                        <input id="estado" className="form-control" />
                    </div>

                    <div className="col-sm-4">
                        <label className="text-secondary">País</label>
                        <input id="pais" className="form-control" />
                    </div>
                </div>

                <div className="row justify-content-center mt-4 mb-4">
                    <div className="col-sm-4">
                        <button
                            id="botaoLogin"
                            onClick={cadastroUsuarioRequest}
                            type="button"
                            className="btn btnCadastro btn-info w-100 h-100">
                            Cadastrar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;