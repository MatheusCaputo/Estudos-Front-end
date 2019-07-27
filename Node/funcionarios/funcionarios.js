const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json';
const axios = require('axios');

//const chinesa = f => f.pais === 'China';
//const mulher = f => f.genero === 'F';
const mulherChinesa = f => f.pais === 'China' && f.genero === 'F';
const menorSalario = (func, funcAtual) => {
    return func.salario<funcAtual.salario ? func:funcAtual;
}

axios.get(url).then(response => {
    const funcionarios = response.data;
    //console.log(funcionarios);
    const desafio = funcionarios.filter(mulherChinesa).reduce(menorSalario);

    console.log(desafio);
});

/* DESAFIO: Encontrar dentro do JSON funcionarios a mulher chinesa com o menor salário */




