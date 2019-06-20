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
        }
    }

    render() {
        return (
            <div className="row  bg-info">
                <div className="col bg-info mb-5 mt-5">
                    <div className="row bg-info mt-3 justify-content-center">
                        <div id="loginContainer" className="justify-content-left container mt-5 mb-5 bg-white border border-secondary" style={{ borderRadius: '2%'}}>
                            <div className="row justify-content-center">
                                <div className="">
                                    <img src="/logo2.png" style={{height: '200px', width: '210px'}}/>
                                </div>
                                <div className="row border-bottom justif-content-center">
                                    <div>
                                        <h4>
                                            <em>
                                                Bem vindo! É muito bom te ver por aqui.
                                            </em>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="row justify-content-center h-100">
                                    <div className="">
                                        <i className='fas fa-user-circle text-info ml-5' style={{ fontSize: '30px' }}></i>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ marginTop: "-5%" }}>
                                        <input id="txtEmail" align="center" className="input border-top-0 border-left-0 border-right-0 ml-5" type="text" placeholder="E-mail" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="row justify-content-center mt-2 h-100">
                                    <div className="">
                                        <i className="ml-4 material-icons text-info ml-5" style={{ fontSize: '31px' }}>
                                            vpn_key
                                    </i>
                                    </div>
                                    <div className="">
                                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ marginTop: "-5%" }}>
                                            <input id="txtSenha" className="input border-top-0 border-left-0 border-right-0 ml-4" type="password" placeholder="Senha" style={{ height: '25%;' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5">
                                <Link to="#" className="text-info font-weight-bold">Esqueceu sua senha?</Link>
                            </div>
                            <div className="row justify-content-center mt-3 mb-3">
                                <Link to="/">
                                    <button
                                        id="botao"
                                        type="button"
                                        onClick={this.doLogin}
                                        onClick={request}
                                        style={{ fontSize: "150%;" }}
                                        className="btn btn-primary bg-info mt-3 font-weight-bold border border-secondary" style=
                                        {{ fontSize: '18px' }}>
                                        Entrar
                        </button></Link>
                            </div>
                            <div className="row justify-content-center mt-4 mb-4">
                                <p>Ainda não possui cadastro? <Link to="/Cadastro" className="text-info font-weight-bold">Cadastre-se!</Link>
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
