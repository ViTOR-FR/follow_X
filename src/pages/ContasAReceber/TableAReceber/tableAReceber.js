import IconsFinanceiro from "../Icons/iconsFinanceiro";

const TabelaAReceber = ( {content} ) => {

    return(
        <>
            <section className="request-table">
                <div className="row ">
                    <div className="grid-12 flex-space">
                        <div className="text-center">
                            <h6 className="mb-3">Unidade</h6>
                            {
                                content.unidade.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">{element}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-3">Descriação</h6>
                            {
                                content.descricao.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-3">Recebimento de:</h6>
                            {
                                content.cliente.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-3">Forma de Pagamento</h6>
                            {
                                content.formaPagamento.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-3">Data de Emissão</h6>
                            {
                                content.dataCriacao.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-3">Data de Vencimento</h6>
                            {
                                content.dataVencimento.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-3">Valor</h6>
                            {
                                content.valorVenda.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">R$ {element}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-3">Recebido</h6>
                            {
                                content.valorVenda.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">R$ {element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-3">Situação</h6>
                            {
                                content.situacao.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-4">{element}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-3">Ações</h6>
                            {
                                content.icons.map((element) => {
                                    if(element) {
                                        return <IconsFinanceiro />
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TabelaAReceber;