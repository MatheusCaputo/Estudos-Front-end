/*o node faz cache dos módulos, ou seja, ele terá uma instancia unica pois o node mantem 
uma instancia Singleton.*/

module.exports = {
    valor:1,
    incremento(){
        this.valor++;
    }
};