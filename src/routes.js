import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Login from "pages/Login/autentication";
import NotFound from "pages/NotFound/notFound";
import CriarPedido from "pages/Pedidos/criarPedido";
import Pedidos from "pages/Pedidos/pedidos";
import CadastroParceiro from "pages/Parceiro/cadastroParceiro";
import Parceiro from "pages/Parceiro/parceiro";
import Credenciamento from "pages/Credenciamento/credenciamento";
import AgenteDeRegistro from "pages/Credenciamento/agenteDeRegistro";

const Paths = () => {

    const logado = localStorage.getItem('@user');

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* Páginas Iniciais */}
                    {!logado && <Route exact path="/" element={<Login />} />}
                    {logado && <Route path="/" element={<Home />} />}
                    {!logado && <Route path="/login" element={<Login />} />}

                    {/* Faturamento */}
                    {logado && <Route path="/faturamento/pedidos" element={<Pedidos />} />}
                    {logado && <Route path="/faturamento/parceiro" element={<Parceiro />} />}
                    {logado && <Route path="/faturamento/pedidos/criarPedido" element={<CriarPedido />} />}
                    {logado && <Route path="/faturamento/cadastro/parceiro" element={<CadastroParceiro />} />}

                    {/* Credenciamento */}
                    {logado && <Route path="/credenciamento/criarCredenciamento" element={<Credenciamento />} />}
                    {logado && <Route path="/credenciamento/credenciamento" element={<AgenteDeRegistro />} />}

                    {/* Not Found */}
                    {!logado && <Route path="*" element={<NotFound />} />}
                </Routes> 
            </BrowserRouter>
        </>
    );
}

export default Paths;