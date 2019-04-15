function randomNumberInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let p1 = { nombre: "Nuez", vida: 100, ataque: randomNumberInt(1, 50) };
let p2 = { nombre: "Cheto", vida: 100, ataque: randomNumberInt(1, 50) };
let turno = randomNumberInt(0, 1);
let ganador;
let perdedor;

document.getElementById("vs").textContent = (p2.nombre + " v " + p1.nombre);

if (turno == 1) {
  document.getElementById("turno").textContent = (p2.nombre + " tiene " + p2.vida + "HP y " + p2.ataque + " PTS de ataque.");
  let divturno = document.createElement("P");
  divturno.innerHTML = p1.nombre + " tiene " + p1.vida + "HP y " + p1.ataque + " PTS de ataque.";
  divturno.setAttribute("class", "update");
  document.getElementById("turno").appendChild(divturno);
} else {
  if (turno == 0) {
    document.getElementById("turno").textContent = (p1.nombre + " tiene " + p1.vida + "HP y " + p1.ataque + " PTS de ataque.");
    let divturno = document.createElement("P");
    divturno.innerHTML = p2.nombre + " tiene " + p2.vida + "HP y " + p2.ataque + " PTS de ataque.";
    divturno.setAttribute("class", "update");
    document.getElementById("turno").appendChild(divturno);
  }
}

while (p1.vida > 0 && p2.vida > 0) {
  if (turno == 1) {
    p2.vida = p2.vida - p1.ataque;
    turno = 0;
    let divappend = document.createElement("P");
    divappend.innerHTML = p2.nombre + " tiene " + p2.vida + "HP y " + p2.ataque + " PTS de ataque.";
    divappend.setAttribute("class", "update");
    document.getElementById("append").appendChild(divappend);
    p2.ataque = (randomNumberInt(1, 50));
  } else {
    if (turno == 0) {
      p1.vida = p1.vida - p2.ataque;
      turno = 1;
      let divappend = document.createElement("P");
      divappend.innerHTML = p1.nombre + " tiene " + p1.vida + "HP y " + p1.ataque + " PTS de ataque.";
      divappend.setAttribute("class", "update");
      document.getElementById("append").appendChild(divappend);
      p1.ataque = (randomNumberInt(1, 50));
    }
  }
}
if (p1.vida <= 0) {
  ganador = p2.nombre;
  document.getElementById("winner").textContent = ganador + " wins!";
  perdedor = p1.nombre;
} else {
  if (p2.vida <= 0) {
    ganador = p1.nombre;
    document.getElementById("winner").textContent = ganador + " wins!";
    perdedor = p1.nombre;
  }
}
let divlooser = document.createElement("P");
divlooser.innerHTML = (perdedor + " ha perdido");
divlooser.setAttribute("class", "perdedor");
document.getElementById("perdedor").appendChild(divlooser);

var tag = document.createElement("script");

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYoutubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "560",
    width: "315",
    videoId: "cPCLFtxpadE",
    events: {
      "onReady": onPlayerReady,
      "onStateChange": onPlayerStateChange
    }
  });
}
function onPlayerReady(event){
  event.target.playVideo();
}