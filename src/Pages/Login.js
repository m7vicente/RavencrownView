import React from "react";
import { Link } from "react-router-dom";
import request from "../request/loginRequest";
import "../css/Login.css";
import { Redirect } from "react-router-dom";
import image from "../images/logo.jpg"


class Login extends React.Component {
    componentDidMount() {
        if (JSON.parse(sessionStorage.getItem("login")) != null) {
            this.props.history.push("/");
        }
    }
    doLogin() {
        if (!request()) {
            alert("Usuario ou senha invalidos");
        } else {
            window.location.reload();
        }
    }

    render() {
        return (
            <div className="row  bg-info mb-5">
                <div className="col bg-info mb-5 mt-5">
                    <div className="row bg-info mt-5 mb-5 justify-content-center">
                        <div id="loginContainer" className="justify-content-left container mt-5 mb-5 bg-white border border-secondary" style={{ borderRadius: '2%' }}>
                            <div className="row justify-content-center" style={{ margin: '-20% 0% -30% 0%' }}>
                                <div className="">
                                    <img src="/logo2.png" style={{ height: '400px', width: '410px' }} />
                                </div>
                            </div>
                            <div className="row border-bottom justif-content-center ml-5 mr-5">
                                <div>
                                    <h4 class="ml-5 sub text-secondary">
                                        Bem vindo! É muito bom te ver por aqui
                                        </h4>
                                </div>
                            </div>

                            <div className="row mt-5">
                                <div className="row justify-content-center h-100 ml-5">
                                    <div className="">
                                        <i class="far fa-envelope text-warning ml-5" style={{ fontSize: '30px' }}></i>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ marginTop: "-5%" }}>
                                        <input id="txtEmail" align="center" className="input border-top-0 border-left-0 border-right-0 ml-5 sub" type="text" placeholder="E-mail" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row justify-content-center mt-2 ml-5 h-100">
                                    <div className="">
                                        <i className="material-icons text-warning ml-5" style={{ fontSize: '30px' }}>
                                            vpn_key
                                    </i>
                                    </div>
                                    <div className="">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ marginTop: "-5%" }}>
                                            <input id="txtSenha" className="input border-top-0 border-left-0 border-right-0 ml-4 sub" type="password" placeholder="Senha" style={{ height: '25%;' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-3">
                                <Link to="#" className="text-info font-weight-bold sub" style={{ fontSize: "12pt" }}>Esqueceu sua senha?</Link>
                            </div>
                            <div className="row justify-content-center mt-3 mb-4">

                                <button
                                    id="botao"
                                    type="button"
                                    onClick={this.doLogin}
                                    className="btn btnlogin sub mt-3" style=
                                    {{ fontSize: '18pt', width: "90%", color: '#776d6d', boxShadow: " 5px 10px rgb(198, 196, 196, 0.3)" }}>
                                    Entrar
                        </button>
                            </div>
                            <div className="row justify-content-center mt-5 mb-4">
                                <p class="sub" style={{ fontSize: "12pt" }}>Ainda não possui cadastro? <Link to="/Cadastro" className="text-info font-weight-bold" >Cadastre-se!</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
