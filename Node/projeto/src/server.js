const port = 3003;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const bd = require("./bancoDados.js");

app.use(bodyParser.urlencoded({extended: true}));

app.get('/produtos', (req, res, next) =>{
    res.send(bd.getProducts()); //automaticamente convertido para JSON.
});

app.get('/produtos/:id', (req, res, next) =>{
    res.send(bd.getProduct(req.params.id)); 
});

app.post('/produtos', (req, res, next) =>{
    const product = bd.saveProduct(
        {
            nome: req.body.nome,
            preco: req.body.preco
        }
    )
    res.send(product);
});

app.put('/produtos/:id', (req, res, next) =>{
    const product = bd.saveProduct(
        {
            id: req.params.id,
            nome: req.body.nome,
            preco: req.body.preco
        }
    )
    res.send(product);
});

app.delete('/produtos/:id', (req, res, next) =>{
    const product = bd.deleteProduct(req.params.id);
    res.send(product);
});

app.listen(port, () =>{
    console.log(`server is running in port: ${port}`);
});


