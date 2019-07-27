const contadorA = require('./instanciaUnica');
const contadorB = require('./instanciaUnica');//retorna um objeto.
const contadorC = require('./instanciaNova')();//estou invocando a função factory, pois retorna uma função.
const contadorD = require('./instanciaNova')();

contadorA.incremento();
contadorA.incremento();
console.log(contadorB.valor); //também terá sido incrementado devido ao cache feito pelo node.

contadorC.incremento();
console.log(contadorD.valor);//continua como 1 pois a factory retorna 1 novo obj por instancia.

console.log('valor de contadorA: '+contadorB.valor, 'valor de contadorB: '+contadorB.valor);
console.log('valor de contadorC: '+contadorC.valor, 'valor de contadorD: '+contadorD.valor);
