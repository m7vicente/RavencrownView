import React, { Component, Fragment } from 'react';

function ServicosAgendados() {
    var img = 'data:image/png;base64,'+ JSON.parse(sessionStorage.getItem("login")).imagem.image;
    
    return (
    <Fragment>
        <div className="col-sm ml-3 mr-3 mt-4">
            <div className="card">

            <img id="img" className="card-img-top" src={img} style={{heigth: "100px"}} />
                
                <div className="card-body">
                    <h4 className="card-title">Titulo do serviço</h4>
                    <p className="card-text">
                        <p> <span id="Data">12/05/2019</span> </p>
                        <p> <span id="Local">Santa Cruz</span> </p>
                    <h5 className="card-title">R$ 120,00</h5>
                    </p>
                <a href="#" className="card-link">Detalhes</a>
                </div>           
            </div>
        </div>
        </Fragment>
 );
}

export default ServicosAgendados;