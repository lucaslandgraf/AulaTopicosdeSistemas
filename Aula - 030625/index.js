const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//Configurando para sempre receber os dados no formato JSON
app.use(bodyParser.json());

//Encodando todos os parâmetros para JSON
app.use(bodyParser.urlencoded({extended: true}));

// Implementando rotas do tipo GET
app.get("/", (req, res) => {
    res.send("Página Inicial");
})

//Listar (read) dos clientes
app.get("/clientes", (req, res) =>{
    res.send("Listagem de clientes");
})

app.get("/cadastrarcliente", (req, res) =>{
    res.render("formcliente");
})

//Configurando o express para usar o EJS como mecanismo de renderização
app.set("view engine", "ejs");

// Inserir (create) os clientes
app.post("/cliente", (req,res) =>{
   const {nome, cnpj, dataFundacao} = req.body;

    console.log("Nome: " + nome + " CNPJ: " + cnpj + " Data: " + dataFundacao)
    res.send("Cliente inserido com sucesso!");
})

//Editar (update) o cliente
app.get("/editarcliente/:idcliente", (req, res) => {
    const codigoCliente = req.params.idcliente;
    console.log("Editando o cliente: ", codigoCliente);
    res.send("Editando o cliente: " + codigoCliente);
})

app.get("/fornecedores", (req, res) =>{
    res.end("<html><head><title>Listagem de fornecedores</title></head><body><h3>Página de Listagem de Fornecedores</h3><h5>Lista abaixo</h5></body></html>");
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
})