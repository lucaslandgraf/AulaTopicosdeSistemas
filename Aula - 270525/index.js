//console.log("Olá Mundo");

const fs = require('fs');

//Lendo um arquivo existente

fs.readFile('arquivo1.txt', 'utf-8', (err, data) => {
    if(err){
        return console.error("Erro ao ler o arquivo: ", err);
    }
    console.log("Conteúdo do arquivo", data);
});


// Criando um arquivo texto

fs.writeFile('ArquivoDoNode.txt', 'Conteúdo gerado diretamente pelo Node.js', (err) => {
    if(err){
        return console.error("Falha ao criar arquivo", err);
    }
    console.log("Arquivo criado com sucesso!");
})