//ESCOPO DO VAR:
const pessoa = function (){
   var nome = 'Matheus';        
}

//console.log(nome);                             // O var não vaza escopo de uma função.

console.log('Escopo do var');

var grupo = ['Matheus','Higor','Romulo'];

{
   var grupo = [];
   grupo[0] = 'Paulo';  
   grupo[1] = 'Pedro';     // O var vaza o escopo do bloco/for/objeto e acessa a variável grupo,
   grupo[2] = 'Joao';      // sobrescrendo-a.   
   console.log('Dentro do bloco', grupo);                       
}

console.log('Fora do for', grupo); 

const funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i);
    })
}

funcs[2]();
funcs[8]();

/* O var quando declarada dentro do escopo de uma função não vaza, no entanto 
 * em qualquer outro lugar seu escopo se torna global, ou seja, o var só tem escopo de função 
 * e escopo global. */

//ESCOPO DO LET:
let grupo1 = ['Matheus','Higor','Romulo'];

console.log('Escopo do let');

{
   let grupo1 = ['Dede', 'Dudu', 'Dada'];              
   console.log('Dentro do bloco', grupo1);           // O let não sobrescreve a variável grupo1. 
}

console.log('fORA DO BLOCO', grupo1); 

const funcs1 = []

for (let i = 0; i < 10; i++) {
    funcs1.push(function() {
        console.log(i);
    })
}

funcs1[2]();
funcs1[6]();
funcs1[8]();

/* Diferentemente do var, o escopo do let se limita ao bloco em que se insere, não vazando-o, 
 * ou seja, o let tem os escopos global, de função e de bloco.*/ 




