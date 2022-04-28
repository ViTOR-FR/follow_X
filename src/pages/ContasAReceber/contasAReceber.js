//HEADERS
import Header from "pages/Header";

//COMPONENT
import FilterAReceber from "./FilterAReceber/filterAReceber";
import TabelaAReceber from "./TableAReceber/tableAReceber";

const ContasAReceber = ( ) => {

    const data = {
        id: [1, 2, 3, 4],
        idContaAReceber: [1, 2, 3, 4],
        descricao: ["Ref Pedido: 1", "Ref Pedido: 2", "Ref Pedido: 3", "Ref Pedido: 4"],
        dataCriacao: ["19/04/2022", "19/04/2022", "19/04/2022", "20/04/2022"],
        dataVencimento: ["19/04/2022", "19/04/2022", "19/04/2022", "20/04/2022"],
        vendedor: ["VITOR", "WILLAN", "CRISTIANE", "GUILHERME"],
        contabilidade: ["LGR CONTABILIDADE"],
        unidade: ["IT - SETOR MARISTA", "IT - SETOR MARISTA", "IT - SETOR MARISTA", "IT - SETOR MARISTA"],
        cliente: ["FERNANDA (111.111.111-12)", "CRISTIANE (111.111.111-12)", "DIEGO (111.111.111-12)", "JULIO (111.111.111-12)"],
        produto: ["PJ - A1", "PF - A1", "BIRD ID", "PJ - A3"],
        valorVenda: ["220,00", "160,00", "59,90", "520,00"],
        situacao: ["Aguardando", "Aprovado", "Aguardando", "Recusado"],
        formaPagamento: ["PIX", "PAGO", "CARTÃO DE CRÉDITO", "DINHEIRO"],
        icons: [1, 2, 3, 4]
    }

    return(
        <>
            <Header />

            <FilterAReceber key={data.id} content={data} />

            <TabelaAReceber content={data} />
        </>
    );
}

export default ContasAReceber;