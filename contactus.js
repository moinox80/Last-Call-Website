var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-105px";
  }
  prevScrollpos = currentScrollPos;
};

//Code for nav sidebar
function openNav() {
  document.getElementById("slide-bar").style.width = "300px";
}

function closeNav() {
  document.getElementById("slide-bar").style.width = "0";
}