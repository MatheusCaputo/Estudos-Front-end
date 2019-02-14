console.log(9/0.0000001)
console.log(9/0) //tipo Infinity em js
console.log('10'/2) ///funciona devido a tipagem fraca do js
console.log('10,2'/2) //*not a number(NaN)*/
console.log('show'*2) //algumas linguagens concatenam 2* a palavra (NaN)
//console.log(10.toFixed(2)), token inválido
console.log((10.543).toFixed(2))
console.log(0.1 + 0.7) // imprecisão, pois segue o padrão IEEE