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
    constructor(usuario,game,tempo,categoria){
        this.usuario = usuario
        this.game = game
        this.tempo = tempo
        this.categoria = categoria
    }
}



let jogos = []
let nomesUsuarios = []
let usuarios = []
let run = []

let menu = -1
while (menu != 0){
    menu = prompt('Digite uma opcao\n 1-Adicionar jogo \n 2- Adicionar usuario')

    if(menu == 1){
        let nomeJogo = prompt('digite o nome do jogo')
        if (jogos.includes(nomeJogo)){
            console.log('esse jogo ja foi registrado')
            break
        }
        else{
            let jogo = new Game(nomeJogo)
            jogos.push(jogo)
        }
    }
        if(menu == 2){
        let username = prompt('digite um nome de usuario')
        let nacionalidade = prompt('qual é a sua nacionalidade?')
        if(nomesUsuarios.includes(username)){
            console.log('Nome indisponivel')
        }else{
            let runner = new Usuario(username,nacionalidade) 
            usuarios.push(runner)
            nomesUsuarios.push(username)
        }
    }
    if(menu == 3){
        let jogo = ('qual jogo você quer adicionar uma categoria?')
        let nomeCategoria =prompt('qual o nome da categoria?')
    } 
}
//new Run(usuario, jogo, '1:30:00', 'any%')