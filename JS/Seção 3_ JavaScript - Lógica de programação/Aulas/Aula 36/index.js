function soma(x, y) {
if (typeof x !== 'number' || typeof y !== 'number'){
    throw new error('x e y prcisam ser números.');
}

return x + y;
}
try {
    console.log(soma(1, 2));
    // console.log(soma('1', 2));
} catch(error){
    console.log(error)
    console.log('Alguma coisa mais amigável pro usuário')
}