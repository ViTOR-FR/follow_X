// HEADERS
import Header from "pages/Header";

//LINKS
import { Link } from "react-router-dom";

//API
import api from "services/api";

//Hooks
import { useEffect, useState } from "react";

//IMPORT SVG's
import calendar_icon from "../../svg/calendar_icon.svg";
import confirm_icon from "../../svg/confirm_icon.svg";
import receipt_icon from "../../svg/receipt_icon.svg";
import find_icon from "../../svg/find_icon.svg";
import cancel_icon from "../../svg/cancel_icon.svg";
import edit_icon from "../../svg/edit_icon.svg";

const TabelaPedido = () => {

    //Ajuste de tamanho ícones de ação
    const styleScale = {
        transform: 'scale(0.9)',
    }

    const actionIcons = {
        calendar: calendar_icon,
        confirm: confirm_icon,
        receipt: receipt_icon,
        find: find_icon,
        cancel: cancel_icon,
        edit: edit_icon,
    }

    const data = {
        id: [1, 2],
        dataCriacao: ["18/04/2022","19/04/2022"],
        vendedores: ["LARISSA DIAS GOMES", "JULIO CESAR DE SOUZA SIMÃO"],
        cliente: ["ALONSO BARBOSA (025.350.706-50)", "VITOR FÉLIX RODRIGUES (708.878.841-13"],
        produto: ["PJ - A1", "PF - A1"],
        valorVenda: [220, 160],
        gerarNota: ["Gerar Nota", "Gerada com Sucesso"],
        situacao: ["Aprovado", "Aguardando Aprovação"],
        gerarPIX: ["Gerar PIX", "Pago"],
        icons: [actionIcons, actionIcons]
    }

    return(
        <>
            <section className="request-table">
                <div className="row">
                    <div className="flex-space">
                        <div className="text-center">
                            <h6 className="mb-2">ID Pedido</h6>
                            {
                                data.id.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Data de Criação</h6>
                            {
                                data.dataCriacao.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Vendedor</h6>
                            {
                                data.vendedores.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Cliente</h6>
                            {
                                data.cliente.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Produto</h6>
                            {
                                data.produto.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Valor de Venda</h6>
                            {
                                data.valorVenda.map((element, index) => {
                                    return <p key={index}>R$ {element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">NFS-e</h6>
                            {
                                data.gerarNota.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Situação</h6>
                            {
                                data.situacao.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">PIX</h6>
                            {
                                data.gerarPIX.map((element, index) => {
                                    return <p key={index}>{element}</p>
                                })
                            }
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Ações</h6>
                            <div className="table-actions">
                                {
                                    data.icons.map((element, index) => {
                                        return(
                                        <>
                                            <img key={index} className="icon-m ml-3" src={element.calendar} alt="agendamento" />
                                            <img key={index} className="icon-m ml-3" src={element.confirm} alt="agendamento" />
                                            <img key={index} className="icon-m ml-3" src={element.receipt} alt="agendamento" />
                                            <img key={index} className="icon-m ml-3" src={element.find} alt="agendamento" />
                                            <img key={index} className="icon-m ml-3" src={element.cancel} alt="agendamento" />
                                            <img key={index} className="icon-m ml-3" src={element.edit} alt="agendamento" />
                                        </>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default TabelaPedido;