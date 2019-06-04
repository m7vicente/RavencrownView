import React from "react";
import { Link } from "react-router-dom";
import request from "../request/loginRequest";
import "../css/Login.css";
import { Redirect } from "react-router-dom";

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
            <div className="row bg-info">
                <div className="col bg-info mb-5">
                    <div className="row bg-info mt-5 mb-5 justify-content-center">
                        <div className="justify-content-left container containerLogin mt-5 mb-5 w-25 h-75 bg-white border border-secondary" style={{ borderRadius: '2%' }}>
                            <div className="row justify-content-center mt-3">
                                <div className="col-sm-1.5">
                                    <i className='fas fa-user-circle text-secondary' style={{ fontSize: '56px' }}></i>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5 h-100">
                                <div className="col mt-5">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label ">
                                        <input id="txtEmail" align="center" className="input border border-white mdl-textfield__input" type="text" />
                                        <label className="mdl-textfield__label">E-mail</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-2 h-100">
                                <div className="col">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                                        <input id="txtSenha" className="input border border-white mdl-textfield__input" type="password" style={{ height: '25%;' }} />
                                        <label className="mdl-textfield__label" for="sample3">Senha</label>
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
