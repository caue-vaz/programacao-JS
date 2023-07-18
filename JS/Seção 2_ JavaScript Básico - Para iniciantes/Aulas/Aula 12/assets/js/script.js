//                  0123456789
   let umaString = "O Rato roeu a roupa do Rei de Roma."
// let umaString = "um \"texto\"";
console.log (umaString[2])
console.log (umaString.concat(" ", "em", " ", "um"," ","lindo dia"))
console.log(umaString + " em um lindo dia.")
console.log(`${umaString} em um lindo dia.`)
console.log (umaString.indexOf('roeu'));
console.log (umaString.lastIndexOf('m',3));
console.log(umaString.match(/[a-z]/g))
console.log(umaString.match(/[a-z]/))
console.log(umaString.search(/x/))
console.log (umaString.replace(/r/g, '#'))
console.log (umaString.length);
console.log(umaString.slice(-5, -1))
console.log (umaString.split(' ', 3))
console.log(umaString.toUpperCase())
console.log (umaString.toLocaleLowerCase())