const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
}

pessoa.falar(); //modo padrão de chamar uma função.
const falar = pessoa.falar;
falar();//conflito entre paradigmas:funcional e OO, pois o this nesse contexto não se refere ao obj pessoa.

const falarDePessoa = pessoa.falar.bind(pessoa);//o bind amarra o this em todos os contextos ao obj pessoa.
falarDePessoa();