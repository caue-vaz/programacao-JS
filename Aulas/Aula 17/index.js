// const pessoa1 = {
// nome: 'Caue',
// sobrenome: 'Vaz',
// idade: 25
// };

// const pessoa2 = {
//     nome: 'Maria',
//     sobrenome: 'Oliveira',
//     idade: 55
//     };
    
//     console.log(pessoa1.nome);
//     console.log(pessoa1.sobrenome);
// function criaPessoa(nome, sobrenome, idade) {
//     return {nome, sobrenome, idade};
// }
// const pessoa1 = criaPessoa ('Caue', 'Vaz', 25)
// const pessoa2 = criaPessoa ('maria', 'Oliveira', 32)
// const pessoa3 = criaPessoa ('João', 'Moreira', 55)
// const pessoa4 = criaPessoa ('Junior', 'Lara', 44)
// const pessoa5 = criaPessoa ('Jean', 'Otávio', 69)

// console.log (pessoa1,pessoa2,pessoa3, pessoa4,pessoa5)
const pessoa1 = {
    nome: "Caue",
    sobrenome: 'Vaz',
    idade: 25,

    fala() {
        console.log (`Aminha idade atual é  ${this.idade}.`)
    },
    incrementaIdade () {
        this.idade++;
    }
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
