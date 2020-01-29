document.addEventListener("click", function (e) {
    var circle = document.createElement("DIV");
    circle.classList.add("marker");
    document.body.appendChild(circle);
    circle.style.top = e.pageY + "px";
    circle.style.left = e.pageX + "px";
    var r = (Math.random() * 254);
    var g = (Math.random() * 254);
    var b = (Math.random() * 254);
    var color = "rgb(" + r + ", " + g + ", " + b + ")"
    circle.style.backgroundColor = color;
})