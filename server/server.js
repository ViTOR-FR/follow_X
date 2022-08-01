const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const port = 3306;

app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE'],
    "x-goog-project-id": "cohesive-envoy-348413"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createPool({
    host: '34.121.243.219',
    user: 'cwvleitura',
    password: 'Cwv@2022',
    database: 'followX'
});

// ---------------------------------------------------------------------------------------- POST's ---------------------------------------------------------------------------------------------------------------- //


// ------------------------------- CADASTRO DE USUÁRIOS ---------------------------------------------- //

app.post("/registro", (req, res) => {

    const {usuarioCadastro} = req.body;
    const {senhaCadastro} = req.body;

    db.query("SELECT * FROM usuarios WHERE login = ? AND senha = ?", [usuarioCadastro, senhaCadastro], (err, response) => {
        if(err) {
            res.send(err);
        }

        if(response.length === 0) {
            db.query("INSERT INTO usuarios (login, senha) VALUES (?, ?)", [usuarioCadastro, senhaCadastro], (err, result) => {
                if(err) {
                    res.send(err);
                }

                res.send({mensagem: "Cadastrado com Sucesso!"});
            });

        } else {
            res.send({mensagem: "Usuário já cadastrado"});
        };
    })
});


// ------------------------------------------------------------------------------------ //

// ------------------------------- CREDENCIAMENTO ---------------------------------------------- //

app.post("/login", (req, res) => {

    const {user} = req.body;
    const {senha} = req.body;

    try {
        db.query("SELECT * FROM usuarios WHERE login = ? AND senha = ?", [user, senha], (err, result) => {
            if(err) {
                res.send(err);
            }

            if(result.length > 0) {
        
                if(result) {
                    res.send({mensagem: "Usuário Logado com Sucesso"});
                }
            
            } else {
                res.send({mensagem: "Conta não encontrada"});
            }
        });

    } catch(err) {
        console.log(err);
    }
});

// --------------------------------------------------------------------------------------------------- //

// ------------------------------- CADASTRO AGR ---------------------------------------------- //

app.post("/credenciamento/cadastraragr", (req, res) => {

    const {nomeAGR} = req.body;
    const {cpfAGR} = req.body;
    const {dataNascimentoAGR} = req.body;
    const {dataInicioCredenciamento} = req.body;
    const {emailAGR} = req.body;
    const {nomeMaeAGR} = req.body;
    const {rgAGR} = req.body;
    const {orgaoEmissor} = req.body;
    const {ufOrgaoEmissor} = req.body;
    const {tituloEleitor} = req.body;
    const {tituloZona} = req.body;
    const {secaoTitulo} = req.body;
    const {municipioVotacao} = req.body;
    const {grauEscolaridade} = req.body;
    const {instituicaoConclusao} = req.body;
    const {anoConclusao} = req.body;
    const {cepLogradouro} = req.body;
    const {cepBairro} = req.body;
    const {cepMunicipio} = req.body;
    const {cepComplemento} = req.body;
    const {cepUF} = req.body;
    const {numEndAGR} = req.body;
    // const {cepAGR} = req.body;

    queryInsertAgr = "INSERT INTO credenciamento (nome_agr, cpf, data_nascimento, data_credenciamento, email, nome_mae, rg, orgao_expedidor, uf_rg, numero_titulo, zona_titulo, secao_titulo, municipio_titulo, grau_escolaridade, instituicao_conclusao, ano_conclusao, logradouro, numero, complemento, bairro, uf, municipio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    try {
        db.query(queryInsertAgr, [
            nomeAGR,
            cpfAGR,
            dataNascimentoAGR,
            dataInicioCredenciamento,
            emailAGR,
            nomeMaeAGR,
            rgAGR,
            orgaoEmissor,
            ufOrgaoEmissor,
            tituloEleitor,
            tituloZona,
            secaoTitulo,
            municipioVotacao,
            grauEscolaridade,
            instituicaoConclusao,
            anoConclusao,
            cepLogradouro,
            numEndAGR,
            cepComplemento,
            cepBairro,
            cepUF,
            cepMunicipio
        ], (err, result) => {
            if(result) {
                res.send({menssage: "ok"})
            }
        });

    } catch(err) {
        console.log(err);
    }
});

// --------------------------------------------------------------------------------------------------- //

// ---------------------------- CADASTRO DE CONTADORES ----------------------------------------------- //

app.post("/faturamento/cadastro/parceiro", (req, res) => {

    const {nomeContabilidade} = req.body;
    const { numCNPJ } = req.body;
    const {numCPF} = req.body;
    const {emailParceiro} = req.body;
    const {numCPFResponsavel} = req.body;
    const {tipoPessoaParceiro} = req.body;
    const {tabelaEspecifica} = req.body;
    const {permitirCriarPedido} = req.body;
    const {segmento} = req.body;
    const {tamanhoParceiro} = req.body;
    const {observacaoParceiro} = req.body;
    const {unidadeParceiro} = req.body;
    const {cepParceiro} = req.body;
    const {logradouroParceiro} = req.body;
    const {numEndParceiro} = req.body;
    const {complementoEndParceiro} = req.body;
    const {bairroParceiro} = req.body;
    const {ufParceiro} = req.body;
    const {municipioParceiro} = req.body;
    const {nomeResponsavel} = req.body;
    const {telParceiro} = req.body;
    const {mailParceiro} = req.body;
    const {dataNascimentoParceiro} = req.body;

    let sqlInsertPar = "INSERT INTO parceiro (unidade_vinculada, nome, tipo_pessoa, cpf, cnpj, email, tabela_especifica, permitir_criar_pedido_pelo_sistema, segmento, tamanho_parceiro, observacao, nome_responsavel, cpf_responsavel, telefone_responsavel, data_nascimento, email_responsavel, cep, logradouro, numero, complemento, bairro, uf, municipio) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sqlInsertPar, [
        unidadeParceiro,
        nomeContabilidade,
        tipoPessoaParceiro,
        numCPF,
        numCNPJ,
        emailParceiro,
        tabelaEspecifica,
        permitirCriarPedido,
        segmento,
        tamanhoParceiro,
        observacaoParceiro,
        nomeResponsavel,
        numCPFResponsavel,
        telParceiro,
        dataNascimentoParceiro,
        mailParceiro,
        cepParceiro,
        logradouroParceiro,
        numEndParceiro,
        complementoEndParceiro,
        bairroParceiro,
        ufParceiro,
        municipioParceiro
    ], (err, result) => {
        console.log(err);  
    });
});

