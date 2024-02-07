let nomeHeroi = "heroi"
let maximoNivel = 1

if (maximoNivel < 9){
    console.log(nomeHeroi + " não pode entrar no local")
    }

for(let i = 0; i <= 10; i++){
   if (maximoNivel <= i){
       console.log(nomeHeroi + " subiu de nivel " + i)
   }

}
let i = 0
let nivel = 20 
let nivelDois = 100
let nivelTreis = 200

console.log(i + " novo jogador")

if (nivel >= 0 ){
    console.log(nivel + " iniciante")
}

if (nivelDois >= 20 ){
    console.log(nivelDois + " GrauMestre")
}

if (nivelTreis >= 100 ){
    console.log(nivelTreis + " NIVELMAXIMO")
}