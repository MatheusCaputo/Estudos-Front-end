require('./global');

console.log(minhaApp.saudação()); //podemos tanto omitir quanto usar o global (global.minhaApp.*).

minhaApp.nome = 'cuidado';

console.log(minhaApp.nome); //por ser global pode ter atributos alterados, usar o freeze para travar.


