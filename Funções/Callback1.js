const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach(fabricante => console.log(fabricante));

/* callback é quando uma função é passada como parametro para outra e quando um determiado evento ocorrer
/* a função passada será disparada ou chamada de volta. Nesse caso quando o loop encontra um novo elemento
/* no array ele dispara a função imprimir.*/