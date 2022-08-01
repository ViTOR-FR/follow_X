//HEADERS
import Header from 'pages/Header';
import { useEffect, useState, forwardRef } from 'react';

//MUI
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

//API
import axios from 'axios';

//MASCARAS 
import { mask, unMask } from 'remask';

//ICONS
import credenciamento_icon from '../../svg/credenciamento_icon.svg';
import checklist_icon from '../../svg/checklist_icon.svg';
import location_icon from '../../svg/location_icon.svg';
import mais_informacoes_icon from '../../svg/mais_informacoes_icon.svg';
import api from 'services/api';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

const Credenciamento = () => {

    // States - Snackbar
    const [open, setOpen] = useState(false);
    const [notify, setNotify] = useState();
    const [menssagemRetorno, setMenssagemRetorno] = useState();

    // Fechar SnackBar Automaticamente
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
    };

    const [nomeAGR, setNomeAGR] = useState();
    const [cpfAGR, setCPFAGR] = useState();
    const [dataNascimentoAGR, setDataNascimentoAGR] = useState();
    const [dataInicioCredenciamento, setDataInicioCredenciamento] = useState("");
    const [emailAGR, setEmailAGR] = useState("");
    const [nomeMaeAGR, setNomeMaeAGR] = useState("");
    const [rgAGR, setRGAGR] = useState();
    const [orgaoEmissor, setOrgaoEmissor] = useState();
    const [ufOrgaoEmissor, setUFOrgaoEmissor] = useState();
    const [tituloEleitor, setTituloEleitor] = useState();
    const [tituloZona, setTituloZona] = useState();
    const [secaoTitulo, setSecaoTitulo] = useState();
    const [municipioVotacao, setMunicipioVotacao] = useState();
    const [grauEscolaridade, setGrauEscolaridade] = useState();
    const [instituicaoConclusao, setInstituicaoConclusao] = useState();
    const [anoConclusao, setAnoConclusao] = useState();
    const [numEndAGR, setNumEndAGR] = useState();
    const [cepAGR, setCepAGR] = useState();
    const [cnhTrue, setCNHTrue] = useState(1);

    //VALIDAÇÃO - ANEXO DE CNH OU RG
    const [rgCNH, setRGCNH] = useState("Registro Geral (RG)");

    useEffect(() => {
        if(cnhTrue == 0) {
            setRGCNH("Carteira Nacional de Habilitação (CNH)");
        } else if(cnhTrue == "CNH") {
            setRGCNH("RG");
        }

    }, [cnhTrue]);

    //MASCARAS
    const cpf = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["999.999.999-99"]);
        setCPFAGR(maskedValue);
    }

    const cep = ev => {
        const originalValue = unMask(ev.target.value);
        const maskedValue = mask(originalValue, ["99.999-999"]);
        setCepAGR(maskedValue);
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


    //SALVAR REGISTRO
    const salvarCredenciamento = () => {
        api.post("/credenciamento/cadastraragr", {
            nomeAGR: nomeAGR,
            cpfAGR: cpfAGR,
            dataNascimentoAGR: dataNascimentoAGR,
            dataInicioCredenciamento: dataInicioCredenciamento,
            emailAGR: emailAGR,
            nomeMaeAGR: nomeMaeAGR,
            rgAGR: rgAGR,
            orgaoEmissor: orgaoEmissor,
            ufOrgaoEmissor: ufOrgaoEmissor,
            tituloEleitor: tituloEleitor,
            tituloZona: tituloZona,
            secaoTitulo: secaoTitulo,
            municipioVotacao: municipioVotacao,
            grauEscolaridade: grauEscolaridade,
            instituicaoConclusao: instituicaoConclusao,
            anoConclusao: anoConclusao,
            cepLogradouro: cepLogradouro,
            cepBairro: cepBairro,
            cepMunicipio: cepMunicipio,
            cepComplemento: cepComplemento,
            cepUF: cepUF,
            numEndAGR: numEndAGR,
            cepAGR: cepAGR
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
            if(response.data.menssage === "ok") {
                setMenssagemRetorno("AGR Cadastrado com sucesso");
                setNotify("success");
                setOpen(true);
            
            } else {
                setMenssagemRetorno("Preencha as informações corretamente.");
                setNotify("error");
                setOpen(true);
            }
        });
    }

    return(
        <>
            <Header />

            <section className="container">
                <div className="row">
                    <div className="grid-12 flex line-bottom">
                        <h3>Credenciamento de AGR</h3>    
                        <img className="icon-m ml-3" src={credenciamento_icon} alt="registration_icon" />
                    </div>
                </div>

                <div className="row">
                    <div className="row flex-start-row">
                        <div className="grid-2 flex-start">
                            <label htmlFor="nome_parceiro"><h6>Nome do AGR: </h6></label>
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
                </div>

                <div className="row flex-start-row">
                    <div className="grid-2">
                        <label htmlFor="pessoa_fisica"><h6>CPF: </h6></label>
                    </div>

                    <div className="grid-3">
                        <input 
                        className="ml-2 uppercase-normal" 
                        id="num_cpf" 
                        name="num_cpf" 
                        type="text"
                        placeholder="000.000.000-00"
                        onChange={cpf}
                        value={cpfAGR}
                        maxLength="14"
                        required />
                    </div>
                </div>

                <div className="row">
                    <div className="row flex-start-row">
                        <div className="grid-2 flex-start">
                            <label htmlFor="data_nascimento_agr"><h6>Data de Nascimento: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="data_nascimento_agr" 
                            name="data_nascimento_agr" 
                            type="date" 
                            placeholder="DD/MM/AAAA"
                            onChange={(e) => {
                                setDataNascimentoAGR(e.target.value);
                            }}
                            required
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="row flex-start-row">
                        <div className="grid-2 flex-start">
                            <label htmlFor="data_inicio_agr"><h6>Data de Inicio do Credenciamento: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="data_inicio_agr" 
                            name="data_inicio_agr" 
                            type="date" 
                            placeholder="DD/MM/AAAA"
                            onChange={(e) => {
                                setDataInicioCredenciamento(e.target.value);
                            }}
                            required
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="row flex-start-row">
                        <div className="grid-2 flex-start">
                            <label htmlFor="email_parceiro"><h6>E-Mail: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2"  
                            id="email_parceiro" 
                            name="email_parceiro" 
                            type="text" 
                            placeholder="example@example.com"
                            onChange={(e) => {
                                setEmailAGR(e.target.value);
                            }}
                            required
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="grid-12 flex line-bottom">
                        <h3>Informações Adicionais</h3>    
                        <img className="icon-m ml-3" src={mais_informacoes_icon} alt="registration_icon" />
                    </div>
                </div>

                <div className="row">
                    <div className="flex-start-row">
                        <div className="grid-2 flex-center">
                            <label htmlFor="nome_mae_agr"><h6>Nome da Mãe: </h6></label>
                        </div>

                        <div className="grid-4">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="nome_mae_agr" 
                            name="nome_mae_agr" 
                            type="text" 
                            placeholder="Nome Completo"
                            onChange={(e) => {
                                setNomeMaeAGR(e.target.value.toUpperCase());
                            }}
                            required
                            />
                        </div>

                        <div className="grid-1 flex-center">
                            <label htmlFor="rg_agr"><h6>RG: </h6></label>
                        </div>

                        <div className="grid-2 flex-center">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="rg_agr" 
                            name="rg_agr"
                            type="number" 
                            onChange={(e) => {
                                setRGAGR(e.target.value.toUpperCase());
                            }}
                            required
                            />
                        </div>

                        <div className="flex-start-row ml-5">
                            <div className="grid-5">
                                <label htmlFor="orgao_expedidor"><h6>Órgão Expedidor:</h6></label>
                            </div>

                            <div className="grid-4">
                                <input 
                                className="ml-2 uppercase-normal"  
                                id="orgao_expedidor" 
                                name="orgao_expedidor" 
                                type="text"
                                maxLength="3"
                                onChange={(e) => {
                                    setOrgaoEmissor(e.target.value.toUpperCase());
                                }}
                                required
                                />
                            </div>
                        </div>

                        <div className="flex-start-row">
                            <div className="grid-1 flex-start">
                                <label htmlFor="uf_orgao_expedidor"><h6>UF: </h6></label>
                            </div>

                            <div className="grid-5">
                                <input 
                                className="ml-2 uppercase-normal"  
                                id="uf_orgao_expedidor" 
                                name="uf_orgao_expedidor" 
                                type="text"
                                onChange={(e) => {
                                    setUFOrgaoEmissor(e.target.value.toUpperCase());
                                }}
                                required
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="flex-start-row">

                        <div className="grid-2 flex-center">
                            <label htmlFor="titulo_eleitor_agr"><h6>Nº Título de Eleitor: </h6></label>
                        </div>

                        <div className="grid-2">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="titulo_eleitor_agr" 
                            name="titulo_eleitor_agr" 
                            type="number" 
                            onChange={(e) => {
                                setTituloEleitor(e.target.value);
                            }}
                            />
                        </div>

                        <div className="grid-1 flex-center">
                            <label htmlFor="titulo_zona_agr"><h6>Zona: </h6></label>
                        </div>

                        <div className="grid-2">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="titulo_zona_agr" 
                            name="titulo_zona_agr" 
                            type="number" 
                            onChange={(e) => {
                                setTituloZona(e.target.value);
                            }}
                            />
                        </div>

                        <div className="grid-1 flex-center">
                            <label htmlFor="titulo_secao_agr"><h6>Seção: </h6></label>
                        </div>

                        <div className="grid-1">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="titulo_secao_agr" 
                            name="titulo_secao_agr" 
                            type="number" 
                            onChange={(e) => {
                                setSecaoTitulo(e.target.value);
                            }}
                            />
                        </div>

                        <div className="grid-2 flex-center">
                            <label htmlFor="municipio_votacao_agr"><h6>Munícipio de Voto: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="municipio_votacao_agr" 
                            name="municipio_votacao_agr" 
                            type="text" 
                            onChange={(e) => {
                                setMunicipioVotacao(e.target.value.toUpperCase());
                            }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="flex-start-row">
                        <div className="grid-3 flex-center">
                            <label htmlFor="grau_escolaridade_agr"><h6>Grau de Escolaridade: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="grau_escolaridade_agr" 
                            name="grau_escolaridade_agr" 
                            type="text" 
                            onChange={(e) => {
                                setGrauEscolaridade(e.target.value.toUpperCase());
                            }}
                            />
                        </div>

                        <div className="grid-3 flex-center">
                            <label htmlFor="instituicao_conclusao_agr"><h6>Instituição de Conclusão: </h6></label>
                        </div>

                        <div className="grid-3">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="instituicao_conclusao_agr" 
                            name="instituicao_conclusao_agr" 
                            type="text" 
                            onChange={(e) => {
                                setInstituicaoConclusao(e.target.value.toUpperCase());
                            }}
                            />
                        </div>

                        <div className="grid-2 flex-center">
                            <label htmlFor="ano_conclusao_agr"><h6>Ano Conlusão: </h6></label>
                        </div>

                        <div className="grid-2">
                            <input 
                            className="ml-2 uppercase-normal"  
                            id="ano_conclusao_agr" 
                            name="ano_conclusao_agr" 
                            type="number" 
                            onChange={(e) => {
                                setAnoConclusao(e.target.value);
                            }}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
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
                                value={cepAGR}
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
                                    setNumEndAGR(e.target.value);
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
                </div>

                <div className="row">
                    <div className="row">
                        <div className="grid-12 flex line-bottom">
                            <h3>Dossiê</h3>    
                            <img className="icon-m ml-3" src={checklist_icon} alt="location_icon" />
                        </div>
                    </div>
                    
                    <div className="grid-3 mt-3">
                        <label htmlFor="carteira_profissional"><h6>Carteira Profissional:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="carteira_profissional" 
                            name="carteira_profissional" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="certidao_casamento"><h6>Certidão de Casamento ou Convívio Matrimonial:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="certidao_casamento" 
                            name="certidao_casamento" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3">
                        <label htmlFor="possui_CNH"><h6>Possui CNH:</h6></label>
                    </div>

                    <div className="grid-1 flex">
                        <input 
                        className="myInput ml-2" 
                        type="checkbox" 
                        name="possui_CNH" 
                        id="possui_CNH" 
                        value={0}
                        onChange={(e) => {
                            setCNHTrue(e.target.value)
                        }}
                        />

                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="cnh_ou_rg"><h6>{rgCNH}:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="cnh_ou_rg" 
                            name="cnh_ou_rg" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="titulo_eleitor"><h6>Titulo de Eleitor:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="titulo_eleitor" 
                            name="titulo_eleitor" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="reservista"><h6>Reservista:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="reservista" 
                            name="reservista" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="pis_cartao_cidadao"><h6>PIS ou Cartão do Cidadão:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="pis_cartao_cidadao" 
                            name="pis_cartao_cidadao" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="comprovante_escolaridade"><h6>Comprovante de Escolaridade:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="comprovante_escolaridade" 
                            name="comprovante_escolaridade" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="foto_agr"><h6>Foto 3x4 <span>recente</span>:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="foto_agr" 
                            name="foto_agr" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="comprovante_de_residencia"><h6>Comprovante de Residência:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="comprovante_de_residencia" 
                            name="comprovante_de_residencia" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="rg_filhos"><h6>RG ou CPF dos Filhos:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="rg_filhos" 
                            name="rg_filhos" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="rg_conjugue"><h6>RG ou CPF do Cônjugue:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="rg_conjugue" 
                            name="rg_conjugue" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-3 mt-3">
                        <label htmlFor="cartão_vacinacao"><h6>Cartão de Vacinação:</h6></label>
                    </div>

                    <div className="grid-4">
                        <input 
                            className="ml-2 uppercase-normal"  
                            id="cartão_vacinacao" 
                            name="cartão_vacinacao" 
                            type="file"
                            accept="application/pdf"
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="grid-7 mt-3">
                        <h6>Exame Admissional:</h6>
                        <h6><span>CNPJ:</span> 19.372.361/0001-97</h6>
                        <h6><span>Razão Social:</span> B W SISTEMAS DE AUTOMAÇÃO COMERCIAL & CERTIFICADO DIGITAL LTDA.</h6>
                    </div>
                </div>

                <div className="row flex-end-row">
                    <div className='grid-2'>
                        <button className="btn w-100" onClick={salvarCredenciamento}>Salvar</button>
                    </div>
                </div>

                <Stack spacing={2} sx={{ width: '100%' }}>
                    <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity={notify} sx={{ width: '100%' }}>{menssagemRetorno}</Alert>
                    </Snackbar>
                </Stack>

            </section>
        </>
    );
}

export default Credenciamento;