// IEEE 754-2008
let nu1 = 0.7123131232; //number
let nu2 = 0.1321313;// number

nu1 = ((nu1 * 100) + (nu2 * 100))/ 100 // 0.8
nu1 = ((nu1 * 100) + (nu2 * 100))/ 100 // 0.9
nu1 = ((nu1 * 100) + (nu2 * 100))/ 100 // 1.0



nu1 = Number(nu1.toFixed(2))

console.log(nu1);
console.log (Number.isInteger(nu1))

console.log (nu1.toString() + nu2);
console.log (typeof nu1);
console.log(nu1.toString(2));
console.log(nu1.toFixed(2));
console.log(Number.isInteger(nu1));
console.log(Number.isNaN(nu1))
let temp = nu1 * '5';
console.log(temp);