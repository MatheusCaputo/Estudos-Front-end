// Object.preventExtensions não permite o aumento na qtd de atributos, porém podemos excluir e alterar.
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto));//testa se o obj foi criado por preventExtensions.

produto.nome = 'Borracha';//permite pois só altera um atributo ja existente.
produto.descricao = 'Borracha escolar branca';//não permite, pois não cria esse atributo.
delete produto.tag;//permite, pois exclui esse atributo.
console.log(produto);

// Object.seal não permite a criação e nem a exclusão, porém podemos alterar os valores dos atb existentes.
const pessoa = { nome: 'Juliana', idade: 35 };
Object.seal(pessoa);
console.log('Selado:', Object.isSealed(pessoa));//testa se o obj está selado.

pessoa.sobrenome = 'Silva';//não é permitido.
delete pessoa.nome;//não é permitido.
pessoa.idade = 29;//é permitido, idade passa a ser 29.
console.log(pessoa);

// Object.freeze = selado + valores constantes;