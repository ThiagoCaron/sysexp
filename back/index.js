const { json } = require("express");
const express = require("express")
const app = express()
const port = 3000;


var csv =  require("node-csv").createParser();
var cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const mongodb = require("mongodb");
const url_mongo = "mongodb+srv://ThiagoCaronServi:ThiagoCaron@cluster0.6sctrse.mongodb.net/?retryWrites=true&w=majority"

const conexao = new mongodb.MongoClient(url_mongo);
const estoque = conexao.db("sysexp").collection("estoque");

const ObjectId = mongodb.ObjectId;


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
    
    const resultado = await estoque.find({}).toArray();
    res.json(resultado);
});

app.get("/estoque-csv", async function(req, res){
    const resultado = await estoque.find({}).toArray();
    let arquivoCsv = "id,nota,destino,produto,quantidade\n";
    resultado.forEach(function(item){
        arquivoCsv += item._id + "," + item.nota + "," + item.destino + "," + item.produto + "," + item.quantidade + "\n";
    });

    res.append("content-type", "text/csv");
    res.send(arquivoCsv);
    //res.redirect("http://google.com");
    //res.status(401).send(arquivoCsv);
});

// route dinamica
app.get("/estoque/:id", async function(req, res){
    //res.json(req.params.id)
    const id = new ObjectId(req.params.id);
    const resultado = await estoque.findOne({_id: id});
    res.json(resultado);
});

// cadastra novo item
app.post("/estoque-add", async function(req, res){
    const resultado = await estoque.insertOne(req.body);
    const origem = req.get("Referer");
    res.redirect(origem);
});

// atualiza um registro
app.post("/estoque-up", async function(req, res){
    const codigo = new ObjectId(req.body.codigo);
    const dadosNovos = {
        $set: {
            nota: req.body.nota,
            produto: req.body.produto,
            quantidade: req.body.quantidade,
            destino: req.body.destino
        }
    }
    const resultado = await estoque.updateOne({_id: codigo}, dadosNovos)

    const origem = req.get("Referer");
    res.redirect(origem);

});

// deleta o item
app.get("/estoque-del/:id", async function(req, res){
    const id = new ObjectId(req.params.id);

    const resultado = await estoque.deleteOne({_id: id});
    const origem = req.get("Referer");
    res.redirect(origem);
});

app.listen(port, () => 
{
    console.log("Rodando o servidor na porta ${port}")
});