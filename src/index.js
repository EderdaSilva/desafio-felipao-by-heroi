let nomeHeroi = "StarFelip"
let NivelXP = Math.floor(Math.random(99999) *10000)
let msgNivel = `O herói de Nome ${nomeHeroi}, está no nivel: ${NivelXP}, e sua classificação é: `

while( NivelXP <=1000){
    console.log (msgNivel + "Ferro")
    break
}
while( NivelXP >1000 && NivelXP <=2000 ){
    console.log (msgNivel + "Broze")
    break
}
while( NivelXP >2000 && NivelXP <=6000 ){
    console.log (msgNivel + "Prata")
    break
}
while( NivelXP >6000 && NivelXP <=7000 ){
    console.log (msgNivel + "Ouro")
    break
}
while( NivelXP >7000 && NivelXP <=8000 ){
    console.log (msgNivel + "Platina")
    break
}
while( NivelXP >8000 && NivelXP <=9000 ){
    console.log (msgNivel + "Ascendente")
    break
}
while( NivelXP >9000 && NivelXP <=10000 ){
    console.log (msgNivel + "Imortal")
    break
}
while( NivelXP >10000 ){
    console.log (msgNivel + "Radiante")
    break
}