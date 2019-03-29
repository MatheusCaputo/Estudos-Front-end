/* O metodo filter filtra o array gerando um novo sub array aplicando o critério desejado, sem 
/* alterar o array original. Normalmente o array resultante é menor que o original, podendo ser
/* também do mesmo tamanho mas nunca maior*/

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de Vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false }
];

console.log(produtos.filter(function(p) {
    return false
}));

const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));//filters encadeados.

