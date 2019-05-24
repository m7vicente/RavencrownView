import React, { Component, Fragment } from 'react';
import '../css/Catalogo.css';
import Navbar from './Navbar';

function Catalogo() {
  return (
    <Fragment>
        <Navbar/>
    <div class="row" align="center">
        <div class="col">
            <div class="titulo_catalogo text-secondary">
                <h3>Explore a variedade de serviços</h3>
            </div>
        </div>
    </div>

    <div class="row ml-0 w-100 h-100 mt-0 mb-1 justify-content-center">
        <div class="col-sm-2 mt-3">
            <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '115px'}}>
                    settings
                </i>
                <p style={{fontSize:'20px'}}>Técnico</p>
            </div>
        </div>
        <div class="col-sm-2 mt-3">
            <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '115px'}}>
                    grade
                </i>
                <p style={{fontSize:'20px'}}>Aulas</p>
            </div>
        </div>
        <div class="col-sm-2 mt-3">
             <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '115px'}}>
                    directions_car
                </i>
                <p style={{fontSize:'20px'}}>Auto</p>
            </div>
        </div>
        <div class="col-sm-2 mt-3">
             <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '115px'}}>
                    code
                </i>
                <p style={{fontSize:'20px'}}>Code</p>
            </div>
        </div>
    </div>
    <div class="row mt-5 ml-0 w-100 justify-content-center">
        <div class="col-sm-2 mt-3">
             <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    build
                </i>
                <p style={{fontSize:'20px'}}>Reformas</p>
            </div>
        </div>
        <div class="col-sm-2 mt-3">
             <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    cake
                </i>
                <p style={{fontSize:'20px'}}>Culinária</p>
            </div>
        </div>
        <div class="col-sm-2 mt-3">
             <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    home
                </i>
                <p style={{fontSize:'20px'}}>Domésticos</p>
            </div>
        </div>
        <div class="col-sm-2 mt-3">
             <div class="item" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    store
                </i>
                <p style={{fontSize:'20px'}}>Vestuário</p>
            </div>
        </div>
    </div>
    </Fragment>
  );
}

export default Catalogo;