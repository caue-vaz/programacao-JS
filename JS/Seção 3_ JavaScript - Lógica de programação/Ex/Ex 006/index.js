// function fizzBuzz(x) {
//     if (x % 3 === 0 && x % 5 === 0){
//         return console.log('FizzBuzz');
//     } else if (x % 3 === 0 && x % 5 !== 0){
//         return console.log('Fizz');
//     }else if (x % 3 !== 0 && x % 5 === 0){
//         return console.log('Buzz');
//     }else if (x % 3 !== 0 && x % 5 !== 0) {
//         return console.log(x);
//     }else if (typeof x !== Number) {
//         return x
//     };
// }

// for (let i = 0; i <= 100; i++) {
//     console.log ( fizzBuzz(i))
// }
function fizzBuzz (numero) {
    if (typeof numero !== 'number') return numero;
    if (numero % 3 ===0 && numero % 5 ===0) return 'BuzzFizz';
    if (numero % 3 ===0) return 'Fizz';
    if (numero % 5 ===0) return 'Buzz';
    return numero;
}

console.log('a', fizzBuzz('a'));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}