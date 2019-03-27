const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

console.log(ferrari.prototype);//undefined, pois ele não tem esse atributo apenas o __proto__.
console.log(ferrari.__proto__);// esse atributo acessa o protótipo desse objeto, seu pai.
console.log(ferrari.__proto__ === Object.prototype);//true, representa o prototype de mais alto nível.
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);//true, pois por padrão Object.prototype é null.

function MeuObjeto() {};
console.log(typeof Object, typeof MeuObjeto);
console.log(Object.prototype, MeuObjeto.prototype);

/* A sequencia natural ao se procurar um atributo que não esteja no escopo da função é procurá-lo
/* no escopo global. Já com o prototype após verificar se o atributo se encontra no escopo da função 
/* é verificado se esse objeto faz referência a um protótipo(pai) e então é buscado nesse prototipo 
/* e em toda hierarquia de protótipos e finalmente caso não encontrado é dado como undefined.*/

/* Sempre que referenciamos um novo objeto(new) este já tem um atributo prototype que aponta por padrão 
/* para Oject.protoype, porém conseguimos mudar sua referência. */

/* [[protype]] é o conceito de protótipo e só está disponível em Object.prototype, enquanto
/* prototype(__proto__) é um atributo que é dispónível em todos os objetos.*/