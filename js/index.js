const them = document.getElementById("them");
const light = document.getElementById("light");
const dark = document.getElementById("dark");
const them1 = document.getElementById("them1");
const light1 = document.getElementById("light1");
const dark1 = document.getElementById("dark1");
const closee = document.querySelector(".x_bar");
const header = document.getElementById("header");
const navItem = document.querySelector(".ste_bar");
const siteBar = document.querySelector(".site_bar_text");
const main = document.querySelector("main");
const hover = document.querySelector(".hover");
const slect = document.querySelector(".slect");

const site_bar_text = document.querySelectorAll(".sitebar");
them.addEventListener("click", () => {
  const elRoot = document.documentElement;
  let dataTheme = elRoot.getAttribute("data-theme");

  if (dataTheme === "light") {
    elRoot.setAttribute("data-theme", "dark");
    light.style.display = "block";
    dark.style.display = "none";
    light1.style.display = "block";
    dark1.style.display = "none";
  } else {
    elRoot.setAttribute("data-theme", "light");
    light.style.display = "none";
    dark.style.display = "block";
    light1.style.display = "none";
    dark1.style.display = "block";
  }
});
them1.addEventListener("click", () => {
  const elRoot = document.documentElement;
  let dataTheme = elRoot.getAttribute("data-theme");
  if (dataTheme === "light") {
    elRoot.setAttribute("data-theme", "dark");
    light1.style.display = "block";
    dark1.style.display = "none";
    light.style.display = "block";
    dark.style.display = "none";
  } else {
    elRoot.setAttribute("data-theme", "light");
    light1.style.display = "none";
    dark1.style.display = "block";
    light.style.display = "none";
    dark.style.display = "block";
  }
});

window.addEventListener("DOMContentLoaded", function () {
  (function () {
    window.addEventListener("scroll", function () {
      const nav = document.querySelector("nav");
      const nav1 = document.querySelector(".nav_hover ");
      nav1.classList.toggle("sticky", window.scrollY > 39);
      nav.classList.toggle("sticky", window.scrollY > 39);
      let up = document.querySelector(".up_btn");
      up.classList.toggle("active", window.scrollY > 250);
    });
  })();
});

const nav = document.querySelector("nav");
navItem.addEventListener("click", () => {
  navItem.classList.toggle("active");
  siteBar.classList.toggle("active");
});

closee.addEventListener("click", () => {
  header.classList.toggle("active");
  nav.classList.toString("active");
  setTimeout(() => {
    header.style.position = "absolute";
    main.style.paddingTop = "80px";
  }, 300);
});

site_bar_text.forEach((element) => {
  element.addEventListener("click", () => {
    siteBar.classList.toggle("active");
    navItem.classList.toggle("active");
  });
});
slect.addEventListener("click", () => {
  hover.classList.toggle("active");
  slect.classList.toggle("active");
});
