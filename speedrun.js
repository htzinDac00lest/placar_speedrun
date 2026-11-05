class Game{
    constructor(nome){
        this.nome = nome;
        this.categorias = [];
    }
    verCategoria(){
        for(let i = 0; i < this.categorias.length; i++){
            console.log(this.categorias[i])
        }
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

function AdicionarCategoria(Nome, Categoria) {
    let i = 0;
    while (i < jogos.length) {
      if (jogos[i].nome.toLowerCase() == Nome.toLowerCase()){
        jogos[i].categorias += Categoria
      }
      i++;
    }
  }

let jogos = []
let nomesUsuarios = []
let usuarios = []
let run = []

let menu = -1
while (menu != 0){
    menu = prompt('Digite uma opcao\n 1-Adicionar jogo \n 2- Adicionar usuario\n 3- Adicionar categoria')

    if(menu == 1){
        let i = 0
        let nomeJogo = prompt('digite o nome do jogo')
        while (i < jogos.length){
        if (jogos[i].nome == nomeJogo){
            console.log('esse jogo ja foi registrado')
            break
        }
        i++
    }
            let jogo = new Game(nomeJogo)
            jogos.push(jogo)
            
    }
        if(menu == 2){
        let username = prompt('digite um nome de usuario')
        let nacionalidade = prompt('qual é a sua nacionalidade?')
        let i = 0
        while (i < usuarios.length) {
        if(usuarios[i].nome == username){
            console.log('Nome indisponivel')
            break
        }
        i++
    }
            let runner = new Usuario(username,nacionalidade) 
            usuarios.push(runner)
            nomesUsuarios.push(username)
    }
    if(menu == 3){
        let jogo = ('qual jogo você quer adicionar uma categoria?')
        let i = 0
        while (i < jogos.length){
        if (jogos[i].nome == (jogo)){
            console.log('o jogo não existe ou não foi registrado')
            break
        }
        i++
    }
            let nomeCategoria = prompt('qual o nome da categoria que você gostaria de adicionar?')
            let t = 0
            i = 0
            while ((i < jogos.length)){
                while(t < jogos[i].categorias.length){
                    if(jogos[i].categorias[t] == nomeCategoria){
                        console.log('essa categoria ja foi registrada')
                        break
                    }
                t++
            }
            i++
        }
        AdicionarCategoria(jogo,nomeCategoria)
    }
}





