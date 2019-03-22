let comparaComThis = function (param) {
    console.log(this === param);
}

comparaComThis(global);//V porque dentro de uma função normal o this aponta para o runtime global do node.

const obj = {};
comparaComThis = comparaComThis.bind(obj);
comparaComThis(global); // F pois agora o this sai do escopo global e aponta para o obj e seu contexto.
comparaComThis(obj); // V pois this aponta para o obj.

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global);/* F pois a arrow function sempre aponta para o módulo do arquivo em que foi 
                            /* declarada e nunca para o global.*/

comparaComThisArrow(module.exports); // V pois o this aponta exatamente para seu módulo.

comparaComThisArrow = comparaComThisArrow.bind(obj); //arrow se sobrepõe ao bind.
comparaComThisArrow(obj);// F pois o this permanece referenciando o modulo no contexto que foi escrito.
comparaComThisArrow(module.exports);// V pois continua apontando para o objeto em que foi escrito.