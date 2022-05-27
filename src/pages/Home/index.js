import IndicadorEmissao from "./Main/IndicadorEmissao/indicadorEmissao";
import IndicadorVenda from "./Main/IndicadorVendas/indicadorVenda";
import IndicadorFaturamento from "./Main/IndicadorFaturamento/indicadorFaturamento";
import IndicadorProduto from "./Main/IndicadorProdutos/indicadorProduto";

import Header from "pages/Header";
import Footer from "pages/Footer";

//HOOKS
// import { useState } from 'react';


const Home = () => {

    //Variáveis de Estado
    // const [indEmissao, setIndEmissao] = useState([]);
    // const [indVenda, setIndVenda] = useState([]);
    // const [indFaturamento, setIndFaturamento] = useState([]);
    // const [indProduto, setIndProduto] = useState([]);

    return(
        <>
            <Header />
            <section className="container">
                <div className="row">
                    <IndicadorEmissao />
                    <IndicadorVenda />
                    <IndicadorFaturamento />
                    <IndicadorProduto />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Home;