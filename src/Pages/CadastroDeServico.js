import React, { Fragment } from "react";
import Modal from "./Components/modal";
import Navbar from "./Components/Navbar";
import "../css/CadastroDeServico.css";
import cadastrodeServicoRequest from "../request/cadastroDeServicoRequest";
import Modalsucesso from "./modalSucessoCadastro";
import $ from "jquery";

class CadastroDeServico extends React.Component {
  render() {
    return (
      <Fragment>
        <div>
          <Navbar />
          <div className="row w-100 justify-content-right">
            <form className="col justify-content-center">
              <div className="row justify-content-center border-bottom">
                <h3 class="sub mb-4">Cadastre seu serviço :)</h3>
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

              <div className="row justify-content-center mt-5">
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
              </div>

              <div className="row justify-content-center mt-4">
                <div className="col-sm-3">
                  <label class="sub">Local de atendimento</label>
                  <br />
                  <input
                    className="col-sm-2 form-check-input inp"
                    type="radio"
                    id="casa"
                    name="localAtendimento"
                  />
                  Atendimento à domicilio <p />
                  <input
                    className="col-sm-2 form-check-input inp"
                    type="radio"
                    data-toggle="modal"
                    data-target="#myModal"
                    name="localAtendimento"
                  />
                  Atendimento no meu endereço <br />
                  <Modal />
                </div>

                <div class="col-md-3">
                  <div class="servico-img">
                    <img id="img" src="./terceirizado.jpg" alt="" />
                    <div class="file sub btn btn-lg btn-primary">
                      Adicionar foto
                      <input
                        type="file"
                        id="iptImages"
                        name="file"
                        accept=".png"
                      />
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
                    />
                  </div>

                  <button
                    id="cadastrarServico"
                    type="button"
                    onClick={this.cadastrarServico}
                    style={{fontSize: "14pt"}}
                    className="sub btnCadastro btn btn-primary ml-3 mt-4 w-100"
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
    let endereco = null;
    if (!$("#casa").is(":checked")) {
      endereco = {
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
    }

    const imagem = createImageObject(document.getElementById("iptImages"));

    const servico = {
      idServico: null,
      idUsuario: JSON.parse(sessionStorage.getItem("login")).id_Usuario,
      endereco: endereco,
      idCategoria: document.getElementById("ddlCategoria").options[
        document.getElementById("ddlCategoria").selectedIndex
      ].value,
      imagem: imagem,
      nomeServico: document.getElementById("nomeServico").value.toString(),
      descricaoServico: document
        .getElementById("descricaoServico")
        .value.toString(),
      tempoExecucao: document.getElementById("tempoDeServico").value,
      precoServico: parseFloat(document.getElementById("precoServico").value),
      localizacaoFixa: endereco != null
    };

    sleep(1000).then(() => {
      cadastrodeServicoRequest(servico);
    });
  }
}

function createImageObject(input) {
  console.log(input.files);
  let images = [];
  if (input != null) {
    for (let file = 0; file < input.files.length; file++) {
      let image = {
        idServico: null,
        idUsuario: JSON.parse(sessionStorage.getItem("login")).Id_Usuario,
        imagemURL: null,
        image: null
      };
      var reader = new FileReader();
      reader.readAsDataURL(input.files[file]);
      reader.onload = function() {
        image.image = reader.result.replace("data:image/png;base64,", "");
      };
      reader.onerror = function(error) {
        return;
      };
      images.push(image);
    }
    return images;
  }
}
function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

export default CadastroDeServico;
