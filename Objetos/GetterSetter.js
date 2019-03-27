const sequencia = {
    _valor: 1, // convenção de nomeclatura para atributos privados.
    get valor() { return this._valor++ },
    set valor(valor) { 
        if(valor > this._valor) {
            this._valor = valor;
        }
    }
}

console.log(sequencia.valor, sequencia.valor); // chama o get.
sequencia.valor = 1000; // chama o set.
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900;
console.log(sequencia.valor, sequencia.valor);

/* quando você declara uma função com get ou set, é possível acessá-la com a mesma 
/* sintaxe que você acessaria um atributo. */