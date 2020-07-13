var myNav = document.getElementById("header");

window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 280) {
    myNav.classList.add("scroll");
  } else {
    myNav.classList.remove("scroll");
  }
};