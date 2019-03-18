function rand({ min = 0, max = 1000 }) {    //recebe como parametro 2 atributos de um objeto e tem
    const valor = Math.random() * (max - min) + min; //como valor padrão 0 e 1000;
    return Math.floor(valor);
}

const obj = { max: 50, min: 40 };
console.log(rand(obj));//passando como parametro o objeto, a função desestrutura os atributos necessarios.
console.log(rand({ min: 955 }));//a função adota o min de 955 e o max por padrão de 1000.
console.log(rand({}));//ao passar objeto vazio, a função adota os valores padrões.
console.log(rand());//erro de parametro, pois tenta desestruturar algo que é undefined.