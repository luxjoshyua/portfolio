var titles = [
  {
    name: "first_title",
    breakpoint: 450,
    initial: "ahysfegh",
    final: "projects",
    animated: false,
  },

  {
    name: "second_title",
    // "breakpoint": 900,
    breakpoint: 450,
    initial: "wofsd",
    final: "about",
    animated: false,
  },

  {
    name: "third_title",
    // "breakpoint": 1400,
    breakpoint: 450,
    initial: "aoklumpo",
    final: "drawings",
    animated: false,
  },

  {
    name: "fourth_title",
    // "breakpoint": 1750,
    breakpoint: 450,
    initial: "ohyutep",
    final: "contact",
    animated: false,
  },

  {
    name: "fifth_title",
    breakpoint: 450,
    initial: "sokulps",
    final: "effects",
    animated: false,
  },
];

window.onscroll = function(e) {
  var scrollTop =
    window.pageYOffset !== undefined
      ? window.pageYOffset
      : (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;

  var windowHeight = window.innerHeight;
  for (var i = 0; i < titles.length; i++) {
    if (
      scrollTop > titles[i].breakpoint &&
      scrollTop < titles[i].breakpoint + windowHeight
    ) {
      //you are at this breakpoint and are not too far past it either
      if (!titles[i].animated) {
        // console.log(titles[i]);
        titles[i].animated = true;
        changeWord(titles[i].name, titles[i].initial, titles[i].final);
      }
    } else {
      titles[i].animated = false;
    }
  }
};

function changeWord(name, current, final) {
  if (current.toLowerCase() == final.toLowerCase()) {
    return;
  }
  var possible = "abcdefghijklmnopqrstuvwxyz";

  var correct = "";

  setTimeout(function() {
    for (var i = 0; i < current.length; i++) {
      if (current[i] != final[i]) {
        current =
          correct +
          possible.charAt(Math.floor(Math.random() * possible.length)) +
          current.slice(i + 1);
        break;
      } else {
        correct += current[i];
      }
    }
    // console.log(current);

    if (document.getElementById(name) !== null) {
      document.getElementById(name).innerHTML = current;
      changeWord(name, current, final);
    }
  }, 10);
}
