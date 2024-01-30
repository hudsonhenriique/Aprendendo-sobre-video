let video = document.getElementById("video1");

function mostrar(m) {
  m.style.opacity = "1";
}

function esconder(m2) {
  m2.style.opacity = "0";
}

function retroceder() {
  video.currentTime -= 15;
}

function avancar() {
  video.currentTime += 15;
}

function diminuir_vel() {
  video.playbackRate -= 0.1;
}

function aumentar_vel() {
  video.playbackRate += 0.1;
}

function play() {
  video.play();
}

function pause() {
  video.pause();
}
