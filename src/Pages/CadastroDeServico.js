import React, { Fragment } from "react";
import Modal from "./Components/modal";
import Navbar from "./Components/Navbar";
import "../css/CadastroDeServico.css";
import cadastrodeServicoRequest from "../request/cadastroDeServicoRequest";
import mudaFoto from "../funcoes/mudaFoto";
import Modalsucesso from "./ModalSucessoCadastro";

function CadastroDeServico() {
  return (
    <Fragment>
      <div>
        <Navbar />
        <div className="row w-100 justify-content-right">
          <form className="col justify-content-center">
            <div className="row justify-content-center">
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
              <div className="col-sm-5" style={{ marginLeft: "-19%" }}>
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
            </div>
            <div className="row justify-content-center mt-3">
              <div className="col-sm-5">
                <div className="form-group">
                  <label class="sub">Descrição do serviço</label>
                  <textarea
                    id="descricaoServico"
                    className="form-control"
                    rows="5"
                  />
                </div>
              </div>
              <div className="col-sm-2 ml-5">
                <div className="form-group">
                  <label class="sub">Preço do serviço</label>
                  <input
                    id="precoServico"
                    type="text"
                    className="form-control"
                    placeholder="R$ 100,20"
                  />
                </div>

                <div className="form-group">
                  <label class="sub">Tempo de execução</label>
                  <input
                    id="tempoDeServico"
                    type="datetime-local"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row justify-content-center mt-4">
              <div className="col-sm-2">
                <label class="sub">Disponível fim de semana?</label>
                <div id="disponivelFds" className="row form-check mt-0">
                  <input className="col form-check-input" type="radio" />
                  <label
                    className="sub col form-check-label ml-4"
                    for="exampleRadios1"
                  >
                    Sim
                  </label>
                  <input className="col form-check-input" type="radio" />
                  <label
                    className="sub col form-check-label ml-4"
                    for="exampleRadios1"
                  >
                    Não
                  </label>
                </div>
                <div className="form-check" />
              </div>
              <div className="col-sm-3">
                <label class="sub">Local de atendimento</label>

                <div id="localAtendimento" className="form-check">
                  <input
                    className="row form-check-input"
                    type="radio"
                    id="casa"
                  />
                  <label className="sub form-check-label ml-4" for="exampleRadios1">
                    Atendimento à domicilio
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    data-toggle="modal"
                    data-target="#myModal"
                  />
                  <label className="sub form-check-label ml-4" for="exampleRadios1">
                    Atendimento no meu endereço
                    <Modal />
                  </label>
                </div>
              </div>
              <div className="col-sm-2">
                <div class="arq-img">
                  <div class="file sub btn btn-lg btn-info">
                    Add recomendações
                    <input
                      type="file"
                      name="file"
                      id="iptRecomendacao"
                      accept=".csv"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row justify-content-center mt-4">
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

              <div
                className="form-group col-md-2"
                style={{ marginLeft: "-10%", marginRight: "1%" }}
              >
                <label class="sub">Selecione a categoria</label>
                <select id="categoria" className="form-control">
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
              <div className="col-sm-2">
                <button
                  id="cadastrarServico"
                  type="button"
                  onClick={cadastrodeServicoRequest}
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

export default CadastroDeServico;
