const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "sql10.freemysqlhosting.net",
    user: "sql10481342",
    password: "Ut2le9lRUg",
    database: "sql10481342",
    port: "3306",
});

app.use(cors());
app.use(express.json())


app.listen(3306, () => {
    console.log("rodando servidor");
});