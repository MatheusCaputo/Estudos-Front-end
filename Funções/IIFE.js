// IIFE -> Immediately Invoked Function Expression

(function() {
    console.log('Será executado na hora!');
    console.log('Foge do escopo mais abrangente!');
})()

/* Mas por que usar? Encapsulamento! Tenha em mente que variáveis em Javascript têm como escopo a função
/* pela qual elas foram definidas (podem ser acessadas somente dentro da função, jamais fora). 
/* Ao criar uma função anônima com execução imediata, podemos criar um escopo temporário para 
/* nossas funções e variáveis. Com isso, evitamos poluição no nosso escopo global e possíveis 
/* conflitos de variáveis ou funções com o mesmo nome. */

