window.speechSynthesis.onvoiceschanged = () => {
  const voices = window.speechSynthesis.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);

    const playBtn = document.getElementById("playbtn");
    const stopBtn = document.getElementById("stopbtn");
    const continuaBtn = document.getElementById("resume");
    const cancelBtn = document.getElementById("cancel");
    const textArea = document.getElementById("input");
    const msg = document.getElementById("msg");

    //ATRIBUIÇÃO DE FUNÇÕES AO DISPLAY
    playBtn.addEventListener("click", iniciar);
    stopBtn.addEventListener("click", pausar);
    continuaBtn.addEventListener("click", continuar);
    cancelBtn.addEventListener("click", parar);

    //FUNÇÕES DOS BOTOES DO DISPLAY

    //ESSA FUNÇÃO SERVE PARA PARAR O AUDIO QUANDO INICIAR A PAGINA, RESETANDO A FILA
    window.onload = function () {
      synthesizer.cancel();
    };

    function parar() {
      if (confirm("Deseja realmente parar a fala?")) {
        synthesizer.cancel();
      }
      return;
    }

    const synthesizer = window.speechSynthesis;
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
        let utterThis = new SpeechSynthesisUtterance(textContent);

        utterThis.voice = voice;
        synthesizer.speak(utterThis);
      }
    }

    function pausar() {
      const pausado = synthesizer.paused;
      if (synthesizer.speak) {
        pausado === false;
      }
      synthesizer.pause();
    }

    function continuar() {
      synthesizer.resume();
    }
  }
};
