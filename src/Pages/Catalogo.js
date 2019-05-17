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
                <h4>Explore a variedade de serviços.</h4>
            </div>
        </div>
    </div>

    <div class="row ml-0 w-100 h-100 mt-0">
        <div class="col-sm-3 mt-3">
            <div class="item bg-info" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    settings
                </i>
                <p style={{fontSize:'20px'}}>Técnico</p>
            </div>
        </div>
        <div class="col-sm-3 mt-3">
            <div class="item bg-info" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    grade
                </i>
                <p style={{fontSize:'20px'}}>Aulas</p>
            </div>
        </div>
        <div class="col-sm-3 mt-3">
             <div class="item bg-info" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    directions_car
                </i>
                <p style={{fontSize:'20px'}}>Auto</p>
            </div>
        </div>
        <div class="col-sm-3 mt-3">
             <div class="item bg-info" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    code
                </i>
                <p style={{fontSize:'20px'}}>Code</p>
            </div>
        </div>
    </div>
    <div class="row ml-0 w-100">
        <div class="col-sm-3 mt-3">
             <div class="item bg-info" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    build
                </i>
                <p style={{fontSize:'20px'}}>Reformas</p>
            </div>
        </div>
        <div class="col-sm-3 mt-3">
             <div class="item bg-info" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    cake
                </i>
                <p style={{fontSize:'20px'}}>Culinária</p>
            </div>
        </div>
        <div class="col-sm-3 mt-3">
             <div class="item bg-info" align="center">
                <i class="material-icons" style={{fontSize: '120px'}}>
                    home
                </i>
                <p style={{fontSize:'20px'}}>Domésticos</p>
            </div>
        </div>
        <div class="col-sm-3 mt-3">
             <div class="item bg-info" align="center">
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