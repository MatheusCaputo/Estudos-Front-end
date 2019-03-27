const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } };
console.log(JSON.stringify(obj));//converte o obj para notação JSON, formato textual. Não converte funções.

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"));
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"));
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'));//converte um JSON em um objeto.
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'));