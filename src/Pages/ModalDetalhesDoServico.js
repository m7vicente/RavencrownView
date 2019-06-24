import React, { Component, Fragment } from 'react';
import $ from 'jquery';
import '../css/ModalDetalhesDoServico.css';
import contratoRequest from '../request/contratoRequest';
import ValidaDataEscolhida from '../request/DatasRequest';

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
                                        <h3 class="modal-title sub1 ml-5" id="TituloModalCentralizado" style={{fontSize: "16pt"}}>{this.state.servico.nomeServico}</h3>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>

                                    <div className="modal-body">

                                        <div className="row w-100 border-top-0" >
                                            <span className="ml-4 mr-4 text-dark sub9"><span className="text-secondary">Descrição do serviço:</span> {this.state.servico.descricaoServico}</span>
                            
                                        </div>

                                        <div className="row w-100 border-top-50 mt-1 border-bottom" align="left">
                                            <div className="col col-lg-7">
                                                <span className="sub9 text-secondary ml-4 mr-4"> Localização: </span>

                                                {this.state.servico.localizacaoFixa == true ? <FixedLocation endereco={this.state.servico.endereco} /> : <label className="h4 sub text-primary"> Domicílio</label>}
                                            </div>
                                        </div>

                                        <div className="row w-100 border-bottom mb-4" align="left">
                                            <div className="col-lg-12">
                                                <span className="text-dark sub9" style={{marginLeft: "42%", fontSize: "16pt"}}> Sobre o serviço </span><br />
                                                <span className="text-secondary sub9 ml-4">Valor: <span id="valor" className="text-primary">{'R$' + this.state.servico.precoServico}</span> </span><br/>
                                                <span className="text-secondary sub9 ml-4">Estimativa: <span id="valor" className="text-primary">{this.state.servico.tempoExecucao}</span> </span>
                                            </div>
                                    
                                        </div>


                                        {this.state.servico.imagem.lenght > 0 ?
                                            <div className="row w-100 border-top-50" align="left">
                                                <div className="col col-lg-12">
                                                <label className=" text-primary sub9" style={{marginLeft: "45%", fontSize: "16pt"}}> Imagens </label><p />

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
                                                    <span className=" text-primary sub9 " style={{marginLeft: "45%", fontSize: "16pt"}}> Imagens </span><p />
                                                    <img class="d-block w-50 h-75"  style={{marginLeft: "25%"}} src="https://static1.squarespace.com/static/5ae340fe31d4df5e5f0ed912/t/5b23f08d0e2e7291eacf0db8/1557291866488/?format=1500w" />
                                                </div>
                                            </div>
                                        }

                                        <div className="row w-100 sub9 justify-content-center mb-2"><a
                                            style={{cursor: 'pointer' }}
                                            className="link text-danger" onClick={function (event) {
                                                document.getElementById("datas").removeAttribute("class", "invisivel")
                                                event.preventDefault();
                                            }}>Escolher data</a>
                                        </div>
                                        <div id='datas' class="invisivel">
                                            <div className="row w-100 border-top border-bottom-0ottom justify-content-center mt-2">

                                                <div className="form-group mt-4">
                                                    <label class="sub">Data</label>
                                                    <input id="dtData" type="time" className="form-control text-secondary" placeholder="23/05/2019" onBlur={this.dataValida} />
                                                </div>
                                            </div>
                                        </div>


                                        <div className="modal-footer">
                                            <button type="button" style={{fontSize: "16pt"}} className="btn sub1 btn-primary w-50 mt-4" disabled id="btnContratar" onClick={contratoRequest}>Contratar</button>
                                            <button type="button" style={{fontSize: "16pt"}} className="btn sub1 btn-secondary w-50 mt-4" data-dismiss="modal">Fechar</button>
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