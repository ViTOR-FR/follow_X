// HEADERS
import Header from "pages/Header";
import Icons from "./Icons/iconsComponent";

//LINKS
import { Link } from "react-router-dom";

//API
import api from "services/api";

//Hooks
import { useEffect, useState } from "react";
import { isContentEditable } from "@testing-library/user-event/dist/utils";

const TabelaPedido = ( {content} ) => {

    return(
        <>
            <section className="request-table">
                <div className="row">
                    <div className="flex-space">
                        <div className="text-center">
                            <h6 className="mb-2">ID Pedido</h6>
                            {
                                content.id.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Data de Criação</h6>
                            {
                                content.dataCriacao.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Vendedor</h6>
                            {
                                content.vendedor.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Cliente</h6>
                            {
                                content.cliente.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Produto</h6>
                            {
                                content.produto.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Valor de Venda</h6>
                            {
                                content.valorVenda.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">R$ {element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">NFS-e</h6>
                            {
                                content.gerarNota.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Situação</h6>
                            {
                                content.situacao.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">PIX</h6>
                            {
                                content.formaPagamento.map((element, index) => {
                                    return <p key={index} className="line-bottom mb-2">{element}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Ações</h6>
                            {
                                content.icons.map((element) => {
                                    if(element) {
                                        return <Icons />
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

export default TabelaPedido;