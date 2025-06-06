
// Teste seu código:
// Crie 2 livros diferentes, empreste um deles e tente emprestar o mesmo
// livro novamente (deve dar erro).

class Livro {
    #autor
    #titulo
    #disponivel = true;

    constructor (titulo, autor){
        this.#autor = autor,
        this.#titulo = titulo
    }
    emprestar() {
        if(this.#disponivel){
            this.#disponivel = false
        }
    }
    devolver(){
        if(this.#disponivel == false ){
            this.#disponivel = true
        }
    }
    getInfo(){
        if (this.#disponivel == false) {
            console.log(`O livro ${this.#titulo}, do autor: ${this.#autor} está indisponível`);            
        }else{
            console.log(`Livro disponível`);
        }
    }
    isDisponivel(){
        if (this.#disponivel) {
            return true            
        }else{
            return false            
        }
    }
}

const livro1 = new Livro("Harry Potter", "J. K. Rowling");
console.log(livro1.getInfo());
livro1.emprestar();
console.log(livro1.isDisponivel()); // false
livro1.devolver();
console.log(livro1.isDisponivel()); // true