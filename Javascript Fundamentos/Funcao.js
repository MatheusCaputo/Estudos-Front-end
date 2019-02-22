// Armazenando uma function em uma variável

const imprimirSoma = function (a, b){
    console.log(a + b);
}

imprimirSoma(5, 5);

// Armazenando uma arrow function em uma variável

const soma = (a, b) => {
    return a + b;
}

console.log(soma(5, 10));

// Retorn implícito

const mult = (a, b) => a * b  // Quando for apenas 1 senteça, ela será retornada.

console.log(mult(5, 5));
