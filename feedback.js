var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-100px";
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

//Code for the 5 stars used when submitting a review
var stars = document.querySelectorAll("#starRow img");
for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("mouseover", function() {
    updateActiveStar(i);
  });
  stars[i].addEventListener("click", function() {
    setActiveStar(i);
  });
}
var activeStar = -1;

var updateActiveStar = function(n) {
  for (let i = 0; i <= n; i++) {
    stars[i].src = "generalimgs/starGold.png";
  }
};

function setActiveStar(n) {
  activeStar = n;
}

var whiteStars = function() {
  for (let i = activeStar + 1; i < stars.length; i++) {
    stars[i].src = "generalimgs/starWhite.png";
  }
};

document.getElementById("starRow").addEventListener("mouseout", whiteStars);
