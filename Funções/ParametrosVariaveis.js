function soma(){ //mesmo sem receber parametros, isso não significa que não podemos passar parametro. 
    let soma = 0;

    for (const i in arguments) { //é possivel recupera-los com a propriedade arguments.
        soma += arguments[i];
    }
    return soma;
}

console.log(soma(3, 4, 6));
console.log(soma('a','b')); //os caracteres serão concatenados juntamenta com o 0 que inicializa a soma.