import IndicadorEmissao from "./Main/IndicadorEmissao/indicadorEmissao";
import IndicadorVenda from "./Main/IndicadorVendas/indicadorVenda";
import IndicadorFaturamento from "./Main/IndicadorFaturamento/indicadorFaturamento";
import IndicadorProduto from "./Main/IndicadorProdutos/indicadorProduto";

const Home = () => {
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