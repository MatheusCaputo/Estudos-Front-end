const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
];

// Imperativo
let total1 = 0;
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota;
}
console.log(total1 / alunos.length);

// Declarativo
const getNota = aluno => aluno.nota;         // método reusável.
const soma = (total, atual) => total + atual;// método reusável.

const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);

/* O declarativo tem a vantagem de maior reusabilidade de código, através de funções pequenas e bastante
/* especialistase ao acostumar-se o código ficas mais claro.*/

/* Em resumo o declarativo tem o foco em dizer o que tem que ser feito enquanto o imperativo diz como
/* deve ser feito.*/