const verdadeira = true;

//Let tem escopo de bloco {... bloco}
//var só tem escopo de função

let nome = 'Luiz';  // criando
var nome2 = 'Luiz'; // criando

if (verdadeira) {
    let nome = 'Otávio'; // criando
   var nome2 = 'Rogério'; // redeclarando

    if (verdadeira) {
        var nome2 = 'Ronaldo'; // redeclarando
        let nome = 'Outra coisa';
        console.log(nome,nome2);
    }
}
console.log (nome,nome2);