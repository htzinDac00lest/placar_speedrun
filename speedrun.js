class Game{
    constructor(jogo,categoria){
        this.jogo = jogo;
        this.categoria = categoria;
    }
}

class Usuario{
    constructor(nome,nacionalidade){
        this.nome = nome
        this.nacionalidade = nacionalidade
    }
}

class Run {
    constructor(usuario,game,tempo, categoria){
        this.usuario = usuario
        this.game = game
        this.tempo = tempo
        this.categoria = categoria
    }
}



let jogos = []
let usuarios = []
let usuario = new Usuario('joao', 'brasil')
let run = new Run(usuario, jogo, '1:30:00', 'any%')

let menu = -1
while (menu != 0){
    menu = prompt('Digite uma opcao\n 1-Adicionar jogo \n 2- Adicionar usuario')

    if(menu == 1){
        let nomeJogo = prompt('digite o nome do jogo')
        let categoria = prompt ('digite a categoria')
        let jogo = new Game(nomeJogo, categoria)

        }else {
            console.log('Categoria invalida')
        }
        //aqui tu deve verificar a categoria antes de criar um jogo
        jogos.push(jogo)
        if(menu == 2){
        let username = prompt('digite um nome de usuario')
        let nacionalidade = prompt('qual é a sua nacionalidade?')
        if (username == usuario.nome){
            console.log('nome de usuario indisponivel,escolha outro nome')
        }
        else{
            let runner = new usuario(username,nacionalidade) 
            usuarios.push(runner)
        }
    } 
}