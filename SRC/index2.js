//let vitorias = prompt("Digite a quantidade de vitórias: ");
//let derrotas = prompt("Digite a quantidade de derrotas: ");
//  let saldoFinal = Saldo(vitorias,derrotas)

let saldoFinal = Saldo(10,2)

if(saldoFinal < 10)
        {nomeHeroi = "Ferro"}     
else if(saldoFinal >= 11 && saldoFinal <=20)
        {nomeHeroi = "Bronze"}
else if(saldoFinal >= 21 && saldoFinal <=50)
        {nomeHeroi = "Prata"}
else if(saldoFinal >= 51 && saldoFinal <=80)
        {nomeHeroi = "Ouro"}
else if(saldoFinal >= 81 && saldoFinal <=90)
        {nomeHeroi = "Diamante"}
else if(saldoFinal >= 91 && saldoFinal <=100)
        {nomeHeroi = "Lendário"}        
else
        {nomeHeroi = "Imortal"}

console.log("O Herói tem de saldo ** " + saldoFinal + " ** e está no nível de "+ nomeHeroi)


function Saldo(entradaVitorias,entradaDerrotas) {
    return parseInt(entradaVitorias) - parseInt(entradaDerrotas)
}
