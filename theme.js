const app = document.getElementById("app");
const themeButton = document.getElementById("checkbox");

themeButton.addEventListener("click", switchTheme);

function getThemeOnLoad() {
  if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "dark");
  }
  if (localStorage.getItem("theme") === "dark") {
    app.classList.add("dark");
  } else {
    app.classList.add("light");
  }
}

function switchTheme() {
  let currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    localStorage.setItem("theme", "light");

    app.classList.remove("dark");
    app.classList.add("light");
  } else {
    localStorage.setItem("theme", "dark");

    app.classList.remove("light");
    app.classList.add("dark");
  }
}

getThemeOnLoad();
