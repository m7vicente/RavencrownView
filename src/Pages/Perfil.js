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
    var cpf = JSON.parse(sessionStorage.getItem("login")).cpfCnpj;

    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <form method="post">
            
            <div className="row">
              
              <div className="col-md-4">
                <div className="emp-profile">
                <div className="row">
              <div className="col-md-4">
                <div className="profile-img">
                  <img src={img} />
                  
                </div>
              </div>
            </div>
                  <h3 class="ml-5 sub">Olá, {nome}</h3>
                  <i class="far fa-envelope text-warning mt-4 ml-5 mr-5" style={{fontSize: "20pt"}}></i> {"   "}  {email}
                  <br />
                  <i class="text-warning fas fa-phone-square ml-5 mb-5  mr-5" style={{fontSize: "20pt"}}></i>{"   "} {telefone}
                  <br />
                 </div>
              </div>
              
              <div className="col-md-6">
              <ul className="nav nav-tabs justify-content-center" style={{ marginTop: '15%', marginLeft: "20%"}}>
                <li className="nav-item">
                    <a className="nav-link text-dark sub" href="#info" data-toggle="tab">Informações Pessoais</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link text-dark sub"  href="#ende" data-toggle="tab">Endereço</a>
                </li>
              </ul>
              <div className="tab-content" style={{marginLeft: "20%"}}>
    
              <div className=" tab-pane mt-4" id="info">
                <label className="sub0">RG: {" "} {rg} </label><p/>
                <label className="sub0">CPF: {" "} {cpf} </label> {" "}
               
              </div>

              <div className="tab-pane mt-5 active" id="ende" >
              <label className="sub0">Rua:  {" "} {rua}  </label>
              <label className="sub0 ml-3">
              <span className="sub0">Nº</span> {" "} {numero}  </label>
              <p/>
              <label className="sub0">Bairro: {" "} {bairro}  </label>
              <p/>
              <label className="sub0">Complemento: {" "} {complemento}  </label>
              <p/>
              <label className="sub0">Cidade: {" "} {cidade}  </label>
              <p/>
              <label className="sub0">Estado: {" "} {estado}  </label>

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
