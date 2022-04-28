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

import { Link } from "react-router-dom";
import Pedidos from "pages/Pedidos/pedidos";

const Paths = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/inicio" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/perfil" element={<Profile />} />
                    <Route path="/pesquisa" element={<Search />} />
                    <Route path="/contato" element={<Contact />} />

                    <Route path="/faturamento/pedidos" element={<Pedidos />} />
                    <Route path="/faturamento/pedidos/criarPedido" element={<CriarPedido />} />

                    <Route path="/financeiro/contasAReceber" element={<ContasAReceber />} />


                    <Route path="*" element={<NotFound />} />
                </Routes> 
            </BrowserRouter>
        </>
    );
}

export default Paths;