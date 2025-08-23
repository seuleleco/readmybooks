const playBtn = document.getElementById("playbtn");
const stopBtn = document.getElementById("stopbtn");
const continuaBtn = document.getElementById("resume");
const cancelBtn = document.getElementById("cancel");
const textArea = document.getElementById("input");
const msg = document.getElementById("msg");
const playImg = document.getElementById("playimg");
const stopImg = document.getElementById("stopimg");
const pauseImg = document.getElementById("pauseimg");

//ATRIBUIÇÃO DE FUNÇÕES AO DISPLAY
playBtn.addEventListener("click", iniciar);
stopBtn.addEventListener("click", pausar);
continuaBtn.addEventListener("click", continuar);
cancelBtn.addEventListener("click", parar);

//FUNÇÕES DOS BOTOES DO DISPLAY
const synthesizer = window.speechSynthesis;

//ESSA FUNÇÃO SERVE PARA PARAR O AUDIO QUANDO INICIAR A PAGINA, RESETANDO A FILA
window.onload = function () {
  synthesizer.cancel();
};
stopImg.classList.add("visivel");
function parar() {
  if (confirm("Deseja realmente parar a fala?")) {
    synthesizer.cancel();
    playImg.classList.remove("visivel");
    pauseImg.classList.remove("visivel");
    stopImg.classList.add("visivel");
  }
  return;
}

function iniciar() {
  //CONDIÇÃO PARA CASO A FALA ESTEJA EM ANDAMENTO
  if (synthesizer.speaking) {
    msg.textContent = "fala em andamento";
    msg.classList.add("visivel");
    //TEMPO DE VISIBILIDADE DA MENSAGEM
    setTimeout(() => {
      msg.classList.remove("visivel");
    }, 1400);
  } else {
    const textContent = textArea.value;
    let voice = new SpeechSynthesisUtterance(textContent);
    synthesizer.speak(voice);

    if (synthesizer.speaking) {
      stopImg.classList.remove("visivel");
      playImg.classList.add("visivel");
    }
    voice.onend = function () {
      pauseImg.classList.remove("visivel");
      playImg.classList.remove("visivel");
      stopImg.classList.add("visivel");
    };
  }
}

function pausar() {
  if (synthesizer.speaking === false) {
    return;
  } else {
    const pausado = synthesizer.paused;
    synthesizer.pause();

    if (pausado === false) {
      playImg.classList.remove("visivel");
      pauseImg.classList.add("visivel");
    }
  }
}

function continuar() {
  synthesizer.resume();
  if (synthesizer.speaking === false) {
    return;
  } else {
    playImg.classList.add("visivel");
    pauseImg.classList.remove("visivel");
  }
}
