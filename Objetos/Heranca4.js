function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto;
const obj2 = new MeuObjeto;
console.log(obj1.__proto__ === obj2.__proto__);//v, todo obj criado a partir de uma msm func constr aponta para o msm prototipo.
console.log(MeuObjeto.prototype === obj1.__proto__);//v, qnd criamos obj a partir de uma função constr(new) o prototipo dela aponta para o atribto prototype da função que vc criou. 

MeuObjeto.prototype.nome = 'Anônimo';
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`);
}

obj1.falar();

obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {};//criando literalmente o obj, seu pai é Object.prototype.
obj3.__proto__ = MeuObjeto.prototype;//mudando a referencia de Object.prototype para MeuObjeto.prototype.
obj3.nome = 'Obj3';
obj3.falar();

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);//v, pois foi instanciado a partir da func.
console.log(MeuObjeto.__proto__ === Function.prototype);//v, pois toda função descende de Function.prototype.
console.log(Function.prototype.__proto__ === Object.prototype);//v
console.log(Object.prototype.__proto__ === null);//v, pois o Object é o maior nível de de prototype.

/* resumo:  __proto__ é o objeto que é utilizado como referência na cadeia de protótipos para chamar 
/* métodos dos objetos-pai. Prototype é o objeto utilizado para criar o __proto__ quando você cria um
/* objeto com o new.*/
