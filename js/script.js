let playBtn = document.querySelector(".diferente")
let audioBtn = document.getElementById("playAudio")
let mensaje = document.getElementById("mensajeR")

playBtn.addEventListener("click", () => {
    if (audioBtn.paused || audioBtn.ended) {
        playBtn.querySelector(".fa-pause").classList.toggle("oculto")
        playBtn.querySelector(".fa-play").classList.toggle("oculto")
        mensaje.innerText = "Play"
        audioBtn.play()
    } else {
        playBtn.querySelector(".fa-play").classList.toggle("oculto")
        playBtn.querySelector(".fa-pause").classList.toggle("oculto")
        mensaje.innerText = "Pause"
        audioBtn.pause()
    }
})