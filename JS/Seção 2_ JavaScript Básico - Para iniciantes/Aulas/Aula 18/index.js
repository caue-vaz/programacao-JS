/*
Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) -valores copiados

Referência (mútavel) - array,object, function - Passados por referência
*/
// let a = [1,2,3];
// let b = a;
// console.log(a, b);

// a.push (4)
// console.log (a, b)

// b.pop();
// console.log(a, b);
const a = {
    nome: 'Luiz',
    sobrenome:'Otávio'
};
const b = a;
b.nome = 'João';
console.log(a);
console.log (b);