// -------------------------------------------------------------------------------------------------- //



// ---------------------------- CRIAÇÃO DE PEDIDOS ---------------------------------------------- //

app.post("/api/insert", (req, res) => {

    const { dataLancamento } = req.body;
    const {vendedorPedido} = req.body;
    const {cliente} = req.body;
    const {tipoPessoa} = req.body;
    const {numCPF} = req.body;
    const {numCNPJ} = req.body;
    const {indicacao} = req.body;
    const {vipSim} = req.body;
    const {condSim} = req.body;
    const {pedidoTerceiro} = req.body;
    const {pedidoUnidade} = req.body;
    const {vcSim} = req.body;
    const {observacao} = req.body;
    const {produto} = req.body;
    const {quantidadeProduto} = req.body;
    const {valorUnitario} = req.body;
    const {valorDelivery} = req.body;
    const {valorDesconto} = req.body;
    const {valorTotal} = req.body;
    const {formaPagamento} = req.body;
    const {dataVencimento} = req.body;

    let sqlInsert = "INSERT INTO pedidos (data_criacao, vendedor_pedido, cliente, tipo_pessoa, cpf, cnpj, indicacao_contabilidade, vip, cd_publico, pedido_terceiro, permitir_importacao_unidade, validacao_VC, observacao, produto, forma_pagamento, quantidade_produto, vlr_unitario, vlr_delivery, vlr_desconto, vlr_total_pedido, data_vencimento) VALUES ( ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sqlInsert, [

        dataLancamento,
        vendedorPedido,
        cliente,
        tipoPessoa,
        numCPF,
        numCNPJ,
        indicacao,
        vipSim,
        condSim,
        pedidoTerceiro,
        pedidoUnidade,
        vcSim,
        observacao,
        produto,
        formaPagamento,
        quantidadeProduto,
        valorUnitario,
        valorDelivery,
        valorDesconto,
        valorTotal,
        dataVencimento
    ], (err, result) => {
        console.log(err);  
    });
});

// ---------------------------------------------------------------------------------------- GET's ---------------------------------------------------------------------------------------------------------------- //




// ------------------------------- GET - LISTAGEM DE PEDIDOS ---------------------------------------------- //

app.get("/consulta/pedidos", (req, res) => {

    db.query("SELECT * FROM pedidos", (err, result) => {
        if(err) {
            res.send(err);
        }

        if(result) {
            res.send(result);
        }
    });
});

// ------------------------------------------------------------------------------------------------------ //

// ------------------------------- GET - LISTAGEM DE AGR's ---------------------------------------------- //

app.get("/consulta/credenciamentos", (req, res) => {

    db.query("SELECT * FROM credenciamento", (err, result) => {
        if(err) {
            res.send(err);
        }

        if(result) {
            res.send(result);
        }
    });
});

// ------------------------------------------------------------------------------------------------------ //

// ------------------------------- GET - LISTAGEM DE PARCEIRO ------------------------------------------- //

app.get("/consulta/parceiro", (req, res) => {

    db.query("SELECT * FROM parceiro", (err, result) => {
        if(err) {
            res.send(err);
        }

        if(result) {
            res.send(result);
        }
    });
});

// ------------------------------------------------------------------------------------------------------ //


// ------------------------------- GET - FORMAS DE PAGAMENTO ---------------------------------------------- //

app.get("/financeiro/formaPagamento", (req, res) => {

    db.query("SELECT * FROM forma_pagamento", (err, result) => {
        if(err) {
            res.send(err);
        }

        if(result) {
            res.send(result);
        }
    });
});

// ------------------------------------------------------------------------------------------------------- //

// ------------------------------------------ GET - Produtos ---------------------------------------------- //

app.get("/estoque/produtos", (req, res) => {

    db.query("SELECT * FROM produto", (err, result) => {
        if(err) {
            res.send(err);
        }

        if(result) {
            res.send(result);
        }
    });
});

// ------------------------------------------------------------------------------------------------------- //

// ------------------------------------------ GET - Usuários ---------------------------------------------- //

app.post("/usuarios", (req, res) => {

    const { userName } = req.body;

    let getUser1 = `SELECT * FROM usuarios WHERE login = ${userName}`

    db.query(getUser1, (err, result) => {
        if(err) {
            res.send(err);
        }

        if(result) {
            res.send(result);
        }
    });
});

// ------------------------------------------------------------------------------------------------------- //


app.listen(port, () => {
    console.log(`Running on ${port}`);
});