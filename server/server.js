const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');

const port = 3306;
const ip = "34.121.243.219";

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: '34.121.243.219',
    user: 'cwvleitura',
    password: 'Cwv@2022',
    database: 'followX'
});


app.get("/", (req, res) => {

    let query1 = "INSERT INTO pedidos (id_pedido) VALUES (3)"; 

    db.query(query1, (err, result) => {
        console.log(err);
    });

    res.send('oi');
})

app.post("/", (req, res) => {

    const dataLancamento = req.body.dataLancamento;
    const vendedorPedido = req.body.vendedorPedido;
    const tipoPessoa = req.body.tipoPessoa;
    const numCPFCNPJ = req.body.numCPFCNPJ;
    const indicacao = req.body.indicacao;
    const vipSim = req.body.vipSim;
    const condSim = req.body.condSim;
    const pedidoTerceiro = req.body.pedidoTerceiro;
    const pedidoUnidade = req.body.pedidoUnidade;
    const vcSim = req.body.vcSim;
    const observacao = req.body.observacao;
    const produto = req.body.produto;
    const quantidadeProduto = req.body.quantidadeProduto;
    const valorUnitario = req.body.valorUnitario;
    const valorDelivery = req.body.valorDelivery;
    const valorDesconto = req.body.valorDesconto;
    const valorTotal = req.body.valorTotal;
    const formaPagamento = req.body.formaPagamento;
    const dataVencimento = req.body.dataVencimento;

    let sqlInsert = "INSERT INTO pedidos (data_criacao, vendedor_pedido, tipo_pessoa, cpf, cnpj, vip, cd_publico, pedido_terceiro, permitir_importacao_unidade, validacao_VC, observacao, produto, vlr_unitario, vlr_delivery, vlr_desconto, vlr_total_pedido) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    
    db.query(sqlInsert, [
        dataLancamento,
        vendedorPedido,
        tipoPessoa,
        numCPFCNPJ,
        indicacao,
        vipSim,
        condSim,
        pedidoTerceiro,
        pedidoUnidade,
        vcSim,
        observacao,
        produto,
        quantidadeProduto,
        valorUnitario,
        valorDelivery,
        valorDesconto,
        valorTotal,
        formaPagamento,
        dataVencimento
    ], (err, result) => {
        console.log(err);  
    });
});

app.listen(port, ip,() => {
    console.log(`Running on ${port}`);
});