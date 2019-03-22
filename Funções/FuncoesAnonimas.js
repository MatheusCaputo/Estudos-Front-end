const soma = function (x, y) {
    return x + y;
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b));
}

imprimirResultado(3, 4);
imprimirResultado(3, 4, soma);
imprimirResultado(3, 4, function (x, y) {
    return x - y;
})
imprimirResultado(3, 4, (x, y) => x * y); 

/* OBS: uma funcão normal pode ser tanto nomeada quanto anonima, enquanto uma arrow function sempre 
/* será uma função anonima, pois eu nunca consigo nomea-la.*/

const pessoa = {
    falar: function () {
        console.log('Opa');
    }
}

pessoa.falar();