console.log(this === global); //f, pois o this aponta para module.exports.
console.log(this === module); //f, pois o this é um objeto que é a referencia de module.exports.
console.log(this === module.exports); //v
console.log(this === exports); //v, pois exports aponta tambem para a msm referencia do this (module.exports).


function logThis(){
    console.log('Dentro de uma função:');
    console.log(this === exports);
    console.log(this === global); //v
}

logThis(); //f, pois dentro de uma função o this não aponta para exports porém fora ele aponta.



