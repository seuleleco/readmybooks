const playBtn = document.getElementById("playbtn");
const textArea = document.getElementById("input");
playBtn.addEventListener("click", iniciar);

function iniciar() {
  const textContent = textArea.value;
  const synthesizer = window.speechSynthesis;
  let voice = new SpeechSynthesisUtterance(textContent);
  synthesizer.speak(voice);
}
