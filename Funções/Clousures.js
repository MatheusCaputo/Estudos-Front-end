// Closure é o escopo criado quando uma função é declarada e a função tem memória do espaço físico em
// que foi definida.
// Esse escopo permite a função acessar e manipular variáveis externas à função

// Contexto léxico em ação!

const x = 'Global';

function fora() {
    const x = 'Local';
    function dentro() {
        return x;
    }
    return dentro;
}

const minhaFuncao = fora(); 
console.log(minhaFuncao()); //saida = 'Local', pois a clousure da função dentro é a função fora.