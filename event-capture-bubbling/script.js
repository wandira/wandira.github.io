const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  //(e) => logClassName(e)); kalau arrow, thisnya jadi global(window)
  div.addEventListener("click", logClassName, {
    capture: false, //default false, kalau true bakal dari outer to inner(capture) instead of bubbling
    // once: true, //works in button
  });
});

function logClassName(e) {
  //   console.log(e.target.classList.value); //beda lho
  //   console.log(e.currentTarget.classList.value);
  //   console.log(this);
  // event.target: Refers to the element that initiated the event.
  // event.currentTarget: Refers to the DOM element that registered the event.

  console.log(this.classList.value);
  e.stopPropagation();
}
