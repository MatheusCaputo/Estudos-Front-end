const pessoa = {
    nome: 'Rebeca',             //(chave:valor).
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa));//retorna o nome das chaves do objeto.
console.log(Object.values(pessoa));//retorna os valores do objeto.
console.log(Object.entries(pessoa));//=registros,retorna uma array contendo sub arrays com chave:valor.

Object.entries(pessoa).forEach(([chave, valor]) => {//destructuring, tirando os elementos da estrutura.
    console.log(`${chave}: ${valor}`);
});

Object.defineProperty(pessoa, 'dataNascimento', {//define/modifica propriedades do objeto, se pode ou não ser alterada, será visível ou não no obj.keys .
    enumerable: true,  //define se será passiva de ser listada.
    writable: false,   //define se será passiva de alterações.
    value: '01/01/2019' //atribuição de valor.
});

pessoa.dataNascimento = '01/01/2017';
console.log(pessoa.dataNascimento);
console.log(Object.keys(pessoa));

// Object.assign (ECMAScript 2015/ES6)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c: 3, a: 4 };
const obj = Object.assign(dest, o1, o2); /* concatena todos os atributos dos objetos passados como 
/*parametro a partir do segundo, ao objeto de destino(1 parametro), quando encontrar um atributo
/*com mesmo nome sobrescreve o valor ja existente. */

Object.freeze(obj);
obj.c = 1234;
console.log(obj);