//API
import api from "services/api";

//IMPORT HEADERS
import Header from "pages/Header";

//IMPORT ICONS
import parceiro_icon from "../../svg/parceiro_icon.svg";

import React, { useEffect, useState } from "react";
import TabelaParceiro from "./tabelaParceiro";

const Parceiro = () => {

    const [values, setValues] = useState();

    const handleClick = () => {
        console.log("Click")
    }

    useEffect(() => {
        api.get("/consulta/parceiro")
        .then((response) => {
            setValues(response.data);
        });

    }, []);

    return(
        <>
            <Header />
            
            <section className="container">
                <div className="row"> 
                    <div className="grid-12 flex">
                        <h3>Pesquisa de Parceiros</h3>    
                        <img className="icon-m ml-3" src={parceiro_icon} alt="cart_pedidos" />
                    </div>

                    <div className="row flex-column">
                        <div className="row">
                            <div className="grid-7 flex-center">
                                <label htmlFor="id_pedido"><h6>ID do Parceiro: </h6></label>
                                <input className="ml-3" id="id_pedido" name="id_pedido" type="text" placeholder="" />
                            </div>

                            <div className="grid-4">
                                <input list="unidade" id="filter_unidade" name="filter_unidade" type="text" placeholder="Unidade" />

                                <datalist id="unidade">
                                    {
                                        values?.map((dados, index) => {
                                            return <option key={index} value={dados.unidade_vinculada} />
                                        })
                                    }
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            <div className="grid-7 flex-center">
                                <label htmlFor="data_lançamento_inicio"><h6>Período de Aniversário: </h6></label>
                                <input className="ml-3" id="data_lançamento_inicio" name="data_lançamento_inicio" type="date" />

                                <h6 className="ml-3">até</h6>
                                <input className="ml-3" id="data_lançamento_fim" name="data_lançamento_fim" type="date" />
                            </div>

                            <div className="grid-4">
                                <input list="contabilidade" id="filter_contabilidade" name="filter_contabilidade" type="text" placeholder="Contabilidade" />

                                <datalist id="contabilidade">
                                    {
                                        values?.map((dados, index) => {
                                            return <option key={index} value={dados.nome} />
                                        })
                                    }
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

            <TabelaParceiro content={values} />
        </>
    );
}

export default Parceiro;