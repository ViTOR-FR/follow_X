import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Login from "pages/Login/autentication";
import NotFound from "pages/NotFound/notFound";
import Profile from "pages/Profile/profile";
import Search from "pages/Search/search";
import Contact from "pages/Contato/contact";
import CriarPedido from "pages/Pedidos/criarPedido";
import ContasAReceber from "pages/ContasAReceber/contasAReceber";
import Pedidos from "pages/Pedidos/pedidos";

const Paths = () => {

    const logado = localStorage.getItem('@user');

    const ip = "35.239.209.9";

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {!logado && <Route exact path="/" element={<Login />} />}
                    {logado && <Route path="/" element={<Home />} />}
                    {!logado && <Route path="/login" element={<Login />} />}
                    {logado && <Route path="/perfil" element={<Profile />} />}
                    {logado && <Route path="/pesquisa" element={<Search />} />}
                    {logado && <Route path="/contato" element={<Contact />} />}

                    {logado && <Route path="/faturamento/pedidos" element={<Pedidos />} />}
                    {logado && <Route path="/faturamento/pedidos/criarPedido" element={<CriarPedido />} />}

                    {logado && <Route path="/financeiro/contasAReceber" element={<ContasAReceber />} />}


                    {!logado && <Route path="*" element={<NotFound />} />}
                </Routes> 
            </BrowserRouter>
        </>
    );
}

export default Paths;