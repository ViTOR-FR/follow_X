//API
import api from "services/api";

//IMPORT HEADERS
import Header from "pages/Header";

//IMPORT ICONS
import parceiro_icon from "../../svg/parceiro_icon.svg";

import React, { useEffect, useState } from "react";
import TabelaAGR from "./tabelaCredenciamento";

const AgenteDeRegistro = () => {

    const [values, setValues] = useState();

    const handleClick = () => {
        console.log("Click")
    }

    useEffect(() => {
        api.get("/consulta/credenciamentos")
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
                        <h3>Pesquisa de AGR's</h3>
                        <img className="icon-m ml-3" src={parceiro_icon} alt="cart_pedidos" />
                    </div>

                    <div className="row flex-column">
                        <div className="row">
                            <div className="grid-4 flex-center">
                                <label htmlFor="id_pedido"><h6>ID do AGR: </h6></label>
                                <input className="ml-3" id="id_pedido" name="id_pedido" type="text" />
                            </div>

                            <div className="grid-4">
                                <input list="nome_agr" id="filter_nome_agr" name="filter_nome_agr" type="text" placeholder="Nome do AGR" />

                                <datalist id="nome_agr">
                                    {
                                        values?.map((dados, index) => {
                                            return <option key={index} value={dados.nome_agr} />
                                        })
                                    }
                                </datalist>
                            </div>
                        </div>

                        <div className="row">
                            
                            <div className="row flex-start-row">    
                                <div className="grid-2 flex-start">
                                    <label htmlFor="nome_parceiro"><h6>E-Mail: </h6></label>
                                </div>

                                <div className="grid-3">
                                    <input 
                                    className="ml-2 uppercase-normal"  
                                    id="nome_parceiro" 
                                    name="nome_parceiro" 
                                    type="text" 
                                    placeholder="Nome Completo"
                                    onChange={(e) => {
                                        setNomeAGR(e.target.value.toUpperCase());
                                    }}
                                    required
                                    />
                                </div>
                            </div>

                            <div className="grid-4">
                                <input list="nome_cidade" id="filter_cidade" name="filter_cidade" type="text" placeholder="Cidade" />

                                <datalist id="nome_cidade">
                                    {
                                        values?.map((dados, index) => {
                                            return <option key={index} value={dados.municipio} />
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

            <TabelaAGR content={values} />
        </>
    );
}

export default AgenteDeRegistro;