/*
Javascript é baseado em protóticos para passar propriedades e métodos
de um objeto para outro.
Definição de protótipo
Protótico é termo usado para se referir ao que foi criado pela
primeira vez,servindo de modelo ou molde para futuras produções.

Todos os objetos te uma referência interna para um prottótipo
(__proto__) que vem da propriedade prototype da função construtora 
que foi usada para criá-lo. Quando tentamos acessar um menbro de um
objeto, primeiro o motor do JS vai tentar encontrar este menbro no 
próprio objeto e depois a cadeia de protótipos é usada até o topo
(null) até encontrar (ou não) tal membro.
*/

function Pessoa (nome,sobrenome) {
    this.nome= nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => `Original: ${this.nome} ${this.sobrenome}`;
}

Pessoa.prototype.nomeCompleto = function() {
    return `${this.nome} ${this.sobrenome}`;
};
// instância
const pessoa1 = new Pessoa('Luiz', 'O.') // <-- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Maria', 'A.') // <-- Pessoa = Função Construtora
const data = new Date() // <-- Date = Função constutora

console.dir(pessoa1);
console.dir(pessoa2);
console.dir(data);