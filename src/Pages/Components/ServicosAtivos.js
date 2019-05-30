import React, { Component, Fragment } from 'react';

function ServicosAtivos() {

    return (
    <Fragment>
    <div className="col-sm ml-3 mr-3 mt-4">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Titulo do serviço</h5>
            <p className="card-text">Aqui informações / detalhes sobre o serviço</p>
            <a href="#" className="btn btn-primary">Mais detalhes</a>
        </div>
    </div>
    </div>
    </Fragment>
 );
}

export default ServicosAtivos;