textReader();
function textReader() {
    const readText = () => {
      const text = document.getElementById("floatingTextarea").value;
      const speech = new SpeechSynthesisUtterance(text);
      speech.lang = 'pt-BR';
      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;
      window.speechSynthesis.speak(speech);
    }

    document.getElementById("read-button").addEventListener("click", readText);
}

function eraseText() {
  document.getElementById("floatingTextarea").value = "";
}