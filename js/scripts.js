function randomNumberInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Youtube
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    width: '560',
    height: '315',
    videoId: 'cPCLFtxpadE',
    playerVars: { 'autoplay': 1, 'controls': 0, 'start': 30},
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  event.target.setVolume(100);
  event.target.playVideo();
  typeWriter();
}
// Youtube Ends
let p1 = { nombre: "Odra", vida: 100, ataque: randomNumberInt(1, 50) };
let p2 = { nombre: "Adjeg", vida: 100, ataque: randomNumberInt(1, 50) };
let turno = randomNumberInt(0, 1);
let ganador;
let perdedor;

document.getElementById("vs").textContent = (p2.nombre + " v " + p1.nombre);

if (turno == 1) {
  let turno1 = document.createElement("P");
  turno1.innerHTML = (p2.nombre + " tiene " + p2.vida + "HP y " + p2.ataque + " PTS de ataque.");
  turno1.setAttribute("class", "update");
  document.getElementById("turno").appendChild(turno1)
  let divturno = document.createElement("P");
  divturno.innerHTML = p1.nombre + " tiene " + p1.vida + "HP y " + p1.ataque + " PTS de ataque.";
  divturno.setAttribute("class", "update");
  document.getElementById("turno").appendChild(divturno);
} else {
  if (turno == 0) {
    let turno0 = document.createElement("P");
    turno0.innerHTML = (p1.nombre + " tiene " + p1.vida + "HP y " + p1.ataque + " PTS de ataque.");
    turno0.setAttribute("class", "update");
    document.getElementById("turno").appendChild(turno0);
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
    perdedor = p2.nombre;
  }
}
let divlooser = document.createElement("P");
divlooser.innerHTML = (perdedor + " ha perdido");
divlooser.setAttribute("class", "perdedor");
document.getElementById("perdedor").appendChild(divlooser);

function typeWriter() {
  document.getElementById("subtitle").setAttribute("class", "typewriter subtitulo");
  document.getElementById("subtitle").innerHTML = "The ultimate battle begins."
}
