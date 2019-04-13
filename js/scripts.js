function randomNumberInt (min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let nuez = {nombre:"Nuez", vida:100, ataque:randomNumberInt(1,50)};
let cheto = {nombre:"Cheto", vida:100, ataque:randomNumberInt(1,50)};
let ganador;
let turno = randomNumberInt(0,1);

//document.getElementById("nuez").textContent = (nuez.nombre+" tiene "+nuez.vida + "HP y "+nuez.ataque+" PTS de ataque." );
//document.getElementById("cheto").textContent = (cheto.nombre+" tiene "+cheto.vida + "HP y "+cheto.ataque+" PTS de ataque." );

if(turno == 1){
  document.getElementById("turno").textContent = (cheto.nombre+" tiene "+cheto.vida + "HP y "+cheto.ataque+" PTS de ataque." );
  let divturno = document.createElement("P");
  divturno.innerHTML = nuez.nombre+" tiene "+nuez.vida + "HP y "+nuez.ataque+" PTS de ataque.";
  document.getElementById("turno").appendChild(divturno);
}else {
  if(turno == 0){
    document.getElementById("turno").textContent = (nuez.nombre+" tiene "+nuez.vida + "HP y "+nuez.ataque+" PTS de ataque." );
    let divturno = document.createElement("P");
    divturno.innerHTML = cheto.nombre+" tiene "+cheto.vida + "HP y "+cheto.ataque+" PTS de ataque.";
    document.getElementById("turno").appendChild(divturno);
  }
}

// let divappend = document.createElement("P");
// divappend.innerHTML = "oie cy"
// document.getElementById("append").appendChild(divappend);

while(nuez.vida > 0 && cheto.vida > 0){
  if(turno == 1){
    cheto.vida = cheto.vida - nuez.ataque;
    turno = 0;
      let divappend = document.createElement("P");
      divappend.innerHTML = cheto.nombre+" tiene "+cheto.vida + "HP y "+cheto.ataque+" PTS de ataque.";
      document.getElementById("append").appendChild(divappend);
  }else{
    if(turno == 0){
      nuez.vida = nuez.vida - cheto.ataque;
      turno = 1;
       let divappend = document.createElement("P");
 divappend.innerHTML = nuez.nombre+" tiene "+nuez.vida + "HP y "+nuez.ataque+" PTS de ataque.";
 document.getElementById("append").appendChild(divappend);
    }
  }
}
if(nuez.vida <= 0){
    ganador = "Cheto";
    document.getElementById("winner").textContent = ganador + " wins!";
}else{
  if(cheto.vida <= 0){
    ganador = "Nuez";
    document.getElementById("winner").textContent = ganador + " wins!";
  }
}