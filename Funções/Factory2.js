function criarProduto (nome, preco, desconto = 0.5) {
    return{
        nome: nome, //posso omitir o nome:, já que o parametro e o atributo tem rótulos iguais.
        preco: preco, //o mesmo vale aqui.
        desconto
    };
}

const p = criarProduto('ventilador', 110);

console.log(p);