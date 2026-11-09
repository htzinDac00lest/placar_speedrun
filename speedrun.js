import readline from 'readline/promises'
import fs from 'fs'

let arquivo = 'dados.json'

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
    constructor(nome, nacionalidade){
        this.nome = nome
        this.nacionalidade = nacionalidade
    }
}

class Run {
    constructor(usuario, game, tempo, categoria){
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
let usuarios = []
let run = []

let rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// faz a pergunta e tira os espaços sobrando do começo e do fim
async function Perguntar(Texto) {
  return (await rl.question(Texto)).trim();
}

let menu = -1
while (menu != 0){
    menu = await Perguntar('Digite uma opcao \n 1-Adicionar jogo \n 2- Adicionar usuario \n 3- Adicionar categoria \n 4- listar jogos\n')

    if(menu == 1){
        let i = 0
        let nomeJogo = await Perguntar('digite o nome do jogo\n')
        while (i < jogos.length){
        if (jogos[i].nome == nomeJogo){
            console.log('esse jogo ja foi registrado\n')
            break
        }
        i++
    }
            let jogo = new Game(nomeJogo)
            jogos.push(jogo)
            
    }
        if(menu == 2){
        let username = await Perguntar('digite um nome de usuario\n')
        let nacionalidade = await Perguntar('qual é a sua nacionalidade?\n')
        let i = 0
        while (i < usuarios.length) {
            if(usuarios[i].nome == username){
                console.log('Nome indisponivel\n')
                break
            }
        i++
    }
            let runner = new Usuario(username,nacionalidade) 
            usuarios.push(runner)
    }
    if(menu == 3){
            let jog = await Perguntar('Qual jogo deseja adicionar a categoria?\n')
            let index = ''
            for(let i = 0; i < jogos.length; i++){
                if(jog.toUpperCase() == jogos[i].nome.toUpperCase()){
                    index = i
                } 
            }
            if (index == ''){
                console.log('o jogo não existe ou não foi adicionado')
                break
            }
            let nomeCategoria = await Perguntar('qual o nome da categoria que você gostaria de adicionar?\n')
            let t = 0
                while(t < jogos[index].categorias.length){
                    if(jogos[index].categorias[t] == nomeCategoria){
                        console.log('essa categoria ja foi registrada\n')
                        break
                    }
                t++
            }
        AdicionarCategoria(jogo,nomeCategoria)
    }
    if (menu == 4){
        let i = 0
        while(i < jogos.length){
            console.log(`O jogo ${jogos[i].nome} com as categorias: ${jogos[i].categorias}`)
            i++
        }
    }
}
