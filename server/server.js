const express = require('express');
const app = express();
const Sequelize = require('sequelize');

const sequelize = new Sequelize("sql10.freemysqlhosting.net", "sql10481342", "Ut2le9lRUg", {

});

app.get("/", async (req, res) => {
    res.send("Página inicial");
});

app .listen(3306, () => {
    console.log("Servidor iniciado na porta 8080: https://sql10.freemysqlhosting.net:3306");
});