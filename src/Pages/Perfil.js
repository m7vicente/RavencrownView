import React, { Component, Fragment } from "react";
import "../css/Perfil.css";
import Navbar from "./Components/Navbar";

class Perfil extends React.Component {
  
  render() {
    var nome = JSON.parse(sessionStorage.getItem("login")).nome;
    var img = "";
    try {
      img =
        "data:image/png;base64," +
        JSON.parse(sessionStorage.getItem("login")).imagem.image;
    } catch (ex) {
      img =
        img +
        "https://static1.squarespace.com/static/5ae340fe31d4df5e5f0ed912/t/5b23f08d0e2e7291eacf0db8/1557291866488/?format=1500w";
    }
    var email = JSON.parse(sessionStorage.getItem("login")).email;
    var telefone = JSON.parse(sessionStorage.getItem("login")).telefone;
    var rua = JSON.parse(sessionStorage.getItem("login")).endereco.rua;
    var numero = JSON.parse(sessionStorage.getItem("login")).endereco.numero;
    var bairro= JSON.parse(sessionStorage.getItem("login")).endereco.bairro;
    var cidade = JSON.parse(sessionStorage.getItem("login")).endereco.cidade;
    var complemento= JSON.parse(sessionStorage.getItem("login")).endereco.complemento;
    var estado = JSON.parse(sessionStorage.getItem("login")).endereco.estado;
    var rg = JSON.parse(sessionStorage.getItem("login")).rg;
    var cpf = JSON.parse(sessionStorage.getItem("login")).cpf;
    var cnpj = JSON.parse(sessionStorage.getItem("login")).cnpj;

    return (
      <Fragment>
        <Navbar />
        <div className="container emp-profile">
          <form method="post">
            <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={img} />
                  
                </div>
              </div>
              <div className="col-md-6">
                <div className="profile-head">
                  <h3>Olá, {nome}</h3>
                </div>
              </div>
            </div>
            <div className="row">
              
              <div className="col-md-4">
                <div className="profile-work">
                  <p>Contato</p>
                  <a href=""><i class="fas fa-envelope-open-text"></i> {"   "}  {email}</a>
                  <br />
                  <a href=""><i class="fas fa-phone-square"></i>{"   "} {telefone}</a>
                  <br />
                 </div>
              </div>
              
              <div className="col-md-6">
              <ul className="nav nav-tabs justify-content-center" style={{marginTop: '-35%', marginLeft: '30%'}}>
                <li className="nav-item">
                    <a className="nav-link text-dark" href="#info" data-toggle="tab">Informações Pessoais</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link text-dark"  href="#ende" data-toggle="tab">Endereço</a>
                </li>
              </ul>
              <div className="tab-content">
    
              <div className=" tab-pane mt-4" id="info">
                <label className="h4">RG: {" "} {rg} </label><p/>
                <label className="h4">CPF: {" "} {cpf} </label> {" "}
                <label className="h4">CNPJ: {" "} {cnpj} </label><p/>
              </div>

              <div className="tab-pane mt-5 active" id="ende" >
              <label className="h4">Rua:  {" "} {rua}  </label>
              <label className="h4 ml-3">
              <span className="h4">Nº</span> {" "} {numero}  </label>
              <p/>
              <label className="h4">Bairro: {" "} {bairro}  </label>
              <p/>
              <label className="h4">Complemento: {" "} {complemento}  </label>
              <p/>
              <label className="h4">Cidade: {" "} {cidade}  </label>
              <p/>
              <label className="h4">Estado: {" "} {estado}  </label>

             </div>
    
    </div>
   
              </div>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

export default Perfil;
