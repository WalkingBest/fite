/* eslint-disable no-unused-vars */
/* eslint-disable no-redeclare */

// Devuelve un numero random entero entre min y max
function randomNumberInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Descarga la api de youtube y construye el reproductor
/* exported player */
function ytPapu() {
	const tag = document.createElement('script');
	tag.src = 'https://www.youtube.com/iframe_api';
	const firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
	// eslint-disable-next-line no-var
	var player;
	window.onYouTubeIframeAPIReady = function() {
		// eslint-disable-next-line no-undef
		player = new YT.Player('player', {
			width: '560',
			height: '315',
			videoId: 'cPCLFtxpadE',
			playerVars: { autoplay: 1, controls: 0, start: 30 },
			events: {
				onReady: onPlayerReady
			}
		});
	};

	function onPlayerReady(event) {
		event.target.setVolume(100);
		event.target.playVideo();
		typeWriter();
		// Invoca funcion al cargar el reproductor
	}
}
// Crea un parrafo, agrega clase y lo hace hijo de un div
function createUpdate(div, name, hp, attack) {
	const p = document.createElement('P');
	p.innerHTML = (name + ' tiene ' + hp + 'HP y ' + attack + ' PTS de ataque.');
	p.setAttribute('class', 'update');
	document.getElementById(div).appendChild(p);
}
// Soporte forEach para ie
if (!NodeList.prototype.forEach && Array.prototype.forEach) {
	NodeList.prototype.forEach = Array.prototype.forEach;
}
/* exported startFite*/
function startFite() {
	const player1array = [];
	for (let i = 0; i < 25; i++) {
		player1array.push(randomNumberInt(1, 50));
	}

	const player2array = [];
	for (let i = 0; i < 25; i++) {
		player2array.push(randomNumberInt(1, 50));
	}

	const p1 = { nombre: '', vida: 100, ataque: player1array[0] };
	const p2 = { nombre: '', vida: 100, ataque: player2array[0] };
	p1.nombre = document.getElementById('player1').value;
	p2.nombre = document.getElementById('player2').value;
	let ganador;
	let perdedor;
	let turno;
	ytPapu();
	document.querySelectorAll('.update, .perdedor').forEach((e) => e.parentNode.removeChild(e));
	document.getElementById('form').reset();
	document.getElementById('player1').focus();
	document.getElementById('h1p1').textContent = (p1.nombre);
	document.getElementById('h1p2').textContent = (p2.nombre);
	document.getElementById('vs').textContent = (' v ');
	if (player1array[0] > player2array[0]) {
		turno = 1;
		createUpdate('append', p1.nombre, p1.vida, p1.ataque);
	}
	else {
		turno = 0;
		createUpdate('append', p2.nombre, p2.vida, p2.ataque);
	}

	let index1 = 0;
	let index2 = 0;
	while (p1.vida > 0 && p2.vida > 0) {
		if (turno === 1) {
			// loopTurn1();
			p2.vida = p2.vida - p1.ataque;
			p2.ataque = player2array[index2];
			createUpdate('append', p2.nombre, p2.vida, p2.ataque);
			turno = 0;
			index1++;
		}
		else if (turno === 0) {
			// loopTurn0();
			p1.vida = p1.vida - p2.ataque;
			p1.ataque = player1array[index1];
			createUpdate('append', p1.nombre, p1.vida, p1.ataque);
			turno = 1;
			index2++;
		}
	}
	if (p1.vida <= 0) {
		ganador = p2.nombre;
		document.getElementById('winner').textContent = ganador + ' wins!';
		perdedor = p1.nombre;
	}
	else {
		ganador = p1.nombre;
		document.getElementById('winner').textContent = ganador + ' wins!';
		perdedor = p2.nombre;
	}
	const divlooser = document.createElement('P');
	divlooser.innerHTML = (perdedor + ' ha perdido');
	divlooser.setAttribute('class', 'perdedor');
	document.getElementById('perdedor').appendChild(divlooser);
}
// Animacion de the ultimate battle begins
function typeWriter() {
	document.getElementById('subtitle').setAttribute('class', 'typewriter subtitulo');
	document.getElementById('subtitle').innerHTML = 'The ultimate battle begins.';
}
document.getElementById('subtitle').addEventListener('animationend', typeWriter2, false);
function typeWriter2() {
	document.getElementById('winner').classList.add('typewriter2');
}
