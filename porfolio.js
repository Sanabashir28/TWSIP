
const switch1 = document.getElementById("switch1");
const modeicon = document.getElementById("mode-icon");
switch1.onclick = (icon) => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    modeicon.src = "light.png";
  } else {
    modeicon.src = "half-moon.png";
  }
};
var typed = new Typed(".span1", {
  strings: ["Student", "Web Developer","FRONTEND DEVELOPER","UI/ UX DESIGNER"],
  typeSpeed: 140,
  backSpeed: 80,
  loop: true,
});


