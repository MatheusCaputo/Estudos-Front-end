// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa);//congela o objeto pessoa,ou seja, não consigo mais altera-lo em nada.

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({ nome: 'Joao' });
pessoaConstante.nome = 'Maria';
console.log(pessoaConstante);