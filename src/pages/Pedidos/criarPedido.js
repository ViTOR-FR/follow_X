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

    const [dataLancamento, setDataLancamento] = useState([]);
    const [vendedorPedido, setVendedorPedido] = useState([]);
    const [tipoPessoa, setTipoPessoa] = useState([]);
    const [numCPFCNPJ, setNumCPFCNPJ] = useState([]);
    const [indicacao, setIndicacao] = useState("SEM INDICAÇÃO");
    const [vipSim, setVip] = useState(false);
    const [condSim, setCond] = useState(false);
    const [pedidoTerceiro, setPedidoTerceiro] = useState(false);
    const [pedidoUnidade, setPedidoUnidade] = useState(false);
    const [vcSim, setVC] = useState(false);
    const [observacao, setObservacao] = useState(false);
    const [produto, setProduto] = useState();
    const [quantidadeProduto, setQuantidadeProduto] = useState(0);
    const [valorUnitario, setValorUnitario] = useState(0.00);
    const [valorDelivery, setValorDelivery] = useState(0.00);
    const [valorDesconto, setValorDesconto] = useState(0.00);
    const [valorTotal, setValorTotal] = useState(0.00);
    const [formaPagamento, setFormaPagamento] = useState();
    const [dataVencimento, setDataVencimento] = useState();

    
    const salvarPedido = () => {
        Axios.post("http://34.121.243.219:3306/", {
            dataLancamento: dataLancamento,
            vendedorPedido: vendedorPedido,
            tipoPessoa: tipoPessoa,
            numCPFCNPJ: numCPFCNPJ,
            indicacao: indicacao,
            vipSim: vipSim,
            condSim: condSim,
            pedidoTerceiro: pedidoTerceiro,
            pedidoUnidade: pedidoUnidade,
            vcSim: vcSim,
            observacao: observacao,
            produto: produto,
            quantidadeProduto: quantidadeProduto,
            valorUnitario: valorUnitario,
            valorDelivery: valorDelivery,
            valorDesconto: valorDesconto,
            valorTotal: valorTotal,
            formaPagamento: formaPagamento,
            dataVencimento: dataVencimento
        }).then(() => {
            alert("Inserção efetuada com sucesso ")
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
                            <input 
                            className="ml-2 text-center" 
                            id="data_lançamento_inicio" 
                            name="data_lançamento_inicio" 
                            type="date" 
                            onChange={(e) => {
                                setDataLancamento(e.target.value)
                            }} 
                            disabled />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1 flex-center">
                            <label htmlFor="vendedor_pedido"><h6>Vendedor: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2" 
                            list="vendedores" 
                            id="vendedor_pedido" 
                            name="vendedor_pedido" 
                            type="text" 
                            placeholder="Responsável pelo Pedido" 
                            onChange={(e) => {
                                setVendedorPedido(e.target.value)
                            }} 
                            />

                            <datalist id="vendedores">
                                
                            </datalist>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="tipo_pessoa"><h6>Pessoa:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2" 
                            list="tipo_pessoa" 
                            id="filter_pessoa" 
                            name="tipo_pessoa" 
                            type="text" 
                            placeholder="Física/Jurídica" 
                            onChange={(e) => {
                                setTipoPessoa(e.target.value)
                            }} 
                            required />

                            <datalist id="tipo_pessoa">
                                
                            </datalist>
                        </div>

                        <div className="grid-1 ml-5">
                            <label htmlFor="tipo_pessoa"><h6>CPF/CNPJ: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2" 
                            id="num_cnpjCpf" 
                            name="num_cnpjCpf" 
                            type="text" 
                            onChange={(e) => {
                                setNumCPFCNPJ(e.target.value)
                            }} 
                            required />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="indicacao"><h6>Indicação: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2" 
                            list="indicacao" 
                            id="indicacao_contabilidade" 
                            name="indicacao_contabilidade" 
                            type="text" 
                            placeholder="Parceiro que Inidicou" 
                            onChange={(e) => {
                                setIndicacao(e.target.value)
                            }} 
                            />

                            <datalist id="indicacao">
                                
                            </datalist>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="validacaoVC_sim"><h6>Atendimento Delivery:</h6></label>
                        </div>

                        <div className="grid-3 flex">
                            <input 
                            className="myInput ml-2" 
                            type="checkbox" 
                            name="delivery" 
                            id="delivery"
                            value={true}
                            onChange={(e) => {
                                setVip(e.target.value)
                            }}
                            />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="cond_ass_it_cartorio"><h6>Condomínio, Associação, Instância pública, Cartório, S/A ou equivalente:</h6></label>
                        </div>

                        <div className="grid-3 flex">
                            <input 
                            className="myInput ml-2" 
                            type="checkbox" 
                            name="cond_ass_it_cartorio" 
                            id="cond_ass_it_cartorio"
                            value={true}
                            onChange={(e) => {
                                setCond(e.target.value)
                            }}
                            />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="faturar_pedido_terceiro"><h6>Faturar Pedido para Terceiro:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="myInput ml-2" 
                            type="checkbox" 
                            name="faturar_pedido_terceiro" 
                            id="faturar_pedido_terceiro"
                            value={true}
                            onChange={(e) => {
                                setPedidoTerceiro(e.target.value)
                            }} />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="permitir_importar_pedido_unidade"><h6>Permitir importar pedido em outra unidade:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="myInput ml-2" 
                            type="checkbox" 
                            name="permitir_importar_pedido_unidade" 
                            id="permitir_importar_pedido_unidade" 
                            value={true}
                            onChange={(e) => {
                                setPedidoUnidade(e.target.value)
                            }}
                            />
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-3">
                            <label htmlFor="validacaoVC_sim"><h6>Validação Via Vídeoconferência:</h6></label>
                        </div>

                        <div className="grid-3 flex">
                            <input 
                            className="myInput ml-2" 
                            type="checkbox" 
                            name="validacaoVC" 
                            id="validacaoVC" 
                            value={true}
                            onChange={(e) => {
                                setVC(e.target.value)
                            }}
                            />

                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="validacaoVC_sim"><h6>Observações:</h6></label>
                        </div>

                        <div className="grid-6">
                            <textarea 
                            className="ml-2" 
                            id="story" 
                            name="story" 
                            rows="5" 
                            cols="32" 
                            onChange={(e) => {
                                setObservacao(e.target.value)
                            }}
                            />
                        </div>
                    </div>

                    <div className="grid-12 flex line-bottom">
                        <h3>ITENS DO PEDIDO</h3>    
                        <img className="icon-m ml-3" src={items_icon} alt="realizar_pedido" />
                    </div>

                    <div className="row">
                        <div className="grid-3">
                            <h6 className="ml-2 mb-2">Produto</h6>
                            <input 
                            className="ml-2" 
                            list="produtoDe_venda" 
                            id="produto_venda" 
                            name="produto_venda" 
                            type="text" 
                            placeholder="Produto/Serviço" 
                            onChange={(e) => {
                                setProduto(e.target.value);
                            }} />

                            <datalist id="produtoDe_venda">
                                
                            </datalist>
                        </div>

                        <div className="grid-1">
                            <h6 className="ml-1 mb-2">Quantidade</h6>
                            <input 
                            className="ml-2 text-center" 
                            id="item_quantidade" 
                            name="item_quantidade" 
                            type="number" 
                            onChange={(e) => {
                                setQuantidadeProduto(e.target.value);
                            }} />
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
                                onChange={(e) => {
                                    setValorUnitario(e.target.value);
                                }} 
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
                                onChange={(e) => {
                                    setValorDelivery(e.target.value);
                                }}
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
                                onChange={(e) => {
                                    setValorDesconto(e.target.value);
                                }}
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
                                onChange={(e) => {
                                    setValorTotal(e.target.value);
                                }} 
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
                            <input 
                            className="ml-2" 
                            list="formaDe_pagamento" 
                            id="forma_pagamento" 
                            name="forma_pagamento" 
                            type="text" 
                            placeholder="Ex.: Dinheiro" 
                            onChange={(e) => {
                                setFormaPagamento(e.target.value);
                            }}
                            />

                            <datalist id="formaDe_pagamento">
                                
                            </datalist>
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Data de Vencimento</h6>
                            <input 
                            className="ml-2 text-center" 
                            id="data_vencimento" 
                            name="data_vencimento" 
                            type="date" 
                            onChange={(e) => {
                                setDataVencimento(e.target.value);
                            }}
                            />
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
                                onChange={(e) => {
                                    setValorTotal(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className="row flex-end-row">
                        <div className="cta-desktop ml-3" >
                            <Link to="#" className="btn" onClick={salvarPedido}>Salvar</Link>
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