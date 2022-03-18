import IndicadorEmissao from "./Main/IndicadorEmissao/indicadorEmissao";
import IndicadorVenda from "./Main/IndicadorVendas/indicadorVenda";
import IndicadorFaturamento from "./Main/IndicadorFaturamento/indicadorFaturamento";
import IndicadorProduto from "./Main/IndicadorProdutos/indicadorProduto";

//API
import api from 'services/api';

//HOOKS
import { useState, useEffect } from 'react';

const Home = () => {

    //Variáveis de Estado
    const [indEmissao, setIndEmissao] = useState([]);
    const [indVenda, setIndVenda] = useState([]);
    const [indFaturamento, setIndFaturamento] = useState([]);
    const [indProduto, setIndProduto] = useState([]);

    useEffect(() => {
        api.get('/pedido');
    }, []);

    return(
        <>
            <section className="container">
                <div className="row">
                    <IndicadorEmissao />
                    <IndicadorVenda />
                    <IndicadorFaturamento />
                    <IndicadorProduto />
                </div>
            </section>
        </>
    );
}

export default Home;