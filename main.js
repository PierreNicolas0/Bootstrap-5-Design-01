let switcherlis = document.querySelectorAll(".switcher li");
let imgs = document.querySelectorAll(".work .row img");

switcherlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageImgs);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active", "rounded-pill");
  });
}

// Manage Imgs
function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
