let num1 = 0.7;
let num2 = 0.1;

num1 += num2; // 0.8
num1 += num2; // 0.9
num1 += num2; // 1.0


console.log(num1.toString()/*transforma o número em string*/ + num2);  
console.log(num1.toString(2)); // mostra o numero em binario 
console.log(num1.toFixed(4)); // aredonda o umero de acordo com o número de casa colocada no ()
console.log(Number.isInteger(num1));// mostra se o numero é inteiro
//let temp = num1 * "ola";
//console.log (Number.isNaN(temp)); // mostra se o valor não é um numero 