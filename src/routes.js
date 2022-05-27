import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from "pages/Home";
import Login from "pages/Login/autentication";
import NotFound from "pages/NotFound/notFound";
import CriarPedido from "pages/Pedidos/criarPedido";
import Pedidos from "pages/Pedidos/pedidos";

const Paths = () => {

    const logado = localStorage.getItem('@user');

    return (
        <>
            <BrowserRouter>
                <Routes>
                    {!logado && <Route exact path="/" element={<Login />} />}
                    {logado && <Route path="/" element={<Home />} />}
                    {!logado && <Route path="/login" element={<Login />} />}

                    {logado && <Route path="/faturamento/pedidos" element={<Pedidos />} />}
                    {logado && <Route path="/faturamento/pedidos/criarPedido" element={<CriarPedido />} />}


                    {!logado && <Route path="*" element={<NotFound />} />}
                </Routes> 
            </BrowserRouter>
        </>
    );
}

export default Paths;