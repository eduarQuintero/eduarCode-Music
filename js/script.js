let playBtn = document.querySelector(".diferente")
let audioBtn = document.getElementById("playAudio")

playBtn.addEventListener("click", () => {
    if (audioBtn.paused || audioBtn.ended) {
        playBtn.querySelector(".fa-pause").classList.toggle("oculto")
        playBtn.querySelector(".fa-play").classList.toggle("oculto")
        audioBtn.play()
    } else {
        playBtn.querySelector(".fa-play").classList.toggle("oculto")
        playBtn.querySelector(".fa-pause").classList.toggle("oculto")
        audioBtn.pause()
    }
})