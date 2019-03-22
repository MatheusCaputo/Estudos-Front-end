const valor = 'Global';

function minhaFuncao() {
    console.log(valor);//como valor não foi definido no escopo da função, será buscado no escopo global.
}

function exec() {
    const valor = 'Local';
    minhaFuncao(); /*nesse caso será considerado o contexto em que minhaFuncao foi declarado e não o 
                   /*contexto da função exec, logo a saida será 'Global' e não 'Local'.*/
}       

exec();