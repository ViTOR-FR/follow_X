//HEADERS
import Header from "pages/Header";

//API
import api from "services/api";

//HOOKS
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//SVG
import request_icon from "../../svg/request.svg";
import items_icon from "../../svg/items.svg";
import pay_icon from "../../svg/pay_icon.svg"

//MASCARAS
import maskCPF from '../Masks/mascara_cpf';
import maskCNPJ from '../Masks/mascara_cnpj';
import { mask, unMask } from 'remask';

const CriarPedido = (  ) => {

    //TIPO PADRÃO DE CERTIFICADO
    const formTipoPessoa = [ 'PESSOA FÍSICA', 'PESSOA JURÍDICA'];

    // Variáveis - Cadastro Pedido

    const [dataLancamento, setDataLancamento] = useState();
    const [vendedorPedido, setVendedorPedido] = useState("");
    const [tipoPessoa, setTipoPessoa] = useState("");
    const [cliente, setCliente] = useState("");
    const [numCNPJ, setNumCNPJ] = useState();
    const [numCPF, setNumCPF] = useState();
    const [indicacao, setIndicacao] = useState("SEM INDICAÇÃO");
    const [vipSim, setVip] = useState(1);
    const [condSim, setCond] = useState(1);
    const [pedidoTerceiro, setPedidoTerceiro] = useState(1);
    const [pedidoUnidade, setPedidoUnidade] = useState(1);
    const [vcSim, setVC] = useState(1);
    const [observacao, setObservacao] = useState(1);
    const [produto, setProduto] = useState();
    const [quantidadeProduto, setQuantidadeProduto] = useState(1);
    const [valorUnitario, setValorUnitario] = useState();
    const [valorDelivery, setValorDelivery] = useState();
    const [valorDesconto, setValorDesconto] = useState();
    const [valorTotal, setValorTotal] = useState();
    const [formaPagamento, setFormaPagamento] = useState("");
    const [dataVencimento, setDataVencimento] = useState("");

    // Variáveis - Listagens
    const [getFormaPagamento, setGetFormaPagamento] = useState([]);

    // Listagem - Produto
    const [getProduto, setGetProduto] = useState([]);


    // VALIDAÇÃO SE PF OU PJ
    const [sePF, setSePF] = useState(false);
    
    useEffect(() => {
        if(tipoPessoa === "PESSOA JURÍDICA") {
            setSePF(true);

        } else {
            setSePF(false);
        }

    }, [tipoPessoa]);


    //PEGAR TIMESTAMP ATUAL
    let verifyDate = true;
    
    useEffect(() => {
        if(verifyDate){
            var data = new Date(),
            dia  = data.getDate().toString(),
            diaF = (dia.length == 1) ? '0'+dia : dia,
            mes  = (data.getMonth()+1).toString(),
            mesF = (mes.length == 1) ? '0'+mes : mes,
            anoF = data.getFullYear();
            setDataLancamento(diaF+"/"+mesF+"/"+anoF);
        }
    }, []);

    //MÁSCARA DE CPF E CNPJ
    function handleCPF(event) {
        const { value } = event.target
    
        setNumCPF(maskCPF(value))
    }

    function handleCNPJ(event) {
        const { value } = event.target

        setNumCNPJ(maskCNPJ(value));
    }

    //MÁSCARA DE MOEDA
    const moedaUnitario = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99,99", "999,90", "9.999,99", "999.999,99", "9.999.999,99"]) 
        setValorUnitario(maskedValue);
    }

    const moedaDelivery = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99,99", "999,90", "9.999,99", "999.999,99", "9.999.999,99"]) 
        setValorDelivery(maskedValue);
    }

    const moedaDesconto = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99,99", "999,90", "9.999,99", "999.999,99", "9.999.999,99"]) 
        setValorDesconto(maskedValue);
    }

    const moedaValorTotal = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99,99", "999,90", "9.999,99", "999.999,99", "9.999.999,99"]) 
        setValorTotal(maskedValue);
    }

    const moedaSubTotal = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99,99", "999,90", "9.999,99", "999.999,99", "9.999.999,99"]) 
        setValorTotal(maskedValue);
    }


    //SALVAR REGISTRO
    const salvarPedido = () => {
        api.post("/api/insert", {
            dataLancamento: dataLancamento,
            vendedorPedido: vendedorPedido,
            cliente: cliente,
            tipoPessoa: tipoPessoa,
            numCPF: numCPF,
            numCNPJ: numCNPJ,
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
            dataVencimento: dataVencimento,
            formaPagamento: formaPagamento
        }).then((response) => {
            console.log(response)
        });
    }

    // Listagem de Formas de Pagamento
    useEffect(() => { 
        api.get("financeiro/formaPagamento")
        .then((response) => {
            setGetFormaPagamento(response.data);
        })

        api.get("estoque/produtos")
        .then((response) => {
            setGetProduto(response.data);
        });

    }, []);


    return (
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
                            <label htmlFor="data_lançamento_inicio"><h6>Data de Criação: </h6></label>
                        </div>

                        <div className="grid-2">
                            <input 
                            className="ml-2 text-center" 
                            id="data_lançamento_inicio" 
                            name="data_lançamento_inicio" 
                            type="text"
                            value={dataLancamento}
                            onChange={(e) => {
                                setDataLancamento(e.target.value.toUpperCase());
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
                            className="ml-2 uppercase-normal" 
                            list="vendedores" 
                            id="vendedor_pedido" 
                            name="vendedor_pedido" 
                            type="text" 
                            placeholder="Responsável pelo Pedido" 
                            onChange={(e) => {
                                setVendedorPedido(e.target.value.toUpperCase());
                            }} 
                            />

                            <datalist id="vendedores">
                                
                            </datalist>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1 flex-center">
                            <label htmlFor="cliente_pedido"><h6>Cliente: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal" 
                            list="vendedores" 
                            id="cliente_pedido" 
                            name="cliente_pedido" 
                            type="text" 
                            placeholder="Nome Completo do Cliente" 
                            onChange={(e) => {
                                setCliente(e.target.value.toUpperCase());
                            }}
                            required
                            />

                            <datalist id="vendedores">
                                
                            </datalist>
                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="tipo_pessoa"><h6>Tipo de Certificado:</h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal" 
                            list="tipo_pessoa" 
                            id="filter_pessoa" 
                            name="tipo_pessoa" 
                            type="text" 
                            placeholder="Física/Jurídica" 
                            onChange={(e) => {
                                setTipoPessoa(e.target.value.toUpperCase());
                            }} 
                            required />

                            <datalist id="tipo_pessoa">
                                {
                                    formTipoPessoa?.map((dados, index) => {
                                        return <option key={index} value={dados} />
                                    })
                                }
                            </datalist>
                        </div>

                        <div className="grid-1 ml-5">
                            <label htmlFor="pessoa_fisica"><h6>CPF: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal" 
                            id="num_cpf" 
                            name="num_cpf" 
                            type="text"
                            onChange={handleCPF}
                            value={numCPF} 
                            maxLength="14"
                            required />
                        </div>

                        {sePF && <div className="grid-1 ml-5">
                            <label htmlFor="pessoa_juridica"><h6>CNPJ: </h6></label>
                        </div> }

                        {sePF && <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal" 
                            id="num_cnpj" 
                            name="pessoa_juridica" 
                            type="text" 
                            onChange={handleCNPJ}
                            value={numCNPJ} 
                            maxLength="18"
                            required />
                        </div> }
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="indicacao"><h6>Indicação: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal" 
                            list="indicacao" 
                            id="indicacao_contabilidade" 
                            name="indicacao_contabilidade" 
                            type="text" 
                            placeholder="Parceiro que Inidicou" 
                            onChange={(e) => {
                                setIndicacao(e.target.value.toUpperCase());
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
                            value={0}
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
                            value={0}
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
                            value={0}
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
                            value={0}
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
                            value={0}
                            onChange={(e) => {
                                setVC(e.target.value)
                            }}
                            />

                        </div>
                    </div>

                    <div className="row flex-start-row">
                        <div className="grid-1">
                            <label htmlFor="observacao_pedido"><h6>Observações:</h6></label>
                        </div>

                        <div className="grid-6">
                            <textarea 
                            className="ml-2" 
                            id="observacao_pedido" 
                            name="observacao_pedido" 
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
                            }} 
                            required
                            />

                            <datalist id="produtoDe_venda">
                               {
                                   getProduto?.map((dados, index) => {
                                        return <option key={index} value={dados.nome_produto} />
                                   })
                               }
                            </datalist>
                        </div>

                        <div className="grid-1">
                            <h6 className="ml-1 mb-2">Quantidade</h6>
                            <input 
                            className="ml-2 text-center" 
                            id="item_quantidade" 
                            name="item_quantidade" 
                            type="number" 
                            value="1"
                            onChange={(e) => {
                                setQuantidadeProduto(e.target.value);
                            }} 
                            required
                            disabled
                            />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Unitário</h6>
                            <input
                                className="ml-2 text-center"
                                maxLength="12"
                                id="valor_unitario" 
                                name="valor_unitario" 
                                placeholder = "Valor Unitário"  
                                onChange={moedaUnitario}
                                value={valorUnitario}
                                required
                            />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Delivery</h6>
                            <input
                                className="ml-2 text-center"
                                maxLength="12"
                                id="valor_delivery" 
                                name="valor_delivery" 
                                placeholder = "Taxa de Visita"  
                                onChange={moedaDelivery}
                                value={valorDelivery}
                            />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Desconto</h6>
                            <input
                                className="ml-2 text-center"
                                maxLength="12"
                                id = "valor_desconto" 
                                name = "valor_desconto" 
                                placeholder = "Valor do Desconto"  
                                onChange={moedaDesconto}
                                value={valorDesconto}
                            />
                        </div>

                        <div className="grid-2">
                            <h6 className="ml-3 mb-2">Valor Total</h6>
                            <input
                                className="ml-2 text-center"
                                maxLength="12"
                                id = "valor_a_pagar" 
                                name = "valor_a_pagar" 
                                placeholder = "Total a Pagar"  
                                onChange={moedaValorTotal}
                                value={valorTotal} 
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
                            className="ml-2 uppercase-normal" 
                            list="formaDe_pagamento" 
                            id="forma_pagamento" 
                            name="forma_pagamento" 
                            type="text" 
                            placeholder="Ex.: Dinheiro" 
                            onChange={(e) => {
                                setFormaPagamento(e.target.value.toUpperCase());
                            }}
                            required
                            />

                            <datalist id="formaDe_pagamento">
                                 {
                                    getFormaPagamento?.map((dados, index) => {
                                        return <option key={index} value={dados.forma_pagamento} />
                                    })
                                }
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
                            <input 
                                className="ml-2 text-center"
                                id = "valor_a_pagar" 
                                name = "valor_a_pagar" 
                                placeholder = "Total a Pagar"  
                                onChange={moedaSubTotal}
                                value={valorTotal}
                                required
                            />
                        </div>
                    </div>

                    <div className="row flex-end-row">
                        <div className="cta-desktop ml-3" >
                            <Link to="/faturamento/pedidos" className="btn" onClick={salvarPedido}>Salvar</Link>
                            <Link to="/faturamento/pedidos" className="btn-cancel ml-3">Cancelar</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CriarPedido;