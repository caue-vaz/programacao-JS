/**
 * some todos os números (reduce)
 * Retorne um array com os pares (Filter)
 * Retorne um array com o dobro dos valores (Map)
 */

const numeros = [5,55,80,1,2,3,4,5,6,7,11,15,22,27];
const total = numeros.reduce(function(acumulador,valor){
if (valor % 2 !== 0) {
    acumulador += valor;
}

return acumulador;
},0);
// console.log(total)



const pessoas = [
    {nome:'Luiz',idade:62},
    {nome:'Maria',idade:23},
    {nome:'Eduardo',idade:55},
    {nome:'Letíca',idade:10},
    {nome:'Rosana',idade:64},
    {nome:'Wallace',idade:63},
];
const maisVelho = pessoas.reduce(function (acumulador,valor) {
    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});
console.log(maisVelho);