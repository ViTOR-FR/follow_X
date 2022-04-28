//HEADERS
import Header from "pages/Header";

//HOOKS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//SVG
import receive_icon from "../../../svg/receive_icon.svg";

const FilterAReceber = ( {content} ) => {

    const [value, setValues] = useState([]);
    const [filterValue, setFilterValue] = useState([]);

    const handleChangeValues = (values) => {
        setValues((prevValue) => ({
            ...prevValue,
            [values.target.name]: values.target.value,
        }))
    };

    return (
        <>
            <section className="container">

                <div className="row">
                    <div className="grid-12 flex">
                        <h3>Contas a Receber</h3>    
                        <img className="icon-m ml-3" src={receive_icon} alt="cart_pedidos" />
                    </div>
                </div>

                <div className="row flex-column">
                    <div className="row">
                        <div className="grid-7 flex-center">
                            <label htmlFor="id_pedido"><h6>Descrição da Conta: </h6></label>
                            <input className="ml-3" id="descricao_conta" name="descricao_conta" type="text" onChange={handleChangeValues} />
                        </div>

                        <div className="grid-4">
                            <input list="formaDe_pagamento" id="forma_pagamento" name="forma_pagamento" type="text" placeholder="Forma de Pagamento" onChange={handleChangeValues} />

                            <datalist id="formaDe_pagamento">
                                {content.formaPagamento.map((vendedores, index) => {
                                    return <option key={index} value={vendedores} />
                                })}
                            </datalist>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-7 flex-center">
                            <label htmlFor="data_lançamento_inicio"><h6>Período de Vencimento: </h6></label>
                            <input className="ml-3" id="data_vencimento_inicio" name="data_vencimento_inicio" type="date" onChange={handleChangeValues} />

                            <h6 className="ml-3">até</h6>
                            <input className="ml-3" id="data_vencimento_fim" name="data_vencimento_fim" type="date" onChange={handleChangeValues} />
                        </div>

                        <div className="grid-4">
                            <input list="clientes" id="filter_cliente" name="filter_cliente" type="text" placeholder="Cliente" onChange={handleChangeValues} />

                            <datalist id="clientes">
                                {content.cliente.map((clientes, index) => {
                                    return <option key={index} value={clientes} />
                                })}
                            </datalist>
                        </div>
                    </div>

                    <div className="row">
                        <div className="grid-7 flex-center">
                            <label htmlFor="data_aprovacao_incio"><h6>Período de Conciliação: </h6></label>
                            <input className="ml-3" id="data_conciliacao_incio" name="data_conciliacao_incio" type="date" onChange={handleChangeValues} />

                            <h6 className="ml-3">até</h6>
                            <input className="ml-3" id="data_conciliacao_fim" name="data_conciliacao_fim" type="date" onChange={handleChangeValues} />
                        </div>

                        <div className="grid-4">
                            <input list="it_unidade" id="unidade_conta" name="unidade_conta" type="text" placeholder="Unidade" onChange={handleChangeValues} />

                            <datalist id="it_unidade">
                                {content.unidade.map((contabilidades, index) => {
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
                    </div>

                    <div className="row flex-end-row">
                        <div className="grid-4 flex-space">
                            <button className="btn"><a href="/">Limpar Pesquisa</a></button>
                            <button className="btn">Pesquisar</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FilterAReceber;