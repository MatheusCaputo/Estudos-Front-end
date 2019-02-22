let num;

console.log(num);          /*Undefined ocorre quando se declara uma variável do tipo primitivo,
                            *porém não a inicializa. */
num = null;

console.log(num);         //Null diz respeito a endereço de memória, ou seja, não aponta para nenhum lugar.

const produto = {}

console.log(produto);   //Da objeto vazio, pois esta foi declarado.

console.log(produto.preco);  //Da undefined pois o objeto esta declarado, mas sua propriedade não.

produto.preco = null;       /* Isso seria útil por exemplo para deixar um Ebook gratuito, setando seu
                             * preço para null. */

console.log(produto);


/* Existem 2 tipos de atribuição:por referência e por valor, em que a por referência só é passado 
 * o endereço de memória (objetos e arrays) e por valor uma cópia de seu valor (variáveis primitivas).
 * O null refere-se a um ponteiro/variável que não aponta para nada e o undefined para uma variável 
 * de tipo primitivo declarada e não inicializada. */