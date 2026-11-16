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

function AdicionarCategoria(n, Categoria) {
    let i = 0;
    while (i < jogos.length) {
      if (jogos[i].nome.toLowerCase() == n.toLowerCase()){
        jogos[i].categorias += Categoria
      }
      i++;
    }
  }

let jogos = []
let usuarios = []
let runs = []

let rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// faz a pergunta e tira os espaços sobrando do começo e do fim
async function Perguntar(Texto) {
  return (await rl.question(Texto)).trim();
}

let menu = -1
while (menu != 0){
    menu = await Perguntar('Digite uma opcao \n 1-Adicionar jogo \n 2- Adicionar usuario \n 3- Adicionar categoria \n 4- listar jogos\n 5- listar usuarios\n 6- ')

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
            console.log('jogo adicionado com sucesso!')
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
                    index = i+1
                }
            }
            if (index == 0){
                console.log('o jogo não existe ou não foi adicionado')
                break
            }
            let nomeCategoria = await Perguntar('qual o nome da categoria que você gostaria de adicionar?\n')
            let t = 0
                while(t < jogos[(index-1)].categorias.length){
                    if(jogos[index-1].categorias[t] == nomeCategoria){
                        console.log('essa categoria ja foi registrada\n')
                        break
                    }
                t++
            }
        AdicionarCategoria(jog,nomeCategoria)
    }
    if (menu == 4){
        let i = 0
        while(i < jogos.length){
            console.log(`O jogo ${jogos[i].nome} com as categorias: ${jogos[i].categorias}`)
            i++
        }
    }
    if (menu == 5){
        let i = 0
        while(i < usuarios.length){
            console.log(`nome : ${usuarios[i].nome}
                nacionalidade: ${usuarios[i].nacionalidade}\n \n`)
            i++
        }
    }
    if (menu == 6){
        let jog = await Perguntar('de qual jogo vc gostaria de publicar uma run?\n')
        let index = ''
        for(let i = 0; i < jogos.length; i++){
            if(jog.toUpperCase() == jogos[i].nome.toUpperCase()){
                index = i+1
            }
        }
        if (index == 0){
            console.log('o jogo não existe ou não foi adicionado\n')
            break
        }
        let nomeCategoria = await Perguntar('qual o nome da categoria que você gostaria de adicionar?\n')
        let t = 0
        categExiste = 0
            while(t < jogos[(index-1)].categorias.length){
                if(jogos[index-1].categorias[t] == nomeCategoria){
                    categExiste = 1
                    let player = await Perguntar('qual é o seu username?\n')
                    let z = 0
                    let existe = 0
                    while (z < usuarios.length){
                        if(usuarios[i].nome == player){
                            existe = 1
                            let time = await Perguntar('quanto tempo durou a run? (no formato hr:min:seg:ms (usando apenas 2 digitos em cada))\n')
                            let hr = (time[0]*10) + (time[1])
                            let min = (time[3]*10) + (time[4])
                            let seg = (time[6]*10) + (time[7])
                            let ms = (time[9]*10) + (time[10])
                            if ((min > 59) || (seg > 59) || (ms > 99)){
                                console.log('tempo invalido\n')
                                break
                            }
                            else{
                                console.logg('run publicada com sucesso!')
                                let run = new Run (player,jog,time,nomeCategoria)
                                runs.push(run)
                            }
                        }
                        z++
                    }
                    if (existe == 0){
                        console.log('o usuario não existe\n')
                        break
                    }
                }
            t++
        }
        if (categExiste == 0){
            console.log('a categoria não existe ou não foi adicionada\n')
            break
        }
    }
}
