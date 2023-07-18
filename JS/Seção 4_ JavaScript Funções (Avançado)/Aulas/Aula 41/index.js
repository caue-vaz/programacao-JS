// argumentos que sustenta todos os argumentos enviados
// function funcao(a,b,c,d,e,f) {
// let total = 0;
// for (let argumento of arguments) {
//     total += argumento;
// }

// console.log(a,b,c,d, e,f);
// }
// funcao(1,2,3,4,5,6,7);

const conta = function conta(...args) {
console.log(args);
};
conta('*',120, 20,30,40,50);
