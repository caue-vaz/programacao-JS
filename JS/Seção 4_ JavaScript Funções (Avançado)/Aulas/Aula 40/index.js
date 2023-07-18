//declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie')
};

falaOi();
// First-class objects (objetos de primeira classe)
// Function expression
const souUmDado = function () {
    console.log('Sou um dado');
}
// com estar dentro de um 'const' transforma a toda a function em um dado
function executaFuncao(funcao) {
    console.log('Vou executar sua função abaixo:');
    funcao();
}
executaFuncao(souUmDado);
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow();

// Dentro de um objeto
const obj = {
    falar() {
        console.log('Estou falando....')
    }
};

obj.falar();