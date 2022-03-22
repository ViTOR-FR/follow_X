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

        // Requisição para Quantidade Total de Emissoes
        api.get('/pedido?id_produto=1&id_produto=2&id_produto=13&id_produto=15&id_produto=12')
        .then((response) => {
            setIndEmissao(response.data.length);
            console.log(indEmissao);
        })

        api.get('/pedido?_like=valor_venda')
        .then((response) => {
            setIndVenda(response.data);
            console.log(indVenda);
        })
    }, []);

    return(
        <>
            <section className="container">
                <div className="row">
                    <IndicadorEmissao key={api.id_produto} content={indEmissao} />
                    <IndicadorVenda />
                    <IndicadorFaturamento />
                    <IndicadorProduto />
                </div>
            </section>
        </>
    );
}

export default Home;