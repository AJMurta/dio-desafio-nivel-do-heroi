let XP = 20001;
let nome = "Chapisquinho";

if (XP <= 1000){
  console.log("O herói de nome " + nome + " está no nível Ferro")
}else if (XP >= 1001 && XP <= 2000) {
  console.log("O herói de nome " + nome + " está no nível BRONZE")
}else if(XP >= 2001 && XP <= 5000) {
    console.log("O herói de nome " + nome + " está no nível PRATA")
}else if(XP >= 5001 && XP <= 7000) {
    console.log("O herói de nome " + nome + " está no nível OURO")
}else if(XP >= 7001 && XP <= 8000) {
    console.log("O herói de nome " + nome + " está no nível PLATINA")
}else if(XP >= 8001 && XP <= 9000) {
    console.log("O herói de nome " + nome + " está no nível ASCENDENTE")
}else if(XP >= 9001 && XP <= 10000) {
    console.log("O herói de nome " + nome + " está no nível IMORTAL")
}else if (XP >= 10001 && XP <= 20000) {
    console.log("O herói de nome " + nome + " está no nível RADIANTE")
}else {
  console.log("O herói de nome " + nome + " está num nível desconhecido")
}