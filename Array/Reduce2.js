const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

//Desafio 1: retornar se todos os alunos são bolsistas ? (boolean)
const d1 = alunos.map(aluno => aluno.bolsista).reduce(function(acu, atual){
    return acu && atual;
});

if(d1 === false){
    console.log('Não são todos os alunos que são bolsitas!');
}

//Desafio 2: retornar se algum aluno é bolsita ?
const d2 = alunos.map(aluno => aluno.bolsista).reduce(function(acu, atual){
    return acu || atual;
});

if(d2 === true){
    console.log('Pelo menos um aluno é bolsista!');
}