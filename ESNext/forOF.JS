// percorre em cima de valores, pode ser usado em strings, objetos, arrays, maps, sets ...
for (let letra of "Cod3r") {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

// percorre em cima de indices.
for (let i in assuntosEcma) { 
    console.log(i);
}

for (let assunto of assuntosEcma) {
    console.log(assunto);
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto); // retorna um array com arrays de chave e valor.
}

for (let chave of assuntosMap.keys()) {
    console.log(chave); //retorna um array so com as chaves.
}

for (let valor of assuntosMap.values()) {
    console.log(valor); //retorna um array so com os valores.
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl); //usando destructuring ja que é passado um array como parametro.
}

const s = new Set(['a', 'b', 'c']);
for (let letra of s) {
    console.log(letra);
}