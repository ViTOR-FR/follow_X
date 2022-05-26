// LINKS
import Icons from "./Icons/iconsComponent";

//MOMENT
import moment from "moment";

const TabelaPedido = ( { content } ) => {

    return(
        <>
            <section className="request-table">
                <div className="row">
                    <div className="flex-space">
                        <div className="text-center">
                            <h6 className="mb-2">ID Pedido</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.id_pedido}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Data de Criação</h6>
                            {
                                content?.map((dados, index) => {
                                    const dataFormatada = moment().format('DD/MM/YYYY');
                                    return <p key={index} className="line-bottom mb-2">{dataFormatada}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Vendedor</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.vendedor_pedido}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Cliente</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.cliente} ({dados.cpf})</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Produto</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.produto}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Valor de Venda</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.vlr_total_pedido}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Forma Pagamento</h6>
                            {
                                content?.map((dados, index) => {
                                    return <p key={index} className="line-bottom mb-2">{dados.forma_pagamento}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Ações</h6>
                            {
                                content?.map((dados, index) => {
                                    return <Icons  key={index} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TabelaPedido;