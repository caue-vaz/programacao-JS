//                  00000000001111111111222222222233333
//                  01234567890123456789012345678901234
   let umaString = "O rato roeu a roupa do rei de roma."
// let umaString = "um \"texto\"";
console.log (umaString[2])
console.log (umaString.concat(" ", "em", " ", "um"," ","lindo dia")); //concatenação
console.log(umaString + " em um lindo dia."); //concatenação
console.log(`${umaString} em um lindo dia.`); //concatenação
console.log (umaString.indexOf('roeu')); // qual indice começão tão expresção do texto
console.log (umaString.lastIndexOf('m',3)); // começa a procura de trás pra frente
console.log(umaString.match(/[a-z]/g)); // encontra uma expressão
console.log(umaString.match(/[a-z]/)); // encontra uma expressão
console.log(umaString.search(/x/)); // indicia qual indice que foi encontrado a expressão
console.log (umaString.replace(/r/g, '#')); // substituir um termo
console.log (umaString.length); // tamanho da expressão (partindo do 1)
console.log(umaString.slice(-5, -1)); // corta e expressão de acordo com as codernadas
console.log (umaString.split(' ', 3)); // quarda em array retirando uma expressão de acordo de um numero, se for fornecido
console.log(umaString.toUpperCase()); // deixa tudo em maiusculo
console.log (umaString.toLowerCase()); // deixa tudo em minusculo
