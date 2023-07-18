// const h1 = document.querySelector('.container .body-web h1');
// const data = new Date();


// let diaSemana = data.getDay();
// let diaSemanaTexto;
// function  getDiaSemanaTexto(diaSemana)  {

//     let diaSemanaTexto;

//     switch (diaSemana) {
//     case 0:
//         diaSemanaTexto = 'Domingo';
//         return diaSemanaTexto;
//         case 1:
//         diaSemanaTexto = 'Segunda-feira';
//         return diaSemanaTexto;
//         case 2:
//             diaSemanaTexto = 'Terça-feira';
//             return diaSemanaTexto;
//             case 3:
//                 diaSemanaTexto = 'Quarta-feira';
//                 return diaSemanaTexto;
//     case 4:
//         diaSemanaTexto = 'Quinta-feira';
//         return diaSemanaTexto;
//         case 5:
//             diaSemanaTexto = 'Sexta-feira';
//             return diaSemanaTexto;
//     case 6:
//         diaSemanaTexto = 'Sábado';
//         return diaSemanaTexto;
//         default:
//         diaSemanaTexto= ""
//         break; 
//     }
// }
// function  getNomeMes(numeroMes)  {

//     let NomeMes;

//     switch (numeroMes) {
//     case 0:
//         NomeMes = 'Janeiro';
//         return NomeMes;
//     case 1:
//         NomeMes = 'Fevereiro';
//         return NomeMes;
//     case 2:
//         NomeMes = 'Março';
//         return NomeMes;
//     case 3:
//         NomeMes = 'Abril';
//         return NomeMes;
//     case 4:
//         NomeMes = 'Maio';
//         return NomeMes;
//     case 5:
//         NomeMes = 'Junho';
//         return NomeMes;
//     case 6:
//         NomeMes = 'Julho';
//         return NomeMes;
//     case 7:
//         NomeMes = 'Agosto';
//         return NomeMes; 
//     case 8:
//         NomeMes = 'Setembro';
//         return NomeMes;
//     case 9:
//         NomeMes = 'Outubro';
//         return NomeMes;
//     case 10:
//         NomeMes = 'Novembro';
//         return NomeMes;
//     case 11:
//         NomeMes = 'Dezembro';
//         return NomeMes;
//     default:
//         NomeMes= "";
//         return NomeMes; 
//     }
// }
// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// } 
// function criaData(data) {
//     const diaSemana = data.getDay();
//     const numeroMes = data.getMonth();

//     const nomeDia = getDiaSemanaTexto(diaSemana);
//     const NomeMes = getNomeMes (numeroMes);

//     return (`${nomeDia}, ${data.getDate()} de ${NomeMes} de ${data.getFullYear()}   ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
//  }   
    
//     h1.innerHTML = criaData(data);



// const h1 = document.querySelector('.container .body-web h1');
// const data = new Date();

// h1.innerHTML = data.toLocaleDateString ('pt-BR', {dateStyle: 'full', timeStyle: 'long' });
const h1 = document.querySelector('.container .body-web h1');
const data = new Date();


let diaSemana = data.getDay();
let diaSemanaTexto;
function  getDiaSemanaTexto(diaSemana)  {
const diasSemana = ['domingo','Segunda','terça','quarta','quinta','sexta','sabado'];
return diasSemana[diaSemana];
}
function  getNomeMes(numeroMes)  {
    const meses = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','novembro','dezembro'];
    return meses[numeroMes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
} 
function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const NomeMes = getNomeMes (numeroMes);

    return (`${nomeDia}, ${data.getDate()} de ${NomeMes} de ${data.getFullYear()}   ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`)
 }   
    
    h1.innerHTML = criaData(data);