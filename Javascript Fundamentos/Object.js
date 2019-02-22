const livro = {}

livro.titulo = 'O Hobbit';   // É possível criar atributos dinamicamente, sem tê-los declarado no objeto.
livro.preco = 30.50;
livro['Desconto imperdivel'] = 0.30;    // Par chave/valor... Evitar atributos com espaço!

console.log(livro);

const livro2 = {
    titulo: 'Harry Potter',
    preco: 25.99
}

console.log(livro2);

'{"titulo": "O Hobbit", "preco": 30.50}' /* JSON: é uma string, seus atributos são delimitados
                                          * por aspas duplas, serve para a interoperabilidade/comunicação 
                                          *  entre sistemas */