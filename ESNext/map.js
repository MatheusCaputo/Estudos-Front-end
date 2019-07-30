const tecnologias = new Map(); //par chave e vlaor, aceita qualquer tipo como chave.
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias.react); //erro, pois é preciso utilizar o metodo get para a chave e o valor.
console.log(tecnologias.get('react').framework); // metodo para atraves da chave obter o valor.

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
]);

chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl);
});

console.log(chavesVariadas.has(123)); // verifica se a chave está contida no map.
chavesVariadas.delete(123);
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size);

chavesVariadas.set(123, 'a');
chavesVariadas.set(123, 'b'); // não é permitido ter chaves iguais, logo o 'b' sobrescreve o 'a'.
chavesVariadas.set(456, 'b');
console.log(chavesVariadas);