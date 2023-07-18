/*
&& -> false && true -> false "o valor mesmo"
|| -> true && false -> vai retornar "o valor verdadeiro"
falsy
*false 
0 
'' "" ``
null / undefined
NaN
*/
const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;
console.log (a || b || 'Joãozinho' || c || d || e);