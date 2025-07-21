const playBtn = document.getElementById("playbtn");
const stopBtn = document.getElementById("stopbtn");
const continuaBtn = document.getElementById("resume");
const textArea = document.getElementById("input");

playBtn.addEventListener("click", iniciar);
stopBtn.addEventListener("click", parar);

const synth = window.speechSynthesis;

synth.addEventListener("voiceschanged", () => {
  const voices = synth.getVoices();
  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    /*if (voice.default) {
      option.textContent += " - DEFAULT";
    }*/
    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    /*document.getElementById("voiceSelect").*/
    voiceSelect.appendChild(option);
  }
});
/*
populateVoiceList();
if (
  typeof speechSynthesis !== "undefined" &&
  speechSynthesis.onvoiceschanged !== undefined
) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
*/
function iniciar() {
  const textContent = textArea.value;
  const synthesizer = window.speechSynthesis;
  let voice = new SpeechSynthesisUtterance(textContent);
  synthesizer.speak(voice);
}

function parar() {
  const synthesizer = window.speechSynthesis;
}
