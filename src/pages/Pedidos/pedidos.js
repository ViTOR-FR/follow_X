//HOOKS
import Axios from "axios";

//IMPORT HEADERS
import Header from "pages/Header";

//IMPORT ICONS
import shop_cart from "../../svg/shopping-cart.svg";

import React, { useEffect, useState } from "react";
import TabelaPedido from "./tabelaPedidos";

const Pedidos = () => {

    const [values, setValues] = useState();

    const handleClick = () => {
        console.log("Click")
    }

    useEffect(() => {
        Axios.get("https://34.121.243.219:3306:3306/consulta/pedidos")
        .then((response) => {
            setValues(response.data);
        });

    }, []);

    // values?.map((dados)=> {console.log(dados)});

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
                                <input className="ml-3" id="id_pedido" name="id_pedido" type="text" placeholder="Informe o número do pedido" />
                            </div>

                            <div className="grid-4">
                                <input list="vendedores" id="filter_vendedor" name="filter_vendedor" type="text" placeholder="Vendedor" />

                                <datalist id="vendedores">
                                    {
                                        values?.map((dados, index) => {
                                            return <option key={index} value={dados.vendedor_pedido} />
                                        })
                                    }
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            <div className="grid-7 flex-center">
                                <label htmlFor="data_lançamento_inicio"><h6>Data de Lançamento: </h6></label>
                                <input className="ml-3" id="data_lançamento_inicio" name="data_lançamento_inicio" type="date" />

                                <h6 className="ml-3">até</h6>
                                <input className="ml-3" id="data_lançamento_fim" name="data_lançamento_fim" type="date" />
                            </div>

                            <div className="grid-4">
                                <input list="clientes" id="filter_cliente" name="filter_cliente" type="text" placeholder="Cliente" />

                                <datalist id="clientes">
                                
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            <div className="grid-7 flex-center">
                                <label htmlFor="data_aprovacao_incio"><h6>Data de Aprovação: </h6></label>
                                <input className="ml-3" id="data_aprovacao_incio" name="data_aprovacao_incio" type="date" />

                                <h6 className="ml-3">até</h6>
                                <input className="ml-3" id="data_aprovacao_fim" name="data_aprovacao_fim" type="date" />
                            </div>

                            <div className="grid-4">
                                <input list="contabilidade" id="filter_contabilidade" name="filter_contabilidade" type="text" placeholder="Contabilidade/Parceiro" />
            
                                <datalist id="contabilidade">
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            <div className="grid-7">
                                <div className="flex mt-2">
                                    <h6>Situação: </h6>
                                    <input className="myInput ml-2" type="checkbox" name="situacao_pedido" id="situacao_aprovado" />
                                    <label htmlFor="situacao_aprovado"><p className="ml-1">Aprovado</p></label>
            
                                    <input className="myInput ml-2" type="checkbox" name="situacao_pedido" id="situacao_aguardando" />
                                    <label htmlFor="situacao_aguardando"><p className="ml-1">Aguardando Aprovação</p></label>
            
                                    <input className="myInput ml-2" type="checkbox" name="situacao_pedido" id="situacao_cancelado" />
                                    <label htmlFor="situacao_cancelado"><p className="ml-1">Cancelado</p></label>
                                </div>
                            </div>

                            <div className="grid-4">
                                <input list="unidade" id="filter_unidade" name="filter_unidade" type="text" placeholder="Unidade" />

                                <datalist id="unidade">
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

            <TabelaPedido content={values} />
        </>
    );
}

export default Pedidos;