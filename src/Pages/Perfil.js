
import React, { Component, Fragment } from 'react'
import "../css/Perfil.css";
import Navbar from './Components/Navbar';

class Perfil extends React.Component {

    mudaFoto() {
        var currentImgIndex = 1;
        var ImgSrcArray = [ //caminho das suas imgs aqui
            'img/gods/agni.jpg',
            'img/gods/agni2.jpg',
            'img/gods/agni3.jpg',
            'img/gods/agni4.jpg'
        ];

        function trocar() {

            if (currentImgIndex == ImgSrcArray.length) //reseta quando o contatador for igual ao tamanho da array e volta a 1° img
            {
                currentImgIndex = 0;
            }
            document.getElementById("agni").src = ImgSrcArray[currentImgIndex]; //altera a img do elemento "agni" de acordo com o indice
            currentImgIndex++; // incrementa a nossa referencia

        }
    }

    render() {

        var nome = JSON.parse(sessionStorage.getItem("login")).nome;
        var img = 'data:image/png;base64,' + JSON.parse(sessionStorage.getItem("login")).imagem.image;
        var email = JSON.parse(sessionStorage.getItem("login")).email;
        var telefone = JSON.parse(sessionStorage.getItem("login")).telefone;
        var Rua = JSON.parse(sessionStorage.getItem("login")).endereco.Rua;
        var numero = JSON.parse(sessionStorage.getItem("login")).endereco.numero;
        var cpf = JSON.parse(sessionStorage.getItem("login")).cpf;
        var pais = JSON.parse(sessionStorage.getItem("login")).pais;

        return (
            <Fragment>
                <Navbar></Navbar>
                <div class="container emp-profile">
                    <form method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-img">
                                    <img src={img} />
                                    <div class="file btn btn-lg btn-primary">
                                        Mudar foto
                                <input type="file" name="file" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="profile-head">
                                    <h5>
                                        {nome}
                                    </h5>
                                    <p class="proile-rating">RANKINGS : <span>8/10</span></p>
                                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="profile-work">
                                    <p>WORK LINK</p>
                                    <a href="">Website Link</a><br />
                                    <a href="">Bootsnipp Profile</a><br />
                                    <a href="">Bootply Profile</a>
                                    <p>SKILLS</p>
                                    <a href="">Web Designer</a><br />
                                    <a href="">Web Developer</a><br />
                                    <a href="">WordPress</a><br />
                                    <a href="">WooCommerce</a><br />
                                    <a href="">PHP, .Net</a><br />
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="tab-content profile-tab" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>
                                                    {email}
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{nome}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{email}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{telefone}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Pais</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{pais}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>CPF</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>{cpf}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Price</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>10$/hr</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Age</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>23</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Nacionality</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Polsky</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Cadastrada</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>6 months</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <label>Your Bio</label><br />
                                                <p>Your detail deion</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </Fragment>
        );
    }
}

export default Perfil;