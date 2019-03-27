const pai = { nome: 'Pedro', corCabelo: 'preto' };

const filha1 = Object.create(pai);//ja cria o objeto com 'pai' como prototipo.
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?//retorna v caso a propriedade pertença ao objeto e f caso contrário.
        console.log(key) : console.log(`Por herança: ${key}`);
}