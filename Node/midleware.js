//chain of responsabilty

const passo1 = (contexto, next) =>{
    contexto.valor1 = "mid1";
    next();
};

const passo2 = (contexto, next) =>{
    contexto.valor2 = "mid2";
    next();
};

const passo3 = (contexto) =>{
    contexto.valor3 = "mid3";
};


const execution = (contexto, ...midlewares) =>{
    const execPasso = indice =>{
        midlewares && indice<midlewares.length && midlewares[indice](contexto, ()=>execPasso(indice+1));
    }
    execPasso(0);
};

const contexto = {};

execution(contexto, passo2, passo1, passo3);
console.log(contexto);