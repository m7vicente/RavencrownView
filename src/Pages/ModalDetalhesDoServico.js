import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import '../css/ModalDetalhesDoServico.css';
import contratoRequest from '../request/contratoRequest';
import ValidaDataEscolhida from '../request/datasRequest';

class ModalDetalhesDoServico extends React.Component {

    state = {
        servico: null,
    };

    constructor(servico) {
        super();
        this.state.servico = servico.servico;
        this.dataValida = this.dataValida.bind(this);
    }

    dataValida() {
        const data = document.getElementById("dtData").value;
        alert(data);
        const idServico = document.getElementById("servico1").value;
        if (data != null) {
            const respose = ValidaDataEscolhida(data, idServico, document.getElementById("btnContratar"));
        }
    }

    render() {
        return (
            <Fragment>
                {console.log(this.state.servico)}
                <input type="hidden" id="servico1" value={this.state.servico.idServico} />
                <input type="hidden" id="usuario1" value={this.state.servico.idUsuario} />
                <input type="hidden" id="valorFinal" value={this.state.servico.precoServico} />
                <div>
                    <div className="container">

                        <div className="modal fade bd-example-modal-lg" id="myModal" role="dialog" aria-labelledby={this.state.servico.nomeServico} aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">

                                    <div class="modal-header">
                                        <h3 class="modal-title" id="TituloModalCentralizado">{this.state.servico.nomeServico}</h3>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">

                                        <div className="row w-100 border-top-0" >
                                            <span className="h5 text-dark"><span className="text-secondary">Descrição do serviço:</span> {this.state.servico.descricaoServico}</span>
                                            <div className="text-dark"></div>
                                        </div>

                                        <div className="row w-100 border-top-50" align="left">
                                            <div className="col col-lg-6">
                                                <label className="h4 text-secondary"> Localização: </label>

                                                {this.state.servico.localizacaoFixa == true ? <FixedLocation endereco={this.state.servico.endereco} /> : <label className="h5 text-primary">Domicilio</label>}
                                            </div>


                                            <div className="col-lg-6">
                                                <label className="h4 text-secondary"> Sobre: </label><p />
                                                <label className="h4" align="right">Valor: <span id="valor" cclassName=".text-muted">{'R$' + this.state.servico.precoServico}</span> </label>
                                                <label className="h4" align="right">Estimativa: <span id="valor" className=".text-muted">{this.state.servico.tempoExecucao}</span> </label>
                                            </div>
                                        </div>


                                        {this.state.servico.imagem.lenght > 0 ?
                                            <div className="row w-100 border-top-50" align="left">
                                                <div className="col col-lg-12">
                                                    <label className="h4 text-secondary"> Imagens: </label><p />

                                                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                                        <div class="carousel-inner">

                                                            {Object.keys(this.state.servico.imagem).map((e, i) => {
                                                                return (
                                                                    <CreateCarrousselImages
                                                                        image={this.state.servico.imagem[i]}
                                                                    />
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            <div className="row w-100 border-top-50" align="left">
                                                <div className="col col-lg-12">
                                                    <label className="h4 text-secondary"> Imagens: </label><p />
                                                    <img class="d-block h-50 w-50" src="https://static1.squarespace.com/static/5ae340fe31d4df5e5f0ed912/t/5b23f08d0e2e7291eacf0db8/1557291866488/?format=1500w" />
                                                </div>
                                            </div>
                                        }

                                        <div className="row w-100 justify-content-center mt-4 mb-2"><a
                                            style={{ fontSize: '12pt', cursor: 'pointer' }}
                                            className="link text-danger" onClick={function (event) {
                                                document.getElementById("datas").removeAttribute("class", "invisivel")
                                                event.preventDefault();
                                            }}>Escolher datas</a>
                                        </div>
                                        <div id='datas' class="invisivel">
                                            <div className="row w-100 border-top border-bottom-0ottom justify-content-center mt-2">

                                                <div className="form-group mt-4">
                                                    <label>Data</label>
                                                    <input id="dtData" type="time" className="form-control text-secondary" placeholder="23/05/2019" onBlur={this.dataValida} />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-primary w-50 mt-4" disabled id="btnContratar" onClick={contratoRequest}>Contratar</button>
                                            <button type="button" className="btn btn-secondary w-50 mt-4" data-dismiss="modal">Fechar</button>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

function FixedLocation(props) {

    const AdressStyle = {
        "margin": "0px"
    }
    return <div>
        <div className="AdressStyle">
            <span><label className=".text-muted">Endereço: </label>{props.endereco.rua + ", " + props.endereco.numero}</span><p />
            <span><label className=".text-muted">Bairro: </label>{props.endereco.bairro}</span><p />
            <span><label className=".text-muted">Cidade: </label>{props.endereco.cidade}</span><p />
            <span><label className=".text-muted">Estado: </label>{props.endereco.estado}</span><p />
            <span><label className=".text-muted">Complemento: </label>{props.endereco.complemento == null ? 'Não disponivel' : props.endereco.complemento}</span><p />
            <span><label className=".text-muted">Referencia </label>{props.endereco.referencia == null ? 'Não disponivel' : props.endereco.referencia}</span><p />
            <span><label className=".text-muted">CEP: </label>{props.endereco.cep}</span><p />
        </div>
    </div>
}

function CreateCarrousselImages(image) {
    let img;
    try {
        img =
            "data:image/png;base64," + image.image.image;
    } catch (ex) {
        img =
            img +
            "https://static1.squarespace.com/static/5ae340fe31d4df5e5f0ed912/t/5b23f08d0e2e7291eacf0db8/1557291866488/?format=1500w";
    }

    return <div class="carousel-item active">
        <img class="d-block w-100" src={img} alt={image.image.imageURL} />
    </div>
}

export default ModalDetalhesDoServico;