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
    stars[i].src = "starGold.png";
  }
};

function setActiveStar(n) {
  activeStar = n;
}

var whiteStars = function() {
  for (let i = activeStar + 1; i < stars.length; i++) {
    stars[i].src = "starWhite.png";
  }
};

document.getElementById("starRow").addEventListener("mouseout", whiteStars);

//code for each button changing the header and paragraph with the corresponding text
function changeparagraph1() {
  document.getElementById("header").innerHTML="Members, <br> Founders, <br> Saviours.";
  document.getElementById("paragraph").innerHTML="Through the ages, man has endured the trials before him. <br><br> Forces of nature and evil tried to best him, yet, man survived, and it was through this survival that man thrived and evolved. Those shit-slinging apes learned to live and work together as one, they learned the values of friendship and family, which of them to trust and which are to fear. And it was with this in time that they evolved into the species we are today. <br><br>As the founders and leading members of the Pint Society, we believe there is still value in those prehistoric learnings, and as such we should come together as we did once before, in the safety and comfort of the modern day haven. The pub. <br><br>At the pub our species may find peace in reuniting once more to share our problems of 21st century man, aided with a crisp, cool pint at his side.";
}

function changeparagraph2() {
  document.getElementById("header").innerHTML="Ali Morrison";
  document.getElementById("paragraph").innerHTML="The Muhammad Ali of drinking pints. <br><br> They say Ali has never once been defeated by a pint put before him, it doesn't seem to matter the brand or origin, nor the taste or smell. <br><br> We have written in our history books that Ali was once challenged by a stranger whom had heard the rumours of an unquenched thirst. The stranger proposed a simple test to prove if what he had heard was true, and layed before him a hundred pints along a mighty oak wood table. Ali accepted without a word or hesitation, his throat becoming increasingly drier by the second. One by one an empty glass was slammed back onto the table, not a drop of the liquid remained, and over the course of a day (and many bathroom breaks) all one hundred pints had been drunk. <br><br>Alas the stranger had been bested, and with a smile on his face he shook Ali's hand, for he had finally met the man he was told stories of long ago. Come rain or shine you can count on Ali to finish that one last pint when no one else can.";
}

function changeparagraph3() {
  document.getElementById("header").innerHTML="Ander Moina Urrutia";
  document.getElementById("paragraph").innerHTML="Our inside source in the quest for the best pint. <br><br> Believe it or not, there is legend of a pint so carefully brewed that it would often be mistaken for liquid gold, and a taste so pure it made those of ill-intent go mad. Unfortunately, it was lost to sea long ago when the trading vessel carrying the recipe and all of the brewed cargo was sunken by pirates. Locked away in a chest, the recipe went down with the ship and its captain, and those pirates later succumbed to the lager induced madness, meaning all known wherabouts of the sunken ship were lost to time. <br><br> However, we at the pint society recently came upon a map detailing certain wherabouts of the forgotten recipe. <br><br> On our mission to recover the sacred texts we uncovered one mentioned location. Bilbao. Ander recognised it immediately... it was his very own home town.";
}

function changeparagraph4() {
  document.getElementById("header").innerHTML="Daniel Ross";
  document.getElementById("paragraph").innerHTML="Daniel likes to think he's funny with all these write-ups.";
}

function changeparagraph5() {
  document.getElementById("header").innerHTML="Lewis Carnegie";
  document.getElementById("paragraph").innerHTML="A man with no limits and nothing to lose. <br><br> According to only the closest of his friends, does he share his secrets of drink with. Some say the great Ali once learned all his worth from Lewis, and from what he heard that day shaped him to be the best he could be.  <br><br> Without Lewis as one of our key founding fathers, we wouldn't be who we are today, and it's for people like Lewis that the Pint Society has thrived as an active community for all. <br><br> To all of our up-and-coming members, take pride in following in his humble footsteps.";
}

function changeparagraph6() {
  document.getElementById("header").innerHTML="Ryan Cruickshank";
  document.getElementById("paragraph").innerHTML="A man shrouded in mystery within the Pint Society. <br><br> Despite being the most active and thoughtful member of the community, the origins of Ryan still remain unknown. We had historians look into his file and they were baffled by what they found. <br><br> Mentions of Ryan dates back centuries. At first thought to just be another mistake, a human flaw in the documentation of mankind's past, revealed to be one of the most shocking truths in history to date. <br><br> With Ryan... all is not as it seems.";
}