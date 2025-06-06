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
        if (this.#disponivel) {
            console.log(`O livro ${this.#titulo}, do autor: ${this.#autor} está disponível`);
        }else{
            console.log(`O livro ${this.#titulo}, do autor: ${this.#autor} está disponível`);
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
livro1.getInfo();
livro1.emprestar();
console.log(livro1.isDisponivel()); // false
livro1.devolver();
console.log(livro1.isDisponivel()); // true

console.log("==================");
const livro2 = new Livro("O Mundo de Sophia", "Jostein Gaarder");
livro2.getInfo();

console.log("==================");
const livro3 = new Livro("O Menino Maluquinho", "Ziraldo");
livro3.emprestar();
livro3.emprestar();
livro3.getInfo();
