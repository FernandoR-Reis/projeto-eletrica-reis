const html = document.documentElement;
const THEME_KEY = "reis-theme";

function applyTheme(theme) {
  html.setAttribute("data-theme", theme);
  localStorage.setItem(THEME_KEY, theme);

  document.querySelectorAll(".toggle-thumb i").forEach((icon) => {
    icon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
    icon.style.fontSize = "9px";
  });

  const label = document.getElementById("mobileThemeLabel");
  if (label) {
    label.textContent = theme === "dark" ? "Tema Escuro" : "Tema Claro";
  }
}

function toggleTheme() {
  const current = html.getAttribute("data-theme") || "dark";
  applyTheme(current === "dark" ? "light" : "dark");
}

applyTheme(localStorage.getItem(THEME_KEY) || "dark");

const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", toggleTheme);
}

const themeToggleMobile = document.getElementById("themeToggleMobile");
if (themeToggleMobile) {
  themeToggleMobile.addEventListener("click", toggleTheme);
}

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (header) {
    header.classList.toggle("scrolled", scrollY > 40);
  }
});

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  if (hamburger) {
    hamburger.classList.remove("open");
  }
  if (mobileMenu) {
    mobileMenu.classList.remove("open");
  }
}

window.closeMenu = closeMenu;

if (hamburger && mobileMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
