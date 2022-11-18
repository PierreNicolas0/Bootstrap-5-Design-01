let switcherlis = document.querySelectorAll(".switcher li");
let holders = document.querySelectorAll(".work .holder");

switcherlis.forEach((li) => {
  li.addEventListener("click", removeActive);
  li.addEventListener("click", manageBoxes);
});

// Remove Active Class From All Lis And Add To Current
function removeActive() {
  switcherlis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active", "rounded-pill");
  });
}

// Manage Imgs
function manageBoxes() {
  holders.forEach((holder) => {
    holder.style.display = "none";
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
  });
}
