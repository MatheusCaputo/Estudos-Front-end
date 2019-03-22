//estrategia 1 para gerar valor padrão.

function somar(a, b, c){
    a = a||1;
    b = b||1;
    c = c||1;

    return a+b+c;
}

console.log(somar());
console.log(somar(5));
console.log(somar(0, 0, 0)); //nesse caso esta estratégia não funcionará, pois como é feito um OU lógico,
                            //dará falso e as variáveis assumirão todas valores padrões.

//estrategias 2, 3 e 4 para gerar valor padrão = E[.];

function somar2(a, b, c){
    a = a !== undefined ? a : 1; //utilizando operador ternário. E[2];
    b = 1 in arguments ? b : 1; //verifica se no índice 1 existe em arguments que seria b. E[3];
    c = isNaN(c) ? 1 : c; //verifica se é um numero. E[4];

    return a+b+c;
}

console.log(somar2());
console.log(somar2(5));
console.log(somar2(0, 0, 0)); //nesse caso funciona normalmente, devido as estratégias utilizadas.

//estrategia do es6(es2015) para gerar valor padrão.

function somar3(a=1, b=1, c=1){ //nesse caso os valores padrão são passados no argumento da função;
    return a+b+c;
}

console.log(somar3());
console.log(somar3(5));
console.log(somar3(0, 0, 0));