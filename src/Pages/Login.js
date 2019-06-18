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
            <div className="row h-100 p-5 bg-info">
                <div className="col bg-info h-100 mb-2 mt-5">
                    <div className="row bg-info mt-5 mb-5 justify-content-center">
                        <div className="justify-content-left container containerLogin mt-5 mb-5 w-25 h-75 bg-white border border-secondary" style={{ borderRadius: '2%' }}>
                            <div className="row justify-content-center mt-3">
                                <div className="col-sm-1.5">
                                    <i className='fas fa-user-circle text-secondary' style={{ fontSize: '56px' }}></i>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-5 h-100">
                                <div className="col mt-5">
                                    <div className="mdl-textfield mdl-js-textfield">
                                        <i className="material-icons" style={{ fontSize: '30px' }}>
                                            perm_identity
                                        </i>
                                        <input id="txtEmail" align="center" className="input w-100 border-top-0 border-left-0 border-right-0" type="text" placeholder="E-mail" />
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center mt-2 h-100">
                                <div className="">
                                    <i class="material-icons" style={{ fontSize: '30px' }}>
                                        vpn_key
                                    </i>
                                </div>
                                <div className="">
                                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label" style={{ marginTop: "-10%" }}>
                                        <input id="txtSenha" className="input w-100 border-top-0 border-left-0 border-right-0" type="password" placeholder="Senha" style={{ height: '25%;' }} />
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
