/* O método map serve para transformar um array em outro com o mesmo número de elementos, porém
/* com os dados transformado. Ex: criar um array de JSON em um array de objetos.*/

/* OBS: o map não altera o array que o chamou, mas sim cria um novo array a partir dele.*/

const ints = [2, 5, 7];

let resultado = ints.map(function(e){
    return 2*e;
});

console.log(ints, resultado);

const soma10 = e => e + 10;
const triplo = e => 3 * e;
const convertReais = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`;

resultado = ints.map(soma10).map(triplo).map(convertReais);/*chamada encadeada de maps, como o map é
/* acionado para cada elemento do array, os 3 maps serão executados em cada elemento e posteriormente 
/* iteram no próximo elemento. */

console.log(ints, resultado);