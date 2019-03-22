function Pessoa () {
    this.idade = 0;

    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa;

/* quando você cria a instância de uma função, todas as sentenças que estiverem dentro dessa função 
/*são executadas. Normalmente, no escopo de funções que instanciamos, há somente declaração de atributos
/*e métodos, por isso não vemos essa execução, e é um comportamento um pouco desconhecido. */

/*a execução de setInterval 'funciona' de modo paralelo ao resto do código mesmo, pois ela funciona 
/*de forma assíncrona. Quando acontece o evento de passar 1 segundo, ela chama a função callback,
/*que imprime a idade. Isso tudo enquanto a sequencia de código posterior é executada normalmente.*/