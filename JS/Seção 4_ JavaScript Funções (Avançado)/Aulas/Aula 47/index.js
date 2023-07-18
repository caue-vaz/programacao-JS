// Factory function (Função fábrica)
// Construtor function (Função construtora) 
function criaPessoa(nome, sobrenome, a, p){
return {
    nome,
    
    sobrenome,
    // Getter
    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto (valor) {
        valor = valor.split(' ');
        this.nome = valor.shift();
        this.sobrenome = valor.join(' ');
        
    },
    
    fala: function (assunto) {
        return `${nome} está ${assunto}.`
    },
    
    altura: a,
    
    peso: p,
    // Getter
    
    get imc() {
        const indice = this.peso/(this.altura ** 2);
        return indice.toFixed(2)
    }
};
};

const p1 = criaPessoa('Caue', 'Vaz', 1.8 ,80);
p1.nomeCompleto = 'Carolina Oliveira vigenzo'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.fala())