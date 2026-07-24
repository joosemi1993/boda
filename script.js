const video = document.getElementById("video");
const boton = document.getElementById("boton");
const playButton = document.getElementById("playButton");

playButton.addEventListener("click", async () => {

    await video.play();

    playButton.style.opacity = 0;

    setTimeout(() => {

        playButton.style.display = "none";

    },500);

});

let botonMostrado = false;

video.addEventListener("timeupdate", () => {

    if (!botonMostrado && video.currentTime >= 51) {

        botonMostrado = true;

        boton.style.display = "block";
        boton.style.transform = "translate(-50%,0)";

    }

});