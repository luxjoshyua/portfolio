// import vid1 from "./assets/videos/fifty-festival-c.mp4";
// import vid2 from "./assets/videos/fracture-space-c.mp4";
// import vid3 from "./assets/videos/good-times-c.mp4";
// import vid4 from "./assets/videos/hex-yellow-c.mp4";
// import vid5 from "./assets/videos/jiffy-c.mp4";
// import vid6 from "./assets/videos/lolas-c.mp4";
// import vid7 from "./assets/videos/racquettes-c.mp4";
// import vid8 from "./assets/videos/radio-internet-c.mp4";
// import vid9 from "./assets/videos/succulent-garden-c.mp4";
// import vid10 from "./assets/videos/super-shapes-c.mp4";
// import vid11 from "./assets/videos/valencia-c.mp4";

const a = document.querySelector(".about");
if (a !== null) {
  a.addEventListener("click", (e) => {
    const about = document.querySelector(".about-reveal");
    if (about.style.display === "block") {
      about.style.display = "none";
    } else {
      about.style.display = "block";
    }
  });
}
