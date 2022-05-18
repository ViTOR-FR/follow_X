//COMPONENTS
import Header from "pages/Header";
import Footer from "pages/Footer";
import Snackbar from "pages/Notifications/snackbar";

//HOOKS
import { useState } from "react";
import Axios from "axios";
// import { Link } from "react-router-dom";

//IMAGES
import logo_login from '../../svg/followX_logo.svg'


const Login = () => {

    // State da Snackbar
    const [someStateOpen, setSomeStateOpen] = useState(false);

    // State de Login
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const login = async () => {      
        Axios.post("http://localhost:3306/login", {
            user: user,
            senha: senha
        }).then((response) => {
            console.log(response);
        });
    }

    return(
        <>
            <Header hideMenu />

            <section className="container">
                <div className="row">
                    <div className="grid-4 disappear"></div>
                    <div className="grid-4">
                        <div className="flex-center">
                            <img className="icon-l" src={logo_login} alt="follow_x_logo" />
                        </div>
                        <h5 className="text-center mt-2">Olá, faça o login para continuar.</h5>
                        <>
                            <input 
                            className="mt-3" 
                            type="email" 
                            name="user" 
                            placeholder="Digite seu usuário"
                            onChange={(e) => {
                                setUser(e.target.value);
                            }}
                            />

                            <input 
                            className="mt-2" 
                            type="password" 
                            name="user" 
                            placeholder="Digite sua senha"
                            onChange={(e) => {
                                setSenha(e.target.value);
                            }}
                            />

                            <button className="btn w-100 mt-4" onClick={login}>Entrar</button>
                            
                            <button className="btn w-100 mt-4 mb-3">Usar Certificado Digital</button>

                            <Snackbar type="success" open={someStateOpen} onClose={() => setSomeStateOpen(false)} />

                        </>
                    </div>
                    <div className="grid-4 disappear"></div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Login;