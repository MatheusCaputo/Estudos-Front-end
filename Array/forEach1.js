const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`);
});

/*aprovados.forEach(function(nome, indice, aprovados) {
    console.log(`${indice + 1}) ${nome}`);               Exemplo com o parametro array.
    console.log(aprovados);
});*/

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);

/* O forEach recebe uma callback como parametro que é executado 1 vez por cada elemento, 
/* e normalmente passa como parametros o valor do elemento e seu indice. Pode também receber
/* como terceiro parametro o proprio array. A partir do 4 parametro é sempre undefined, pois
/* não é 'oficial'.*/