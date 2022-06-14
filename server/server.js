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


// ------------------------------- LOGIN ---------------------------------------------- //

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



// ---------------------------- CRIAÇÃO DE PEDIDOS ---------------------------------------------- //

app.post("/api/insert", (req, res) => {

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

    let sqlInsert = "INSERT INTO pedidos (vendedor_pedido, cliente, tipo_pessoa, cpf, cnpj, indicacao_contabilidade, vip, cd_publico, pedido_terceiro, permitir_importacao_unidade, validacao_VC, observacao, produto, forma_pagamento, quantidade_produto, vlr_unitario, vlr_delivery, vlr_desconto, vlr_total_pedido, data_vencimento) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sqlInsert, [
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


app.listen(port, () => {
    console.log(`Running on ${port}`);
});