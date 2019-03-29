/* O método reduce executa uma função reducer (provida por você) para cada membro do array,
/* resultando num único valor de retorno. A função reducer é alimentada por quatro parâmetros:

    (1)Acumulador (acc)
    (2)Valor Atual (cur)
    (3)Index Atual (idx)
    (4)Array original (src)

/* O valor de retorno da sua função reducer é atribuída ao acumulador. O acumulador, com seu valor 
/* atualizado, é repassado para cada iteração subsequente pelo array, que por fim, se tornará
/* o valor resultante, único, final.*/

const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual);
    return acumulador + atual;
}, 0);

console.log(resultado);