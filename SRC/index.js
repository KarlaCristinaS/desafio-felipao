let nomeHeroi = ""
let QuantExperiencia = 902

if(QuantExperiencia < 1000)
        {nomeHeroi = "Ferro"}     
else if(QuantExperiencia >= 1001 && QuantExperiencia <=2000)
        {nomeHeroi = "Bronze"}
else if(QuantExperiencia >= 2001 && QuantExperiencia <=5000)
        {nomeHeroi = "Prata"}
else if(QuantExperiencia >= 6001 && QuantExperiencia <=7000)
        {nomeHeroi = "Ouro"}
else if(QuantExperiencia >= 7001 && QuantExperiencia <=8000)
        {nomeHeroi = "Platina"}
else if(QuantExperiencia >= 8001 && QuantExperiencia <=9000)
        {nomeHeroi = "Imortal"}        
else
        {nomeHeroi = "Radiante"}

console.log("O Herói de nome " + nomeHeroi  + " está no nível de "+ QuantExperiencia)
