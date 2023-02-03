const audio = document.querySelector(".diferente")
const playAudio = document.getElementById("playAudio")

audio.addEventListener("click", () => {
    playAudio.play()
})