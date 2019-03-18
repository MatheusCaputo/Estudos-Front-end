// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa;   //atributos do objeto que edseja-se extrair e o objeto a qual pertencem.
console.log(nome, idade);

const { nome: n, idade: i } = pessoa; //podemos atribuir seus valores a outras variáveis.
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa; //ao tentar acessar atributos não existentes de um 
console.log(sobrenome, bemHumorada);              //objeto existente teremos que este é undefined e 
                                                 //podemos setar uma saida padrão caso não exista.


const { endereco: { logradouro, numero, cep } } = pessoa;//forma de acessar atributos de objetos aninhados.
console.log(logradouro, numero, cep);

const { conta: { ag, num } } = pessoa;//ao tentarmos acessar atributos inexistentes de objetos aninhados
console.log(ag, num);                  //inexistentes dará erro(undefined), pois o objeto não foi declarado.