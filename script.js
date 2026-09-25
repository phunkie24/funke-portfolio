document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
function setMenuOpen(open) {
  links.classList.toggle("open", open);
  menu.setAttribute("aria-expanded", String(open));
}
menu.addEventListener("click", () => setMenuOpen(!links.classList.contains("open")));
document.querySelectorAll(".links a").forEach(a => a.addEventListener("click", () => setMenuOpen(false)));
document.addEventListener("keydown", event => {
  if (event.key === "Escape" && links.classList.contains("open")) {
    setMenuOpen(false);
    menu.focus();
  }
});
