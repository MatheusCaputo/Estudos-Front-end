const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o BD
mongoose.connect("mongodb://localhost:27017/apinode", {useNewUrlParser: true});

requireDir("./src/models");

app.use("/api", require("./src/routes"));//use recebe todos os tipos de requisição.

app.listen(3001);