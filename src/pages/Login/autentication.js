//COMPONENTS
import Header from "pages/Header";
import Footer from "pages/Footer";

//MUI
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//HOOKS
import { useState, forwardRef } from "react";
import Axios from "axios";
// import { Link } from "react-router-dom";

//IMAGES
import logo_login from '../../svg/followX_logo.svg'

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });


const Login = () => {

    // States Snackbar
    const [open, setOpen] = useState(false);
    const [notify, setNotify] = useState();
    const [menssagemRetorno, setMenssagemRetorno] = useState();

    // State de Login
    const [user, setUser] = useState("");
    const [senha, setSenha] = useState("");

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

    const login = async () => {      
        Axios.post("http://localhost:3306/login", {
            user: user,
            senha: senha
        }).then((response) => {
            if(response.data.mensagem === "Usuário Logado com Sucesso") {
                setMenssagemRetorno(`Bem Vindo, ${user}!`);
                setNotify("success");
                setOpen(true);

                localStorage.setItem('@user', JSON.stringify(user, senha));
                window.location.reload();
            } 

            if(response.data.mensagem === "Conta não encontrada") {
                setMenssagemRetorno("Conta não encontrada, tente novamente!");
                setNotify("error");
                setOpen(true);
            }
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

                            <Stack spacing={2} sx={{ width: '100%' }}>
                                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                                    <Alert onClose={handleClose} severity={notify} sx={{ width: '100%' }}>{menssagemRetorno}</Alert>
                                </Snackbar>
                            </Stack>
                            
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