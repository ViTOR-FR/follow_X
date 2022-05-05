//HEADERS
import Header from "pages/Header";
import Footer from "pages/Footer";

//API
import Axios from "axios";

//HOOKS
import { useState, useEffect } from "react";
import  CurrencyInput from 'react-currency-input-field';
import { Link } from "react-router-dom";

//SVG
import request_icon from "../../svg/request.svg";
import items_icon from "../../svg/items.svg";
import pay_icon from "../../svg/pay_icon.svg"

const CriarPedido = (  ) => {

    const [values, setValues] = useState();

    const handleChangeValues = (values) => {
        setValues((prevValue) => ({
            ...prevValue,
            [values.target.name]: values.target.value,
        }))
    };

    const handleClick = () => {
        Axios.post("http://35.239.209.9:3306/criarPedido", {
            data_criacao: values.data_lancamento_inicio,
            vendedor_pedido: values.filter_vendedor,
            tipo_pessoa: values.tipo_pessoa,
            cpf: values.num_cnpjCpf,
            cnpj: values.num_cnpjCpf,
            indicacao_contabilidade: values.filter_indicacao,
            vip: values.videoconferencia_sim,
            cd_publico: values.orgaoPublico_sim,
            pedido_terceiro: values.faturar_pedido_terceiro,
            permitir_importacao_unidade: values.permitir_importar_pedido_unidade,
            validacao_VC: values.validacaoVC_sim,
            observacao: values.story,
            produto: values.produto_venda,
            quantidade: values.item_quantidade,
            vlr_unitario: values.valor_unitario,
            vlr_delivery: values.valor_delivery,
            vlr_desconto: values.valor_desconto,
            vlr_total_pedido: values.valor_a_pagar,

        }).then((response) => {
            console.log(response);
        });
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
                                
                            </datalist>
                        </div>
                    </div>

                    <div className="row">
                        <div className="checkbox-container ml-2">
                            <div className="radio-flex mt-3">
                                <label htmlFor="ativo"><h6>VIP:</h6></label>

                                <input className="myInput ml-2" type="radio" name="videoconferencia_sim" id="videoconferencia_sim"/>
                                <label className="mr-9" htmlFor="videoconferencia-sim"><h6>Sim</h6></label>

                                <input className="myInput ml-2" type="radio" name="videoconferencia_nao" id="videoconferencia_nao"/>
                                <label htmlFor="videoconferencia-nao"><h6>Não</h6></label>
                            </div>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="ativo"><h6>Condomínio, Associação, Instância pública, Cartório, S/A ou equivalente?:</h6></label>
                        </div>
                        <div className="checkbox-container">
                            <div className="radio-flex mt-3">
                                <input className="myInput ml-2" type="radio" name="orgaoPublico_sim" id="orgaoPublico-sim"/>
                                <label className="mr-9" htmlFor="orgaoPublico-sim"><h6>Sim</h6></label>

                                <input className="myInput ml-2" type="radio" name="orgaoPublico_nao" id="orgaoPublico-nao"/>
                                <label htmlFor="orgaoPublico-nao"><h6>Não</h6></label>
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
                        <h3>ITENS DO PEDIDO</h3>    
                        <img className="icon-m ml-3" src={items_icon} alt="realizar_pedido" />
                    </div>

                    <div className="row">
                        <div className="grid-3">
                            <h6 className="ml-2 mb-2">Produto</h6>
                            <input className="ml-2" list="produtoDe_venda" id="produto_venda" name="produto_venda" type="text" placeholder="Produto/Serviço" onChange={handleChangeValues} />

                            <datalist id="produtoDe_venda">
                                
                            </datalist>
                        </div>

                        <div className="grid-1">
                            <h6 className="ml-1 mb-2">Quantidade</h6>
                            <input className="ml-2 text-center" id="item_quantidade" name="item_quantidade" type="number" onChange={handleChangeValues} />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Unitário</h6>
                            <CurrencyInput 
                                className="ml-2 text-center"
                                maxLength="12"
                                prefix="R$ "
                                decimalSeparator=","
                                groupSeparator="."
                                id="valor_unitario" 
                                name="valor_unitario" 
                                placeholder = "Valor da Und" 
                                defaultValue = { "" } 
                                decimalsLimit = { 2 } 
                                onChange={handleChangeValues} 
                            />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Delivery</h6>
                            <CurrencyInput 
                                className="ml-2 text-center"
                                maxLength="12"
                                prefix="R$ "
                                decimalSeparator=","
                                groupSeparator="."
                                id="valor_delivery" 
                                name="valor_delivery" 
                                placeholder = "Taxa de Visita" 
                                defaultValue = { "" } 
                                decimalsLimit = { 2 } 
                                onChange={handleChangeValues} 
                            />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Desconto</h6>
                            <CurrencyInput 
                                className="ml-2 text-center"
                                maxLength="12"
                                prefix="R$ "
                                decimalSeparator=","
                                groupSeparator="."
                                id = "valor_desconto" 
                                name = "valor_desconto" 
                                placeholder = "Total a Pagar" 
                                defaultValue = { "" } 
                                decimalsLimit = { 2 } 
                                onChange={handleChangeValues} 
                            />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Total</h6>
                            <CurrencyInput 
                                className="ml-2 text-center"
                                maxLength="12"
                                prefix="R$ "
                                decimalSeparator=","
                                groupSeparator="."
                                id = "valor_a_pagar" 
                                name = "valor_a_pagar" 
                                placeholder = "Total a Pagar" 
                                defaultValue = { "" } 
                                decimalsLimit = { 2 } 
                                onChange={handleChangeValues} 
                            />
                        </div>
                    </div>

                    <div className="grid-12 flex line-bottom">
                        <h3>PAGAMENTO</h3>    
                        <img className="icon-m ml-3" src={pay_icon} alt="realizar_pedido" />
                    </div>

                    <div className="row">
                        <div className="grid-3">
                            <h6 className="ml-2 mb-2">Forma de Pagamento</h6>
                            <input className="ml-2" list="formaDe_pagamento" id="forma_pagamento" name="forma_pagamento" type="text" placeholder="Ex.: Dinheiro" onChange={handleChangeValues} />

                            <datalist id="formaDe_pagamento">
                                
                            </datalist>
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Data de Vencimento</h6>
                            <input className="ml-2 text-center" id="valor_desconto" name="valor_desconto" type="date" onChange={handleChangeValues} />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor</h6>
                            <CurrencyInput 
                                className="ml-2 text-center"
                                maxLength="12"
                                intlConfig={{ locale: 'pt-br', currency: 'BRL' }}
                                prefix="R$ "
                                decimalSeparator=","
                                groupSeparator="."
                                id = "valor_a_pagar" 
                                name = "valor_a_pagar" 
                                placeholder = "Total a Pagar" 
                                defaultValue = { "" } 
                                decimalsLimit = { 2 } 
                                onChange={handleChangeValues} 
                            />
                        </div>
                    </div>

                    <div className="row flex-end-row">
                        <div className="cta-desktop ml-3" >
                            <Link to="#" className="btn" onClick={handleClick}>Salvar</Link>
                            <Link to="/faturamento/pedidos" className="btn-cancel ml-3">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CriarPedido;