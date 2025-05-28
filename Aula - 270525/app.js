const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    console.log("URL: ", url)

    const metodo = req.method;
    console.log("Método: ", metodo);


    if(metodo === "GET" && url === "/"){
        res.end(metodo === "GET" && "Bem vindos ao sistema XPTO");
    }else if(url === "/clientes"){
        res.end(metodo === "GET" && "Lista de clientes");
    }else if(metodo === "POST" && url === "/clientes"){
        RedirectHandler.end("inserindo cliente");
    }else if(url === "/fornecedores"){
        res.end(metodo === "GET" && "Lista de fornecedores");
    }else if(metodo === "PUT" && url === "/fornecedores"){
        res.end("Editando fornecedor");
    }else if(metodo === "GET" && url === "/carrinho"){
        res.end("Carrinho de compras");
    }else{
        res.end("Pagina nao encontrada!");
    }

});

server.listen(3000, 'localhost', () => {
    console.log("Server on-line")
});