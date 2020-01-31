var z = 2

var images = document.querySelectorAll("img")

images.forEach(img => {
  img.addEventListener("mouseenter", function () {
    z += 2
    this.style.zIndex = z
  })
}); 

