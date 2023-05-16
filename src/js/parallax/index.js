import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true,
  getSpeed: true,
  getDirection: true,
  inertia: 0.75,
  mobile: {
    breakpoint: 0,
    getDirection: true, // <---- Fixes The Issue
    smooth: false,
  },
  tablet: {
    breakpoint: 0, // <---- Fixes The Issue
    getDirection: true, // <---- Fixes The Issue
    smooth: false,
  },
});

document.addEventListener('DOMContentLoaded', function () {
  function ScrollUpdateDelay() {
    setTimeout(function () {
      locomotiveScroll.update();
    }, 1000);
  }

  ScrollUpdateDelay();
});
