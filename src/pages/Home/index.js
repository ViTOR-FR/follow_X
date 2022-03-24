import IndicadorEmissao from "./Main/IndicadorEmissao/indicadorEmissao";
import IndicadorVenda from "./Main/IndicadorVendas/indicadorVenda";
import IndicadorFaturamento from "./Main/IndicadorFaturamento/indicadorFaturamento";
import IndicadorProduto from "./Main/IndicadorProdutos/indicadorProduto";

import Header from "pages/Header";
import Footer from "pages/Footer";

//API
import api from 'services/api';

//HOOKS
import { useState, useEffect } from 'react';

//LINK
import { Link } from "react-router-dom";

const Home = () => {

    //Variáveis de Estado
    const [indEmissao, setIndEmissao] = useState([]);
    const [indVenda, setIndVenda] = useState([]);
    const [indFaturamento, setIndFaturamento] = useState([]);
    const [indProduto, setIndProduto] = useState([]);

    useEffect(() => {

        // Requisição para Quantidade Total de Emissoes
        api.get('/pedido?id_produto=1&id_produto=2&id_produto=13&id_produto=15&id_produto=12')
        .then((response) => {
            setIndEmissao(response.data.length);
        })

        // Requisicao valor de venda
        api.get('/pedido?valor_venda=220')
        .then((response) => {
            setIndVenda(response.data);
        })

    }, []);

    return(
        <>
            <Header />
            <section className="container">
                <div className="row">
                    <IndicadorEmissao key={api.id_produto} content={indEmissao} />
                    <IndicadorVenda content={indVenda} />
                    <IndicadorFaturamento />
                    <IndicadorProduto />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;