Array.prototype.map2 = function(callback){
    const newArray = [];
    this.forEach(element => {
        newArray.push(callback(element));
    });

    return newArray;
}

const carrinho = [
    '{"nome": "livro", "preco": 19.00}', 
    '{"nome": "caderno", "preco": 7.50}', 
    '{"nome": "borracha", "preco": 3.45}',
    '{"nome": "lapis", "preco": 25.00}'
];

//retornar um array somento com os preços 

const convertJSON = j => JSON.parse(j); //convertendo cada JSON em um objeto.
const value = o => o.preco; //devolvendo somente o preço do item.

console.log(carrinho.map2(convertJSON).map2(value));