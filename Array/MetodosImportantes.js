const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // massa quebrou o carro! remove o ultimo elemento do array.
console.log(pilotos);

pilotos.push('Verstappen');//insere no fim do array.
console.log(pilotos);

pilotos.shift(); // remove o primeiro elemento!
console.log(pilotos);

pilotos.unshift('Hamilton');// adiciona o elemento na primeira posição do array;
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1); // massa quebrou :(
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); // novo array gerado a partir do indice especificado.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4);//o 1 indice é incluido e o ultimo não.
console.log(algunsPilotos2);