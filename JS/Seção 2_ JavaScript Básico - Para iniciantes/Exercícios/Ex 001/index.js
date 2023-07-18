const nome = "Caue";
const sobrenome = "Vaz";
const idade = 19;
const peso = 53;
const altura= 1.67;
let imc = peso / (altura*altura);
let anoNascimento =2023 - idade;

console.log (`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg.`);
console.log (`Tem ${altura} de altura e seu IMC é de ${imc}.`)
console.log (`${nome} nasceu em ${anoNascimento}.`);