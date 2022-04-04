//HEADERS
import Header from "pages/Header";
import Footer from "pages/Footer";

const CriarPedido = () => {
    return(
        <>
        <Header />
            <section className="container">
                <div className="row">
                    <div className="grid-12">
                        <h3 className="line-bottom">Criar Pedido</h3>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-4 flex-center">
                        <label for="data_lancamento"><h6>Data: </h6></label>
                        <input className="ml-3" id="data_lancamento" name="data_lancamento" type="date" />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-6 flex-center">
                        <label for="vendedor_pedido"><h6>Vendedor: </h6></label>
                        <input className="ml-3" list="vendedor" id="vendedor_pedido" name="vendedor_pedido" type="text" required />

                        <datalist id="vendedor">
                            <option value="Vendedor Teste 1" />
                            <option value="Vendedor Teste 2" />
                            <option value="Vendedor Teste 3" />
                            <option value="Vendedor Teste 4" />
                            <option value="Vendedor Teste 5" />
                        </datalist>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-4 flex-center">
                        <label for="tipo_pessoa"><h6>Tipo de Pessoa: </h6></label>
                        <input className="ml-3" list="tipo_de_pessoa" id="tipo_pessoa" name="tipo_pessoa" type="text" />

                        <datalist id="tipo_de_pessoa">
                            <option value=""></option>
                            <option value="Pessoa Física" />
                            <option value="Pessoa Jurídica" />
                        </datalist>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 flex-center">
                        <label for="input_cpf"><h6>CPF: </h6></label>
                        <input className="input-cpf ml-3" id="input_cpf" name="input_cpf" type="text" oninput="mascara(this)" required />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-6 flex-center">
                        <label for="indicacao_pedido"><h6>Indicacao: </h6></label>
                        <input className="ml-3" list="indicacao" id="indicacao_pedido" name="indicacao_pedido" type="text" required />

                        <datalist id="indicacao">
                            <option value="Indicacao 1" />
                            <option value="Indicacao 2" />
                            <option value="Indicacao 3" />
                            <option value="Indicacao 4" />
                            <option value="Indicacao 5" />
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

                    <div className="grid-5 flex">
                        <label for="taxa_vip"><h6>Taxa de VIP: </h6></label>
                        <input className="ml-3" list="taxa_de_vip" id="taxa_vip" name="taxa_vip" type="text" />

                        <datalist id="taxa_de_vip">
                            <option value="R$ 30,00" />
                            <option value="R$ 40,00" />
                        </datalist>
                    </div>

                    <div className="grid-5 flex">
                        <label for="taxa_vip"><h6>Resp. pelo VIP: </h6></label>
                        <input className="ml-3" list="responsavel_vip_list" id="responsavel_vip" name="responsavel_vip" type="text" />

                        <datalist id="responsavel_vip_list">
                            <option value="VITOR FÉLIX RODRIGUES" />
                            <option value="WILLAN SALVADOR FÉLIX" />
                            <option value="CRISTIANE RODRIGUES COELHO FÉLIX" />
                        </datalist>
                    </div>
                </div>

                <div className="row">
                    <div className="checkbox-container ml-2">
                        <div className="flex mt-2">
                            <label for="ocultar-repasse"><h6>Permitir importar pedido em outras unidades:</h6></label>
                            <input className="myInput ml-2" type="checkbox" name="permitir-outras-unidades" id="permitir-outras-unidades"/>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="checkbox-container ml-2">
                        <div className="radio-flex mt-3">
                            <label for="ativo"><h6>Videconferência:</h6></label>

                            <input className="myInput ml-2" type="radio" name="videoconferencia-sim" id="videoconferencia-sim"/>
                            <label className="mr-9" for="videoconferencia-sim"><h6>Sim</h6></label>

                            <input className="myInput ml-2" type="radio" name="videoconferencia-nao" id="videoconferencia-nao"/>
                            <label for="videoconferencia-nao"><h6>Não</h6></label>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="grid-12">
                        <h4 className="line-bottom">Produto</h4>
                    </div>
                </div>

                <div className="row flex-space-around">
                    <div className="grid-3">
                        <div className="text-center">
                            <h6 className="mb-2">Produto</h6>
                            <input type="text" list="produto" name="select_produto" id="select_produto" required />

                            <datalist id="produto">
                                <option value="PJ A1 - 1 ANO ARQUIVO" />
                                <option value="PF A1 - 1 ANO ARQUIVO" />
                                <option value="PF A3 - 3 ANOS TOKEN" />
                            </datalist>
                        </div>
                    </div>

                    <div className="grid-1">
                        <div className="text-center w-custom-quantidade">
                            <h6 className="mb-2">Quantidade</h6>
                            <input className="text-center" type="text" name="quantidade_produto" id="quantidade_produto" value="1" />
                        </div>
                    </div>

                    <div className="grid-1">
                        <div className="text-center w-custom-quantidade">
                            <h6 className="mb-2">Val. Unitário</h6>
                            <p>R$ 79,90</p>
                        </div>
                    </div>

                    <div className="grid-1">
                        <div className="text-center w-custom-quantidade">
                            <h6 className="mb-2">Delivery</h6>
                            <p>R$ 30,00</p>
                        </div>
                    </div>

                    <div className="grid-1">
                        <div className="text-center w-custom-quantidade">
                            <h6 className="mb-2">Acrécimo</h6>
                            <input className="text-center" type="text" name="valor_acrecimo" id="valor_acrecimo" value="0,00" />
                        </div>
                    </div>

                    <div className="grid-1">
                        <div className="text-center w-custom-quantidade">
                            <h6 className="mb-2">Desconto</h6>
                            <input className="text-center" type="text" name="valor_desconto" id="valor_desconto" value="0,00" maxlength="11" />
                        </div>
                    </div>

                    <div className="grid-1">
                        <div className="text-center w-custom-quantidade">
                            <h6 className="mb-2">Sub Total</h6>
                            <input className="text-center" type="text" name="valor_total" id="valor_total" value="0,00" />
                        </div>
                    </div>

                    <div className="grid-1">
                        <div className="text-center w-custom-quantidade">
                            <h6 className="mb-2">Val. da Nota</h6>
                            <input className="text-center" type="text" name="valor_nota" id="valor_nota" value="0,00" required />
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="grid-12">
                        <h4 className="line-bottom">Pagamento</h4>
                    </div>
                </div>

                <div className="row flex-space-around">
                    <div className="grid-4">
                        <div className="text-center">
                            <h6 className="mb-2">Forma de Pagamento</h6>
                            <input type="text" list="forma_pagamento" name="select_forma_pagamento" id="select_forma_pagamento" required />

                            <datalist id="forma_pagamento">
                                <option value="DINHEIRO" />
                                <option value="PIX" />
                                <option value="DÉBITO" />
                                <option value="CRÉDITO" />
                            </datalist>
                        </div>
                    </div>

                    <div className="grid-3">
                        <div className="text-center">
                            <h6 className="mb-2">Data de Vencimento</h6>
                            <input className="text-center" type="date" name="data_vencimento" id="data_vencimento" />
                        </div>
                    </div>

                    <div className="grid-3">
                        <div className="text-center">
                            <h6 className="mb-2">Valor Total</h6>
                            <input className="text-center" type="text" name="valor_total" id="valor_total_pagamento" value="0,00" required />
                        </div>
                    </div>
                </div>

                <div className="row flex-end-row">
                    <button className="btn mt-3"><a href="/">Criar Pedido </a></button>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default CriarPedido;