const text2Loop = [
  "Hi",
  "I",
  "am",
  "looking",
  "for",
  "frontend",
  "coding",
  "opportunities",
  "right",
  "now!",
  "please",
  "contact",
  "me",
  "at",
  "josh.e.fielding@gmail.com",
];

textSequence(0);

const textAnimate = document.querySelector(".text-animate");
function textSequence(i) {
  if (text2Loop.length > i) {
    setTimeout(function() {
      textAnimate.innerHTML = text2Loop[i];
      textSequence(++i);
    }, 1000); // 1 second (in milliseconds)
  } else if (text2Loop.length == i) {
    // Loop
    textSequence(0);
  }
}
