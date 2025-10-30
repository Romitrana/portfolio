const menuBar = document.getElementById("menuBar");
const closeNavModel = document.getElementById("closeMenuBar");
const navModel = document.getElementById("nav");
const cardE1 = document.querySelectorAll(".cards");

//handlers
menuBar.addEventListener("click", () => {
  menuBar.style.display = "none";
  navModel.style.display = "block"; //model open
  closeNavModel.style.display = "block"; //x appear
});
closeNavModel.addEventListener("click", () => {
  menuBar.style.display = "block";
  navModel.style.display = "none";
  closeNavModel.style.display = "none";
});

// scroll reveal

ScrollReveal().reveal(".revealImg", {
  // delay: 100,
  origin: "left",
  duration: 1000,
  distance: "100px", // Set a non-zero distance
  easing: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal("#about .about-content", {
  delay: 100,
  origin: "right",
  duration: 1500,
  easing: "ease-in-out",
});

ScrollReveal().reveal(".timeline", {
  delay: 100,
  origin: "top",
  duration: 1000,
  distance: "150px",
  easing: "ease",
  reset: true,
});
ScrollReveal().reveal(".skills .skills-container .left", {
  delay: 100,
  origin: "left",
  duration: 1400,
  distance: "-100px",
  easing: "ease",
});
ScrollReveal().reveal(".skills .skills-container .right", {
  delay: 100,
  origin: "right",
  duration: 1400,
  distance: "-100px",
  easing: "ease",
  // reset: true,
});
// collaps

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
