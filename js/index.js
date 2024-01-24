const them = document.getElementById("them");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const them1 = document.getElementById("them1");
const light1 = document.getElementById("light1");
const dark1 = document.getElementById("dark1");

them.addEventListener("click", () => {
  const elRoot = document.documentElement;
  let dataTheme = elRoot.getAttribute("data-theme");

  if (dataTheme === "light") {
    elRoot.setAttribute("data-theme", "dark");
    light.style.display = "block";
    dark.style.display = "none";
  } else {
    elRoot.setAttribute("data-theme", "light");
    light.style.display = "none";
    dark.style.display = "block";
  }
});
them1.addEventListener("click", () => {
  const elRoot = document.documentElement;
  let dataTheme = elRoot.getAttribute("data-theme");

  if (dataTheme === "light") {
    elRoot.setAttribute("data-theme", "dark");
    light1.style.display = "block";
    dark1.style.display = "none";
  } else {
    elRoot.setAttribute("data-theme", "light");
    light1.style.display = "none";
    dark1.style.display = "block";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  (function () {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      nav.classList.toggle("sticky", window.scrollY > 39);
    });
  })();
});

const navItem = document.querySelector(".ste_bar");
const siteBar = document.querySelector(".site_bar_text");
navItem.addEventListener("click", () => {
  navItem.classList.toggle("active");
  siteBar.classList.toggle("active");
});
