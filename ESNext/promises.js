function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase); // resolve so aceita 1 parametro, pode-se passar um obj com outros objs desejados.
        }, segundos * 1000);
    });
}

falarDepoisDe(3, 'Que legal!')
    .then(frase => frase.concat('?!?')) // metodo que trata qnd a promise foi executada/resolvida.
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)); // metodo que trata qnd a promise nao foi executada/erro/nao resolvida.