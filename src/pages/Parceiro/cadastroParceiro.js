//HEADERS
import Header from 'pages/Header';

//ICONS
import registration_icon from '../../svg/registration_icon.svg';
import location_icon from '../../svg/location_icon.svg';
import responsavel_icon from '../../svg/responsavel_icon.svg';

//HOOKS
import { useEffect, useState } from 'react';

//MASCARAS
import { mask, unMask } from 'remask';

//API
import axios from 'axios';
import api from 'services/api';
import { Link } from 'react-router-dom';

const CadastroParceiro = () => {

    //OPÇÕES PADRÕES
    const formTipoPessoa = [ 'PESSOA FÍSICA', 'PESSOA JURÍDICA'];
    const formSegmento = ['CONTADOR - INDICADOR', 'CONTADOR - EMISSOR', 'PARCEIRO INDICADOR', 'LEAD DE VOUCHERS'];
    const formTamanhoPaceiro = ['GRANDE','MÉDIO','PEQUENO', 'MUITO PEQUENO'];
    
    // STATES
    const [nomeContabilidade, setNomeContabilidade] = useState("");
    const [numCNPJ, setNumCNPJ] = useState();
    const [numCPF, setNumCPF] = useState();
    const [emailParceiro, setEmailParceiro] = useState("");
    const [numCPFResponsavel, setNumCPFResponsavel] = useState();
    const [tipoPessoaParceiro, setTipoPessoaParceiro] = useState("");
    const [tabelaEspecifica, setTabelaEspecifica] = useState(1);
    const [permitirCriarPedido ,setPermitirCriarPedido] = useState(1);
    const [segmento, setSegmento] = useState("");
    const [tamanhoParceiro, setTamanhoParceiro] = useState("");
    const [observacaoParceiro, setObservacaoParceiro] = useState("");
    const [unidadeParceiro, setunidadeParceiro] = useState("");
    const [cepParceiro, setCepParceiro] = useState();
    const [numEndParceiro, setNumEndParceiro] = useState("");
    const [nomeResponsavel, setNomeResponsavel] = useState("");
    const [telParceiro, setTelParceiro] = useState("");
    const [mailParceiro, setMailParceiro] = useState("");
    const [dataNascimentoParceiro, setDataNascimentoParceiro] = useState("");


    // VALIDAÇÃO SE PF OU PJ
    const [sePF, setSePF] = useState(false);
    
    useEffect(() => {
        if(tipoPessoaParceiro === "PESSOA JURÍDICA") {
            setSePF(true);

        } else {
            setSePF(false);
        }

    }, [tipoPessoaParceiro]);

    //MÁSCARAS
    const cpf = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["999.999.999-99"]);
        setNumCPF(maskedValue);
    }

    const cpfResponsavel = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["999.999.999-99"]);
        setNumCPFResponsavel(maskedValue);
    }

    const cnpj = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99.999.999/9999-99"]);
        setNumCNPJ(maskedValue);
    }

    const cep = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99.999-999"]);
        setCepParceiro(maskedValue);
    }

    const data_nascimento = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99/99/9999"]);
        setDataNascimentoParceiro(maskedValue);
    }

    //PREENCHIMENTO DE ENDEREÇO - VIA CEP
    async function checkCEP(e) {
        const cep = e.target.value.replace(/\D/g, '');
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res, err) => {
            setCepLogradouro(res.data.logradouro);
            setCepBairro(res.data.bairro);
            setCepMunicipio(res.data.localidade);
            setCepComplemento(res.data.complemento);
            setCepUF(res.data.uf);
            setCodIBGE(res.data.ibge);
        });
    }

    const [cepLogradouro, setCepLogradouro] = useState();
    const [cepBairro, setCepBairro] = useState();
    const [cepMunicipio, setCepMunicipio] = useState();
    const [cepComplemento, setCepComplemento] = useState();
    const [cepUF, setCepUF] = useState();
    const [codIBGE, setCodIBGE] = useState();


    //REQUISIÇÃO DE CADASTRO PARCEIRO
    const cadastrar = () => {
        api.post("/faturamento/cadastro/parceiro", {
            nomeContabilidade: nomeContabilidade,
            numCNPJ: numCNPJ,
            numCPF: numCPF,
            emailParceiro: emailParceiro,
            numCPFResponsavel: numCPFResponsavel,
            tipoPessoaParceiro: tipoPessoaParceiro,
            tabelaEspecifica: tabelaEspecifica,
            permitirCriarPedido: permitirCriarPedido,
            segmento: segmento,
            tamanhoParceiro: tamanhoParceiro,
            observacaoParceiro: observacaoParceiro,
            unidadeParceiro: unidadeParceiro,
            cepParceiro: cepParceiro,
            logradouroParceiro: cepLogradouro,
            numEndParceiro: numEndParceiro,
            complementoEndParceiro: cepComplemento,
            bairroParceiro: cepBairro,
            ufParceiro: cepUF,
            municipioParceiro: cepMunicipio,
            nomeResponsavel: nomeResponsavel,
            telParceiro: telParceiro,
            mailParceiro: mailParceiro,
            dataNascimentoParceiro: dataNascimentoParceiro
        },
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Authorization", 
                "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
                "Content-Type": "application/json;charset=UTF-8",
                "x-goog-project-id": "cohesive-envoy-348413"
            }
        }).then((response) => {
            console.log(response);
        });
    }

    return(
        <>
            <Header />

            <section className="container">

                <div className="row">
                    <div className="grid-12 flex line-bottom">
                        <h3>Cadastro de Parceiros</h3>    
                        <img className="icon-m ml-3" src={registration_icon} alt="registration_icon" />
                    </div>
                </div>

                <div className="row">
                    <div className="row flex-start-row">
                        <div className="grid-2 flex-start">
                            <label htmlFor="nome_parceiro"><h6>Nome da Contabilidade: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="nome_parceiro" 
                            name="nome_parceiro" 
                            type="text" 
                            placeholder="Nome Completo"
                            onChange={(e) => {
                                setNomeContabilidade(e.target.value.toUpperCase());
                            }}
                            required
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-1 flex-start">
                        <label htmlFor="unidade_parceiro"><h6>Unidade: </h6></label>
                    </div>
                    
                    <div className="grid-3">
                        <input 
                        className="ml-2 uppercase-normal" 
                        list="unidade_do_parceiro" 
                        id="unidade_parceiro" 
                        name="unidade_parceiro" 
                        type="text" 
                        placeholder="Unidade Alocada" 
                        onChange={(e) => {
                            setunidadeParceiro(e.target.value.toUpperCase());
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
                </div>

                <div className="row flex-start-row">
                    <div className="grid-1">
                        <label htmlFor="tipo_pessoa"><h6>Tipo de Pessoa:</h6></label>
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
                            setTipoPessoaParceiro(e.target.value);
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

                    {!sePF && <div className="grid-1 ml-5">
                        <label htmlFor="pessoa_fisica"><h6>CPF: </h6></label>
                    </div>}

                    {!sePF && <div className="grid-3">
                        <input 
                        className="ml-2 uppercase-normal" 
                        id="num_cpf" 
                        name="num_cpf" 
                        type="text"
                        placeholder="000.000.000-00"
                        onChange={cpf}
                        value={numCPF}
                        maxLength="14"
                        required />
                    </div>}

                    {sePF && <div className="grid-1 ml-5">
                        <label htmlFor="pessoa_juridica"><h6>CNPJ: </h6></label>
                    </div> }

                    {sePF && <div className="grid-3">
                        <input 
                        className="ml-2 uppercase-normal" 
                        id="num_cnpj" 
                        name="pessoa_juridica" 
                        type="text"
                        placeholder="00.000.000/0000-00"
                        onChange={cnpj}
                        value={numCNPJ}
                        maxLength="18"
                        required />
                    </div> }
                </div>

                <div className="row">
                    <div className="row flex-start-row">
                        <div className="grid-1 flex-start">
                            <label htmlFor="email_parceiro"><h6>E-Mail: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2"  
                            id="email_parceiro" 
                            name="email_parceiro" 
                            type="email"
                            placeholder="exemplo@parceiro.com.br"
                            onChange={(e) => {
                                setEmailParceiro(e.target.value);
                            }}
                            required
                            />
                        </div>
                    </div>
                </div>

                <div className="row flex-start-row">
                    <div className="grid-3">
                        <label htmlFor="tabela_especifica"><h6>Tabela de Preço Específica:</h6></label>
                    </div>

                    <div className="grid-3 flex">
                        <input 
                        className="myInput ml-2" 
                        type="checkbox" 
                        name="tabela_especifica" 
                        id="tabela_especifica" 
                        value={0}
                        onChange={(e) => {
                            setTabelaEspecifica(e.target.value)
                        }}
                        />
                    </div>
                </div>

                <div className="row flex-start-row">
                    <div className="grid-3">
                        <label htmlFor="permitir_criar_pedido"><h6>Permitir parceiro criar pedido pelo sistema:</h6></label>
                    </div>

                    <div className="grid-3 flex">
                        <input 
                        className="myInput ml-2" 
                        type="checkbox" 
                        name="permitir_criar_pedido" 
                        id="permitir_criar_pedido" 
                        value={0}
                        onChange={(e) => {
                            setPermitirCriarPedido(e.target.value)
                        }}
                        />

                    </div>
                </div>

                <div className="row flex-start-row">
                    <div className="grid-1 flex-center">
                        <label htmlFor="segmento_parceiro"><h6>Segmento: </h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                        className="ml-2 uppercase-normal" 
                        list="segmentacao" 
                        id="segmento_parceiro" 
                        name="segmento_parceiro" 
                        type="text" 
                        placeholder="MODELO DE PARCERIA" 
                        onChange={(e) => {
                            setSegmento(e.target.value.toUpperCase());
                        }} 
                        />

                        <datalist id="segmentacao">
                            {
                                formSegmento?.map((data, index) => {
                                    return <option key={index} value={data} />
                                })
                            }
                        </datalist>
                    </div>
                </div>

                <div className="row flex-start-row">
                    <div className="grid-1 flex-start">
                        <label htmlFor="tamanho_parceiro"><h6>Tamanho Parceiro: </h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                        className="ml-2 uppercase-normal" 
                        list="tamanho_do_parceiro" 
                        id="tamanho_parceiro" 
                        name="tamanho_parceiro" 
                        type="text" 
                        placeholder="" 
                        onChange={(e) => {
                            setTamanhoParceiro(e.target.value.toUpperCase());
                        }} 
                        />

                        <datalist id="tamanho_do_parceiro">
                            {
                                formTamanhoPaceiro?.map((data, index) => {
                                    return <option key={index} value={data} />
                                })
                            }
                        </datalist>
                    </div>
                </div>

                <div className="row flex-start-row">
                    <div className="grid-1">
                        <label htmlFor="observacao_parceiro"><h6>Observações:</h6></label>
                    </div>

                    <div className="grid-6">
                        <textarea 
                        className="ml-2" 
                        id="observacao_parceiro" 
                        name="observacao_parceiro" 
                        rows="5" 
                        cols="32" 
                        onChange={(e) => {
                            setObservacaoParceiro(e.target.value)
                        }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-12 flex line-bottom">
                        <h3>Responsável</h3>    
                        <img className="icon-m ml-3" src={responsavel_icon} alt="responsavel_icon" />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-2 mt-3">
                        <label htmlFor="complemento_end_parceiro"><h6>Nome do Responsável:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="complemento_end_parceiro" 
                            name="complemento_end_parceiro" 
                            type="text"
                            placeholder="NOME COMPLETO"
                            onChange={(e) => {
                                setNomeResponsavel(e.target.value.toUpperCase());
                            }}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-2 mt-3">
                        <label htmlFor="pessoa_fisica"><h6>CPF do Responsável: </h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2 uppercase-normal" 
                            id="num_cpf" 
                            name="num_cpf" 
                            type="text"
                            placeholder="000.000.000-00"
                            onChange={cpfResponsavel}
                            value={numCPFResponsavel}
                            maxLength="14"
                            required 
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-2 mt-3">
                        <label htmlFor="telefone_parceiro"><h6>Telefone:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="telefone_parceiro" 
                            name="telefone_parceiro" 
                            type="text"
                            onChange={(e) => {
                                setTelParceiro(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-2 mt-3">
                        <label htmlFor="email_parceiro"><h6>E-Mail:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2"  
                            id="email_parceiro" 
                            name="email_parceiro" 
                            type="email"
                            placeholder="exemple@example.com"
                            onChange={(e) => {
                                setMailParceiro(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-2 mt-3">
                        <label htmlFor="data_nascimento_parceiro"><h6>Data de Nascimento:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2"  
                            id="data_nascimento_parceiro" 
                            name="data_nascimento_parceiro" 
                            type="text"
                            onChange={data_nascimento}
                            value={dataNascimentoParceiro}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-12 flex line-bottom">
                        <h3>Endereço</h3>    
                        <img className="icon-m ml-3" src={location_icon} alt="location_icon" />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-1 mt-3">
                        <label htmlFor="observacao_parceiro"><h6>CEP:</h6></label>
                    </div>

                    <div className="grid-2">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="cep_parceiro" 
                            name="cep_parceiro" 
                            type="text" 
                            onChange={cep} 
                            value={cepParceiro}
                            onBlur={checkCEP}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-1 mt-3">
                        <label htmlFor="logradouro_parceiro"><h6>Logradouro:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="logradouro_parceiro" 
                            name="logradouro_parceiro" 
                            type="text"
                            value={cepLogradouro}
                        />
                    </div>

                    <div className="grid-1 mt-3 ml-8">
                        <label htmlFor="numero_end_parceiro"><h6>Número:</h6></label>
                    </div>

                    <div className="grid-1">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="numero_end_parceiro" 
                            name="numero_end_parceiro" 
                            type="number" 
                            onChange={(e) => {
                                setNumEndParceiro(e.target.value);
                            }}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-1 mt-3">
                        <label htmlFor="complemento_end_parceiro"><h6>Complemento:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="complemento_end_parceiro" 
                            name="complemento_end_parceiro" 
                            type="text" 
                            value={cepComplemento}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-1 mt-3">
                        <label htmlFor="bairro_parceiro"><h6>Bairro:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="bairro_parceiro" 
                            name="bairro_parceiro" 
                            type="text" 
                            value={cepBairro}
                        />
                    </div>

                    <div className="grid-1 mt-3 ml-8">
                        <label htmlFor="uf_parceiro"><h6>UF:</h6></label>
                    </div>

                    <div className="grid-1">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="uf_parceiro" 
                            name="uf_parceiro" 
                            type="text" 
                            value={cepUF}
                        />
                    </div>

                    <div className="grid-1 mt-3 ml-8">
                        <label htmlFor="municipio_parceiro"><h6>Município:</h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="municipio_parceiro" 
                            name="municipio_parceiro" 
                            type="text" 
                            value={cepMunicipio}
                        />
                    </div>
                </div>

                
                <div className="row">
                    <div className="grid-2">
                        <Link to="/faturamento/parceiro"><button className="btn w-100 mt-4" onClick={cadastrar}>Cadastrar</button></Link>
                    </div>

                    <div className="grid-2">
                        <button className="btn w-100 mt-4 btn-cancel">Cancelar</button>
                    </div>
                </div>

            </section>

        </>
    );
}

export default CadastroParceiro;