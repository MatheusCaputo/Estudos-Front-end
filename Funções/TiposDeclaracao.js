console.log(soma(3, 4)); // como já foi carregada essa função, ela já está disponível para ser usada.
/*console.log(sub(3, 4)); nesse caso dará erro pois só pode ser invocada depois de declarada.
/*console.log(mult(3, 4)); o memso vale para essa, pois ela só tem seu valor atribuido na linha 17.*/

// function declaration
function soma(x, y) { //quando definida dessa forma o interpretador do js carrega primeiro as funções.
    return x + y;
}

// function expression
const sub = function (x, y) {
    return x - y;
}
console.log(sub(3, 4));

// named function expression
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4));