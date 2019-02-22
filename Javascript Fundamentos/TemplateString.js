const nome = 'matheus';
const concatenacao = 'Oi ' + nome + '!';
const template = `
    Oi 
    ${nome}!          //interpreta e busca a variável.
`;
console.log(concatenacao, template);

//o template string respeita tanto os espaços quanto as quebras de linha.

console.log(`1 + 1 = ${1 + 1}`);

//o template string aceita expressões .

const up = text => text.toUpperCase();

console.log(`Ei... ${up('não faça isso')}`);

//o template string aceita/chama funções.