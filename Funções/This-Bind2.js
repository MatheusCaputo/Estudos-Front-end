/*function Pessoa() {
    this.idade = 0;

    
    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000); //sem o bind, quem invoca a função setInterval é o temporizador resultano em NaN.
}

new Pessoa; */

function Pessoa() {
    this.idade = 0;

    const self = this; //armazena o this da instancia atual do objeto pessoa e nunca muda.
    setInterval(function() {
        self.idade++;
        console.log(self.idade);
    }, 1000);
}

new Pessoa;

