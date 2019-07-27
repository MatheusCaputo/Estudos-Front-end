console.log(this === module.exports);
console.log(exports === module.exports);
console.log(this === module.exports);

this.a = 1; //tanto o this quanto o exports são só referencias para o module.exports.
exports.b = 2;
module.exports.c = 3;

exports = null; //o exports é apenas uma var que aponta para module.exports, logo so mudei sua referencia.
                //a unica variavel que é retornada é a module.exports.
console.log(module.exports);

exports = {
    nome:"Matheus"
};

//caso eu queira exportar um objeto todo, o modo a ser usado é o seguinte:

module.exports = {
    nome:"Matheus", 
    idade: 22,
    formado: true
};