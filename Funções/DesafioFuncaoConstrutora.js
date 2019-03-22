function Pessoa (nome) {
    this.nome = nome;

    this.falar = function () {
        console.log(`Oi, meu nome é ${this.nome}`);
    }
}

const mac = new Pessoa('Matheus');

mac.falar();
console.log(mac.nome);