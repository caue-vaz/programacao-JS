/*
Object.assign(des, any);
object.get.OwnPropertyDescriptor(o, 'prop');
...(spread)

// Já vimos
Object.keys (retorna as chaves);
Object.freeze (congela o objeto);
Object.defineProperties (define várias propriedades);
Object.defineProperty (define uma propriedade);
*/

/*
const caneca = {
    ...produto,
    material: 'porcelana',
};
*/
// const caneca = Object.assign({},produto,{material:'porcelana'})
const produto = {nome: 'Produto', preco: 1.8 ,material:'porcelana'};

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}