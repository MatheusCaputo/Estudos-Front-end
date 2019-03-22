//declaração de função padrão
let potencia = function(a){
    return Math.pow(a, 2);
}

//declaração com arrow function(1)
potencia = (a) => {              
    return Math.pow(a, 2);
}

/*OBS: a arrow function é uma função anônima, ou seja, deve ser armazanada em uma variável para poder ser
utilizada posteriormente.*/ 

//declaração arrow function reduzida(2)
potencia = a => Math.pow(a, 2); /*é possível tirar os parenteses quando se tem um único parametro e
                                /*também quando temos uma única linha podemos omitir as chaves tornando
                                /*implícita a chamada do return.*/

/*OBS(2):interessante para funções especialistas que são muito utilizadas,tornando mais facil seu reuso.*/

let bd = function(){
    return 'Bom dia !';
}

bd = () => 'Bom dia !';

console.log(potencia(3));
console.log(bd());

/*VANTAGENS DE ARROW FUNCTION: menos código e amarra o this ao contexto do objeto em que foi utilizado,
ou seja, o this é sempre constante.*/ 