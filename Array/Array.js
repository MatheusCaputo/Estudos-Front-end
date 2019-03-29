console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo';
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);//v, pois o indice 8 está criado porem é undefined.

console.log(aprovados);
aprovados.sort(); //ordena o array.
console.log(aprovados);

delete aprovados[1];
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 1);//removendo a partir do indice 1, o primeiro elemento('carlos').
//aprovados.splice(1, 0, 'Matheus', 'Higor');//inserindo apos o indice 1, os 2 novos elementos.
console.log(aprovados);

/* O splice adiciona elementos em determindao indice como também os remove, como ambos ao mesmo tempo.
/* o primeiro parametro define o indice de start do splice, o segundo defeine quantos elementos
/* serão excluidos(para não excluir nenhum 0), o terceito define quais elemetos serão adicionados.*/ 

/* O array é uma estrutura dinamica, é idexada a partir do 0, é um objeto e não um tipo específico*/