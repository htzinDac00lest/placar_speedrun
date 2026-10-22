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
let run = []

let menu = -1
while (menu != 0){
    menu = prompt('Digite uma opcao\n 1-Adicionar jogo \n 2- Adicionar usuario')

    if(menu == 1){
        let nomeJogo = prompt('digite o nome do jogo')
        let jogo = new Game(nomeJogo)
        let i = 0
        while (i <= jogos.length){
        if (jogo == jogos[i]){
            console.log('esse jogo ja foi registrado')
            break
        }
        if (i == jogos.length){
            jogos.push(jogo)
        }
        }
    }
        if(menu == 2){
        let username = prompt('digite um nome de usuario')
        let nacionalidade = prompt('qual é a sua nacionalidade?')
        if(usuarios.includes(username)){
            console.log('Nome indisponivel')
        }else{
            let runner = new Usuario(username,nacionalidade) 
            usuarios.push(username)
        }
    } 
}
//new Run(usuario, jogo, '1:30:00', 'any%')