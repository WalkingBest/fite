function randomNumberInt (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let nuez = {nombre:"Nuez", vida:100, ataque:randomNumberInt(1,50)};
let cheto = {nombre:"Cheto", vida:100, ataque:randomNumberInt(1,50)};
let ganador;
let turno = randomNumberInt(0,1);

while(nuez.vida > 0 && cheto.vida > 0){
  if(turno == 1){
    cheto.vida = cheto.vida - nuez.ataque;
    turno = 0;
  }else{
    if(turno == 0){
      nuez.vida = nuez.vida - cheto.ataque;
      turno = 1;
    }
  }        
}
if(nuez.vida <= 0){
    ganador = "Cheto";
    document.getElementById("winner").textContent = ganador + " wins!";
}else{
    ganador = "Nuez";
    document.getElementById("winner").textContent = ganador +" wins!";
}