const bg = document.getElementsByClassName("main")[0];
const audio = document.getElementById("audio");

const playSound = (e) => {
  console.log("yey");
  if (e.keyCode == 70) {
    audio.currentTime = 0.1;
    audio.play();
    bg.classList.remove("fadein");
    bg.classList.add("opaque");
  }
};
const removeOpaque = (e) => {
  console.log(e);
  if (e.propertyName !== "opacity") return;
  bg.classList.remove("opaque");
  bg.classList.add("fadein");
};

bg.addEventListener("transitionend", removeOpaque);

window.addEventListener("keydown", playSound);
