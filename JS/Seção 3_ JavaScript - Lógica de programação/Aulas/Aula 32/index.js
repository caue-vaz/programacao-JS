// For in -> lê os indices ou chaves do objeto
//                0       1     2
const pessoa = {
nome: 'Luiz',
sobrenome: 'Otávio',
idade: 30
};

for (let chave in pessoa) {
    console.log(chave, pessoa[chave])
}