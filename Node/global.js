//console.log(global);

global.minhaApp = {
    saudação(){
        return 'Bom dia';
    },
    nome: 'Aplicativo genérico'
};

/*global.minhaApp = Object.freeze({
    saudação(){
        return 'Bom dia';                 alternativa para deixar o obj global, porém evitar alterações
    },
    nome: 'Aplicativo genérico'
});*/

//evitar ao maximo utilizar o global e dar preferencia para o sistema de modulos (require).