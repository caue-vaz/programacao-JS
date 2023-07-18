// Factory functions / Constructor functions / Classes
function Pessoa(nome,sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    Object.freeze(this);
}

// {} <- this -> this
const p1 = new Pessoa( 'Luiz','Miranda');
p1.nome = 'Outra coisa';
p1.sobrenome = 'QLQ';
p1.fala = function() {console.log('Oi')};
p1.fala();
const p2 = new Pessoa('Maria','Miranda');
console.log(p1,p2);