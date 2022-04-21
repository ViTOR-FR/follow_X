//HEADERS
import Header from "pages/Header";
import Footer from "pages/Footer";

//HOOKS
import { useState, useEffect } from "react";

//SVG
import request_icon from "../../svg/request.svg";
import items_icon from "../../svg/items.svg";

const CriarPedido = (  ) => {

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
        gerarPIX: ["PIX", "PAGO", "CARTÃO DE CRÉDITO", "DINHEIRO"],
        tipoPessoa: ["Física", "Jurídica"],
        icons: [1, 2, 3, 4]
    }

    return(
        <>
        <Header />
            <section className="container">
                <div className="row flex-column">
                    
                    <div className="grid-12 flex line-bottom">
                        <h3>Realizar Pedido</h3>    
                        <img className="icon-m ml-3" src={request_icon} alt="realizar_pedido" />
                    </div>

                    <div className="row">
                        <div className="grid-1">
                            <label htmlFor="data_lançamento_inicio"><h6>Data: </h6></label>
                        </div>

                        <div className="grid-2">
                            <input className="ml-2 text-center" id="data_lançamento_inicio" name="data_lançamento_inicio" type="date" onChange={handleChangeValues} disabled />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1 flex-center">
                            <label htmlFor="filter_vendedor"><h6>Vendedor: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input className="ml-2" list="vendedores" id="filter_vendedor" name="filter_vendedor" type="text" placeholder="Responsável pelo Pedido" onChange={handleChangeValues} />

                            <datalist id="vendedores">
                                {data.vendedor.map((vendedor, index) => {
                                    return <option key={index} value={vendedor} />
                                })}
                            </datalist>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="tipo_pessoa"><h6>Pessoa:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input className="ml-2" list="tipo_pessoa" id="filter_pessoa" name="tipo_pessoa" type="text" placeholder="Física/Jurídica" onChange={handleChangeValues} required />

                            <datalist id="tipo_pessoa">
                                {data.tipoPessoa.map((tipoPessoa, index) => {
                                    return <option key={index} value={tipoPessoa} />
                                })}
                            </datalist>
                        </div>

                        <div className="grid-1 ml-5">
                            <label htmlFor="tipo_pessoa"><h6>CPF/CNPJ: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input className="ml-2" id="num_cnpjCpf" name="num_cnpjCpf" type="text" onChange={handleChangeValues} required />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="indicacao"><h6>Indicação: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input className="ml-2" list="indicacao" id="filter_indicacao" name="filter_indicacao" type="text" placeholder="Parceiro que Inidicou" onChange={handleChangeValues} />

                            <datalist id="indicacao">
                                {data.contabilidade.map((contabilidade, index) => {
                                    return <option key={index} value={contabilidade} />
                                })}
                            </datalist>
                        </div>
                    </div>

                    <div className="row">
                        <div className="checkbox-container ml-2">
                            <div className="radio-flex mt-3">
                                <label for="ativo"><h6>VIP:</h6></label>

                                <input className="myInput ml-2" type="radio" name="videoconferencia-sim" id="videoconferencia-sim"/>
                                <label className="mr-9" for="videoconferencia-sim"><h6>Sim</h6></label>

                                <input className="myInput ml-2" type="radio" name="videoconferencia-nao" id="videoconferencia-nao"/>
                                <label for="videoconferencia-nao"><h6>Não</h6></label>
                            </div>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label for="ativo"><h6>Condomínio, Associação, Instância pública, Cartório, S/A ou equivalente?:</h6></label>
                        </div>
                        <div className="checkbox-container">
                            <div className="radio-flex mt-3">
                                <input className="myInput ml-2" type="radio" name="orgaoPublico-sim" id="orgaoPublico-sim"/>
                                <label className="mr-9" for="orgaoPublico-sim"><h6>Sim</h6></label>

                                <input className="myInput ml-2" type="radio" name="orgaoPublico-nao" id="orgaoPublico-nao"/>
                                <label for="orgaoPublico-nao"><h6>Não</h6></label>
                            </div>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="faturar_pedido_terceiro"><h6>Faturar Pedido para Terceiro:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input className="myInput ml-2" type="checkbox" name="faturar_pedido_terceiro" id="faturar_pedido_terceiro" onChange={handleChangeValues} />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="permitir_importar_pedido_unidade"><h6>Permitir importar pedido em outra unidade:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input className="myInput ml-2" type="checkbox" name="permitir_importar_pedido_unidade" id="permitir_importar_pedido_unidade" onChange={handleChangeValues} />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="permitir_importar_pedido_unidade"><h6>Permitir importar pedido em outra unidade:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input className="myInput ml-2" type="checkbox" name="permitir_importar_pedido_unidade" id="permitir_importar_pedido_unidade" onChange={handleChangeValues} />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="validacaoVC_sim"><h6>Validação Via Vídeoconferência:</h6></label>
                        </div>

                        <div className="grid-3 flex">
                            <input className="myInput ml-2" type="checkbox" name="validacaoVC_sim" id="validacaoVC_sim" onChange={handleChangeValues} />
                            <label className="ml-2" htmlFor="validacaoVC_sim"><h6>Sim</h6></label>

                            <input className="myInput ml-6" type="checkbox" name="validacaoVC_nao" id="validacaoVC_nao" onChange={handleChangeValues} />
                            <label className="ml-2" htmlFor="validacaoVC_nao"><h6>Não</h6></label>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="validacaoVC_sim"><h6>Observações:</h6></label>
                        </div>

                        <div className="grid-6">
                            <textarea className="ml-2" id="story" name="story" rows="5" cols="32"></textarea>
                        </div>
                    </div>

                    <div className="grid-12 flex line-bottom">
                        <h3>Itens do Pedido</h3>    
                        <img className="icon-m ml-3" src={items_icon} alt="realizar_pedido" />
                    </div>

                    <div className="row">
                        <div className="grid-3">
                            <h6 className="ml-2 mb-2">ID Pedido</h6>
                            <input className="ml-2" list="produtoDe_venda" id="produto_venda" name="produto_venda" type="text" placeholder="Responsável pelo Pedido" onChange={handleChangeValues} />

                            <datalist id="produtoDe_venda">
                                {data.produto.map((vendedor, index) => {
                                    return <option key={index} value={vendedor} />
                                })}
                            </datalist>
                        </div>

                        <div className="grid-1">
                            <h6 className="ml-1 mb-2">Quantidade</h6>
                            <input className="ml-2 text-center" id="item_quantidade" name="item_quantidade" type="number" onChange={handleChangeValues} />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Unitário</h6>
                            <input className="ml-2 text-center" id="valor_unitario" name="valor_unitario" type="number" onChange={handleChangeValues} />
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CriarPedido;