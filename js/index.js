// console.log(document.getElementsByClassName("sub-menu"));

// $("expanded-li-1").hover(
//   function () {
//     $(this).addClass("sub-1");
//   },
//   function () {
//     $(this).removeClass("sub-1");
//   }
// );

// sticky nav-bar
window.onscroll = function () {
  stickyHeader();
};
var nav = document.getElementById("nav-container");
var sticky = nav.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
}

// drop-down menu when hover over link
var expLinks = document.getElementsByClassName("expanded-li");
var dropLinks = document.getElementsByClassName("sub-menu");

function visible() {
  this.getElementsByClassName("sub-menu")[0].classList.add("visible");
}

function hide() {
  this.getElementsByClassName("sub-menu")[0].classList.remove("visible");
}

for (var i = 0; i < expLinks.length; i++) {
  expLinks[i].addEventListener("mouseenter", visible);
}

for (var i = 0; i < dropLinks.length; i++) {
  dropLinks[i].addEventListener("mouseleave", hide);
}

console.log(expLinks);
