import React, { Component, Fragment } from 'react';
import Navbar from '../Pages/Components/Navbar';

function DetalhesDoContrato() {
  return (
  <Fragment>
      <Navbar />
    <div className="content mt-4">
		<div className="row justify-content-center">
			 <div className="col-sm-1 ml-3">
             <i class='fas fa-user-circle' style={{fontSize:'72px'}}></i>
			 </div>
			 
			  <div className="col-sm-4 justify-content-left mt-3">
				<p className="h3">Antonio Costa de Jesus</p>
				<p className="h4">Tecnico Eletronico</p>
			  </div>			  
		</div>

		<div className="row justify-content-center mt-5">
			<div className="col-sm-5">
				 <label className="h5 text-secondary">Situação - </label>
				 <label className="h5 text-success">Aceito</label>
			</div>
		</div>
		
		<div className="row justify-content-center mt-3">
			<div className="col-sm-5">
				 <label className="h5 text-secondary">Local - </label>
				 <label className="h5 text-primary">Domicilio</label>
			</div>
		</div>
		
		<div className="row justify-content-center mt-3">
			<div className="col-sm-5"> 
				 <label className="h5 text-secondary">Data - </label>
				 <label className="h5 text-primary">27/09/2019 às 14h40m</label>
			</div>
		</div>

		<div className="row justify-content-center mt-3">
			<div className="col-sm-5">
				 <label className="h5 text-secondary">Forma de pagamento - </label>
				 <label className="h5 text-primary"> Débito</label>
			</div>
		</div>	
		
		<div className="row justify-content-center mt-4">
			<div className="col-sm-5">
				<p className="h5 text-secondary"> Descrição do serviço </p>
				<p className="h5 text-primary"> Arrumo diversos eletronicos, computador, notebook, smartphones e eletroeletronicos. Faça seu orçamento.</p>
			</div>
		</div>
		
		<div className="row justify-content-center mt-5">
			<div className="col-sm-5">
				<p className="h1"> R$ 100,20 </p>
			</div>
		</div>

	</div>

  </Fragment>
  );
}

export default DetalhesDoContrato;
