import React, { Component, Fragment } from 'react';
import Navbar from '../Pages/Components/Navbar';

class MeusServicos extends React.Component{
  render(){
    return (
        <Fragment>
            <Navbar></Navbar>
            <ul className="nav nav-tabs justify-content-center mt-2">
                <li className="nav-item active">
                    <a className="nav-link text-secondary" href="#ServicosAtivos" data-toggle="tab">Serviços Ativos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-secondary"  href="#ServicosAgendados" data-toggle="tab">Serviços Agendados</a>
                </li>
            </ul>

    <div className="tab-content">
    
    <div className=" tab-pane active" id="ServicosAtivos">
        
    </div>

    <div className="tab-pane" id="ServicosAgendados" >
    
    </div>
    
    </div>
    </Fragment>
    );
  }
}
export default MeusServicos;
