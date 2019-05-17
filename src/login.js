import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function login() {
  return (
    <div className="bg-info">
      <div className="container mt-5 w-25 h-75 bg-white border border-secondary">
        <div className="row justify-content-center mt-3">
          <div className="col-sm-1.5">
          <i class='fas fa-user-circle text-secondary'style={{fontSize:'56px '}}></i>
          </div>
        </div>
        <div className="row justify-content-center mt-5 h-100">
          <div className="col mt-5">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label blue-light_blue">
              <input id="txtEmail" className="input border border-white mdl-textfield__input" type="text" />
              <label className="mdl-textfield__label" for="sample3">E-mail</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-2 h-100">
          <div className="col">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input id="txtSenha" className="input border border-white mdl-textfield__input" type="password" />
              <label className="mdl-textfield__label" for="sample3">Senha</label>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <Link to="#">Esqueceu sua senha?</Link>
        </div>
        <div className="row justify-content-center mt-3 mb-3">
          <button id="botao" type="button" onClick="request()" style={{ fontSize: '150%;' }} className="btn btn-primary w-75 bg-info mt-3 border border-secondary">Entrar</button>
        </div>
        <div className="row justify-content-center mt-4">
          <p>Ainda não possui cadastro? <Link to="cadastro.html">Cadastre-se!</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default login;
