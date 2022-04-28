//HOOKS
import axios from "axios";

//IMPORT HEADERS
import Header from "pages/Header";

//IMPORT ICONS
import shop_cart from "../../svg/shopping-cart.svg";

import React, { useState } from "react";
import TabelaPedido from "./tabelaPedidos";

const Pedidos = () => {

    const [values, setValues] = useState();

    const handleChangeValues = (values) => {
        setValues((prevValue) => ({
            ...prevValue,
            [values.target.name]: values.target.value,
        }))
    };

    const handleClick = () => {
        console.log("Click")
    }

    const data = {
        id: [1, 2, 3, 4],
        dataCriacao: ["19/04/2022", "19/04/2022", "19/04/2022", "20/04/2022"],
        vendedor: ["VITOR", "WILLAN", "CRISTIANE", "GUILHERME"],
        contabilidade: ["LGR CONTABILIDADE"],
        unidade: ["IT - SETOR MARISTA"],
        cliente: ["FERNANDA (111.111.111-12)", "CRISTIANE (111.111.111-12)", "DIEGO (111.111.111-12)", "JULIO (111.111.111-12)"],
        produto: ["PJ - A1", "PF - A1", "BIRD ID", "PJ - A3"],
        valorVenda: ["220,00", "160,00", "59,90", "520,00"],
        gerarNota: ["Nota", "Gerada", "Nota", "Gerar Nota"],
        situacao: ["Aguardando", "Aprovado", "Aguardando", "Recusado"],
        formaPagamento: ["PIX", "PAGO", "CARTÃO DE CRÉDITO", "DINHEIRO"],
        icons: [1, 2, 3, 4]
    }

    return(
        <>
            <Header />
            
            <section className="container">
                <div className="row"> 
                    <div className="grid-12 flex">
                        <h3>Pesquisa de Pedidos</h3>    
                        <img className="icon-m ml-3" src={shop_cart} alt="cart_pedidos" />
                    </div>

                    <div className="row flex-column">
                        <div className="row">
                            <div className="grid-7 flex-center">
                                <label htmlFor="id_pedido"><h6>ID do Pedido: </h6></label>
                                <input className="ml-3" id="id_pedido" name="id_pedido" type="text" placeholder="Informe o número do pedido" onChange={handleChangeValues} />
                            </div>

                            <div className="grid-4">
                                <input list="vendedores" id="filter_vendedor" name="filter_vendedor" type="text" placeholder="Vendedor" onChange={handleChangeValues} />

                                <datalist id="vendedores">
                                    {data.vendedor.map((vendedores, index) => {
                                        return <option key={index} value={vendedores} />
                                    })}
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            <div className="grid-7 flex-center">
                                <label htmlFor="data_lançamento_inicio"><h6>Data de Lançamento: </h6></label>
                                <input className="ml-3" id="data_lançamento_inicio" name="data_lançamento_inicio" type="date" onChange={handleChangeValues} />

                                <h6 className="ml-3">até</h6>
                                <input className="ml-3" id="data_lançamento_fim" name="data_lançamento_fim" type="date" onChange={handleChangeValues} />
                            </div>

                            <div className="grid-4">
                                <input list="clientes" id="filter_cliente" name="filter_cliente" type="text" placeholder="Cliente" onChange={handleChangeValues} />

                                <datalist id="clientes">
                                    {data.cliente.map((clientes, index) => {
                                        return <option key={index} value={clientes} />
                                    })}
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            <div className="grid-7 flex-center">
                                <label htmlFor="data_aprovacao_incio"><h6>Data de Aprovação: </h6></label>
                                <input className="ml-3" id="data_aprovacao_incio" name="data_aprovacao_incio" type="date" onChange={handleChangeValues} />

                                <h6 className="ml-3">até</h6>
                                <input className="ml-3" id="data_aprovacao_fim" name="data_aprovacao_fim" type="date" onChange={handleChangeValues} />
                            </div>

                            <div className="grid-4">
                                <input list="contabilidade" id="filter_contabilidade" name="filter_contabilidade" type="text" placeholder="Contabilidade/Parceiro" onChange={handleChangeValues} />
            
                                <datalist id="contabilidade">
                                    {data.contabilidade.map((contabilidades, index) => {
                                        return <option key={index} value={contabilidades} />
                                    })}
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            <div className="grid-7">
                                <div className="flex mt-2">
                                    <h6>Situação: </h6>
                                    <input className="myInput ml-2" type="checkbox" name="situacao_pedido" id="situacao_aprovado" onChange={handleChangeValues} />
                                    <label htmlFor="situacao_aprovado"><p className="ml-1">Aprovado</p></label>
            
                                    <input className="myInput ml-2" type="checkbox" name="situacao_pedido" id="situacao_aguardando" onChange={handleChangeValues} />
                                    <label htmlFor="situacao_aguardando"><p className="ml-1">Aguardando Aprovação</p></label>
            
                                    <input className="myInput ml-2" type="checkbox" name="situacao_pedido" id="situacao_cancelado" onChange={handleChangeValues} />
                                    <label htmlFor="situacao_cancelado"><p className="ml-1">Cancelado</p></label>
                                </div>
                            </div>

                            <div className="grid-4">
                                <input list="unidade" id="filter_unidade" name="filter_unidade" type="text" placeholder="Unidade" onChange={handleChangeValues} />

                                <datalist id="unidade">
                                    {data.unidade.map((unidades, index) => {
                                        return <option key={index} value={unidades} />
                                    })}
                                </datalist>
                            </div>
                        </div>

                        <div className="row flex-end-row">
                            <div className="grid-4 flex-space">
                                <button className="btn border"><a href="/">Limpar Pesquisa</a></button>
                                <button className="btn border" onClick={() => handleClick()}>Pesquisar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TabelaPedido key={data.id} content={data} />
        </>
    );
}

export default Pedidos;