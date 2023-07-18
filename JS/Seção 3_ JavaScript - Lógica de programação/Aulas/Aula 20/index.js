/* 
Operadores Lógicos
&& -> AND -> E -> Todas as expressôes precisam ser vedadeiras para retornar true
|| -> OR -> OU
! -> NOT -> NÃO
*/
// const expressaoAnd = true && true && true && true;
// const expressaoOr = false ||false || true || false;
// console.log(expressaoOr);
const usuario = 'Luiz';
const senha = '123456';

const vailogar = usuario === 'Luiz' && senha === '12345';
console.log (vailogar);