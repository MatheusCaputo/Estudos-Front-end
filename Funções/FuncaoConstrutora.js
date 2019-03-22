function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    let velocidadeAtual = 0; //o let torna o atributo privado e só acessível dento da função.

    // metodo publico
    this.acelerar = function () { //o this torna nesse caso o método publico e acessível fora da função.
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual;
    }
}

const uno = new Carro; // não tem parentese pois não é passado parametro, ou seja, assume valor padrão.
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro); //função
console.log(typeof ferrari); //objeto gerado a partir da função construtora Carro.