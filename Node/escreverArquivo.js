const fs = require('fs');

const produto = {
    nome: "lapiseira",
    grafite: 0.5,
    preco: 7.5
};

fs.writeFile(__dirname + '/arquivoEscrito.json', JSON.stringify(produto), err =>{
    console.log(err||'Arquivo salvo com sucesso!');
});