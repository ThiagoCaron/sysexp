const { json } = require("express");
const express = require("express")
const app = express()
const port = 3000;

var csv =  require("node-csv").createParser();

const mongodb = require("mongodb");

const url_mongo = "mongodb+srv://ThiagoCaronServi:ThiagoCaron@cluster0.6sctrse.mongodb.net/?retryWrites=true&w=majority"

const conexao = new mongodb.MongoClient(url_mongo);


// CRUD

// Creat -> Criar
// Read -> Ler
// Update -> Atualizar
// Delete -> Apagar

app.post("/entradas", function(req, res)
{

});

app.get("/entradas", function(req, res)
{
    csv.parseFile("estoque.csv", function(erro, valores)
    {
        res.json(valores);
    });
});

app.get("/estoque", async function(req, res){
    const estoque = conexao.db("sysexp").collection("estoque");
    const resultado = await estoque.find({}).toArray();
    res.json(resultado);
});

// route dinamica
app.get("/estoque/:id", function(req, res){
    res.json(req.params)
});

app.listen(port, () => 
{
    console.log("Example app listening on port ${port}")
});