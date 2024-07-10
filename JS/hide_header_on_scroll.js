var prevScrollpos = window.scrollY;

/* Get the header element and it's position */
var headerDiv = document.querySelector("header");
var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

window.onscroll = function () {
  var currentScrollPos = window.scrollY;

  /* if scrolling down, let it scroll out of view as normal */
  if (prevScrollpos <= currentScrollPos) {
    headerDiv.style.top = "-144px";
  } else {
    /* otherwise if we're scrolling up, fix the nav to the top */

    headerDiv.style.top = "0";
  }

  prevScrollpos = currentScrollPos;
};
