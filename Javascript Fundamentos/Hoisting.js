console.log('a = ', a); // indefinida, mas é como se já estivesse declarada.
var a = 5;              // nessa linha é feito o hoisting.
console.log('a = ', a);

/* Esse código é o que acontece acima:
var a;
console.log('a = ', a); 
a = 5;              
console.log('a = ', a); */

/* Hoisting é o içamento da variável, a grosso modo é jogar a variável para cima, é mover
 *sua declaração para o topo. Ocorre com o var e inclusive dentro de funções(com o var), ou seja, 
 *não ocorre. */

/* SOMENTE CURIOSIDADE DA LINGUAGEM, NÃO UTILIZAR. */   