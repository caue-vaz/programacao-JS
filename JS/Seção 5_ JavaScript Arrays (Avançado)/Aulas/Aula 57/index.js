/** Retorne a soma do dobro de todos os pares
 * Filtrar pares
 * dobrar os valores
 * Reduzir (soma tudo)
 */
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosPares = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2).reduce( (acumulador,valor) => acumulador += valor);
console.log(numerosPares);
// let numerosPares2 = numeros.filter(function (valor) {
//     if (valor % 2 ===0) return valor;
// });
// console.log(numerosPares2);
// let numerosEmDobro = numerosPares2.map(function (valor) {
//     return valor * 2;
// });
// console.log(numerosEmDobro);
// let somaNumeros = numerosEmDobro.reduce(function (acumulador,valor) {
//     return acumulador += valor;
// },0)
// console.log(somaNumeros)
