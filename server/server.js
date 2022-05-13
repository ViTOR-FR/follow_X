const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const port = 3306;
const ip = "34.121.243.219";

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: '34.121.243.219',
    user: 'cwvleitura',
    password: 'Cwv@2022',
    database: 'followX'
});

// const users = [
//     {name: 'Jones', email: 'jones@gmail.com'},
//     {name: 'Henrique', email: 'henrique@hotmail.com'}
//   ]


// app.get('/users', (req, res) => {
//     res.json(users)
// })

app.post("/api/insert", (req, res) => {

    const {vendedorPedido} = req.body;
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

    let sqlInsert = "INSERT INTO pedidos (vendedor_pedido, tipo_pessoa, cpf, cnpj, indicacao_contabilidade, vip, cd_publico, pedido_terceiro, permitir_importacao_unidade, validacao_VC, observacao, produto, forma_pagamento, quantidade_produto, vlr_unitario, vlr_delivery, vlr_desconto, vlr_total_pedido) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sqlInsert, [
        vendedorPedido,
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
        valorTotal
    ], (err, result) => {
        console.log(err);  
    });
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
});