//Header e Footer
import Header from "pages/Header";
import Footer from "pages/Footer";

import logo_login from '../../svg/followX_logo.svg'
import { Link } from "react-router-dom";


const Login = () => {
    return(
        <>
            <Header />
            <section className="container">
                <div className="row">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">
                        <div className="flex-center">
                            <img className="icon-l" src={logo_login} alt="follow_x_logo" />
                        </div>
                        <h5 className="text-center mt-2">Olá, faça o login para continuar.</h5>
                        <form>
                            <input className="mt-3" type="text" name="user" placeholder="Digite seu usuário" />
                            <input className="mt-2" type="password" name="user" placeholder="Digite sua senha" />
                            <button className="btn w-100 mt-4"><Link to="/inicio">Entrar</Link></button>
                            {/* <div className="menssage">
                                <div className="menssage-success mt-2">
                                    <p className="color-white">Login efetuado com sucesso!</p>
                                </div>

                                <div className="menssage-error mt-2">
                                    <p className="color-white">Usuário ou senha incorretos.</p>
                                </div>

                                <div className="menssage-warning mt-2">
                                    <p className="color-white">Sua senha não é alterada há 10 dias.</p>
                                </div>
                            </div> */}
                            <button className="btn w-100 mt-4">Usar Certificado Digital</button>
                        </form>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Login;