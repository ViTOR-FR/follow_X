//HOOKS
import axios from "axios";

//IMPORT HEADERS
import Header from "pages/Header";

//IMPORT ICONS
import shop_cart from "../../svg/shopping-cart.svg";
import calendar_icon from "../../svg/calendar_icon.svg";
import confirm_icon from "../../svg/confirm_icon.svg";
import receipt_icon from "../../svg/receipt_icon.svg";
import find_icon from "../../svg/find_icon.svg";
import cancel_icon from "../../svg/cancel_icon.svg";
import edit_icon from "../../svg/edit_icon.svg";

import React, { useState } from "react";

const Pedidos = () => {

    const styleScale = {
        transform: 'scale(0.9)',
    }

    const [values, setValues] = useState();

    const handleChangeValues = (values) => {
        setValues((prevValue) => ({
            ...prevValue,
            [values.target.name]: values.target.value,
        }))
    };

    const handleClick = () => {
        Axios.post("https://")
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
                                    <option value="Vendedor Teste 1" />
                                    <option value="Vendedor Teste 2" />
                                    <option value="Vendedor Teste 3" />
                                    <option value="Vendedor Teste 4" />
                                    <option value="Vendedor Teste 5" />
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
                                    <option value="Clientes Teste 1" />
                                    <option value="Clientes Teste 2" />
                                    <option value="Clientes Teste 3" />
                                    <option value="Clientes Teste 4" />
                                    <option value="Clientes Teste 5" />
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
                                    <option value="Contabilidade Teste 1" />
                                    <option value="Contabilidade Teste 2" />
                                    <option value="Contabilidade Teste 3" />
                                    <option value="Contabilidade Teste 4" />
                                    <option value="Contabilidade Teste 5" />
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
                                    <option value="Unidade Teste 1" />
                                    <option value="Unidade Teste 2" />
                                    <option value="Unidade Teste 3" />
                                    <option value="Unidade Teste 4" />
                                    <option value="Unidade Teste 5" />
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

            <section className="request-table">
                <div className="row">
                    <div className="flex-space">
                        <div className="text-center">
                            <h6 className="mb-2">ID Pedido</h6>
                            <p>2768</p>
                            <p>2767</p>
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Data de Criação</h6>
                            <p>29/03/2022</p>
                            <p>29/03/2022</p>
                        </div>
-
                        <div className="text-center">
                            <h6 className="mb-2">Vendedor</h6>
                            <p>Larissa Gomes Dias</p>
                            <p>Julio Cesar de Souza Simão</p>
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Cliente</h6>
                            <p>Alonso Barbosa (025.350.706-50)</p>
                            <p>Vítor Félix Rodrigues (708.878.841-13)</p>
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Produto</h6>
                            <p>PJ - A1</p>
                            <p>PF - A1</p>
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Valor de Venda</h6>
                            <p>R$ 220,00</p>
                            <p>R$ 160,00</p>
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">NFS-e</h6>
                            <p>Gerar Nota</p>
                            <p>Imprimir</p>
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">Situação</h6>
                            <p>Aguardando</p>
                            <p>Aprovado</p>
                        </div>
            
                        <div className="text-center">
                            <h6 className="mb-2">PIX</h6>
                            <p>Gerar PIX</p>
                            <p>Pago</p>
                        </div>

                        <div className="text-center">
                            <h6 className="mb-2">Ações</h6>
                            <div className="table-actions">
                                <img style={styleScale} src={calendar_icon} alt="calendar-icon" />
                                <img style={styleScale} src={confirm_icon} alt="confirm-icon" />
                                <img style={styleScale} src={receipt_icon} alt="receipt-icon" />
                                <img style={styleScale} src={edit_icon} alt="edit-icon" />
                                <img style={styleScale} src={find_icon} alt="find-icon" />
                                <img style={styleScale} src={cancel_icon} alt="cancel-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pedidos;