function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco //como ja temos um metodo com esse nome, ele cria um atributo e associa a função ja criada.
}

global.preco = 20;
global.desc = 0.1;
console.log(getPreco()); // a saida será 18, pois nesse contexto seu this será o global.
console.log(produto.getPreco());// nesse contexto seu this será o produto.

const carro = { preco: 49990, desc: 0.20 };

console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

console.log(getPreco.call(carro, 0.17, '$'));
console.log(getPreco.apply(global, [0.17, '$']));

/* Em ambos os casos o primeiro parametro passado é o contexto de execução (no exemplo poderia ser 
/* produto, carro, global ou null), no call passamos também todos os parametros passados para a
/* função getPreco, já no apply todos os parametros passados para getPreco devem ser passados em 
/* um array.*/
 