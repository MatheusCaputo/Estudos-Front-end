/*já que por padrão o node mantém um cache, podemos retornar uma nova instancia 
utulizando uma função factory.*/

module.exports = () => {
    return {
        valor:1,
        incremento(){
            this.valor++;
        }
    };
};