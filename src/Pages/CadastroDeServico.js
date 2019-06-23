import React, { Fragment } from "react";
import Modal from "./Components/modal";
import Navbar from "./Components/Navbar";
import "../css/CadastroDeServico.css";
import cadastrodeServicoRequest from "../request/cadastroDeServicoRequest";
import mudaFoto from "../funcoes/mudaFoto";
import Modalsucesso from "./modalSucessoCadastro";

class CadastroDeServico extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Navbar />
          <div className="row w-100 justify-content-right">
            <form className="col justify-content-center">
              <div className="row justify-content-center border-bottom">
                <h3 class="sub">Cadastre seu serviço :)</h3>
              </div>
              <button
                type="button"
                class="btn"
                id="mdl"
                style={{ display: "none" }}
                data-toggle="modal"
                data-target="#modalExemplo"
              />
              <Modalsucesso />

              <div className="row justify-content-center mt-1">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label class="sub">Nome do serviço</label>
                    <input
                      id="nomeServico"
                      type="text"
                      className="form-control"
                      placeholder="Confeiteira"
                    />
                  </div>
                </div>
                <div className="col-sm-2 ml-2">
                  <div className="form-group">
                    <label class="sub">Preço do serviço</label>
                    <input
                      id="precoServico"
                      type="text"
                      className="form-control"
                      placeholder="R$ 100,20"
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mt-1">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label class="sub">Descrição do serviço</label>
                    <textarea
                      id="descricaoServico"
                      className="form-control"
                      rows="7"
                    />
                  </div>
                </div>

                <div className="col-sm-2">
                  <div className="form-group">
                    <label class="sub">Estimativa de Tempo</label>
                    <input
                      id="tempoDeServico"
                      type="time"
                      className="form-control"
                    />

                    <div className="form-group border-top-5">
                      <label class="sub">Selecione a categoria</label>
                      <select id="ddlCategoria" className="form-control">
                        <option selected>Selecione</option>
                        <option value="13">Técnico</option>
                        <option value="14">Aulas</option>
                        <option value="15">Auto</option>
                        <option value="16">Code</option>
                        <option value="17">Reformas</option>
                        <option value="18">Culinária</option>
                        <option value="19">Domésticos</option>
                        <option value="20">Vestuário</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="row justify-content-center mt-4">
                  <div className="col-sm-2">
                    <label class="sub">Local de atendimento</label>

                    <div id="localAtendimento" className="form-check">
                      <label
                        className="sub form-check-label ml-4"
                        for="exampleRadios1"
                      >
                        Atendimento à domicilio
                      </label>
                      <input
                        className="form-check-input"
                        type="radio"
                        id="casa"
                      />
                    </div>
                  </div>

                  <div className="form-check">
                    <label
                      className="sub form-check-label ml-4"
                      for="exampleRadios1"
                    >
                      Atendimento no meu endereço
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      data-toggle="modal"
                      data-target="#myModal"
                    />
                    <Modal />
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="servico-img">
                    <img
                      id="img"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                      alt=""
                    />
                    <div class="file sub btn btn-lg btn-primary">
                      Adicionar foto
                      <input type="file" name="file" onClick={mudaFoto} />
                    </div>
                  </div>
                </div>

                <div className="col-sm-2">
                  <div class="file sub btn btn-lg btn-info">
                    Add recomendações
                    <input
                      type="file"
                      name="file"
                      id="iptRecomendacao"
                      accept=".csv"
                      style={{ marginTop: "10%", fontSize: "16pt" }}
                    />
                  </div>

                  <button
                    id="cadastrarServico"
                    type="button"
                    onClick={this.cadastrarServico}
                    className="sub btn btn-primary ml-4 h-25 w-100"
                    style={{ marginTop: "10%", fontSize: "16pt" }}
                  >
                    Cadastrar Serviço
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }

  cadastrarServico() {
    const endereco = {
      rua: document.getElementById("rua").value.toString(),
      cep: document.getElementById("cep").value.toString(),
      complemento: document.getElementById("complemento").value.toString(),
      numero: document.getElementById("numero").value.toString(),
      referencia: document.getElementById("referencia").value.toString(),
      bairro: document.getElementById("bairro").value.toString(),
      cidade: document.getElementById("cidade").value.toString(),
      estado: document.getElementById("estado").value.toString(),
      Id_Usuario: JSON.parse(sessionStorage.getItem("login")).Id_Usuario
    };

    const servico = {
      idCategoria: document.getElementById("ddlCategoria").options[
        document.getElementById("ddlCategoria").selectedIndex
      ].value,

      nomeServico: document.getElementById("nomeServico").value.toString(),
      descricaoServico: document
        .getElementById("descricaoServico")
        .value.toString(),

      precoServico: parseFloat(document.getElementById("precoServico").value),
      idUsuario: JSON.parse(sessionStorage.getItem("login")).id_Usuario,

      tempo: document.getElementById("tempoDeServico").value
    };
    //cadastrodeServicoRequest(servico,endereco);
  }
}

export default CadastroDeServico;
