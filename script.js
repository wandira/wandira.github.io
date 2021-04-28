const bg = document.getElementsByClassName("main")[0];
const audio = Array.from(document.getElementsByClassName("audio"));

const playSound = (e) => {
  console.log("yey");
  if (e.keyCode == 70) {
    audio[0].currentTime = 0.1;
    audio[0].play();
    bg.classList.remove("fadein");
    bg.classList.add("opaque");
  } else if (e.keyCode > 64 && e.keyCode < 91) {
    const rand = Math.floor(Math.random() * 10 + 1);
    audio[rand].currentTime = 0.1;
    audio[rand].play();
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
